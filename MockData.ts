export interface Parcela {
  id: number;
  nazev: string;
  lokalita: string;
  cena: string;
  plocha: string;
  obrazek: string;
  zona?: string;
}

export const VšechnyParcely: Parcela[] = [
  {
    id: 1,
    nazev: 'Obytná zóna A - Parcela 12',
    lokalita: 'Severní Nasavrky',
    cena: '1 250 000',
    plocha: '850',
    obrazek: '/parcely/parcela-1/image.jpg',
  },
  {
    id: 2,
    nazev: 'Obytná zóna B - Parcela 7',
    lokalita: 'Východní Nasavrky',
    cena: '1 450 000',
    plocha: '950',
    obrazek: '/parcely/parcela-2/image.jpg',
  },
  {
    id: 3,
    nazev: 'Centrální oblast - Parcela 3',
    lokalita: 'Centrum Nasavrk',
    cena: '1 650 000',
    plocha: '750',
    obrazek: '/parcely/parcela-3/image.jpg',
  },
];