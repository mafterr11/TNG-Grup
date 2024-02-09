import {
  LiaBedSolid,
  LiaBathSolid,
  LiaRulerCombinedSolid,
  LiaDraftingCompassSolid,
  LiaBriefcaseMedicalSolid,
} from "react-icons/lia";
import { FaPeopleRoof } from "react-icons/fa6";


export const proiecte = [
  // Snagov
  {
    nume: "Locuința Unifamilială Parter - Snagov",
    imagine: {
      prezentare: "/portofoliu/snagov/main.webp",
      extra1: "/portofoliu/snagov/1.webp",
      extra2: "/portofoliu/snagov/2.webp",
      extra3: "/portofoliu/snagov/3.webp",
      extra4: "/portofoliu/snagov/4.webp",
      extra5: "/portofoliu/snagov/5.webp",
      extra6: "/portofoliu/snagov/6.webp",
    },
    detalii: {
      numarDormitoare: 3,
      iconDormitoare: <LiaBedSolid />,
      tipDormitoare: "Dormitoare",
      numarBai: 2,
      iconBai: <LiaBathSolid />,
      tipBai: "Băi",
      numarAmprentaLaSol: 185,
      iconAmprentaLaSol: <LiaDraftingCompassSolid />,
      numarMpUtili: 152,
      iconMpUtili: <LiaRulerCombinedSolid />,
      descriere:
        "În cadrul contractului, Beneficiarul a dorit construirea unei locuințe de vacanță cu regim de înălțime Parter. Datorită limitărilor de buget ale Clientului, contractul a avut ca obiect doar realizarea structurii de rezistență, a instalațiilor sanitare, termice și realizarea tencuielilor interioare.",
    },
  },
  // Aftercare
  {
    nume: "Amenajare Interioară After School",
    imagine: {
      prezentare: "/portofoliu/aftercare/main.webp",
      extra1: "/portofoliu/aftercare/1.webp",
      extra2: "/portofoliu/aftercare/2.webp",
      extra3: "/portofoliu/aftercare/3.webp",
      extra4: "/portofoliu/aftercare/4.webp",
      extra5: "/portofoliu/aftercare/5.webp",
      extra6: "/portofoliu/aftercare/6.webp",
    },
    detalii: {
      numarDormitoare: 3,
      iconDormitoare: <FaPeopleRoof />,
      tipDormitoare: "Grupe",
      numarBai: 2,
      iconBai: <LiaBathSolid />,
      tipBai: "Grp. Sanitare",
      numarAmprentaLaSol: 220,
      iconAmprentaLaSol: <LiaDraftingCompassSolid />,
      numarMpUtili: 220,
      iconMpUtili: <LiaRulerCombinedSolid />,
      descriere:
        "În cadrul contractului, Beneficiarul a dorit reamenajarea unui spațiu comercial pentru deschiderea unei noi locații After School. Obiectul contractului a avut ca scop desfacerea instalațiilor industriale existente, reconfigurarea spațiilor interioare, refacerea finisajelor și amenajarea interioară a spațiului (mobilier, colantări, curățenie, etc.), până la darea în folosință.",
    },
  },
  // Clinica
  {
    nume: "Amenajare Interioară Clinică Privată Medicală",
    imagine: {
      prezentare: "/portofoliu/clinica/main.webp",
      extra1: "/portofoliu/clinica/1.webp",
      extra2: "/portofoliu/clinica/2.webp",
      extra3: "/portofoliu/clinica/3.webp",
      extra4: "/portofoliu/clinica/4.webp",
      extra5: "/portofoliu/clinica/5.webp",
      extra6: "/portofoliu/clinica/6.webp",
    },
    detalii: {
      numarDormitoare: 3,
      iconDormitoare: <LiaBriefcaseMedicalSolid />,
      tipDormitoare: "Cabinete",
      numarBai: 2,
      iconBai: <LiaBathSolid />,
      tipBai: "Grp. Sanitare",
      numarAmprentaLaSol: 240,
      iconAmprentaLaSol: <LiaDraftingCompassSolid />,
      numarMpUtili: 190,
      iconMpUtili: <LiaRulerCombinedSolid />,
      descriere:
        "În cadrul contractului, s-au realizat lucrări de amenajări interioare pentru reconfigurarea spațiului comercial într-o clinică medicală. Obiectul contractului a avut ca scop refacerea instalațiilor sanitare, termice și electrice, recompartimentări interioare cu pereți de gips carton/sticlă, finisaje interioare și exterioare.",
    },
  },
  // Hala
  {
    nume: "Realizare Hală Industrială cu Funcțiunea de Hangar",
    imagine: {
      prezentare: "/portofoliu/hala/main.webp",
      extra1: "/portofoliu/hala/1.webp",
      extra2: "/portofoliu/hala/2.webp",
      extra3: "/portofoliu/hala/3.webp",
      extra4: "/portofoliu/hala/4.webp",
      extra5: "/portofoliu/hala/5.webp",
      extra6: "/portofoliu/hala/6.webp",
    },
    detalii: {
      numarDormitoare: "-",
      iconDormitoare: <LiaBedSolid />,
      tipDormitoare: "Fara",
      numarBai: "-",
      iconBai: <LiaBathSolid />,
      tipBai: "Fara",
      numarAmprentaLaSol: "10.500",
      iconAmprentaLaSol: <LiaDraftingCompassSolid />,
      numarMpUtili: "10.500",
      iconMpUtili: <LiaRulerCombinedSolid />,
      descriere:
        "Obiectul contractului a avut ca scop realizarea Managementului de Proiect, a organizării execuției și verificarea progresului investiției în parteneriat cu Antreprenorul General, pentru lucrările de Structură și Închideri/Compartimentări.",
    },
  },
];
