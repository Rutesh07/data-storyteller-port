import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden">
      {/* Animated bg shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 left-1/4 w-48 h-48 rounded-full bg-primary/5 blur-2xl"
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.03)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20"
            >
              <Sparkles size={14} className="animate-pulse" />
              Data Analyst & Visualization Expert
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Hello, I'm{" "}
              <span className="text-gradient relative">
                Rutesh Zalavadiya
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Data is more than numbers — it's a story waiting to be discovered. I analyze, visualize, and transform data into insights that drive smarter business decisions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:scale-105 transition-all duration-300"
              >
                Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
              >
                <Download size={18} className="group-hover:animate-bounce" /> Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-8 mt-12"
            >
              {[
                { num: "2+", label: "Years Experience" },
                { num: "5+", label: "Projects Completed" },
                { num: "3+", label: "Tools Mastered" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group cursor-default"
                >
                  <div className="text-2xl font-heading font-bold text-gradient">{s.num}</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-2xl scale-110" />
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_40px_hsl(var(--primary)/0.15)] relative z-10"
              >
                <img
                  src={profileImg}
                  alt="Rutesh Zalavadiya"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative orbiting elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-20 pointer-events-none"
              >
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent shadow-[0_0_20px_hsl(var(--accent)/0.4)]" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-20 pointer-events-none"
              >
                <div className="absolute -bottom-2 -left-6 w-14 h-14 rounded-full bg-primary/30 shadow-[0_0_15px_hsl(var(--primary)/0.3)]" />
              </motion.div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-10 w-8 h-8 rounded-full bg-primary/20 shadow-[0_0_10px_hsl(var(--primary)/0.2)] z-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
