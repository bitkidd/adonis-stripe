# Adonis Stripe
> adonis, stripe

[![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

This service provider makes it easier to integrate and to work with Stripe official library.
It is compatible with `Adonis Framework v5.x.` and `Adonis Framework v4.x.` via legacy tag.

It is built on top of [stripe-node](https://github.com/stripe/stripe-node) and proxies all the methods keeping them 100% original. So you can follow official Stripe documentation.

**Package will follow `stripe-node` versioning to keep you in sync**

## Installation

### To install package for `Adonis v5.x` run:
```
npm install @bitkidd/adonis-stripe
# or
yarn add @bitkidd/adonis-stripe
```

As the package has been installed, you have to configure it by running a command:
```
node ace configure @bitkidd/adonis-stripe
```

Then open the `env.ts` file and paste the following code inside the `Env.rules` object.

```ts
STRIPE_SECRET_KEY: Env.schema.string(),
STRIPE_API_VERSION: Env.schema.string()
```

And don't forget to add these variables to your `.env` and `.env.sample` files.

### To install package for `Adonis v4.x` run:
```
npm install @bitkidd/adonis-stripe@legacy
# or
yarn add @bitkidd/adonis-stripe@legacy
```

And then follow the [instructions](https://github.com/bitkidd/adonis-stripe/blob/legacy/instructions.md).

## Usage

```ts
import Stripe from '@ioc:Adonis/Addons/Stripe'

public async signup ({ response, request }) {
  
  ...

  const customer = await Stripe.customers.create({
    email: user.email
  });

  ...
}
```

[npm-image]: https://img.shields.io/npm/v/@bitkidd/adonis-stripe.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@bitkidd/adonis-stripe "npm"

[license-image]: https://img.shields.io/npm/l/@bitkidd/adonis-stripe?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
