"use client";

import * as React from "react";
import cookieCutter from "cookie-cutter";
import { getMe } from "../../../api/user";
import { updatePartner, getServices } from "../../../api/userPartner";
import { createService } from "../../../api/service";

import Button from "../../../components/buttons/button";
import Input from "../../../components/inputs/input";
import Calendar from "../../../components/calendar/calendarPartner";

import "../../../public/scss/pages/service/calendar/calendar.scss";
import "../../../public/scss/pages/profil/partenaire/profilContent.scss";
import "../../../public/scss/pages/profil/partenaire/profilContentResponsive.scss";
import "../../../public/scss/pages/profil/table.scss";

export default function ProfilEntrepriseContent() {
  const [showServices, setShowServices] = React.useState(false);
  const [showReservations, setShowReservations] = React.useState(false);
  const [showInfos, setShowInfos] = React.useState(false);
  const [showProfil, setShowProfil] = React.useState(true);

  const [userData, setUserData] = React.useState();
  const [partnerData, setPartnerData] = React.useState();
  const [modoClient, setModoClient] = React.useState(false);
  const [modoPartner, setModoPartner] = React.useState(false);

  const [partnerCompanyId, setPartnerCompanyId] = React.useState();
  const [partnerCompanyAddress, setPartnerCompanyAddress] = React.useState();
  const [partnerCompanyCity, setPartnerCompanyCity] = React.useState();
  const [partnerCompanyCodePostal, setPartnerCompanyCodePostal] =
    React.useState();
  const [partnerCompanyPhone, setPartnerCompanyPhone] = React.useState();

  const [partnerServices, setPartnerServices] = React.useState();
  const [responseForm, setResponseForm] = React.useState();

  const [nameService, setNameService] = React.useState();
  const [priceService, setPriceService] = React.useState();
  const [descriptionService, setDescriptionService] = React.useState();
  const [averageTimeService, setAverageTimeService] = React.useState();
  const [categoryService, setCategoryService] = React.useState();

  React.useEffect(() => {
    const fetchUserAndPartnerData = async () => {
      const userToken = cookieCutter.get("SESSID");

      const getUserData = await getMe(userToken);

      if (getUserData.statusCode === 401) {
        window.location.href = "/connexion";
        console.log("Erreur");
        return;
      }

      if (getUserData && getUserData["modo_client_company"])
        setModoClient(true);
      if (getUserData && getUserData["modo_partner_company"])
        setModoPartner(true);
      if (getUserData && getUserData["partner_company"]["id"])
        setPartnerCompanyId(getUserData["partner_company"]["id"]);
      setUserData(getUserData);

      if (getUserData["partner_company"]["id"] !== undefined) {
        const services = await getServices(
          getUserData["partner_company"]["id"],
          userToken
        );
        setPartnerServices(services);
      }

      setPartnerData(getUserData["partner_company"]);
    };

    fetchUserAndPartnerData();
  }, []);

  const handleModifyPartnerSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const userToken = cookieCutter.get("SESSID");

    const partnerDataForModify = {
      id: partnerCompanyId,
      num_phone: partnerCompanyPhone,
      address: partnerCompanyAddress,
      city: partnerCompanyCity,
      code_postal: partnerCompanyCodePostal,
    };
    const response = await updatePartner(partnerDataForModify, userToken);

    setResponseForm(response);
  };

  const handleAddServiceSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const userToken = cookieCutter.get("SESSID");
    const serviceData = {
      name: nameService,
      price: priceService,
      average_time: averageTimeService,
      partner_company: partnerCompanyId,
      code_postal: partnerCompanyCodePostal,
      category_service: null,
    };
    const response = await createService(userToken, serviceData);

    setResponseForm(response);
  };

  const handleBackClick = () => {
    setShowReservations(false);
    setShowServices(false);
    setShowInfos(false);
  };

  if (showReservations) {
    return (
      <div className="calendarReactUserSide">
        <h1 className="titleReservations">Vos Réservations</h1>
        <p className="disclaimer">
          Veillez à rentrer vos reservations dans la partie DAY
        </p>
        {partnerCompanyId ? <Calendar partnerId={partnerCompanyId} /> : ""}
        <div className="divForButton">
          <Button
            text="Retour"
            className="buttonBack"
            onClick={handleBackClick}
          />
        </div>
      </div>
    );
  }

  if (showServices) {
    return (
      <div className="profilContentServices">
        <h1>Vos Services</h1>
        <div className="infos">
          <table>
            <thead>
              <tr>
                <th scope="col">Catégorie</th>
                <th scope="col">Nom</th>
                <th scope="col">Prix</th>
                <th scope="col">Temps Moyen</th>
              </tr>
            </thead>
            {partnerServices
              ? partnerServices.map((partnerService: any, index: number) => (
                  <tbody key={partnerService.id}>
                    <tr>
                      <td data-label="Categorie">{partnerService.category}</td>
                      <td data-label="Nom">{partnerService.name}</td>
                      <td data-label="Prix">{partnerService.price} €</td>
                      <td data-label="Temps moyen">
                        {partnerService.average_time}
                      </td>
                    </tr>
                  </tbody>
                ))
              : ""}
          </table>
        </div>
        <Button text="Retour" className="back" onClick={handleBackClick} />
        <div className="form">
          <form
            action=""
            className="formInfos"
            onSubmit={handleAddServiceSubmit}
          >
            <p>Nom du service</p>
            <Input
              className="inputForm"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setNameService(e.target.value)}
            />
            <p>Prix</p>
            <Input
              className="inputForm"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setPriceService(e.target.value)}
            />
            <p>Description</p>
            <Input
              className="inputForm"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setDescriptionService(e.target.value)}
            />
            <p>Temps moyen</p>

            <select
              name="category"
              id="category"
              className="activite"
              value={averageTimeService}
              onChange={(e) => setAverageTimeService(e.target.value)}
            >
              <option value="">Choisissez</option>
              <option value="1 h">1 h</option>
              <option value="2 h">2 h</option>
              <option value="30 min">30 min</option>
              <option value="10 min">10min</option>
            </select>
            <p>Catégorie</p>
            <select
              name="category"
              id="category"
              className="activite"
              value={categoryService}
              onChange={(e) => setCategoryService(e.target.value)}
            >
              <option value="">Choisissez</option>
              <option value="Coiffure">Coiffure</option>
              <option value="Spa">Spa</option>
              <option value="Manucure">Manucure</option>
              <option value="Massage">Massage</option>
              <option value="Yoga">Yoga</option>
              <option value="Musculation">Musculation</option>
            </select>
            <Button
              text="Ajouter un service"
              className="back submit"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }

  if (showInfos) {
    return (
      <div className="profilContentInfos">
        <h1>Informations Entreprise</h1>
        <div className="infos">
          <form
            action=""
            className="formInfos"
            onSubmit={handleModifyPartnerSubmit}
          >
            <p>Nom d&apos;entreprise</p>
            <Input
              placeHolder={partnerData ? `${partnerData.name}` : ""}
              className="inputForm"
              disabled={true}
            />
            <p>Numéro de téléphone</p>
            <Input
              placeHolder={partnerData ? `${partnerData.num_phone}` : ""}
              className="inputForm"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setPartnerCompanyPhone(e.target.value)}
            />
            <p>Adresse</p>
            <Input
              placeHolder={partnerData ? `${partnerData.address}` : ""}
              className="inputForm"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setPartnerCompanyAddress(e.target.value)}
            />
            <p>Ville</p>
            <Input
              placeHolder={partnerData ? `${partnerData.city}` : ""}
              className="inputForm"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setPartnerCompanyCity(e.target.value)}
            />
            <p>Code Postal</p>
            <Input
              placeHolder={partnerData ? `${partnerData.code_postal}` : ""}
              className="inputForm"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setPartnerCompanyCodePostal(e.target.value)}
            />
            <Button text="Modifier" className="back submit" type="submit" />
          </form>
        </div>
        <Button text="Retour" className="back" onClick={handleBackClick} />
      </div>
    );
  }

  if (showProfil) {
    return (
      <div className="profilContentButtons">
        <h1>Zenefy PRO | Partenaire</h1>
        <div className="buttons">
          <Button
            text="Calendrier de réservations"
            className=""
            onClick={() => {
              setShowReservations(true);
            }}
          />
          <Button
            text="Vos services"
            className=""
            onClick={() => {
              setShowServices(true);
            }}
          />
          <Button
            text="Informations Entreprise"
            className=""
            onClick={() => {
              setShowInfos(true);
            }}
          />
        </div>
      </div>
    );
  }
}
