import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import ripplesImg from "@/assets/images/ripples.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemFade = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const volwassenenItems = [
  "Stress en burn-outklachten",
  "Angst en paniek",
  "Trauma",
  "Verslavingen of ongewenste gewoontes",
  "Slaapproblemen",
  "Laag zelfvertrouwen",
  "Emotionele blokkades",
];

const kinderenItems = [
  "Angst (donker, school, sociale situaties)",
  "Boosheid en driftbuien",
  "Onzekerheid",
  "Bedplassen",
  "Buikpijn of hoofdpijn zonder medische oorzaak",
  "Slaapproblemen of nachtmerries",
  "Concentratieproblemen",
  "Pesten of gepest worden",
];

export default function Doelgroepen() {
  return (
    <PageLayout>
      {/* Hero */}
      <div className="bg-muted py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
          <img src={ripplesImg} alt="" className="w-[800px] h-[800px] object-cover rounded-full" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-foreground">Voor Wie?</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Hypnotherapie werkt voor alle leeftijden — van jonge kinderen tot volwassenen. Iedereen heeft een onbewuste, en iedereen kan er baat bij hebben.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Jong volwassenen */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              <span className="text-xs uppercase tracking-widest text-primary font-medium mb-3 block">Tieners & Volwassenen</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground leading-snug">
                Hypnotherapie voor<br />(jong) volwassenen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Voor (jong)volwassenen is hypnotherapie geschikt bij onder andere de volgende klachten en uitdagingen. Door direct met het onbewuste te werken, ontstaat ruimte voor echte, blijvende verandering.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Neem contact op
              </a>
            </motion.div>

            <motion.ul
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="space-y-3"
            >
              {volwassenenItems.map((item) => (
                <motion.li
                  key={item}
                  variants={itemFade}
                  className="flex items-start gap-3 p-4 rounded-sm bg-primary/10 border border-primary/20"
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-border" />

      {/* Kinderen */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <motion.ul
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="space-y-3 order-2 md:order-1"
            >
              {kinderenItems.map((item) => (
                <motion.li
                  key={item}
                  variants={itemFade}
                  className="flex items-start gap-3 p-4 rounded-sm bg-primary/10 border border-primary/20"
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="order-1 md:order-2"
            >
              <span className="text-xs uppercase tracking-widest text-primary font-medium mb-3 block">Kinderen 4–12 jaar</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground leading-snug">
                Hypnotherapie voor<br />kinderen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kinderen reageren vaak nog sneller op hypnotherapie dan volwassenen. Dankzij hun van nature levendige fantasie en sterke verbeeldingskracht, blijkt hypnotherapie bij kinderen erg doeltreffend.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Er is een groeiende belangstelling voor kinderhypnose — en terecht. Ik sluit altijd aan bij de behoefte en belevingswereld van het kind, zodat elke sessie vertrouwd en veilig voelt.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Stel een vraag
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-serif mb-4 text-foreground">Twijfel je of hypnotherapie iets voor jou of je kind is?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Neem gerust contact op voor een vrijblijvend kennismakingsgesprek. Samen kijken we wat de beste stap vooruit is.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-sm bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Neem contact op
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
