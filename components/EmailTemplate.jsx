import * as React from "react";

export const EmailTemplate = ({
  nume,
  prenume,
  email,
  telefon,
  constructie,
  judet,
  inceput,
  mesaj,
}) => (
  <div>
    <h1>Solicitare noua de oferta - TNG GRUP!</h1>
    <p>
      Nume complet: {nume} {prenume}
    </p>
    <p>Email: {email}</p>
    <p>Telefon: {telefon}</p>
    <p>Tipul de construcție: {constructie}</p>
    <p>În ce județ: {judet}</p>
    <p>Când vrem să începem: {inceput}</p>
    <p>Mesaj: {mesaj}</p>
  </div>
);
