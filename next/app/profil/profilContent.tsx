// @ts-nocheck
import * as React from "react";
import cookieCutter from "cookie-cutter";

import Button from "../../components/buttons/button";
import Input from "../../components/inputs/input";

import "../../public/scss/pages/profil/user/profilContent.scss";
import "../../public/scss/pages/profil/user/profilContentResponsive.scss";
import "../../public/scss/pages/profil/table.scss";

import { getMe, updateUser, fetchReservations } from "../../api/user";
import { format } from "date-fns";
import frLocale from "date-fns/locale/fr";

export default function ProfilUserContent() {
  const [showInfos, setShowInfos] = React.useState(false);
  const [showFavorites, setShowFavorites] = React.useState(false);
  const [showReservations, setShowReservations] = React.useState(false);
  const [showProfil, setShowProfil] = React.useState(true);

  const [userData, setUserData] = React.useState();
  const [modoClient, setModoClient] = React.useState(false);
  const [modoPartner, setModoPartner] = React.useState(false);

  const [userId, setUserId] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [address, setAddress] = React.useState();
  const [reservations, setReservations] = React.useState();

  const [responseForm, setResponseForm] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    const fetchUserData = async () => {
      const userToken = cookieCutter.get("SESSID");

      if (userToken !== null) {
        const getUserData = await getMe(userToken);
        const getUserReservations = await fetchReservations(userToken);

        if (getUserData.statusCode === 401) {
          window.location.href = "/connexion";
          console.log("Erreur");
          return;
        }

        setUserData(getUserData);
        setReservations(getUserReservations);
        console.log(getUserReservations);
        if (getUserData && getUserData["modo_client_company"])
          setModoClient(true);
        if (getUserData && getUserData["modo_partner_company"])
          setModoPartner(true);
        if (getUserData && getUserData["id"]) setUserId(getUserData["id"]);
      };
    }
    fetchUserData();
  }, []);

  const handleModifyUserSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const userToken = cookieCutter.get("SESSID");

    const userDataForModify = {
      id: userId,
      email: email,
      num_phone: phone,
      address: address,
    };

    if (userToken) {
      const response = await updateUser(userDataForModify, userToken);
      console.log(response);
      setResponseForm(response);
    }
  };

  const handleBackClick = () => {
    setShowReservations(false);
    setShowInfos(false);
  };

  if (showInfos) {
    return (
      <div className="profilContentInfos">
        <h1>Mes Informations</h1>
        <div className="credit">
          <span>{userData ? `${userData.credit_zen}` : "0"} €</span>
        </div>
        <div className="infos">
          <form
            action=""
            className="formInfos"
            onSubmit={handleModifyUserSubmit}
          >
            <p>Nom / Prénom</p>
            <Input
              placeHolder={
                userData ? `${userData.first_name} - ${userData.last_name}` : ""
              }
              className="inputForm"
              disabled={true}
            />
            <p>E-mail</p>
            <Input
              placeHolder={userData ? `${userData.email}` : ""}
              className="inputForm"
              name="email"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setEmail(e.target.value)}
            />
            <p>Numéro de téléphone</p>
            <Input
              placeHolder={userData ? `${userData.num_phone}` : ""}
              className="inputForm"
              name="phone"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setPhone(e.target.value)}
            />
            <p>Adresse</p>
            <Input
              placeHolder={userData ? `${userData.address}` : ""}
              className="inputForm"
              name="address"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setAddress(e.target.value)}
            />
            <Button text="Modifier" className="back submit" type="submit" />
          </form>
        </div>
        <p className="messageFlash back">
          {responseForm === 200 ? "Succès" : ""}
        </p>
        <Button text="Retour" className="back" onClick={handleBackClick} />
      </div>
    );
  }

  if (showReservations) {
    return (
      <div className="profilContentReservations">
        <h1>Vos Réservations</h1>
        <div className="infos">
          <table>
            <thead>
              <tr>
                <th scope="col">Salon</th>
                <th scope="col">Date</th>
                <th scope="col">Prix</th>
                <th scope="col">Status</th>
                <th scope="col">Annulé</th>
              </tr>
            </thead>
            {reservations
              ? reservations.map((reservation: any, index: number) => (
                <tbody key={reservation.id}>
                  <tr>
                    <td data-label="Salon">{reservation[
                      "partner_company"
                    ] ? `${reservation[
                      "partner_company"
                    ].name.slice(0, 15)}` : ''}</td>
                    <td data-label="Date">
                      {format(
                        new Date(reservation.started_at),
                        "dd MMMM yyyy",
                        { locale: frLocale }
                      )}
                    </td>
                    <td data-label="Prix">
                      {reservation["service"].price ? reservation["service"].price : ''} €
                    </td>
                    <td data-label="Status">
                      {reservation["accepted"] && reservation["done"] === true
                        ? "Fini"
                        : reservation["accepted"] === true
                          ? "Accepté"
                          : "En attente"}
                    </td>
                    <td data-label="Annulé">X</td>
                  </tr>
                </tbody>
              ))
              : ""}
          </table>
        </div>
        <Button text="Retour" className="back" onClick={handleBackClick} />
      </div>
    );
  }

  if (showProfil) {
    return (
      <div className="profilContentButtons">
        <h1>Mon compte</h1>
        <div className="credit">
          <span>{userData ? `${userData.credit_zen}` : "0"} €</span>
        </div>
        <div className="buttons">
          <Button
            text="Mes Informations"
            className=""
            onClick={() => {
              setShowInfos(true);
            }}
          />
          <Button text="Mes Favoris" className="" />
          <Button
            text="Mes Réservations"
            className=""
            onClick={() => {
              setShowReservations(true);
            }}
          />
          <Button text="Contact" className="" />
        </div>
      </div>
    );
  }
}
