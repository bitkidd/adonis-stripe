## Registering provider

Make sure to register the provider inside `start/app.js` file.

```js
const providers = [
  '@adonisjs/drive/providers/StripeProvider'
]
```

That's all! Now you can use the provider by pulling it from IoC container

```js
const Stripe = use('Stripe')

const customer = await Stripe.customers.create(
  { email: 'customer@example.com' }
);

```

## Env variables

The `Stripe` driver relies on sinle Env variable: `STRIPE_KEY=`.
It can be eather test or production, depending on your Stripe Dashboard configurations.
