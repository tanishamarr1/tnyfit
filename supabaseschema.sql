-- =========================================================================
-- TNY FIT — Esquema de Supabase
-- Corre esto UNA VEZ en: Supabase Dashboard → SQL Editor → New query → Run
-- =========================================================================

-- Tabla de perfiles (1 fila por usuario, vinculada a auth.users)
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text not null,
  name text not null,
  gender text,
  age int,
  weight_kg numeric,
  height_cm numeric,
  days_count int,
  body_type text,
  focus text,
  goal text,
  completed_by_date jsonb default '{}'::jsonb,
  water_by_date jsonb default '{}'::jsonb,
  weight_log jsonb default '[]'::jsonb,
  substitutions jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Row Level Security: cada usuario SOLO puede leer/escribir su propia fila.
-- Esto reemplaza por completo la necesidad de manejar contraseñas o
-- permisos a mano: Supabase Auth + estas políticas lo hacen server-side.
alter table public.profiles enable row level security;

create policy "select_own_profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "insert_own_profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "update_own_profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Mantiene updated_at al día automáticamente
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_profiles_updated_at on public.profiles;
create trigger trg_profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

  -- =========================================================================
-- TNY FIT — Esquema de Supabase
-- Corre esto UNA VEZ en: Supabase Dashboard → SQL Editor → New query → Run
-- =========================================================================

-- Tabla de perfiles (1 fila por usuario, vinculada a auth.users)
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text not null,
  name text not null,
  gender text,
  age int,
  weight_kg numeric,
  height_cm numeric,
  days_count int,
  body_type text,
  focus text,
  goal text,
  completed_by_date jsonb default '{}'::jsonb,
  water_by_date jsonb default '{}'::jsonb,
  weight_log jsonb default '[]'::jsonb,
  substitutions jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Row Level Security: cada usuario SOLO puede leer/escribir su propia fila.
-- Esto reemplaza por completo la necesidad de manejar contraseñas o
-- permisos a mano: Supabase Auth + estas políticas lo hacen server-side.
alter table public.profiles enable row level security;

create policy "select_own_profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "insert_own_profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "update_own_profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Mantiene updated_at al día automáticamente
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_profiles_updated_at on public.profiles;
create trigger trg_profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();
-- =========================================================================
-- TNY FIT — Migración: avatar + recordatorios (correr en SQL Editor)
-- =========================================================================

alter table public.profiles add column if not exists avatar_url text;
alter table public.profiles add column if not exists reminder_enabled boolean default false;
alter table public.profiles add column if not exists reminder_time text default '19:00';

-- Bucket público para fotos de perfil
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

-- Cualquiera puede LEER avatares (bucket público), pero solo el dueño puede
-- subir/actualizar/borrar el suyo. Cada archivo se guarda en una carpeta
-- con el nombre del user id: avatars/<user_id>/foto.jpg
create policy "avatar_public_read"
  on storage.objects for select
  using (bucket_id = 'avatars');

create policy "avatar_owner_insert"
  on storage.objects for insert
  with check (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);

create policy "avatar_owner_update"
  on storage.objects for update
  using (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);

create policy "avatar_owner_delete"
  on storage.objects for delete
  using (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);

  -- ============================================================================
-- TNY FIT - Migración desde el esquema anterior
-- ============================================================================

-- Agregar la nueva columna rest_days si no existe
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS rest_days INTEGER[] DEFAULT '{}';

-- Agregar columnas de recordatorios si no existen
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS reminder_enabled BOOLEAN DEFAULT FALSE;

ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS reminder_time TEXT DEFAULT '19:00';

-- Crear o reemplazar la función para actualizar updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Eliminar el trigger anterior si existe
DROP TRIGGER IF EXISTS profiles_updated_at ON public.profiles;

-- Crear nuevamente el trigger
CREATE TRIGGER profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at();

-- Habilitar RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Eliminar políticas si ya existen
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;

-- Crear políticas
CREATE POLICY "Users can view own profile"
ON public.profiles
FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON public.profiles
FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- Eliminar la vista si existe
DROP VIEW IF EXISTS public.user_stats;

-- Crear la vista nuevamente
CREATE VIEW public.user_stats AS
SELECT
    id,
    name,
    email,
    gender,
    age,
    weight_kg,
    height_cm,
    days_count,
    body_type,
    focus,
    goal,
    avatar_url,
    array_length(rest_days, 1) AS rest_days_count,
    jsonb_array_length(weight_log) AS weight_log_count,
    created_at,
    updated_at
FROM public.profiles;

-- ============================================================================
-- TNY FIT — Migración: diario de comidas + rutina personalizada
-- Corre esto UNA VEZ en: Supabase Dashboard → SQL Editor → New query → Run
-- ============================================================================

-- Diario de comidas del usuario, agrupado por fecha (YYYY-MM-DD):
-- { "2026-08-14": [ { id, name, brand, qty, kcal, p, c, g }, ... ] }
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS food_log_by_date JSONB DEFAULT '{}'::jsonb;

-- Rutina personalizada escrita a mano por el usuario, por día de la semana.
-- Si un día tiene entradas aquí, se usa en vez de la rutina generada:
-- { "Lunes": [ { id, t, d } ], "Martes": [...] , ... }
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS custom_routine JSONB DEFAULT '{}'::jsonb;

-- ============================================================================
-- NOTA IMPORTANTE — Login con Google (no se hace por SQL):
-- Ve a Supabase Dashboard → Authentication → Providers → Google, actívalo
-- y agrega tu Client ID / Client Secret de Google Cloud Console.
-- En "Authentication → URL Configuration" agrega la URL donde corre tu app
-- (ej. https://tudominio.com o http://localhost:xxxx) tanto en "Site URL"
-- como en "Redirect URLs".
-- ============================================================================