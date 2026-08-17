const DONATION_LINK = 'https://paypal.me/TanishaMaria'; // TODO: reemplaza con tu link real
const DONATION_PAYMENT_INFO = 'PayPal: paypal.me/TanishaMaria'; // TODO: reemplaza con tus datos reales

// ---- BANCO EXTENSO DE EJERCICIOS CLASIFICADOS POR ENFOQUE ----
const exerciseRepository = {
    inferior: {
        DiaA: [
            { id: 'inf1', t: 'Sentadilla Goblet Profunda', c: 'Cuádriceps/Glúteos', d: '4 x 10-12 reps', k: 55 },
            { id: 'inf2', t: 'Hip Thrust con Barra con Pausa', c: 'Glúteo Mayor', d: '4 x 12 reps (2s contracción)', k: 60 },
            { id: 'inf3', t: 'Peso Muerto Rumano con Mancuerna', c: 'Isquiotibiales', d: '4 x 10 reps', k: 55 },
            { id: 'inf4', t: 'Prensa Inclinada a Una Sola Pierna', c: 'Tren Inferior', d: '3 x 12 reps por lado', k: 50 },
            { id: 'inf5', t: 'Abducciones en Polea o Máquina', c: 'Glúteo Medio', d: '3 x 15 reps', k: 30 },
            { id: 'inf6', t: 'Elevación de Pantorrillas Sentado', c: 'Sóleo', d: '3 x 15 reps', k: 25 },
            { id: 'inf7', t: 'Sentadilla Frontal Barra', c: 'Cuádriceps', d: '4 x 8 reps', k: 58 },
            { id: 'inf8', t: 'Prensa de Pierna 45°', c: 'Tren Inferior', d: '4 x 10 reps', k: 55 },
            { id: 'inf9', t: 'Zancadas Caminantes con Mancuernas', c: 'Piernas', d: '3 x 12 por lado', k: 48 },
            { id: 'inf10', t: 'Extensiones de Cuádriceps Máquina', c: 'Cuádriceps Aislado', d: '3 x 15 reps', k: 40 },
            { id: 'inf11', t: 'Patadas de Glúteo en Polea', c: 'Glúteo', d: '4 x 12 reps', k: 35 },
            { id: 'inf12', t: 'Curl Isquio Acostado Máquina', c: 'Isquiotibiales', d: '3 x 12 reps', k: 38 },
            { id: 'inf13', t: 'Abducción de Cadera en Máquina', c: 'Glúteo Medio', d: '4 x 15 reps', k: 32 },
            { id: 'inf14', t: 'Sentadilla Sissy con Peso', c: 'Cuádriceps Bajo', d: '3 x 12 reps', k: 45 },
            { id: 'inf15', t: 'Peso Muerto Sumo Barra', c: 'Glúteos/Aductores', d: '4 x 8 reps', k: 60 },
            { id: 'inf16', t: 'Plancha Abdominal Estática', c: 'Core', d: '3 x 60 seg', k: 25 },
            { id: 'inf17', t: 'Elevación de Pantorrillas de Pie', c: 'Gemelos', d: '4 x 20 reps', k: 30 },
            { id: 'inf18', t: 'Aductores en Máquina', c: 'Aductores', d: '3 x 15 reps', k: 28 },
            { id: 'inf19', t: 'Sentadilla Búlgara Profunda', c: 'Glúteos/Cuádriceps', d: '3 x 10 reps', k: 50 },
            { id: 'inf20', t: 'Flexión de Cadera en Polea', c: 'Psoas/Core', d: '3 x 12 reps', k: 28 }
        ],
        DiaB: [
            { id: 'inf21', t: 'Zancadas Búlgaras Enfoque Glúteo', c: 'Glúteos/Isquios', d: '3 x 10 reps por pierna', k: 50 },
            { id: 'inf22', t: 'Curl de Piernas Acostado', c: 'Isquiotibiales', d: '4 x 12 reps', k: 40 },
            { id: 'inf23', t: 'Extensiones de Cuádriceps Drop', c: 'Cuádriceps Puro', d: '3 x 15 reps Drop-set', k: 40 },
            { id: 'inf24', t: 'Patadas de Glúteo en Polea Baja', c: 'Glúteo Superior', d: '4 x 12 reps', k: 35 },
            { id: 'inf25', t: 'Plancha Abdominal de Estabilidad', c: 'Core', d: '3 x 1 minuto', k: 25 },
            { id: 'inf26', t: 'Peso Muerto Convencional', c: 'Cadena Posterior', d: '4 x 6 reps', k: 62 },
            { id: 'inf27', t: 'Leg Press Máquina Alta', c: 'Cuádriceps/Glúteos', d: '3 x 12 reps', k: 52 },
            { id: 'inf28', t: 'Crunch Abdominal Máquina', c: 'Abdominales', d: '3 x 15 reps', k: 28 },
            { id: 'inf29', t: 'Sentadilla Box Jump', c: 'Potencia Piernas', d: '3 x 8 reps', k: 48 },
            { id: 'inf30', t: 'Aducción de Cadera Banca', c: 'Aductores', d: '3 x 12 reps', k: 25 }
        ]
    },
    superior: {
        DiaA: [
            { id: 'sup1', t: 'Press de Banca Plano con Barra', c: 'Pectoral', d: '4 x 8 reps', k: 55 },
            { id: 'sup2', t: 'Remo con Barra en Pronación', c: 'Dorsales/Espalda', d: '4 x 8 reps', k: 55 },
            { id: 'sup3', t: 'Press Militar con Mancuernas', c: 'Hombro Anterior', d: '3 x 10 reps', k: 45 },
            { id: 'sup4', t: 'Jalón al Pecho Agarre Neutro', c: 'Amplitud Dorsal', d: '3 x 12 reps', k: 40 },
            { id: 'sup5', t: 'Elevaciones Laterales Estrictas', c: 'Hombro Medio', d: '4 x 12-15 reps', k: 30 },
            { id: 'sup6', t: 'Fondos en Paralelas para Tríceps', c: 'Brazos', d: '3 x max reps', k: 40 },
            { id: 'sup7', t: 'Press Inclinado Barra', c: 'Pectoral Superior', d: '4 x 10 reps', k: 50 },
            { id: 'sup8', t: 'Remo Gironda Baja', c: 'Densidad de Espalda', d: '4 x 10 reps', k: 45 },
            { id: 'sup9', t: 'Pájaros Pectoral con Mancuernas', c: 'Pecho Aislado', d: '3 x 12 reps', k: 35 },
            { id: 'sup10', t: 'Remo Invertido en Barra', c: 'Espalda Baja', d: '3 x 12 reps', k: 42 },
            { id: 'sup11', t: 'Press de Hombro Máquina Smith', c: 'Hombros', d: '3 x 12 reps', k: 40 },
            { id: 'sup12', t: 'Jalón Frontal Cerrado', c: 'Espalda Media', d: '4 x 10 reps', k: 42 },
            { id: 'sup13', t: 'Aperturas Pectoral Máquina', c: 'Pecho Puro', d: '3 x 12 reps', k: 35 },
            { id: 'sup14', t: 'Remo Pendlay Barra', c: 'Espalda Alta', d: '4 x 8 reps', k: 50 },
            { id: 'sup15', t: 'Press Inclinado Mancuernas 30°', c: 'Pectoral Alto', d: '3 x 12 reps', k: 48 },
            { id: 'sup16', t: 'Jalón Polea Neutra Ancha', c: 'Amplitud Dorsal', d: '4 x 12 reps', k: 42 },
            { id: 'sup17', t: 'Elevaciones Frontales Barra Z', c: 'Hombro Anterior', d: '3 x 12 reps', k: 32 },
            { id: 'sup18', t: 'Pull-ups Peso Corporal', c: 'Espalda Total', d: '3 x max reps', k: 48 },
            { id: 'sup19', t: 'Press Decline Barra', c: 'Pectoral Bajo', d: '3 x 10 reps', k: 48 },
            { id: 'sup20', t: 'Remo Una Mano Mancuerna', c: 'Espalda Unilateral', d: '3 x 12 reps', k: 40 }
        ],
        DiaB: [
            { id: 'sup21', t: 'Press Inclinado con Mancuernas', c: 'Pectoral Superior', d: '4 x 10 reps', k: 50 },
            { id: 'sup22', t: 'Remo Gironda en Polea Baja', c: 'Densidad de Espalda', d: '4 x 10 reps', k: 45 },
            { id: 'sup23', t: 'Pájaros con Mancuerna (Deltoides Post)', c: 'Hombro Posterior', d: '3 x 15 reps', k: 30 },
            { id: 'sup24', t: 'Curl de Bíceps Alterno con Supinación', c: 'Bíceps', d: '3 x 12 reps', k: 30 },
            { id: 'sup25', t: 'Extensiones de Tríceps sobre la Cabeza', c: 'Tríceps Cabeza Larga', d: '3 x 12 reps', k: 30 },
            { id: 'sup26', t: 'Press Banca Cerrado Barra', c: 'Tríceps/Pecho', d: '3 x 10 reps', k: 45 },
            { id: 'sup27', t: 'Remo Máquina Convergente', c: 'Espalda Media', d: '3 x 12 reps', k: 40 },
            { id: 'sup28', t: 'Crucifijo Pectoral Polea', c: 'Pecho Aislado', d: '4 x 12 reps', k: 38 },
            { id: 'sup29', t: 'Curl Concentrado Bíceps', c: 'Bíceps Puro', d: '3 x 12 reps', k: 28 },
            { id: 'sup30', t: 'Extensión Tríceps Polea Cuerda', c: 'Tríceps', d: '4 x 12 reps', k: 32 },
            { id: 'sup31', t: 'Prensa de Pecho Máquina', c: 'Pecho Máquina', d: '3 x 12 reps', k: 42 },
            { id: 'sup32', t: 'Lat Pulldown Inverso', c: 'Espalda Baja', d: '3 x 12 reps', k: 38 },
            { id: 'sup33', t: 'Elevación Lateral Sentado', c: 'Hombro Medio', d: '3 x 15 reps', k: 28 },
            { id: 'sup34', t: 'Curl Barra Curva', c: 'Bíceps', d: '3 x 10 reps', k: 35 },
            { id: 'sup35', t: 'Fondos en Banco Tríceps', c: 'Tríceps', d: '3 x 12 reps', k: 35 }
        ]
    },
    balanceado: {
        DiaA: [
            { id: 'bal1', t: 'Sentadilla Libre con Barra', c: 'Full Body / Piernas', d: '4 x 8 reps', k: 60 },
            { id: 'bal2', t: 'Press de Banca con Mancuernas', c: 'Empuje Torso', d: '4 x 10 reps', k: 50 },
            { id: 'bal3', t: 'Remo con Mancuerna a una Mano', c: 'Tracción Espalda', d: '3 x 10 reps', k: 45 },
            { id: 'bal4', t: 'Hip Thrust con Mancuerna', c: 'Glúteos/Cadena Post', d: '4 x 12 reps', k: 55 },
            { id: 'bal5', t: 'Elevaciones Laterales con Mancuerna', c: 'Hombros', d: '3 x 12 reps', k: 30 },
            { id: 'bal6', t: 'Core de Abdominales en V', c: 'Abdomen', d: '3 x 15 reps', k: 30 },
            { id: 'bal7', t: 'Peso Muerto Rumano Barra', c: 'Isquios/Glúteos', d: '4 x 8 reps', k: 55 },
            { id: 'bal8', t: 'Press Militar con Barra de Pie', c: 'Hombros/Core', d: '3 x 8 reps', k: 45 },
            { id: 'bal9', t: 'Jalón Al Pecho Abierto', c: 'Espalda Alta', d: '4 x 10 reps', k: 45 },
            { id: 'bal10', t: 'Zancadas Inversas Dinámicas', c: 'Piernas completas', d: '3 x 12 pasos por pierna', k: 45 },
            { id: 'bal11', t: 'Curl de Bíceps + Copa Tríceps Combo', c: 'Brazos', d: '3 x 12 reps', k: 30 },
            { id: 'bal12', t: 'Sentadilla Box Jump', c: 'Potencia', d: '3 x 8 reps', k: 48 },
            { id: 'bal13', t: 'Remo Pendlay', c: 'Espalda', d: '4 x 8 reps', k: 50 },
            { id: 'bal14', t: 'Prensa de Pierna', c: 'Piernas', d: '4 x 10 reps', k: 55 },
            { id: 'bal15', t: 'Pájaros Pectoral', c: 'Pecho', d: '3 x 12 reps', k: 35 },
            { id: 'bal16', t: 'Elevación de Pantorrillas', c: 'Gemelos', d: '4 x 15 reps', k: 30 },
            { id: 'bal17', t: 'Plancha Lateral', c: 'Core', d: '3 x 45 seg c/lado', k: 28 },
            { id: 'bal18', t: 'Curl Isquiotibiales', c: 'Isquios', d: '3 x 12 reps', k: 35 },
            { id: 'bal19', t: 'Fondos Barra', c: 'Brazos/Pecho', d: '3 x max reps', k: 40 },
            { id: 'bal20', t: 'Remo Máquina', c: 'Espalda', d: '3 x 12 reps', k: 40 }
        ],
        DiaB: [
            { id: 'bal21', t: 'Peso Muerto Sumo', c: 'Glúteos/Aductores', d: '4 x 8 reps', k: 60 },
            { id: 'bal22', t: 'Press Inclinado', c: 'Pecho Alto', d: '3 x 10 reps', k: 48 },
            { id: 'bal23', t: 'Remo Invertido', c: 'Espalda Media', d: '3 x 12 reps', k: 42 },
            { id: 'bal24', t: 'Zancadas Caminantes', c: 'Piernas', d: '3 x 12 pasos', k: 48 },
            { id: 'bal25', t: 'Elevación Frontal', c: 'Hombro', d: '3 x 12 reps', k: 32 },
            { id: 'bal26', t: 'Crunch Abdominal', c: 'Abdominales', d: '3 x 15 reps', k: 28 },
            { id: 'bal27', t: 'Sentadilla Goblet', c: 'Piernas', d: '3 x 12 reps', k: 50 },
            { id: 'bal28', t: 'Aperturas Pectoral', c: 'Pecho', d: '3 x 12 reps', k: 35 },
            { id: 'bal29', t: 'Jalón Polea', c: 'Espalda', d: '4 x 10 reps', k: 42 },
            { id: 'bal30', t: 'Curl Bíceps Barra', c: 'Brazos', d: '3 x 10 reps', k: 32 }
        ]
    },
    comun: {
        hiit: [
            { id: 'hit1', t: 'Burpees Militares explosivos', c: 'Metabólico', d: '4 x 45 segundos', k: 80 },
            { id: 'hit2', t: 'Kettlebell Swings Fluidos', c: 'Cadena Posterior', d: '4 x 20 reps', k: 70 },
            { id: 'hit3', t: 'Mountain Climbers Rápidos', c: 'Core/Cardio', d: '4 x 45 segundos', k: 60 },
            { id: 'hit4', t: 'Saltos al Cajón o Sentadilla Salto', c: 'Potencia', d: '3 x 12 reps', k: 65 },
            { id: 'hit5', t: 'Plancha Abdominal Dinámica', c: 'Core', d: '3 x 1 minuto', k: 35 },
            { id: 'hit6', t: 'Battle Ropes Explosivos', c: 'Hombros/Core', d: '4 x 30 seg', k: 75 },
            { id: 'hit7', t: 'Sentadilla Pulso Rápido', c: 'Piernas', d: '4 x 30 seg', k: 65 },
            { id: 'hit8', t: 'Flexiones Rápidas', c: 'Pecho/Brazos', d: '3 x 20 reps', k: 55 },
            { id: 'hit9', t: 'Jumping Jacks', c: 'Cardio Total', d: '4 x 45 seg', k: 50 },
            { id: 'hit10', t: 'Pushups con Rotación', c: 'Core/Brazos', d: '3 x 12 reps', k: 45 }
        ]
    }
};

// ---- BANCO EXTENSO DE COMIDAS ECONÓMICAS Y PRÁCTICAS ----
const mealTemplates = {
    Ectomorfo: {
        loss: [
            { t: 'Desayuno', d: 'Avena con leche entera, plátano y un puñado de nueces.' },
            { t: 'Almuerzo', d: 'Pechuga de pollo, arroz integral y aguacate.' },
            { t: 'Merienda', d: 'Batido de proteína con leche entera y crema de maní.' },
            { t: 'Cena', d: 'Salmón al horno con patata y ensalada de aceite de oliva.' }
        ],
        loss_alt: [
            { t: 'Desayuno', d: 'Huevos revueltos con pan integral, arándanos y miel.' },
            { t: 'Almuerzo', d: 'Atún en lata con arroz blanco y zanahorias cocidas.' },
            { t: 'Merienda', d: 'Yogur natural con granola casera y manzana.' },
            { t: 'Cena', d: 'Pechuga a la plancha con batata y brócoli al vapor.' }
        ],
        gain: [
            { t: 'Desayuno', d: 'Huevos enteros, avena con leche entera y plátano.' },
            { t: 'Almuerzo', d: 'Res magra, arroz blanco abundante y aguacate.' },
            { t: 'Merienda', d: 'Batido de proteína + pan integral con crema de maní.' },
            { t: 'Cena', d: 'Pasta integral con pollo y aceite de oliva extra.' }
        ],
        gain_alt: [
            { t: 'Desayuno', d: 'Omelette 3 huevos con queso, pan tostado y jugo natural.' },
            { t: 'Almuerzo', d: 'Pechuga con papas al horno y ensalada con aceite.' },
            { t: 'Merienda', d: 'Sandwich de atún con pan blanco, tomate y mayonesa.' },
            { t: 'Cena', d: 'Lentejas con pollo y arroz blanco, postre: plátano con chocolate.' }
        ]
    },
    Mesomorfo: {
        loss: [
            { t: 'Desayuno', d: 'Claras de huevo revueltas con avena y fresas.' },
            { t: 'Almuerzo', d: 'Pechuga de pollo, quinoa y vegetales al vapor.' },
            { t: 'Merienda', d: 'Yogur griego natural con almendras.' },
            { t: 'Cena', d: 'Merluza o atún con ensalada de hojas verdes.' }
        ],
        loss_alt: [
            { t: 'Desayuno', d: 'Claras con tostadas integrales, miel y un café con poco azúcar.' },
            { t: 'Almuerzo', d: 'Res magra en su jugo con papas al horno y vegetales.' },
            { t: 'Merienda', d: 'Proteína con frutas secas variadas.' },
            { t: 'Cena', d: 'Filete de pescado con arroz integral y vapor de espárragos.' }
        ],
        gain: [
            { t: 'Desayuno', d: 'Huevos enteros con avena en hojuelas y plátano.' },
            { t: 'Almuerzo', d: 'Pollo o res magra, arroz blanco y aguacate.' },
            { t: 'Merienda', d: 'Batido proteico con pan integral y crema de maní.' },
            { t: 'Cena', d: 'Salmón con patata al horno y ensalada verde.' }
        ],
        gain_alt: [
            { t: 'Desayuno', d: 'Avena con leche entera, plátano y huevo cocido extra.' },
            { t: 'Almuerzo', d: 'Chuletas de cerdo magro con arroz blanco y salsa.' },
            { t: 'Merienda', d: 'Quesadilla con queso y jamón, vaso de leche.' },
            { t: 'Cena', d: 'Pasta blanca con pollo desmenuzado y parmesano.' }
        ]
    },
    Endomorfo: {
        loss: [
            { t: 'Desayuno', d: 'Claras de huevo con espinaca y medio aguacate.' },
            { t: 'Almuerzo', d: 'Pechuga de pollo con abundantes vegetales y poca quinoa.' },
            { t: 'Merienda', d: 'Yogur griego 0% con canela, sin fruta añadida.' },
            { t: 'Cena', d: 'Pescado blanco al vapor con ensalada grande.' }
        ],
        loss_alt: [
            { t: 'Desayuno', d: 'Claras revueltas con champiñones, pan tostado integral.' },
            { t: 'Almuerzo', d: 'Pollo desmenuzado con mucho brócoli y papaya pequeña.' },
            { t: 'Merienda', d: 'Melón con queso panela magro, té sin azúcar.' },
            { t: 'Cena', d: 'Caldo de vegetales con pechuga y hierbas aromáticas.' }
        ],
        gain: [
            { t: 'Desayuno', d: 'Huevos enteros con avena moderada y arándanos.' },
            { t: 'Almuerzo', d: 'Res magra o pollo con arroz moderado y vegetales.' },
            { t: 'Merienda', d: 'Batido proteico con leche descremada.' },
            { t: 'Cena', d: 'Salmón con vegetales al vapor, carbohidrato mínimo.' }
        ],
        gain_alt: [
            { t: 'Desayuno', d: 'Omelette 2 huevos + clara, avena pequeña y miel.' },
            { t: 'Almuerzo', d: 'Pechuga con batata pequeña y vegetales grillados.' },
            { t: 'Merienda', d: 'Pudín de proteína con leche semi descremada.' },
            { t: 'Cena', d: 'Lentejas con pollo magro, sin aceite extra.' }
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
// SUPABASE — cliente + capa de datos
// =========================================================================

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
        avatarUrl: row.avatar_url,
        completedByDate: row.completed_by_date || {},
        waterByDate: row.water_by_date || {},
        weightLog: row.weight_log || [],
        substitutions: row.substitutions || {},
        restDays: row.rest_days || [], // NUEVO: días de descanso seleccionados
        reminderEnabled: row.reminder_enabled || false,
        reminderTime: row.reminder_time || '19:00',
        reminderTypes: row.reminder_types || { routine: true, water: false, food: false }, // NUEVO
        foodLogByDate: row.food_log_by_date || {}, // NUEVO: diario de comidas
        customRoutine: row.custom_routine || {} // NUEVO: rutina personalizada por día
    };
}

async function fetchProfile(uid) {
    const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', uid)
        .single();
    if (error) return null;
    return profileRowToSessionState(data);
}

async function insertProfile(profile) {
    const { error } = await supabaseClient.from('profiles').insert({
        id: profile.id,
        email: profile.email,
        name: profile.name,
        gender: profile.gender,
        age: profile.age,
        weight_kg: profile.weightKg,
        height_cm: profile.heightCm,
        days_count: profile.daysCount,
        body_type: profile.bodyType,
        focus: profile.focus,
        goal: profile.goal,
        completed_by_date: profile.completedByDate,
        water_by_date: profile.waterByDate,
        weight_log: profile.weightLog,
        substitutions: profile.substitutions,
        rest_days: profile.restDays || [], // NUEVO
        reminder_enabled: profile.reminderEnabled || false,
        reminder_time: profile.reminderTime || '19:00',
        reminder_types: profile.reminderTypes || { routine: true, water: false, food: false }, // NUEVO
        food_log_by_date: profile.foodLogByDate || {}, // NUEVO
        custom_routine: profile.customRoutine || {} // NUEVO
    });
    if (error) throw error;
}

async function saveSession() {
    if (!sessionState) return;
    const { error } = await supabaseClient
        .from('profiles')
        .update({
            name: sessionState.name,
            gender: sessionState.gender,
            age: sessionState.age,
            weight_kg: sessionState.weightKg,
            height_cm: sessionState.heightCm,
            days_count: sessionState.daysCount,
            body_type: sessionState.bodyType,
            focus: sessionState.focus,
            goal: sessionState.goal,
            avatar_url: sessionState.avatarUrl,
            completed_by_date: sessionState.completedByDate,
            water_by_date: sessionState.waterByDate,
            weight_log: sessionState.weightLog,
            substitutions: sessionState.substitutions,
            rest_days: sessionState.restDays || [], // NUEVO
            reminder_enabled: sessionState.reminderEnabled,
            reminder_time: sessionState.reminderTime,
            reminder_types: sessionState.reminderTypes || { routine: true, water: false, food: false }, // NUEVO
            food_log_by_date: sessionState.foodLogByDate || {}, // NUEVO
            custom_routine: sessionState.customRoutine || {} // NUEVO
        })
        .eq('id', sessionState.id);
    if (error) throw error;
}

function savePendingProfile(profile) {
    localStorage.setItem('tnyfit_pending_profile', JSON.stringify(profile));
}

async function insertPendingProfileIfAny(session) {
    const pending = localStorage.getItem('tnyfit_pending_profile');
    if (!pending) return false;
    const profile = JSON.parse(pending);
    profile.id = session.user.id;
    profile.email = session.user.email;
    try {
        await insertProfile(profile);
        localStorage.removeItem('tnyfit_pending_profile');
        return true;
    } catch (err) {
        console.error('Error inserting pending profile:', err);
        return false;
    }
}

// =========================================================================
// REGISTRO + WIZARD
// =========================================================================

// FIX 1: había 4 pasos en el HTML (data-step="1".."4") pero esta constante
// decía 3, por lo que el wizard nunca mostraba/permitía el paso 4 (Objetivo).
const WIZARD_TOTAL_STEPS = 4;
let wizardStep = 1;

// NUEVO: true cuando el wizard se está usando para completar el perfil de
// un usuario que ya se autenticó por Google (se salta el Paso 1 de cuenta,
// porque el correo/contraseña ya los maneja Google).
let isOAuthCompletion = false;

function goToRegister() {
    isOAuthCompletion = false;
    document.getElementById('panel-signin').classList.add('hidden');
    document.getElementById('panel-register').classList.remove('hidden');
    wizardStep = 1;
    renderWizardStep();
}

function goToSignin() {
    isOAuthCompletion = false;
    document.getElementById('panel-register').classList.add('hidden');
    document.getElementById('panel-signin').classList.remove('hidden');
}

function renderWizardStep() {
    document.querySelectorAll('.wizard-step').forEach(step => {
        step.classList.remove('active');
    });
    // FIX 2: los pasos del wizard en el HTML no tienen id="wizard-step-N",
    // solo la clase "wizard-step" y el atributo data-step="N". El selector
    // anterior (getElementById) nunca encontraba nada, así que ningún paso
    // recuperaba la clase "active" y el formulario entero desaparecía.
    document.querySelector(`.wizard-step[data-step="${wizardStep}"]`)?.classList.add('active');

    document.querySelectorAll('.wizard-dot').forEach((dot, idx) => {
        dot.classList.toggle('bg-brandPurple', idx < wizardStep);
        dot.classList.toggle('bg-neutral-800', idx >= wizardStep);
    });

    const firstStep = isOAuthCompletion ? 2 : 1;
    document.getElementById('wizard-back-btn').classList.toggle('hidden', wizardStep === firstStep);
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
    const firstStep = isOAuthCompletion ? 2 : 1;
    if (wizardStep > firstStep) {
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
    if (!isOAuthCompletion && !validateWizardStep(1)) return;
    if (!validateWizardStep(2)) return;

    const submitBtn = document.getElementById('wizard-submit-btn');
    submitBtn.disabled = true;

    // ---- CASO: completar perfil tras iniciar sesión con Google ----
    // La cuenta y el correo ya existen (los creó Google), así que no se
    // llama a signUp(): solo se arma el perfil y se inserta en la tabla.
    if (isOAuthCompletion) {
        try {
            const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
            if (userError || !user) throw userError || new Error('Sesión no encontrada.');

            const newProfile = {
                id: user.id,
                email: user.email,
                name: document.getElementById('user-name').value.trim() || (user.email || '').split('@')[0],
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
                substitutions: {},
                restDays: [],
                reminderEnabled: false,
                reminderTime: '19:00',
                reminderTypes: { routine: true, water: false, food: false },
                foodLogByDate: {},
                customRoutine: {}
            };
            newProfile.weightLog.push({ date: todayKey(), kg: newProfile.weightKg });

            await insertProfile(newProfile);
            isOAuthCompletion = false;
            registerForm.reset();
            wizardStep = 1;
            showToast(`¡Bienvenido, ${newProfile.name.split(' ')[0]}! Tu ecosistema fue generado.`, 'success');
            await checkActiveSession();
        } catch (err) {
            console.error(err);
            showToast(err.message || 'No se pudo crear tu perfil. Intenta de nuevo.', 'error');
        } finally {
            submitBtn.disabled = false;
        }
        return;
    }

    // ---- CASO NORMAL: registro con correo y contraseña ----
    const email = document.getElementById('user-email').value.trim().toLowerCase();
    const password = document.getElementById('user-password').value;

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
            substitutions: {},
            restDays: [], // NUEVO: vacío por defecto
            reminderEnabled: false,
            reminderTime: '19:00',
            reminderTypes: { routine: true, water: false, food: false }, // NUEVO
            foodLogByDate: {}, // NUEVO
            customRoutine: {} // NUEVO
        };
        newProfile.weightLog.push({ date: todayKey(), kg: newProfile.weightKg });

        if (data.session) {
            await insertProfile(newProfile);
            registerForm.reset();
            wizardStep = 1;
            showToast(`¡Bienvenido, ${newProfile.name.split(' ')[0]}! Tu ecosistema fue generado.`, 'success');
            await checkActiveSession();
        } else {
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

// =========================================================================
// LOGIN CON GOOGLE (Supabase OAuth)
// =========================================================================

async function signInWithGoogle() {
    try {
        const { error } = await supabaseClient.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: window.location.origin + window.location.pathname }
        });
        if (error) throw error;
        // El navegador redirige a Google; el flujo continúa al volver.
    } catch (err) {
        console.error(err);
        showToast('No se pudo iniciar sesión con Google.', 'error');
    }
}

// Muestra el wizard de registro saltando el Paso 1 (cuenta), porque el
// usuario ya se autenticó vía Google y su correo ya está confirmado.
function startOAuthProfileCompletion(session) {
    isOAuthCompletion = true;
    document.getElementById('panel-signin').classList.add('hidden');
    document.getElementById('panel-recovery').classList.add('hidden');
    document.getElementById('panel-register').classList.remove('hidden');

    const meta = session.user.user_metadata || {};
    document.getElementById('user-name').value = meta.full_name || meta.name || '';
    document.getElementById('user-email').value = session.user.email || '';
    // Contraseña no aplica en este flujo: se completan con un valor válido
    // para que el input required no bloquee (nunca se envían a signUp).
    document.getElementById('user-password').value = 'google-oauth';
    document.getElementById('user-password-confirm').value = 'google-oauth';

    wizardStep = 2;
    renderWizardStep();
    showToast('Termina de configurar tu perfil para continuar.', 'info');
}

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
            const inserted = await insertPendingProfileIfAny(session);
            if (inserted) {
                profile = await fetchProfile(session.user.id);
            }
        }

        // NUEVO: si sigue sin haber perfil (típico de un primer login con
        // Google, que crea la sesión pero no una fila en `profiles`), se
        // pide completar biometría/entrenamiento en vez de cerrar sesión.
        if (!profile) {
            document.getElementById('screen-dashboard').classList.add('hidden');
            document.getElementById('screen-login').classList.remove('hidden');
            startOAuthProfileCompletion(session);
            loadingScreen.classList.add('hidden');
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
    else bmr = 10 * w + 6.25 * h - 5 * age - 78;

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
// SELECCIÓN INTELIGENTE DE EJERCICIOS POR DÍA
// =========================================================================
// Límite máximo de ejercicios por sesión: más de esto genera rutinas
// excesivamente largas, mala adherencia y peor calidad de ejecución.
const DAILY_EXERCISE_LIMIT = 6;

// Elige, de un banco de ejercicios, un subconjunto equilibrado (máx. `count`)
// agrupando por grupo muscular/categoría (campo "c") y tomando primero el
// ejercicio de mayor gasto calórico (proxy de movimiento compuesto/principal)
// de cada grupo, rotando entre grupos para maximizar la variedad muscular
// sin sobrecargar el día con demasiados ejercicios.
function selectSmartRoutine(exercisePool, count = DAILY_EXERCISE_LIMIT) {
    if (!exercisePool || exercisePool.length === 0) return [];
    if (exercisePool.length <= count) return exercisePool;

    const groups = {};
    exercisePool.forEach(ex => {
        const key = ex.c || 'General';
        if (!groups[key]) groups[key] = [];
        groups[key].push(ex);
    });

    // Dentro de cada grupo, los movimientos más completos (mayor "k") primero
    Object.values(groups).forEach(list => list.sort((a, b) => (b.k || 0) - (a.k || 0)));

    const groupKeys = Object.keys(groups);
    const selected = [];
    let round = 0;

    while (selected.length < count && groupKeys.some(k => groups[k].length > round)) {
        for (const key of groupKeys) {
            if (selected.length >= count) break;
            if (groups[key][round]) selected.push(groups[key][round]);
        }
        round++;
    }

    return selected;
}

// =========================================================================
// GENERADOR DE RUTINA CON SELECCIÓN DE DÍAS DE DESCANSO
// =========================================================================

function dynamicRoutineGenerator(days, focus, restDays = []) {
    const repo = exerciseRepository[focus] || exerciseRepository.balanceado;
    const restDay = () => ({ focus: 'Descanso', exercises: [{ id: 'rest', t: 'Recuperación Muscular', c: 'Descanso', d: 'Absoluto', k: 0 }] });

    const structure = {
        Domingo: restDay(), Lunes: restDay(), Martes: restDay(), Miércoles: restDay(),
        Jueves: restDay(), Viernes: restDay(), Sábado: restDay()
    };

    // Días de descanso del usuario
    const userRestDays = restDays.map(d => daysOfWeekList[d]); // convertir índices a nombres

    const workDays = daysOfWeekList.filter(day => !userRestDays.includes(day));

    if (days === 3) {
        if (workDays.length >= 3) {
            structure[workDays[0]] = { focus: 'Bloque Enfoque A', exercises: selectSmartRoutine(repo.DiaA) };
            structure[workDays[1]] = { focus: 'Bloque Enfoque B', exercises: selectSmartRoutine(repo.DiaB) };
            structure[workDays[2]] = { focus: 'Estabilidad / HIIT', exercises: selectSmartRoutine(exerciseRepository.comun.hiit) };
        }
    } else if (days === 4) {
        if (workDays.length >= 4) {
            structure[workDays[0]] = { focus: 'Acondicionamiento Principal A', exercises: selectSmartRoutine(repo.DiaA) };
            structure[workDays[1]] = { focus: 'Bloque de Potencia HIIT', exercises: selectSmartRoutine(exerciseRepository.comun.hiit) };
            structure[workDays[2]] = { focus: 'Acondicionamiento Principal B', exercises: selectSmartRoutine(repo.DiaB) };
            structure[workDays[3]] = { focus: 'Hipertrofia Estricta', exercises: selectSmartRoutine(repo.DiaA, 5) };
        }
    } else {
        if (workDays.length >= 5) {
            structure[workDays[0]] = { focus: 'Bloque de Desarrollo I', exercises: selectSmartRoutine(repo.DiaA) };
            structure[workDays[1]] = { focus: 'Bloque de Desarrollo II', exercises: selectSmartRoutine(repo.DiaB) };
            structure[workDays[2]] = { focus: 'Quema / HIIT Complejo', exercises: selectSmartRoutine(exerciseRepository.comun.hiit) };
            structure[workDays[3]] = { focus: 'Volumen y Aislamiento', exercises: selectSmartRoutine(repo.DiaA, 5) };
            structure[workDays[4]] = { focus: 'Remate / Definición', exercises: selectSmartRoutine(repo.DiaB, 5) };
        }
    }
    return structure;
}

// =========================================================================
// RUTINA PERSONALIZADA (texto libre) — se superpone a la generada
// =========================================================================
// Si el usuario escribió su propia rutina para un día (sessionState.customRoutine[dia]),
// esa lista reemplaza por completo a los ejercicios generados automáticamente
// para ese día. Los días sin rutina personalizada siguen usando el generador.
function applyCustomOverlay(generatedPlan) {
    const plan = { ...generatedPlan };
    const custom = sessionState.customRoutine || {};
    daysOfWeekList.forEach(day => {
        const dayEntries = custom[day];
        if (dayEntries && dayEntries.length > 0) {
            plan[day] = {
                focus: 'Rutina Personalizada',
                exercises: dayEntries,
                isCustom: true
            };
        }
    });
    return plan;
}

function getEffectivePlan() {
    const generatedPlan = dynamicRoutineGenerator(sessionState.daysCount, sessionState.focus, sessionState.restDays);
    return applyCustomOverlay(generatedPlan);
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
// PROGRESO DIARIO
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
    const generatedPlan = getEffectivePlan();
    const todayData = generatedPlan[currentDayName] || generatedPlan['Lunes'];
    const displayExercises = todayData.isCustom ? todayData.exercises : applySubstitutions(todayData.exercises);

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
        const isCustomExercise = typeof ex.id === 'string' && ex.id.startsWith('custom_');
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
                    ${(!isRest && !isCustomExercise) ? `<button onclick="substituteExercise('${originalId}')" title="Cambiar ejercicio" class="w-7 h-7 rounded-full border border-neutral-800 text-neutral-500 hover:text-brandPurple hover:border-brandPurple/50 flex items-center justify-center transition-all">
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
    const generatedPlan = getEffectivePlan();
    const weeklyContainer = document.getElementById('weekly-distribution-container');
    weeklyContainer.innerHTML = '';

    Object.keys(generatedPlan).forEach(day => {
        const info = generatedPlan[day];
        const displayExercises = info.isCustom ? info.exercises : applySubstitutions(info.exercises);
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
                        <span class="text-[10px] ${info.isCustom ? 'text-emerald-400' : 'text-brandPurple'} font-mono font-medium">${info.focus}</span>
                    </div>
                    <ul class="space-y-1.5 pt-2 border-t border-neutral-900">${listHTML}</ul>
                </div>
                <button type="button" onclick="openCustomRoutineModal('${day}')" class="text-[10px] font-semibold text-neutral-500 hover:text-brandPurple flex items-center gap-1 pt-1">
                    <i data-lucide="pencil" class="w-3 h-3"></i> Editar rutina de este día
                </button>
            </div>
        `;
    });
    lucide.createIcons();
}

// =========================================================================
// NUTRICIÓN
// =========================================================================

function renderNutrition() {
    const nutrition = computeNutrition(sessionState);
    const bodyTypeTemplates = mealTemplates[sessionState.bodyType] || mealTemplates.Mesomorfo;
    const goalKey = sessionState.goal === 'loss' ? 'loss' : 'gain';
    
    // Rotación de opciones de comidas
    const altKey = `${goalKey}_alt`;
    const mealOptions = bodyTypeTemplates[goalKey] || [];
    const altOptions = bodyTypeTemplates[altKey] || mealOptions;
    
    // Determina qué opción mostrar (basado en la semana)
    const weekNumber = Math.floor((new Date() - new Date('2024-01-01')) / (1000 * 60 * 60 * 24 * 7)) % 2;
    const templates = weekNumber === 0 ? mealOptions : altOptions;

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

    renderFoodLog();
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
// DIARIO DE COMIDAS — búsqueda en base de alimentos (Open Food Facts)
// =========================================================================
// Open Food Facts es una base de datos de alimentos libre y sin API key.
// Se consulta por nombre y se obtienen los valores nutricionales por 100g,
// que luego se escalan según la cantidad que el usuario indique.
let lastFoodSearchResults = [];

async function searchFoodDatabase(query) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=20&fields=product_name,brands,nutriments`;
    
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
        
        const data = await res.json();
        if (!data.products || data.products.length === 0) {
            throw new Error('Sin resultados');
        }
        
        return (data.products || [])
            .filter(p => {
                // Validaciones más estrictas
                if (!p.product_name || p.product_name.trim().length < 2) return false;
                if (!p.nutriments) return false;
                
                const kcal = p.nutriments['energy-kcal_100g'];
                const protein = p.nutriments['proteins_100g'];
                const carbs = p.nutriments['carbohydrates_100g'];
                const fat = p.nutriments['fat_100g'];
                
                // Rechaza productos sin información nutricional mínima
                if (kcal == null || (protein == null && carbs == null && fat == null)) {
                    return false;
                }
                
                // Rechaza valores anómalos (ej: 9000+ kcal por 100g)
                if (kcal > 900) return false;
                
                return true;
            })
            .map((p, idx) => ({
                idx,
                name: p.product_name.trim(),
                brand: p.brands ? p.brands.split(',')[0].trim() : '',
                kcal100: Math.round(p.nutriments['energy-kcal_100g'] || 0),
                p100: Math.round((p.nutriments['proteins_100g'] || 0) * 10) / 10,
                c100: Math.round((p.nutriments['carbohydrates_100g'] || 0) * 10) / 10,
                f100: Math.round((p.nutriments['fat_100g'] || 0) * 10) / 10
            }))
            .slice(0, 8); // Limita a 8 resultados
            
    } catch (err) {
        console.error('Search error:', err);
        throw new Error(`Error al buscar: ${err.message}`);
    }
}

const foodSearchForm = document.getElementById('food-search-form');
foodSearchForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('food-search-input');
    const query = input.value.trim();
    const resultsContainer = document.getElementById('food-search-results');
    const btn = document.getElementById('food-search-btn');
    if (!query) return;

    btn.disabled = true;
    resultsContainer.innerHTML = `<p class="text-[11px] text-neutral-500 text-center py-3">Buscando...</p>`;

    try {
        lastFoodSearchResults = await searchFoodDatabase(query);
        renderFoodSearchResults();
    } catch (err) {
        console.error(err);
        resultsContainer.innerHTML = `<p class="text-[11px] text-red-400 text-center py-3">No se pudo buscar. Revisa tu conexión e intenta de nuevo.</p>`;
    } finally {
        btn.disabled = false;
    }
});

function renderFoodSearchResults() {
    const resultsContainer = document.getElementById('food-search-results');
    if (!resultsContainer) return;

    if (lastFoodSearchResults.length === 0) {
        resultsContainer.innerHTML = `<p class="text-[11px] text-neutral-500 text-center py-3">Sin resultados. Prueba con otro nombre.</p>`;
        return;
    }

    resultsContainer.innerHTML = lastFoodSearchResults.map(food => `
        <div class="flex items-center justify-between gap-2 p-3 rounded-xl bg-neutral-900 border border-neutral-800">
            <div class="min-w-0">
                <p class="text-xs font-semibold text-white truncate">${food.name}</p>
                <p class="text-[10px] text-neutral-500 truncate">${food.brand ? food.brand + ' · ' : ''}${food.kcal100} kcal / 100g</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
                <input type="number" min="1" value="100" id="food-qty-${food.idx}" class="w-16 bg-neutral-950 border border-neutral-800 rounded-lg px-2 py-1.5 text-white text-xs text-center focus:outline-none focus:border-brandPurple">
                <span class="text-[9px] text-neutral-500">g</span>
                <button type="button" onclick="addFoodLogEntry(${food.idx})" class="bg-brandPurple text-white rounded-lg w-7 h-7 flex items-center justify-center hover:opacity-90 transition-all shrink-0">
                    <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                </button>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

async function addFoodLogEntry(resultIdx) {
    const food = lastFoodSearchResults.find(f => f.idx === resultIdx);
    if (!food) {
        showToast('Error: No se encontró la comida seleccionada.', 'error');
        return;
    }
    
    const qtyInput = document.getElementById(`food-qty-${resultIdx}`);
    if (!qtyInput) {
        showToast('Error: No se pudo leer la cantidad.', 'error');
        return;
    }
    
    const qty = Math.max(parseFloat(qtyInput.value) || 100, 1);
    const factor = qty / 100;

    // Inicializa estructuras de datos correctamente
    const dateKey = todayKey();
    if (!sessionState) sessionState = {};
    if (!sessionState.foodLogByDate) sessionState.foodLogByDate = {};
    if (!sessionState.foodLogByDate[dateKey]) sessionState.foodLogByDate[dateKey] = [];

    // Crea el objeto de entrada correctamente
    const entry = {
        id: `food_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
        name: food.name || 'Alimento sin nombre',
        brand: food.brand || '',
        qty: Math.round(qty * 10) / 10,
        kcal: Math.round(food.kcal100 * factor),
        p: Math.round(food.p100 * factor * 10) / 10,
        c: Math.round(food.c100 * factor * 10) / 10,
        f: Math.round(food.f100 * factor * 10) / 10
    };

    // Valida que los valores sean numéricos
    if (isNaN(entry.kcal) || isNaN(entry.p) || isNaN(entry.c) || isNaN(entry.f)) {
        showToast('Error: Datos nutricionales inválidos.', 'error');
        return;
    }

    sessionState.foodLogByDate[dateKey].push(entry);

    try {
        await saveSession();
        showToast(`"${food.name}" ✓ agregado a tu diario.`, 'success');
        renderFoodLog();
        
        // Limpia el input
        const input = document.getElementById('food-search-input');
        if (input) input.value = '';
    } catch (err) {
        console.error('Error saving:', err);
        showToast('Error al guardar. Intenta de nuevo.', 'error');
        sessionState.foodLogByDate[dateKey].pop(); // Revierte el cambio
    }
}

async function removeFoodLogEntry(entryId) {
    const dateKey = todayKey();
    const entries = sessionState.foodLogByDate?.[dateKey] || [];
    sessionState.foodLogByDate[dateKey] = entries.filter(e => e.id !== entryId);
    await saveSession();
    renderFoodLog();
}

function renderFoodLog() {
    const listContainer = document.getElementById('food-log-list');
    const emptyNote = document.getElementById('food-log-empty-note');
    const barsContainer = document.getElementById('food-log-macro-bars');
    const totalKcalLabel = document.getElementById('food-log-total-kcal');
    if (!listContainer || !barsContainer || !totalKcalLabel) return;

    const dateKey = todayKey();
    const entries = (sessionState.foodLogByDate || {})[dateKey] || [];

    listContainer.innerHTML = '';
    if (entries.length === 0) {
        emptyNote?.classList.remove('hidden');
    } else {
        emptyNote?.classList.add('hidden');
        entries.forEach(entry => {
            listContainer.innerHTML += `
                <div class="flex items-center justify-between gap-2 p-3 rounded-xl bg-neutral-950 border border-neutral-900">
                    <div class="min-w-0">
                        <p class="text-xs font-semibold text-white truncate">${entry.name}</p>
                        <p class="text-[10px] text-neutral-500">${entry.qty}g · ${entry.kcal} kcal · P${entry.p}g C${entry.c}g F${entry.f}g</p>
                    </div>
                    <button type="button" onclick="removeFoodLogEntry('${entry.id}')" class="text-neutral-500 hover:text-red-400 transition-colors shrink-0">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            `;
        });
    }

    const totals = entries.reduce((acc, e) => ({
        kcal: acc.kcal + e.kcal,
        p: acc.p + e.p,
        c: acc.c + e.c,
        g: acc.g + e.g
    }), { kcal: 0, p: 0, c: 0, g: 0 });

    const nutrition = computeNutrition(sessionState);
    totalKcalLabel.textContent = `${Math.round(totals.kcal).toLocaleString('es')} / ${nutrition.targetKcal.toLocaleString('es')} kcal`;

    barsContainer.innerHTML = `
        ${createMacroBarHTML('Proteínas', `${Math.round(totals.p)}g / ${nutrition.macros.p}g`, 'bg-purple-500', totals.p, nutrition.macros.p)}
        ${createMacroBarHTML('Carbohidratos', `${Math.round(totals.c)}g / ${nutrition.macros.c}g`, 'bg-yellow-500', totals.c, nutrition.macros.c)}
        ${createMacroBarHTML('Grasas', `${Math.round(totals.g)}g / ${nutrition.macros.g}g`, 'bg-emerald-500', totals.g, nutrition.macros.g)}
    `;
    lucide.createIcons();
}

// =========================================================================
// ESCANEO DE COMIDA — código de barras (Open Food Facts) y foto con IA
// =========================================================================
// Ambos modos reutilizan la cámara del celular vía <input type="file"
// capture="environment">, que es lo más compatible entre navegadores (evita
// tener que manejar un stream de video en vivo).

let pendingScanFood = null; // alimento detectado (código o foto), esperando confirmar cantidad
let pendingTextFoodItems = []; // alimentos detectados desde texto/voz, esperando confirmar

function openScanFoodModal() {
    document.getElementById('scan-food-modal')?.classList.remove('hidden');
    document.getElementById('scan-result-container').innerHTML = '';
    pendingScanFood = null;
    pendingTextFoodItems = [];
    stopVoiceInput();
    selectScanMode('barcode');
}

function closeScanFoodModal() {
    document.getElementById('scan-food-modal')?.classList.add('hidden');
    document.getElementById('scan-result-container').innerHTML = '';
    pendingScanFood = null;
    pendingTextFoodItems = [];
    stopVoiceInput();
}

function selectScanMode(mode) {
    ['barcode', 'photo', 'text'].forEach(m => {
        document.getElementById(`scan-mode-${m}`).classList.toggle('hidden', m !== mode);
        document.getElementById(`scan-tab-${m}`).classList.toggle('bg-brandPurple', m === mode);
        document.getElementById(`scan-tab-${m}`).classList.toggle('text-white', m === mode);
        document.getElementById(`scan-tab-${m}`).classList.toggle('text-neutral-400', m !== mode);
    });
    document.getElementById('scan-result-container').innerHTML = '';
    pendingScanFood = null;
    pendingTextFoodItems = [];
}

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// ---- Modo código de barras ----
async function handleBarcodePhoto(fileInputEvent) {
    const file = fileInputEvent.target.files[0];
    if (!file) return;
    const resultContainer = document.getElementById('scan-result-container');
    resultContainer.innerHTML = `<p class="text-[11px] text-neutral-500 text-center py-3">Leyendo código de barras...</p>`;

    try {
        if (!('BarcodeDetector' in window)) {
            resultContainer.innerHTML = `
                <p class="text-[11px] text-amber-400 text-center py-2">Tu navegador no soporta lectura automática. Escribe el número manualmente:</p>
                <div class="flex gap-2">
                    <input type="text" id="manual-barcode-input" placeholder="Número de código de barras" class="flex-grow bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-brandPurple">
                    <button type="button" onclick="lookupBarcodeManual()" class="bg-brandPurple text-white text-xs font-semibold rounded-xl px-4">Buscar</button>
                </div>
            `;
            return;
        }
        const bitmap = await createImageBitmap(file);
        const detector = new BarcodeDetector();
        const codes = await detector.detect(bitmap);
        if (codes.length === 0) {
            resultContainer.innerHTML = `<p class="text-[11px] text-red-400 text-center py-3">No se detectó ningún código. Intenta con más luz y enfoque.</p>`;
            return;
        }
        await lookupBarcode(codes[0].rawValue);
    } catch (err) {
        console.error(err);
        resultContainer.innerHTML = `<p class="text-[11px] text-red-400 text-center py-3">Error leyendo la imagen. Intenta de nuevo.</p>`;
    } finally {
        fileInputEvent.target.value = '';
    }
}

async function lookupBarcodeManual() {
    const input = document.getElementById('manual-barcode-input');
    const code = input?.value.trim();
    if (!code) return;
    await lookupBarcode(code);
}

async function lookupBarcode(barcode) {
    const resultContainer = document.getElementById('scan-result-container');
    
    // Validación de entrada
    const cleanBarcode = barcode.trim();
    if (!cleanBarcode || cleanBarcode.length < 8) {
        resultContainer.innerHTML = `<p class="text-[11px] text-red-400 text-center py-3">⚠️ Código de barras inválido (muy corto).</p>`;
        return;
    }
    
    // Solo números
    if (!/^\d+$/.test(cleanBarcode)) {
        resultContainer.innerHTML = `<p class="text-[11px] text-red-400 text-center py-3">⚠️ El código debe contener solo números.</p>`;
        return;
    }
    
    resultContainer.innerHTML = `<p class="text-[11px] text-neutral-500 text-center py-3">🔍 Buscando producto...</p>`;
    
    // Reintentos automáticos
    let lastError = null;
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const res = await fetch(
                `https://world.openfoodfacts.org/api/v0/product/${encodeURIComponent(cleanBarcode)}.json`
            );
            
            if (!res.ok) {
                lastError = `Error HTTP ${res.status}`;
                if (attempt < 3) {
                    await new Promise(r => setTimeout(r, 500 * attempt));
                    continue;
                }
                throw new Error(lastError);
            }
            
            const data = await res.json();
            
            if (data.status !== 1 || !data.product) {
                resultContainer.innerHTML = `<p class="text-[11px] text-yellow-400 text-center py-3">⚠️ Producto no encontrado en la base de datos.</p>`;
                return;
            }
            
            const n = data.product.nutriments || {};
            
            // Valida que tenga información nutricional
            if (!n['energy-kcal_100g'] && !n['proteins_100g'] && !n['carbohydrates_100g'] && !n['fat_100g']) {
                resultContainer.innerHTML = `<p class="text-[11px] text-yellow-400 text-center py-3">⚠️ El producto no tiene información nutricional.</p>`;
                return;
            }
            
            pendingScanFood = {
                name: data.product.product_name || 'Producto sin nombre',
                brand: data.product.brands ? data.product.brands.split(',')[0].trim() : '',
                kcal100: Math.round(n['energy-kcal_100g'] || 0),
                p100: Math.round((n['proteins_100g'] || 0) * 10) / 10,
                c100: Math.round((n['carbohydrates_100g'] || 0) * 10) / 10,
                f100: Math.round((n['fat_100g'] || 0) * 10) / 10
            };
            
            renderScanConfirmation();
            return;
            
        } catch (err) {
            lastError = err.message;
            if (attempt < 3) {
                await new Promise(r => setTimeout(r, 500 * attempt));
            }
        }
    }
    
    console.error('Barcode lookup failed after 3 attempts:', lastError);
    resultContainer.innerHTML = `<p class="text-[11px] text-red-400 text-center py-3">❌ No se pudo buscar el producto. Revisa tu conexión e intenta de nuevo.</p>`;
}

// ---- Modo foto con IA (comida sin código, ej. fruta o plato casero) ----
async function handleFoodPhoto(fileInputEvent) {
    const file = fileInputEvent.target.files[0];
    if (!file) return;
    const resultContainer = document.getElementById('scan-result-container');
    resultContainer.innerHTML = `<p class="text-[11px] text-neutral-500 text-center py-3">Analizando la foto con IA...</p>`;

    try {
        const base64 = await fileToBase64(file);
        const res = await fetch('/api/recognize-food', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageBase64: base64, mimeType: file.type || 'image/jpeg' })
        });
        const data = await res.json();
        if (!res.ok || !data || !data.name) {
            resultContainer.innerHTML = `<p class="text-[11px] text-red-400 text-center py-3">${data?.error || 'No se pudo identificar el alimento. Intenta con una foto más clara.'}</p>`;
            return;
        }
        const grams = data.estimated_grams || 100;
        pendingScanFood = {
            name: data.name,
            brand: '',
            kcal100: Math.round((data.kcal / grams) * 100),
            p100: Math.round((data.protein_g / grams) * 100 * 10) / 10,
            c100: Math.round((data.carbs_g / grams) * 100 * 10) / 10,
            f100: Math.round((data.fat_g / grams) * 100 * 10) / 10,
            suggestedGrams: grams,
            isAiEstimate: true
        };
        renderScanConfirmation();
    } catch (err) {
        console.error(err);
        resultContainer.innerHTML = `<p class="text-[11px] text-red-400 text-center py-3">No se pudo analizar la foto. Intenta de nuevo.</p>`;
    } finally {
        fileInputEvent.target.value = '';
    }
}

function renderScanConfirmation() {
    const resultContainer = document.getElementById('scan-result-container');
    if (!pendingScanFood) return;
    const qty = pendingScanFood.suggestedGrams || 100;
    resultContainer.innerHTML = `
        <div class="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
            <p class="text-xs font-semibold text-white">${pendingScanFood.name}</p>
            ${pendingScanFood.isAiEstimate ? `<p class="text-[10px] text-amber-400">Estimado por IA — revisa y ajusta la cantidad si hace falta.</p>` : ''}
            <div class="flex items-center gap-2">
                <input type="number" min="1" value="${qty}" id="scan-qty-input" class="w-20 bg-neutral-950 border border-neutral-800 rounded-lg px-2 py-1.5 text-white text-xs text-center focus:outline-none focus:border-brandPurple">
                <span class="text-[10px] text-neutral-500">g</span>
                <button type="button" onclick="confirmScannedFood()" class="ml-auto bg-brandPurple text-white text-xs font-semibold rounded-lg px-4 py-2">Agregar a hoy</button>
            </div>
        </div>
    `;
}

async function confirmScannedFood() {
    if (!pendingScanFood) return;
    const qtyInput = document.getElementById('scan-qty-input');
    const qty = Math.max(parseFloat(qtyInput?.value) || 100, 1);
    const factor = qty / 100;

    const dateKey = todayKey();
    if (!sessionState.foodLogByDate) sessionState.foodLogByDate = {};
    if (!sessionState.foodLogByDate[dateKey]) sessionState.foodLogByDate[dateKey] = [];

    sessionState.foodLogByDate[dateKey].push({
        id: `food_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        name: pendingScanFood.name,
        brand: pendingScanFood.brand,
        qty,
        kcal: Math.round(pendingScanFood.kcal100 * factor),
        p: Math.round(pendingScanFood.p100 * factor * 10) / 10,
        c: Math.round(pendingScanFood.c100 * factor * 10) / 10,
        g: Math.round(pendingScanFood.f100 * factor * 10) / 10
    });

    await saveSession();
    showToast(`"${pendingScanFood.name}" agregado a tu diario.`, 'success');
    closeScanFoodModal();
    renderFoodLog();
}

// ---- Modo texto / voz ----
// La transcripción por voz reutiliza el mismo cuadro de texto: el micrófono
// solo llena el textarea, y el botón "Analizar con IA" es el que interpreta
// el texto (escrito a mano o dictado) y estima los alimentos.
let voiceRecognition = null;
let isListening = false;

function getSpeechRecognitionAPI() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function toggleVoiceInput() {
    const SpeechRecognitionAPI = getSpeechRecognitionAPI();
    const btn = document.getElementById('voice-input-btn');
    const textarea = document.getElementById('text-food-input');

    if (!SpeechRecognitionAPI) {
        showToast('Tu navegador no soporta dictado por voz. Escribe el texto manualmente.', 'error');
        return;
    }

    if (isListening) {
        stopVoiceInput();
        return;
    }

    voiceRecognition = new SpeechRecognitionAPI();
    voiceRecognition.lang = 'es-ES';
    voiceRecognition.interimResults = false;
    voiceRecognition.maxAlternatives = 1;

    voiceRecognition.onstart = () => {
        isListening = true;
        btn.classList.add('bg-red-500', 'animate-pulse');
        btn.classList.remove('bg-neutral-800');
    };

    voiceRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        textarea.value = (textarea.value.trim() ? textarea.value.trim() + ' ' : '') + transcript;
    };

    voiceRecognition.onerror = () => {
        showToast('No se pudo captar el audio. Intenta de nuevo.', 'error');
    };

    voiceRecognition.onend = () => {
        stopVoiceInput();
    };

    voiceRecognition.start();
}

function stopVoiceInput() {
    if (voiceRecognition && isListening) {
        try { voiceRecognition.stop(); } catch (e) { /* noop */ }
    }
    isListening = false;
    const btn = document.getElementById('voice-input-btn');
    if (btn) {
        btn.classList.remove('bg-red-500', 'animate-pulse');
        btn.classList.add('bg-neutral-800');
    }
}

async function analyzeTextFood() {
    const textarea = document.getElementById('text-food-input');
    const text = textarea?.value.trim();
    const resultContainer = document.getElementById('scan-result-container');
    if (!text) {
        showToast('Escribe o dicta lo que comiste primero.', 'error');
        return;
    }

    resultContainer.innerHTML = `<p class="text-[11px] text-neutral-500 text-center py-3">Analizando con IA...</p>`;

    try {
        const res = await fetch('/api/interpret-food-text', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });
        const data = await res.json();
        if (!res.ok || !data.items || data.items.length === 0) {
            resultContainer.innerHTML = `<p class="text-[11px] text-red-400 text-center py-3">${data?.error || 'No se pudo identificar ningún alimento en el texto. Intenta ser más específico.'}</p>`;
            return;
        }
        pendingTextFoodItems = data.items.map(item => ({ ...item, qty: item.estimated_grams }));
        renderTextFoodResults();
    } catch (err) {
        console.error(err);
        resultContainer.innerHTML = `<p class="text-[11px] text-red-400 text-center py-3">No se pudo analizar el texto. Intenta de nuevo.</p>`;
    }
}

function renderTextFoodResults() {
    const resultContainer = document.getElementById('scan-result-container');
    if (pendingTextFoodItems.length === 0) return;

    resultContainer.innerHTML = `
        <div class="space-y-2">
            <p class="text-[10px] text-amber-400">Estimado por IA — revisa y ajusta las cantidades si hace falta.</p>
            ${pendingTextFoodItems.map((item, idx) => `
                <div class="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                    <p class="text-xs font-semibold text-white">${item.name}</p>
                    <div class="flex items-center gap-2">
                        <input type="number" min="1" value="${item.qty}" onchange="updateTextFoodQty(${idx}, this.value)" class="w-20 bg-neutral-950 border border-neutral-800 rounded-lg px-2 py-1.5 text-white text-xs text-center focus:outline-none focus:border-brandPurple">
                        <span class="text-[10px] text-neutral-500">g</span>
                        <span class="text-[10px] text-neutral-500 ml-auto">${Math.round(item.kcal * (item.qty / item.estimated_grams))} kcal</span>
                    </div>
                </div>
            `).join('')}
            <button type="button" onclick="confirmAllTextFoodItems()" class="w-full bg-brandPurple text-white text-xs font-semibold rounded-xl py-2.5 hover:opacity-90 transition-all">
                Agregar todo a hoy
            </button>
        </div>
    `;
}

function updateTextFoodQty(idx, value) {
    const qty = Math.max(parseFloat(value) || 1, 1);
    pendingTextFoodItems[idx].qty = qty;
}

async function confirmAllTextFoodItems() {
    if (pendingTextFoodItems.length === 0) return;

    const dateKey = todayKey();
    if (!sessionState.foodLogByDate) sessionState.foodLogByDate = {};
    if (!sessionState.foodLogByDate[dateKey]) sessionState.foodLogByDate[dateKey] = [];

    pendingTextFoodItems.forEach(item => {
        const factor = item.qty / item.estimated_grams;
        sessionState.foodLogByDate[dateKey].push({
            id: `food_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
            name: item.name,
            brand: '',
            qty: item.qty,
            kcal: Math.round(item.kcal * factor),
            p: Math.round(item.protein_g * factor * 10) / 10,
            c: Math.round(item.carbs_g * factor * 10) / 10,
            g: Math.round(item.fat_g * factor * 10) / 10
        });
    });

    await saveSession();
    showToast(`${pendingTextFoodItems.length} alimento(s) agregados a tu diario.`, 'success');
    pendingTextFoodItems = [];
    closeScanFoodModal();
    renderFoodLog();
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
// PESO CORPORAL + GRÁFICO
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
    const log = sessionState.weightLog.slice(-14);
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
// SELECCIÓN DE DÍAS DE DESCANSO (NUEVA CARACTERÍSTICA)
// =========================================================================

function openRestDaysModal() {
    const modal = document.getElementById('rest-days-modal');
    if (!modal) return;
    
    modal.classList.remove('hidden');
    
    // Renderizar checkboxes para cada día
    const container = document.getElementById('rest-days-container');
    container.innerHTML = '';
    
    daysOfWeekList.forEach((day, idx) => {
        const isRest = sessionState.restDays.includes(idx);
        container.innerHTML += `
            <label class="flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${isRest ? 'border-brandPurple/40 bg-brandPurple/[0.05]' : 'border-neutral-800 bg-cardBg'}">
                <input type="checkbox" value="${idx}" ${isRest ? 'checked' : ''} class="rest-day-checkbox w-4 h-4 rounded" onchange="updateRestDay(this)">
                <span class="text-sm font-medium text-white">${day}</span>
            </label>
        `;
    });
}

function closeRestDaysModal() {
    const modal = document.getElementById('rest-days-modal');
    if (modal) modal.classList.add('hidden');
}

async function updateRestDay(checkbox) {
    const dayIdx = parseInt(checkbox.value);
    if (checkbox.checked) {
        if (!sessionState.restDays.includes(dayIdx)) {
            sessionState.restDays.push(dayIdx);
        }
    } else {
        sessionState.restDays = sessionState.restDays.filter(d => d !== dayIdx);
    }
    await saveSession();
    buildUserWorkspace();
    showToast('Días de descanso actualizados.', 'success');
}

// =========================================================================
// RUTINA PERSONALIZADA — modal de edición (texto libre por día)
// =========================================================================

let customRoutineActiveDay = currentDayName;

function openCustomRoutineModal(day) {
    const modal = document.getElementById('custom-routine-modal');
    if (!modal) return;
    customRoutineActiveDay = day || currentDayName;
    modal.classList.remove('hidden');
    renderCustomRoutineDayTabs();
    renderCustomRoutineList();
}

function closeCustomRoutineModal() {
    const modal = document.getElementById('custom-routine-modal');
    if (modal) modal.classList.add('hidden');
}

function renderCustomRoutineDayTabs() {
    const container = document.getElementById('custom-routine-day-tabs');
    if (!container) return;
    container.innerHTML = daysOfWeekList.map(day => `
        <button type="button" onclick="selectCustomRoutineDay('${day}')"
            class="shrink-0 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all ${day === customRoutineActiveDay ? 'bg-brandPurple text-white' : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'}">
            ${day.slice(0, 3)}
        </button>
    `).join('');
}

function selectCustomRoutineDay(day) {
    customRoutineActiveDay = day;
    renderCustomRoutineDayTabs();
    renderCustomRoutineList();
}

function renderCustomRoutineList() {
    const list = document.getElementById('custom-routine-list');
    const emptyNote = document.getElementById('custom-routine-empty-note');
    if (!list) return;

    const entries = (sessionState.customRoutine || {})[customRoutineActiveDay] || [];
    list.innerHTML = '';

    if (entries.length === 0) {
        if (emptyNote) emptyNote.classList.remove('hidden');
    } else {
        if (emptyNote) emptyNote.classList.add('hidden');
        entries.forEach(ex => {
            list.innerHTML += `
                <div class="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div class="min-w-0">
                        <p class="text-xs font-semibold text-white truncate">${ex.t}</p>
                        <p class="text-[10px] text-neutral-500 truncate">${ex.d}</p>
                    </div>
                    <button type="button" onclick="removeCustomRoutineExercise('${ex.id}')" class="text-neutral-500 hover:text-red-400 transition-colors shrink-0 ml-2">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            `;
        });
    }
    lucide.createIcons();
}

async function addCustomRoutineExercise() {
    const nameInput = document.getElementById('custom-exercise-name-input');
    const detailInput = document.getElementById('custom-exercise-detail-input');
    const name = nameInput.value.trim();
    const detail = detailInput.value.trim();

    if (!name) {
        showToast('Escribe el nombre del ejercicio.', 'error');
        return;
    }

    if (!sessionState.customRoutine) sessionState.customRoutine = {};
    if (!sessionState.customRoutine[customRoutineActiveDay]) sessionState.customRoutine[customRoutineActiveDay] = [];

    sessionState.customRoutine[customRoutineActiveDay].push({
        id: `custom_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        t: name,
        c: 'Personalizado',
        d: detail || 'Series y repeticiones a tu criterio'
    });

    await saveSession();
    nameInput.value = '';
    detailInput.value = '';
    renderCustomRoutineList();
    buildUserWorkspace();
    showToast('Ejercicio agregado a tu rutina.', 'success');
}

async function removeCustomRoutineExercise(exerciseId) {
    const entries = (sessionState.customRoutine || {})[customRoutineActiveDay] || [];
    sessionState.customRoutine[customRoutineActiveDay] = entries.filter(e => e.id !== exerciseId);
    await saveSession();
    renderCustomRoutineList();
    buildUserWorkspace();
}

// Vuelve a usar el generador automático para el día activo, descartando
// la rutina escrita a mano para ese día.
async function resetCustomRoutineDay() {
    if (sessionState.customRoutine) {
        sessionState.customRoutine[customRoutineActiveDay] = [];
    }
    await saveSession();
    renderCustomRoutineList();
    buildUserWorkspace();
    showToast(`Se restauró el generador automático para ${customRoutineActiveDay}.`, 'success');
}

// =========================================================================
// AVATAR
// =========================================================================

function renderAvatar(initials) {
    // FIX: la función original solo intentaba actualizar el elemento con
    // id="profile-avatar", que no existe en el HTML. Por eso la foto se
    // subía correctamente a Supabase Storage pero nunca se veía reflejada
    // en pantalla. Ahora se actualizan todos los avatares reales del DOM.
    const avatarIds = ['sidebar-avatar', 'user-avatar', 'profile-big-avatar', 'edit-profile-avatar-preview'];
    avatarIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (sessionState.avatarUrl && sessionState.avatarUrl.startsWith('http')) {
            el.innerHTML = `<img src="${sessionState.avatarUrl}" alt="Avatar" class="w-full h-full object-cover rounded-full">`;
        } else {
            el.textContent = initials;
        }
    });
}

async function uploadAvatar(file) {
    if (!file || !sessionState) return;
    
    try {
        const ext = file.name.split('.').pop();
        const path = `${sessionState.id}/avatar.${ext}`;
        
        const { error: uploadError } = await supabaseClient
            .storage
            .from('avatars')
            .upload(path, file, { upsert: true });
        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabaseClient
            .storage
            .from('avatars')
            .getPublicUrl(path);

        sessionState.avatarUrl = `${publicUrlData.publicUrl}?t=${Date.now()}`;

        const { error: updateError } = await supabaseClient
            .from('profiles')
            .update({ avatar_url: sessionState.avatarUrl })
            .eq('id', sessionState.id);
        if (updateError) throw updateError;

        const initials = sessionState.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'FI';
        renderAvatar(initials);
        showToast('Foto de perfil actualizada.', 'success');
    } catch (err) {
        console.error(err);
        showToast(err.message || 'No se pudo subir la foto.', 'error');
    }
}

document.getElementById('edit-avatar-upload-input')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    uploadAvatar(file);
});

// =========================================================================
// EDITAR PERFIL
// =========================================================================

function openEditProfile() {
    if (!sessionState) return;
    document.getElementById('edit-name').value = sessionState.name;
    document.getElementById('edit-age').value = sessionState.age;
    document.getElementById('edit-weight').value = sessionState.weightKg;
    document.getElementById('edit-height').value = sessionState.heightCm;
    document.getElementById('edit-gender').value = sessionState.gender;
    document.getElementById('edit-body-type').value = sessionState.bodyType;
    document.getElementById('edit-days-count').value = sessionState.daysCount;
    document.getElementById('edit-focus').value = sessionState.focus;
    document.querySelector(`input[name="edit-goal"][value="${sessionState.goal}"]`).checked = true;

    document.getElementById('edit-profile-modal').classList.remove('hidden');
}

function closeEditProfile() {
    document.getElementById('edit-profile-modal').classList.add('hidden');
}

const editProfileForm = document.getElementById('edit-profile-form');
editProfileForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('edit-profile-submit-btn');
    submitBtn.disabled = true;

    try {
        sessionState.name = document.getElementById('edit-name').value.trim();
        sessionState.age = parseInt(document.getElementById('edit-age').value);
        sessionState.weightKg = parseFloat(document.getElementById('edit-weight').value);
        sessionState.heightCm = parseFloat(document.getElementById('edit-height').value);
        sessionState.gender = document.getElementById('edit-gender').value;
        sessionState.bodyType = document.getElementById('edit-body-type').value;
        sessionState.daysCount = parseInt(document.getElementById('edit-days-count').value);
        sessionState.focus = document.getElementById('edit-focus').value;
        sessionState.goal = document.querySelector('input[name="edit-goal"]:checked').value;

        await saveSession();
        closeEditProfile();
        buildUserWorkspace();
        showToast('Perfil actualizado.', 'success');
    } catch (err) {
        console.error(err);
        showToast('No se pudo actualizar tu perfil.', 'error');
    } finally {
        submitBtn.disabled = false;
    }
});

// =========================================================================
// RECORDATORIOS
// =========================================================================

let reminderIntervalId = null;

function renderReminderUI() {
    const toggle = document.getElementById('reminder-toggle');
    const timeInput = document.getElementById('reminder-time-input');
    if (!toggle || !timeInput || !sessionState) return;

    toggle.checked = !!sessionState.reminderEnabled;
    timeInput.value = sessionState.reminderTime || '19:00';

    const types = sessionState.reminderTypes || { routine: true, water: false, food: false };
    const routineBox = document.getElementById('reminder-type-routine');
    const waterBox = document.getElementById('reminder-type-water');
    const foodBox = document.getElementById('reminder-type-food');
    if (routineBox) routineBox.checked = types.routine !== false;
    if (waterBox) waterBox.checked = !!types.water;
    if (foodBox) foodBox.checked = !!types.food;
}

async function handleReminderToggle(checked) {
    if (checked && Notification.permission !== 'granted') {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
            showToast('Necesitas permitir notificaciones en tu navegador para activar esto.', 'error');
            document.getElementById('reminder-toggle').checked = false;
            return;
        }
    }

    sessionState.reminderEnabled = checked;
    await saveSession();
    showToast(checked ? 'Recordatorios activados.' : 'Recordatorios desactivados.', 'success');
}

async function handleReminderTimeChange(value) {
    sessionState.reminderTime = value;
    await saveSession();
    showToast('Hora del recordatorio actualizada.', 'success');
}

// NUEVO: activa/desactiva qué avisos incluir en el recordatorio diario
// (rutina, agua, comida). Todos comparten la misma hora configurada arriba.
async function handleReminderTypeChange(type, checked) {
    if (!sessionState.reminderTypes) {
        sessionState.reminderTypes = { routine: true, water: false, food: false };
    }
    sessionState.reminderTypes[type] = checked;
    await saveSession();
}

document.getElementById('reminder-toggle')?.addEventListener('change', (e) => handleReminderToggle(e.target.checked));
document.getElementById('reminder-time-input')?.addEventListener('change', (e) => handleReminderTimeChange(e.target.value));
document.getElementById('reminder-type-routine')?.addEventListener('change', (e) => handleReminderTypeChange('routine', e.target.checked));
document.getElementById('reminder-type-water')?.addEventListener('change', (e) => handleReminderTypeChange('water', e.target.checked));
document.getElementById('reminder-type-food')?.addEventListener('change', (e) => handleReminderTypeChange('food', e.target.checked));

function startReminderWatcher() {
    if (reminderIntervalId) clearInterval(reminderIntervalId);
    reminderIntervalId = setInterval(checkReminder, 60 * 1000);
    checkReminder();
}

function checkReminder() {
    if (!sessionState || !sessionState.reminderEnabled) return;
    if (Notification.permission !== 'granted') return;

    const now = new Date();
    const currentHHMM = now.toTimeString().slice(0, 5);
    if (currentHHMM !== sessionState.reminderTime) return;

    const today = todayKey();
    const alreadyNotifiedKey = `tnyfit_reminder_sent_${today}`;
    if (localStorage.getItem(alreadyNotifiedKey)) return;

    const types = sessionState.reminderTypes || { routine: true, water: false, food: false };
    const pendingMessages = [];

    if (types.routine !== false) {
        const completedToday = sessionState.completedByDate[today] || [];
        const generatedPlan = getEffectivePlan();
        const todayData = generatedPlan[currentDayName] || generatedPlan['Lunes'];
        const totalExercises = todayData.exercises.filter(ex => ex.id !== 'rest').length;
        if (totalExercises > 0 && completedToday.length < totalExercises) {
            pendingMessages.push('completar tu rutina de hoy 💪');
        }
    }

    if (types.water) {
        const currentMl = sessionState.waterByDate[today] || 0;
        const goalMl = getWaterGoalMl();
        if (currentMl < goalMl) {
            pendingMessages.push('tomar más agua 💧');
        }
    }

    if (types.food) {
        const entriesToday = (sessionState.foodLogByDate || {})[today] || [];
        if (entriesToday.length === 0) {
            pendingMessages.push('registrar tus comidas de hoy 🍽️');
        }
    }

    if (pendingMessages.length === 0) return;

    new Notification('TNY FIT', {
        body: `No olvides: ${pendingMessages.join(', ')}`,
        icon: 'TNY SIN FONDO.png'
    });
    localStorage.setItem(alreadyNotifiedKey, '1');
}

// =========================================================================
// DONACIONES
// =========================================================================

function renderDonationInfo() {
    const linkBtn = document.getElementById('donation-link-btn');
    const infoLabel = document.getElementById('donation-payment-info');
    if (linkBtn) linkBtn.href = DONATION_LINK;
    if (infoLabel) infoLabel.textContent = DONATION_PAYMENT_INFO;
}

function copyDonationInfo() {
    navigator.clipboard.writeText(DONATION_PAYMENT_INFO)
        .then(() => showToast('Datos copiados al portapapeles.', 'success'))
        .catch(() => showToast('No se pudo copiar. Cópialo manualmente.', 'error'));
}

// =========================================================================
// TABS + WORKSPACE
// =========================================================================

function switchTab(tab) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(`tab-${tab}`)?.classList.add('active');
    document.querySelectorAll('[data-tab-mobile-target]').forEach(btn => {
        btn.classList.toggle('text-white', btn.dataset.tabMobileTarget === tab);
        btn.classList.toggle('text-neutral-500', btn.dataset.tabMobileTarget !== tab);
    });
}

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
    renderAvatar(initials);

    const goalStr = sessionState.goal === 'gain' ? 'Superávit Muscular' : 'Déficit Calórico';
    document.getElementById('profile-meta').textContent = `${sessionState.bodyType} • ${focusText} • ${goalStr} • ${sessionState.weightKg}kg / ${sessionState.heightCm}cm`;
    document.getElementById('days-counter-badge').textContent = `${sessionState.daysCount} DÍAS`;

    renderDailyRoutine();
    renderWeeklyCalendar();
    renderNutrition();
    renderWaterWidget();
    renderWeightChart();
    renderReminderUI();
    renderDonationInfo();
    startReminderWatcher();

    document.getElementById('screen-login').classList.add('opacity-0');
    setTimeout(() => {
        document.getElementById('screen-login').classList.add('hidden');
        document.getElementById('screen-dashboard').classList.remove('hidden');
        setTimeout(() => { document.getElementById('screen-dashboard').classList.remove('opacity-0'); }, 50);
    }, 400);
}

// =========================================================================
// INICIALIZACIÓN
// =========================================================================

// FIX: el botón "Instalar App" del sidebar llamaba a triggerInstall(), que
// nunca estaba definida, así que el botón no hacía nada al hacer clic.
async function triggerInstall() {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    if (outcome === 'accepted') showToast('¡TNY FIT se está instalando!', 'success');
    deferredInstallPrompt = null;
    document.getElementById('pwa-install-btn')?.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    checkActiveSession();
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredInstallPrompt = e;
        document.getElementById('pwa-install-btn')?.classList.remove('hidden');
    });
});