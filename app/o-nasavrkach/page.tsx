import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white">
      <Head>
        <title>O Nasavrkách | Naše krásné město</title>
        <meta name="description" content="Objevte kouzlo města Nasavrky" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-amber-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Vítejte v Nasavrkách</h1>
          <p className="text-lg">
            Objevte historii, krásy přírody a unikátní atmosféru našeho města.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Historie a současnost */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/nasavrky_zamek_1.jpg"
                alt="Zámek Nasavrky"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Historie a současnost
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nasavrky jsou malebné městečko v okrese Chrudim s bohatou
                historií sahající až do 14. století. Původně královské město,
                darované Karlem IV. olomouckému biskupovi, se postupně stalo
                centrem regionu.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dnes Nasavrky nabízejí jedinečnou kombinaci historie, přírody a
                moderního života. S přibližně 1 700 obyvateli představují
                ideální místo pro klidný život i turistiku.
              </p>
            </div>
          </div>
        </section>

        {/* Zajímavosti */}
        <section className="mb-12 mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Zajímavosti a atrakce
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Zámek Nasavrky",
                description: "Renesanční skvost s expozicí o životě Keltů.",
                image: "/nasavrky_zamek.jpg",
                url: "https://www.nasavrky.cz/zamek/d-1149",
              },
              {
                title: "Kostel sv. Jiljí",
                description: "Gotická památka ze 14. století.",
                image: "/kostel_sv_jiljí.jpg",
                url: "https://www.nasavrky.cz/kostel-sv-jilji/d-1148",
              },
              {
                title: "Keltský skanzen",
                description: "Unikátní open-air muzeum keltské kultury.",
                image: "/keltsky_skanzen.jpg",
                url: "https://zemekeltu.cz/",
              },
              {
                title: "Strádovské Peklo",
                description: "Přírodní rezervace v údolí řeky Chrudimky.",
                image: "/stradovske_peklo.jpg",
                url: "https://www.kudyznudy.cz/aktivity/prirodni-rezervace-krkanka-a-stradovske-peklo-udol",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Link href={item.url}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Přijeďte nás navštívit!
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Ať už hledáte klidný víkend, chcete poznat historii nebo si užít
            přírodu, Nasavrky jsou tou pravou volbou.
          </p>
          <Link
            href="/#info"
            className="inline-block bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition duration-300"
          >
            Více informací o ubytování
          </Link>
        </section>
      </main>
    </div>
  );
}
