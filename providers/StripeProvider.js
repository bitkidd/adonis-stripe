'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const Stripe = require('stripe')

class StripeProvider extends ServiceProvider {
  register () {
    this.app.singleton('Adonis/Addons/Stripe', (app) => {
      const config = app.use('Adonis/Src/Env').get('STRIPE_KEY')
      const stripeInstance = new Stripe(config)

      return stripeInstance
    })

    this.app.alias('Adonis/Addons/Stripe', 'Stripe')
  }
}

module.exports = StripeProvider
