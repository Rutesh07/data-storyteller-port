import { motion } from "framer-motion";
import { Trophy, BarChart3, Settings, TrendingUp, Code } from "lucide-react";

const experiences = [
  {
    icon: Trophy,
    type: "hackathon",
    role: "Hackathon Winner",
    company: "Jaguar Land Rover & University of Windsor",
    subtitle: "Data Engineering & Analytics Project | Windsor, Canada",
    period: "",
    bullets: [
      "Built a high-concurrency data benchmarking framework to analyze AI agent performance under heavy workloads.",
      "Processed 10K+ concurrent data requests, identifying system bottlenecks through structured log and performance analysis.",
      "Optimized data pipeline throughput by ~40% using Linux tuning and efficient data processing strategies.",
      "Developed performance monitoring dashboards tracking 15+ system efficiency metrics.",
    ],
    skills: ["Python", "SQL", "Linux", "Data Pipelines", "Performance Optimization", "System Analysis"],
  },
  {
    icon: BarChart3,
    type: "work",
    role: "Data Analyst Intern",
    company: "CROWN Software",
    subtitle: "",
    period: "Jan 2024 – Jun 2024 | Junagadh, India",
    bullets: [
      "Developed interactive Power BI dashboards tracking pricing trends, operational metrics, and 15+ business KPIs, reducing reporting turnaround time by 60%.",
      "Designed and optimized SQL-based ETL workflows to integrate multi-source datasets and improve reporting reliability.",
      "Conducted customer behavior and sales trend analysis, contributing to a 15% increase in marketing ROI.",
      "Automated recurring reporting pipelines using Python (pandas), saving 10+ hours weekly and reducing manual errors.",
    ],
    skills: ["Power BI", "SQL", "Python", "ETL", "KPI Analysis", "Data Visualization"],
  },
  {
    icon: Settings,
    type: "work",
    role: "Data Engineer Intern",
    company: "Rotofit Gravure",
    subtitle: "",
    period: "Feb 2023 – Sept 2023 | Ahmedabad, India",
    bullets: [
      "Built data transformation pipelines to process manufacturing and operational datasets for analytics reporting.",
      "Structured raw production data into analysis-ready formats, improving reporting accuracy and consistency.",
      "Assisted in designing database schemas and automated data workflows to streamline daily reporting processes.",
      "Supported performance tracking initiatives through SQL-based data extraction and trend analysis.",
    ],
    skills: ["SQL", "Data Modeling", "ETL Pipelines", "Data Processing", "Database Design"],
  },
  {
    icon: TrendingUp,
    type: "work",
    role: "Data Analyst Intern",
    company: "Sparks To Ideas",
    subtitle: "",
    period: "May 2022 – Dec 2022 | Ahmedabad, India",
    bullets: [
      "Performed end-to-end data cleaning, validation, and exploratory analysis on campaign datasets to identify performance gaps.",
      "Developed Python-based ETL scripts, reducing manual reporting effort by 70%.",
      "Designed Tableau dashboards with trend and performance tracking to support business decision-making.",
      "Generated structured analytical reports highlighting growth opportunities and campaign optimization insights.",
    ],
    skills: ["Tableau", "Python", "SQL", "Data Cleaning", "EDA", "Reporting"],
  },
  {
    icon: Code,
    type: "project",
    role: "Software Developer (Academic Project)",
    company: "Insight Advantage Inc",
    subtitle: "",
    period: "May 2025 – Aug 2025 | Windsor, ON, Canada",
    bullets: [
      "Developed a subscription-based web platform connecting vocational rehabilitation consultants with organizations, improving consultant-client discovery and engagement workflows.",
      "Designed and implemented a scalable Azure SQL database architecture to manage secure user data, subscription plans, and automated billing processes.",
      "Built a full-stack Consultant Onboarding System using Next.js (frontend) and Node.js with Fastify (backend), enabling structured profile creation and role-based access management.",
      "Implemented AI-powered matching functionality to recommend relevant projects to consultants based on skills, experience, and availability parameters.",
      "Developed profile management features, including certification tracking, scheduling modules, and automated contract template generation to streamline onboarding operations.",
    ],
    skills: ["Next.js", "Node.js", "Fastify", "Azure SQL", "AI APIs", "Authentication", "Database Design", "Full-Stack Development"],
  },
];

const typeColors = {
  hackathon: { bg: "from-accent/20 to-accent/5", text: "text-accent", border: "border-accent/20", shadow: "hsl(var(--accent)/0.12)", badge: "bg-accent/10 text-accent" },
  work: { bg: "from-primary/20 to-primary/5", text: "text-primary", border: "border-primary/20", shadow: "hsl(var(--primary)/0.12)", badge: "bg-primary/10 text-primary" },
  project: { bg: "from-primary/20 to-primary/5", text: "text-primary", border: "border-primary/20", shadow: "hsl(var(--primary)/0.12)", badge: "bg-primary/10 text-primary" },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Experience</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const colors = typeColors[exp.type as keyof typeof typeColors];
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-3 md:left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center border-2 border-background shadow-lg z-10`}>
                    <exp.icon className={colors.text} size={12} />
                  </div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`p-6 rounded-2xl bg-background border border-border hover:shadow-[0_8px_30px_${colors.shadow}] transition-all duration-300 group`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        {exp.type === "hackathon" && (
                          <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-accent/15 text-accent mb-2">
                            🏆 1st Place Winner
                          </span>
                        )}
                        <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
                        <p className={`text-sm font-semibold ${colors.text}`}>{exp.company}</p>
                        {exp.subtitle && (
                          <p className="text-xs text-muted-foreground mt-0.5">{exp.subtitle}</p>
                        )}
                      </div>
                      {exp.period && (
                        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap bg-muted px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      )}
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${exp.type === 'hackathon' ? 'bg-accent' : 'bg-primary'}`} />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2.5 py-1 text-[11px] font-medium rounded-md ${colors.badge} border ${colors.border}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
