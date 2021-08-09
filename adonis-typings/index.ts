/*
 * @bitkidd/adonis-stripe
 *
 * (c) Chirill Ceban <cc@bitkidd.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare module '@ioc:Adonis/Addons/Stripe' {
  import { default as StripeType } from 'stripe'

  interface StripeOptions extends Omit<StripeType.StripeConfig, 'apiVersion'> {
    apiVersion: string | null
  }

  export interface StripeConfig {
    secretKey: string
    options: StripeOptions
  }

  export import StripeContract = StripeType

  const Stripe: StripeType

  export default Stripe
}
