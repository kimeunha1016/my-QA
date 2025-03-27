export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/slack") {
      // Slack 명령어 파라미터 확인
      const reason = new URLSearchParams(url.search).get('reason'); // reason 파라미터 추출

      if (reason) {
        // reason이 있으면 Slack에서 전송할 메시지 구성
        return new Response(`회고 이유: ${reason}`, {
          status: 200,
          headers: { "Content-Type": "text/plain" },
        });
      } else {
        // reason이 없으면 오류 메시지 반환
        return new Response("회고 이유가 필요합니다.", {
          status: 400,
          headers: { "Content-Type": "text/plain" },
        });
      }
    }

    return new Response("Not Found", { status: 404 });
  },
};
