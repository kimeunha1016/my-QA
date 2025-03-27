export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // `/slack` 경로 처리
    if (url.pathname === "/slack") {
      return new Response("Slack 요청이 정상적으로 처리되었습니다!", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    }

    // 다른 모든 요청은 404 반환
    return new Response("Not Found", { status: 404 });
  },
};

