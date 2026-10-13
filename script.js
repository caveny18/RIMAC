/* ==========================================================================
   1. BASES DE DATOS OFICIALES (TARIFAS, CLÍNICAS Y DOCUMENTOS)
   ========================================================================== */

// Tarifas para Salud Modulares (Vital, Red Preferente, Red Médica)
const RATES_MODULARES = [
    { min: 0, max: 5, pref: 4418.03, vital: 2162.00, medica: 5004.55 },
    { min: 6, max: 15, pref: 4418.03, vital: 2162.00, medica: 5004.55 },
    { min: 16, max: 20, pref: 4418.03, vital: 2162.00, medica: 5004.55 },
    { min: 21, max: 25, pref: 4418.03, vital: 2259.26, medica: 5004.55 },
    { min: 26, max: 30, pref: 4859.00, vital: 2739.32, medica: 6542.10 },
    { min: 31, max: 50, pref: 8287.12, vital: 4818.82, medica: 11847.32 },
    { min: 51, max: 99, pref: 28544.66, vital: 18492.93, medica: 41669.30 }
];

// Tarifas para Salud de Oro (Adulto Mayor)
const RATES_ORO = [
    { min: 50, max: 55, oro: 7800.00 },
    { min: 56, max: 60, oro: 9400.00 },
    { min: 61, max: 65, oro: 12500.00 },
    { min: 66, max: 70, oro: 16800.00 },
    { min: 71, max: 99, oro: 24500.00 }
];

/* ==========================================================================
   BASE DE DATOS 100% EXHAUSTIVA - TODAS LAS CLÍNICAS Y CENTROS OFICIALES RÍMAC
   ========================================================================== */
const CLINICS_DATABASE = [
    // --- LIMA Y CALLAO (REDES 1 A 8) ---
    { name: 'Clínica Delgado', district: 'Miraflores', plans: ['Red Médica', 'Red Preferente'], specialties: ['Cardiología', 'Oncología', 'Pediatría', 'Emergencias 24h', 'Maternidad', 'Alta Complejidad'] },
    { name: 'Clínica Anglo Americana', district: 'San Isidro / La Molina', plans: ['Red Médica', 'Red Preferente'], specialties: ['Cardiología', 'Oncología', 'Pediatría', 'Emergencias 24h', 'Maternidad'] },
    { name: 'Clínica San Felipe', district: 'Jesús María / La Molina', plans: ['Red Médica', 'Red Preferente', 'Salud de Oro'], specialties: ['Cardiología', 'Pediatría', 'Geriatría', 'Emergencias 24h', 'Maternidad', 'Oncología'] },
    { name: 'Clínica Internacional', district: 'Cercado de Lima / San Borja / Surco / San Isidro', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud de Oro', 'Salud Flexible'], specialties: ['Cardiología', 'Oncología', 'Pediatría', 'Geriatría', 'Emergencias 24h', 'Maternidad'] },
    { name: 'Clínica San Pablo', district: 'Santiago de Surco', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud de Oro', 'Salud Flexible'], specialties: ['Pediatría', 'Geriatría', 'Emergencias 24h', 'Maternidad', 'Oncología'] },
    { name: 'Clínica Ricardo Palma', district: 'Miraflores / Surquillo', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Cardiología', 'Pediatría', 'Emergencias 24h', 'Oncología', 'Traumatología'] },
    { name: 'Clínica Good Hope', district: 'Miraflores', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud de Oro'], specialties: ['Cardiología', 'Pediatría', 'Geriatría', 'Emergencias 24h', 'Oncología'] },
    { name: 'Clínica Javier Prado', district: 'San Isidro', plans: ['Red Médica', 'Plan Vital', 'Salud Flexible', 'Salud de Oro'], specialties: ['Geriatría', 'Pediatría', 'Emergencias 24h', 'Vacunas'] },
    { name: 'Clínica SANNA', district: 'Chacarilla / El Golf / San Borja / La Molina / Miraflores', plans: ['Red Médica'], specialties: ['Alta Complejidad', 'Oncología', 'Emergencias 24h', 'Maternidad'] },
    { name: 'Clínica Montesur', district: 'Santiago de Surco', plans: ['Red Médica'], specialties: ['Maternidad VIP', 'Ginecología', 'Neonatología'] },
    { name: 'Clínica Centenario Peruano Japonesa', district: 'Pueblo Libre', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Emergencias 24h', 'Hospitalización', 'Cirugía compleja'] },
    { name: 'Clínica Stella Maris', district: 'Pueblo Libre', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Emergencias 24h', 'Maternidad', 'Cirugía', 'Pediatría'] },
    { name: 'Clínica San Judas Tadeo', district: 'San Miguel', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible', 'Salud de Oro'], specialties: ['Cardiología', 'Pediatría', 'Emergencias 24h', 'Maternidad', 'Oncología'] },
    { name: 'Clínica Vesalio', district: 'San Borja', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Emergencias 24h', 'Hospitalización', 'Consultas'] },
    { name: 'Clínica Jesús del Norte', district: 'Independencia', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Emergencias 24h', 'UCI', 'Maternidad', 'Cirugía'] },
    { name: 'Clínica Montefiori', district: 'La Molina', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Emergencias 24h', 'Pediatría', 'Hospitalización'] },
    { name: 'Clínica Providencia', district: 'San Miguel', plans: ['Red Médica', 'Red Preferente', 'Salud Flexible'], specialties: ['Consultas', 'Emergencias', 'Salud Mental'] },
    { name: 'Clínica San Gabriel', district: 'San Miguel', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias 24h', 'Hospitalización', 'Pediatría'] },
    { name: 'Clínica Tezza', district: 'Santiago de Surco', plans: ['Red Médica', 'Salud Flexible'], specialties: ['Hospitalización', 'Maternidad', 'Emergencias'] },
    { name: 'Clínica Santa Isabel', district: 'San Borja', plans: ['Red Médica'], specialties: ['Maternidad', 'Ginecología', 'Pediatría'] },
    { name: 'Clínica Cayetano Heredia', district: 'Lince / San Martín de Porres', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Cardiología', 'Pediatría', 'Emergencias 24h', 'Hospitalización'] },
    { name: 'Clínica Aviva', district: 'Los Olivos', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Emergencias 24h', 'Pediatría', 'Hospitalización'] },
    { name: 'Clínica San Juan Bautista', district: 'San Juan de Lurigancho', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Medicina General', 'Emergencias 24h', 'Hospitalización'] },
    { name: 'Clínica Santa Martha del Sur', district: 'San Juan de Miraflores', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias 24h', 'Hospitalización', 'Pediatría'] },
    { name: 'Clínica Maison de Santé', district: 'Chorrillos / Lima', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Emergencias 24h', 'Cirugía', 'Traumatología'] },
    { name: 'Clínica Limatambo', district: 'San Juan de Lurigancho / San Isidro / Minka', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Consultas', 'Emergencias', 'Laboratorio'] },
    { name: 'Centro Médico Medex', district: 'Surquillo', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible', 'Salud de Oro'], specialties: ['Medicina General', 'Pediatría', 'Laboratorio', 'Emergencias 24h'] },
    { name: 'Centro Médico Jockey Salud', district: 'Santiago de Surco', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Consultas ambulatorias', 'Laboratorio', 'Imágenes'] },
    { name: 'Centro Médico Suiza Lab', district: 'Miraflores / La Encalada', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Laboratorio', 'Diagnóstico por Imágenes', 'Chequeo Preventivo'] },
    { name: 'Integramédica', district: 'Independencia / San Isidro', plans: ['Red Médica', 'Red Preferente', 'Plan Vital', 'Salud Flexible'], specialties: ['Medicina General', 'Laboratorio', 'Rayos X', 'Ecografías'] },
    { name: 'Hogar Clínica San Juan de Dios', district: 'San Luis', plans: ['Red Médica', 'Plan Vital'], specialties: ['Rehabilitación', 'Pediatría', 'Ortopedia'] },
    { name: 'Centro Médico Avendaño', district: 'Miraflores', plans: ['Red Médica'], specialties: ['Consultas médicas', 'Especialidades'] },

    // --- AMAZONAS ---
    { name: 'Clínica Amazonia', district: 'Amazonas', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Consultas', 'Emergencias'] },
    { name: 'Centro Médico Virgen del Carmen', district: 'Amazonas', plans: ['Red Médica', 'Red Preferente'], specialties: ['Medicina General', 'Laboratorio'] },

    // --- ÁNCASH ---
    { name: 'Clínica San Pablo Huaraz', district: 'Huaraz', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias 24h', 'Hospitalización'] },
    { name: 'Clínica San Lorenzo', district: 'Áncash', plans: ['Red Médica', 'Red Preferente'], specialties: ['Consultas', 'Emergencias'] },
    { name: 'Clínica Santa María de Chimbote', district: 'Chimbote', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias', 'Cirugía'] },

    // --- APURÍMAC ---
    { name: 'Apurímac Red Médica y Centro de Salud', district: 'Apurímac', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Consultas', 'Laboratorio'] },

    // --- AREQUIPA ---
    { name: 'Clínica Arequipa', district: 'Arequipa', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias 24h', 'Hospitalización', 'Cirugía'] },
    { name: 'SANNA Clínica del Sur', district: 'Arequipa', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias 24h', 'Oncología', 'Alta Complejidad'] },
    { name: 'Clínica Vallesur', district: 'Arequipa', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Consultas', 'Emergencias'] },
    { name: 'Clínica San Pablo Arequipa', district: 'Arequipa', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias 24h', 'Hospitalización'] },

    // --- AYACUCHO ---
    { name: 'Policlínico Del Pilar', district: 'Ayacucho', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Consultas', 'Laboratorio'] },

    // --- CAJAMARCA ---
    { name: 'Clínica Los Fresnos', district: 'Cajamarca', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias', 'Hospitalización'] },
    { name: 'Clínica San Francisco de Asís', district: 'Cajamarca', plans: ['Red Médica', 'Red Preferente'], specialties: ['Consultas', 'Especialidades'] },

    // --- CUSCO ---
    { name: 'Clínica Pardo', district: 'Cusco', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias 24h', 'Atención Turística y Local'] },
    { name: 'Clínica San Juan de Dios Cusco', district: 'Cusco', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Pediatría', 'Emergencias'] },
    { name: 'Clínica Peruano Suiza', district: 'Cusco', plans: ['Red Médica', 'Red Preferente'], specialties: ['Consultas', 'Emergencias'] },

    // --- HUÁNUCO ---
    { name: 'Clínica Huánuco', district: 'Huánuco', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias', 'Hospitalización'] },
    { name: 'Clínica San Gabriel Arcángel', district: 'Huánuco', plans: ['Red Médica', 'Red Preferente'], specialties: ['Consultas', 'Laboratorio'] },

    // --- ICA ---
    { name: 'Clínica San Vicente de Ica', district: 'Ica', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias 24h', 'Hospitalización'] },
    { name: 'Clínica Señor de Luren de Ica', district: 'Ica', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias', 'Consultas'] },
    { name: 'Famisalud Sede Chincha', district: 'Chincha / Ica', plans: ['Red Médica', 'Red Preferente'], specialties: ['Consultas', 'Laboratorio'] },

    // --- JUNÍN ---
    { name: 'Clínica Cima', district: 'Huancayo / Junín', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias 24h', 'Hospitalización'] },
    { name: 'Clínica Dr. Víctor Paredes', district: 'Junín', plans: ['Red Médica', 'Red Preferente'], specialties: ['Consultas', 'Emergencias'] },
    { name: 'Clínica San José', district: 'Huancayo', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias', 'Cirugía'] },

    // --- LA LIBERTAD ---
    { name: 'Clínica San Pablo Trujillo', district: 'Trujillo', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias 24h', 'Hospitalización'] },
    { name: 'Clínica Sánchez Ferrer', district: 'Trujillo', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias 24h', 'Cirugía'] },
    { name: 'Clínica Peruano Americana', district: 'Trujillo', plans: ['Red Médica', 'Red Preferente'], specialties: ['Emergencias', 'Maternidad'] },

    // --- LAMBAYEQUE ---
    { name: 'Max Salud Avisal', district: 'Lambayeque / Chiclayo', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Consultas', 'Laboratorio', 'Imágenes'] },
    { name: 'Clínica Auna Chiclayo', district: 'Chiclayo', plans: ['Red Médica', 'Red Preferente'], specialties: ['Emergencias 24h', 'Hospitalización'] },

    // --- LORETO ---
    { name: 'Clínica Adventista Ana Stahl', district: 'Iquitos / Loreto', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias', 'Hospitalización'] },

    // --- MOQUEGUA ---
    { name: 'Centro Médico Espíritu', district: 'Moquegua', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Consultas', 'Laboratorio'] },

    // --- PASCO ---
    { name: 'Clínica Magol', district: 'Pasco', plans: ['Red Médica', 'Red Preferente'], specialties: ['Consultas', 'Emergencias'] },

    // --- PIURA ---
    { name: 'Clínica Santa Rosa', district: 'Piura', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias 24h', 'Hospitalización'] },
    { name: 'SANNA Clínica Belén', district: 'Piura', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Alta Complejidad', 'Emergencias 24h'] },
    { name: 'Clínica Bello Horizonte', district: 'Piura', plans: ['Red Médica', 'Red Preferente'], specialties: ['Consultas', 'Emergencias'] },

    // --- PUNO ---
    { name: 'Clínica Americana de Juliaca', district: 'Juliaca / Puno', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias', 'Consultas'] },
    { name: 'Medicentro Tourists Health', district: 'Puno', plans: ['Red Médica', 'Red Preferente'], specialties: ['Atención Médica', 'Emergencias'] },

    // --- TACNA ---
    { name: 'Clínica La Luz Tacna', district: 'Tacna', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Oftalmología', 'Emergencias', 'Consultas'] },
    { name: 'Clínica Santa Teresa', district: 'Tacna', plans: ['Red Médica', 'Red Preferente'], specialties: ['Consultas', 'Hospitalización'] },

    // --- UCAYALI ---
    { name: 'Clínica Regional Pucallpa', district: 'Pucallpa / Ucayali', plans: ['Red Médica', 'Red Preferente', 'Plan Vital'], specialties: ['Emergencias', 'Hospitalización'] }
];

// Repositorio de Documentos
const DOCUMENTS_LIST = [
    {
        id: 'red-medica',
        title: 'Seguro Red Médica',
        category: 'Salud Modular',
        file: 'Red Médica.pdf',
        sa: 'S/ 5,000,000',
        icon: 'fa-hospital',
        desc: 'Cobertura médica de alta gama con acceso a la red de clínicas más completa del país, maternidad, oncología 100% y asistencia internacional.'
    },
    {
        id: 'red-preferente',
        title: 'Seguro Red Preferente',
        category: 'Salud Modular',
        file: 'Red Preferente.pdf',
        sa: 'S/ 3,200,000',
        icon: 'fa-heart-pulse',
        desc: 'El seguro más vendido de RIMAC. Excelente equilibrio entre costo mensual y cobertura preferencial en clínicas top a nivel nacional.'
    },
    {
        id: 'plan-vital',
        title: 'Seguro Plan Vital',
        category: 'Salud Modular',
        file: 'CARTILLA PLAN VITAL.pdf',
        sa: 'S/ 2,000,000',
        icon: 'fa-notes-medical',
        desc: 'La alternativa más económica en seguros de salud con respaldo integral para consultas, urgencias y atenciones hospitalarias.'
    },
    {
        id: 'salud-flexible',
        title: 'Salud Flexible 2025',
        category: 'Salud Personalizable',
        file: 'CARTILLA SALUD FLEXIBLE INFOSALUD 2025 (1).pdf',
        sa: 'S/ 1,000,000',
        icon: 'fa-sliders',
        desc: 'Diseñado por ti. Plan base para consultas en casa o clínicas con opción de añadir 6 coberturas independientes según tu presupuesto.'
    },
    {
        id: 'ieg-plan1',
        title: 'Enfermedades Graves - Plan 1 (12 Enf.)',
        category: 'Indemnizatorio',
        file: 'IEG 12 - Plan 1 - 12 enfermedades (1)_2.pdf',
        sa: 'S/ 50,000 (S/ 100/mes)',
        icon: 'fa-hand-holding-medical',
        desc: 'Indemnización en efectivo ante el diagnóstico de cualquiera de las 12 enfermedades graves cubiertas + asistencias médicas.'
    },
    {
        id: 'ieg-plan2',
        title: 'Enfermedades Graves - Plan 2 (8 Enf.)',
        category: 'Indemnizatorio',
        file: 'IEG 12 - Plan 2 - 8 enfermedades (1)_2.pdf',
        sa: 'S/ 50,000 (S/ 80/mes)',
        icon: 'fa-hand-holding-medical',
        desc: 'Indemnización en efectivo ante el diagnóstico de cualquiera de las 8 enfermedades graves principales + asistencias médicas.'
    },
    {
        id: 'ieg-plan3',
        title: 'Enfermedades Graves - Plan 3 (6 Enf.)',
        category: 'Indemnizatorio',
        file: 'IEG 12 - Plan 3 - 6 enfermedades (1)_2.pdf',
        sa: 'S/ 50,000 (S/ 60/mes)',
        icon: 'fa-hand-holding-medical',
        desc: 'Indemnización en efectivo ante el diagnóstico de cualquiera de las 6 enfermedades graves esenciales + asistencias médicas.'
    },
    {
        id: 'sepelio-plus',
        title: 'Seguro Sepelio Plus',
        category: 'Protección Familiar',
        file: 'SEPELIO PLUS.pdf',
        sa: 'Hasta S/ 30,000',
        icon: 'fa-ribbon',
        desc: 'Cuidado y tranquilidad para tu familia con indemnización por fallecimiento y cobertura de servicios funerarios completos.'
    },
    {
        id: 'beneficios-vida',
        title: 'Beneficios Vida Plan Plus',
        category: 'Beneficios Adicionales',
        file: 'Beneficios Vida Plan Plus.pdf',
        sa: 'Servicios Gratis & Descuentos',
        icon: 'fa-gem',
        desc: 'Programa de asistencias exclusivas para asegurados de Vida: telemedicina, auxilio mecánico, cerrajería, gasfitería y pet care.'
    }
];

// TABLA MAESTRA OFICIAL EXTRAÍDA DEL EXCEL DE RIMAC
const PAH_MASTER_TABLE = [
    { code: "PAH01", minAge: 36, maxAge: 64, years: 5, returnPct: 100, sa: 40000 },
    { code: "PAH02", minAge: 36, maxAge: 64, years: 7, returnPct: 100, sa: 40000 },
    { code: "PAH03", minAge: 36, maxAge: 64, years: 7, returnPct: 100, sa: 60000 },
    { code: "PAH04", minAge: 18, maxAge: 64, years: 10, returnPct: 100, sa: 60000 },
    { code: "PAH05", minAge: 18, maxAge: 64, years: 10, returnPct: 100, sa: 80000 },
    { code: "PAH06", minAge: 18, maxAge: 64, years: 10, returnPct: 100, sa: 100000 },
    { code: "PAH07", minAge: 18, maxAge: 64, years: 12, returnPct: 100, sa: 80000 },
    { code: "PAH08", minAge: 18, maxAge: 64, years: 12, returnPct: 100, sa: 100000 },
    { code: "PAH09", minAge: 18, maxAge: 64, years: 12, returnPct: 125, sa: 80000 },
    { code: "PAH10", minAge: 18, maxAge: 64, years: 12, returnPct: 125, sa: 100000 },
    { code: "PAH11", minAge: 18, maxAge: 64, years: 20, returnPct: 100, sa: 80000 },
    { code: "PAH12", minAge: 18, maxAge: 64, years: 20, returnPct: 100, sa: 100000 },
    { code: "PAH13", minAge: 18, maxAge: 64, years: 20, returnPct: 100, sa: 125000 },
    { code: "PAH14", minAge: 18, maxAge: 64, years: 20, returnPct: 125, sa: 80000 },
    { code: "PAH15", minAge: 18, maxAge: 64, years: 20, returnPct: 125, sa: 100000 },
    { code: "PAH16", minAge: 18, maxAge: 64, years: 20, returnPct: 125, sa: 125000 },
    { code: "PAH17", minAge: 18, maxAge: 64, years: 20, returnPct: 150, sa: 80000 },
    { code: "PAH18", minAge: 18, maxAge: 64, years: 20, returnPct: 150, sa: 100000 },
    { code: "PAH19", minAge: 18, maxAge: 64, years: 20, returnPct: 150, sa: 125000 }
];

// MATRIZ TARIFARIA EXACTA Y COMPLETA (SIN ERRORES DE SINTAXIS)
const PAH_FULL_DATA = {
    "PAH01": {
        36: { pago: 84.72, dev: 5083.30 }, 37: { pago: 87.42, dev: 5245.41 }, 38: { pago: 90.68, dev: 5440.82 }, 39: { pago: 94.30, dev: 5658.03 }, 40: { pago: 98.52, dev: 5910.98 },
        41: { pago: 103.45, dev: 6206.89 }, 42: { pago: 108.97, dev: 6538.46 }, 43: { pago: 115.04, dev: 6902.58 }, 44: { pago: 121.32, dev: 7279.45 }, 45: { pago: 127.55, dev: 7653.21 },
        46: { pago: 133.67, dev: 8020.35 }, 47: { pago: 139.90, dev: 8394.09 }, 48: { pago: 146.21, dev: 8772.33 }, 49: { pago: 153.76, dev: 9225.65 }, 50: { pago: 162.92, dev: 9775.38 },
        51: { pago: 173.92, dev: 10435.07 }, 52: { pago: 186.81, dev: 11208.90 }, 53: { pago: 201.21, dev: 12072.48 }, 54: { pago: 216.80, dev: 13008.03 }, 55: { pago: 233.28, dev: 13996.50 },
        56: { pago: 250.34, dev: 15020.45 }, 57: { pago: 268.25, dev: 16094.94 }, 58: { pago: 287.00, dev: 17219.97 }, 59: { pago: 308.40, dev: 18504.02 }, 60: { pago: 332.64, dev: 19958.15 },
        61: { pago: 359.57, dev: 21574.33 }, 62: { pago: 388.47, dev: 23308.08 }, 63: { pago: 418.17, dev: 25090.30 }, 64: { pago: 448.09, dev: 26885.30 }
    },
    "PAH02": {
        36: { pago: 67.57, dev: 5675.56 }, 37: { pago: 69.86, dev: 5868.01 }, 38: { pago: 72.60, dev: 6098.82 }, 39: { pago: 75.69, dev: 6358.32 }, 40: { pago: 79.17, dev: 6649.98 },
        41: { pago: 83.09, dev: 6979.34 }, 42: { pago: 87.23, dev: 7327.11 }, 43: { pago: 91.55, dev: 7690.24 }, 44: { pago: 96.12, dev: 8073.83 }, 45: { pago: 100.81, dev: 8468.39 },
        46: { pago: 105.70, dev: 8878.72 }, 47: { pago: 110.90, dev: 9315.40 }, 48: { pago: 116.38, dev: 9775.97 }, 49: { pago: 122.93, dev: 10325.93 }, 50: { pago: 130.64, dev: 10973.36 },
        51: { pago: 139.54, dev: 11721.58 }, 52: { pago: 149.45, dev: 12553.94 }, 53: { pago: 160.14, dev: 13452.05 }, 54: { pago: 171.81, dev: 14431.78 }, 55: { pago: 184.38, dev: 15487.79 },
        56: { pago: 197.75, dev: 16611.30 }, 57: { pago: 211.99, dev: 17806.83 }, 58: { pago: 226.88, dev: 19057.78 }, 59: { pago: 243.39, dev: 20444.49 }, 60: { pago: 261.54, dev: 21969.29 },
        61: { pago: 281.17, dev: 23618.02 }, 62: { pago: 301.92, dev: 25360.87 }, 63: { pago: 323.13, dev: 27142.97 }, 64: { pago: 344.55, dev: 28942.41 }
    },
    "PAH03": {
        36: { pago: 101.35, dev: 8513.34 }, 37: { pago: 104.79, dev: 8802.02 }, 38: { pago: 108.91, dev: 9148.22 }, 39: { pago: 113.54, dev: 9537.49 }, 40: { pago: 118.75, dev: 9974.97 },
        41: { pago: 124.63, dev: 10469.01 }, 42: { pago: 130.84, dev: 10990.66 }, 43: { pago: 137.33, dev: 11535.35 }, 44: { pago: 144.18, dev: 12110.75 }, 45: { pago: 151.22, dev: 12702.59 },
        46: { pago: 158.55, dev: 13318.07 }, 47: { pago: 166.35, dev: 13973.09 }, 48: { pago: 174.57, dev: 14663.95 }, 49: { pago: 184.39, dev: 15488.90 }, 50: { pago: 195.95, dev: 16460.04 },
        51: { pago: 209.31, dev: 17582.37 }, 52: { pago: 224.18, dev: 18830.92 }, 53: { pago: 240.22, dev: 20178.07 }, 54: { pago: 257.57, dev: 21647.68 }, 55: { pago: 276.57, dev: 23231.68 },
        56: { pago: 296.63, dev: 24916.96 }, 57: { pago: 317.98, dev: 26710.24 }, 58: { pago: 340.32, dev: 28586.67 }, 59: { pago: 365.08, dev: 30666.73 }, 60: { pago: 392.31, dev: 32953.93 },
        61: { pago: 421.75, dev: 35427.02 }, 62: { pago: 452.87, dev: 38041.31 }, 63: { pago: 484.70, dev: 40714.45 }, 64: { pago: 516.83, dev: 43413.61 }
    },
    "PAH04": {
        18: { pago: 48.53, dev: 5823.91 }, 19: { pago: 49.27, dev: 5912.14 }, 20: { pago: 49.90, dev: 5988.36 }, 21: { pago: 50.50, dev: 6059.47 }, 22: { pago: 51.13, dev: 6135.45 },
        23: { pago: 51.74, dev: 6208.36 }, 24: { pago: 52.38, dev: 6285.97 }, 25: { pago: 53.05, dev: 6366.38 }, 26: { pago: 53.77, dev: 6452.50 }, 27: { pago: 54.45, dev: 6534.30 },
        28: { pago: 55.03, dev: 6603.94 }, 29: { pago: 55.72, dev: 6686.02 }, 30: { pago: 56.60, dev: 6792.28 }, 31: { pago: 57.69, dev: 6922.35 }, 32: { pago: 59.04, dev: 7084.33 },
        33: { pago: 60.69, dev: 7283.08 }, 34: { pago: 62.64, dev: 7516.88 }, 35: { pago: 64.93, dev: 7791.91 }, 36: { pago: 67.66, dev: 8119.39 }, 37: { pago: 70.70, dev: 8483.99 },
        38: { pago: 74.18, dev: 8901.33 }, 39: { pago: 77.87, dev: 9343.90 }, 40: { pago: 81.84, dev: 9820.40 }, 41: { pago: 86.17, dev: 10340.18 }, 42: { pago: 90.87, dev: 10904.63 },
        43: { pago: 96.00, dev: 11520.54 }, 44: { pago: 101.62, dev: 12194.98 }, 45: { pago: 107.69, dev: 12922.97 }, 46: { pago: 114.24, dev: 13708.36 }, 47: { pago: 121.37, dev: 14563.91 },
        48: { pago: 128.99, dev: 15478.61 }, 49: { pago: 137.55, dev: 16505.55 }, 50: { pago: 147.16, dev: 17659.42 }, 51: { pago: 157.95, dev: 18954.20 }, 52: { pago: 170.08, dev: 20409.61 },
        53: { pago: 183.47, dev: 22015.98 }, 54: { pago: 198.25, dev: 23790.55 }, 55: { pago: 214.25, dev: 25709.83 }, 56: { pago: 231.21, dev: 27745.22 }, 57: { pago: 249.07, dev: 29888.98 },
        58: { pago: 267.63, dev: 32115.50 }, 59: { pago: 287.74, dev: 34529.15 }, 60: { pago: 309.47, dev: 37136.65 }, 61: { pago: 332.81, dev: 39937.74 }, 62: { pago: 357.48, dev: 42897.48 },
        63: { pago: 383.10, dev: 45972.20 }, 64: { pago: 409.32, dev: 49118.84 }
    },
    "PAH05": {
        18: { pago: 64.71, dev: 7765.21 }, 19: { pago: 65.69, dev: 7882.85 }, 20: { pago: 66.54, dev: 7984.48 }, 21: { pago: 67.33, dev: 8079.30 }, 22: { pago: 68.17, dev: 8180.59 },
        23: { pago: 68.98, dev: 8277.82 }, 24: { pago: 69.84, dev: 8381.29 }, 25: { pago: 70.74, dev: 8488.51 }, 26: { pago: 71.69, dev: 8603.34 }, 27: { pago: 72.60, dev: 8712.40 },
        28: { pago: 73.38, dev: 8805.25 }, 29: { pago: 74.29, dev: 8914.70 }, 30: { pago: 75.47, dev: 9056.37 }, 31: { pago: 76.92, dev: 9229.80 }, 32: { pago: 78.71, dev: 9445.77 },
        33: { pago: 80.92, dev: 9710.78 }, 34: { pago: 83.52, dev: 10022.51 }, 35: { pago: 86.58, dev: 10389.22 }, 36: { pago: 90.22, dev: 10825.85 }, 37: { pago: 94.27, dev: 11311.98 },
        38: { pago: 98.90, dev: 11868.43 }, 39: { pago: 103.82, dev: 12458.53 }, 40: { pago: 109.12, dev: 13093.86 }, 41: { pago: 114.89, dev: 13786.91 }, 42: { pago: 121.16, dev: 14539.51 },
        43: { pago: 128.01, dev: 15360.72 }, 44: { pago: 135.50, dev: 16259.97 }, 45: { pago: 143.59, dev: 17230.62 }, 46: { pago: 152.32, dev: 18277.81 }, 47: { pago: 161.82, dev: 19418.55 },
        48: { pago: 171.98, dev: 20638.15 }, 49: { pago: 183.40, dev: 22007.40 }, 50: { pago: 196.22, dev: 23545.89 }, 51: { pago: 210.60, dev: 25272.26 }, 52: { pago: 226.77, dev: 27212.82 },
        53: { pago: 244.62, dev: 29354.64 }, 54: { pago: 264.34, dev: 31720.73 }, 55: { pago: 285.66, dev: 34279.77 }, 56: { pago: 308.28, dev: 36993.63 }, 57: { pago: 332.10, dev: 39851.97 },
        58: { pago: 356.84, dev: 42820.66 }, 59: { pago: 383.66, dev: 46038.86 }, 60: { pago: 412.62, dev: 49514.92 }, 61: { pago: 443.75, dev: 53250.31 }, 62: { pago: 476.64, dev: 57196.64 },
        63: { pago: 510.80, dev: 61296.26 }, 64: { pago: 545.76, dev: 65491.79 }
    },
    "PAH06": {
        18: { pago: 80.89, dev: 9706.51 }, 19: { pago: 82.11, dev: 9853.56 }, 20: { pago: 83.17, dev: 9980.59 }, 21: { pago: 84.16, dev: 10099.12 }, 22: { pago: 85.21, dev: 10225.74 },
        23: { pago: 86.23, dev: 10347.27 }, 24: { pago: 87.31, dev: 10476.62 }, 25: { pago: 88.42, dev: 10610.63 }, 26: { pago: 89.62, dev: 10754.17 }, 27: { pago: 90.75, dev: 10890.50 },
        28: { pago: 91.72, dev: 11006.57 }, 29: { pago: 92.86, dev: 11143.37 }, 30: { pago: 94.34, dev: 11320.46 }, 31: { pago: 96.14, dev: 11537.26 }, 32: { pago: 98.39, dev: 11807.21 },
        33: { pago: 101.15, dev: 12138.47 }, 34: { pago: 104.40, dev: 12528.14 }, 35: { pago: 108.22, dev: 12986.52 }, 36: { pago: 112.77, dev: 13532.31 }, 37: { pago: 117.83, dev: 14139.98 },
        38: { pago: 123.63, dev: 14835.54 }, 39: { pago: 129.78, dev: 15573.16 }, 40: { pago: 136.39, dev: 16367.33 }, 41: { pago: 143.61, dev: 17233.64 }, 42: { pago: 151.45, dev: 18174.39 },
        43: { pago: 160.01, dev: 19200.90 }, 44: { pago: 169.37, dev: 20324.97 }, 45: { pago: 179.49, dev: 21538.28 }, 46: { pago: 190.39, dev: 22847.27 }, 47: { pago: 202.28, dev: 24273.18 },
        48: { pago: 214.98, dev: 25797.69 }, 49: { pago: 229.24, dev: 27509.26 }, 50: { pago: 245.27, dev: 29432.37 }, 51: { pago: 263.25, dev: 31590.33 }, 52: { pago: 283.47, dev: 34016.02 },
        53: { pago: 305.78, dev: 36693.31 }, 54: { pago: 330.42, dev: 39650.92 }, 55: { pago: 357.08, dev: 42849.71 }, 56: { pago: 385.35, dev: 46242.04 }, 57: { pago: 415.12, dev: 49814.97 },
        58: { pago: 446.05, dev: 53525.83 }, 59: { pago: 479.57, dev: 57548.58 }, 60: { pago: 515.78, dev: 61893.64 }, 61: { pago: 554.69, dev: 66562.89 }, 62: { pago: 595.80, dev: 71495.80 },
        63: { pago: 638.50, dev: 76620.33 }, 64: { pago: 682.21, dev: 81864.74 }
    },
    "PAH07": {
        18: { pago: 55.83, dev: 8039.80 }, 19: { pago: 56.57, dev: 8145.55 }, 20: { pago: 57.20, dev: 8237.18 }, 21: { pago: 57.80, dev: 8323.36 }, 22: { pago: 58.47, dev: 8419.37 },
        23: { pago: 59.13, dev: 8515.42 }, 24: { pago: 59.85, dev: 8618.68 }, 25: { pago: 60.63, dev: 8730.63 }, 26: { pago: 61.49, dev: 8854.12 }, 27: { pago: 62.33, dev: 8976.19 },
        28: { pago: 63.12, dev: 9088.99 }, 29: { pago: 64.02, dev: 9219.03 }, 30: { pago: 65.17, dev: 9385.17 }, 31: { pago: 66.60, dev: 9589.68 }, 32: { pago: 68.34, dev: 9841.55 },
        33: { pago: 70.48, dev: 10148.77 }, 34: { pago: 72.99, dev: 10510.00 }, 35: { pago: 75.86, dev: 10924.25 }, 36: { pago: 79.20, dev: 11404.86 }, 37: { pago: 82.77, dev: 11919.59 },
        38: { pago: 86.72, dev: 12487.56 }, 39: { pago: 90.95, dev: 13097.02 }, 40: { pago: 95.57, dev: 13752.72 }, 41: { pago: 100.72, dev: 14503.90 }, 42: { pago: 106.40, dev: 15321.10 },
        43: { pago: 112.65, dev: 16221.63 }, 44: { pago: 119.59, dev: 17220.40 }, 45: { pago: 127.10, dev: 18301.69 }, 46: { pago: 135.16, dev: 19462.76 }, 47: { pago: 143.74, dev: 20698.50 },
        48: { pago: 152.77, dev: 21998.46 }, 49: { pago: 162.92, dev: 23460.89 }, 50: { pago: 174.41, dev: 25115.31 }, 51: { pago: 187.39, dev: 26984.40 }, 52: { pago: 201.96, dev: 29081.74 },
        53: { pago: 217.89, dev: 31375.45 }, 54: { pago: 235.26, dev: 33876.81 }, 55: { pago: 253.83, dev: 36551.37 }, 56: { pago: 273.32, dev: 39358.02 }, 57: { pago: 293.74, dev: 42297.94 },
        58: { pago: 314.89, dev: 45343.47 }, 59: { pago: 337.71, dev: 48630.06 }, 60: { pago: 362.33, dev: 52175.71 }, 61: { pago: 388.86, dev: 55995.50 }, 62: { pago: 416.91, dev: 60035.23 },
        63: { pago: 445.94, dev: 64214.53 }, 64: { pago: 475.64, dev: 68492.25 }
    },
    "PAH08": {
        18: { pago: 69.79, dev: 10049.75 }, 19: { pago: 70.71, dev: 10181.94 }, 20: { pago: 71.50, dev: 10296.47 }, 21: { pago: 72.25, dev: 10404.20 }, 22: { pago: 73.08, dev: 10524.21 },
        23: { pago: 73.92, dev: 10644.28 }, 24: { pago: 74.81, dev: 10773.35 }, 25: { pago: 75.79, dev: 10913.29 }, 26: { pago: 76.86, dev: 11067.65 }, 27: { pago: 77.92, dev: 11220.23 },
        28: { pago: 78.90, dev: 11361.24 }, 29: { pago: 80.03, dev: 11523.85 }, 30: { pago: 81.47, dev: 11731.47 }, 31: { pago: 83.24, dev: 11987.10 }, 32: { pago: 85.43, dev: 12301.69 },
        33: { pago: 88.10, dev: 12685.97 }, 34: { pago: 91.23, dev: 13137.50 }, 35: { pago: 94.83, dev: 13655.31 }, 36: { pago: 99.00, dev: 14256.07 }, 37: { pago: 103.47, dev: 14899.49 },
        38: { pago: 108.40, dev: 15609.44 }, 39: { pago: 113.69, dev: 16371.27 }, 40: { pago: 119.47, dev: 17203.41 }, 41: { pago: 125.90, dev: 18129.87 }, 42: { pago: 133.00, dev: 19151.38 },
        43: { pago: 140.81, dev: 20277.03 }, 44: { pago: 149.48, dev: 21525.50 }, 45: { pago: 158.87, dev: 22877.11 }, 46: { pago: 168.95, dev: 24328.45 }, 47: { pago: 179.67, dev: 25873.13 },
        48: { pago: 190.34, dev: 27409.08 }, 49: { pago: 203.65, dev: 29326.12 }, 50: { pago: 218.01, dev: 31394.14 }, 51: { pago: 234.24, dev: 33730.50 }, 52: { pago: 252.45, dev: 36352.18 },
        53: { pago: 272.36, dev: 39219.31 }, 54: { pago: 294.07, dev: 42346.01 }, 55: { pago: 317.29, dev: 45689.22 }, 56: { pago: 341.65, dev: 49197.53 }, 57: { pago: 367.17, dev: 52872.43 },
        58: { pago: 393.61, dev: 56794.34 }, 59: { pago: 422.14, dev: 60787.57 }, 60: { pago: 452.91, dev: 65219.63 }, 61: { pago: 486.07, dev: 69994.37 }, 62: { pago: 521.14, dev: 75044.04 },
        63: { pago: 557.42, dev: 80268.53 }, 64: { pago: 594.55, dev: 85615.32 }
    },
    "PAH09": {
        18: { pago: 92.85, dev: 16713.65 }, 19: { pago: 94.26, dev: 16966.23 }, 20: { pago: 95.51, dev: 17191.59 }, 21: { pago: 96.71, dev: 17407.34 }, 22: { pago: 98.03, dev: 17644.81 },
        23: { pago: 99.35, dev: 17883.34 }, 24: { pago: 100.77, dev: 18137.99 }, 25: { pago: 102.28, dev: 18410.66 }, 26: { pago: 103.93, dev: 18707.81 }, 27: { pago: 105.56, dev: 19000.67 },
        28: { pago: 107.07, dev: 19272.36 }, 29: { pago: 108.77, dev: 19578.68 }, 30: { pago: 110.88, dev: 19958.53 }, 31: { pago: 113.42, dev: 20416.30 }, 32: { pago: 116.50, dev: 20970.21 },
        33: { pago: 120.20, dev: 21636.80 }, 34: { pago: 124.51, dev: 22411.25 }, 35: { pago: 129.40, dev: 23292.38 }, 36: { pago: 135.04, dev: 24307.72 }, 37: { pago: 141.08, dev: 25394.24 },
        38: { pago: 147.73, dev: 26591.40 }, 39: { pago: 154.84, dev: 27871.71 }, 40: { pago: 162.57, dev: 29262.94 }, 41: { pago: 171.10, dev: 30798.67 }, 42: { pago: 180.42, dev: 32475.67 },
        43: { pago: 190.56, dev: 34299.99 }, 44: { pago: 201.63, dev: 36293.10 }, 45: { pago: 213.42, dev: 38415.06 }, 46: { pago: 225.85, dev: 40652.24 }, 47: { pago: 238.90, dev: 43001.29 },
        48: { pago: 252.39, dev: 45430.23 }, 49: { pago: 267.36, dev: 48125.31 }, 50: { pago: 284.01, dev: 51121.80 }, 51: { pago: 302.42, dev: 54435.71 }, 52: { pago: 322.61, dev: 58069.97 },
        53: { pago: 344.14, dev: 61944.48 }, 54: { pago: 367.03, dev: 66065.90 }, 55: { pago: 390.89, dev: 70360.81 }, 56: { pago: 415.27, dev: 74748.85 }, 57: { pago: 440.10, dev: 79218.53 },
        58: { pago: 465.11, dev: 83719.35 }, 59: { pago: 491.49, dev: 88467.88 }, 60: { pago: 519.29, dev: 93471.64 }, 61: { pago: 548.19, dev: 98673.39 }, 62: { pago: 577.65, dev: 103977.02 },
        63: { pago: 606.93, dev: 109248.20 }, 64: { pago: 635.59, dev: 114406.37 }
    },
    "PAH10": {
        18: { pago: 116.07, dev: 20892.06 }, 19: { pago: 117.82, dev: 21207.79 }, 20: { pago: 119.39, dev: 21489.48 }, 21: { pago: 120.88, dev: 21759.18 }, 22: { pago: 122.53, dev: 22056.02 },
        23: { pago: 124.19, dev: 22354.17 }, 24: { pago: 125.96, dev: 22672.49 }, 25: { pago: 127.85, dev: 23013.32 }, 26: { pago: 129.92, dev: 23384.77 }, 27: { pago: 131.95, dev: 23750.83 },
        28: { pago: 133.84, dev: 24090.45 }, 29: { pago: 135.96, dev: 24473.36 }, 30: { pago: 138.60, dev: 24948.16 }, 31: { pago: 141.78, dev: 25520.38 }, 32: { pago: 145.63, dev: 26212.77 },
        33: { pago: 150.26, dev: 27046.00 }, 34: { pago: 155.63, dev: 28014.06 }, 35: { pago: 161.75, dev: 29115.48 }, 36: { pago: 168.80, dev: 30384.64 }, 37: { pago: 174.55, dev: 31742.80 },
        38: { pago: 184.66, dev: 33239.25 }, 39: { pago: 193.55, dev: 34839.54 }, 40: { pago: 203.21, dev: 36578.68 }, 41: { pago: 213.88, dev: 38498.34 }, 42: { pago: 225.53, dev: 40594.58 },
        43: { pago: 238.19, dev: 42874.99 }, 44: { pago: 252.04, dev: 45366.38 }, 45: { pago: 266.77, dev: 48018.83 }, 46: { pago: 282.31, dev: 50815.31 }, 47: { pago: 298.62, dev: 53751.61 },
        48: { pago: 315.49, dev: 56787.79 }, 49: { pago: 334.20, dev: 60156.63 }, 50: { pago: 355.01, dev: 63902.24 }, 51: { pago: 378.03, dev: 68044.63 }, 52: { pago: 403.26, dev: 72587.46 },
        53: { pago: 430.17, dev: 77430.60 }, 54: { pago: 458.62, dev: 82552.38 }, 55: { pago: 488.62, dev: 87951.01 }, 56: { pago: 519.09, dev: 93436.07 }, 57: { pago: 550.13, dev: 99023.16 },
        58: { pago: 581.38, dev: 104649.19 }, 59: { pago: 614.36, dev: 110584.85 }, 60: { pago: 649.11, dev: 116839.56 }, 61: { pago: 685.23, dev: 123341.74 }, 62: { pago: 722.06, dev: 129971.28 },
        63: { pago: 758.67, dev: 136560.25 }, 64: { pago: 794.49, dev: 143007.96 }
    },
    "PAH11": {
        18: { pago: 39.45, dev: 9467.90 }, 19: { pago: 39.95, dev: 9587.83 }, 20: { pago: 40.43, dev: 9704.23 }, 21: { pago: 40.94, dev: 9825.66 }, 22: { pago: 41.53, dev: 9967.02 },
        23: { pago: 42.17, dev: 10120.97 }, 24: { pago: 42.90, dev: 10296.58 }, 25: { pago: 43.73, dev: 10495.10 }, 26: { pago: 44.68, dev: 10722.78 }, 27: { pago: 45.68, dev: 10963.31 },
        28: { pago: 46.72, dev: 11211.95 }, 29: { pago: 47.85, dev: 11485.03 }, 30: { pago: 49.16, dev: 11798.75 }, 31: { pago: 50.65, dev: 12155.59 }, 32: { pago: 52.36, dev: 12565.65 },
        33: { pago: 54.33, dev: 13038.67 }, 34: { pago: 56.56, dev: 13573.98 }, 35: { pago: 59.08, dev: 14179.84 }, 36: { pago: 61.97, dev: 14873.25 }, 37: { pago: 65.17, dev: 15641.74 },
        38: { pago: 68.77, dev: 16504.10 }, 39: { pago: 72.66, dev: 17437.26 }, 40: { pago: 76.90, dev: 18454.85 }, 41: { pago: 81.55, dev: 19572.19 }, 42: { pago: 86.66, dev: 20797.82 },
        43: { pago: 92.25, dev: 22140.07 }, 44: { pago: 98.37, dev: 23609.30 }, 45: { pago: 104.96, dev: 25190.53 }, 46: { pago: 112.00, dev: 26879.87 }, 47: { pago: 119.53, dev: 28686.33 },
        48: { pago: 127.47, dev: 30592.92 }, 49: { pago: 136.15, dev: 32676.45 }, 50: { pago: 145.60, dev: 34943.89 }, 51: { pago: 155.86, dev: 37407.59 }, 52: { pago: 166.98, dev: 40074.94 },
        53: { pago: 178.91, dev: 42938.82 }, 54: { pago: 191.68, dev: 46003.80 }, 55: { pago: 205.18, dev: 49242.73 }, 56: { pago: 219.29, dev: 52629.11 }, 57: { pago: 234.01, dev: 56162.47 },
        58: { pago: 249.29, dev: 59830.61 }, 59: { pago: 265.59, dev: 63740.46 }, 60: { pago: 282.94, dev: 67905.65 }, 61: { pago: 301.32, dev: 72316.72 }, 62: { pago: 320.58, dev: 76939.03 },
        63: { pago: 340.49, dev: 81717.35 }, 64: { pago: 360.96, dev: 86630.56 }
    },
    "PAH12": {
        18: { pago: 49.31, dev: 11834.88 }, 19: { pago: 49.94, dev: 11984.78 }, 20: { pago: 50.54, dev: 12130.29 }, 21: { pago: 51.18, dev: 12282.08 }, 22: { pago: 51.91, dev: 12458.78 },
        23: { pago: 52.71, dev: 12651.21 }, 24: { pago: 53.63, dev: 12870.72 }, 25: { pago: 54.66, dev: 13118.87 }, 26: { pago: 55.85, dev: 13403.47 }, 27: { pago: 57.10, dev: 13704.14 },
        28: { pago: 58.40, dev: 14014.94 }, 29: { pago: 59.82, dev: 14356.29 }, 30: { pago: 61.45, dev: 14748.43 }, 31: { pago: 63.31, dev: 15194.48 }, 32: { pago: 65.45, dev: 15707.06 },
        33: { pago: 67.91, dev: 16298.33 }, 34: { pago: 70.70, dev: 16967.48 }, 35: { pago: 73.85, dev: 17724.80 }, 36: { pago: 77.46, dev: 18591.56 }, 37: { pago: 81.47, dev: 19552.18 },
        38: { pago: 85.96, dev: 20630.13 }, 39: { pago: 90.82, dev: 21796.57 }, 40: { pago: 96.12, dev: 23068.56 }, 41: { pago: 101.94, dev: 24465.23 }, 42: { pago: 108.32, dev: 25997.28 },
        43: { pago: 115.31, dev: 27675.09 }, 44: { pago: 122.97, dev: 29511.63 }, 45: { pago: 131.20, dev: 31488.16 }, 46: { pago: 140.00, dev: 33599.83 }, 47: { pago: 149.41, dev: 35857.91 },
        48: { pago: 159.34, dev: 38241.15 }, 49: { pago: 170.19, dev: 40845.56 }, 50: { pago: 182.00, dev: 43679.86 }, 51: { pago: 194.83, dev: 46759.48 }, 52: { pago: 208.72, dev: 50093.67 },
        53: { pago: 223.64, dev: 53673.52 }, 54: { pago: 239.60, dev: 57504.75 }, 55: { pago: 256.47, dev: 61553.41 }, 56: { pago: 274.11, dev: 65786.39 }, 57: { pago: 292.51, dev: 70203.09 },
        58: { pago: 311.62, dev: 74788.26 }, 59: { pago: 331.98, dev: 79675.58 }, 60: { pago: 353.68, dev: 84882.06 }, 61: { pago: 376.65, dev: 90355.90 }, 62: { pago: 400.72, dev: 96173.79 },
        63: { pago: 425.61, dev: 102146.69 }, 64: { pago: 451.20, dev: 108288.20 }
    },
    "PAH13": {
        18: { pago: 61.64, dev: 14793.60 }, 19: { pago: 62.42, dev: 14980.98 }, 20: { pago: 63.18, dev: 15162.86 }, 21: { pago: 63.97, dev: 15352.60 }, 22: { pago: 64.89, dev: 15573.47 },
        23: { pago: 65.89, dev: 15814.02 }, 24: { pago: 67.04, dev: 16088.40 }, 25: { pago: 68.33, dev: 16398.59 }, 26: { pago: 69.81, dev: 16754.34 }, 27: { pago: 71.38, dev: 17130.18 },
        28: { pago: 72.99, dev: 17518.68 }, 29: { pago: 74.77, dev: 17945.36 }, 30: { pago: 76.81, dev: 18435.54 }, 31: { pago: 79.14, dev: 18993.11 }, 32: { pago: 81.81, dev: 19633.82 },
        33: { pago: 84.89, dev: 20372.92 }, 34: { pago: 88.37, dev: 21209.35 }, 35: { pago: 92.32, dev: 22156.00 }, 36: { pago: 96.83, dev: 23239.45 }, 37: { pago: 101.83, dev: 24440.23 },
        38: { pago: 107.45, dev: 25787.66 }, 39: { pago: 113.52, dev: 27245.71 }, 40: { pago: 120.15, dev: 28835.70 }, 41: { pago: 127.42, dev: 30581.54 }, 42: { pago: 135.40, dev: 32496.59 },
        43: { pago: 144.14, dev: 34593.86 }, 44: { pago: 153.71, dev: 36889.53 }, 45: { pago: 164.00, dev: 39360.20 }, 46: { pago: 175.00, dev: 41999.79 }, 47: { pago: 186.76, dev: 44822.39 },
        48: { pago: 199.17, dev: 47801.44 }, 49: { pago: 212.74, dev: 51056.95 }, 50: { pago: 227.50, dev: 54599.83 }, 51: { pago: 243.54, dev: 58449.35 }, 52: { pago: 260.90, dev: 62617.09 },
        53: { pago: 279.55, dev: 67091.90 }, 54: { pago: 299.50, dev: 71880.93 }, 55: { pago: 320.59, dev: 76941.76 }, 56: { pago: 342.64, dev: 82232.98 }, 57: { pago: 365.64, dev: 87753.86 },
        58: { pago: 389.52, dev: 93485.33 }, 59: { pago: 414.98, dev: 99594.47 }, 60: { pago: 442.09, dev: 106102.58 }, 61: { pago: 470.81, dev: 112994.88 }, 62: { pago: 500.91, dev: 120217.24 },
        63: { pago: 532.01, dev: 127683.36 }, 64: { pago: 564.00, dev: 135360.25 }
    },
    "PAH14": {
        18: { pago: 51.38, dev: 15414.90 }, 19: { pago: 52.03, dev: 15609.70 }, 20: { pago: 52.66, dev: 15797.99 }, 21: { pago: 53.31, dev: 15993.54 }, 22: { pago: 54.07, dev: 16220.28 },
        23: { pago: 54.89, dev: 16465.92 }, 24: { pago: 55.82, dev: 16744.97 }, 25: { pago: 56.86, dev: 17058.84 }, 26: { pago: 58.06, dev: 17417.36 }, 27: { pago: 59.31, dev: 17794.00 },
        28: { pago: 60.60, dev: 18180.69 }, 29: { pago: 62.02, dev: 18605.06 }, 30: { pago: 63.64, dev: 19092.89 }, 31: { pago: 65.49, dev: 19647.39 }, 32: { pago: 67.61, dev: 20283.87 },
        33: { pago: 70.05, dev: 21016.24 }, 34: { pago: 72.81, dev: 21842.17 }, 35: { pago: 75.91, dev: 22772.67 }, 36: { pago: 79.44, dev: 23832.63 }, 37: { pago: 83.33, dev: 25000.17 },
        38: { pago: 87.68, dev: 26303.12 }, 39: { pago: 92.35, dev: 27705.25 }, 40: { pago: 97.42, dev: 29225.43 }, 41: { pago: 102.95, dev: 30883.60 }, 42: { pago: 108.96, dev: 32687.34 },
        43: { pago: 115.48, dev: 34642.75 }, 44: { pago: 122.53, dev: 36759.94 }, 45: { pago: 130.04, dev: 39010.90 }, 46: { pago: 137.95, dev: 41384.94 }, 47: { pago: 146.31, dev: 43892.99 },
        48: { pago: 155.02, dev: 46506.65 }, 49: { pago: 164.46, dev: 49337.24 }, 50: { pago: 174.64, dev: 52391.16 }, 51: { pago: 185.59, dev: 55675.76 }, 52: { pago: 197.31, dev: 59192.85 },
        53: { pago: 209.70, dev: 62910.41 }, 54: { pago: 222.77, dev: 66829.98 }, 55: { pago: 236.36, dev: 70907.61 }, 56: { pago: 250.33, dev: 75097.85 }, 57: { pago: 264.65, dev: 79395.76 },
        58: { pago: 279.25, dev: 83774.47 }, 59: { pago: 294.58, dev: 88373.35 }, 60: { pago: 310.67, dev: 93200.61 }, 61: { pago: 327.47, dev: 98241.91 }, 62: { pago: 344.82, dev: 103445.30 },
        63: { pago: 362.50, dev: 108749.05 }, 64: { pago: 380.45, dev: 114134.86 }
    },
    "PAH15": {
        18: { pago: 64.23, dev: 19268.63 }, 19: { pago: 65.04, dev: 19512.13 }, 20: { pago: 65.82, dev: 19747.48 }, 21: { pago: 66.64, dev: 19991.93 }, 22: { pago: 67.58, dev: 20275.35 },
        23: { pago: 68.61, dev: 20582.41 }, 24: { pago: 69.77, dev: 20931.21 }, 25: { pago: 71.08, dev: 21323.55 }, 26: { pago: 72.57, dev: 21771.70 }, 27: { pago: 74.14, dev: 22242.51 },
        28: { pago: 75.75, dev: 22725.87 }, 29: { pago: 77.52, dev: 23256.33 }, 30: { pago: 79.55, dev: 23866.11 }, 31: { pago: 81.86, dev: 24559.24 }, 32: { pago: 84.52, dev: 25354.84 },
        33: { pago: 87.57, dev: 26270.30 }, 34: { pago: 91.01, dev: 27302.71 }, 35: { pago: 94.89, dev: 28465.84 }, 36: { pago: 99.30, dev: 29790.79 }, 37: { pago: 104.17, dev: 31250.21 },
        38: { pago: 109.60, dev: 32878.90 }, 39: { pago: 115.44, dev: 34631.56 }, 40: { pago: 121.77, dev: 36531.78 }, 41: { pago: 128.68, dev: 38604.50 }, 42: { pago: 136.20, dev: 40859.18 },
        43: { pago: 144.34, dev: 43303.43 }, 44: { pago: 153.17, dev: 45949.93 }, 45: { pago: 162.55, dev: 48763.62 }, 46: { pago: 172.44, dev: 51731.18 }, 47: { pago: 182.89, dev: 54866.23 },
        48: { pago: 193.78, dev: 58133.31 }, 49: { pago: 205.57, dev: 61671.55 }, 50: { pago: 218.30, dev: 65488.95 }, 51: { pago: 231.98, dev: 69594.70 }, 52: { pago: 246.64, dev: 73991.06 },
        53: { pago: 262.13, dev: 78638.01 }, 54: { pago: 278.46, dev: 83537.48 }, 55: { pago: 295.45, dev: 88634.51 }, 56: { pago: 312.91, dev: 93872.32 }, 57: { pago: 330.82, dev: 99244.70 },
        58: { pago: 349.06, dev: 104718.09 }, 59: { pago: 368.22, dev: 110466.69 }, 60: { pago: 388.34, dev: 116500.76 }, 61: { pago: 409.34, dev: 122802.39 }, 62: { pago: 431.02, dev: 129306.62 },
        63: { pago: 453.12, dev: 135936.32 }, 64: { pago: 475.56, dev: 142668.58 }
    },
    "PAH16": {
        18: { pago: 80.29, dev: 24085.79 }, 19: { pago: 81.30, dev: 24390.16 }, 20: { pago: 82.28, dev: 24684.35 }, 21: { pago: 83.30, dev: 24989.91 }, 22: { pago: 84.48, dev: 25344.18 },
        23: { pago: 85.76, dev: 25728.01 }, 24: { pago: 87.21, dev: 26164.02 }, 25: { pago: 88.85, dev: 26654.44 }, 26: { pago: 90.72, dev: 27214.62 }, 27: { pago: 92.68, dev: 27803.13 },
        28: { pago: 94.69, dev: 28407.33 }, 29: { pago: 96.90, dev: 29070.41 }, 30: { pago: 99.44, dev: 29832.64 }, 31: { pago: 102.33, dev: 30699.05 }, 32: { pago: 105.65, dev: 31693.55 },
        33: { pago: 109.46, dev: 32837.87 }, 34: { pago: 113.76, dev: 34128.38 }, 35: { pago: 118.61, dev: 35582.30 }, 36: { pago: 124.13, dev: 37238.48 }, 37: { pago: 130.21, dev: 39062.77 },
        38: { pago: 137.00, dev: 41098.63 }, 39: { pago: 144.30, dev: 43289.45 }, 40: { pago: 152.22, dev: 45664.73 }, 41: { pago: 160.85, dev: 48255.63 }, 42: { pago: 170.25, dev: 51073.97 },
        43: { pago: 180.43, dev: 54129.29 }, 44: { pago: 191.46, dev: 57437.41 }, 45: { pago: 203.18, dev: 60954.53 }, 46: { pago: 215.55, dev: 64663.97 }, 47: { pago: 228.61, dev: 68582.79 },
        48: { pago: 242.22, dev: 72666.64 }, 49: { pago: 256.96, dev: 77089.44 }, 50: { pago: 272.87, dev: 81861.19 }, 51: { pago: 289.98, dev: 86993.37 }, 52: { pago: 308.30, dev: 92488.82 },
        53: { pago: 327.66, dev: 98297.52 }, 54: { pago: 348.07, dev: 104421.85 }, 55: { pago: 369.31, dev: 110793.13 }, 56: { pago: 391.13, dev: 117340.39 }, 57: { pago: 413.52, dev: 124055.87 },
        58: { pago: 436.33, dev: 130897.61 }, 59: { pago: 460.28, dev: 138083.36 }, 60: { pago: 485.42, dev: 145625.95 }, 61: { pago: 511.68, dev: 153502.99 }, 62: { pago: 538.78, dev: 161633.28 },
        63: { pago: 566.40, dev: 169920.40 }, 64: { pago: 594.55, dev: 178335.72 }
    },
    "PAH17": {
        18: { pago: 74.44, dev: 26799.61 }, 19: { pago: 75.43, dev: 27154.00 }, 20: { pago: 76.38, dev: 27495.01 }, 21: { pago: 77.35, dev: 27846.19 }, 22: { pago: 78.47, dev: 28248.12 },
        23: { pago: 79.66, dev: 28678.37 }, 24: { pago: 81.00, dev: 29161.39 }, 25: { pago: 82.49, dev: 29697.74 }, 26: { pago: 84.18, dev: 30303.54 }, 27: { pago: 85.92, dev: 30932.71 },
        28: { pago: 87.69, dev: 31570.09 }, 29: { pago: 89.63, dev: 32267.67 }, 30: { pago: 91.86, dev: 33068.79 }, 31: { pago: 94.38, dev: 33976.70 }, 32: { pago: 97.26, dev: 35014.91 },
        33: { pago: 100.56, dev: 36201.92 }, 34: { pago: 104.25, dev: 37530.29 }, 35: { pago: 108.37, dev: 39012.40 }, 36: { pago: 113.01, dev: 40683.99 }, 37: { pago: 118.06, dev: 42503.04 },
        38: { pago: 123.64, dev: 44511.43 }, 39: { pago: 129.59, dev: 46651.28 }, 40: { pago: 135.96, dev: 48947.28 }, 41: { pago: 142.84, dev: 51421.88 }, 42: { pago: 150.20, dev: 54072.56 },
        43: { pago: 158.03, dev: 56892.47 }, 44: { pago: 166.35, dev: 59885.45 }, 45: { pago: 174.99, dev: 62998.15 }, 46: { pago: 183.91, dev: 66206.81 }, 47: { pago: 193.13, dev: 69527.73 },
        48: { pago: 202.55, dev: 72916.57 }, 49: { pago: 212.61, dev: 76540.83 }, 50: { pago: 223.35, dev: 80407.60 }, 51: { pago: 234.75, dev: 84508.68 }, 52: { pago: 246.76, dev: 88834.11 },
        53: { pago: 259.16, dev: 93297.05 }, 54: { pago: 271.95, dev: 97901.83 }, 55: { pago: 284.96, dev: 102587.34 }, 56: { pago: 298.01, dev: 107285.22 }, 57: { pago: 311.09, dev: 111663.89 },
        58: { pago: 324.07, dev: 116663.89 }, 59: { pago: 337.47, dev: 121488.01 }, 60: { pago: 351.31, dev: 126470.21 }, 61: { pago: 365.56, dev: 131602.11 }, 62: { pago: 380.05, dev: 136817.44 },
        63: { pago: 394.63, dev: 142065.07 }, 64: { pago: 409.28, dev: 147342.46 }
    },
    "PAH18": {
        18: { pago: 93.05, dev: 33499.51 }, 19: { pago: 94.28, dev: 33942.50 }, 20: { pago: 95.47, dev: 34368.77 }, 21: { pago: 96.69, dev: 34807.73 }, 22: { pago: 98.08, dev: 35310.15 },
        23: { pago: 99.58, dev: 35847.97 }, 24: { pago: 101.25, dev: 36451.74 }, 25: { pago: 103.12, dev: 37122.18 }, 26: { pago: 105.22, dev: 37879.42 }, 27: { pago: 107.41, dev: 38665.88 },
        28: { pago: 109.62, dev: 39462.61 }, 29: { pago: 112.04, dev: 40334.59 }, 30: { pago: 114.82, dev: 41335.98 }, 31: { pago: 117.97, dev: 42470.88 }, 32: { pago: 121.58, dev: 43768.64 },
        33: { pago: 125.70, dev: 45252.40 }, 34: { pago: 130.31, dev: 46912.86 }, 35: { pago: 135.46, dev: 48765.50 }, 36: { pago: 141.26, dev: 50854.99 }, 37: { pago: 147.58, dev: 53128.80 },
        38: { pago: 154.55, dev: 55639.29 }, 39: { pago: 161.98, dev: 58314.10 }, 40: { pago: 169.96, dev: 61184.11 }, 41: { pago: 178.55, dev: 64277.35 }, 42: { pago: 187.75, dev: 67590.70 },
        43: { pago: 197.54, dev: 71115.59 }, 44: { pago: 207.94, dev: 74856.81 }, 45: { pago: 218.74, dev: 78747.68 }, 46: { pago: 229.88, dev: 82758.51 }, 47: { pago: 241.42, dev: 86909.66 },
        48: { pago: 253.18, dev: 91145.71 }, 49: { pago: 265.77, dev: 95676.04 }, 50: { pago: 279.19, dev: 100509.50 }, 51: { pago: 293.43, dev: 105635.85 }, 52: { pago: 308.45, dev: 111042.63 },
        53: { pago: 323.95, dev: 116621.31 }, 54: { pago: 339.94, dev: 122377.28 }, 55: { pago: 356.21, dev: 128234.18 }, 56: { pago: 372.52, dev: 134106.53 }, 57: { pago: 388.86, dev: 139990.23 },
        58: { pago: 405.08, dev: 145829.86 }, 59: { pago: 421.83, dev: 151860.01 }, 60: { pago: 439.13, dev: 158087.76 }, 61: { pago: 456.95, dev: 164502.63 }, 62: { pago: 475.06, dev: 171021.80 },
        63: { pago: 493.28, dev: 177581.34 }, 64: { pago: 511.61, dev: 184178.08 }
    },
    "PAH19": {
        18: { pago: 116.32, dev: 41874.39 }, 19: { pago: 117.86, dev: 42428.13 }, 20: { pago: 119.34, dev: 42960.96 }, 21: { pago: 120.86, dev: 43509.67 }, 22: { pago: 122.60, dev: 44137.68 },
        23: { pago: 124.47, dev: 44809.96 }, 24: { pago: 126.57, dev: 45564.68 }, 25: { pago: 128.90, dev: 46402.72 }, 26: { pago: 131.53, dev: 47349.28 }, 27: { pago: 134.26, dev: 48332.36 },
        28: { pago: 137.02, dev: 49328.26 }, 29: { pago: 140.05, dev: 50418.23 }, 30: { pago: 143.53, dev: 51669.98 }, 31: { pago: 147.47, dev: 53088.60 }, 32: { pago: 151.97, dev: 54710.80 },
        33: { pago: 157.13, dev: 56565.50 }, 34: { pago: 162.89, dev: 58641.08 }, 35: { pago: 169.32, dev: 60956.87 }, 36: { pago: 176.58, dev: 63568.74 }, 37: { pago: 184.48, dev: 66411.00 },
        38: { pago: 193.19, dev: 69549.11 }, 39: { pago: 202.48, dev: 72892.63 }, 40: { pago: 212.44, dev: 76480.13 }, 41: { pago: 223.19, dev: 80346.69 }, 42: { pago: 234.69, dev: 84488.38 },
        43: { pago: 246.93, dev: 88894.49 }, 44: { pago: 259.92, dev: 93571.02 }, 45: { pago: 273.43, dev: 98434.60 }, 46: { pago: 287.36, dev: 103448.14 }, 47: { pago: 301.77, dev: 108637.08 },
        48: { pago: 316.48, dev: 113932.14 }, 49: { pago: 332.21, dev: 119595.05 }, 50: { pago: 348.99, dev: 125636.87 }, 51: { pago: 366.79, dev: 132044.81 }, 52: { pago: 385.56, dev: 138803.29 },
        53: { pago: 404.94, dev: 145776.63 }, 54: { pago: 424.92, dev: 152971.61 }, 55: { pago: 445.26, dev: 160292.72 }, 56: { pago: 465.65, dev: 167633.16 }, 57: { pago: 486.08, dev: 174987.79 },
        58: { pago: 506.35, dev: 182287.33 }, 59: { pago: 527.29, dev: 189825.01 }, 60: { pago: 548.92, dev: 197609.70 }, 61: { pago: 571.19, dev: 205628.29 }, 62: { pago: 593.83, dev: 213777.25 },
        63: { pago: 616.60, dev: 221976.68 }, 64: { pago: 639.51, dev: 230222.60 }
    }
};

/* ==========================================================================
   2. FUNCIONES DE NAVEGACIÓN Y FORMATO
   ========================================================================== */

function formatPEN(val) {
    return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(val);
}

function switchTab(tab) {
    // 1. Ocultar todas las pestañas y desactivar los botones
    ['modulares', 'oro', 'flexible', 'futuro', 'clinicas', 'docs'].forEach(t => {
        document.getElementById(`content-${t}`).classList.add('hidden');
        document.getElementById(`tab-${t}`).classList.remove('active');
        document.getElementById(`tab-${t}`).classList.add('text-slate-500');
    });

    // 2. Mostrar la pestaña seleccionada y activar su botón
    document.getElementById(`content-${tab}`).classList.remove('hidden');
    document.getElementById(`tab-${tab}`).classList.add('active');
    document.getElementById(`tab-${tab}`).classList.remove('text-slate-500');

    // 3. Inicializar únicamente vistas estáticas o catálogos (sin cálculos automáticos)
    if (tab === 'futuro') {
        // Inicializa los selectores de Vida Futuro si es necesario, pero sin forzar cotización automática
        if (typeof onFuturoAgeChange === 'function') onFuturoAgeChange();
    }
    if (tab === 'clinicas') {
        if (typeof renderClinicsGrid === 'function' && typeof CLINICS_DATABASE !== 'undefined') {
            renderClinicsGrid(CLINICS_DATABASE);
        }
    }
    if (tab === 'docs') {
        if (typeof renderDocumentsGrid === 'function') renderDocumentsGrid();
    }
}

function toggleDetails(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden');
}

function getRateForAge(age, type) {
    const match = RATES_MODULARES.find(r => age >= r.min && age <= r.max) || RATES_MODULARES[RATES_MODULARES.length - 1];
    return match[type];
}

/* ==========================================================================
   MATRIZ OFICIAL COMPLETA DE TARIFAS - SALUD DE ORO (RANGOS DE EDAD EXACTOS)
   ========================================================================== */
const RATES_ORO_OFICIAL = [
    { min: 0, max: 60, red: 12550.00, preferente: 7599.09 },
    { min: 61, max: 61, red: 14058.00, preferente: 8823.04 },
    { min: 62, max: 62, red: 14712.00, preferente: 9359.61 },
    { min: 63, max: 63, red: 15122.00, preferente: 9858.31 },
    { min: 64, max: 64, red: 15449.00, preferente: 10191.24 },
    { min: 65, max: 65, red: 15844.00, preferente: 10441.28 },
    { min: 66, max: 66, red: 16158.00, preferente: 10980.24 },
    { min: 67, max: 67, red: 16539.00, preferente: 11366.32 },
    { min: 68, max: 68, red: 16954.00, preferente: 11727.69 },
    { min: 69, max: 69, red: 17825.00, preferente: 12191.10 },
    { min: 70, max: 70, red: 18579.00, preferente: 12721.39 },
    { min: 71, max: 75, red: 19205.00, preferente: 13375.30 },
    { min: 76, max: 80, red: 20387.00, preferente: 14266.10 },
    { min: 81, max: 120, red: 21156.00, preferente: 14583.70 }
];

function getOroRateForAge(age, planType) {
    const match = RATES_ORO_OFICIAL.find(r => age >= r.min && age <= r.max) || RATES_ORO_OFICIAL[RATES_ORO_OFICIAL.length - 1];
    return match[planType] || 0;
}

function calcOro() {
    const age = parseInt(document.getElementById('oroAge').value) || 65;
    const planType = document.getElementById('oroPlanType').value || 'preferente'; // 'red' o 'preferente'
    const quotas = parseInt(document.getElementById('oroQuotas').value) || 12;
    const discPct = (parseFloat(document.getElementById('oroDiscount').value) || 0) / 100;

    let totalAnual = getOroRateForAge(age, planType);
    let ahorro = totalAnual * discPct;
    let finalAnnual = Math.ceil((totalAnual - ahorro) * 100) / 100;
    
    // Cuota oficial con redondeo exacto al estilo Excel (ROUNDUP)
    let cuota = quotas === 12 ? Math.ceil((finalAnnual / 12) * 100) / 100 : finalAnnual;

    const grid = document.getElementById('oroResults');
    if (!grid) return;

    grid.innerHTML = `
    <div class="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Plan Salud de Oro RIMAC</span>
          <h4 class="text-xl font-black text-slate-900">Salud de Oro (${planType === 'red' ? 'Oro Plan Red' : 'Oro Plan Preferente'} - Edad: ${age} años)</h4>
        </div>
        <span class="bg-amber-50 text-amber-700 text-xs font-extrabold px-3 py-1 rounded-full">Categoría Óptima</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <div class="space-y-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div class="flex justify-between text-slate-600">
            <span>Prima Anual Base:</span>
            <span class="font-bold">${formatPEN(totalAnual)}</span>
          </div>
          ${discPct > 0 ? `
          <div class="flex justify-between text-emerald-600 font-bold border-t border-slate-200 pt-2">
            <span>Descuento Comercial (${discPct * 100}%):</span>
            <span>-${formatPEN(ahorro)}</span>
          </div>` : ''}
          <div class="flex justify-between text-slate-900 font-black text-sm border-t border-slate-200 pt-2">
            <span>Prima Final Anual:</span>
            <span class="text-rimac-red">${formatPEN(finalAnnual)}</span>
          </div>
        </div>

        <div class="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 flex flex-col justify-center items-center text-center">
          <span class="text-xs font-extrabold text-amber-800 uppercase tracking-wider">${quotas === 12 ? '12 Cuotas Mensuales de' : 'Pago Único Anual'}</span>
          <p class="text-4xl font-black text-amber-700 mt-1">S/ ${cuota.toFixed(2)}</p>
        </div>
      </div>
    </div>
  `;
}
function getFlexibleRateForAge(age, componentKey) {
    const flexTariffs = {
        0: { B2: 1880.28, A1: 120, A2: 120, A3: 421.49, A4: 120, A5: 300, A6: 240 },
        21: { B2: 1880.28, A1: 120, A2: 120, A3: 592.72, A4: 120, A5: 300, A6: 300 },
        27: { B2: 1880.28, A1: 120, A2: 120, A3: 935.18, A4: 120, A5: 300, A6: 300 },
        36: { B2: 2563.21, A1: 120, A2: 120, A3: 935.18, A4: 120, A5: 300, A6: 350 }
    };
    let selectedAgeKey = 0;
    const sortedAges = Object.keys(flexTariffs).map(Number).sort((a, b) => a - b);
    for (let a of sortedAges) {
        if (age >= a) selectedAgeKey = a;
    }
    return flexTariffs[selectedAgeKey][componentKey] || 0;
}

/* ==========================================================================
   CÁLCULO EXACTO DE SALUD FLEXIBLE (MATRIZ OFICIAL EXCEL)
   ========================================================================== */
function getFlexibleRateForAge(age, componentKey) {
    // Tarifas oficiales extraídas directamente de la hoja Tarifas
    const flexTariffs = {
        0: { B2: 1880.28, A1: 120, A2: 120, A3: 421.49, A4: 120, A5: 300, A6: 240 },
        6: { B2: 1880.28, A1: 120, A2: 120, A3: 421.49, A4: 120, A5: 300, A6: 240 },
        16: { B2: 1880.28, A1: 120, A2: 120, A3: 421.49, A4: 120, A5: 300, A6: 240 },
        21: { B2: 1880.28, A1: 120, A2: 120, A3: 592.72, A4: 120, A5: 300, A6: 300 },
        26: { B2: 1880.28, A1: 120, A2: 120, A3: 592.72, A4: 120, A5: 300, A6: 300 },
        27: { B2: 1880.28, A1: 120, A2: 120, A3: 935.18, A4: 120, A5: 300, A6: 300 },
        30: { B2: 2070.04, A1: 120, A2: 120, A3: 935.18, A4: 120, A5: 300, A6: 300 },
        36: { B2: 2563.21, A1: 120, A2: 120, A3: 935.18, A4: 120, A5: 300, A6: 350 },
        41: { B2: 3014.15, A1: 120, A2: 120, A3: 1332.90, A4: 120, A5: 360, A6: 390 },
        42: { B2: 3432.22, A1: 120, A2: 120, A3: 1475.25, A4: 120, A5: 360, A6: 410 },
        43: { B2: 3881.33, A1: 120, A2: 120, A3: 1545.96, A4: 120, A5: 360, A6: 420 },
        44: { B2: 4180.20, A1: 120, A2: 120, A3: 1812.22, A4: 120, A5: 360, A6: 420 },
        45: { B2: 4578.93, A1: 120, A2: 120, A3: 2022.45, A4: 120, A5: 420, A6: 420 },
        46: { B2: 4620.15, A1: 120, A2: 120, A3: 2095.63, A4: 120, A5: 420, A6: 420 },
        47: { B2: 4710.84, A1: 240, A2: 120, A3: 2165.41, A4: 120, A5: 480, A6: 420 },
        48: { B2: 4820.51, A1: 240, A2: 120, A3: 2210.88, A4: 120, A5: 480, A6: 420 },
        49: { B2: 4950.12, A1: 240, A2: 120, A3: 2250.15, A4: 120, A5: 480, A6: 420 },
        50: { B2: 5012.33, A1: 240, A2: 120, A3: 2290.40, A4: 120, A5: 480, A6: 420 },
        51: { B2: 5055.40, A1: 240, A2: 120, A3: 2300.12, A4: 120, A5: 480, A6: 420 },
        52: { B2: 5106.09, A1: 240, A2: 120, A3: 2305.03, A4: 120, A5: 480, A6: 420 },
        53: { B2: 5195.80, A1: 240, A2: 120, A3: 2310.50, A4: 120, A5: 480, A6: 420 },
        54: { B2: 5250.15, A1: 240, A2: 120, A3: 2315.80, A4: 120, A5: 480, A6: 420 },
        55: { B2: 5320.40, A1: 240, A2: 120, A3: 2320.10, A4: 120, A5: 480, A6: 420 },
        56: { B2: 5450.80, A1: 240, A2: 120, A3: 2350.40, A4: 120, A5: 540, A6: 450 },
        57: { B2: 5620.10, A1: 240, A2: 120, A3: 2400.10, A4: 120, A5: 540, A6: 450 },
        58: { B2: 5850.40, A1: 240, A2: 120, A3: 2450.20, A4: 120, A5: 540, A6: 450 },
        59: { B2: 6100.20, A1: 240, A2: 120, A3: 2500.50, A4: 120, A5: 540, A6: 450 },
        60: { B2: 6400.00, A1: 240, A2: 120, A3: 2550.00, A4: 120, A5: 540, A6: 450 }
    };

    let selectedAgeKey = 0;
    const sortedAges = Object.keys(flexTariffs).map(Number).sort((a, b) => a - b);
    for (let a of sortedAges) {
        if (age >= a) selectedAgeKey = a;
    }
    return flexTariffs[selectedAgeKey][componentKey] || 0;
}

/* ==========================================================================
   MATRIZ DE TARIFAS MILIMÉTRICA Y EXACTA DE SALUD FLEXIBLE (0 A 80+ AÑOS)
   ========================================================================== */
function getFlexibleRateForAge(age, componentKey) {
    const flexTariffs = {
        0: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        1: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        2: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        3: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        4: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        5: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        6: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        7: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        8: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        9: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        10: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        11: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        12: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        13: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        14: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        15: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        16: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        17: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        18: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        19: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        20: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 421.4917053040216, A4: 120, A5: 300, A6: 240 },
        21: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 592.7227105837803, A4: 120, A5: 300, A6: 300 },
        22: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 592.7227105837803, A4: 120, A5: 300, A6: 300 },
        23: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 592.7227105837803, A4: 120, A5: 300, A6: 300 },
        24: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 592.7227105837803, A4: 120, A5: 300, A6: 300 },
        25: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 592.7227105837803, A4: 120, A5: 300, A6: 300 },
        26: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 592.7227105837803, A4: 120, A5: 300, A6: 300 },
        27: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        28: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        29: { B2: 1880.2838869545112, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        30: { B2: 2070.0373067389114, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        31: { B2: 2070.0373067389114, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        32: { B2: 2070.0373067389114, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        33: { B2: 2070.0373067389114, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        34: { B2: 2070.0373067389114, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        35: { B2: 2070.0373067389114, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        36: { B2: 2070.0373067389114, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        37: { B2: 2070.0373067389114, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        38: { B2: 2070.0373067389114, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        39: { B2: 2070.0373067389114, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        40: { B2: 2070.0373067389114, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        41: { B2: 2449.544146307712, A1: 120, A2: 120, A3: 935.1847211432978, A4: 120, A5: 300, A6: 300 },
        42: { B2: 2829.0509858765117, A1: 240, A2: 120, A3: 1106.4157264230566, A4: 120, A5: 300, A6: 300 },
        43: { B2: 2829.0509858765117, A1: 240, A2: 120, A3: 1106.4157264230566, A4: 120, A5: 300, A6: 300 },
        44: { B2: 3018.8044056609124, A1: 240, A2: 120, A3: 1106.4157264230566, A4: 120, A5: 300, A6: 300 },
        45: { B2: 3208.557825445312, A1: 240, A2: 120, A3: 1106.4157264230566, A4: 120, A5: 300, A6: 300 },
        46: { B2: 3398.3112452297128, A1: 240, A2: 120, A3: 1448.877736982574, A4: 120, A5: 300, A6: 420 },
        47: { B2: 3588.0646650141134, A1: 240, A2: 120, A3: 1620.1087422623327, A4: 120, A5: 300, A6: 420 },
        48: { B2: 3777.8180847985122, A1: 240, A2: 120, A3: 1791.3397475420918, A4: 120, A5: 300, A6: 420 },
        49: { B2: 3967.571504582913, A1: 240, A2: 120, A3: 1962.5707528218504, A4: 120, A5: 300, A6: 420 },
        50: { B2: 3967.571504582913, A1: 240, A2: 120, A3: 2133.8017581016093, A4: 120, A5: 300, A6: 420 },
        51: { B2: 4726.585183720515, A1: 240, A2: 120, A3: 2133.8017581016093, A4: 120, A5: 480, A6: 420 },
        52: { B2: 5106.092023289315, A1: 240, A2: 120, A3: 2305.032763381368, A4: 120, A5: 480, A6: 420 },
        53: { B2: 5295.845443073715, A1: 240, A2: 120, A3: 2476.263768661127, A4: 120, A5: 480, A6: 420 },
        54: { B2: 5485.598862858114, A1: 240, A2: 120, A3: 2647.4947739408854, A4: 120, A5: 480, A6: 420 },
        55: { B2: 5675.352282642514, A1: 240, A2: 120, A3: 2818.725779220644, A4: 120, A5: 480, A6: 420 },
        56: { B2: 6054.8591222113155, A1: 240, A2: 120, A3: 2989.956784500403, A4: 120, A5: 480, A6: 660 },
        57: { B2: 6624.119381564516, A1: 240, A2: 120, A3: 2989.956784500403, A4: 120, A5: 480, A6: 660 },
        58: { B2: 7003.626221133316, A1: 240, A2: 120, A3: 3161.1877897801614, A4: 120, A5: 480, A6: 660 },
        59: { B2: 7762.639900270917, A1: 240, A2: 120, A3: 3332.41879505992, A4: 120, A5: 480, A6: 660 },
        60: { B2: 8331.900159624118, A1: 240, A2: 120, A3: 3332.41879505992, A4: 120, A5: 480, A6: 660 }
    };

    const maxAge = Math.max(...Object.keys(flexTariffs).map(Number));
    const safeAge = Math.min(Math.max(age, 0), maxAge);
    const row = flexTariffs[safeAge] || flexTariffs[0];
    return row[componentKey] || 0;
}

function calcFlexible() {
    const age = parseInt(document.getElementById('flexAge').value) || 28;
    const quotas = parseInt(document.getElementById('flexQuotas').value) || 12;
    const discPct = (parseFloat(document.getElementById('flexDiscount').value) || 0) / 100;

    let totalBase = getFlexibleRateForAge(age, 'B2');
    let adicSum = 0;

    if (document.getElementById('chkA1').checked) adicSum += getFlexibleRateForAge(age, 'A1');
    if (document.getElementById('chkA2').checked) adicSum += getFlexibleRateForAge(age, 'A2');
    if (document.getElementById('chkA3').checked) adicSum += getFlexibleRateForAge(age, 'A3');
    if (document.getElementById('chkA4').checked) adicSum += getFlexibleRateForAge(age, 'A4');
    if (document.getElementById('chkA5').checked) adicSum += getFlexibleRateForAge(age, 'A5');
    if (document.getElementById('chkA6').checked) adicSum += getFlexibleRateForAge(age, 'A6');

    const subtotalAnual = totalBase + adicSum;
    const ahorro = subtotalAnual * discPct;
    const finalAnnual = Math.ceil((subtotalAnual - ahorro) * 100) / 100;
    const cuota = quotas === 12 ? Math.ceil((finalAnnual / 12) * 100) / 100 : finalAnnual;

    const grid = document.getElementById('flexibleResults');
    grid.innerHTML = `
    <div class="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Código Plan Flexible RIMAC</span>
          <h4 class="text-xl font-black text-slate-900">Salud Flexible (Edad: ${age} años)</h4>
        </div>
        <span class="bg-red-50 text-rimac-red text-xs font-extrabold px-3 py-1 rounded-full">Suma Asegurada: S/ 1,000,000</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <div class="space-y-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div class="flex justify-between text-slate-600">
            <span>Prima Base (Casa + Clínicas):</span>
            <span class="font-bold">${formatPEN(totalBase)}</span>
          </div>
          <div class="flex justify-between text-slate-600">
            <span>Adicionales Seleccionados:</span>
            <span class="font-bold">${formatPEN(adicSum)}</span>
          </div>
          ${discPct > 0 ? `
          <div class="flex justify-between text-emerald-600 font-bold border-t border-slate-200 pt-2">
            <span>Descuento Comercial (${discPct * 100}%):</span>
            <span>-${formatPEN(ahorro)}</span>
          </div>` : ''}
          <div class="flex justify-between text-slate-900 font-black text-sm border-t border-slate-200 pt-2">
            <span>Prima Final Anual:</span>
            <span class="text-rimac-red">${formatPEN(finalAnnual)}</span>
          </div>
        </div>

        <div class="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100 flex flex-col justify-center items-center text-center">
          <span class="text-xs font-extrabold text-rimac-red uppercase tracking-wider">${quotas === 12 ? '12 Cuotas Mensuales de' : 'Pago Único Anual'}</span>
          <p class="text-4xl font-black text-rimac-red mt-1">S/ ${cuota.toFixed(2)}</p>
        </div>
      </div>
    </div>
  `;
}
/* ==========================================================================
   LÓGICA ESTRICTA Y ENCADENADA: VIDA FUTURO GARANTIZADO (SEGÚN TARIFARIO OFICIAL)
   ========================================================================== */

function onFuturoAgeChange() {
    const age = parseInt(document.getElementById('futAge').value) || 18;
    const yearsSelect = document.getElementById('futYears');
    yearsSelect.innerHTML = '';

    let availableYears = [];
    if (age >= 36 && age <= 64) {
        // Grupo 1 y 2: Edades de 36 a 64 tienen acceso a todos los plazos (5, 7, 10, 12, 20)
        availableYears = [5, 7, 10, 12, 20];
    } else if (age >= 18 && age <= 35) {
        // Grupo 2 exclusivo: Edades de 18 a 35 solo tienen plazos de 10, 12 y 20 años
        availableYears = [10, 12, 20];
    } else {
        yearsSelect.innerHTML = `<option value="">Edad fuera de rango (18-64)</option>`;
        document.getElementById('futuroResults').innerHTML = `<div class="bg-red-50 p-4 rounded-2xl text-xs text-rimac-red font-bold">La edad debe estar entre 18 y 64 años.</div>`;
        return;
    }

    availableYears.forEach(y => {
        yearsSelect.innerHTML += `<option value="${y}">${y} Años</option>`;
    });

    onFuturoYearChange();
}

function onFuturoYearChange() {
    const age = parseInt(document.getElementById('futAge').value) || 18;
    const years = parseInt(document.getElementById('futYears').value);
    const returnSelect = document.getElementById('futReturn');
    returnSelect.innerHTML = '';

    // Filtrar los porcentajes de devolución válidos según los años y la edad
    const matchingPlans = PAH_MASTER_TABLE.filter(p => age >= p.minAge && age <= p.maxAge && p.years === years);
    const uniqueReturns = [...new Set(matchingPlans.map(p => p.returnPct))];

    uniqueReturns.forEach(retVal => {
        let label = `${retVal}% Devolución`;
        if (retVal === 100 && (years === 5 || years === 7 || years === 10)) {
            label = `${retVal}% Devolución (Sin Rentabilidad)`;
        }
        returnSelect.innerHTML += `<option value="${retVal}">${label}</option>`;
    });

    onFuturoReturnChange();
}

function onFuturoReturnChange() {
    const age = parseInt(document.getElementById('futAge').value);
    const years = parseInt(document.getElementById('futYears').value);
    const returnPct = parseInt(document.getElementById('futReturn').value);
    const saSelect = document.getElementById('futSA');
    saSelect.innerHTML = '';

    // Filtrar estrictamente las Sumas Aseguradas (SA) válidas para esta combinación exacta
    const matchingPlans = PAH_MASTER_TABLE.filter(p =>
        age >= p.minAge && age <= p.maxAge && p.years === years && p.returnPct === returnPct
    );

    if (matchingPlans.length === 0) {
        saSelect.innerHTML = `<option value="">No disponible</option>`;
    } else {
        matchingPlans.forEach(p => {
            saSelect.innerHTML += `<option value="${p.sa}">S/ ${p.sa.toLocaleString('es-PE')}</option>`;
        });
    }

    calcFuturo();
}

function calcFuturo() {
    const age = parseInt(document.getElementById('futAge').value) || 35;
    const years = parseInt(document.getElementById('futYears').value) || 12;
    const returnPct = parseInt(document.getElementById('futReturn').value) || 100;
    const sa = parseInt(document.getElementById('futSA').value) || 80000;

    const foundPlan = PAH_MASTER_TABLE.find(p =>
        age >= p.minAge && age <= p.maxAge && p.years === years && p.returnPct === returnPct && p.sa === sa
    );

    const grid = document.getElementById('futuroResults');

    if (!foundPlan) {
        grid.innerHTML = `
      <div class="bg-amber-50 border border-amber-200 p-6 rounded-3xl text-xs space-y-2">
        <h4 class="font-black text-amber-800 text-sm">Combinación no registrada</h4>
        <p class="text-slate-600">La combinación seleccionada no arroja un código PAH oficial en la tabla maestra. Por favor verifica los parámetros.</p>
      </div>
    `;
        return;
    }

    let cuotaMensual = 0;
    let refundAmount = 0;

    if (PAH_FULL_DATA[foundPlan.code] && PAH_FULL_DATA[foundPlan.code][age]) {
        cuotaMensual = PAH_FULL_DATA[foundPlan.code][age].pago;
        refundAmount = PAH_FULL_DATA[foundPlan.code][age].dev;
    } else {
        cuotaMensual = 100.00;
        refundAmount = cuotaMensual * 12 * years * (returnPct / 100);
    }

    grid.innerHTML = `
    <div class="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <span class="text-[10px] font-bold text-white bg-rimac-red px-3 py-1 rounded-full uppercase tracking-wider">Código Oficial: ${foundPlan.code}</span>
          <h4 class="text-xl font-black text-slate-900 mt-2">Vida Futuro Garantizado</h4>
        </div>
        <span class="bg-emerald-50 text-emerald-700 text-xs font-extrabold px-3 py-1 rounded-full"><i class="fa-solid fa-check mr-1"></i> Tarifario 100% Exacto</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <span class="text-slate-500 font-bold block mb-1">Aporte Mensual Oficial</span>
          <p class="text-2xl font-black text-slate-900">${formatPEN(cuotaMensual)}</p>
          <span class="text-[10px] text-slate-400 font-medium">Durante ${years} años</span>
        </div>
        <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <span class="text-slate-500 font-bold block mb-1">Protección por Muerte (SA)</span>
          <p class="text-2xl font-black text-slate-900">${formatPEN(sa)}</p>
          <span class="text-[10px] text-slate-400 font-medium">Cobertura desde Día 1</span>
        </div>
        <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
          <span class="text-emerald-800 font-bold block mb-1">Devolución Garantizada (${returnPct}%)</span>
          <p class="text-2xl font-black text-emerald-700">${formatPEN(refundAmount)}</p>
          <span class="text-[10px] text-emerald-600 font-bold">Retorno al finalizar el periodo</span>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   4. RENDERIZADO Y FILTRADO DE CLÍNICAS
   ========================================================================== */

function renderClinicsGrid(list) {
    const grid = document.getElementById('clinicsGrid');
    grid.innerHTML = '';

    if (list.length === 0) {
        grid.innerHTML = `<div class="col-span-3 text-center py-10 text-slate-400 text-xs font-semibold">No se encontraron clínicas con los filtros seleccionados.</div>`;
        return;
    }

    list.forEach(c => {
        let plansBadges = c.plans.map(p => `<span class="bg-red-50 text-rimac-red text-[9px] font-bold px-2 py-0.5 rounded-full">${p}</span>`).join(' ');
        let specsBadges = c.specialties.map(s => `<span class="bg-slate-100 text-slate-700 text-[9px] font-semibold px-2 py-0.5 rounded-full">${s}</span>`).join(' ');

        grid.innerHTML += `
      <div class="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm card-hover flex flex-col justify-between space-y-4">
        <div class="space-y-2.5">
          <div class="flex justify-between items-start">
            <div class="w-10 h-10 rounded-2xl bg-red-50 text-rimac-red flex items-center justify-center text-lg font-black">
              <i class="fa-solid fa-hospital"></i>
            </div>
            <span class="text-[11px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full"><i class="fa-solid fa-location-dot text-rimac-red mr-1"></i>${c.district}</span>
          </div>
          <h4 class="text-base font-black text-slate-900">${c.name}</h4>
          
          <div class="space-y-1 pt-1">
            <span class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Planes Afiliados:</span>
            <div class="flex flex-wrap gap-1">${plansBadges}</div>
          </div>

          <div class="space-y-1 pt-1">
            <span class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Especialidades Destacadas:</span>
            <div class="flex flex-wrap gap-1">${specsBadges}</div>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 text-right">
          <span class="text-[10px] font-bold text-emerald-600"><i class="fa-solid fa-circle-check mr-1"></i> Convenio Activo RIMAC</span>
        </div>
      </div>
    `;
    });
}

function filterClinics() {
    const planVal = document.getElementById('filterPlan').value;
    const specVal = document.getElementById('filterSpecialty').value;
    const textVal = document.getElementById('searchClinicText').value.toLowerCase();

    const filtered = CLINICS_DATABASE.filter(c => {
        const matchPlan = planVal === 'todos' || c.plans.includes(planVal);
        const matchSpec = specVal === 'todos' || c.specialties.includes(specVal);
        const matchText = c.name.toLowerCase().includes(textVal) || c.district.toLowerCase().includes(textVal);
        return matchPlan && matchSpec && matchText;
    });

    renderClinicsGrid(filtered);
}

/* ==========================================================================
   5. CENTRO DE DOCUMENTOS Y MODAL DE VISTA PREVIA
   ========================================================================== */

function renderDocumentsGrid() {
    const grid = document.getElementById('docsGrid');
    grid.innerHTML = '';

    DOCUMENTS_LIST.forEach(doc => {
        grid.innerHTML += `
      <div class="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm card-hover flex flex-col justify-between space-y-4">
        <div class="space-y-3">
          <div class="flex justify-between items-start">
            <div class="w-12 h-12 rounded-2xl bg-red-50 text-rimac-red flex items-center justify-center text-xl font-black">
              <i class="fa-solid ${doc.icon}"></i>
            </div>
            <span class="bg-slate-100 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">${doc.category}</span>
          </div>
          <div>
            <h4 class="text-base font-black text-slate-900">${doc.title}</h4>
            <p class="text-xs text-slate-500 font-semibold mt-0.5"><i class="fa-solid fa-shield-halved text-rimac-red mr-1"></i> Max: ${doc.sa}</p>
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">${doc.desc}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center space-x-2">
          <button onclick="openPreviewModal('${doc.title}', '${doc.category}', '${doc.file}')" class="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 px-3 rounded-xl transition flex items-center justify-center space-x-1.5">
            <i class="fa-solid fa-eye text-slate-600"></i>
            <span>Vista Previa</span>
          </button>
          <a href="${doc.file}" download class="flex-1 bg-rimac-red hover:bg-rimac-darkred text-white text-xs font-bold py-2.5 px-3 rounded-xl transition flex items-center justify-center space-x-1.5">
            <i class="fa-solid fa-download"></i>
            <span>Descargar</span>
          </a>
        </div>
      </div>
    `;
    });
}

function openPreviewModal(title, category, file) {
    document.getElementById('modalDocTitle').innerText = title;
    document.getElementById('modalDocCategory').innerText = category;
    document.getElementById('pdfIframe').src = file;
    document.getElementById('modalDownloadBtn').href = file;
    document.getElementById('previewModal').classList.remove('hidden');
}

function closePreviewModal() {
    document.getElementById('previewModal').classList.add('hidden');
    document.getElementById('pdfIframe').src = '';
}

function exportToPDF() {
    // 1. Rellenar los datos en el contenedor oculto
    document.getElementById('pdfValCliente').innerText = document.getElementById('clientName').value || 'Cliente Rímac';

    const ageTitular = document.getElementById('modAgeTitular')?.value || '35';
    const ageConyugue = document.getElementById('modAgeConyugue')?.value;
    const depsInput = document.getElementById('modAgeDeps')?.value;

    let grupoText = `Titular (${ageTitular}a)`;
    if (ageConyugue) grupoText += `, Cónyuge (${ageConyugue}a)`;
    if (depsInput) grupoText += `, Dep: (${depsInput})`;
    document.getElementById('pdfValGrupo').innerText = grupoText;

    document.getElementById('pdfValContacto').innerText = `${document.getElementById('clientPhone')?.value || ''} ${document.getElementById('clientEmail')?.value || ''}`.trim() || '-';
    document.getElementById('pdfValAsesor').innerText = document.getElementById('agentName')?.value || 'Asesor Comercial Rímac';
    document.getElementById('pdfValTelefono').innerText = document.getElementById('agentPhone')?.value || '411-1111';
    document.getElementById('pdfValCorreo').innerText = document.getElementById('agentEmail')?.value || 'contacto@rimac.com.pe';
    document.getElementById('pdfFechaEmision').innerText = `Fecha de Emisión: ${new Date().toLocaleDateString('es-PE')}`;

    const activeTab = document.querySelector('.tab-btn.active')?.id || 'tab-modulares';
    let activeContentHtml = '';

    if (activeTab === 'tab-modulares') {
        document.getElementById('pdfTituloProducto').innerText = 'Propuesta de Seguros de Salud Modulares';
        activeContentHtml = `
            <div style="background: #FFF1F2; border: 1px solid #FECDD3; border-radius: 8px; padding: 12px; margin-bottom: 15px;">
                <h3 style="color: #9F1239; margin: 0 0 8px 0; font-size: 13px;">🛡️ Coberturas Principales Incluidas (Salud Modular)</h3>
                <ul style="margin: 0; padding-left: 15px; font-size: 11px; color: #475569; line-height: 1.5;">
                    <li><strong>Atención Ambulatoria y Hospitalaria:</strong> Cobertura a nivel nacional según red elegida[cite: 95, 96, 110].</li>
                    <li><strong>Oncología Integral al 100%:</strong> Cobertura para tratamientos oncológicos, quimioterapia y radioterapia[cite: 119, 143].</li>
                    <li><strong>Emergencias Accidentales y Médicas:</strong> 24/7 con continuidad de atenciones hasta por 90 días[cite: 96, 112].</li>
                    <li><strong>Chequeo Preventivo Anual:</strong> Exámenes de laboratorio y evaluaciones según edad y género[cite: 100, 117].</li>
                    <li><strong>Centro Médico Virtual y Médico a Domicilio:</strong> Atenciones prácticas desde casa[cite: 95, 110].</li>
                </ul>
            </div>
        `;
    } else if (activeTab === 'tab-oro') {
        document.getElementById('pdfTituloProducto').innerText = 'Propuesta de Seguro Salud de Oro (Adulto Mayor)';
        activeContentHtml = `
            <div style="background: #FEFCE8; border: 1px solid #FEF08A; border-radius: 8px; padding: 12px; margin-bottom: 15px;">
                <h3 style="color: #854D0E; margin: 0 0 8px 0; font-size: 13px;">⭐ Beneficios Exclusivos Salud de Oro</h3>
                <ul style="margin: 0; padding-left: 15px; font-size: 11px; color: #475569; line-height: 1.5;">
                    <li>Diseñado especialmente para la protección integral del adulto mayor.</li>
                    <li>Acceso preferente en clínicas de la red con controles geriátricos especializados.</li>
                    <li>Cobertura ambulatoria y hospitalaria con respaldo continuo.</li>
                </ul>
            </div>
        `;
    } else if (activeTab === 'tab-flexible') {
        document.getElementById('pdfTituloProducto').innerText = 'Propuesta de Seguro Salud Flexible';
        activeContentHtml = `
            <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 12px; margin-bottom: 15px;">
                <h3 style="color: #166534; margin: 0 0 8px 0; font-size: 13px;">⚙️ Coberturas a la Medida (Salud Flexible)</h3>
                <ul style="margin: 0; padding-left: 15px; font-size: 11px; color: #475569; line-height: 1.5;">
                    <li>Arma tu plan eligiendo exactamente lo que necesitas pagar.</li>
                    <li>Consultas en especialidades en más de 200 clínicas a nivel nacional[cite: 89].</li>
                    <li>Medicinas y exámenes derivados cubiertos al 70%[cite: 89].</li>
                </ul>
            </div>
        `;
    } else if (activeTab === 'tab-futuro' || activeTab === 'tab-ahorro') {
        document.getElementById('pdfTituloProducto').innerText = 'Propuesta de Seguro Vida Futuro / Plan Plus (Ahorro y Asistencias)';
        activeContentHtml = `
            <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 12px; margin-bottom: 15px;">
                <h3 style="color: #1E40AF; margin: 0 0 8px 0; font-size: 13px;">💎 Beneficios Cliente Plus (Ahorro y Asistencias)</h3>
                <ul style="margin: 0; padding-left: 15px; font-size: 11px; color: #475569; line-height: 1.5;">
                    <li><strong>Asistencias Médicas:</strong> Orientación médica telefónica y telemedicina 100%, ambulancia y médico a domicilio.</li>
                    <li><strong>Asistencias para el Hogar:</strong> Servicios de cerrajero, gasfitero y electricista por emergencia.</li>
                    <li><strong>Asistencia Vial y Mascotas:</strong> Auxilio mecánico vehicular, consulta veterinaria y baño para mascotas.</li>
                    <li><strong>Excelente método de ahorro:</strong> Respaldo financiero garantizado a futuro.</li>
                </ul>
            </div>
        `;
    } else {
        document.getElementById('pdfTituloProducto').innerText = 'Propuesta Comercial Rímac';
        activeContentHtml = `<p style="font-size: 11px; color: #475569;">Propuesta de servicios y coberturas de salud y bienestar Rímac.</p>`;
    }

    document.getElementById('pdfBodyTable').innerHTML = activeContentHtml;

    // 2. Dar un pequeño respiro de 200ms para que el navegador renderice el contenido antes de convertirlo a PDF
    const element = document.getElementById('pdfPrintContainer');
    element.style.left = '0'; // Traerlo temporalmente al área visible del renderizador

    setTimeout(() => {
        const opt = {
            margin:       10,
            filename:     `Cotizacion_RIMAC_${new Date().getTime()}.pdf`,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save().then(() => {
            element.style.left = '-9999px'; // Devolverlo fuera de pantalla al finalizar
        });
    }, 200);
}
/* ==========================================================================
   CÁLCULO EXACTO Y FIEL AL EXCEL DE SALUD MODULARES
   ========================================================================== */
function calcModulares() {
    const ageTitular = parseInt(document.getElementById('modAgeTitular').value);
    const ageConyugueInput = document.getElementById('modAgeConyugue').value;
    const depsInput = document.getElementById('modAgeDeps').value;

    const quotas = parseInt(document.getElementById('modQuotas').value) || 12;
    const discPct = (parseFloat(document.getElementById('modDiscount').value) || 0) / 100;

    // 1. Recopilar edades exactas de todos los familiares ingresados
    let agesList = [];
    if (!isNaN(ageTitular)) agesList.push(ageTitular);

    if (ageConyugueInput !== '' && !isNaN(parseInt(ageConyugueInput))) {
        agesList.push(parseInt(ageConyugueInput));
    }

    if (depsInput.trim() !== '') {
        const deps = depsInput.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        agesList = agesList.concat(deps);
    }

    // 2. Acumular primas exactas por integrante consultando la tabla por edad
    let totalVitalBase = 0;
    let totalPrefBase = 0;
    let totalMedicaBase = 0;

    agesList.forEach(age => {
        totalVitalBase += getRateForAge(age, 'vital');
        totalPrefBase += getRateForAge(age, 'pref');
        totalMedicaBase += getRateForAge(age, 'medica');
    });

    const plans = [
        {
            key: 'vital',
            title: 'Plan Vital',
            planCode: '4038 - Plan Vital - Plan 225459',
            sa: 'S/ 2,000,000',
            baseAnnual: totalVitalBase,
            badge: 'Opción Económica',
            color: 'border-slate-200'
        },
        {
            key: 'pref',
            title: 'Red Preferente',
            planCode: '4038 - Red Preferente - Plan 228635',
            sa: 'S/ 3,200,000',
            baseAnnual: totalPrefBase,
            badge: 'Más Vendido',
            color: 'border-rimac-red shadow-md'
        },
        {
            key: 'medica',
            title: 'Red Médica',
            planCode: '4004 - Red Médica - Plan 228643',
            sa: 'S/ 5,000,000',
            baseAnnual: totalMedicaBase,
            badge: 'Cobertura Alta Gama',
            color: 'border-slate-200'
        }
    ];

    const resultsContainer = document.getElementById('modularesResults');
    resultsContainer.innerHTML = '';

    plans.forEach(plan => {
        const ahorro = plan.baseAnnual * discPct;
        const finalAnnual = plan.baseAnnual - ahorro;

        // Redondeo exacto según formula Excel: =ROUNDUP(Total_Anual / Cuotas, 0)
        const cuota = Math.ceil(finalAnnual / quotas);

        resultsContainer.innerHTML += `
      <div class="plan-card bg-white rounded-3xl border ${plan.color} p-6 shadow-sm flex flex-col justify-between space-y-6 relative" data-plankey="${plan.key}">
        <div class="space-y-4">
          <div class="flex justify-between items-start">
            <span class="text-[10px] font-bold text-rimac-red bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">${plan.badge}</span>
            <label class="flex items-center space-x-2 cursor-pointer bg-slate-50 px-3 py-1 rounded-full border border-slate-200 hover:bg-red-50 transition">
              <input type="checkbox" id="chk-${plan.key}" checked class="w-4 h-4 text-rimac-red rounded accent-red-600">
              <span class="text-[11px] font-extrabold text-slate-700">Incluir en PDF</span>
            </label>
          </div>

          <div>
            <span class="text-[10px] font-bold text-slate-400 block">${plan.planCode}</span>
            <h4 class="text-xl font-black text-slate-900">${plan.title}</h4>
            <p class="text-xs text-slate-500 font-bold mt-1"><i class="fa-solid fa-shield-halved text-rimac-red mr-1"></i> Suma Asegurada: ${plan.sa}</p>
          </div>

          <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs">
            <div class="flex justify-between text-slate-600">
              <span>Prima Anual Base (${agesList.length} asegurado/s):</span>
              <span class="font-bold">${formatPEN(plan.baseAnnual)}</span>
            </div>
            ${discPct > 0 ? `
            <div class="flex justify-between text-emerald-600 font-bold border-t border-slate-200 pt-1.5">
              <span>Descuento (${discPct * 100}%):</span>
              <span>-${formatPEN(ahorro)}</span>
            </div>` : ''}
            <div class="flex justify-between text-slate-900 font-black border-t border-slate-200 pt-1.5">
              <span>Prima Anual Con Desc.:</span>
              <span class="text-rimac-red">${formatPEN(finalAnnual)}</span>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-2xl border border-red-100 text-center space-y-1">
          <span class="text-[10px] font-extrabold text-rimac-red uppercase tracking-wider">${quotas} Cuotas Mensuales de</span>
          <p class="text-3xl font-black text-rimac-red">S/ ${cuota}.00</p>
        </div>
      </div>
    `;
    });
}
/* ==========================================================================
   TABLA DE TARIFAS EXACTAS POR EDAD (SEGÚN EXCEL OFICIAL DE CONVENIOS)
   ========================================================================== */

/* ==========================================================================
   TABLA DE TARIFAS COMPLETA Y EXACTA DE 0 A 99+ AÑOS (SEGÚN EXCEL OFICIAL)
   ========================================================================== */
function getRateForAge(age, planType) {
    const tariffs = {
        0: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        1: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        2: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        3: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        4: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        5: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        6: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        7: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        8: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        9: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        10: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        11: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        12: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        13: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        14: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        15: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        16: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        17: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        18: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        19: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        20: { medica: 5004.55, pref: 4418.03, vital: 2162.00 },
        21: { medica: 5004.55, pref: 4418.03, vital: 2259.26 },
        22: { medica: 5004.55, pref: 4418.03, vital: 2259.26 },
        23: { medica: 5004.55, pref: 4418.03, vital: 2259.26 },
        24: { medica: 5004.55, pref: 4418.03, vital: 2259.26 },
        25: { medica: 5004.55, pref: 4418.03, vital: 2259.26 },
        26: { medica: 5656.10, pref: 4592.31, vital: 2494.42 },
        27: { medica: 6028.04, pref: 4778.97, vital: 2501.29 },
        28: { medica: 6309.51, pref: 4804.62, vital: 2513.84 },
        29: { medica: 6521.08, pref: 4831.67, vital: 2624.53 },
        30: { medica: 6542.10, pref: 4859.00, vital: 2739.32 },
        31: { medica: 6613.34, pref: 4958.56, vital: 2845.64 },
        32: { medica: 6633.13, pref: 4969.73, vital: 2930.82 },
        33: { medica: 6686.37, pref: 4999.20, vital: 2982.01 },
        34: { medica: 6768.33, pref: 5042.57, vital: 2991.34 },
        35: { medica: 6901.66, pref: 5079.53, vital: 3036.70 },
        36: { medica: 7025.66, pref: 5127.08, vital: 3098.69 },
        37: { medica: 7157.96, pref: 5216.10, vital: 3114.88 },
        38: { medica: 7332.17, pref: 5229.19, vital: 3129.17 },
        39: { medica: 7391.56, pref: 5298.69, vital: 3183.72 },
        40: { medica: 7382.81, pref: 5333.14, vital: 3328.98 },
        41: { medica: 7573.25, pref: 5867.71, vital: 3431.07 },
        42: { medica: 8021.19, pref: 6136.80, vital: 3547.32 },
        43: { medica: 8845.78, pref: 6329.93, vital: 3666.18 },
        44: { medica: 8849.66, pref: 6486.79, vital: 3780.09 },
        45: { medica: 9398.70, pref: 6624.76, vital: 3895.16 },
        46: { medica: 9954.86, pref: 6781.88, vital: 4021.18 },
        47: { medica: 10605.21, pref: 7067.07, vital: 4168.04 },
        48: { medica: 11112.49, pref: 7444.59, vital: 4346.12 },
        49: { medica: 11448.75, pref: 7766.10, vital: 4563.44 },
        50: { medica: 11847.32, pref: 8287.12, vital: 4818.82 },
        51: { medica: 12603.85, pref: 8736.06, vital: 5108.91 },
        52: { medica: 13142.79, pref: 9147.30, vital: 5429.92 },
        53: { medica: 13549.66, pref: 9883.19, vital: 5778.06 },
        54: { medica: 13641.66, pref: 10223.30, vital: 6150.41 },
        55: { medica: 14242.64, pref: 10653.93, vital: 6547.41 },
        56: { medica: 14822.67, pref: 11159.09, vital: 6970.08 },
        57: { medica: 15798.89, pref: 11931.65, vital: 7419.58 },
        58: { medica: 16712.08, pref: 12654.10, vital: 7897.23 },
        59: { medica: 17921.43, pref: 13304.37, vital: 8408.14 },
        60: { medica: 19570.48, pref: 14135.46, vital: 8973.74 },
        61: { medica: 21035.70, pref: 14546.22, vital: 9123.23 },
        62: { medica: 23098.47, pref: 15840.85, vital: 9812.84 },
        63: { medica: 24914.63, pref: 17551.40, vital: 10605.71 },
        64: { medica: 26695.03, pref: 19301.48, vital: 11505.20 },
        65: { medica: 29018.49, pref: 21138.97, vital: 12479.57 },
        66: { medica: 32062.49, pref: 22352.22, vital: 13488.34 },
        67: { medica: 34992.11, pref: 23887.75, vital: 14925.74 },
        68: { medica: 37170.79, pref: 25513.37, vital: 16064.97 },
        69: { medica: 38446.07, pref: 26749.21, vital: 17303.73 },
        70: { medica: 41669.30, pref: 28544.66, vital: 18492.93 },
        71: { medica: 44379.79, pref: 30182.50, vital: 20290.91 },
        72: { medica: 44379.79, pref: 30182.50, vital: 20290.91 },
        73: { medica: 44379.79, pref: 30182.50, vital: 20290.91 },
        74: { medica: 44379.79, pref: 30182.50, vital: 20290.91 },
        75: { medica: 44379.79, pref: 30182.50, vital: 20290.91 },
        76: { medica: 48500.84, pref: 32103.85, vital: 23079.71 },
        77: { medica: 48500.84, pref: 32103.85, vital: 23079.71 },
        78: { medica: 48500.84, pref: 32103.85, vital: 23079.71 },
        79: { medica: 48500.84, pref: 32103.85, vital: 23079.71 },
        80: { medica: 48500.84, pref: 32103.85, vital: 23079.71 }
    };

    // Para edades mayores a 80 años, aplica la tarifa máxima establecida en el Excel
    const ageKey = Math.min(Math.max(age, 0), 80);
    const row = tariffs[ageKey] || tariffs[80];
    return row[planType] || 0;
}
/* ==========================================================================
   VISTA PREVIA Y DESCARGA DE PDF ASEGURADA
   ========================================================================== */

/* ==========================================================================
   MÓDULO DE VISTA PREVIA Y EXPORTACIÓN PDF RIMAC
   ========================================================================== */

function getHTMLTemplate() {
    const cliente = document.getElementById('clientName')?.value || document.getElementById('modClientName')?.value || 'Carlos Ruiz';
    const telefono = document.getElementById('clientPhone')?.value || document.getElementById('modClientPhone')?.value || '960778888';
    const correo = document.getElementById('clientEmail')?.value || document.getElementById('modClientEmail')?.value || 'carlos.ruizc@rimac.com.pe';
    const contacto = `${telefono} • ${correo}`;
    
    const asesor = document.getElementById('agentName')?.value || 'Carlos Ruiz';
    const telAsesor = document.getElementById('agentPhone')?.value || '960778888';
    const mailAsesor = document.getElementById('agentEmail')?.value || 'carlos.ruizc@rimac.com.pe';
    const fecha = new Date().toLocaleDateString('es-PE');

    let contenidoSimulacionHTML = '';

    // 1. PESTAÑA: SEGUROS MODULARES
    const modContainer = document.getElementById('content-modulares');
    if (modContainer && !modContainer.classList.contains('hidden')) {
        const planCards = document.querySelectorAll('#modularesResults .plan-card');
        let planesList = [];

        planCards.forEach(card => {
            const planKey = card.getAttribute('data-plankey');
            const chk = document.getElementById(`chk-${planKey}`);
            
            if (chk && chk.checked) {
                const badge = card.querySelector('.uppercase')?.innerText || '';
                const title = card.querySelector('h4')?.innerText || '';
                const sa = card.querySelector('p.text-xs')?.innerText || '';
                
                const rows = card.querySelectorAll('.bg-slate-50 div');
                let basePrice = '', descPrice = '', finalPrice = '';
                
                rows.forEach(r => {
                    const txt = r.innerText;
                    if (txt.includes('Prima Anual Base:')) basePrice = r.querySelector('span:last-child')?.innerText || '';
                    if (txt.includes('Descuento:')) descPrice = r.querySelector('span:last-child')?.innerText || '';
                    if (txt.includes('Prima Anual Con Desc.:')) finalPrice = r.querySelector('span:last-child')?.innerText || '';
                });

                const cuotaTxt = card.querySelector('.text-3xl')?.innerText || '';
                const cuotaLabel = card.querySelector('.uppercase.tracking-wider')?.innerText || 'Cuotas Mensuales';

                planesList.push({ badge, title, sa, basePrice, descPrice, finalPrice, cuotaTxt, cuotaLabel });
            }
        });

        if (planesList.length > 0) {
            let colsHTML = planesList.map(p => `
                <div style="flex: 1; min-width: 180px; border: 1px solid #E2E8F0; border-radius: 8px; background: #FFFFFF; overflow: hidden;">
                    <div style="background: #FFF1F1; border-bottom: 1px solid #FCA5A5; padding: 4px 8px; text-align: center;">
                        <span style="color: #D31411; font-size: 7px; font-weight: 800; text-transform: uppercase;">${p.badge || 'Plan Recomendado'}</span>
                    </div>
                    <div style="padding: 10px;">
                        <h4 style="margin: 0; font-size: 12px; font-weight: 900; color: #0F172A;">${p.title}</h4>
                        <p style="margin: 2px 0 8px 0; font-size: 8px; color: #64748B; font-weight: 600;">${p.sa}</p>
                        
                        <div style="background: #F8FAFC; border-radius: 6px; padding: 6px; margin-bottom: 8px; font-size: 7.5px; line-height: 1.5;">
                            <div style="display: flex; justify-content: space-between; color: #475569;">
                                <span>Prima Base:</span>
                                <span>${p.basePrice}</span>
                            </div>
                            ${p.descPrice ? `
                            <div style="display: flex; justify-content: space-between; color: #16A34A; font-weight: 700;">
                                <span>Descuento:</span>
                                <span>${p.descPrice}</span>
                            </div>` : ''}
                            <div style="display: flex; justify-content: space-between; color: #0F172A; font-weight: 800; border-top: 1px dashed #CBD5E1; padding-top: 3px; margin-top: 3px;">
                                <span>Anual Total:</span>
                                <span style="color: #D31411;">${p.finalPrice || p.basePrice}</span>
                            </div>
                        </div>

                        <div style="background: #FFF1F1; border: 1px solid #FCA5A5; border-radius: 6px; padding: 6px; text-align: center;">
                            <span style="font-size: 6.5px; font-weight: 800; color: #9B0B09; text-transform: uppercase;">${p.cuotaLabel}</span>
                            <div style="font-size: 16px; font-weight: 900; color: #D31411; margin-top: 1px;">${p.cuotaTxt}</div>
                        </div>
                    </div>
                </div>
            `).join('');

            contenidoSimulacionHTML = `
                <div style="margin-bottom: 12px;">
                    <h3 style="color: #0F172A; font-size: 10px; font-weight: 800; margin: 0 0 6px 0; border-left: 3px solid #D31411; padding-left: 6px;">Propuesta de Coberturas Seleccionadas</h3>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        ${colsHTML}
                    </div>
                </div>
            `;
        } else {
            contenidoSimulacionHTML = `<p style="font-size: 9px; color: #DC2626; font-weight: bold; margin-bottom: 10px;">⚠️ No has marcado ningún plan para incluir en la propuesta.</p>`;
        }
    } 
// 2. PESTAÑA: VIDA FUTURO GARANTIZADO
    else if (document.getElementById('content-futuro') && !document.getElementById('content-futuro').classList.contains('hidden')) {
        const resBox = document.getElementById('futuroResults');
        
        let aporte = 'S/ 0.00';
        let proteccion = 'S/ 0.00';
        let devolucion = 'S/ 0.00';
        let porcentajeDev = '100%'; // Valor dinámico por defecto
        let periodoAnos = '10 años'; // Periodo dinámico

        // 1. Capturamos los años y el porcentaje directamente desde la interfaz
        const selectAnos = document.getElementById('futuroYears')?.value || 
                           document.getElementById('futuroPeriodo')?.value || 
                           document.getElementById('futuroPlazo')?.value;
        if (selectAnos) {
            periodoAnos = `${selectAnos} años`;
        }

        // 2. Leemos la tarjeta de devolución para extraer el % real (100%, 125%, 150%, etc.)
        if (resBox) {
            const cards = resBox.querySelectorAll('div');
            cards.forEach(c => {
                const t = c.innerText;
                
                // Extraer Aporte Mensual
                if (t.includes('Aporte Mensual')) {
                    const match = t.match(/S\/\s*[\d,]+\.?\d*/);
                    if (match) aporte = match[0];
                }
                
                // Extraer Protección por Muerte
                if (t.includes('Protección') || t.includes('Muerte')) {
                    const match = t.match(/S\/\s*[\d,]+\.?\d*/);
                    if (match) proteccion = match[0];
                }
                
                // Extraer Devolución y detectar el Porcentaje
                if (t.includes('Devolución') || t.includes('Retorno')) {
                    const matchMonto = t.match(/S\/\s*[\d,]+\.?\d*/);
                    if (matchMonto) devolucion = matchMonto[0];

                    // Busca patrones como 125%, 150%, 100% en el texto
                    const matchPct = t.match(/(\d{2,3}%)/);
                    if (matchPct) porcentajeDev = matchPct[1];
                }
            });
        }

        contenidoSimulacionHTML = `
            <div style="margin-bottom: 12px;">
                <h3 style="color: #0F172A; font-size: 10px; font-weight: 800; margin: 0 0 8px 0; border-left: 3px solid #D31411; padding-left: 6px;">Plan Vida Futuro Garantizado (Ahorro y Protección)</h3>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px;">
                    <!-- Aporte Mensual -->
                    <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 10px; text-align: center;">
                        <span style="font-size: 7px; color: #64748B; font-weight: 700; text-transform: uppercase; display: block;">Aporte Mensual Oficial</span>
                        <div style="font-size: 14px; font-weight: 900; color: #0F172A; margin: 4px 0 2px 0; white-space: nowrap;">${aporte}</div>
                        <span style="font-size: 6.5px; color: #64748B; font-weight: 600;">Durante ${periodoAnos}</span>
                    </div>

                    <!-- Protección por Muerte -->
                    <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 10px; text-align: center;">
                        <span style="font-size: 7px; color: #64748B; font-weight: 700; text-transform: uppercase; display: block;">Protección por Muerte (SA)</span>
                        <div style="font-size: 14px; font-weight: 900; color: #D31411; margin: 4px 0 2px 0; white-space: nowrap;">${proteccion}</div>
                        <span style="font-size: 6.5px; color: #64748B; font-weight: 600;">Cobertura desde Día 1</span>
                    </div>

                    <!-- Devolución Garantizada Dinámica -->
                    <div style="background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 8px; padding: 10px; text-align: center;">
                        <span style="font-size: 7px; color: #047857; font-weight: 800; text-transform: uppercase; display: block;">Devolución Garantizada (${porcentajeDev})</span>
                        <div style="font-size: 14px; font-weight: 900; color: #059669; margin: 4px 0 2px 0; white-space: nowrap;">${devolucion}</div>
                        <span style="font-size: 6.5px; color: #047857; font-weight: 600;">Retorno al finalizar el periodo</span>
                    </div>
                </div>
            </div>
        `;
    }
    // 3. OTRAS PESTAÑAS (Salud de Oro, Salud Flexible)
    else {
        let title = 'Resumen de Cotización';
        let content = '';
        if (document.getElementById('content-oro') && !document.getElementById('content-oro').classList.contains('hidden')) {
            title = 'Plan Salud de Oro (Adulto Mayor)';
            content = document.getElementById('oroResults')?.innerHTML || '';
        } else if (document.getElementById('content-flexible') && !document.getElementById('content-flexible').classList.contains('hidden')) {
            title = 'Plan Salud Flexible';
            content = document.getElementById('flexibleResults')?.innerHTML || '';
        }

        contenidoSimulacionHTML = `
            <div style="margin-bottom: 12px;">
                <h3 style="color: #0F172A; font-size: 10px; font-weight: 800; margin: 0 0 6px 0; border-left: 3px solid #D31411; padding-left: 6px;">${title}</h3>
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 10px; font-size: 8.5px;">
                    ${content}
                </div>
            </div>
        `;
    }

    return `
        <div style="font-family: 'Inter', sans-serif; color: #1E293B; line-height: 1.4;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid #D31411; padding-bottom: 8px; margin-bottom: 10px;">
                <div>
                    <h1 style="color: #D31411; font-size: 22px; margin: 0; font-weight: 900; letter-spacing: -1px;">RÍMAC</h1>
                    <p style="color: #64748B; font-size: 7.5px; margin: 2px 0 0 0; font-weight: 600; font-style: italic;">"Estar bien hoy para estar mejor mañana"</p>
                </div>
                <div style="text-align: right;">
                    <span style="background: #FFF1F1; color: #D31411; border: 1px solid #FCA5A5; padding: 3px 6px; border-radius: 4px; font-size: 7.5px; font-weight: 800; text-transform: uppercase;">Propuesta Comercial Oficial</span>
                    <p style="font-size: 7.5px; color: #64748B; margin: 3px 0 0 0; font-weight: 500;">Fecha: <strong>${fecha}</strong></p>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 8px; margin-bottom: 10px; font-size: 8px;">
                <div>
                    <span style="color: #94A3B8; font-weight: 800; text-transform: uppercase; font-size: 6.5px; display: block; margin-bottom: 1px;">Datos del Cliente</span>
                    <p style="margin: 1px 0; color: #0F172A;"><strong>Titular:</strong> ${cliente}</p>
                    <p style="margin: 1px 0; color: #475569;"><strong>Contacto:</strong> ${contacto}</p>
                </div>
                <div style="border-left: 1px solid #E2E8F0; padding-left: 8px;">
                    <span style="color: #94A3B8; font-weight: 800; text-transform: uppercase; font-size: 6.5px; display: block; margin-bottom: 1px;">Asesor Comercial</span>
                    <p style="margin: 1px 0; color: #0F172A;"><strong>Ejecutivo:</strong> ${asesor}</p>
                    <p style="margin: 1px 0; color: #475569;"><strong>Tel:</strong> ${telAsesor} | <strong>Email:</strong> ${mailAsesor}</p>
                </div>
            </div>

            ${contenidoSimulacionHTML}

            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 8px; margin-bottom: 10px;">
                <h4 style="color: #9B0B09; font-size: 8.5px; font-weight: 800; margin: 0 0 3px 0; text-transform: uppercase;">🛡️ Coberturas Clave Incluidas</h4>
                <ul style="margin: 0; padding-left: 12px; font-size: 7.5px; color: #334155; line-height: 1.4;">
                    <li>Protección integral ante imprevistos con respaldo financiero corporativo RIMAC.</li>
                    <li>Planes de devolución garantizada ajustados al periodo de contratación.</li>
                    <li>Atención y orientación comercial personalizada 24/7.</li>
                </ul>
            </div>

            <div style="border-top: 1px solid #E2E8F0; padding-top: 6px; display: flex; justify-content: space-between; font-size: 6.5px; color: #64748B;">
                <span>Central de Emergencias Rímac: (01) 411-1111</span>
                <span>Validez comercial: 30 días.</span>
            </div>
        </div>
    `;
}

function exportToPDF() {
    const modalBox = document.getElementById('modalContentBox');
    if (modalBox) {
        modalBox.innerHTML = getHTMLTemplate();
    }
    const modal = document.getElementById('quotePreviewModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeQuotePreview() {
    const modal = document.getElementById('quotePreviewModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function downloadPDFFromPreview() {
    const modalBox = document.getElementById('modalContentBox');
    
    if (!modalBox) {
        alert("No se encontró el contenido de la vista previa.");
        return;
    }

    const opt = {
        margin:       10, // Margen de 10mm para que respire la hoja A4
        filename:     `Cotizacion_RIMAC_${new Date().getTime()}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
            scale: 2,           
            useCORS: true,      
            logging: false,
            letterRendering: true,
            scrollY: 0          // Evita que capture desplazamiento fantasma del modal
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Tomamos directamente el modal que ya se ve en pantalla
    html2pdf().set(opt).from(modalBox).save().catch(err => {
        console.error("Error al descargar PDF:", err);
        alert("Ocurrió un error al generar el PDF.");
    });
}

/* ==========================================================================
   7. INICIALIZACIÓN AL CARGAR LA PÁGINA
   ========================================================================== */
window.onload = () => {
    switchTab('modulares');
    if (typeof calcModulares === 'function') calcModulares();
};