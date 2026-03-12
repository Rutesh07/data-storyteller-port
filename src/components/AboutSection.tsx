import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    degree: "Master of Applied Computing",
    school: "University of Windsor",
    year: "2025",
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    school: "Charusat University",
    year: "2024",
  },
];

const experience = [
  {
    role: "Data Analyst Intern",
    company: "CROWN Software",
    period: "Jan 2024 – Jun 2024",
  },
  {
    role: "Data Analyst Intern",
    company: "Sparks To Ideas",
    period: "May 2022 – Dec 2022",
  },
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
            Designing Solutions,<br />
            <span className="text-gradient">Not Just Visuals</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center text-lg leading-relaxed"
          >
            I'm Rutesh Zalavadiya, a Data Analyst & Data Engineer passionate about transforming raw data into reliable data systems and meaningful business insights. I work across the data lifecycle — from extracting and transforming data with SQL and Python to building interactive dashboards using Tableau and Power BI that help organizations track performance and make data-driven decisions.
            <br /><br />
            My interest in the data field began during my Data Analyst Internship at Sparks To Ideas, where I analyzed 10K+ records, developed SQL queries for data extraction and reporting, and streamlined data preparation workflows. A key milestone was participating in the Jaguar Land Rover Hackathon, where my team built a data-driven benchmarking solution that improved data processing efficiency by ~40% and secured 1st place.
            <br /><br />
            I completed my Master of Applied Computing from the University of Windsor, strengthening my expertise in data analytics, ETL workflows, and data warehousing. I enjoy bridging the gap between data engineering and analytics, ensuring data is scalable, well-structured, and capable of delivering meaningful insights that drive real business impact.
          </motion.p>
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
