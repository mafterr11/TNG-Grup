"use client"
import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { DrawerClose } from "./ui/drawer"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function SolicitatiOfertaForm({ onClose }) {
  const [constructie, setConstructie] = useState('');
  const [judet, setJudet] = useState('');
  const [inceput, setInceput] = useState('');
  const [etapa, setEtapa] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      nume: event.target.nume.value,
      prenume: event.target.prenume.value,
      email: event.target.email.value,
      telefon: event.target.telefon.value,
      mesaj: event.target.mesaj.value,
    };

    const emailBody = `Nume: ${formData.nume}\n` +
                      `Prenume: ${formData.prenume}\n` +
                      `Email: ${formData.email}\n` +
                      `Telefon: ${formData.telefon}\n` +
                      `Constructie: ${constructie}\n` +
                      `Judet: ${judet}\n` +
                      `Inceput: ${inceput}\n` +
                      `Etapa: ${etapa}\n` +
                      `Mesaj: ${formData.mesaj}`;

    window.location.href = `mailto:mafterr11@gmail.com?subject=Solicitare Oferta&body=${encodeURIComponent(emailBody)}`;
  };
  
  return (
    <div className="xl:max-w-lg lg:max-w-md md:max-w-sm mx-auto p-6 bg-grey shadow-md rounded-lg overflow-auto">
      <h2 className="text-xl font-semibold text-accent">Solicitați o ofertă</h2>
      <form className="mt-4 space-y-2 xs:space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nume">Nume</Label>
            <Input id="nume" placeholder="Nume" />
          </div>
          <div>
            <Label htmlFor="prenume">Prenume</Label>
            <Input id="prenume" placeholder="Prenume" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="Email" type="email" autoComplete="email" />
          </div>
          <div>
            <Label htmlFor="telefon">Telefon</Label>
            <Input id="telefon" placeholder="Telefon" />
          </div>
        </div>
        {/* Intrebarea 1 */}
        <div>
          <Label htmlFor="constructie">Ce doriți să construiți?</Label>
          <Select onValueChange={setConstructie} id="constructie" name="constructie">
            <SelectTrigger id="constructie">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
            <SelectItem name="constructie" value='Construcții Civile - Parter'>
                Construcții Civile - Parter
              </SelectItem>
              <SelectItem value='Construcții Civile - Cu Etaj'>
                Construcții Civile - Cu Etaj
              </SelectItem>
              <SelectItem value='Construcții Industriale'>
                Construcții Industriale
              </SelectItem>
              <SelectItem value='Agricole'>Agricole</SelectItem>
              <SelectItem value='Diriginte De Șantier'>
                Diriginte De Șantier
              </SelectItem>
              <SelectItem value='Altceva'>Altceva</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Intrebarea 2 */}
        <div>
          <Label htmlFor="judet">În ce județ va fi construcția?</Label>
          <Select onValueChange={setJudet} id="judet" name="judet">
            <SelectTrigger id="judet">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
            <SelectItem name="judet" value='București'>București</SelectItem>
              <SelectItem value='Ilfov'>Ilfov</SelectItem>
              <SelectItem value='Alba'>Alba</SelectItem>
              <SelectItem value='Arad'>Arad</SelectItem>
              <SelectItem value='Argeș'>Argeș</SelectItem>
              <SelectItem value='Bacău'>Bacău</SelectItem>
              <SelectItem value='Bihor'>Bihor</SelectItem>
              <SelectItem value='Bistrița-Năsăud'>Bistrița-Năsăud</SelectItem>
              <SelectItem value='Botoșani'>Botoșani</SelectItem>
              <SelectItem value='Brăila'>Brăila</SelectItem>
              <SelectItem value='Brașov'>Brașov</SelectItem>
              <SelectItem value='Buzău'>Buzău</SelectItem>
              <SelectItem value='Călărași'>Călărași</SelectItem>
              <SelectItem value='Caraș-Severin'>Caraș-Severin</SelectItem>
              <SelectItem value='Cluj'>Cluj</SelectItem>
              <SelectItem value='Constanța'>Constanța</SelectItem>
              <SelectItem value='Covasna'>Covasna</SelectItem>
              <SelectItem value='Dâmbovița'>Dâmbovița</SelectItem>
              <SelectItem value='Dolj'>Dolj</SelectItem>
              <SelectItem value='Galați'>Galați</SelectItem>
              <SelectItem value='Giurgiu'>Giurgiu</SelectItem>
              <SelectItem value='Gorj'>Gorj</SelectItem>
              <SelectItem value='Harghita'>Harghita</SelectItem>
              <SelectItem value='Hunedoara'>Hunedoara</SelectItem>
              <SelectItem value='Ialomița'>Ialomița</SelectItem>
              <SelectItem value='Iași'>Iași</SelectItem>
              <SelectItem value='Maramureș'>Maramureș</SelectItem>
              <SelectItem value='Mehedinți'>Mehedinți</SelectItem>
              <SelectItem value='Mureș'>Mureș</SelectItem>
              <SelectItem value='Neamț'>Neamț</SelectItem>
              <SelectItem value='Olt'>Olt</SelectItem>
              <SelectItem value='Prahova'>Prahova</SelectItem>
              <SelectItem value='Sălaj'>Sălaj</SelectItem>
              <SelectItem value='Satu Mare'>Satu Mare</SelectItem>
              <SelectItem value='Sibiu'>Sibiu</SelectItem>
              <SelectItem value='Suceava'>Suceava</SelectItem>
              <SelectItem value='Teleorman'>Teleorman</SelectItem>
              <SelectItem value='Timiș'>Timiș</SelectItem>
              <SelectItem value='Tulcea'>Tulcea</SelectItem>
              <SelectItem value='Vaslui'>Vaslui</SelectItem>
              <SelectItem value='Vâlcea'>Vâlcea</SelectItem>
              <SelectItem value='Vrancea'>Vrancea</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Intrebarea 3 */}
        <div>
          <Label htmlFor="inceput" className="leading-5">Când v-ați dori să începeți construcția?</Label>
          <Select onValueChange={setInceput} id="inceput" name="inceput">
            <SelectTrigger id="inceput">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
            <SelectItem name="inceput" value='Cât mai repede'>Cât mai repede</SelectItem>
              <SelectItem value='În următoarele 6 luni'>În următoarele 6 luni</SelectItem>
              <SelectItem value='Nu m-am hotărât încă'>Nu m-am hotărât încă</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Intrebarea 4 */}
        <div>
          <Label htmlFor="etapa">În ce etapă sunteți?</Label>
          <Select onValueChange={setEtapa} id="etapa" name="etapa">
            <SelectTrigger id="etapa">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
            <SelectItem name="etapa" value='Urmează să cumpăr terenul'>Urmează să cumpăr terenul</SelectItem>
              <SelectItem value='Este planificată elaborarea proiectului'>Este planificată elaborarea proiectului</SelectItem>
              <SelectItem value='Sunt în proces de a căpăta autorizația'>Sunt în proces de a căpăta autorizația</SelectItem>
              <SelectItem value='Am obținut autorizația'>Am obținut autorizația</SelectItem>
              <SelectItem value='Construcția a început deja'>Construcția a început deja</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="mesaj">Mesaj</Label>
          <Textarea id="mesaj" placeholder="Introduceți mesajul aici." />
        </div>
        <div className="text-right flex gap-x-4">
          <Button type="submit" variant="orange" size="full">Trimite</Button>
          <DrawerClose asChild>
          <Button variant="orange" size="full" onClick={onClose}>Închide</Button>
        </DrawerClose>
        </div>
      </form>
    </div>
  )
}

