import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import landscapeImg from "@/assets/images/landscape.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function MethodAndRates() {
  return (
    <PageLayout>
      <div className="bg-primary/5 py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-foreground">Werkwijze & Tarieven</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Transparant, persoonlijk en gericht op jouw specifieke behoefte.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
              <h2 className="text-3xl font-serif mb-8 text-primary">Hoe ziet een traject eruit?</h2>
              
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                
                {/* Step 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-primary font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">1</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-sm bg-card border border-border shadow-sm">
                    <h3 className="font-serif text-xl mb-2 text-foreground">Intake en Kennismaking</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Tijdens de eerste afspraak nemen we de tijd om elkaar te leren kennen. We bespreken je klachten, je doel en of hypnotherapie voor jou de juiste weg is. Vaak doen we ook direct een korte oefening om je te laten ervaren hoe het voelt.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-primary font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">2</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-sm bg-card border border-border shadow-sm">
                    <h3 className="font-serif text-xl mb-2 text-foreground">De Hypnotherapie Sessies</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      In de vervolgsessies gaan we de diepte in. In een ontspannen setting begeleid ik je naar een lichte of diepere trance. Terwijl je bewustzijn ontspant, werken we met je onbewuste om de oorzaak van het probleem aan te pakken en nieuwe overtuigingen te verankeren.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-primary font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">3</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-sm bg-card border border-border shadow-sm">
                    <h3 className="font-serif text-xl mb-2 text-foreground">Integratie en Evaluatie</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Aan het begin van elke sessie bespreken we kort wat er sinds de vorige keer veranderd is. Het traject is flexibel; we sturen bij waar nodig en we ronden af zodra jij voelt dat het gewenste resultaat bereikt en stabiel is.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-card border border-border rounded-sm shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                   <img src={landscapeImg} alt="Landschap bij Leimuiden" className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-serif mb-8 text-primary text-center">Tarieven</h2>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-border pb-4">
                      <div>
                        <h4 className="text-lg font-medium text-foreground">Intakegesprek</h4>
                        <p className="text-sm text-muted-foreground">Inclusief eerste lichte hypnose ervaring (circa 60 min)</p>
                      </div>
                      <div className="text-xl font-serif text-primary">€ 88,-</div>
                    </div>
                    
                    <div className="flex justify-between items-center border-b border-border pb-4">
                      <div>
                        <h4 className="text-lg font-medium text-foreground">Vervolgsessie</h4>
                        <p className="text-sm text-muted-foreground">Individuele hypnotherapie sessie (90 minuten)</p>
                      </div>
                      <div className="text-xl font-serif text-primary">€ 118,-</div>
                    </div>
                    
                    <div className="flex justify-between items-center border-b border-border pb-4">
                      <div>
                        <h4 className="text-lg font-medium text-foreground">Ouder / kind heling traject</h4>
                        <p className="text-sm text-muted-foreground">Met 3 contactmomenten</p>
                      </div>
                      <div className="text-xl font-serif text-primary">€ 318,-</div>
                    </div>
                  </div>

                  <div className="mt-8 text-sm text-muted-foreground bg-muted p-4 rounded-sm">
                    <p className="mb-2"><strong>Vergoedingen:</strong> Hypnotherapie wordt door een aantal zorgverzekeraars gedeeltelijk vergoed vanuit de aanvullende verzekering. Raadpleeg hiervoor je eigen polisvoorwaarden.</p>
                    <p><strong>Annuleren:</strong> Kosteloos annuleren is mogelijk tot 24 uur voor aanvang van de sessie. Binnen 24 uur wordt het volledige bedrag in rekening gebracht.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}
