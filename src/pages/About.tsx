import ScrollToTop from '@/components/ScrollToTop ';
import { Users, Target, Award, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly pushing the boundaries of fiber optic technology to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Putting our customers first and building long-lasting partnerships based on trust and reliability.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in product quality, service delivery, and technical expertise.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Ensuring consistent performance and dependable support for all our fiber optic solutions.'
    }
  ];

  

  const milestones = [
    { year: '2009', event: 'FIBSO Fiber Solutions founded' },
    { year: '2012', event: 'First major enterprise contract secured' },
    { year: '2015', event: 'Expanded operations nationwide' },
    { year: '2018', event: 'Launched 24/7 support services' },
    { year: '2020', event: 'Reached 10,000+ satisfied customers' },
    { year: '2024', event: 'Industry leader in fiber solutions' }
  ];

  return (
    <>
    <ScrollToTop/>
      <div className="min-h-screen py-8 bg-gradient-to-r from-blue-300 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About FIBSO Fiber Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, we've been at the forefront of fiber optic technology, 
            delivering innovative solutions that connect businesses and communities worldwide.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class fiber optic solutions that enable seamless connectivity, 
                drive digital transformation, and empower businesses to reach their full potential 
                in an increasingly connected world.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in fiber optic infrastructure, creating a future where 
                lightning-fast, reliable connectivity is accessible to all, fostering innovation 
                and economic growth across industries.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-fiber-gradient rounded-full flex items-center justify-center mx-auto mb-4 fiber-glow group-hover:scale-110 transition-smooth">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-fiber-gradient rounded-xl p-12">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Work with FIBSO?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their fiber optic needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-smooth">
              Contact Us Today
            </a>
            <a href="/products" className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-smooth">
              View Our Products
            </a>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default About;