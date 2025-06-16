export interface Parcela {
  id: string;
  nazev: string;
  lokalita: string;
  plocha: number;
  cena?: number;
  obrazky: string[];
  prodano?: boolean;
  rezervovano?: boolean;
}

export const pricePerMeter = 3450;

[
  "/pozemky/2053.1011/1.webp", "/pozemky/2053.1011/2.webp", "/pozemky/2053.1011/3.webp", "/pozemky/2053.1011/4.webp", "/pozemky/2053.1011/5.webp", "/pozemky/2053.1011/6.webp", "/pozemky/2053.1011/7.webp", "/pozemky/2053.1011/8.webp"
]

let a = ["/pozemky/2053.1011/1.webp", "/pozemky/2053.1011/2.webp", "/pozemky/2053.1011/3.webp", "/pozemky/2053.1011/4.webp", "/pozemky/2053.1011/5.webp", "/pozemky/2053.1011/6.webp", "/pozemky/2053.1011/7.webp", "/pozemky/2053.1011/8.webp", "/pozemky/zadni/1.webp", "/pozemky/zadni/2.webp", "/pozemky/zadni/3.webp", "/pozemky/zadni/4.webp", "/pozemky/zadni/5.webp", "/pozemky/zadni/6.webp", "/pozemky/zadni/7.webp"]

let AllParcels: Parcela[] = [
  {
    id: "2000/44",
    nazev: "Ukázka rezervovaného pozemku",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 867,
    rezervovano: true,
    obrazky: ["/pozemky/2052.67/5.webp", "/pozemky/2052.67/2.webp", "/pozemky/2052.67/3.webp", "/pozemky/2052.67/4.webp", "/pozemky/2052.67/1.webp", "/pozemky/prostred/1.webp", "/pozemky/prostred/2.webp", "/pozemky/prostred/3.webp", "/pozemky/prostred/4.webp", "/pozemky/prostred/5.webp", "/pozemky/prostred/6.webp", "/pozemky/prostred/7.webp"]
  },
  {
    id: "2052/6",
    nazev: "Pozemek 2052/6",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 878,
    obrazky: ["/pozemky/2052.67/1.webp", "/pozemky/2052.67/2.webp", "/pozemky/2052.67/3.webp", "/pozemky/2052.67/4.webp", "/pozemky/2052.67/5.webp", "/pozemky/prostred/1.webp", "/pozemky/prostred/2.webp", "/pozemky/prostred/3.webp", "/pozemky/prostred/4.webp", "/pozemky/prostred/5.webp", "/pozemky/prostred/6.webp", "/pozemky/prostred/7.webp"]
  },
  {
    id: "2053/3",
    nazev: "Pozemek 2053/3",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 883,
    obrazky: ["/pozemky/2053.345/1.webp", "/pozemky/2053.345/2.webp", "/pozemky/2053.345/3.webp", "/pozemky/2053.345/4.webp", "/pozemky/2053.345/5.webp", "/pozemky/2053.3456/1.webp", "/pozemky/prostred/1.webp", "/pozemky/prostred/2.webp", "/pozemky/prostred/3.webp", "/pozemky/prostred/4.webp", "/pozemky/prostred/5.webp", "/pozemky/prostred/6.webp", "/pozemky/prostred/7.webp"]
  },
  {
    id: "2053/1",
    nazev: "Pozemek 2053/1",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 822,
    obrazky: ["/pozemky/2053.12/1.webp", "/pozemky/2053.12/2.webp", "/pozemky/2053.12/3.webp", "/pozemky/20523.23.12/1.webp", "/pozemky/20523.23.12/2.webp", "/pozemky/20523.23.12/3.webp", "/pozemky/20523.23.12/4.webp", "/pozemky/20523.23.12/5.webp", "/pozemky/20523.23.12/6.webp", "/pozemky/20523.23.12/7.webp"]
  },
  {
    id: "2053/2",
    nazev: "Pozemek 2053/2",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 785,
    obrazky: ["/pozemky/2053.12/2.webp", "/pozemky/2053.12/1.webp", "/pozemky/2053.12/3.webp", "/pozemky/20523.23.12/1.webp", "/pozemky/20523.23.12/2.webp", "/pozemky/20523.23.12/3.webp", "/pozemky/20523.23.12/4.webp", "/pozemky/20523.23.12/5.webp", "/pozemky/20523.23.12/6.webp", "/pozemky/20523.23.12/7.webp"]
  },
  {
    id: "2052/3",
    nazev: "Pozemek 2052/3",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 785,
    obrazky: ["/pozemky/2052.2,3/1.webp", "/pozemky/2052.2,3/video.mp4", "/pozemky/20523.23.12/1.webp", "/pozemky/20523.23.12/2.webp", "/pozemky/20523.23.12/3.webp", "/pozemky/20523.23.12/4.webp", "/pozemky/20523.23.12/5.webp", "/pozemky/20523.23.12/6.webp", "/pozemky/20523.23.12/7.webp"]
  },
  {
    id: "2052/2",
    nazev: "Pozemek 2052/2",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 1054,
    obrazky: ["/pozemky/2052.2,3/1.webp", "/pozemky/2052.2,3/video.mp4", "/pozemky/20523.23.12/1.webp", "/pozemky/20523.23.12/2.webp", "/pozemky/20523.23.12/3.webp", "/pozemky/20523.23.12/4.webp", "/pozemky/20523.23.12/5.webp", "/pozemky/20523.23.12/6.webp", "/pozemky/20523.23.12/7.webp"]
  },
  {
    id: "2052/4",
    nazev: "Pozemek 2052/4",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 881,
    obrazky: ["/pozemky/2052.45/1.webp", "/pozemky/2052.45/2.webp", "/pozemky/2052.45/3.webp", "/pozemky/2052.45/4.webp", "/pozemky/2052.45/5.webp", "/pozemky/2052.45/6.webp", "/pozemky/prostred/1.webp", "/pozemky/prostred/2.webp", "/pozemky/prostred/3.webp", "/pozemky/prostred/4.webp", "/pozemky/prostred/5.webp", "/pozemky/prostred/6.webp", "/pozemky/prostred/7.webp"]
  },
  {
    id: "2052/5",
    nazev: "Pozemek 2052/5",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 835,
    obrazky: ["/pozemky/2052.45/2.webp", "/pozemky/2052.45/1.webp", "/pozemky/2052.45/3.webp", "/pozemky/2052.45/4.webp", "/pozemky/2052.45/5.webp", "/pozemky/2052.45/6.webp", "/pozemky/prostred/1.webp", "/pozemky/prostred/2.webp", "/pozemky/prostred/3.webp", "/pozemky/prostred/4.webp", "/pozemky/prostred/5.webp", "/pozemky/prostred/6.webp", "/pozemky/prostred/7.webp"]
  },
  {
    id: "2052/7",
    nazev: "Pozemek 2052/7",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 909,
    obrazky: ["/pozemky/2052.67/2.webp", "/pozemky/2052.67/1.webp", "/pozemky/2052.67/3.webp", "/pozemky/2052.67/4.webp", "/pozemky/2052.67/5.webp", "/pozemky/prostred/1.webp", "/pozemky/prostred/2.webp", "/pozemky/prostred/3.webp", "/pozemky/prostred/4.webp", "/pozemky/prostred/5.webp", "/pozemky/prostred/6.webp", "/pozemky/prostred/7.webp"]
  },
  {
    id: "2053/9",
    nazev: "Pozemek 2053/9",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 918,
    obrazky: ["/pozemky/2053.789/3.webp", "/pozemky/2053.789/1.webp", "/pozemky/2053.789/1.webp", "/pozemky/2053.789/4.webp", "/pozemky/2053.789/5.webp", "/pozemky/2053.789/6.webp", "/pozemky/2053.789/7.webp", "/pozemky/2053.789/8.webp", "/pozemky/zadni/1.webp", "/pozemky/zadni/2.webp", "/pozemky/zadni/3.webp", "/pozemky/zadni/4.webp", "/pozemky/zadni/5.webp", "/pozemky/zadni/6.webp", "/pozemky/zadni/7.webp"]
  },
  {
    id: "2053/8",
    nazev: "Pozemek 2053/8",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 931,
    obrazky: ["/pozemky/2053.789/2.webp", "/pozemky/2053.789/1.webp", "/pozemky/2053.789/3.webp", "/pozemky/2053.789/4.webp", "/pozemky/2053.789/5.webp", "/pozemky/2053.789/6.webp", "/pozemky/2053.789/7.webp", "/pozemky/2053.789/8.webp", "/pozemky/zadni/1.webp", "/pozemky/zadni/2.webp", "/pozemky/zadni/3.webp", "/pozemky/zadni/4.webp", "/pozemky/zadni/5.webp", "/pozemky/zadni/6.webp", "/pozemky/zadni/7.webp"]
  },
  {
    id: "2053/7",
    nazev: "Pozemek 2053/7",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 833,
    obrazky: ["/pozemky/2053.789/1.webp", "/pozemky/2053.789/2.webp", "/pozemky/2053.789/3.webp", "/pozemky/2053.789/4.webp", "/pozemky/2053.789/5.webp", "/pozemky/2053.789/6.webp", "/pozemky/2053.789/7.webp", "/pozemky/2053.789/8.webp", "/pozemky/zadni/1.webp", "/pozemky/zadni/2.webp", "/pozemky/zadni/3.webp", "/pozemky/zadni/4.webp", "/pozemky/zadni/5.webp", "/pozemky/zadni/6.webp", "/pozemky/zadni/7.webp"]
  },
  {
    id: "2053/6",
    nazev: "Pozemek 2053/6",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 839,
    obrazky: ["/pozemky/2053.6/1.webp", "/pozemky/2053.6/2.webp", "/pozemky/2053.6/3.webp", "/pozemky/2053.6/4.webp", "/pozemky/2053.6/5.webp", "/pozemky/2053.3456/1.webp", "/pozemky/prostred/1.webp", "/pozemky/prostred/2.webp", "/pozemky/prostred/3.webp", "/pozemky/prostred/4.webp", "/pozemky/prostred/5.webp", "/pozemky/prostred/6.webp", "/pozemky/prostred/7.webp"]
  },
  {
    id: "2053/5",
    nazev: "Pozemek 2053/5",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 902,
    obrazky: ["/pozemky/2053.345/3.webp", "/pozemky/2053.345/1.webp", "/pozemky/2053.345/2.webp", "/pozemky/2053.345/4.webp", "/pozemky/2053.345/5.webp", "/pozemky/2053.3456/1.webp", "/pozemky/prostred/1.webp", "/pozemky/prostred/2.webp", "/pozemky/prostred/3.webp", "/pozemky/prostred/4.webp", "/pozemky/prostred/5.webp", "/pozemky/prostred/6.webp", "/pozemky/prostred/7.webp"]
  },
  {
    id: "2053/4",
    nazev: "Pozemek 2053/4",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 958,
    obrazky: ["/pozemky/2053.345/2.webp", "/pozemky/2053.345/1.webp", "/pozemky/2053.345/3.webp", "/pozemky/2053.345/4.webp", "/pozemky/2053.345/5.webp", "/pozemky/2053.3456/1.webp", "/pozemky/prostred/1.webp", "/pozemky/prostred/2.webp", "/pozemky/prostred/3.webp", "/pozemky/prostred/4.webp", "/pozemky/prostred/5.webp", "/pozemky/prostred/6.webp", "/pozemky/prostred/7.webp"]
  },
  {
    id: "2052/8",
    nazev: "Pozemek 2052/8",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 982,
    obrazky: ["/pozemky/2052.89/1.webp", "/pozemky/2052.89/2.webp", "/pozemky/2052.89/3.webp", "/pozemky/2052.89/4.webp", "/pozemky/2052.89/5.webp", "/pozemky/2052.89/6.webp", "/pozemky/2052.89/7.webp", "/pozemky/zadni/1.webp", "/pozemky/zadni/2.webp", "/pozemky/zadni/3.webp", "/pozemky/zadni/4.webp", "/pozemky/zadni/5.webp", "/pozemky/zadni/6.webp", "/pozemky/zadni/7.webp"]
  },
  {
    id: "2052/9",
    nazev: "Pozemek 2052/9",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 988,
    obrazky: ["/pozemky/2052.89/2.webp", "/pozemky/2052.89/1.webp", "/pozemky/2052.89/3.webp", "/pozemky/2052.89/4.webp", "/pozemky/2052.89/5.webp", "/pozemky/2052.89/6.webp", "/pozemky/2052.89/7.webp", "/pozemky/zadni/1.webp", "/pozemky/zadni/2.webp", "/pozemky/zadni/3.webp", "/pozemky/zadni/4.webp", "/pozemky/zadni/5.webp", "/pozemky/zadni/6.webp", "/pozemky/zadni/7.webp"]
  },
  {
    id: "2051/4",
    nazev: "Pozemek 2051/4",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 1122,
    obrazky: ["/pozemky/2051.432/1.webp", "/pozemky/2051.432/2.webp", "/pozemky/2051.432/3.webp", "/pozemky/2051.432/4.webp", "/pozemky/2051.432/5.webp", "/pozemky/2051.432/6.webp", "/pozemky/2051.432/7.webp", "/pozemky/2051.432/8.webp", "/pozemky/2051.432/9.webp", "/pozemky/2051.432/10.webp", "/pozemky/2051.432/11.webp", "/pozemky/2051.432/12.webp", "/pozemky/zadni/1.webp", "/pozemky/zadni/2.webp", "/pozemky/zadni/3.webp", "/pozemky/zadni/4.webp", "/pozemky/zadni/5.webp", "/pozemky/zadni/6.webp", "/pozemky/zadni/7.webp"]
  },
  {
    id: "2051/3",
    nazev: "Pozemek 2051/3",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 956,
    obrazky: ["/pozemky/2051.432/2.webp", "/pozemky/2051.432/1.webp", "/pozemky/2051.432/3.webp", "/pozemky/2051.432/4.webp", "/pozemky/2051.432/5.webp", "/pozemky/2051.432/6.webp", "/pozemky/2051.432/7.webp", "/pozemky/2051.432/8.webp", "/pozemky/2051.432/9.webp", "/pozemky/2051.432/10.webp", "/pozemky/2051.432/11.webp", "/pozemky/2051.432/12.webp", "/pozemky/zadni/1.webp", "/pozemky/zadni/2.webp", "/pozemky/zadni/3.webp", "/pozemky/zadni/4.webp", "/pozemky/zadni/5.webp", "/pozemky/zadni/6.webp", "/pozemky/zadni/7.webp"]
  },
  {
    id: "2051/2",
    nazev: "Pozemek 2051/2",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 985,
    obrazky: ["/pozemky/2051.432/3.webp", "/pozemky/2051.432/1.webp", "/pozemky/2051.432/1.webp", "/pozemky/2051.432/4.webp", "/pozemky/2051.432/5.webp", "/pozemky/2051.432/6.webp", "/pozemky/2051.432/7.webp", "/pozemky/2051.432/8.webp", "/pozemky/2051.432/9.webp", "/pozemky/2051.432/10.webp", "/pozemky/2051.432/11.webp", "/pozemky/2051.432/12.webp", "/pozemky/zadni/1.webp", "/pozemky/zadni/2.webp", "/pozemky/zadni/3.webp", "/pozemky/zadni/4.webp", "/pozemky/zadni/5.webp", "/pozemky/zadni/6.webp", "/pozemky/zadni/7.webp"]
  },
  {
    id: "2053/11",
    nazev: "Pozemek 2053/11",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 932,
    prodano: true,
    obrazky: ["/pozemky/2053.1011/2.webp", "/pozemky/2053.1011/1.webp", "/pozemky/2053.1011/3.webp", "/pozemky/2053.1011/4.webp", "/pozemky/2053.1011/5.webp", "/pozemky/2053.1011/6.webp", "/pozemky/2053.1011/7.webp", "/pozemky/2053.1011/8.webp", "/pozemky/zadni/1.webp", "/pozemky/zadni/2.webp", "/pozemky/zadni/3.webp", "/pozemky/zadni/4.webp", "/pozemky/zadni/5.webp", "/pozemky/zadni/6.webp", "/pozemky/zadni/7.webp"]
  },
  {
    id: "2053/10",
    nazev: "Pozemek 2053/10",
    lokalita: "Větrná 415-400, 538 25 Nasavrky",
    plocha: 876,
    obrazky: ["/pozemky/2053.1011/1.webp", "/pozemky/2053.1011/2.webp", "/pozemky/2053.1011/3.webp", "/pozemky/2053.1011/4.webp", "/pozemky/2053.1011/5.webp", "/pozemky/2053.1011/6.webp", "/pozemky/2053.1011/7.webp", "/pozemky/2053.1011/8.webp", "/pozemky/zadni/1.webp", "/pozemky/zadni/2.webp", "/pozemky/zadni/3.webp", "/pozemky/zadni/4.webp", "/pozemky/zadni/5.webp", "/pozemky/zadni/6.webp", "/pozemky/zadni/7.webp"]
  }
];

AllParcels.forEach((parcela) => {
  if (!parcela.cena) {
    parcela.cena = Math.round(parcela.plocha * pricePerMeter);
  }
})

export function getAllParcels() { return AllParcels };