// =============================================================================
// TNY FIT — Función serverless de Vercel: interpretar comida por texto/voz
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

    const { text } = req.body || {};
    if (!text || !text.trim()) {
        res.status(400).json({ error: 'Falta el texto de la comida.' });
        return;
    }

    const prompt = `Eres un nutricionista. El usuario describe en español lo que comió.

Frase: "${text.trim()}"

Descompón en alimentos individuales y estima nutrientes.

Responde SOLO con este JSON exacto, sin explicaciones:
[{"name": "alimento en español", "estimated_grams": número, "kcal": número, "protein_g": número, "carbs_g": número, "fat_g": número}]

Si no hay alimento, responde: []`;

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
                        content: prompt
                    }
                ]
            })
        });

        if (!claudeRes.ok) {
            const errText = await claudeRes.text();
            console.error('Claude API error:', claudeRes.status, errText);
            res.status(502).json({ error: `La IA no pudo interpretar el texto (código ${claudeRes.status}).` });
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
            const jsonMatch = rawText.match(/\[\s*{[\s\S]*?}\s*\]/);
            if (jsonMatch) {
                try {
                    parsed = JSON.parse(jsonMatch[0]);
                } catch (e2) {
                    parsed = [];
                }
            } else {
                parsed = [];
            }
        }

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