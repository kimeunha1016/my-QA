export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/slack") {
      const webhookURL = "https://hooks.slack.com/services/your-webhook-url"; // 슬랙 웹훅 URL 입력
      const payload = { text: "슬랙 알림 테스트 메시지" };

      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      return new Response("Slack 메시지 전송 완료!", { status: 200 });
    }
    return new Response("Hello from Cloudflare Workers!");
  }
};
