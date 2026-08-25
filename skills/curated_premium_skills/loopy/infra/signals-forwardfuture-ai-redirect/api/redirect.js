export default function handler(request, response) {
  const incomingUrl = new URL(request.url, `https://${request.headers.host}`);
  const targetUrl = new URL(incomingUrl.pathname, "https://signals.forwardfuture.com");
  targetUrl.search = incomingUrl.search;

  response.statusCode = 308;
  response.setHeader("Location", targetUrl.toString());
  response.end();
}
