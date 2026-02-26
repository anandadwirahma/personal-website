import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Interested in working <span className="text-gradient">together</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              I'm currently open to new opportunities. Let's build something amazing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:ananda.dwirahma96@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity shadow-glow"
              >
                <Mail size={18} />
                Get In Touch
                <ArrowRight size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nandadwir/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-card/50 text-foreground px-8 py-4 rounded-xl font-heading font-semibold hover:border-primary/50 transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
