import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Applied Computing",
    school: "University of Windsor, Canada",
    year: "Dec 2025",
    coursework: [
      "Database Systems",
      "Software Engineering",
      "System Programming",
      "Network Security",
      "Advanced Computing Concepts",
      "Data Analytics Fundamentals",
    ],
  },
  {
    degree: "Bachelor of Technology — Information Technology",
    school: "Charusat University, India",
    year: "May 2024",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Artificial Intelligence & Machine Learning",
      "Cybersecurity Fundamentals",
      "Data Analytics Concepts",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Education</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            Academic <span className="text-gradient">Foundation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-[0_8px_30px_hsl(var(--primary)/0.12)] transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)/0.15)] group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.25)] transition-shadow">
                  <GraduationCap className="text-primary" size={22} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary mb-1">{edu.year}</div>
                  <h3 className="font-bold text-foreground text-lg leading-tight">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{edu.school}</p>
                </div>
              </div>

              {/* Coursework */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="text-muted-foreground" size={14} />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/8 text-primary border border-primary/10 hover:bg-primary/15 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
