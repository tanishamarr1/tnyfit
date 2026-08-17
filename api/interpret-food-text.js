// =============================================================================
// TNY FIT — Función serverless de Vercel: interpretar comida por texto/voz
// USANDO OPENAI (ChatGPT) EN LUGAR DE GEMINI
// =============================================================================
// Recibe una frase libre en español (escrita o transcrita por voz, ej. "comí
// dos huevos y un pan") y usa OpenAI para separarla en alimentos individuales
// con su estimación nutricional.
//
// Configúrala en: Vercel Dashboard → tu proyecto → Settings →
// Environment Variables → Name: OPENAI_API_KEY
// =============================================================================

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Método no permitido.' });
        return;
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        res.status(500).json({ error: 'OPENAI_API_KEY no está configurada en Vercel.' });
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
        const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                response_format: { type: 'json_object' }
            })
        });

        if (!openaiRes.ok) {
            const errText = await openaiRes.text();
            console.error('OpenAI API error:', openaiRes.status, errText);
            res.status(502).json({ error: `La IA no pudo interpretar el texto (código ${openaiRes.status}).` });
            return;
        }

        const openaiData = await openaiRes.json();
        const rawText = openaiData?.choices?.[0]?.message?.content;
        
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