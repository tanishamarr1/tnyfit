// =========================================================================
// TNY FIT — Motor de aplicación
// =========================================================================

// ---- BANCO DE EJERCICIOS CLASIFICADOS POR ENFOQUE (con estimación de kcal 'k') ----
const exerciseRepository = {
    inferior: {
        DiaA: [
            { id: 'inf1', t: 'Sentadilla Goblet Profunda', c: 'Cuádriceps/Glúteos', d: '4 x 10-12 reps', k: 55 },
            { id: 'inf2', t: 'Hip Thrust con Barra con Pausa', c: 'Glúteo Mayor', d: '4 x 12 reps (2s contracción)', k: 60 },
            { id: 'inf3', t: 'Peso Muerto Rumano con Mancuerna', c: 'Isquiotibiales', d: '4 x 10 reps', k: 55 },
            { id: 'inf4', t: 'Prensa Inclinada a Una Sola Pierna', c: 'Tren Inferior', d: '3 x 12 reps por lado', k: 50 },
            { id: 'inf5', t: 'Abducciones en Polea o Máquina', c: 'Glúteo Medio', d: '3 x 15 reps', k: 30 },
            { id: 'inf6', t: 'Elevación de Pantorrillas Sentado', c: 'Sóleo', d: '3 x 15 reps', k: 25 }
        ],
        DiaB: [
            { id: 'inf7', t: 'Zancadas Búlgaras Enfoque Glúteo', c: 'Glúteos/Isquios', d: '3 x 10 reps por pierna', k: 50 },
            { id: 'inf8', t: 'Curl de Piernas Acostado', c: 'Isquiotibiales', d: '4 x 12 reps', k: 40 },
            { id: 'inf9', t: 'Extensiones de Cuádriceps', c: 'Cuádriceps Aislando', d: '3 x 15 reps Drop-set', k: 40 },
            { id: 'inf10', t: 'Patadas de Glúteo en Polea Baja', c: 'Glúteo Superior', d: '4 x 12 reps', k: 35 },
            { id: 'inf11', t: 'Plancha Abdominal de Estabilidad', c: 'Core', d: '3 x 1 minuto', k: 25 }
        ]
    },
    superior: {
        DiaA: [
            { id: 'sup1', t: 'Press de Banca Plano con Barra', c: 'Pectoral', d: '4 x 8 reps', k: 55 },
            { id: 'sup2', t: 'Remo con Barra en Pronación', c: 'Dorsales/Espalda', d: '4 x 8 reps', k: 55 },
            { id: 'sup3', t: 'Press Militar con Mancuernas', c: 'Hombro Anterior', d: '3 x 10 reps', k: 45 },
            { id: 'sup4', t: 'Jalón al Pecho Agarre Neutro', c: 'Amplitud Dorsal', d: '3 x 12 reps', k: 40 },
            { id: 'sup5', t: 'Elevaciones Laterales Estrictas', c: 'Hombro Medio', d: '4 x 12-15 reps', k: 30 },
            { id: 'sup6', t: 'Fondos en Paralelas para Tríceps', c: 'Brazos', d: '3 x max reps', k: 40 }
        ],
        DiaB: [
            { id: 'sup7', t: 'Press Inclinado con Mancuernas', c: 'Pectoral Superior', d: '4 x 10 reps', k: 50 },
            { id: 'sup8', t: 'Remo Gironda en Polea Baja', c: 'Densidad de Espalda', d: '4 x 10 reps', k: 45 },
            { id: 'sup9', t: 'Pájaros con Mancuerna (Deltoides Post)', c: 'Hombro Posterior', d: '3 x 15 reps', k: 30 },
            { id: 'sup10', t: 'Curl de Bíceps Alterno con Supinación', c: 'Bíceps', d: '3 x 12 reps', k: 30 },
            { id: 'sup11', t: 'Extensiones de Tríceps sobre la Cabeza', c: 'Tríceps Cabeza Larga', d: '3 x 12 reps', k: 30 }
        ]
    },
    balanceado: {
        DiaA: [
            { id: 'bal1', t: 'Sentadilla Libre con Barra', c: 'Full Body / Piernas', d: '4 x 8 reps', k: 60 },
            { id: 'bal2', t: 'Press de Banca con Mancuernas', c: 'Empuje Torso', d: '4 x 10 reps', k: 50 },
            { id: 'bal3', t: 'Remo con Mancuerna a una Mano', c: 'Tracción Espalda', d: '3 x 10 reps', k: 45 },
            { id: 'bal4', t: 'Hip Thrust con Mancuerna', c: 'Glúteos/Cadena Post', d: '4 x 12 reps', k: 55 },
            { id: 'bal5', t: 'Elevaciones Laterales con Mancuerna', c: 'Hombros', d: '3 x 12 reps', k: 30 },
            { id: 'bal6', t: 'Core de Abdominales en V', c: 'Abdomen', d: '3 x 15 reps', k: 30 }
        ],
        DiaB: [
            { id: 'bal7', t: 'Peso Muerto Rumano Barra', c: 'Isquios/Glúteos', d: '4 x 8 reps', k: 55 },
            { id: 'bal8', t: 'Press Militar con Barra de Pie', c: 'Hombros/Core', d: '3 x 8 reps', k: 45 },
            { id: 'bal9', t: 'Jalón Al Pecho Abierto', c: 'Espalda Alta', d: '4 x 10 reps', k: 45 },
            { id: 'bal10', t: 'Zancadas Inversas Dinámicas', c: 'Piernas completas', d: '3 x 12 pasos por pierna', k: 45 },
            { id: 'bal11', t: 'Curl de Bíceps + Copa Tríceps Combo', c: 'Brazos', d: '3 x 12 reps', k: 30 }
        ]
    },
    comun: {
        hiit: [
            { id: 'hit1', t: 'Burpees Militares explosivos', c: 'Metabólico', d: '4 x 45 segundos', k: 80 },
            { id: 'hit2', t: 'Kettlebell Swings Fluidos', c: 'Cadena Posterior', d: '4 x 20 reps', k: 70 },
            { id: 'hit3', t: 'Mountain Climbers Rápidos', c: 'Core/Cardio', d: '4 x 45 segundos', k: 60 },
            { id: 'hit4', t: 'Saltos al Cajón o Sentadilla Salto', c: 'Potencia', d: '3 x 12 reps', k: 65 },
            { id: 'hit5', t: 'Plancha Abdominal Dinámica', c: 'Core', d: '3 x 1 minuto', k: 35 }
        ]
    }
};

// Plantillas de comidas por somatotipo (el contenido varía; las kcal/macros son calculadas en vivo)
const mealTemplates = {
    Ectomorfo: {
        loss: [
            { t: 'Desayuno', d: 'Avena con leche entera, plátano y un puñado de nueces.' },
            { t: 'Almuerzo', d: 'Pechuga de pollo, arroz integral y aguacate.' },
            { t: 'Merienda', d: 'Batido de proteína con leche entera y crema de maní.' },
            { t: 'Cena', d: 'Salmón al horno con patata y ensalada de aceite de oliva.' }
        ],
        gain: [
            { t: 'Desayuno', d: 'Huevos enteros, avena con leche entera y plátano.' },
            { t: 'Almuerzo', d: 'Res magra, arroz blanco abundante y aguacate.' },
            { t: 'Merienda', d: 'Batido de proteína + pan integral con crema de maní.' },
            { t: 'Cena', d: 'Pasta integral con pollo y aceite de oliva extra.' }
        ]
    },
    Mesomorfo: {
        loss: [
            { t: 'Desayuno', d: 'Claras de huevo revueltas con avena y fresas.' },
            { t: 'Almuerzo', d: 'Pechuga de pollo, quinoa y vegetales al vapor.' },
            { t: 'Merienda', d: 'Yogur griego natural con almendras.' },
            { t: 'Cena', d: 'Merluza o atún con ensalada de hojas verdes.' }
        ],
        gain: [
            { t: 'Desayuno', d: 'Huevos enteros con avena en hojuelas y plátano.' },
            { t: 'Almuerzo', d: 'Pollo o res magra, arroz blanco y aguacate.' },
            { t: 'Merienda', d: 'Batido proteico con pan integral y crema de maní.' },
            { t: 'Cena', d: 'Salmón con patata al horno y ensalada verde.' }
        ]
    },
    Endomorfo: {
        loss: [
            { t: 'Desayuno', d: 'Claras de huevo con espinaca y medio aguacate.' },
            { t: 'Almuerzo', d: 'Pechuga de pollo con abundantes vegetales y poca quinoa.' },
            { t: 'Merienda', d: 'Yogur griego 0% con canela, sin fruta añadida.' },
            { t: 'Cena', d: 'Pescado blanco al vapor con ensalada grande.' }
        ],
        gain: [
            { t: 'Desayuno', d: 'Huevos enteros con avena moderada y arándanos.' },
            { t: 'Almuerzo', d: 'Res magra o pollo con arroz moderado y vegetales.' },
            { t: 'Merienda', d: 'Batido proteico con leche descremada.' },
            { t: 'Cena', d: 'Salmón con vegetales al vapor, carbohidrato mínimo.' }
        ]
    }
};

// ---- ESTADO GLOBAL ----
let sessionState = null;
let deferredInstallPrompt = null;

const daysOfWeekList = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const currentDayName = daysOfWeekList[new Date().getDay()];

// =========================================================================
// UTILIDADES
// =========================================================================

function todayKey() {
    return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const colors = {
        success: 'border-brandPurple/40 text-brandPurple',
        error: 'border-red-500/40 text-red-400',
        info: 'border-sky-500/40 text-sky-400'
    };
    const icon = { success: 'check-circle-2', error: 'alert-circle', info: 'info' }[type] || 'info';
    const el = document.createElement('div');
    el.className = `toast-anim pointer-events-auto flex items-center gap-2.5 bg-cardBg border ${colors[type] || colors.info} rounded-2xl px-4 py-3 shadow-2xl max-w-sm w-full sm:w-auto`;
    el.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4 shrink-0"></i><span class="text-xs font-medium text-neutral-200">${message}</span>`;
    container.appendChild(el);
    lucide.createIcons();
    setTimeout(() => {
        el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        el.style.opacity = '0';
        el.style.transform = 'translateY(8px)';
        setTimeout(() => el.remove(), 300);
    }, 3200);
}

// =========================================================================
// SUPABASE — cliente + capa de datos (reemplaza IndexedDB)
// =========================================================================

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Convierte una fila de Postgres (snake_case) al shape que usa la app (camelCase)
function profileRowToSessionState(row) {
    return {
        id: row.id,
        email: row.email,
        name: row.name,
        gender: row.gender,
        age: row.age,
        weightKg: row.weight_kg,
        heightCm: row.height_cm,
        daysCount: row.days_count,
        bodyType: row.body_type,
        focus: row.focus,
        goal: row.goal,
        completedByDate: row.completed_by_date || {},
        waterByDate: row.water_by_date || {},
        weightLog: row.weight_log || [],
        substitutions: row.substitutions || {}
    };
}

// Convierte el sessionState de la app de vuelta al shape de la tabla Postgres
function sessionStateToProfileRow(state) {
    return {
        id: state.id,
        email: state.email,
        name: state.name,
        gender: state.gender,
        age: state.age,
        weight_kg: state.weightKg,
        height_cm: state.heightCm,
        days_count: state.daysCount,
        body_type: state.bodyType,
        focus: state.focus,
        goal: state.goal,
        completed_by_date: state.completedByDate,
        water_by_date: state.waterByDate,
        weight_log: state.weightLog,
        substitutions: state.substitutions
    };
}

async function fetchProfile(userId) {
    const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
    if (error) throw error;
    return data ? profileRowToSessionState(data) : null;
}

async function insertProfile(state) {
    const { error } = await supabaseClient.from('profiles').insert(sessionStateToProfileRow(state));
    if (error) throw error;
}

// ---- Perfil pendiente (para cuando la confirmación de email está activada) ----
// Si Supabase exige confirmar el correo, signUp() no da sesión todavía, así que
// RLS bloquearía el insert. Guardamos los datos del wizard en localStorage y los
// insertamos recién cuando exista una sesión real (primer login tras confirmar).
const PENDING_PROFILE_KEY = 'tnyfit_pending_profile';

function savePendingProfile(profile) {
    localStorage.setItem(PENDING_PROFILE_KEY, JSON.stringify(profile));
}

function getPendingProfile() {
    const raw = localStorage.getItem(PENDING_PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
}

function clearPendingProfile() {
    localStorage.removeItem(PENDING_PROFILE_KEY);
}

// Inserta el perfil pendiente (si hay uno) usando el id real que Supabase Auth
// asignó a esta sesión ya confirmada/logueada.
async function insertPendingProfileIfAny(session) {
    const pending = getPendingProfile();
    if (!pending) return null;

    const profileToInsert = { ...pending, id: session.user.id, email: session.user.email };
    await insertProfile(profileToInsert);
    clearPendingProfile();
    return profileToInsert;
}

async function saveSession() {
    if (!sessionState) return;
    try {
        const { error } = await supabaseClient
            .from('profiles')
            .update(sessionStateToProfileRow(sessionState))
            .eq('id', sessionState.id);
        if (error) throw error;
    } catch (err) {
        console.error(err);
        showToast('No se pudo sincronizar con la nube. Revisa tu conexión.', 'error');
    }
}

// =========================================================================
// INICIALIZACIÓN
// =========================================================================

document.addEventListener('DOMContentLoaded', async () => {
    const todayStr = new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
    document.getElementById('current-date-string').textContent = todayStr.toUpperCase();

    await checkActiveSession();

    registerServiceWorker();
    lucide.createIcons();
});

// Mantiene la sesión sincronizada si Supabase la refresca/expira en otra pestaña
supabaseClient.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_OUT') {
        sessionState = null;
    }
    if (event === 'PASSWORD_RECOVERY') {
        // El usuario volvió del enlace de "olvidé mi contraseña". Supabase ya
        // creó una sesión temporal válida solo para poder llamar updateUser().
        showRecoveryScreen();
    }
});

function showRecoveryScreen() {
    document.getElementById('auth-loading')?.classList.add('hidden');
    document.getElementById('screen-dashboard').classList.add('hidden');
    document.getElementById('screen-login').classList.remove('hidden');
    document.getElementById('panel-signin').classList.add('hidden');
    document.getElementById('panel-register').classList.add('hidden');
    document.getElementById('panel-recovery').classList.remove('hidden');
}

const recoveryForm = document.getElementById('recovery-form');
recoveryForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newPassword = document.getElementById('recovery-password').value;
    const confirmPassword = document.getElementById('recovery-password-confirm').value;

    if (newPassword.length < 6) {
        showToast('La contraseña debe tener al menos 6 caracteres.', 'error');
        return;
    }
    if (newPassword !== confirmPassword) {
        showToast('Las contraseñas no coinciden.', 'error');
        return;
    }

    try {
        const { error } = await supabaseClient.auth.updateUser({ password: newPassword });
        if (error) throw error;
        recoveryForm.reset();
        showToast('Contraseña actualizada. Ya puedes usarla para iniciar sesión.', 'success');
        document.getElementById('panel-recovery').classList.add('hidden');
        goToSignin();
    } catch (err) {
        console.error(err);
        showToast(err.message || 'No se pudo actualizar la contraseña.', 'error');
    }
});

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const btn = document.getElementById('pwa-install-btn');
    if (btn) btn.classList.remove('hidden');
});

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => { /* silencioso: opcional en dev */ });
    }
}

async function triggerInstall() {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    document.getElementById('pwa-install-btn').classList.add('hidden');
}

// =========================================================================
// NAVEGACIÓN DE TABS
// =========================================================================

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    const selectedTab = document.getElementById(`tab-${tabId}`);
    if (selectedTab) selectedTab.classList.add('active');

    document.querySelectorAll('.nav-btn-sidebar').forEach(btn => {
        btn.className = btn.getAttribute('data-tab-target') === tabId
            ? 'nav-btn-sidebar w-full flex items-center gap-3 px-4 py-3 rounded-xl text-brandPurple bg-brandPurple/5 font-medium text-xs uppercase tracking-wider transition-all text-left'
            : 'nav-btn-sidebar w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white font-medium text-xs uppercase tracking-wider transition-all text-left';
    });
    document.querySelectorAll('.nav-btn-mobile').forEach(btn => {
        btn.className = btn.getAttribute('data-tab-mobile-target') === tabId
            ? 'nav-btn-mobile flex flex-col items-center gap-1 text-brandPurple transition-all'
            : 'nav-btn-mobile flex flex-col items-center gap-1 text-neutral-500 hover:text-neutral-300 transition-all';
    });
}

// =========================================================================
// WIZARD DE REGISTRO
// =========================================================================

let wizardStep = 1;
const WIZARD_TOTAL_STEPS = 4;

function goToRegister() {
    document.getElementById('panel-signin').classList.add('hidden');
    document.getElementById('panel-register').classList.remove('hidden');
    wizardStep = 1;
    renderWizardStep();
}

function goToSignin() {
    document.getElementById('panel-register').classList.add('hidden');
    document.getElementById('panel-signin').classList.remove('hidden');
}

function renderWizardStep() {
    document.querySelectorAll('.wizard-step').forEach(step => {
        step.classList.toggle('active', parseInt(step.getAttribute('data-step')) === wizardStep);
    });
    document.querySelectorAll('.wizard-dot').forEach((dot, idx) => {
        const stepNum = idx + 1;
        dot.className = stepNum === wizardStep
            ? 'wizard-dot h-1.5 rounded-full bg-brandPurple w-8 transition-all'
            : stepNum < wizardStep
                ? 'wizard-dot h-1.5 rounded-full bg-brandPurple/40 w-4 transition-all'
                : 'wizard-dot h-1.5 rounded-full bg-neutral-800 w-4 transition-all';
    });

    document.getElementById('wizard-back-btn').classList.toggle('hidden', wizardStep === 1);
    document.getElementById('wizard-next-btn').classList.toggle('hidden', wizardStep === WIZARD_TOTAL_STEPS);
    const submitBtn = document.getElementById('wizard-submit-btn');
    if (wizardStep === WIZARD_TOTAL_STEPS) {
        submitBtn.classList.remove('hidden');
        submitBtn.classList.add('flex');
    } else {
        submitBtn.classList.add('hidden');
        submitBtn.classList.remove('flex');
    }
}

function validateWizardStep(step) {
    if (step === 1) {
        const name = document.getElementById('user-name').value.trim();
        const email = document.getElementById('user-email').value.trim();
        const pass = document.getElementById('user-password').value;
        const confirm = document.getElementById('user-password-confirm').value;
        if (!name) { showToast('Ingresa tu nombre completo.', 'error'); return false; }
        if (!email || !email.includes('@')) { showToast('Ingresa un correo válido.', 'error'); return false; }
        if (pass.length < 6) { showToast('La contraseña debe tener al menos 6 caracteres.', 'error'); return false; }
        if (pass !== confirm) { showToast('Las contraseñas no coinciden.', 'error'); return false; }
        return true;
    }
    if (step === 2) {
        const age = document.getElementById('user-age').value;
        const weight = document.getElementById('user-weight').value;
        const height = document.getElementById('user-height').value;
        if (!age || !weight || !height) { showToast('Completa edad, peso y altura para calcular tus calorías reales.', 'error'); return false; }
        return true;
    }
    return true;
}

function wizardNext() {
    if (!validateWizardStep(wizardStep)) return;
    if (wizardStep < WIZARD_TOTAL_STEPS) {
        wizardStep++;
        renderWizardStep();
    }
}

function wizardBack() {
    if (wizardStep > 1) {
        wizardStep--;
        renderWizardStep();
    }
}

// =========================================================================
// AUTENTICACIÓN
// =========================================================================

const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateWizardStep(1) || !validateWizardStep(2)) return;

    const email = document.getElementById('user-email').value.trim().toLowerCase();
    const password = document.getElementById('user-password').value;
    const submitBtn = document.getElementById('wizard-submit-btn');
    submitBtn.disabled = true;

    try {
        const { data, error } = await supabaseClient.auth.signUp({ email, password });
        if (error) throw error;

        const newProfile = {
            id: data.user.id,
            email,
            name: document.getElementById('user-name').value.trim(),
            gender: document.getElementById('user-gender').value,
            age: parseInt(document.getElementById('user-age').value),
            weightKg: parseFloat(document.getElementById('user-weight').value),
            heightCm: parseFloat(document.getElementById('user-height').value),
            daysCount: parseInt(document.getElementById('training-days-count').value),
            bodyType: document.getElementById('body-type').value,
            focus: document.getElementById('training-focus').value,
            goal: document.querySelector('input[name="fitness-goal"]:checked').value,
            completedByDate: {},
            waterByDate: {},
            weightLog: [],
            substitutions: {}
        };
        newProfile.weightLog.push({ date: todayKey(), kg: newProfile.weightKg });

        if (data.session) {
            // Confirmación de email desactivada en el proyecto: ya hay sesión,
            // así que auth.uid() coincide y el insert pasa la política de RLS.
            await insertProfile(newProfile);
            registerForm.reset();
            wizardStep = 1;
            showToast(`¡Bienvenido, ${newProfile.name.split(' ')[0]}! Tu ecosistema fue generado.`, 'success');
            await checkActiveSession();
        } else {
            // Confirmación de email activada: todavía NO hay sesión, así que
            // insertar ahora violaría RLS (auth.uid() sería null). Guardamos
            // el perfil localmente y lo insertamos en el primer login real.
            savePendingProfile(newProfile);
            registerForm.reset();
            wizardStep = 1;
            showToast('Cuenta creada. Revisa tu correo para confirmarla antes de iniciar sesión.', 'info');
            goToSignin();
        }
    } catch (err) {
        console.error(err);
        showToast(err.message || 'No se pudo crear tu perfil. Intenta de nuevo.', 'error');
    } finally {
        submitBtn.disabled = false;
    }
});

const signinForm = document.getElementById('signin-form');
signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email').value.trim().toLowerCase();
    const password = document.getElementById('signin-password').value;

    try {
        const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        signinForm.reset();
        await checkActiveSession();
    } catch (err) {
        console.error(err);
        showToast('Correo o contraseña incorrectos.', 'error');
    }
});

async function handleForgotPassword() {
    const email = document.getElementById('signin-email').value.trim().toLowerCase();
    if (!email || !email.includes('@')) {
        showToast('Escribe tu correo arriba primero.', 'error');
        return;
    }
    try {
        const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin + window.location.pathname
        });
        if (error) throw error;
        showToast('Te enviamos un enlace para restablecer tu contraseña.', 'success');
    } catch (err) {
        console.error(err);
        showToast('No se pudo enviar el correo de recuperación.', 'error');
    }
}

async function checkActiveSession() {
    const loadingScreen = document.getElementById('auth-loading');
    const { data: { session } } = await supabaseClient.auth.getSession();

    if (!session) {
        sessionState = null;
        document.getElementById('screen-dashboard').classList.add('hidden');
        document.getElementById('screen-login').classList.remove('hidden');
        loadingScreen.classList.add('hidden');
        return;
    }

    try {
        let profile = await fetchProfile(session.user.id);

        if (!profile) {
            // Sesión válida pero sin fila de perfil todavía: probablemente es el
            // primer login tras confirmar el correo. Si guardamos un perfil
            // pendiente durante el registro, lo insertamos ahora que sí hay sesión.
            const inserted = await insertPendingProfileIfAny(session);
            if (inserted) {
                profile = await fetchProfile(session.user.id);
            }
        }

        if (!profile) {
            // Realmente no hay perfil ni pendiente que insertar → cerrar sesión.
            await logout();
            return;
        }
        sessionState = profile;
        buildUserWorkspace();
    } catch (err) {
        console.error(err);
        showToast('No se pudo cargar tu perfil desde la nube.', 'error');
    } finally {
        loadingScreen.classList.add('hidden');
    }
}

async function logout() {
    await supabaseClient.auth.signOut();
    sessionState = null;
    document.getElementById('screen-dashboard').classList.add('opacity-0');
    setTimeout(() => {
        document.getElementById('screen-dashboard').classList.add('hidden');
        document.getElementById('screen-login').classList.remove('hidden');
        goToSignin();
        switchTab('inicio');
        setTimeout(() => { document.getElementById('screen-login').classList.remove('opacity-0'); }, 50);
    }, 400);
}

// =========================================================================
// CÁLCULO BIOMÉTRICO REAL (Mifflin-St Jeor)
// =========================================================================

function computeNutrition(user) {
    const { weightKg: w, heightCm: h, age, gender, daysCount, goal } = user;

    let bmr;
    if (gender === 'Hombre') bmr = 10 * w + 6.25 * h - 5 * age + 5;
    else if (gender === 'Mujer') bmr = 10 * w + 6.25 * h - 5 * age - 161;
    else bmr = 10 * w + 6.25 * h - 5 * age - 78; // promedio entre fórmulas

    const activityMultiplier = { 3: 1.375, 4: 1.465, 5: 1.55 }[daysCount] || 1.45;
    let tdee = bmr * activityMultiplier;

    let targetKcal = goal === 'loss' ? tdee - 450 : tdee + 300;
    targetKcal = Math.max(targetKcal, 1200);

    const proteinPerKg = goal === 'loss' ? 2.2 : 2.0;
    const proteinG = Math.round(proteinPerKg * w);
    const fatG = Math.round((targetKcal * 0.27) / 9);
    const proteinKcal = proteinG * 4;
    const fatKcal = fatG * 9;
    const carbsG = Math.max(Math.round((targetKcal - proteinKcal - fatKcal) / 4), 0);

    return {
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        targetKcal: Math.round(targetKcal),
        macros: { p: proteinG, c: carbsG, g: fatG }
    };
}

// =========================================================================
// GENERADOR DE RUTINA + SUSTITUCIÓN DE EJERCICIOS
// =========================================================================

function dynamicRoutineGenerator(days, focus) {
    const repo = exerciseRepository[focus] || exerciseRepository.balanceado;
    const restDay = () => ({ focus: 'Descanso', exercises: [{ id: 'rest', t: 'Recuperación Muscular', c: 'Descanso', d: 'Absoluto', k: 0 }] });

    const structure = {
        Lunes: restDay(), Martes: restDay(), Miércoles: restDay(),
        Jueves: restDay(), Viernes: restDay(), Sábado: restDay(), Domingo: restDay()
    };

    if (days === 3) {
        structure.Lunes = { focus: 'Bloque Enfoque A', exercises: repo.DiaA };
        structure.Miércoles = { focus: 'Bloque Enfoque B', exercises: repo.DiaB };
        structure.Viernes = { focus: 'Estabilidad / HIIT', exercises: exerciseRepository.comun.hiit };
    } else if (days === 4) {
        structure.Lunes = { focus: 'Acondicionamiento Principal A', exercises: repo.DiaA };
        structure.Martes = { focus: 'Bloque de Potencia HIIT', exercises: exerciseRepository.comun.hiit };
        structure.Jueves = { focus: 'Acondicionamiento Principal B', exercises: repo.DiaB };
        structure.Viernes = { focus: 'Hipertrofia Estricta', exercises: repo.DiaA.slice(0, 5) };
    } else {
        structure.Lunes = { focus: 'Bloque de Desarrollo I', exercises: repo.DiaA };
        structure.Martes = { focus: 'Bloque de Desarrollo II', exercises: repo.DiaB };
        structure.Miércoles = { focus: 'Quema / HIIT Complejo', exercises: exerciseRepository.comun.hiit };
        structure.Viernes = { focus: 'Volumen y Aislamiento', exercises: repo.DiaA.slice(0, 5) };
        structure.Sábado = { focus: 'Remate / Definición', exercises: repo.DiaB.slice(0, 5) };
    }
    return structure;
}

function getSubstitutionPool(focus) {
    const repo = exerciseRepository[focus] || exerciseRepository.balanceado;
    return [...repo.DiaA, ...repo.DiaB, ...exerciseRepository.comun.hiit];
}

function applySubstitutions(exercises) {
    return exercises.map(ex => {
        if (ex.id === 'rest') return ex;
        const subId = sessionState.substitutions[ex.id];
        if (!subId) return ex;
        const pool = getSubstitutionPool(sessionState.focus);
        const sub = pool.find(p => p.id === subId);
        return sub ? { ...sub, originalId: ex.id } : ex;
    });
}

async function substituteExercise(exerciseId) {
    const pool = getSubstitutionPool(sessionState.focus);
    const currentSubId = sessionState.substitutions[exerciseId] || exerciseId;
    const candidates = pool.filter(p => p.id !== currentSubId && p.id !== exerciseId);
    if (candidates.length === 0) {
        showToast('No hay alternativas disponibles para este ejercicio.', 'info');
        return;
    }
    const choice = candidates[Math.floor(Math.random() * candidates.length)];
    sessionState.substitutions[exerciseId] = choice.id;
    await saveSession();
    showToast(`Reemplazado por "${choice.t}".`, 'success');
    buildUserWorkspace();
}

async function resetSubstitution(originalId) {
    delete sessionState.substitutions[originalId];
    await saveSession();
    buildUserWorkspace();
}

// =========================================================================
// PROGRESO DIARIO (con fecha, corrige el bug de arrastre entre semanas)
// =========================================================================

async function toggleExerciseStatus(effectiveId, originalId) {
    const dateKey = todayKey();
    if (!sessionState.completedByDate[dateKey]) sessionState.completedByDate[dateKey] = [];
    const list = sessionState.completedByDate[dateKey];
    const trackId = originalId || effectiveId;

    const index = list.indexOf(trackId);
    if (index > -1) list.splice(index, 1);
    else list.push(trackId);

    await saveSession();
    renderDailyRoutine();
    renderWeeklyCalendar();
}

function renderDailyRoutine() {
    const generatedPlan = dynamicRoutineGenerator(sessionState.daysCount, sessionState.focus);
    const todayData = generatedPlan[currentDayName] || generatedPlan['Lunes'];
    const displayExercises = applySubstitutions(todayData.exercises);

    document.getElementById('current-day-routine-title').textContent = `Enfoque: ${todayData.focus}`;
    document.getElementById('routine-focus-badge').textContent = currentDayName.toUpperCase();

    const dateKey = todayKey();
    const completedToday = sessionState.completedByDate[dateKey] || [];

    const dailyContainer = document.getElementById('daily-routine-container');
    dailyContainer.innerHTML = '';

    displayExercises.forEach(ex => {
        const originalId = ex.originalId || ex.id;
        const isCompleted = completedToday.includes(originalId);
        const isRest = ex.id === 'rest';
        const wasSubstituted = !!ex.originalId;

        dailyContainer.innerHTML += `
            <div id="exercise-${originalId}" class="flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${isCompleted ? 'border-brandPurple/30 bg-brandPurple/[0.01]' : 'border-neutral-800 bg-cardBg'}">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center border border-neutral-800 shrink-0">
                        <i data-lucide="${isCompleted ? 'check' : 'dumbbell'}" class="w-4 h-4 ${isCompleted ? 'text-brandPurple' : 'text-neutral-400'}"></i>
                    </div>
                    <div class="min-w-0">
                        <h4 class="text-xs font-semibold truncate ${isCompleted ? 'text-neutral-500 line-through' : 'text-white'}">${ex.t}</h4>
                        <p class="text-[10px] text-neutral-500 truncate">${ex.c} &bull; ${ex.d}${wasSubstituted ? ' · <span class="text-brandPurple">sustituido</span>' : ''}</p>
                    </div>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                    ${!isRest ? `<button onclick="substituteExercise('${originalId}')" title="Cambiar ejercicio" class="w-7 h-7 rounded-full border border-neutral-800 text-neutral-500 hover:text-brandPurple hover:border-brandPurple/50 flex items-center justify-center transition-all">
                        <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
                    </button>` : ''}
                    <button onclick="toggleExerciseStatus('${ex.id}','${originalId}')" ${isRest ? 'disabled' : ''} class="w-6 h-6 rounded-full border flex items-center justify-center transition-all ${isCompleted ? 'bg-brandPurple border-brandPurple text-white' : 'border-neutral-700 text-transparent'} ${isRest ? 'opacity-30 cursor-not-allowed' : ''}">
                        <i data-lucide="check" class="w-3 h-3 stroke-[3]"></i>
                    </button>
                </div>
            </div>
        `;
    });

    updateProgressBars(todayData);
    lucide.createIcons();
}

function updateProgressBars(todayData) {
    const todayIds = todayData.exercises.map(e => e.id);
    const total = todayIds.filter(id => id !== 'rest').length;
    const dateKey = todayKey();
    const completedToday = (sessionState.completedByDate[dateKey] || []).filter(id => todayIds.includes(id)).length;

    if (total === 0) {
        document.getElementById('progress-percentage').textContent = 'Descanso';
        document.getElementById('progress-bar-fill').style.width = '100%';
        document.getElementById('kcal-display').innerHTML = `0 <span class="text-xs text-neutral-500 font-normal">kcal</span>`;
        document.getElementById('time-display').innerHTML = `0 <span class="text-xs text-neutral-500 font-normal">/ 0</span>`;
        return;
    }

    const percent = Math.round((completedToday / total) * 100);
    const kcalBurned = todayData.exercises
        .filter(e => (sessionState.completedByDate[dateKey] || []).includes(e.id))
        .reduce((sum, e) => sum + (e.k || 0), 0);

    document.getElementById('progress-percentage').textContent = `${percent}%`;
    document.getElementById('progress-bar-fill').style.width = `${percent}%`;
    document.getElementById('kcal-display').innerHTML = `${kcalBurned} <span class="text-xs text-neutral-500 font-normal">kcal</span>`;
    document.getElementById('time-display').innerHTML = `${completedToday} <span class="text-xs text-neutral-500 font-normal">/ ${total}</span>`;
}

function renderWeeklyCalendar() {
    const generatedPlan = dynamicRoutineGenerator(sessionState.daysCount, sessionState.focus);
    const weeklyContainer = document.getElementById('weekly-distribution-container');
    weeklyContainer.innerHTML = '';

    Object.keys(generatedPlan).forEach(day => {
        const info = generatedPlan[day];
        const displayExercises = applySubstitutions(info.exercises);
        const isToday = (day === currentDayName);
        let listHTML = '';
        displayExercises.forEach(e => {
            listHTML += `<li class="text-[11px] text-neutral-400 flex justify-between border-b border-neutral-900 pb-1.5 pt-0.5"><span>• ${e.t}</span></li>`;
        });

        weeklyContainer.innerHTML += `
            <div class="p-4 rounded-2xl border ${isToday ? 'border-brandPurple/40 bg-brandPurple/[0.01]' : 'border-neutral-800/80 bg-cardBg'} space-y-3 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-xs font-bold text-white">${day} ${isToday ? '• HOY' : ''}</span>
                        <span class="text-[10px] text-brandPurple font-mono font-medium">${info.focus}</span>
                    </div>
                    <ul class="space-y-1.5 pt-2 border-t border-neutral-900">${listHTML}</ul>
                </div>
            </div>
        `;
    });
}

// =========================================================================
// NUTRICIÓN (calculada en vivo con biometría real)
// =========================================================================

function renderNutrition() {
    const nutrition = computeNutrition(sessionState);
    const templates = (mealTemplates[sessionState.bodyType] || mealTemplates.Mesomorfo)[sessionState.goal];

    document.getElementById('total-macro-kcal').textContent = `${nutrition.targetKcal.toLocaleString('es')} kcal`;
    document.getElementById('total-macro-detail').textContent = `TMB ${nutrition.bmr} kcal · Mantenimiento ${nutrition.tdee} kcal`;

    const maxG = Math.max(nutrition.macros.p, nutrition.macros.c, nutrition.macros.g);
    document.getElementById('macros-bars-container').innerHTML = `
        ${createMacroBarHTML('Proteínas', nutrition.macros.p + 'g', 'bg-purple-500', nutrition.macros.p, maxG)}
        ${createMacroBarHTML('Carbohidratos', nutrition.macros.c + 'g', 'bg-yellow-500', nutrition.macros.c, maxG)}
        ${createMacroBarHTML('Grasas', nutrition.macros.g + 'g', 'bg-emerald-500', nutrition.macros.g, maxG)}
    `;

    const dietContainer = document.getElementById('diet-plan-container');
    dietContainer.innerHTML = '';
    templates.forEach(meal => {
        dietContainer.innerHTML += `
            <div class="p-4 rounded-xl bg-neutral-950 border border-neutral-800/60 space-y-1">
                <span class="text-xs font-bold uppercase tracking-wider text-brandPurple block">${meal.t}</span>
                <p class="text-[11px] text-neutral-300 leading-relaxed">${meal.d}</p>
            </div>
        `;
    });
}

function createMacroBarHTML(name, valLabel, color, value, max) {
    const widthPercent = max > 0 ? Math.max(Math.round((value / max) * 100), 6) : 0;
    return `
        <div>
            <div class="flex justify-between text-[11px] mb-1">
                <span class="text-neutral-400">${name}</span>
                <span class="text-white font-mono font-bold">${valLabel}</span>
            </div>
            <div class="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                <div class="${color} h-full" style="width:${widthPercent}%"></div>
            </div>
        </div>
    `;
}

// =========================================================================
// HIDRATACIÓN
// =========================================================================

function getWaterGoalMl() {
    return Math.round((sessionState.weightKg || 65) * 35);
}

async function addWater(deltaMl) {
    const dateKey = todayKey();
    sessionState.waterByDate[dateKey] = (sessionState.waterByDate[dateKey] || 0) + deltaMl;
    await saveSession();
    renderWaterWidget();
}

function renderWaterWidget() {
    const dateKey = todayKey();
    const current = sessionState.waterByDate[dateKey] || 0;
    const goal = getWaterGoalMl();
    const percent = Math.min(Math.round((current / goal) * 100), 100);

    document.getElementById('water-count-label').textContent = `${current} / ${goal} ml`;
    document.getElementById('water-bar-fill').style.width = `${percent}%`;
}

// =========================================================================
// PESO CORPORAL + GRÁFICO HISTÓRICO (SVG, sin dependencias)
// =========================================================================

const weightLogForm = document.getElementById('weight-log-form');
weightLogForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('weight-log-input');
    const kg = parseFloat(input.value);
    if (!kg || kg < 30 || kg > 300) {
        showToast('Ingresa un peso válido.', 'error');
        return;
    }
    const dateKey = todayKey();
    const existingIdx = sessionState.weightLog.findIndex(entry => entry.date === dateKey);
    if (existingIdx > -1) sessionState.weightLog[existingIdx].kg = kg;
    else sessionState.weightLog.push({ date: dateKey, kg });
    sessionState.weightLog.sort((a, b) => a.date.localeCompare(b.date));
    sessionState.weightKg = kg;

    await saveSession();
    input.value = '';
    showToast('Peso registrado.', 'success');
    renderWeightChart();
    renderWaterWidget();
    renderNutrition();
});

function renderWeightChart() {
    const log = sessionState.weightLog.slice(-14); // últimas 14 entradas
    const label = document.getElementById('weight-current-label');
    const container = document.getElementById('weight-chart-container');

    if (log.length === 0) {
        label.textContent = '-- kg';
        container.innerHTML = `<p class="text-[11px] text-neutral-600 text-center py-6">Aún no hay registros de peso.</p>`;
        return;
    }

    label.textContent = `${log[log.length - 1].kg} kg`;

    if (log.length === 1) {
        container.innerHTML = `<p class="text-[11px] text-neutral-600 text-center py-6">Registra al menos 2 entradas para ver tu evolución.</p>`;
        return;
    }

    const w = 560, h = 140, pad = 24;
    const values = log.map(e => e.kg);
    const min = Math.min(...values), max = Math.max(...values);
    const range = (max - min) || 1;

    const points = log.map((entry, i) => {
        const x = pad + (i / (log.length - 1)) * (w - pad * 2);
        const y = h - pad - ((entry.kg - min) / range) * (h - pad * 2);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
    });

    const dots = log.map((entry, i) => {
        const [x, y] = points[i].split(',');
        return `<circle cx="${x}" cy="${y}" r="3" fill="#A855F7" />`;
    }).join('');

    container.innerHTML = `
        <svg viewBox="0 0 ${w} ${h}" class="w-full h-auto" preserveAspectRatio="none">
            <polyline points="${points.join(' ')}" fill="none" stroke="#A855F7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
            ${dots}
        </svg>
        <div class="flex justify-between text-[9px] text-neutral-600 font-mono mt-1">
            <span>${log[0].date}</span>
            <span>${log[log.length - 1].date}</span>
        </div>
    `;
}

// =========================================================================
// CONSTRUCCIÓN COMPLETA DEL WORKSPACE
// =========================================================================

function buildUserWorkspace() {
    const firstName = sessionState.name.split(' ')[0] || 'Usuario';
    document.getElementById('greeting-name').textContent = `¡Hola, ${firstName}!`;
    document.getElementById('sidebar-user-name').textContent = firstName;
    document.getElementById('sidebar-user-email').textContent = sessionState.email;
    document.getElementById('profile-full-name').textContent = sessionState.name;
    document.getElementById('profile-email').textContent = sessionState.email;

    document.getElementById('quick-gender-span').textContent = sessionState.gender;
    const focusText = sessionState.focus === 'inferior' ? 'Tren Inferior' : sessionState.focus === 'superior' ? 'Tren Superior' : 'Estética Global';
    document.getElementById('quick-focus-span').textContent = focusText;

    const initials = sessionState.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'FI';
    document.getElementById('user-avatar').textContent = initials;
    document.getElementById('sidebar-avatar').textContent = initials;
    document.getElementById('profile-big-avatar').textContent = initials;

    const goalStr = sessionState.goal === 'gain' ? 'Superávit Muscular' : 'Déficit Calórico';
    document.getElementById('profile-meta').textContent = `${sessionState.bodyType} • ${focusText} • ${goalStr} • ${sessionState.weightKg}kg / ${sessionState.heightCm}cm`;
    document.getElementById('days-counter-badge').textContent = `${sessionState.daysCount} DÍAS`;

    renderDailyRoutine();
    renderWeeklyCalendar();
    renderNutrition();
    renderWaterWidget();
    renderWeightChart();

    document.getElementById('screen-login').classList.add('opacity-0');
    setTimeout(() => {
        document.getElementById('screen-login').classList.add('hidden');
        document.getElementById('screen-dashboard').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('screen-dashboard').classList.remove('opacity-0');
            document.getElementById('screen-dashboard').classList.add('opacity-100');
            lucide.createIcons();
        }, 50);
    }, 400);
}