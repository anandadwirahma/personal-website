import { motion } from "framer-motion";
import { Briefcase, CheckCircle, ExternalLink, Globe } from "lucide-react";

const experiences = [
  {
    company: "PT. Digital Daya Teknologi",
    url: "https://ddt.id/",
    role: "Senior Software Engineer, Backend",
    period: "Nov 2022 - Present",
    location: "Jakarta, Indonesia (Hybrid) 🇮🇩",
    description: "Built cross-border QR payment systems, virtual account payment systems, and bill payment platforms.",
    achievements: [
      "Expanded payment coverage to 5 countries via cross-border QR payment system",
      "Reduced system memory usage by 50%",
      "Reduced infrastructure costs through scalable adapter design",
    ],
    tech: ["Golang", "AngularJS", "PostgreSQL", "Redis", "Kafka", "Datadog", "REST API", "Third-party Integration"],
  },
  {
    company: "LinkAja",
    url: "https://linkaja.id/",
    role: "Senior Software Engineer, Backend",
    period: "Jan 2021 - Oct 2022",
    location: "Jakarta, Indonesia (Remote) 🇮🇩",
    description: "Built P2P lending platform and Open API platform compliant with SNAP standards.",
    achievements: [
      "Enabled financing access for farmers through digital P2P lending",
      "Reduced partner onboarding time by ~40% with SNAP-compliant APIs",
      "Delivered a stable P2P lending platform",
    ],
    tech: ["Golang", "PostgreSQL", "Redis", "Kafka", "REST API", "gRPC", "SNAP", "Third-party Integration"],
  },
  {
    company: "Tokopedia",
    url: "https://www.tokopedia.com/",
    role: "Software Engineer, Backend",
    period: "Feb 2019 - Dec 2020",
    location: "Jakarta, Indonesia (On-Site) 🇮🇩",
    description: "Integrated bank payment methods and built digital onboarding features.",
    achievements: [
      "Delivered 3 bank host-to-host integrations (BSI, BTN, BNI)",
      "Enabled Virtual Account and direct debit payment channels",
      "100% digital bank account onboarding, eliminating in-branch visits",
    ],
    tech: ["Golang", "PostgreSQL", "Redis", "Kafka", "REST API", "Third-party Integration"],
  },
  {
    company: "BJTech",
    url: "https://balesin.id/",
    role: "Software Engineer, Backend",
    period: "Jan 2018 - Jan 2019",
    location: "Jakarta, Indonesia (On-Site) 🇮🇩",
    description: "Developed sales chatbot and coupon redemption systems for major brands.",
    achievements: [
      "Reduced manual sales operations through chatbot automation",
      "Supported high-volume promo campaigns for Frestea & Coca-Cola",
      "Improved redemption reliability through automated validation",
    ],
    tech: ["Python", "Node.js", "Rivescript", "LINE Messenger", "Chatbot"],
  },
  {
    company: "PT Dua Empat Tujuh",
    url: "https://solusi247.com/",
    role: "Data Engineer",
    period: "Jun 2014 - Dec 2017",
    location: "Jakarta, Indonesia (On-Site) 🇮🇩",
    description: "Built ETL pipelines for Telkomsel's broadband performance monitoring.",
    achievements: [
      "Improved broadband monitoring accuracy for enterprise-scale telco data",
      "Reduced manual reporting effort through automation",
      "Prevented pipeline bottlenecks through proactive monitoring",
    ],
    tech: ["Hadoop", "SQL", "Teradata", "MySQL", "Shell Scripting", "ETL", "Bash"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={item} className="relative md:pl-14">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full bg-card border-2 border-primary items-center justify-center">
                  <Briefcase size={16} className="text-primary" />
                </div>

                <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-medium">
                        {exp.url ? (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary/80 transition-colors inline-flex items-center gap-1 group/link"
                          >
                            {exp.company}
                            <ExternalLink
                              size={14}
                              className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                            />
                          </a>
                        ) : (
                          exp.company
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold whitespace-nowrap">
                        {exp.period}
                      </span>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <Globe size={16} className="text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="space-y-2 mb-5">
                    {exp.achievements.map((a, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-secondary-foreground">{a}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
