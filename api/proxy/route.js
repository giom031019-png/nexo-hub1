export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");

    if (!url) {
        return new Response(JSON.stringify({ error: "Missing url" }), { status: 400 });
    }

    try {
        const response = await fetch(url);
        const text = await response.text();

        return new Response(text, {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: "Fetch failed" }), { status: 500 });
    }
}
