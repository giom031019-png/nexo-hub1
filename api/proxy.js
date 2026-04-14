export default async function handler(req, res) {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: "Missing url" });
    }

    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        });

        const text = await response.text();

        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.status(200).send(text);
    } catch (err) {
        return res.status(500).json({ error: "Fetch failed" });
    }
}
