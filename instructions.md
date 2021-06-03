## The package has been installed & configured successfully

Stripe configuration is stored in `config/stripe.ts` file and relies on following environment variables:

**Open the `env.ts` file and paste the following code inside the `Env.rules` object.**

```ts
STRIPE_SECRET_KEY: Env.schema.string(),
STRIPE_API_VERSION: Env.schema.string()
```

Then don't forget to add these variables to your `.env` and `.env.sample` files.