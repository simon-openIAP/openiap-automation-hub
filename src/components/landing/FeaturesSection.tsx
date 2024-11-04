import { FeatureCard } from "./FeatureCard";
import { Users, Cloud, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const businessFeatures = [
  {
    icon: Users,
    title: "Process Automation",
    description: "Automate business processes across departments while maintaining full control. Connect IT systems, human resources, and IoT devices seamlessly."
  },
  {
    icon: Cloud,
    title: "Flexible Deployment",
    description: "Deploy on-premise or use our cloud offering. Scale from small businesses to large enterprises with our adaptable solutions."
  },
  {
    icon: GitBranch,
    title: "Open Source Freedom",
    description: "Access and modify our software without commercial restrictions. Join our community-driven approach to innovation."
  }
];

export const FeaturesSection = () => (
  <section className="bg-secondary/50 py-20">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Why Choose OpenIAP?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {businessFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  </section>
);