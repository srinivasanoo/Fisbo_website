import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gradient-to-t from-blue-600 via-blue-50 to-white border-t border-border text-foreground relative overflow-hidden"
    >
      {/* Optional background glow animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-5"
          >
            <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-fiber-gradient rounded-lg flex items-center justify-center fiber-glow">
                <div className="w-7 h-7 bg-primary-foreground rounded-full opacity-90"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary tracking-wide">FIBSO</span>
                <span className="text-xs text-muted-foreground -mt-1">FIBER SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We deliver high-quality fiber optic solutions for businesses and telecommunications.
              Connecting the world with fast, reliable, and secure networks.
            </p>
            <div className="flex space-x-4 mt-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Other Columns (Quick Links, Products, Contact) */}
          {([['Quick Links', ['Home', 'Products', 'About Us', 'Why Choose Us', 'Contact']],
            ['Products', ['Fiber Optic Cables', 'Network Equipment', 'Installation Services', 'Maintenance & Support']]
          ]as [string, string[]][]).map(([title, items], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-3 text-sm">
                {items?.map((item: string, i: number) => (
                  <li key={i}>
                    <Link
                      to="/"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">info@fibsosolutions.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">
                  123 Fiber Optic Drive<br />Tech Valley, CA 94043
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="border-t border-border mt-10 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 FIBSO Fiber Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <Link
                  key={i}
                  to="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
