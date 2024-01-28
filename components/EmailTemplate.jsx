import * as React from "react";

export const EmailTemplate = ({
  nume,
  prenume,
  email,
  telefon,
  constructie,
  judet,
  inceput,
  etapa,
  mesaj,
}) => (
  <div>
    <h1>
      Solicitare noua de oferta - TNG GRUP!
    </h1>
    <p>Nume complet: {nume} {prenume}</p>
    <p>Email: {email}</p>
    <p>Telefon: {telefon}</p>
    <p>Tipul de constructie: {constructie}</p>
    <p>In ce judet: {judet}</p>
    <p>Cand vrem sa incepem: {inceput}</p>
    <p>Etapa in care suntem: {etapa}</p>
    <p>Mesaj: {mesaj}</p>
  </div>
);
