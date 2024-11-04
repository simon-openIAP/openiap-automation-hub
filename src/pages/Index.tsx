import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Code2, Users, LineChart, Shield, Boxes, Cloud, Cog, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const businessFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Process Automation",
      description: "Automate business processes across departments while maintaining full control. Connect IT systems, human resources, and IoT devices seamlessly."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Flexible Deployment",
      description: "Deploy on-premise or use our cloud offering. Scale from small businesses to large enterprises with our adaptable solutions."
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Open Source Freedom",
      description: "Access and modify our software without commercial restrictions. Join our community-driven approach to innovation."
    }
  ];

  const developerFeatures = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "OpenRPA",
      description: "Our core framework for robotic process automation. Automate tasks and integrate applications with minimal coding required."
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "OpenIAP Flow",
      description: "Advanced workflow automation with extended capabilities. Perfect for complex enterprise automation needs."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Support",
      description: "Get expert consulting services to implement and optimize your automation strategy effectively."
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
          Open Source Automation Platform
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Combine RPA, Low-Code, AI, and IoT in one comprehensive automation ecosystem. Build powerful workflows without the enterprise price tag.
        </p>
        <Button size="lg" className="text-lg px-8">
          Get Started
        </Button>
      </section>

      {/* Business Solutions Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose OpenIAP?</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
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