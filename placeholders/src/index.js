// Placeholder until the real API and admin apps are deployed to these hostnames.
export default {
  async fetch(request, env) {
    const headers = { "X-Robots-Tag": "noindex, nofollow", "Cache-Control": "no-store" };
    if (env.ROLE === "api") {
      return new Response(
        JSON.stringify({ error: "service_unavailable", message: "The CartDistrict API is not live yet." }),
        { status: 503, headers: { ...headers, "Content-Type": "application/json" } }
      );
    }
    return new Response(
      "<!doctype html><meta charset=utf-8><meta name=viewport content='width=device-width,initial-scale=1'><title>CartDistrict Admin</title><body style='font:16px system-ui;margin:4rem auto;max-width:32rem;padding:0 1rem'><h1>CartDistrict Admin</h1><p>Not available yet.</p>",
      { status: 503, headers: { ...headers, "Content-Type": "text/html; charset=utf-8" } }
    );
  },
};
