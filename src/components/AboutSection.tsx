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

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            Designing Solutions,<br />Not Just Visuals
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center text-lg leading-relaxed"
          >
            I'm a passionate data analyst who loves turning complex datasets into clear, actionable insights. 
            With expertise in Power BI, Tableau, SQL, and Python, I bridge the gap between raw data and strategic 
            business decisions. My goal is to make data accessible and impactful for everyone.
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
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-heading font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="p-5 rounded-2xl bg-background border border-border hover:shadow-card transition-shadow"
                >
                  <div className="text-xs font-semibold text-primary mb-1">{e.year}</div>
                  <div className="font-semibold text-foreground">{e.degree}</div>
                  <div className="text-sm text-muted-foreground">{e.school}</div>
                </div>
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
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Briefcase className="text-accent" size={20} />
              </div>
              <h3 className="text-xl font-heading font-bold">Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((e) => (
                <div
                  key={e.company}
                  className="p-5 rounded-2xl bg-background border border-border hover:shadow-card transition-shadow"
                >
                  <div className="text-xs font-semibold text-accent mb-1">{e.period}</div>
                  <div className="font-semibold text-foreground">{e.role}</div>
                  <div className="text-sm text-muted-foreground">{e.company}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
