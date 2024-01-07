import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-grey shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-accent">Solicitați o ofertă</h2>
      <form className="mt-4 space-y-4">
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
            <Input id="email" placeholder="Email" type="email" />
          </div>
          <div>
            <Label htmlFor="telefon">Telefon</Label>
            <Input id="telefon" placeholder="Telefon" />
          </div>
        </div>
        <div>
          <Label htmlFor="constructie">Ce doriți să construiți?</Label>
          <Select>
            <SelectTrigger id="constructie">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
            <SelectItem value='Construcții Civile - Parter'>
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
        <div>
          <Label htmlFor="judet">În ce județ va fi construcția?</Label>
          <Select>
            <SelectTrigger id="judet">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
            <SelectItem value='București'>București</SelectItem>
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
        <div>
          <Label htmlFor="inceput">Când v-ați dori să începeți construcția?</Label>
          <Select>
            <SelectTrigger id="inceput">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
            <SelectItem value='Cât mai repede'>Cât mai repede</SelectItem>
              <SelectItem value='În următoarele 6 luni'>În următoarele 6 luni</SelectItem>
              <SelectItem value='Nu m-am hotărât încă'>Nu m-am hotărât încă</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="etapa">În ce etapă sunteți?</Label>
          <Select>
            <SelectTrigger id="etapa">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
            <SelectItem value='Urmează să cumpăr terenul'>Urmează să cumpăr terenul</SelectItem>
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
        <div className="text-right">
          <Button variant="orange" size="full">Trimite</Button>
        </div>
      </form>
    </div>
  )
}
