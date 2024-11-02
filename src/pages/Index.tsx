import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Code2, Users, LineChart, Shield, Boxes } from "lucide-react";

const Index = () => {
  const businessFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Increase efficiency and productivity",
      description: "Automate repetitive, rule-based tasks across different departments and systems, freeing up valuable employee time for more strategic work."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Gain valuable insights",
      description: "Access and analyze data from various sources to make informed business decisions."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Improve customer experience",
      description: "Streamline processes and automate workflows to deliver faster and more efficient service."
    }
  ];

  const developerFeatures = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Flexible and powerful",
      description: "Leverage OpenIAP's real-code capabilities and multi-language support to build custom integrations and automate complex tasks."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure and scalable",
      description: "Build and deploy automation solutions with confidence, knowing that OpenIAP is built on a secure and scalable platform."
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "Full integration",
      description: "Connect various systems, including human-in-the-loop processes, IT systems, and the physical world."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          OpenIAP: One Platform for All Your Automation Needs
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          OpenIAP is a powerful, secure, and scalable platform that simplifies and accelerates automation across your entire organization.
        </p>
        <Button size="lg" className="text-lg px-8">
          Get Started
        </Button>
      </section>

      {/* Business Users Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">For Business Users</h2>
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

      {/* Developers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">For Developers</h2>
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

      {/* Bridge the Gap Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">OpenIAP: The Platform That Bridges the Gap</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            OpenIAP is not simply a collection of separate products. It's a unified platform that combines the power of low-code and real-code automation tools to provide a comprehensive solution for all your needs.
          </p>
          <Button size="lg" className="text-lg px-8">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;