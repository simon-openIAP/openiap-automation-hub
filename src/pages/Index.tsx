import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Code2, Users, LineChart, Shield, Boxes, Youtube, Book, Github, MessageCircle } from "lucide-react";

const Index = () => {
  const businessFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Simple Data Automation",
      description: "Make your company's data work for you by automating tedious tasks and processes in minutes, not months."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Connect Everything",
      description: "Seamlessly integrate and automate across all your systems, humans, and devices with our powerful platform."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Full Control",
      description: "Maintain complete visibility and control over your automated processes while scaling effortlessly."
    }
  ];

  const resources = [
    {
      icon: <Youtube className="w-6 h-6" />,
      title: "Video Tutorials",
      description: "Learn through our comprehensive YouTube channel tutorials."
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Documentation",
      description: "Access detailed guides and documentation for implementation."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Community Forum",
      description: "Join our active community for support and knowledge sharing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          We Make Custom Data Simple
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Every company has different tasks and systems. OpenIAP helps you automate and integrate them all in minutes.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Download Now
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            Documentation
          </Button>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Automate Tedious Tasks in Minutes</h2>
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

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Resources & Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 text-primary">{resource.icon}</div>
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{resource.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Automating Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            OpenIAP is automation made simple — and open source. Connect your systems, automate your processes, and transform your business.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View on Github
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;