// Configuration des images pour tous les services
import presentationImg from "@/assets/Présentation.jpg";
import charpenteImg from "@/assets/charpente.jpg";
import maisonOssatureImg from "@/assets/Maison ossature bois.jpeg";
import pergolaImg from "@/assets/Les pergolas.jpg";
import terrasseImg from "@/assets/Terrasse.jpg";
import carportImg from "@/assets/Carport.jpg";
import isolationImg from "@/assets/Isolation par l_extérieur.jpg";
import escalierImg from "@/assets/Escalier.jpg";
import bibliothequeImg from "@/assets/Bibliothèque.jpg";
import tableImg from "@/assets/Table.jpg";
import solImg from "@/assets/Sol.jpg";
import porteInterieurImg from "@/assets/Porte intérieur.jpg";
import mobilierImg from "@/assets/Mobilier sur mesure.jpg";
import verriereImg from "@/assets/Verrière chêne.jpg";
import menuiserieImg from "@/assets/Menuiserie.jpg";
import voletsImg from "@/assets/Volets & Protection solaire.jpg";
import porteEntreeImg from "@/assets/Porte d_entrée.jpg";
import porteGarageImg from "@/assets/Porte de garage.jpg";
import portailImg from "@/assets/Portail.jpg";
import clotureImg from "@/assets/Clôture.jpg";
import bardageImg from "@/assets/Bardage.jpg";
import dressingImg from "@/assets/Dressing.jpg";
import cuisineImg from "@/assets/Cuisine.jpg";
import amenagementImg from "@/assets/Aménagement sur mesure.jpg";
import cloisonsImg from "@/assets/Cloisons.jpg";
import extensionImg from "@/assets/Extension.jpg";
import garageImg from "@/assets/Extension garage.jpg";
import imgSurElev from "@/assets/Surélévation.jpg";
import verandaImg from "@/assets/Véranda.jpg";
import poolHouseImg from "@/assets/Pool house.jpg";
import studioJardinImg from "@/assets/Studio de jardin.jpg";

export const heroImageCustom = presentationImg;

export const categoryImagesCustom = {
  structure: charpenteImg,
  menuiserieInterieur: escalierImg,
  menuiserieExterieur: menuiserieImg,
  agencement: dressingImg,
  extension: extensionImg,
};

export const serviceImagesMap = {
  structure: {
    "ossature-bois": maisonOssatureImg,
    charpente: charpenteImg,
    pergola: pergolaImg,
    terrasses: terrasseImg,
    carport: carportImg,
    "isolation-exterieur": isolationImg,
  },
  menuiserieInterieur: {
    escaliers: escalierImg,
    bibliotheques: bibliothequeImg,
    tables: tableImg,
    sols: solImg,
    "portes-communication": porteInterieurImg,
    mobilier: mobilierImg,
    verrieres: verriereImg,
  },
  menuiserieExterieur: {
    fenetres: menuiserieImg,
    volets: voletsImg,
    "portes-entree": porteEntreeImg,
    "portes-garage": porteGarageImg,
    portails: portailImg,
    clotures: clotureImg,
    bardages: bardageImg,
  },
  agencement: {
    dressing: dressingImg,
    cuisines: cuisineImg,
    amenagement: amenagementImg,
    cloisons: cloisonsImg,
  },
  extension: {
    "ossature-bois": extensionImg,
    garage: garageImg,
    surelevation: imgSurElev,
    veranda: verandaImg,
    "pool-house": poolHouseImg,
    "abri-jardin": studioJardinImg,
  },
};
