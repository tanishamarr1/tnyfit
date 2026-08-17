// =============================================================================
// TNY FIT — Función serverless de Vercel: interpretar comida por texto/voz
// USANDO GOOGLE GEMINI 1.5-FLASH (GRATIS - 15,000 requests/mes)
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

    const { text } = req.body || {};
    if (!text || !text.trim()) {
        res.status(400).json({ error: 'Falta el texto de la comida.' });
        return;
    }

    const prompt = `Eres un nutricionista. El usuario describe en español, de forma libre, lo que comió
(puede ser texto escrito o una transcripción de voz, así que puede tener errores de dictado).
Descompón la frase en cada alimento individual mencionado y estima sus valores nutricionales.

Frase del usuario: "${text.trim()}"

Responde ÚNICAMENTE con un array JSON válido, sin texto adicional, con este formato exacto:
[{"name": "nombre del alimento en español", "estimated_grams": número, "kcal": número, "protein_g": número, "carbs_g": número, "fat_g": número}]
Si la frase menciona una cantidad (ej. "dos huevos", "una taza de arroz"), úsala para calcular estimated_grams.
Si no logras identificar ningún alimento, responde: []`;

    try {
        const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { response_mime_type: 'application/json' }
                })
            }
        );

        if (!geminiRes.ok) {
            const errText = await geminiRes.text();
            console.error('Gemini API error:', geminiRes.status, errText);
            res.status(502).json({ error: `La IA no pudo interpretar el texto (código ${geminiRes.status}).` });
            return;
        }

        const geminiData = await geminiRes.json();
        const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) {
            res.status(502).json({ error: 'Respuesta vacía de la IA.' });
            return;
        }

        const parsed = JSON.parse(rawText);
        const items = Array.isArray(parsed) ? parsed : [];

        res.status(200).json({
            items: items.map(item => ({
                name: String(item.name || 'Alimento'),
                estimated_grams: Number(item.estimated_grams) || 100,
                kcal: Number(item.kcal) || 0,
                protein_g: Number(item.protein_g) || 0,
                carbs_g: Number(item.carbs_g) || 0,
                fat_g: Number(item.fat_g) || 0
            }))
        });
    } catch (err) {
        console.error('interpret-food-text error:', err);
        res.status(500).json({ error: 'Error interno interpretando el texto.' });
    }
};