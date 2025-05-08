This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Run the development server. This also runs our `shadcn build` command to generate registry files:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building a Registry

To build out a custom registry for prospects, make the following updates:

- [ ] Use [v0](https://v0.dev/chat) with existing screenshots or design tokens to generate updated `globals.css` styling and `tailwind.config.js` file
- [ ] Create new custom components in the `components` directory
- [ ] Update `components/internal-sidebar.tsx` to include the demo components
- [ ] Update `app/page.tsx` to showcase new components with "Open in v0" links
