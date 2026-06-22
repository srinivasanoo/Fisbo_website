import ScrollToTop from '@/components/ScrollToTop ';
import { Shield, Zap, Users, Award, Clock, Wrench, Globe, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Zap,
      title: 'Lightning-Fast Performance',
      description: 'Experience speeds up to 10Gbps with our cutting-edge fiber optic technology.',
      details: [
        'Ultra-low latency connections',
        'Consistent high-speed performance',
        'Future-proof infrastructure',
        'Symmetric upload/download speeds'
      ]
    },
    {
      icon: Shield,
      title: 'Unmatched Reliability',
      description: '99.9% uptime guarantee backed by redundant systems and 24/7 monitoring.',
      details: [
        '99.9% uptime SLA',
        'Redundant network architecture',
        'Proactive monitoring systems',
        'Rapid issue resolution'
      ]
    },
    {
      icon: Users,
      title: 'Expert Support Team',
      description: 'Dedicated professionals available around the clock to assist you.',
      details: [
        '24/7 technical support',
        'Certified fiber optic technicians',
        'Personalized account management',
        'Multilingual support available'
      ]
    },
    {
      icon: Award,
      title: 'Industry-Leading Quality',
      description: 'Premium components and rigorous testing ensure superior performance.',
      details: [
        'Premium-grade components',
        'Rigorous quality testing',
        'International certifications',
        'Continuous quality improvement'
      ]
    },
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Expert installation and setup by certified technicians.',
      details: [
        'Certified installation teams',
        'Custom design solutions',
        'Minimal downtime during setup',
        'Post-installation testing'
      ]
    },
    {
      icon: Globe,
      title: 'Nationwide Coverage',
      description: 'Extensive network infrastructure spanning across the country.',
      details: [
        'Nationwide service area',
        'Strategic partner locations',
        'Rapid deployment capabilities',
        'Local presence, global reach'
      ]
    }
  ];

  const comparisons = [
    {
      feature: 'Network Speed',
      fibso: 'Up to 10 Gbps',
      competitors: 'Up to 1 Gbps',
      advantage: true
    },
    {
      feature: 'Uptime Guarantee',
      fibso: '99.9%',
      competitors: '99.5%',
      advantage: true
    },
    {
      feature: 'Support Availability',
      fibso: '24/7/365',
      competitors: 'Business Hours Only',
      advantage: true
    },
    {
      feature: 'Installation Time',
      fibso: '2-3 Business Days',
      competitors: '1-2 Weeks',
      advantage: true
    },
    {
      feature: 'Price Transparency',
      fibso: 'No Hidden Fees',
      competitors: 'Additional Charges',
      advantage: true
    },
    {
      feature: 'Contract Flexibility',
      fibso: 'Flexible Terms',
      competitors: 'Long-term Lock-in',
      advantage: true
    }
  ];

  const testimonials = [
    {
      name: 'David Wilson',
      company: 'TechFlow Corporation',
      role: 'IT Director',
      quote: 'FIBSO transformed our network infrastructure. The speed and reliability are exceptional, and their support team is incredibly responsive.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'CloudSync Solutions',
      role: 'CTO',
      quote: 'We\'ve worked with several providers, but FIBSO stands out for their professionalism and technical expertise. Highly recommended!',
      rating: 5
    },
    {
      name: 'James Thompson',
      company: 'DataStream Industries',
      role: 'Network Manager',
      quote: 'The installation was seamless, and the performance improvements were immediate. FIBSO delivers on their promises.',
      rating: 5
    }
  ];

  const stats = [
    { number: '15+', label: 'Years of Experience', icon: Clock },
    { number: '10,000+', label: 'Satisfied Customers', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: TrendingUp },
    { number: '24/7', label: 'Technical Support', icon: Shield }
  ];

  return (
    <div className="min-h-screen py-8 bg-gradient-to-r from-blue-300 to-white">
      <ScrollToTop/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose FIBSO?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what sets us apart in the fiber optic industry and why thousands 
            of businesses trust FIBSO for their connectivity needs.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-blue-300 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Key Advantages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The reasons why FIBSO is the preferred choice for fiber optic solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-smooth">
                <div className="w-12 h-12 bg-fiber-gradient rounded-lg flex items-center justify-center mb-4 fiber-glow">
                  <advantage.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground mb-4">{advantage.description}</p>
                <ul className="space-y-2">
                  {advantage.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">FIBSO vs. Competitors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we compare to other fiber optic providers in the market.
            </p>
          </div>
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-400">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary">FIBSO</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">Competitors</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">
                        {comparison.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                          ✓ {comparison.fibso}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                          {comparison.competitors}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach that ensures successful fiber optic implementations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Free assessment of your needs' },
              { step: '02', title: 'Design', desc: 'Custom solution planning' },
              { step: '03', title: 'Installation', desc: 'Professional setup & testing' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance & monitoring' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-fiber-gradient rounded-full flex items-center justify-center mx-auto mb-4 fiber-glow">
                  <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-accent/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Experience the FIBSO Difference
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover why FIBSO is the leading 
            choice for fiber optic solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-fiber">
              Get Your Free Consultation
            </a>
            <a href="/products" className="btn-fiber-outline">
              Explore Our Solutions
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyChooseUs;