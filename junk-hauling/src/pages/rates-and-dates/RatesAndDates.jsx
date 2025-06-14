import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ResidentialCard from "../../components/ResidentialCard/ResidentialCard"
import CommercialCard from "../../components/CommercialCard/CommercialCard"

const PRICING = {
  residential: {
    truckload: 443,
    appliance: 84,
    yardWaste: 295
  },
  commercial: {
    weeklyContract: 985,
    dumpsterRental: 1200
  }
}

const COMMERCIAL_SERVICES = [
  {
    title: "Construction Site Contracts",
    benefits: [
      "Daily debris removal schedules",
      "OSHA-compliant disposal",
      "Certified recycling reports"
    ]
  },
  {
    title: "Property Management Solutions",
    benefits: [
      "Turnover cleanouts 24hr response",
      "Emergency storm debris removal",
      "Tenant move-out specials"
    ]
  }
]

const RatesAndDates = () => {
  const navigate = useNavigate()
  const [showCommercial, setShowCommercial] = useState(false)

  return (
    <div className="rates-and-dates container-lg py-5">
      {/* Heading */}
      <h1 className="text-center mb-2 display-2 fw-bold heading-text">
        Rates and Dates
      </h1>
      <h5 className="text-center mb-4 display-5 heading-subtext">
        Spokane's trusted, family-owned junk hauling
      </h5>

      {/* Pricing Section */}
      <section className="pricing-section mb-5">
        <h2 className="text-center mb-4 display-4 fw-bold heading-text">
          Residential Pricing
        </h2>

        {/* Residential Pricing */}
        <div className="row">
          <div className="col-md-4">
            <ResidentialCard
              title="Full Truckload"
              price={PRICING.residential.truckload}
              oldPrice={450}
              description="Up to 2 tons - construction debris"
            />
          </div>
          <div className="col-md-4">
            <ResidentialCard
              title="Appliance Removal"
              price={PRICING.residential.appliance}
              oldPrice={85}
              description="Per item - fridge, washer, etc."
            />
          </div>
          <div className="col-md-4">
            <ResidentialCard
              title="Yard Waste"
              price={PRICING.residential.yardWaste}
              oldPrice={300}
              description="Brush, branches, leaves"
            />
          </div>
        </div>

        {/* Commercial Pricing Toggle */}
        <div className="text-center mb-4">
          <button 
            className="btn custom-blue-btn"
            onClick={() => setShowCommercial(!showCommercial)}
          >
            {showCommercial ? 'Hide' : 'Show'} Commercial Rates
          </button>
        </div>

        {/* Commercial Pricing */}
        {showCommercial && (
          <div className="row">
            <div className="col-md-6">
              <CommercialCard
                title="Weekly Contract"
                price={PRICING.commercial.weeklyContract}
                description="Bulk construction site rate"
              />
            </div>
            <div className="col-md-6">
              <CommercialCard
                title="Dumpster Rental"
                price={PRICING.commercial.dumpsterRental}
                description="20yd + 1.5% discount"
              />
            </div>

            {/* Commercial Services */}
            {COMMERCIAL_SERVICES.map((service, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <CommercialCard
                  title={service.title}
                  description={
                    <ul className="list-unstyled">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="mb-2">
                          <i className="bi bi-check2-circle text-success me-2"></i>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  }
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Booking CTA */}
      <section className="booking-cta text-center py-5 bg-light rounded-3">
        <h2 className="mb-4 heading-text">Ready to Clear Your Space?</h2>
        <button 
          className="btn custom-blue-btn btn-lg px-5"
          onClick={() => navigate('/book-appointment')}
        >
          <i className="bi bi-calendar-check me-2"></i>
          Schedule Free Estimate
        </button>
        <p className="text-muted mt-3 small">
          No credit card required - 100% Spokane-based team
        </p>
      </section>
    </div>
  )
}

export default RatesAndDates
