import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-8 border-t border-border bg-card relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full bg-primary/5 blur-3xl" />
    </div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm text-muted-foreground"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-gradient font-semibold">Rutesh Zalavadiya</span>. All rights reserved.
      </motion.p>
    </div>
  </footer>
);

export default Footer;
