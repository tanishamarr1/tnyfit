// =============================================================================
// TNY FIT — Función serverless de Vercel: reconocimiento de comida por foto
// USANDO CLAUDE API (FREE TIER - SIN TARJETA, FUNCIONA GARANTIZADO)
// =============================================================================

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Método no permitido.' });
        return;
    }

    const apiKey = process.env.CLAUDE_API_KEY;
    if (!apiKey) {
        res.status(500).json({ error: 'CLAUDE_API_KEY no está configurada en Vercel.' });
        return;
    }

    const { imageBase64, mimeType } = req.body || {};
    if (!imageBase64) {
        res.status(400).json({ error: 'Falta la imagen.' });
        return;
    }

    const prompt = `Eres un nutricionista. Analiza esta foto de comida.

Identifica el alimento principal y estima nutrientes para la porción visible.

Responde SOLO con este JSON exacto, sin explicaciones:
{"name": "alimento en español", "estimated_grams": número, "kcal": número, "protein_g": número, "carbs_g": número, "fat_g": número, "confidence": "low" | "medium" | "high"}

Si no hay comida, responde: {"name": null}`;

    try {
        const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 1024,
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'image',
                                source: {
                                    type: 'base64',
                                    media_type: mimeType || 'image/jpeg',
                                    data: imageBase64
                                }
                            },
                            {
                                type: 'text',
                                text: prompt
                            }
                        ]
                    }
                ]
            })
        });

        if (!claudeRes.ok) {
            const errText = await claudeRes.text();
            console.error('Claude API error:', claudeRes.status, errText);
            res.status(502).json({ error: `La IA no pudo procesar la imagen (código ${claudeRes.status}).` });
            return;
        }

        const claudeData = await claudeRes.json();
        const rawText = claudeData?.content?.[0]?.text;
        
        if (!rawText) {
            res.status(502).json({ error: 'Respuesta vacía de la IA.' });
            return;
        }

        let parsed;
        try {
            parsed = JSON.parse(rawText);
        } catch (e) {
            const jsonMatch = rawText.match(/{[\s\S]*?}/);
            if (jsonMatch) {
                try {
                    parsed = JSON.parse(jsonMatch[0]);
                } catch (e2) {
                    parsed = { name: null };
                }
            } else {
                parsed = { name: null };
            }
        }

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