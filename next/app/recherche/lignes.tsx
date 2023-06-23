"use client";

import * as React from "react";
import { useRouter } from "next/router";

import "../../public/scss/pages/recherche/ligne.scss";
import "../../public/scss/pages/recherche/ligne_responsive.scss";

import { getServicesByCityAndCategory, getServicesByCategory, getServicesByCity } from "../../api/service";
import ImagePage from "../../components/images/image";
import LinkAccueil from "@/components/links/link";
export default function Lignes() {
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    const fetchUserData = async () => {
      const params = new URLSearchParams(window.location.search);
      const category = params.get("category");
      const city = params.get("city");

      if (category && city) {

        const services = await getServicesByCityAndCategory(city, category);

        services.map((service: any) => {
          if (service["category_service"].name === "Coiffure")
            service.image = "/images/accueil/categorie_coiffure.png";
          if (service["category_service"].name === "Manucure")
            service.image = "/images/accueil/categorie_manucure.png";
          if (service["category_service"].name === "Massage")
            service.image = "/images/accueil/categorie_massage.png";
          if (service["category_service"].name === "Musculation")
            service.image = "/images/accueil/categorie_musculation.png";
          if (service["category_service"].name === "Spa")
            service.image = "/images/accueil/categorie_spa.png";
          if (service["category_service"].name === "Yoga")
            service.image = "/images/accueil/categorie_yoga.png";
        });
        setServices(services);
      } else if (category) {
        console.log('category')
        console.log(category)
        console.log('category')
        const services = await getServicesByCategory(category);

        services.map((service: any) => {
          if (service["category_service"].name === "Coiffure")
            service.image = "/images/accueil/categorie_coiffure.png";
          if (service["category_service"].name === "Manucure")
            service.image = "/images/accueil/categorie_manucure.png";
          if (service["category_service"].name === "Massage")
            service.image = "/images/accueil/categorie_massage.png";
          if (service["category_service"].name === "Musculation")
            service.image = "/images/accueil/categorie_musculation.png";
          if (service["category_service"].name === "Spa")
            service.image = "/images/accueil/categorie_spa.png";
          if (service["category_service"].name === "Yoga")
            service.image = "/images/accueil/categorie_yoga.png";
        });
        setServices(services);
      } else if (city) {
        const services = await getServicesByCity(city);

        services.map((service: any) => {
          if (service["category_service"].name === "Coiffure")
            service.image = "/images/accueil/categorie_coiffure.png";
          if (service["category_service"].name === "Manucure")
            service.image = "/images/accueil/categorie_manucure.png";
          if (service["category_service"].name === "Massage")
            service.image = "/images/accueil/categorie_massage.png";
          if (service["category_service"].name === "Musculation")
            service.image = "/images/accueil/categorie_musculation.png";
          if (service["category_service"].name === "Spa")
            service.image = "/images/accueil/categorie_spa.png";
          if (service["category_service"].name === "Yoga")
            service.image = "/images/accueil/categorie_yoga.png";
        });
        setServices(services);

      }
    };

    fetchUserData();
  }, []);
  // const services = await getServicesByCityAndCategory(selectedLieu, selectedCategory)

  return (
    <div className="grid">
      {services ? (
        services.map((service: any, index: number) => (
          <LinkAccueil key={service.id} href={`service/${service.id}`}>
            <div className="prestation">
              <ImagePage
                className="image"
                src={service.image}
                alt="Service"
                loading={"lazy"}
                width={500}
                height={500}
              />
              <h1>{service["partner_company"].name.slice(0, 15)}</h1>
              <div className="infos">
                <p>Ville : {service["partner_company"].city}</p>
                <p>Prix : {service.price} €</p>
              </div>
            </div>
          </LinkAccueil>
        ))
      ) : (
        <p>Aucun résultat</p>
      )}
      {/* {prestations.map((prestation: any, index: number) => (
                <div className='prestation' key={index}>
                    {prestation}
                </div>
            ))} */}
    </div>
  );
}
