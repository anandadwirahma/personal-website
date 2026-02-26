import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Terminal, User } from "lucide-react";
import personalPhoto from "../assets/personal-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 max-w-2xl">
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
              Backend Software Engineer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 text-muted-foreground text-sm mb-8"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-primary" />
                Malang, Indonesia
              </span>
              <span className="flex items-center gap-1.5">
                <Terminal size={16} className="text-primary" />
                7+ Years Experience
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-10"
            >
              Backend Software Engineer with 7+ years of experience in financial services,
              e-commerce, and MSME-focused products. Experienced in building scalable fintech and payment systems using Golang.
              Passionate about software development and continuously exploring AI to develop effective and scalable solutions.
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
                className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-7 py-3.5 rounded-xl font-heading font-semibold hover:border-primary/50 transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Profile photo placeholder */}
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-primary/20 overflow-hidden bg-muted flex items-center justify-center shadow-card">
                <img
                  src={personalPhoto}
                  alt="Ananda Dwi Rahma"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/10 scale-110" />
            </div>

            {/* Stats card */}
            <div className="glass rounded-2xl p-6 shadow-card space-y-4 w-64">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-gradient">7+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="h-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-gradient">5</div>
                <div className="text-sm text-muted-foreground mt-1">Companies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
