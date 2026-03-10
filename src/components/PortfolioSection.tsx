import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "Sales & Customer Dashboard",
    tool: "Tableau",
    category: "Tableau",
    period: "Jan 2024 – Mar 2024",
    desc: "Designed an interactive Tableau dashboard tracking sales performance, customer segmentation, and revenue trends across regions.",
    outcomes: "Improved reporting efficiency by 40% and provided real-time KPI visibility for stakeholders.",
  },
  {
    title: "SQL Data Analytics Project",
    tool: "SQL",
    category: "SQL",
    period: "Apr 2024 – Jun 2024",
    desc: "Developed complex SQL queries for data extraction, transformation, and analysis from large relational databases.",
    outcomes: "Automated recurring report generation, saving 10+ hours per week in manual effort.",
  },
  {
    title: "Data Warehouse & Analytics Project",
    tool: "SQL Server, ETL",
    category: "SQL",
    period: "Jul 2024 – Sep 2024",
    desc: "Built a data warehouse with ETL pipelines to consolidate data from multiple sources for unified analytics.",
    outcomes: "Enabled cross-departmental analytics and reduced data silos across the organization.",
  },
  {
    title: "British Airways Reviews Dashboard",
    tool: "Tableau",
    category: "Tableau",
    period: "Oct 2024 – Nov 2024",
    desc: "Created an interactive dashboard analyzing customer reviews, sentiment trends, and service quality metrics.",
    outcomes: "Identified key drivers of customer satisfaction, informing service improvement initiatives.",
  },
  {
    title: "HR Analytics Dashboard",
    tool: "Tableau",
    category: "Tableau",
    period: "Dec 2024 – Jan 2025",
    desc: "Developed an HR analytics dashboard tracking employee attrition, performance, and engagement metrics.",
    outcomes: "Provided HR leadership with data-driven insights to reduce attrition by targeting key factors.",
  },
];

const filters = ["All", "SQL", "Tableau", "Power BI"];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            Digital Product Showcases
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-card-hover transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                      {p.tool}
                    </span>
                    <h3 className="text-lg font-heading font-bold">{p.title}</h3>
                  </div>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground mb-2">{p.period}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                <button
                  onClick={() => setExpanded(expanded === p.title ? null : p.title)}
                  className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                >
                  {expanded === p.title ? "Less" : "Key Outcomes"}
                  {expanded === p.title ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <AnimatePresence>
                  {expanded === p.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm text-foreground bg-primary/5 p-3 rounded-xl">{p.outcomes}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
