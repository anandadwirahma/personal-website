import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend Development",
    skills: ["Golang (primary)", "RESTful API Design", "Microservices", "Clean Architecture"],
  },
  {
    title: "Programming Languages",
    skills: ["Golang (primary)", "AngularJS", "NodeJS", "Python", "Shell Scripting", "Bash", "Hadoop"],
  },
  {
    title: "Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "Redis", "SQL", "Teradata"],
  },
  {
    title: "Payment & Fintech",
    skills: ["Virtual Account", "QR Payments", "Cross-border Payments", "Host-to-Host Integration", "SNAP Open API"],
  },
  {
    title: "System Integration",
    skills: ["Third-party APIs", "Banking APIs", "Payment Gateways", "Partner Onboarding"],
  },
  {
    title: "Soft Skills",
    skills: ["Analytical Thinking", "Root Cause Analysis", "Mentoring", "Cross-team Collaboration"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors group"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4 group-hover:text-gradient transition-all">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
