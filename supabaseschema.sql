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