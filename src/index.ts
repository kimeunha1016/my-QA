export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/회고") {
      return new Response('https://forms.gle/hjbQu7SYy7KJexpc6');  // 보내고 싶은 URL로 변경
    }

    return new Response('Not Found', { status: 404 });
  }
};
