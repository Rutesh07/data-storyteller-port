import { motion } from "framer-motion";
import { BarChart3, PieChart, Database, Search, FileText } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Interactive Dashboard Development",
    desc: "Dynamic dashboards with Power BI and Tableau for KPI tracking and real-time monitoring.",
    gradient: "from-primary/20 to-primary/5",
    glow: "hsl(var(--primary)/0.15)",
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    desc: "Transforming raw data into charts, graphs, and reports for clear, actionable insights.",
    gradient: "from-accent/20 to-accent/5",
    glow: "hsl(var(--accent)/0.15)",
  },
  {
    icon: Database,
    title: "Data Cleaning & Preparation",
    desc: "Ensuring accuracy and consistency of raw datasets for reliable analysis.",
    gradient: "from-primary/20 to-primary/5",
    glow: "hsl(var(--primary)/0.15)",
  },
  {
    icon: Search,
    title: "SQL Data Querying & Extraction",
    desc: "Efficient data extraction and manipulation from relational databases.",
    gradient: "from-accent/20 to-accent/5",
    glow: "hsl(var(--accent)/0.15)",
  },
  {
    icon: FileText,
    title: "Business Intelligence Reporting",
    desc: "Structured reports that support strategic decision-making and growth.",
    gradient: "from-primary/20 to-primary/5",
    glow: "hsl(var(--primary)/0.15)",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Services</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            Expertise Services <span className="text-gradient">I Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From raw data to boardroom-ready reports, I provide end-to-end analytics services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} rounded-2xl`} />
              </div>
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 group-hover:shadow-[0_0_25px_${s.glow}] group-hover:scale-110 transition-all duration-300`}>
                  <s.icon size={24} className="text-primary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
