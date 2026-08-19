# Shafika Zulkefli MUA

Elegant single-page portfolio, catalogue and booking website for Shafika Zulkefli, a mobile makeup artist serving KL, Selangor, Shah Alam and Negeri Sembilan.

## Live site

Expected GitHub Pages URL:

`https://shukritobi.github.io/ShafikaZulkefli-Make-Up-Artist/`

GitHub Pages must be enabled once under **Settings → Pages → Source: GitHub Actions**. The included workflow then deploys every push to `main`.

## Public business details used

- Instagram: `@shafikazulkefli.mua`
- Threads: `@nrsshafika`
- WhatsApp booking: `https://wa.link/a35phw`
- Coverage: KL, Selangor, Shah Alam, Negeri Sembilan
- Travel: available
- Registration shown in Instagram bio: `JM1043360-K`
- Makeup class: RM80 at KLCC
- Camera Rental M10: RM45

Portfolio image assets were cropped from the Instagram profile screenshot supplied for this build. The site deliberately does not fabricate matched before/after pairs from different clients.

## Payment gateway

The checkout UX is already wired in `assets/app.js`. Add live merchant payment links here:

```js
paymentLinks: {
  'Makeup Class': 'https://your-live-payment-link.example',
  'Camera Rental M10': 'https://your-live-payment-link.example'
}
```

Until a merchant payment link is supplied, checkout hands the booking to Shafika's WhatsApp instead of displaying a fake successful payment.

For API-based Billplz, ToyyibPay, Herepay or another gateway, use a server-side endpoint or Cloudflare Worker so merchant secrets are never exposed in GitHub Pages JavaScript.
