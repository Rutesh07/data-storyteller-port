import { motion } from "framer-motion";
import { BarChart3, PieChart, Database, Search, FileText } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Interactive Dashboard Development",
    desc: "Dynamic dashboards with Power BI and Tableau for KPI tracking and real-time monitoring.",
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    desc: "Transforming raw data into charts, graphs, and reports for clear, actionable insights.",
  },
  {
    icon: Database,
    title: "Data Cleaning & Preparation",
    desc: "Ensuring accuracy and consistency of raw datasets for reliable analysis.",
  },
  {
    icon: Search,
    title: "SQL Data Querying & Extraction",
    desc: "Efficient data extraction and manipulation from relational databases.",
  },
  {
    icon: FileText,
    title: "Business Intelligence Reporting",
    desc: "Structured reports that support strategic decision-making and growth.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Services</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            Expertise Services I Offer
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
              className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
