import fs from 'fs/promises'
import path from 'path';

const parcels = JSON.parse((await fs.readFile(path.resolve("./parcels.json"))).toString());

for (const parcel of parcels) {
    parcel.obrazky = (await fs.readdir(path.resolve(`./public/pozemky/${parcel.id.replace("/", ",")}/`))).map(x => `/pozemky/${parcel.id.replace("/", ",")}/${x}`);
}

await fs.writeFile(path.resolve("./parcels.json"), JSON.stringify(parcels));