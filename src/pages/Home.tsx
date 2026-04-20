import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import heroImg from "@assets/HypnopraktijkDeDroomreis1_1776428288022.png";
import landscapeImg from "@/assets/images/landscape.png";
import ripplesImg from "@/assets/images/ripples.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Een weerspiegeling in kalm water" 
            className="w-full h-full object-cover object-center scale-105 transform-gpu motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto text-center mt-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-6"
            >
              De ademruimte<br />
              <span className="italic font-light text-primary">die je zocht.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-2xl text-foreground/80 font-light mb-12 leading-relaxed"
            >
              Start jouw reis naar ontwikkeling en innerlijke kracht. Hypnotherapie biedt praktische hulp voor blijvende verandering.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <a 
                href="#contact" 
                className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-sm text-lg font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Begin Jouw Reis
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">Waarom voelt het soms alsof je vastzit?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Soms weten we verstandelijk precies wat we moeten doen. We maken plannen, we nemen onszelf dingen voor, en toch lukt het niet om het patroon te doorbreken. Dat komt omdat ons bewuste brein slechts een klein deel van ons gedrag bepaalt.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In het onderbewuste liggen de diepgewortelde overtuigingen, emoties en patronen opgeslagen. Met hypnotherapie maken we precies daar contact, zodat verandering niet langer voelt als vechten tegen jezelf, maar als een natuurlijk proces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image & Text Split Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={ripplesImg} 
                alt="Rimpelingen in water" 
                className="rounded-sm shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">Een zachte methode, een krachtig resultaat</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Mensen denken vaak dat hypnose betekent dat je de controle verliest. Het tegenovergestelde is waar. Hypnose is simpelweg een staat van diepe ontspanning gecombineerd met een verhoogde focus. 
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                In de rust van de praktijkruimte in Leimuiden help ik je om belemmerende overtuigingen los te laten. Denk aan angsten, onzekerheden, stressgerelateerde klachten of ongewenste gewoontes.
              </p>
              <a href="/wat-is-hypnose" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors border-b border-primary pb-1">
                Lees meer over hypnose
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={landscapeImg} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <svg className="w-12 h-12 mx-auto mb-8 text-secondary/60" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-2xl md:text-4xl font-serif italic leading-snug mb-8">
              "Voor het eerst in jaren voel ik echte rust in mijn hoofd. De begeleiding was warm, professioneel en oordeelloos. Het voelde als een thuiskomen bij mezelf."
            </p>
            <p className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">Een cliënt uit Kaag en Braassem</p>
          </motion.div>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div variants={fadeUp} className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center text-2xl font-serif mx-auto mb-6">1</div>
              <h3 className="text-xl font-serif mb-4 text-foreground">Intakegesprek</h3>
              <p className="text-muted-foreground">We bespreken jouw wensen en verwachtingen in een veilige, vertrouwde omgeving.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center text-2xl font-serif mx-auto mb-6">2</div>
              <h3 className="text-xl font-serif mb-4 text-foreground">De Sessies</h3>
              <p className="text-muted-foreground">Onder begeleiding ga je in een lichte trance, waarbij we werken aan de kern van jouw klacht.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center text-2xl font-serif mx-auto mb-6">3</div>
              <h3 className="text-xl font-serif mb-4 text-foreground">Het Resultaat</h3>
              <p className="text-muted-foreground">Je merkt al snel dat oude patronen zijn doorbroken en je ervaart meer rust en kracht.</p>
            </motion.div>
          </motion.div>
          <div className="mt-16 text-center">
            <a href="/werkwijze-tarieven" className="inline-block px-8 py-3 rounded border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
              Bekijk Werkwijze & Tarieven
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
