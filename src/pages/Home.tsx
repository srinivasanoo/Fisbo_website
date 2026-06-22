import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Star, Users, Award } from 'lucide-react';
import { FiWifi, FiVideo, FiHardDrive, FiSettings, FiMonitor, FiLink } from 'react-icons/fi';
import heroColorful from '../assets/hero-colorful.jpg';
import ethernetCables from '../assets/ethernet-cables.jpg';
import fiberOptic from '../assets/fiber-optic.jpg';
import networkingEquipment from '../assets/networking-equipment.jpg';
import ScrollToTop from '@/components/ScrollToTop ';

// Categories data
const categories = [
  {
    name: "Internet Cables",
    icon: FiWifi,
    slug: "internet-cables",
    description: "High-speed fiber optic internet cables",
    color: "from-cyan-500 to-blue-500"
  },
  // {
  //   name: "CCTV Cables",
  //   icon: FiVideo,
  //   slug: "cctv-cables", 
  //   description: "Professional surveillance cable solutions",
  //   color: "from-purple-500 to-pink-500"
  // },
  {
    name: "Networking Tools",
    icon: FiHardDrive,
    slug: "networking-tools",
    description: "Essential networking and installation tools",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Fiber Accessories",
    icon: FiSettings,
    slug: "fiber-accessories",
    description: "Connectors, adapters, and accessories",
    color: "from-orange-500 to-red-500"
  },
 
  {
    name: "Patch Cords",
    icon: FiLink,
    slug: "patch-cords",
    description: "High-quality fiber optic patch cords",
    color: "from-pink-500 to-rose-500"
  }
];

// Data for features, stats, and testimonials
const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing fast internet speeds with our premium fiber optic solutions."
  },
  {
    icon: Shield,
    title: "Ultra Secure", 
    description: "Advanced security protocols ensure your data remains protected at all times."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support to keep your connections running smoothly."
  }
];

const stats = [
  { number: '15,000+', label: 'Happy Customers' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Technical Support' },
  { number: '20+', label: 'Years Experience' }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp Inc.',
    text: 'FIBSO transformed our network infrastructure. The speed and reliability are exceptional.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'DataFlow Systems',
    text: 'Outstanding service and support. Their fiber solutions exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    company: 'CloudSync Ltd.',
    text: 'Professional installation and top-quality equipment. Highly recommended!',
    rating: 5
  }
];

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen">
      <ScrollToTop/>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroColorful})` }}
        />
        <div className="" />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-8 z-10 text-center text-foreground px-4 max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="top-40 text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            FIBSO FIBER
            <span className="block  bg-clip-text bg-gradient-rainbow animate-rainbow-flow">
              SOLUTIONS
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-white "
          >
            Premium Fiber Optic Solutions for Modern Connectivity
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col  sm:flex-row gap-4 justify-center relative top-20"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='mb-5'>
              <Link 
                to="/products" 
                className="btn-fiber text-lg px-8 py-4 overflow-hidden"
              >
                Explore Products
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="  bg-white text-lg px-8 py-4 text-primary rounded hover:text-white hover:bg-blue-400 font-medium sm:top-10 "
              >
                Get Quote
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-20  bg-gradient-to-r from-blue-300 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Product Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of fiber optic solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Link
                  to={`/products?category=${category.slug}`}
                  className="block bg-card/80 backdrop-blur-lg p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 h-full shadow-lg hover:shadow-xl"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <category.icon className="text-3xl text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary group-hover:text-primary transition-colors">
                    <span className="text-sm font-medium">Explore Products</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-300 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose FIBSO?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our cutting-edge fiber optic technology
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, rotateY: 5 }}
                className="bg-card/60 backdrop-blur-lg p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-500 text-center group shadow-lg hover:shadow-2xl"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-[var(--glow-rainbow)]"
                >
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-300 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card/40 backdrop-blur-lg p-6 rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-300 to-white relative overflow-hidden">
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 bg-gradient-rainbow opacity-80"
          style={{
            backgroundSize: "300% 300%"
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl mb-8 text-foreground/90 max-w-2xl mx-auto"
          >
            Join thousands of satisfied customers who trust FIBSO for their fiber optic needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="bg-card text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-card/80 transition-all duration-300 text-lg shadow-lg backdrop-blur-sm border border-border/50"
              >
                Contact Us Today
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/products" 
                className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all duration-300 text-lg backdrop-blur-sm"
              >
                View Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;