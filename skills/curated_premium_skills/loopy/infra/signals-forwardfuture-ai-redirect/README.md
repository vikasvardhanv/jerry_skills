# signals.forwardfuture.ai redirect

Redirect-only Vercel project for `signals.forwardfuture.ai`.

It permanently redirects every path to the same path on
`https://signals.forwardfuture.com`.

## Deploy

```bash
npx vercel deploy --prod --yes --scope forward-future
```

The Vercel project is `forward-future/signals-forwardfuture-ai-redirect`.
The DNS record is `signals.forwardfuture.ai A 76.76.21.21` in Vercel DNS.
