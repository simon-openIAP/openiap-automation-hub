import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => (
  <section className="container mx-auto px-4 py-24 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Open Source Automation Platform
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        Combine RPA, Low-Code, AI, and IoT in one comprehensive automation ecosystem. Build powerful workflows without the enterprise price tag.
      </p>
      <div className="flex gap-4 justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="text-lg px-8">
            Get Started
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" variant="outline" className="text-lg px-8">
            View Demo
          </Button>
        </motion.div>
      </div>
    </motion.div>
  </section>
);