import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Terminal } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-primary">Available for Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-2"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Ananda Dwi Rahma</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-heading text-xl md:text-2xl text-secondary-foreground font-medium mb-6"
          >
            Senior Backend Software Engineer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 text-muted-foreground text-sm mb-8"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-primary" />
              Jakarta, Indonesia
            </span>
            <span className="flex items-center gap-1.5">
              <Terminal size={16} className="text-primary" />
              9+ Years Experience
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-10"
          >
            Backend Software Engineer with 9+ years of experience in financial services, 
            e-commerce, and MSME-focused products. Specialized in developing scalable fintech 
            and payment systems using Golang. Experienced in designing high-traffic APIs and 
            building reliable distributed backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="mailto:ananda.dwirahma96@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3.5 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/nandadwir/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card/50 text-foreground px-7 py-3.5 rounded-xl font-heading font-semibold hover:border-primary/50 transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Floating stats card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2"
        >
          <div className="glass rounded-2xl p-6 shadow-card space-y-6 w-64">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-gradient">9+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="h-px bg-border" />
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-gradient">5</div>
              <div className="text-sm text-muted-foreground mt-1">Companies</div>
            </div>
            <div className="h-px bg-border" />
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-gradient">50%</div>
              <div className="text-sm text-muted-foreground mt-1">Memory Reduction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
