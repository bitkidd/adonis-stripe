/*
 * @bitkidd/adonis-imgix
 *
 * (c) Chirill Ceban <cc@bitkidd.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare module '@ioc:Adonis/Addons/Stripe' {
  import Stripe from 'stripe'

  interface StripeOptions extends Omit<Stripe.StripeConfig, 'apiVersion'> {
    apiVersion: string | null
  }

  export interface StripeConfig {
    secretKey: string
    options: StripeOptions
  }

  const stripe: Stripe

  export default stripe
}
