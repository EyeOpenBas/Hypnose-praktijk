import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ripplesImg from "@/assets/images/ripples.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function WhatIsHypnosis() {
  return (
    <PageLayout>
      <div className="bg-muted py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
          <img src={ripplesImg} alt="" className="w-[800px] h-[800px] object-cover rounded-full" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-foreground">Wat is Hypnose?</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Hypnose is geen magie. Het is een natuurlijke, ontspannen staat van zijn waarin je openstaat voor positieve suggesties en verandering.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif mb-6 text-primary">De Kracht van het Onbewuste</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Je kunt het menselijk brein vergelijken met een ijsberg. Het topje, dat boven het water uitsteekt, is je bewuste brein (ongeveer 5%). Hier zitten je wilskracht, logisch denken en kortetermijngeheugen.
                </p>
                <p>
                  Het enorme deel onder water (95%) is je onbewuste. Hier liggen al je herinneringen, emoties, automatische patronen, overtuigingen en gewoonten opgeslagen. Vaak willen we bewust wel veranderen ("ik wil stoppen met roken", "ik wil niet meer angstig zijn"), maar houdt het onbewuste ons tegen omdat het vertrouwde patronen wil beschermen.
                </p>
                <p>
                  Met hypnose maken we het bewuste brein tijdelijk rustig, zodat we direct kunnen communiceren met het onbewuste. Hierdoor kunnen we belemmerende overtuigingen aanpassen en nieuwe, positieve patronen installeren.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-serif mb-6 text-primary">Is het veilig?</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Absoluut. Hypnose in een therapeutische setting heeft niets te maken met theaterhypnose (waarbij mensen soms gekke dingen lijken te doen voor vermaak). Je behoudt altijd de regie. Als ik je iets zou suggereren dat tegen jouw normen of waarden ingaat, zou je direct uit de hypnose ontwaken.
                </p>
                <p>
                  Eigenlijk ervaar je hypnose al dagelijks. Ken je het gevoel dat je in de auto zit en ineens op je bestemming bent, zonder dat je je de route bewust herinnert? Of dat je zo verdiept bent in een boek of film dat je de wereld om je heen even vergeet? Dat is een alledaagse vorm van trance. Hypnotherapie maakt doelgericht gebruik van diezelfde natuurlijke focus.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-12">
              <h2 className="text-3xl font-serif mb-8 text-foreground text-center">Veelgestelde Vragen</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg font-medium text-foreground">Slaap ik tijdens hypnose?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    Nee, je slaapt niet. Je bent diep ontspannen, maar mentaal juist heel alert. Je hoort alles wat ik zeg en kunt je achteraf de sessie herinneren.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg font-medium text-foreground">Kan iedereen in hypnose worden gebracht?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    Vrijwel iedereen met een normaal IQ en concentratievermogen kan in hypnose gaan, zolang je zelf bereid bent en openstaat voor de ervaring. De wil om te veranderen is het allerbelangrijkste.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg font-medium text-foreground">Hoeveel sessies heb ik nodig?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    Dit verschilt per persoon en per klacht. Hypnotherapie is over het algemeen een kortdurende therapievorm. Vaak worden er al binnen 3 tot 5 sessies aanzienlijke resultaten geboekt.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-lg font-medium text-foreground">Voor welke klachten helpt hypnotherapie?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    Hypnotherapie is zeer effectief bij onder andere stress, burn-out klachten, angsten en fobieën, gebrek aan zelfvertrouwen, slaapproblemen, afvallen, stoppen met roken en het verwerken van onverwerkte emoties.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
