import { motion } from "framer-motion";
import { BarChart3, Cog, Database, Code2, LayoutDashboard, GitBranch, Cloud, Brain } from "lucide-react";

const analystSkills = [
  { name: "Power BI", level: 90, icon: BarChart3 },
  { name: "Tableau", level: 85, icon: LayoutDashboard },
  { name: "SQL", level: 92, icon: Database },
  { name: "Excel / Google Sheets", level: 88, icon: BarChart3 },
];

const engineerSkills = [
  { name: "Python (Pandas, NumPy)", level: 88, icon: Code2 },
  { name: "ETL Pipelines", level: 85, icon: Cog },
  { name: "Data Warehousing", level: 80, icon: Cloud },
  { name: "Git & Version Control", level: 82, icon: GitBranch },
];

const SkillBar = ({ name, level, icon: Icon, delay, color }: { name: string; level: number; icon: React.ElementType; delay: number; color: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="group"
  >
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <Icon className={`${color} w-4 h-4`} />
        <span className="text-sm font-semibold text-foreground">{name}</span>
      </div>
      <span className={`text-xs font-bold ${color}`}>{level}%</span>
    </div>
    <div className="h-2.5 rounded-full bg-muted overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
        className={`h-full rounded-full ${color === 'text-primary' ? 'bg-primary' : 'bg-accent'}`}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Skills & Tools</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            My Technical<br />
            <span className="text-gradient">Toolkit</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Data Analytics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)/0.15)]">
                <Brain className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-heading font-bold">Data Analytics</h3>
            </div>
            <div className="space-y-5">
              {analystSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.1} color="text-primary" />
              ))}
            </div>
          </motion.div>

          {/* Data Engineering */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center shadow-[0_0_15px_hsl(var(--accent)/0.15)]">
                <Cog className="text-accent" size={20} />
              </div>
              <h3 className="text-xl font-heading font-bold">Data Engineering</h3>
            </div>
            <div className="space-y-5">
              {engineerSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.1} color="text-accent" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
