// =============================================================================
// TNY FIT — Función serverless de Vercel: reconocimiento de comida por foto
// USANDO OPENAI VISION (ChatGPT) EN LUGAR DE GEMINI
// =============================================================================
// Esta función corre en el servidor de Vercel, así que la variable
// OPENAI_API_KEY nunca queda expuesta al público.
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
                        content: [
                            {
                                type: 'text',
                                text: prompt
                            },
                            {
                                type: 'image_url',
                                image_url: {
                                    url: `data:${mimeType || 'image/jpeg'};base64,${imageBase64}`
                                }
                            }
                        ]
                    }
                ],
                temperature: 0.7,
                response_format: { type: 'json_object' }
            })
        });

        if (!openaiRes.ok) {
            const errText = await openaiRes.text();
            console.error('OpenAI API error:', openaiRes.status, errText);
            res.status(502).json({ error: `La IA no pudo procesar la imagen (código ${openaiRes.status}).` });
            return;
        }

        const openaiData = await openaiRes.json();
        const rawText = openaiData?.choices?.[0]?.message?.content;
        
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