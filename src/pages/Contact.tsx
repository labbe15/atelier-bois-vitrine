import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Facebook, Instagram, Clock, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Nous vous répondrons dans les plus brefs délais.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header avec animation */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à nous contacter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-in fade-in slide-in-from-left duration-700">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Envoyez-nous un message
              </CardTitle>
              <CardDescription className="text-base">
                Nous vous répondrons sous 48h
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Votre nom" 
                            className="transition-all duration-200 focus:scale-[1.02]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="votre@email.com" 
                            className="transition-all duration-200 focus:scale-[1.02]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="06 12 34 56 78"
                            className="transition-all duration-200 focus:scale-[1.02]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez-nous votre projet en détail..." 
                            className="min-h-[150px] transition-all duration-200 focus:scale-[1.02]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full transition-all duration-200 hover:scale-105 active:scale-95" 
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">⏳</span>
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Envoyer le message
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-right duration-700">
            {/* Coordonnées */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Nos coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Adresse</p>
                    <p className="text-muted-foreground">
                      Les 4 routes d'Albussac<br />
                      15130 Sansac de Marmiesse
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Téléphone</p>
                    <a 
                      href="tel:0750445055" 
                      className="text-primary hover:underline text-lg font-medium transition-all hover:translate-x-1 inline-block"
                    >
                      07 50 44 50 55
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Email</p>
                    <a 
                      href="mailto:contact@atelier-du-volcan.com" 
                      className="text-primary hover:underline transition-all hover:translate-x-1 inline-block break-all"
                    >
                      contact@atelier-du-volcan.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Horaires</p>
                    <p className="text-muted-foreground">
                      Lun - Ven : 8h00 - 18h00<br />
                      Sam : Sur rendez-vous
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <p className="font-semibold text-lg mb-4">Suivez-nous</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://facebook.com/latelierduvolcan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="font-medium">Facebook</span>
                    </a>
                    <a 
                      href="https://instagram.com/latelierduvolcan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="font-medium">Instagram</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps - CARTE CORRIGÉE */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d323.9169173849934!2d2.3284231331303813!3d44.905616692249005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1759667783625!5m2!1sfr!2sfr"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation L'Atelier du Volcan"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
