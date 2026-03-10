import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden">
      {/* Abstract bg shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-48 h-48 rounded-full bg-primary/5 blur-2xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Data Analyst & Visualization Expert
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Hello, I'm{" "}
              <span className="text-gradient">Rutesh Zalavadiya</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Data is more than numbers — it's a story waiting to be discovered. I analyze, visualize, and transform data into insights that drive smarter business decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Download size={18} /> Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { num: "2+", label: "Years Experience" },
                { num: "5+", label: "Projects Completed" },
                { num: "3+", label: "Tools Mastered" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-heading font-bold text-foreground">{s.num}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-card-hover relative z-10">
                <img
                  src={profileImg}
                  alt="Rutesh Zalavadiya"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent animate-float" />
              <div className="absolute -bottom-2 -left-6 w-14 h-14 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/2 -right-10 w-8 h-8 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
