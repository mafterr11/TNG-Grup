"use client"
import { useEffect } from "react";

const Servicii = () => {
  useEffect(() => {
    if (window.location.hash) {
      let elem = document.getElementById(window.location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);
  return (

    <div className="pt-[8rem]">
      {/* Header */}
      <div className="text-center mb-[13rem]">
        <h3 className="text-accent leading-relaxed">Construiește Visul Tău Alături De Noi</h3>
        <h3 className="text-white/90 text-2xl">Transformăm Viziunea Ta în Realitate cu Inovație, Siguranță și Personalizare</h3>
      </div>
      {/* Content container */}
      <div className="w-[90%] mx-auto">
        {/* Execuție construcții civile 1 */}
        <div className="mb-24 scroll-mt-32" id="execuție-construcții-civile">
          <h3 className="mb-12 text-accent text-2xl text-center xl:text-start">Execuție Construcții Civile - Precizie Și Siguranță</h3>
          <p>După definitivarea proiectului tehnic și obținerea avizelor necesare, trecem la faza de <span className="text-accent font-bold">execuție construcții civile</span>.</p>
          <p className="mb-4">Însă, înainte de toate ne asigurăm că:</p>
          <p><span className="text-accent">&#9679;</span> Proiectele noastre sunt realizate cu precizie pentru a corespunde cerințelor și așteptărilor dvs. în materie de confort, siguranță și durabilitate. Înțelegem importanța unei case care să reflecte personalitatea fiecărui client, <span className="text-accent font-bold">un loc ce poate fi numit cu mândrie {"'acasă'"}</span>. De aceea, punem un accent deosebit pe consultări detaliate și o colaborare strânsă. Ne dedicăm să stabilim discuții și întâlniri regulate cu dumneavoastră, asigurându-ne că fiecare detaliu al visului dvs. devine realitate.</p>
          <p><span className="text-accent">&#9679;</span> Avem toate avizele și documentele necesare pentru a demara lucrările, garantând conformitatea cu cele mai recente standarde legislative. Ne dedicăm verificării minuțioase a fiecărui detaliu înainte de începerea construcției, cu scopul de a preveni orice potențială problemă. Astfel, ne asigurăm că proiectul dvs. avansează fără întârzieri sau complicații.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Suntem mereu la curent</span> cu cele mai noi tendințe din domeniul construcțiilor civile, asigurându-ne că fiecare proiect pe care îl executăm are un caracter unic și un plus de strălucire. Ne dedicăm îmbunătățirii continue a serviciilor noastre, adoptând cele mai eficiente și inovative tehnici de lucru. Suntem pregătiți să răspundem chiar și celor mai complexe cerințe, demonstrând flexibilitatea și versatilitatea noastră în orice proiect.</p>
        </div>
        {/* Execuție construcții industriale 2 */}
        <div className="mb-24 scroll-mt-32" id="execuție-construcții-industriale">
          <h3 className="mb-12 text-accent text-2xl text-center xl:text-start">Execuție Construcții Industriale</h3>
          <p>De-a lungul timpului am reușit să ducem la bun sfârșit <span className="text-accent font-bold">activități complexe</span> și să ne asumăm responsabilități diverse.</p>
          <p className="mb-4">Ca și în cazul construcțiilor civile, ne ocupăm de:</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Crearea conceptului care să susțină întreg procesul de execuție</span> - Gândim proiectul de la 0 acolo unde este necesar sau adăugăm modificările potrivite unui proiect deja existent. Ne mândrim cu o echipă pregătită complet, care garantează idei creative și rezultate pe termen lung. Ne ocupăm de toate detaliile aferente etapelor de <span className="text-accent font-bold">execuție construcții industriale</span>.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Elaborarea planului tehnic care să respecte întocmai dorințele beneficiarului și reglementărilor în vigoare</span> - Oferim consultanță specializată în cazul în care nu ești pe deplin hotărât/ă cu privire la felul în care va arăta hala. Înainte de a ne ocupa de activitățile aferente execuției ne asigurăm că toate cerințele specifice au fost integrate în planul tehnic.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Derularea activităților în conformitate cu cele mai înalte standarde de siguranță și funcționalitate</span> - Respectăm întocmai toate prevederile de natură legală și suntem la curent cu eventualele modificări care apar. Pentru noi, e foarte important ca toți cei care își desfășoară activitatea în construcția industrială să se bucure de confort sporit și siguranță.</p>
          <p><span className="text-accent">&#9679;</span> În ceea ce privește gama propriu-zisă de servicii mizăm de fiecare dată pe importanță <span className="text-accent font-bold">multifuncționalității</span>. Astfel, oferim:</p>
          <p>- Hale metalice</p>
          <p>- Hale prefabricate</p>
        </div>
        {/* Execuție construcții agricole 3 */}
        <div className="mb-24 scroll-mt-32" id="execuție-construcții-agricole">
          <h3 className="mb-12 text-accent text-2xl text-center xl:text-start">Execuție Construcții Agricole - Soluții Pe Termen Lung</h3>
          <p>De la concepția planului tehnic până la navigarea prin complexul proces de avizare, <span className="text-accent font-bold">ne angajăm să depășim așteptările</span>, oferind servicii integrate care aduc viziunea dumneavoastră la viață, respectând cele mai înalte standarde de calitate și funcționalitate.</p>
          <p className="mb-4">În ceea ce privește gama de servicii efectuate, ne ocupăm de constuirea:</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Serelor</span> - Serele reprezintă o investiție pe termen lung. Ele sunt folosite atât pentru flori și plante ornamentale, cât și pentru legume și pot fi construite în diverse forme și dimensiuni. Proiectanții noștri se ocupă de toate detaliile implicate în <span className="text-accent font-bold">execuție construcții agricole</span> pentru a-ți oferi alternativa potrivită nevoilor.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Sistemelor de irigații</span> - Există mai multe tipuri de sisteme pentru irigare - prin aspersiune, prin inundație sau prin difuzie. Indiferent de alegere, <span className="text-accent font-bold">noi te vom ajuta</span> să implementezi un mecanism inteligent de irigare, capabil să sporească producția și să ofere performanțe tehnice excelente.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Silozurilor</span> - Sunt proiectate pentru a proteja produsele agricole de umiditate, căldura, frig, insecte sau alți factori care le-ar putea afecta proprietățile. Modul de execuție se face în funcție de volumul și tipul produselor care vor fi depozitate. Unele dintre ele pot să integreze inclusiv sisteme de ventilație și control al umidității, în funcție de preferințele beneficiarului.
            Colaborăm atât cu persoane care dețin businessuri aflate la început de drum sau în plină ascensiune, cât și cu persoane fizice. <span className="text-accent font-bold">Ne adaptăm cu rapiditate cerințelor</span> fiecărui client în parte, indiferent de complexitatea proiectului pe care vrea să-l efectueze.</p>
        </div>
        {/* Supervizare lucrări de execuție 4 */}
        <div className="mb-24 scroll-mt-32" id="supervizare-lucrări-de-execuție">
          <h3 className="mb-12 text-accent text-2xl text-center xl:text-start">Supervizare Lucrări De Execuție</h3>
          <p>Ne dorim să punem la dispoziție clienților clădiri perfect funcționale, dar și elemente de design inedite. În plus, <span className="text-accent font-bold">experiența acumulată</span> de-a lungul timpului este cea care ne ajută să oferim rezultate profesionale, indiferent de gradul de complexitate implicat.</p>
          <p className="mb-4">Asigurăm monitorizare tehnică pe tot parcursul derulării etapelor de execuție, tocmai pentru a oferi standarde înalte de:</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Siguranță</span> - Fără serviciile de supervizare a unei lucrări de execuție, gradul de apariție a problemelor tehnice este destul de ridicat. Știm că orice greșeală, indiferent de cât de mică și nesemnificativă ar părea la prima vedere, poate destabiliza echilibrul întregului proiect.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Confort</span> - nu trebuie să-ți mai faci griji în ceea ce privește asigurarea materialelor și monitorizarea specialiștilor care se ocupă de execuție. Vei avea parte de casa visurilor, fără a investi foarte mult timp în activitățile premergătoare etapelor de construire. <span className="text-accent font-bold">Vei putea vizualiza stadiul evoluției clădirii ori de câte ori îți dorești</span>. Tot ce trebuie să faci este să stabilești în prealabil cu echipa TNG o zi în care vrei să vizitezi șantierul.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Durabilitate </span> - Scopul activităților de supervizare au în prim plan respectarea întocmai a cerințelor specificate în planul tehnic. Echipa care se ocupă de monitorizarea lucrării va analiza îndeaproape fiecare aspect si va lua în considerare, de asemenea, reglementările aflate în vigoare. <span className="text-accent font-bold">Ne asigurăm că respectiva construcție poate garanta grade sporite de rezistență</span> în fața condițiilor meteo nefavorabile, dar și altor factori de uzură și degradare.</p>
        </div>
        {/* Verificare calitate lucrări în execuție 5 */}
        <div className="mb-24 scroll-mt-32" id="verificare-calitate-lucrări-în-execuție">
          <h3 className="mb-12 text-accent text-2xl text-center xl:text-start">Verificare Calitate Lucrări În Execuție</h3>
          <p>Persoana care se ocupă de verificare este fie responsabilul execuției, fie un diriginte de șantier autorizat. Indiferent de funcția tehnică pe care o deține, <span className="text-accent font-bold">specialistul nostru</span> va analiza îndeaproape etapele de execuție și se va asigura de calitatea lucrării. Toate activitățile aferente unei asemenea sarcini respectă întocmai cerințele prevăzute în legea nr. 10/1995.</p>
          <p className="mb-4">Responsabilul pentru serviciul de verificare a calității lucrărilor în execuție îndeplinește numeroase funcții, printre care se numără:</p>
          <p><span className="text-accent">&#9679;</span> Se <span className="text-accent font-bold">asigură</span> că știe toate detaliile care alcătuiesc planul tehnic elaborat la începutul colaborării. Fără asemenea informații nu ar putea să ajungă la grade sporite de siguranță, precizie și funcționalitate.</p>
          <p><span className="text-accent">&#9679;</span> Analizează corectitudinea fișelor și proiectelor tehnologice de execuție. Verifică, de asemenea, existența procedurilor de efectuare a lucrărilor corespunzătoare caietelor de sarcini din proiectul tehnic. Este la curent cu graficele de realizare a construcţiilor. În plus, <span className="text-accent font-bold">pune la dispoziția clientului</span> toate documentele care atestă calitatea lucrărilor de execuție.</p>
          <p><span className="text-accent">&#9679;</span> Participă activ la toate fazele de verificare a procesului de execuție. <span className="text-accent font-bold">Face vizite</span> în mod regulat pe șantier pentru a se asigura că toate activitățile derulate respectă întocmai prevederile de natură legislativă.</p>
        </div>
        {/* Planificarea execuției 6 */}
        <div className="mb-24 scroll-mt-32" id="planificarea-execuției">
          <h3 className="mb-12 text-accent text-2xl text-center xl:text-start">Planificarea execuției - Precizie și organizare</h3>
          <p>Este o activitate care presupune multă răbdare și atenție la <span className="text-accent font-bold">detalii</span>. Necesită, de asemenea, expertiza unor specialiști în domeniu pentru a îndeplini întocmai cerințele beneficiarului, dar și ale autorităților competente. </p>
          <p className="mb-4">Pentru a ne bucura de performanțe extraordinare, dar și de feedback pozitiv din partea clientului, organizăm cu profesionalism fiecare etapă. <span className="text-accent font-bold">Planificarea execuției</span> lucrărilor are în vedere așadar:</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Stabilirea clară a obiectivelor proiectului</span> - Pe care le dezbatem împreună cu beneficiarul. Trasăm inclusiv scopul, detaliile contractuale și data limită a proiectului, totul în funcție de cerințele și așteptările clientului. Pentru noi este foarte important să oferim soluții personalizate. Oferim inclusiv consultanță specializată.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Elaborarea proiectului tehnic</span> - Arhitecții și proiectanții noștri se ocupă de efectuarea unei asemenea activități. Iau în calcul cele specificate la discuțiile preliminare și modifică în cazul în care este necesar. Imediat ce obținem aprobările necesare, organizăm echipa care se va ocupa de execuție.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Definitivarea resurselor necesare pentru execuție</span> - Analizăm cu atenție variantele disponibile și alegem materialele care se pliază cel mai bine proiectului pe care îl derulăm. Dispunem de echipamente moderne, care asigură atât calitate, cât și confort sporit.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Derularea activităților de verificare conform prevederilor în vigoare</span> - Responsabilul nostru va planifica îndeaproape etapele de monitorizare a proiectului. În cazul unor eventuale probleme tehnice, stopează lucrările și acționează cu promptitudine pentru a găsi o soluție eficientă de rezolvare.</p>

        </div>
        {/* Servicii RTE 7 */}
        <div className="mb-24 scroll-mt-32" id="servicii-RTE">
          <h3 className="mb-12 text-accent text-2xl text-center xl:text-start">Servicii RTE - Garanția Succesului Fiecărui Proiect</h3>
          <p>Este practic <span className="text-accent font-bold">specialistul</span> care se ocupă de implementarea detaliilor specificate în planul tehnic. Are grijă ca toate etapele să se deruleze conform prevederilor legale și respectă întocmai caietul de sarcini. Noi ne <span className="text-accent font-bold">mândrim</span> cu o echipă bine sudată, care dispune de cunoștințe vaste în domeniu și numeroase experiențe practice. </p>
          <p className="mb-4">Responsabilii noștri garantează astfel:</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Soluții personalizate</span> - Toate activitățile sunt derulate în funcție de ceea ce își dorește beneficiarul. Persoana care se ocupă de verificarea calității lucrărilor efectuate nu scapă din vedere cerințele speciale pe care le-a solicitat clientul la începutul colaborării. Investiția realizată trebuie să reflecte întocmai toate eforturile depuse. Tocmai de aceea, nu ratăm niciun detaliu.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Siguranță</span> - Pe lângă execuția propriu-zisă a construcției, una dintre cele mai dificile etape este verificarea în mod constant a documentelor oficiale pentru demararea lucrărilor. Este o activitate de care noi te vom scuti dacă apelezi la servicii RTE. Responsabilul nostru are datoria de a analiza atent toate autorizațiile primite din partea instituțiilor specializate. Dispune de o înțelegere aprofundată a cadrului legislativ, tocmai pentru a evita din start posibilele urgențe sau situații neplăcute care pot interveni pe parcurs.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Profesionalism </span> - Ne place să credem că nimic nu se compară cu eficiența activităților duse la bun sfârșit de profesioniști. Personalul nostru stabilește discuții cu beneficiarul, ia în calcul toate riscurile care pot apărea pe parcurs și aplică tehnici de lucru moderne. Sunt la curent cu noile tendințe din domeniu și garantează colaborări avantajoase, indiferent de context.</p>
        </div>
        {/* Servicii dirigenție de șantier 8 */}
        <div className="mb-24 scroll-mt-32" id="dirigenție-de-șantier">
          <h3 className="mb-12 text-accent text-2xl text-center xl:text-start">Servicii De Dirigenție De Șantier</h3>
          <p>Dirigintele de șantier are rolul esențial de a monitoriza execuția lucrărilor și de a asigura respectarea strictă a standardelor de calitate. El coordonează desfășurarea proiectului în termenele stabilite contractual și conform legislației în vigoare, facilitând totodată comunicarea eficientă între investitor, beneficiar și echipa de proiectare și inginerie.</p>
          <p className="mb-4">Dirigintele noștri de șantier dau dovadă de:</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Atitudine obiectivă</span> - Specialistul pune accent întotdeauna pe obiectivitate atunci când ia decizii cu privire la proiectul desfășurat. Se asigură că există o armonie în ceea ce privește relațiile cu antreprenorii, furnizorii și proiectanții. Însă, nu se implică mai mult decât ar trebui în gestionare relațiilor profesionale.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Experiența necesară</span> - Nimic nu se compară cu eficiența activităților pe care le pot derula profesioniștii. Colaborăm doar cu persoane care dețin certificări care le atestă abilitățile.</p>
          <p><span className="text-accent">&#9679;</span> <span className="text-accent font-bold">Respectarea prevederilor legale </span> - Un aspect foarte important pentru orice persoană care participă activ la procesul de proiectare și implementare. Dirigintele de șantier va răspunde în fața autorităților în cazul în care ceva este în neregulă. Tocmai de aceea, analizează foarte bine documentele pe care le semnează și se asigură că ceea ce se află în acte este conform cu realitatea.</p>
        </div>

      </div>
    </div>
  )
};


export default Servicii
