import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Code2, Users, LineChart, Shield, Boxes } from "lucide-react";

const Index = () => {
  const businessFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Efficiency",
      description: "Work seamlessly with developers while automating tasks across departments, combining business expertise with technical capabilities."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Data-Driven Decisions",
      description: "Bridge the gap between technical data and business insights, enabling better decision-making across your organization."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Enhanced Workflows",
      description: "Create and modify automation workflows collaboratively, combining business knowledge with technical expertise."
    }
  ];

  const developerFeatures = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Seamless Integration",
      description: "Build solutions that business teams can easily understand and modify, creating a collaborative automation environment."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise-Ready Platform",
      description: "Develop secure solutions that both technical and non-technical teams can confidently use and manage."
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "Unified Experience",
      description: "Create integrations that bridge technical capabilities with business needs, enabling true cross-functional collaboration."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          OpenIAP: Where Business Meets Technology
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A unified platform where business teams and developers collaborate seamlessly to create powerful automation solutions.
        </p>
        <Button size="lg" className="text-lg px-8">
          Get Started
        </Button>
      </section>

      {/* Business Perspective Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Empower Your Business Vision</h2>
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

      {/* Technical Perspective Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Enable Technical Excellence</h2>
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
          <h2 className="text-3xl font-bold mb-6">True Collaboration in Action</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            OpenIAP brings together business expertise and technical capabilities in one unified platform, enabling seamless collaboration between teams to create powerful automation solutions.
          </p>
          <Button size="lg" className="text-lg px-8">
            Start Collaborating Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;