import { Link } from "wouter";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-6">De Droomreis</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-sm">
              Een veilige haven in Leimuiden voor blijvende verandering en innerlijke rust. Start jouw reis vandaag nog.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-sm tracking-wider uppercase mb-6 text-secondary">Contact</h4>
            <ul className="space-y-4 text-primary-foreground/90">
              <li>
                <strong>Praktijk:</strong> De Droomreis
              </li>
              <li>
                <strong>Telefoon:</strong> <a href="tel:0620429529" className="hover:text-secondary transition-colors">06-20429529</a>
              </li>
              <li>
                <strong>Adres:</strong><br />
                Meerewijck 19<br />
                2451 VK Leimuiden<br />
                Kaag en Braassem
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-sm tracking-wider uppercase mb-6 text-secondary">Navigatie</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-primary-foreground/90 hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/wat-is-hypnose" className="text-primary-foreground/90 hover:text-secondary transition-colors">Wat is Hypnose?</Link>
              </li>
              <li>
                <Link href="/werkwijze-tarieven" className="text-primary-foreground/90 hover:text-secondary transition-colors">Werkwijze & Tarieven</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Hypnosepraktijk De Droomreis. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
