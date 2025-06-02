import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Stavební parcely Nasavrky
            </h3>
            <p className="text-white/80">
              Váš vysněný domov začíná zde v naší půvabné obci.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Kontaktní informace</h3>
            <address className="not-italic text-white/80">
              <p>Městský úřad Nasavrky</p>
              <p>Náměstí, Nasavrky</p>
              <p className="mt-2">Telefon: +420 123 456 789</p>
              <p>Email: info@nasavrky.cz</p>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Rychlé odkazy</h3>
            <ul className="flex flex-col gap-2 text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Úvod
                </Link>
              </li>
              <li>
                <Link href="/parcely" className="hover:text-white transition">
                  Dostupné parcely
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nasavrkach"
                  className="hover:text-white transition"
                >
                  O Nasavrkách
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition">
                  Kontaktujte nás
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/80">
          <p>
            © {new Date().getFullYear()} Město Nasavrky. Všechna práva
            vyhrazena.
          </p>
          <p className="text-sm mt-3">
            Tvůrce webu{" "}
            <Link href={"https://linkedin.com/in/patrik-stohanzl"} className="underline">
              Patrik Stohanzl
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
