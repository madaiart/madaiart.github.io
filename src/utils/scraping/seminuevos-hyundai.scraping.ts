import puppeteer from "puppeteer";
// import { ScrapingPages } from "@enums/scraping-pages.enum";

export enum ScrapingPages {
  SeminuevosHyundai = "https://seminuevos.hyundai.com.ec/busqueda",
  SeminuevosKia = "https://seminuevos.com.ec/busqueda#resultados",
  Autocor = "https://www.autocor.com.ec/vehiculos?page=1",
  FullAutos = "https://www.full-autos.com/vehiculos",
  Patiotuerca = "https://ecuador.patiotuerca.com/usados/-/autos?type_autos_moderated=moderated",
  Nautos = "https://www.nautos.com.ec/stock-autos-semi-nuevos/",
  Autocosmos = "https://www.autocosmos.com.ec/auto/usado",
  Carros1001 = "https://www.1001carros.com/seminuevos",
  Ambacar = "https://seminuevos.ambacar.ec/seminuevos",
  MercadoLibre = "https://vehiculos.mercadolibre.com.ec/",
}

async function scrapingHyundai() {
  // Launch the browser and open a page
  const browser = await puppeteer.launch({
    // headless: false, //TODO: This should be true or delete
    // devtools: true, //TODO: This delete
    executablePath:
      "/nix/store/0pj6lchxhdnv7kxbz8g35028j4bx07gi-user-environment/bin/chromium",
  });
  const page = await browser.newPage();

  // Navigate to the page
  await page.goto(ScrapingPages.SeminuevosHyundai);

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  await page.waitForSelector(".card-title strong");

  // Find the element with the id "resultados."
  const resultadosElement = await page.$("#resultados");

  if (resultadosElement) {
    // Use page.$$eval to iterate through elements with the class "card-title strong" and extract the text.
    const cardTitleText = await resultadosElement.$$eval(
      ".card-title strong",
      (elements) => {
        return elements.map((element) => element.textContent?.trim());
      },
    );
    // const km = await resultadosElement.$$eval(".sinsalto span", (elements) => {
    //   return elements.map((element) => element.textContent?.trim());
    // });

    const placa = await resultadosElement.$$eval(
      ".text-muted em",
      (elements) => {
        return elements.map((element) => element.textContent?.trim());
      },
    );

    const year = await resultadosElement.$$eval(
      ".badge.badge-default",
      (elements) => {
        return elements.map((element) => element.textContent?.trim());
      },
    );

    const price = await resultadosElement.$$eval(".precio", (elements) => {
      return elements.map((element) => element.textContent?.trim());
    });

    // Use page.$$eval to find elements with the class "record" and extract the number.
    const recordNumber = await resultadosElement.$$eval(
      ".record",
      (elements) => {
        return elements.map((element) => element.textContent?.trim());
      },
    );

    // Now, 'cardTitleText' contains an array of text, and 'recordNumber' contains an array of numbers.
    console.log("Card Title Text:", cardTitleText);
    console.log("Kilometers:", recordNumber);

    console.log("Placa:", placa);
    console.log("Year:", year);
    console.log("Price:", price);
  }

  //   await browser.close();
}

scrapingHyundai();

/*
yarn ts-node --esm src/utils/scraping/seminuevos-hyundai.scraping.ts
*/
