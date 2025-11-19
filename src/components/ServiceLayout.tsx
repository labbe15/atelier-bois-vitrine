import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  children?: ReactNode;
}

const ServiceLayout = ({ title, subtitle, description, image, features, children }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative h-[400px] flex items-center justify-center text-center bg-gradient-to-br from-primary/20 to-primary/5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-heading text-white mb-4">{title}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">{description}</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Pourquoi choisir L'Atelier du Volcan ?</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Besoin d'un devis ?</h3>
                <p className="mb-6">
                  Contactez-nous pour discuter de votre projet. Nous serons ravis d'étudier votre demande et de vous proposer un devis détaillé.
                </p>
                <Button variant="secondary" asChild className="w-full">
                  <Link to="/contact">Demander un devis</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
