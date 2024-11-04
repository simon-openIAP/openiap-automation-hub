import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Code2, Users, LineChart, Shield, Boxes } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const businessFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Process Automation",
      description: "Streamline your business processes and automate workflows across departments while maintaining full control and visibility."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Intelligent Integration",
      description: "Connect and automate your business systems and data sources to drive better decision-making and efficiency."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Enhanced Operations",
      description: "Optimize your business operations through powerful automation tools that adapt to your specific needs."
    }
  ];

  const developerFeatures = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Seamless Integration",
      description: "Build and deploy integrations that connect all your systems and processes into a unified automation workflow."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise-Ready Platform",
      description: "Develop secure and scalable automation solutions that meet your organization's complex requirements."
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "Unified Platform",
      description: "Create comprehensive automation solutions that integrate seamlessly with your existing technology stack."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">OpenIAP</div>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
              <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          OpenIAP: Unified Enterprise Automation
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A powerful platform that seamlessly integrates and automates your business processes, systems, and workflows across the entire organization.
        </p>
        <Button size="lg" className="text-lg px-8">
          Get Started
        </Button>
      </section>

      {/* Business Solutions Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Transform Your Business Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessFeatures.map((feature, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Power Your Integration Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developerFeatures.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let us help you transform your business with automation. Reach out to our team today.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="https://calendly.com/openiap" target="_blank" rel="noopener noreferrer">
                Schedule a Demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;