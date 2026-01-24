import '../style/upgrade.css'

function Upgrade(){
    const plans = [
        {
          name: 'Basic',
          icon: '🚗',
          price: 0,
          period: 'Free forever',
          features: [
            'Standard rides',
            'Basic support',
            'Standard wait times',
            'Regular vehicles',
          ],
          popular: false,
          buttonText: 'Current Plan',
          buttonStyle: 'outline',
        },
        {
          name: 'Premium',
          icon: '🚙',
          price: 9.99,
          period: '/month',
          features: [
            'Priority pickup',
            '24/7 Priority support',
            'Reduced wait times',
            'Premium vehicles',
            '10% off all rides',
            'Free cancellations',
          ],
          popular: true,
          buttonText: 'Upgrade Now',
          buttonStyle: 'primary',
        },
        {
          name: 'Business',
          icon: '🚘',
          price: 29.99,
          period: '/month',
          features: [
            'Everything in Premium',
            'Dedicated account manager',
            'Corporate billing',
            'Expense reports',
            '20% off all rides',
            'Airport lounge access',
          ],
          popular: false,
          buttonText: 'Contact Sales',
          buttonStyle: 'outline',
        },
      ];
    return(
        <div className="Upgrade">
              <div className="upgrade-header">
               <div className="upgrade-badge">
          ✨ Premium Plans
        </div>
        <h1 className="upgrade-title">Choose Your Plan</h1>
        <p className="upgrade-subtitle">
          Unlock exclusive features and save more on every ride
        </p>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <span className="popular-badge">Most Popular</span>}
            
            <div className="pricing-header">
              <div className="pricing-icon">{plan.icon}</div>
              <h3 className="pricing-name">{plan.name}</h3>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
            </div>

            <ul className="pricing-features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>

            <button className={`pricing-btn pricing-btn-${plan.buttonStyle}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

        </div>
    );
}
export default Upgrade;