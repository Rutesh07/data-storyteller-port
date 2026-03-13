import { motion } from "framer-motion";
import {
  GitBranch,
  BarChart3,
  Database,
  Settings2,
  Check,
} from "lucide-react";

const roles = [
  {
    icon: GitBranch,
    title: "Data Pipeline Engineer",
    desc: "Building scalable ETL/ELT pipelines using Python, SQL, and cloud platforms to process and transform large datasets efficiently.",
    color: "primary" as const,
  },
  {
    icon: BarChart3,
    title: "Analytics & BI Specialist",
    desc: "Creating interactive dashboards with Power BI, Tableau, and Streamlit to deliver data-driven insights and business recommendations.",
    color: "accent" as const,
  },
  {
    icon: Database,
    title: "Database Architect",
    desc: "Designing star schemas, dimensional models, and optimizing SQL queries for analytics workloads on cloud and on-premise databases.",
    color: "primary" as const,
  },
  {
    icon: Settings2,
    title: "ETL & Automation Engineer",
    desc: "Automating data workflows with Python and Apache Airflow, implementing data quality checks for reliable, production-ready pipelines.",
    color: "accent" as const,
  },
];

const technologies = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "Apache Airflow",
  "Snowflake",
  "Azure",
  "Docker",
  "Git & GitHub",
  "Streamlit",
  "REST APIs",
  "ETL / ELT",
];

const SkillsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Combining data engineering and analytics to deliver end-to-end data solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Role Cards — 2x2 grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${
                    role.color === "accent"
                      ? "from-accent/10 to-accent/5"
                      : "from-primary/10 to-primary/5"
                  } rounded-2xl`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                      role.color === "accent"
                        ? "from-accent/20 to-accent/5"
                        : "from-primary/20 to-primary/5"
                    } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <role.icon
                      size={22}
                      className={
                        role.color === "accent"
                          ? "text-accent"
                          : "text-primary"
                      }
                    />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-lg font-heading font-bold mb-1">
              Technologies I Work With
            </h3>
            <div className="w-10 h-1 rounded-full bg-primary mb-6" />
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "hsl(var(--primary) / 0.5)",
                  }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-background border border-border text-sm font-medium text-foreground cursor-default transition-all duration-200"
                >
                  <Check
                    size={14}
                    className="text-primary shrink-0"
                    strokeWidth={3}
                  />
                  <span className="truncate">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
