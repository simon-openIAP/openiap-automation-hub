import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { FeatureCard } from "@/components/landing/FeatureCard";
import { Code2, Shield, Brain, Zap, Lock, Globe, Rocket, Heart, Cog } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Index = () => {
  const developerFeatures = [
    {
      icon: Code2,
      title: "OpenRPA",
      description: "Our core framework for robotic process automation. Automate tasks and integrate applications with minimal coding required."
    },
    {
      icon: Cog,
      title: "OpenIAP Flow",
      description: "Advanced workflow automation with extended capabilities. Perfect for complex enterprise automation needs."
    },
    {
      icon: Shield,
      title: "Enterprise Support",
      description: "Get expert consulting services to implement and optimize your automation strategy effectively."
    }
  ];

  const technicalFeatures = [
    {
      icon: Brain,
      title: "AI Integration",
      description: "Leverage artificial intelligence and machine learning capabilities to enhance your automation workflows and decision-making processes."
    },
    {
      icon: Zap,
      title: "Low-Code Platform",
      description: "Build complex automation workflows with minimal coding using our intuitive visual interface and pre-built components."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Ensure your automation processes are secure with enterprise-grade security features and compliance standards."
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Rapid Implementation",
      description: "Get started quickly with pre-built templates and workflows. Deploy your first automation within days, not months."
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Join a worldwide community of developers and businesses using OpenIAP. Share knowledge and best practices."
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Our dedicated support team ensures your success with comprehensive documentation and personalized assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold"
            >
              OpenIAP
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-6"
            >
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
              <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </motion.div>
          </div>
        </div>
      </nav>

      <HeroSection />
      <FeaturesSection />

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Products
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developerFeatures.map((feature, index) => (
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

      {/* Technical Features Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Advanced Capabilities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalFeatures.map((feature, index) => (
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Customer Benefits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let us help you transform your business with automation. Reach out to our team today.
            </p>
            <div className="flex justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="https://calendly.com/openiap" target="_blank" rel="noopener noreferrer">
                    Schedule a Demo
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;