import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end section-padding pt-28 overflow-hidden bg-primary">
      {/* Decorative circles */}
      <div className="absolute top-20 right-[15%] w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent opacity-80" />
      <div className="absolute -bottom-20 left-[40%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent opacity-70" />
      <div className="absolute top-1/4 -left-4 flex flex-col gap-3">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full bg-primary-foreground/40" />
        ))}
      </div>
      <div className="absolute top-1/4 right-4 flex flex-col gap-3">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full bg-primary-foreground/40" />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="pb-12 md:pb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-primary-foreground">
              Hello, I'm{" "}
              <br />
              <span className="text-accent">Rutesh Zalavadiya</span>
              <br />
              <span className="text-primary-foreground">A Data Analyst</span>
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/70 max-w-lg mb-8 leading-relaxed">
              Data is more than numbers — it's a story waiting to be discovered. I analyze, visualize, and transform data into insights that drive smarter business decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </motion.div>

          {/* Profile Image - right side, bottom-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end items-end relative"
          >
            {/* Experience badge */}
            <div className="absolute top-8 right-0 lg:right-4 bg-card text-card-foreground rounded-xl px-4 py-3 shadow-card z-20">
              <span className="text-2xl font-heading font-bold">2+</span>
              <span className="text-sm text-muted-foreground ml-1">Years<br/>Experience</span>
            </div>

            <img
              src={profileImg}
              alt="Rutesh Zalavadiya"
              className="w-72 md:w-[380px] lg:w-[420px] h-auto object-contain relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
