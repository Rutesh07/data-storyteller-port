import { motion } from "framer-motion";
import {
  GitBranch,
  BarChart3,
  Database,
  Settings2,
  Code2,
  LineChart,
  BarChart,
  Cloud,
  Container,
  GitMerge,
  Globe,
  Layers,
  Server,
  Snowflake,
  Table2,
  Workflow,
  Braces,
  Binary,
  LayoutDashboard,
  Gauge,
} from "lucide-react";

const roles = [
  {
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    desc: "Building interactive dashboards and analytical reports using Tableau, Power BI, and SQL to track KPIs, monitor trends, and support data-driven decision-making.",
    color: "primary" as const,
  },
  {
    icon: Database,
    title: "SQL & Data Exploration",
    desc: "Writing optimized SQL queries for data extraction, transformation, KPI analysis, and trend discovery across structured business datasets.",
    color: "accent" as const,
  },
  {
    icon: GitBranch,
    title: "Data Pipeline & ETL Fundamentals",
    desc: "Designing ETL workflows and structured data pipelines to clean, transform, and prepare raw datasets for scalable analytics and reporting.",
    color: "primary" as const,
  },
  {
    icon: Settings2,
    title: "Data Modeling & Warehousing",
    desc: "Developing star schema models, fact-dimension tables, and analytics-ready datasets to enable efficient querying and business intelligence solutions.",
    color: "accent" as const,
  },
];

const skillCategories = [
  {
    label: "Languages & Libraries",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "SQL", icon: Database },
      { name: "pandas", icon: Table2 },
      { name: "NumPy", icon: Binary },
      { name: "Matplotlib", icon: LineChart },
    ],
  },
  {
    label: "Visualization & BI",
    skills: [
      { name: "Power BI", icon: BarChart },
      { name: "Tableau", icon: LayoutDashboard },
      { name: "Streamlit", icon: Gauge },
    ],
  },
  {
    label: "Data Engineering",
    skills: [
      { name: "Apache Airflow", icon: Workflow },
      { name: "ETL / ELT Pipelines", icon: GitMerge },
      { name: "REST APIs", icon: Globe },
      { name: "Data Modeling", icon: Layers },
      { name: "Star Schema", icon: Braces },
      { name: "Data Warehousing", icon: Server },
    ],
  },
  {
    label: "Databases & Cloud",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "SQL Server", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Snowflake", icon: Snowflake },
      { name: "Microsoft Azure", icon: Cloud },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitMerge },
    ],
  },
];

const categoryColors = [
  { bg: "from-primary/15 to-primary/5", text: "text-primary", dot: "bg-primary" },
  { bg: "from-accent/15 to-accent/5", text: "text-accent", dot: "bg-accent" },
  { bg: "from-primary/15 to-primary/5", text: "text-primary", dot: "bg-primary" },
  { bg: "from-accent/15 to-accent/5", text: "text-accent", dot: "bg-accent" },
  { bg: "from-primary/15 to-primary/5", text: "text-primary", dot: "bg-primary" },
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

        {/* Role Cards — 2x2 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
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
                      role.color === "accent" ? "text-accent" : "text-primary"
                    }
                  />
                </div>
                <h3 className="text-base font-heading font-bold mb-2">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {role.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid — categorized with icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-card border border-border"
        >
          <h3 className="text-xl font-heading font-bold mb-1 text-center">
            Technologies I Work With
          </h3>
          <div className="w-12 h-1 rounded-full bg-primary mx-auto mb-8" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, catIdx) => {
              const colors = categoryColors[catIdx % categoryColors.length];
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.08, duration: 0.4 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                    <span className={`text-xs font-bold uppercase tracking-widest ${colors.text}`}>
                      {cat.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: catIdx * 0.08 + skillIdx * 0.04,
                          duration: 0.3,
                        }}
                        whileHover={{
                          scale: 1.08,
                          y: -2,
                        }}
                        className={`group/skill flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br ${colors.bg} border border-border hover:border-primary/30 cursor-default transition-all duration-200`}
                      >
                        <skill.icon
                          size={14}
                          className={`${colors.text} shrink-0 group-hover/skill:scale-110 transition-transform duration-200`}
                          strokeWidth={2.5}
                        />
                        <span className="text-sm font-medium text-foreground whitespace-nowrap">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
