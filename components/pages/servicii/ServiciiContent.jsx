"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ServiciiContent = () => {
  return (
    <>
      {/* Header */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="mb-[4rem] text-center xl:mb-[13rem]"
      >
        <h3 className="leading-relaxed text-accent">
          Construiește Visul Tău Alături De Noi
        </h3>
        <h3 className="text-2xl font-normal text-white/90">
          Transformăm Viziunea Ta în Realitate cu Inovație, Siguranță și
          Personalizare
        </h3>
      </motion.div>
      {/* Content container */}
      <div className="mx-auto px-3 md:px-6 xl:w-[90%]">
        {/* Execuție construcții civile 1 */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-44 scroll-mt-40 xl:scroll-mt-32"
          id="execuție-construcții-civile"
        >
          <h3 className="mb-12 text-center text-2xl text-accent xl:text-start">
            Execuție Construcții Civile - Precizie și Siguranță
          </h3>
          <p>
            <span className="text-accent">&#9679;</span> Proiectele noastre sunt
            realizate cu precizie pentru fiecărui proiect, de aceea, punem un
            accent deosebit pe consultări detaliate și o colaborare strânsă. Ne
            dedicăm să stabilim discuții și întâlniri regulate cu dumneavoastră,
            asigurându-ne că fiecare detaliu al visului dvs. devine realitate.
          </p>
          <p>
            <span className="text-accent">&#9679;</span> Avem toate
            instrumentele necesare pentru a demara lucrările, garantând
            conformitatea cu cele mai recente standarde legislative. Ne dedicăm
            verificării minuțioase a fiecărui detaliu in timpul execuție, cu
            scopul de a preveni orice potențială problemă. Astfel, ne asigurăm
            că proiectul dvs. avansează fără întârzieri sau complicații.
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">
              Suntem mereu la curent
            </span>{" "}
            cu cele mai noi tendințe din domeniul construcțiilor civile,
            asigurându-ne că fiecare proiect pe care îl executăm are un caracter
            unic și un plus de strălucire. Ne dedicăm îmbunătățirii continue a
            serviciilor noastre, adoptând cele mai eficiente și inovative
            tehnici de lucru. Suntem pregătiți să răspundem chiar și celor mai
            complexe cerințe, demonstrând flexibilitatea și versatilitatea
            noastră în orice proiect.
          </p>
          {/* Accordion Container*/}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
          >
            <h3 className="mt-8 text-center text-2xl text-accent xl:text-start">
              Ce garanții oferim?
            </h3>
            {/* Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start text-lg">
                  Materiale premium, certificate
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Folosim doar
                    alternative durabile, care garantează utilizări îndelungate
                    și capacitatea de a rezista condițiilor meteo extreme și
                    factorilor de uzură și degradare.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Ne pliem pe
                    bugetul clientului, pentru a putea îmbina cu succes utilul
                    cu plăcutul.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-start text-lg">
                  Grade sporite de siguranță
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Cu ani de
                    experiență în construcții, garantăm execuția proiectelor cu
                    maximă siguranță și confort. Ne bazăm pe tehnici inovatoare
                    și echipament de protecție de top, eliminând riscurile și
                    asigurând calitatea superioară a lucrărilor noastre.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Alegeți
                    experiența și dedicarea pentru un rezultat excepțional în
                    construcții.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-start text-lg">
                  Asistență tehnică pe parcursul etapelor de execuție
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Suntem precauți
                    și dornici să eliminăm din start orice inconvenient tehnic
                    care ar putea apărea pe parcursul planului de execuție.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
        {/* Execuție construcții industriale 2 */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-32 scroll-mt-28 xl:scroll-mt-32"
          id="execuție-construcții-industriale"
        >
          <h3 className="mb-12 text-center text-2xl text-accent xl:text-start">
            Execuție Construcții Industriale
          </h3>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">
              Datorită experienței noastre în domeniul construcțiilor
              industriale
            </span>
            , vă oferim soluția perfectă. Fiecare proiect este unic, indiferent
            dacă se referă la depozitarea utilajelor sau la creșterea
            animalelor, fabrici, depozite de cereale, etc., fiecare proiect și
            fiecare situație necesită o abordare individuală. Clădirile
            industriale sunt clădiri care trebuie să îndeplinească un set de
            condiții tehnice printre care: durabilitate, rezistență și
            stabilitate, rezistența la foc etc. În orice afacere, oamenii fac
            diferența. Noi ne mândrim cu angajații noștri și îi încurajăm să
            aibă un sentiment de proprietate în munca lor. Valorile, efortul
            echipei și o atitudine specifică misiunii, orientate către
            obiective, reprezintă competențele noastre cele mai distinctive.
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">
              Derularea activităților în conformitate cu cele mai înalte
              standarde de siguranță și funcționalitate
            </span>{" "}
            - Respectăm întocmai toate prevederile de natură legală și suntem la
            curent cu eventualele modificări care apar. Pentru noi, e foarte
            important ca toți cei care își desfășoară activitatea în construcția
            industrială să se bucure de confort sporit și siguranță.
          </p>
          <p>
            <span className="text-accent">&#9679;</span> În ceea ce privește
            gama propriu-zisă de servicii mizăm de fiecare dată pe importanță{" "}
            <span className="font-bold text-accent">multifuncționalității</span>
            . Astfel, oferim:
          </p>
          <p>- Hale metalice</p>
          <p>- Hale prefabricate</p>
          {/* Accordion Container*/}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
          >
            <h3 className="mt-8 text-center text-2xl text-accent xl:text-start">
              Ce avantaje îți oferim?
            </h3>
            {/* Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start text-lg">
                  Discuții constante și implementarea rapidă a feedback-ului
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Nu e nevoie să
                    ne vizitezi mereu pentru a te asigura că totul este în
                    conformitate cu planul tehnic. Putem stabili discuții
                    telefonice pentru a dezbate ultimele stadii ale proiectului.
                    În cazul în care este necesar, poți face orice modificare
                    îți dorești în ceea ce privește construcția.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Noi ne vom
                    asigura că feedback-ul tău va fi implementat cât mai repede
                    posibil. Același principiu se aplică și în cazul unui
                    proiect casă sau a unuia agricol.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-start text-lg">
                  O durată de viață îndelungată a proiectului
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Indiferent de
                    caracteristicile locului în care se află construcția, noi ne
                    asigurăm că poate rezista atât factorilor interni, cât și
                    externi de uzură. Folosim doar materiale care dispun de
                    proprietăți chimice și mecanice excelente.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Ne dorim ca
                    rezultatul final să fie o investiție pe termen lung, nu una
                    care să necesite în mod constant modificări. Tocmai de
                    aceea, aplicăm metode ingenioase de lucru și folosim
                    avantajele numeroase pe care le oferă tehnologiile de ultimă
                    generație.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-start text-lg">
                  O colaborare presărată marcată de eficiență
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Ne dorim să
                    încheiem colaborări profitabile, care să se ridice la
                    nivelul așteptărilor și al investiției. Tocmai de aceea
                    punem la bătaie toate resursele de care dispunem și creăm
                    premisele unei comunicări transparente. Expunem cu
                    sinceritate toate detaliile de care nevoie beneficiarul.
                    Simplu și eficient!
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
        {/* Supervizare lucrări de execuție 3 */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-32 scroll-mt-[5.5rem] xl:scroll-mt-32"
          id="supervizare-lucrări-de-execuție"
        >
          <h3 className="mb-12 text-center text-2xl text-accent xl:text-start">
            Supervizare Lucrări de Execuție
          </h3>
          <p>
            Ne dorim să punem la dispoziție clienților clădiri perfect
            funcționale, dar și elemente de design inedite. În plus,{" "}
            <span className="font-bold text-accent">experiența acumulată</span>{" "}
            de-a lungul timpului este cea care ne ajută să oferim rezultate
            profesionale, indiferent de gradul de complexitate implicat.
          </p>
          <p className="mb-4">
            Asigurăm monitorizare tehnică pe tot parcursul derulării etapelor de
            execuție, tocmai pentru a oferi standarde înalte de:
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">Siguranță</span> - Fără
            serviciile de supervizare a unei lucrări de execuție, gradul de
            apariție a problemelor tehnice este destul de ridicat. Știm că orice
            greșeală, indiferent de cât de mică și nesemnificativă ar părea la
            prima vedere, poate destabiliza echilibrul întregului proiect.
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">Confort</span> - nu trebuie
            să-ți mai faci griji în ceea ce privește asigurarea materialelor și
            monitorizarea specialiștilor care se ocupă de execuție.{" "}
            <span className="font-bold text-accent">
              Vei putea vizualiza stadiul evoluției clădirii ori de câte ori îți
              dorești
            </span>
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">Durabilitate </span> -
            Scopul activităților de supervizare au în prim plan respectarea
            întocmai a cerințelor specificate în proiectul tehnic. Echipa care
            se ocupă de monitorizarea lucrării va analiza îndeaproape fiecare
            aspect si va lua în considerare, de asemenea, reglementările aflate
            în vigoare.{" "}
            <span className="font-bold text-accent">
              Ne asigurăm că respectiva construcție poate garanta grade sporite
              de rezistență.
            </span>
          </p>
          {/* Accordion Container */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
          >
            <h3 className="mt-8 text-center text-2xl text-accent xl:text-start">
              Cum se derulează totul?
            </h3>
            <p>
              Suntem gata să ducem la bun sfârșit proiecte complexe, care să-ți
              ofere standarde înalte de:
            </p>
            {/* Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start text-lg">
                  În primă fază
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Vom discuta pe
                    larg cu beneficiarul pentru a înțelege care sunt așteptările
                    sale în materie de costuri și investiții ulterioare. Noi ne
                    dorim să optimizăm toate resursele implicate în proces și să
                    oferim clientului șansa de a se bucura de un raport
                    calitate-preț excelent.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Indiferent că e
                    vorba de un proiect casă simplă sau o hală industrială, la
                    final, când tragem linie, ne dorim să avem parte de feedback
                    pozitiv.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-start text-lg">
                  Mai apoi
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Vom integra
                    toate detaliile în programe de specialitate pentru a avea o
                    perspectivă cât mai nuanțată asupra proiectului. Integrăm
                    atât timpul estimat, cât și costurile preconizate pentru a
                    ne ocupa așa cum trebuie de managerierea eficientă.
                    Planificăm detaliile în așa fel încât să garantăm standarde
                    înalte de eficiență, calitate și siguranță.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Luăm în calcul
                    toate riscurile care pot apărea pe parcurs pentru a elimina
                    din start un posibil eșec.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-start text-lg">
                  Trecem la munca propriu-zisă
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Verificăm
                    calitatea materialelor și a tehnicilor de lucru executate
                    sau care se află în curs de execuție. Mizăm exclusiv pe
                    avantajele opțiunilor de calitate superioară pentru a ne
                    asigura de funcționalitatea construcției, fie civilă sau
                    industrială. Supraveghem progresul lucrărilor și rezolvăm
                    toate problemele tehnice și organizatorice care pot apărea.
                    Reacționăm bine în situații de stres sau urgență și asigurăm
                    conformitatea cu proiectul și normele aplicabile.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Ne ocupăm cu
                    atenție de tot ce presupune activitatea de supervizare
                    lucrări de execuție. Garantăm succesul oricărui proiect,
                    indiferent de complexitatea pe care o prezintă. Ne asigurăm
                    că locuința excelează atât din punct de vedere funcțional,
                    cât și tehnic. Integrăm toate cerințele specificate de
                    client în planuri și tabele detaliate pentru a optimiza
                    toate costurile implicate.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
        {/* Verificare calitate lucrări în execuție 3 */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-32 scroll-mt-28 xl:scroll-mt-32"
          id="verificare-calitate-lucrări-în-execuție"
        >
          <h3 className="mb-12 text-center text-2xl text-accent xl:text-start">
            Verificarea Calitații Lucrărilor în Execuție
          </h3>
          <p>
            Persoana care se ocupă de verificare este fie responsabilul
            execuției, fie un diriginte de șantier autorizat. Indiferent de
            funcția tehnică pe care o deține,{" "}
            <span className="font-bold text-accent">specialistul nostru</span>{" "}
            va analiza îndeaproape etapele de execuție și se va asigura de
            calitatea lucrării. Toate activitățile aferente unei asemenea
            sarcini respectă întocmai cerințele prevăzute în legea nr. 10/1995.
          </p>
          <p className="mb-4">
            Responsabilul pentru serviciul de verificare a calității lucrărilor
            în execuție îndeplinește numeroase funcții, printre care se numără:
          </p>
          <p>
            <span className="text-accent">&#9679;</span> Se{" "}
            <span className="font-bold text-accent">asigură</span> că știe toate
            detaliile care alcătuiesc proiectul tehnic. Fără asemenea informații
            nu ar putea să ajungă la grade sporite de siguranță, precizie și
            funcționalitate.
          </p>
          <p>
            <span className="text-accent">&#9679;</span>Verifică, de asemenea,
            existența procedurilor de efectuare a lucrărilor corespunzătoare
            caietelor de sarcini din proiectul tehnic. Este la curent cu
            graficele de realizare ale investiţiei. În plus,{" "}
            <span className="font-bold text-accent">
              pune la dispoziția clientului
            </span>{" "}
            toate documentele care atestă calitatea lucrărilor de execuție.
          </p>
          <p>
            <span className="text-accent">&#9679;</span> Participă activ la
            toate fazele de verificare a procesului de execuție.{" "}
            <span className="font-bold text-accent">Face vizite</span> în mod
            regulat pe șantier pentru a se asigura că toate activitățile
            derulate respectă întocmai prevederile de natură legislativă.
          </p>
          {/* Accordion Container */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
          >
            <h3 className="mt-8 text-center text-2xl text-accent xl:text-start">
              De ce să alegi serviciul de verificare calitate lucrări în
              execuție?
            </h3>
            <p>
              Ne ocupăm de efectuarea chiar și celor mai complexe proiecte, fie
              că e vorba de construcții civile, agricole sau industriale. Gama
              noastră de proiecte impresionează atât prin designul inedit, cât
              și prin gradele sporite de siguranță și confort pe care le oferă.
            </p>
            {/* Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start text-lg">
                  Comunicare transparentă
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Pe tot
                    parcursul proceselor de proiectare și execuție planificăm în
                    mod constant discuții telefonice sau, după caz, întâlniri
                    fizice pentru a clarifica eventuale nelămuriri sau a
                    planifica următorul stadiu de evoluție al construcției.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Oferim doar
                    soluții personalizate, tocmai de aceea ne asigurăm că avem
                    toate detaliile despre ceea ce își dorește beneficiarul.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-start text-lg">
                  Un spațiu perfect funcțional
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Verificăm
                    îndeaproape calitatea proiectelor pentru a-ți oferi șansa de
                    a te bucura de investiția ta.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-start text-lg">
                  Siguranță garantată, indiferent de stadiul lucrării
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Cunoaștem
                    îndeaproape tot cadrul legislativ care reglementează
                    activitățile de execuție a unei construcții. Tocmai de
                    aceea, eliminăm din start situațiile neplăcute sau
                    problemele care pot apărea cu instituțiile competente.
                    Suntem la curent cu noile modificări de natură legală și ne
                    ocupăm de întocmirea documentației necesare.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Vrei să te
                    bucuri de avantajele unei construcții ideale? La TNG găsești
                    toate răspunsurile de care ai nevoie. Mizăm pe colaborări
                    eficiente și respectăm întocmai cerințele venite din partea
                    autorităților. Serviciul de verificare calitate lucrări în
                    execuție este cel care ne ajută să eliminăm din start
                    posibilele erori și să ne bucuri de rezultatele dorite.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
        {/* Planificarea execuției 4 */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-32 scroll-mt-28 xl:scroll-mt-32"
          id="planificarea-execuției"
        >
          <h3 className="mb-12 text-center text-2xl text-accent xl:text-start">
            Planificarea Execuției - Precizie și Organizare
          </h3>
          <p>
            Este o activitate care presupune multă răbdare și atenție la{" "}
            <span className="font-bold text-accent">detalii</span>. Necesită, de
            asemenea, expertiza unor specialiști în domeniu pentru a îndeplini
            întocmai cerințele beneficiarului, dar și ale autorităților
            competente.{" "}
          </p>
          <p className="mb-4">
            Pentru a ne bucura de performanțe extraordinare, dar și de feedback
            pozitiv din partea clientului, organizăm cu profesionalism fiecare
            etapă.{" "}
            <span className="font-bold text-accent">
              Planificarea execuției
            </span>{" "}
            lucrărilor are în vedere așadar:
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">
              Stabilirea clară a obiectivelor proiectului
            </span>{" "}
            - Pe care le dezbatem împreună cu beneficiarul. Trasăm inclusiv
            scopul, detaliile contractuale și data limită a proiectului, totul
            în funcție de cerințele și așteptările clientului. Pentru noi este
            foarte important să oferim soluții personalizate. Oferim inclusiv
            consultanță specializată.
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">
              Elaborarea proiectului tehnic
            </span>{" "}
            - Arhitecții și proiectanții noștri se ocupă de efectuarea unei
            asemenea activități. Iau în calcul cele specificate la discuțiile
            preliminare și modifică în cazul în care este necesar. Imediat ce
            obținem aprobările necesare, organizăm echipa care se va ocupa de
            execuție.
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">
              Definitivarea resurselor necesare pentru execuție
            </span>{" "}
            - Analizăm cu atenție variantele disponibile și alegem materialele
            care se pliază cel mai bine proiectului pe care îl derulăm. Dispunem
            de echipamente moderne, care asigură atât calitate, cât și confort
            sporit.
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">
              Derularea activităților de verificare conform prevederilor în
              vigoare
            </span>{" "}
            - Responsabilul nostru va planifica îndeaproape etapele de
            monitorizare a proiectului. În cazul unor eventuale probleme
            tehnice, stopează lucrările și acționează cu promptitudine pentru a
            găsi o soluție eficientă de rezolvare.
          </p>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
          >
            <h3 className="mt-8 text-center text-2xl text-accent xl:text-start">
              De ce să ne alegi pe noi?
            </h3>
            <p>
              Vrem să oferim fiecărui client șansa de a se bucura de rezultatele
              dorite, indiferent că e vorba de o locuință personală sau clădire
              de birouri. Poate te întrebi, totuși, de ce ar trebui să ne alegi
              pe noi, în condițiile în care ai atât de multe variante la
              dispoziție.
            </p>
            <p>Ei bine, noi îți garantăm:</p>
            {/* Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start text-lg">
                  Îndeplinirea obiectivelor setate la începutul colaborării
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Ne place să
                    impresionăm prin fapte, tocmai de aceea ne adunăm toate
                    resursele de care dispunem pentru a asigura succesul
                    proiectului. Dacă vrei să te convingi, poți consulta gama
                    noastră de proiecte.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-start text-lg">
                  O echipă de execuție formată exclusiv din profesioniști
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Nu ne permitem
                    să facem nicio greșeală. Toți oamenii care fac parte din
                    echipa responsabilă de efectuarea etapelor execuție dețin
                    toate calificările necesare. Pe lângă abilitățile
                    profesionale, dispun și de numeroase calități personale.
                    Sunt deschiși, implicați și răbdători.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-start text-lg">
                  Șansa de a avea proiectul dorit la data stabilită
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Efectuăm cu
                    atenție serviciul de planificare, ceea ce asigură premisele
                    unor rezultate fără cusur. Organizarea este punctul cheie
                    care ne ajută să ajungem acolo unde ne-am propus. Tocmai de
                    aceea, vei avea posibilitatea de a te bucura rapid de
                    proiectul mult visat, fără eforturi suplimentare. Nu va mai
                    trebui să pierzi timp în căutarea materialelor și
                    echipamentelor potrivite. Noi ne ocupăm de tot!
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Etapa de
                    execuție este una dintre cele mai dificile activități din
                    cadrul unui proiect de construcții. Însă, cu ajutorul
                    echipei potrivite vei reuși să-ți îndeplinești obiectivele.
                    Noi ne mândrim cu o echipă formată doar din profesioniști,
                    atât pe partea de proiectare, cât și de implementare. Avem
                    responsabili tehnici și manageri de proiect instruiți, care
                    se asigură de corectitudinea proiectului și intervin în
                    cazul în care apar nereguli.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
        {/* Servicii RTE 5 */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-32 scroll-mt-28 xl:scroll-mt-32"
          id="servicii-RTE"
        >
          <h3 className="mb-12 text-center text-2xl text-accent xl:text-start">
            Servicii RTE - Garanția Succesului Fiecărui Proiect
          </h3>
          <p>
            Este practic{" "}
            <span className="font-bold text-accent">specialistul</span> care se
            ocupă de implementarea detaliilor specificate în planul tehnic. Are
            grijă ca toate etapele să se deruleze conform prevederilor legale și
            respectă întocmai caietul de sarcini. Noi ne{" "}
            <span className="font-bold text-accent">mândrim</span> cu o echipă
            bine sudată, care dispune de cunoștințe vaste în domeniu și
            numeroase experiențe practice.{" "}
          </p>
          <p className="mb-4">Responsabilii noștri garantează astfel:</p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">Soluții personalizate</span>{" "}
            - Toate activitățile sunt derulate în funcție de ceea ce își dorește
            beneficiarul. Persoana care se ocupă de verificarea calității
            lucrărilor efectuate nu scapă din vedere cerințele speciale pe care
            le-a solicitat clientul la începutul colaborării. Investiția
            realizată trebuie să reflecte întocmai toate eforturile depuse.
            Tocmai de aceea, nu ratăm niciun detaliu.
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">Siguranță</span> - Pe lângă
            execuția propriu-zisă a construcției, una dintre cele mai dificile
            etape este verificarea în mod constant a documentelor oficiale
            pentru demararea lucrărilor. Este o activitate de care noi te vom
            scuti dacă apelezi la servicii RTE. Responsabilul nostru are datoria
            de a analiza atent toate autorizațiile primite din partea
            instituțiilor specializate. Dispune de o înțelegere aprofundată a
            cadrului legislativ, tocmai pentru a evita din start posibilele
            urgențe sau situații neplăcute care pot interveni pe parcurs.
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">Profesionalism </span> - Ne
            place să credem că nimic nu se compară cu eficiența activităților
            duse la bun sfârșit de profesioniști. Personalul nostru stabilește
            discuții cu beneficiarul, ia în calcul toate riscurile care pot
            apărea pe parcurs și aplică tehnici de lucru moderne. Sunt la curent
            cu noile tendințe din domeniu și garantează colaborări avantajoase,
            indiferent de context.
          </p>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
          >
            <h3 className="mt-8 text-center text-2xl text-accent xl:text-start">
              Care sunt atribuțiile unui responsabil de proiect?
            </h3>
            <p>
              Fără ajutorul unui responsabil tehnic cu execuția proiectele
              noastre nu ar mai arăta la fel. Este persoana care garantează
              efectuarea corespunzătoare a activităților de lucru și respectarea
              întocmai a reglementărilor legale. Verifică inclusiv calitatea
              materialelor folosite și intervine imediat în cazul unor posibile
              nereguli. În cazul în care este necesar anunță autoritățile
              competente și reia execuția numai când toate neregulile au fost
              rezolvate.
            </p>
            {/* Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start text-lg">
                  Te întrebi care sunt activitățile propriu-zise pe care le va
                  derula un responsabil de proiect casă?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Se asigură că
                    detaliile specificate în caietul cu sarcini sunt
                    implementate corect.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Ia parte la
                    momentul definitivării proiectului și punctelor de reper,
                    care ghidează practic întreaga execuție.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Ține o evidență
                    a tuturor activităților care se derulează într-o zi pe
                    șantierul de lucru. Informațiile atât în format fizic, cât
                    și electronic.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Se ocupă de
                    întocmirea și semnarea documentelor necesare, care atestă
                    efectuarea fiecărei faze ale proiectului.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Verifică atent
                    proprietățile tehnice și calitatea materialelor folosite
                    pentru efectuarea activităților. În cazul în care lucrările
                    se stopează din diverse motive, responsabilul se asigură că
                    materialele sunt depozitate în siguranță în locuri special
                    amenajate.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Întocmește un
                    raport de neconformitate (R.N.C) în cazul în care sesizează
                    nereguli în faza de execuție. Anunță proiectantul lucrării
                    și dirigintele de șantier și stabilesc împreună soluțiile
                    ideale de rezolvare. Imediat după ce situația este
                    remediată, se reiau activitățile.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Participă la
                    întocmirea cărții tehnice a clădirii construite, alături de
                    proiectant și diriginte de șantier. Alături de cei trei
                    specialiști, vine cu propuneri în cazul în care există
                    probleme în procesul de lucru sau se dorește optimizarea
                    lucrării.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Anunță
                    autoritățile competente în cazul în care apar modificări la
                    nivelul documentelor oficiale.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Ia decizii cu
                    privire la procedurile tehnice, fișele tehnologice și planul
                    de control al calității execuției.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
        {/* Servicii dirigenție de șantier 6 */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-32 scroll-mt-12 xl:scroll-mt-32"
          id="dirigenție-de-șantier"
        >
          <h3 className="mb-12 text-center text-2xl text-accent xl:text-start">
            Servicii de Dirigenție de Șantier
          </h3>
          <p>
            Dirigintele de șantier are rolul esențial de a monitoriza execuția
            lucrărilor și de a asigura respectarea strictă a standardelor de
            calitate. El coordonează desfășurarea proiectului în termenele
            stabilite contractual și conform legislației în vigoare, facilitând
            totodată comunicarea eficientă între investitor, beneficiar și
            echipa de proiectare și inginerie.
          </p>
          <p className="mb-4">Dirigintele noștri de șantier dau dovadă de:</p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">Atitudine obiectivă</span> -
            Specialistul pune accent întotdeauna pe obiectivitate atunci când ia
            decizii cu privire la proiectul desfășurat. Se asigură că există o
            armonie în ceea ce privește relațiile cu antreprenorii, furnizorii
            și proiectanții. Însă, nu se implică mai mult decât ar trebui în
            gestionare relațiilor profesionale.
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">Experiența necesară</span> -
            Nimic nu se compară cu eficiența activităților pe care le pot derula
            profesioniștii. Colaborăm doar cu persoane care dețin certificări
            care le atestă abilitățile.
          </p>
          <p>
            <span className="text-accent">&#9679;</span>{" "}
            <span className="font-bold text-accent">
              Respectarea prevederilor legale{" "}
            </span>{" "}
            - Un aspect foarte important pentru orice persoană care participă
            activ la procesul de proiectare și implementare. Dirigintele de
            șantier va răspunde în fața autorităților în cazul în care ceva este
            în neregulă. Tocmai de aceea, analizează foarte bine documentele pe
            care le semnează și se asigură că ceea ce se află în acte este
            conform cu realitatea.
          </p>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
          >
            <h3 className="mt-8 text-center text-2xl text-accent xl:text-start">
              Ce responsabilități are dirigintele de șantier?
            </h3>
            <p>
              Rolul dirigintelui de șantier în garantarea succesului lucrării
              este destul de însemnat. Tocmai de aceea, se asigură că toate
              activitățile conform standardelor de siguranță, funcționalitate și
              confort.
            </p>
            {/* Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start text-lg">
                  În perioada execuției, fie că e vorba deproiect casă simplăsau
                  o hală industrială, dirigintele vizează următoarele etape:
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <p>
                    <span className="text-accent">&#9679;</span> Urmărește
                    îndeaproape modalitatea de efectuare a activităților de
                    execuție.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Se asigură că
                    există documente care să ateste calitatea materialelor de
                    construcții folosite.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Interzice
                    folosirea echipamentelor care nu dețin avize tehnice sau
                    certificate de conformitate.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Se asigură că
                    etapele de execuție sunt derulate de personal calificat în
                    domeniu.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Informează
                    imediat beneficiarul în cazul în care apar nereguli sau
                    probleme tehnice.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Propune soluții
                    de rezolvare pentru situațiile care necesită intervenție
                    imediată.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Întocmește
                    actele de recepție.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Colaborează cu
                    responsabilul tehnic cu execuția în așa fel încât să elimine
                    orice fel de problemă care ar putea îngreuna activitățile.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Completează
                    cartea tehnică și adaugă toate documentele necesare.
                  </p>
                  <h3 className="mt-4 text-lg text-accent">
                    Garantăm efectuarea lucrărilor conform reglementărilor în
                    vigoare. Diriginții noștri de șantier garantează respectarea
                    cadrului legal și anume:
                  </h3>
                  <p>
                    <span className="text-accent">&#9679;</span> Legea 10/1995
                    care vizează calitatea în construcţii, completată şi
                    modificată;
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Legea 50/1991
                    republicată cu privire la autorizarea executării lucrărilor
                    de construcţii.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> H.G. 343/2017
                    care detaliază aprobarea Regulamentului de recepţie a
                    lucrărilor de construcţii şi instalaţii.
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> HG 766/1997
                    pentru aprobarea unor regulamente care asigură calitatea în
                    construcţii;
                  </p>
                  <p>
                    <span className="text-accent">&#9679;</span> Legea nr.
                    319/2006 a securităţii şi sănătăţii în muncă.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
