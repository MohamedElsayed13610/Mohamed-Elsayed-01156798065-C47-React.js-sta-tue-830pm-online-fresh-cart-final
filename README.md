# FreshCart Assignment

A complete React + Vite e-commerce assignment using the public Route E-commerce API.

## Features

- Responsive modern FreshCart-inspired UI
- Register / Login / Logout
- Forgot password / reset-code / reset password flow
- Product listing with search, sorting and category/brand filters
- Product details
- Categories and brands pages
- Wishlist (protected)
- Cart with add/remove/update/clear (protected)
- Checkout with cash or online payment (protected)
- Order history and payment status (protected)
- Pagination for the product catalog
- React Query caching and invalidation
- Axios API layer with auth-token interceptor
- Formik + Yup validation
- Toast notifications, loading and empty states
- Vercel SPA rewrite included

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## API

Base URL: `https://ecommerce.routemisr.com/api/v1`

The app stores the API JWT in `localStorage` under `freshcart_token`.

Online checkout redirects to the payment provider and returns to `/orders`. The orders page reads the latest status from the API; do not treat the redirect alone as proof of payment.

## Assignment notes

The layout is inspired by the FreshCart demo. The referenced Figma file was not accessible for a pixel-by-pixel review, so compare the final screens with the design before submission. Build verification does not replace a full checkout test with an account and payment sandbox.
