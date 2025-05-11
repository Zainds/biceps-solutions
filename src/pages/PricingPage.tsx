import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Button from '../components/ui/Button';
import { formatCurrency } from '../lib/utils';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for getting started',
      monthlyPrice: 29.99,
      yearlyPrice: 299.99,
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Free parking',
        'Basic fitness assessment',
        'Access to mobile app',
      ],
      notIncluded: [
        'Group classes',
        'Personal training sessions',
        'Nutrition consultation',
        'Sauna & spa access',
      ]
    },
    {
      name: 'Premium',
      description: 'Most popular choice',
      monthlyPrice: 49.99,
      yearlyPrice: 499.99,
      features: [
        'All Basic features',
        'Unlimited group classes',
        '1 personal training session/month',
        'Sauna & spa access',
        'Guest passes (2/month)',
        'Advanced fitness assessment',
        'Basic nutrition consultation',
      ],
      notIncluded: [
        'Unlimited personal training',
        'Priority class booking',
        'Personalized workout plans',
      ]
    
    },
    {
      name: 'Elite',
      description: 'For serious fitness enthusiasts',
      monthlyPrice: 89.99,
      yearlyPrice: 899.99,
      features: [
        'All Premium features',
        'Unlimited personal training',
        'Priority class booking',
        'Personalized workout plans',
        'Monthly nutrition consultation',
        'Recovery room access',
        'Exclusive member events',
        'Fitness gear discount',
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1920')" 
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Membership Plans</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Choose the perfect membership plan that fits your fitness goals and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-muted p-1 rounded-lg inline-flex">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'yearly'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly
                <span className="ml-1 text-xs text-primary">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-background rounded-lg shadow-lg overflow-hidden ${
                  plan.name === 'Premium' ? 'border-2 border-primary' : 'border border-border'
                }`}
              >
                {plan.name === 'Premium' && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                  <div className="mt-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        {formatCurrency(billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice)}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant={plan.name === 'Premium' ? 'primary' : 'outline'}
                    className="w-full mt-6"
                  >
                    Choose {plan.name}
                  </Button>
                </div>
                <div className="border-t p-8">
                  <h4 className="font-medium mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={20} className="text-primary flex-shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, index) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <X size={20} className="flex-shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Can I freeze my membership?</h3>
              <p className="text-muted-foreground">
                Yes, you can freeze your membership for up to 3 months per year with a valid reason.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is there a joining fee?</h3>
              <p className="text-muted-foreground">
                No, we don't charge any joining fees or hidden costs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-muted-foreground">
                Monthly memberships can be cancelled with 30 days notice. Yearly memberships are non-refundable.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer student discounts?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 10% discount for students with a valid student ID.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join Biceps Solutions today and transform your life with our state-of-the-art facilities and expert guidance.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-white/10 hover:text-white"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;