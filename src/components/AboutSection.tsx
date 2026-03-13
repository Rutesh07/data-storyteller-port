import { motion } from "framer-motion";
import { Trophy, Database, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Trophy, label: "1st Place", desc: "Jaguar Land Rover Hackathon", color: "accent" as const },
  { icon: Database, label: "50K+ Records", desc: "Analyzed & Processed", color: "primary" as const },
  { icon: TrendingUp, label: "~40% Faster", desc: "Data Processing Efficiency", color: "primary" as const },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            Transforming Data Into<br />
            <span className="text-gradient">Actionable Insights</span>
          </h2>
        </motion.div>

        {/* Bio with highlighted keywords */}
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center text-lg leading-relaxed"
          >
            <p>
              I'm <span className="text-foreground font-semibold">Rutesh Zalavadiya</span>, a{" "}
              <span className="text-primary font-semibold">Data Analyst & Data Engineer</span>{" "}
              passionate about transforming raw data into reliable data systems and meaningful business insights. I work across the data lifecycle — from extracting and transforming data with{" "}
              <span className="text-foreground font-medium">SQL</span> and{" "}
              <span className="text-foreground font-medium">Python</span> to building interactive dashboards using{" "}
              <span className="text-foreground font-medium">Tableau</span> and{" "}
              <span className="text-foreground font-medium">Power BI</span> that help organizations track performance and make data-driven decisions.
            </p>
            <p className="mt-4">
              My interest in data began during my internship at <span className="text-foreground font-medium">Sparks To Ideas</span>, where I analyzed{" "}
              <span className="text-primary font-bold">50K+ records</span> across multiple datasets, developed SQL queries for reporting, and improved data analysis workflows by streamlining data preparation processes.
            </p>
            <p className="mt-4">
              A major milestone was the{" "}
              <span className="text-foreground font-semibold">Jaguar Land Rover Hackathon</span>, where my team built a data-driven benchmarking solution that improved processing efficiency by{" "}
              <span className="text-primary font-bold">~40%</span> and analyzed{" "}
              <span className="text-primary font-bold">10K+ data points</span>, helping us{" "}
              <span className="text-accent font-bold">secure 1st place</span>.
            </p>
            <p className="mt-4">
              With a <span className="text-foreground font-medium">Master of Applied Computing</span> from the{" "}
              <span className="text-foreground font-medium">University of Windsor</span>, I've strengthened my expertise in{" "}
              <span className="text-foreground font-medium">data analytics</span>,{" "}
              <span className="text-foreground font-medium">ETL workflows</span>, and{" "}
              <span className="text-foreground font-medium">data warehousing</span> — bridging data engineering and analytics to deliver scalable, impactful solutions.
            </p>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={`p-5 rounded-2xl bg-background border border-border text-center hover:shadow-[0_8px_30px_hsl(var(--${item.color})/0.12)] transition-all duration-300`}
            >
              <div className={`w-11 h-11 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color === 'accent' ? 'from-accent/20 to-accent/5' : 'from-primary/20 to-primary/5'} flex items-center justify-center shadow-[0_0_15px_hsl(var(--${item.color})/0.15)]`}>
                <item.icon className={item.color === 'accent' ? 'text-accent' : 'text-primary'} size={20} />
              </div>
              <div className="text-lg font-bold text-foreground">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)/0.15)]">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-heading font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((e, i) => (
                <motion.div
                  key={e.degree}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.4)" }}
                  className="p-5 rounded-2xl bg-background border border-border hover:shadow-[0_8px_30px_hsl(var(--primary)/0.12)] transition-all duration-300 cursor-default"
                >
                  <div className="text-xs font-semibold text-primary mb-1">{e.year}</div>
                  <div className="font-semibold text-foreground">{e.degree}</div>
                  <div className="text-sm text-muted-foreground">{e.school}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center shadow-[0_0_15px_hsl(var(--accent)/0.15)]">
                <Briefcase className="text-accent" size={20} />
              </div>
              <h3 className="text-xl font-heading font-bold">Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((e, i) => (
                <motion.div
                  key={e.company}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, borderColor: "hsl(var(--accent) / 0.4)" }}
                  className="p-5 rounded-2xl bg-background border border-border hover:shadow-[0_8px_30px_hsl(var(--accent)/0.12)] transition-all duration-300 cursor-default"
                >
                  <div className="text-xs font-semibold text-accent mb-1">{e.period}</div>
                  <div className="font-semibold text-foreground">{e.role}</div>
                  <div className="text-sm text-muted-foreground">{e.company}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
