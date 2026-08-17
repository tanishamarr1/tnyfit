// =============================================================================
// TNY FIT — Función serverless de Vercel: reconocimiento de comida por foto
// =============================================================================
// Esta función corre en el servidor de Vercel, NUNCA en el navegador, así que
// la variable GEMINI_API_KEY nunca queda expuesta al público (a diferencia de
// DONATION_LINK en app.js, que sí es público porque no es sensible).
//
// Configúrala en: Vercel Dashboard → tu proyecto → Settings →
// Environment Variables → Name: GEMINI_API_KEY, Value: tu clave de
// aistudio.google.com/apikey
// =============================================================================

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Método no permitido.' });
        return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        res.status(500).json({ error: 'GEMINI_API_KEY no está configurada en Vercel.' });
        return;
    }

    const { imageBase64, mimeType } = req.body || {};
    if (!imageBase64) {
        res.status(400).json({ error: 'Falta la imagen.' });
        return;
    }

    const prompt = `Eres un nutricionista analizando una foto de comida. Identifica el alimento principal
y estima sus valores nutricionales para la porción visible en la imagen.
Responde ÚNICAMENTE con un objeto JSON válido, sin texto adicional, con este formato exacto:
{"name": "nombre del alimento en español", "estimated_grams": número, "kcal": número, "protein_g": número, "carbs_g": número, "fat_g": número, "confidence": "low" | "medium" | "high"}
Si no logras identificar comida en la imagen, responde: {"name": null}`;

    try {
        const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: prompt },
                            { inline_data: { mime_type: mimeType || 'image/jpeg', data: imageBase64 } }
                        ]
                    }],
                    generationConfig: { response_mime_type: 'application/json' }
                })
            }
        );

        if (!geminiRes.ok) {
            const errText = await geminiRes.text();
            console.error('Gemini API error:', geminiRes.status, errText);
            res.status(502).json({ error: `La IA no pudo procesar la imagen (código ${geminiRes.status}).` });
            return;
        }

        const geminiData = await geminiRes.json();
        const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) {
            res.status(502).json({ error: 'Respuesta vacía de la IA.' });
            return;
        }

        const parsed = JSON.parse(rawText);
        if (!parsed.name) {
            res.status(200).json({ name: null });
            return;
        }

        res.status(200).json({
            name: String(parsed.name),
            estimated_grams: Number(parsed.estimated_grams) || 100,
            kcal: Number(parsed.kcal) || 0,
            protein_g: Number(parsed.protein_g) || 0,
            carbs_g: Number(parsed.carbs_g) || 0,
            fat_g: Number(parsed.fat_g) || 0,
            confidence: parsed.confidence || 'medium'
        });
    } catch (err) {
        console.error('recognize-food error:', err);
        res.status(500).json({ error: 'Error interno analizando la imagen.' });
    }
};