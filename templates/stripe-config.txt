/*
 * @bitkidd/adonis-stripe
 *
 * (c) Chirill Ceban <cc@bitkidd.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Env from '@ioc:Adonis/Core/Env'
import { StripeConfig } from '@ioc:Adonis/Addons/Stripe'

// Stripe config
export const stripe: StripeConfig = {
  secretKey: Env.get('STRIPE_SECRET_KEY'),

  options: {
    apiVersion: Env.get('STRIPE_API_VERSION'),
  },
}
