import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Claire D.",
      location: "Sansac de Marmiesse",
      rating: 5,
      text: "Très satisfaite de notre terrasse en bois. L'équipe a été professionnelle du début à la fin, avec un travail vraiment soigné. Le bois choisi est de qualité et le rendu correspond exactement à nos attentes.",
      project: "Terrasse en bois",
    },
    {
      name: "Hugo M.",
      location: "Aurillac",
      rating: 5,
      text: "Excellente prestation pour notre cuisine sur mesure. Les artisans ont été à l'écoute de nos besoins et de très bon conseil. Le résultat est magnifique et fonctionnel. Je recommande sans hésiter !",
      project: "Cuisine sur mesure",
    },
    {
      name: "Nina S.",
      location: "Polminhac",
      rating: 5,
      text: "Extension en ossature bois réalisée dans les temps avec une qualité remarquable. Communication fluide tout au long du projet. L'isolation est parfaite et l'intégration à la maison existante est harmonieuse.",
      project: "Extension ossature bois",
    },
    {
      name: "Pierre L.",
      location: "Vic-sur-Cère",
      rating: 5,
      text: "Pose de charpente traditionnelle impeccable. Vrais professionnels qui connaissent leur métier. Travail propre et soigné. Prix honnête pour la qualité fournie.",
      project: "Charpente traditionnelle",
    },
    {
      name: "Martine B.",
      location: "Arpajon-sur-Cère",
      rating: 5,
      text: "Dressing sur mesure parfaitement adapté à notre espace. Optimisation remarquable et finitions de qualité. Délais respectés et chantier propre. Merci pour votre professionnalisme !",
      project: "Dressing sur mesure",
    },
    {
      name: "Julien R.",
      location: "Ytrac",
      rating: 5,
      text: "Pergola magnifique qui sublime notre jardin. Construction solide et esthétique. Les conseils prodigués ont été précieux. Un grand merci à toute l'équipe !",
      project: "Pergola",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading text-primary mb-4">
            Avis de nos clients
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que nos clients pensent de notre travail
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">5.0</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Note moyenne</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Clients satisfaits</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Projets réalisés</p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm mb-4 italic">"{testimonial.text}"</p>
                  <div className="pt-3 border-t">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {testimonial.project}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
