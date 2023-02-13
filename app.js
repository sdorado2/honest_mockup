let products = [
  {
    title: "Calm + Heal Melting Balm",
    price: "$32.99",
    starRating: 4,
    image:
      "https://www.honest.com/on/demandware.static/-/Sites-HC-master-catalog/default/dwbff4574e/images/large/calm-heal-melting-balm/Restage-CalmHealMeltingBalm/copygif.gif",
  },
  {
    title: "Hydrogel Cream",
    price: "$19.99",
    starRating: 5,
    image:
      "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwbe75ab74/images/large/Hydrogel-Cream/BeautyRestageHydrogelCream/hydrogelonwater.jpg?sw=400&sh=400&sm=fit",
  },
  {
    title: "Daily Green Juice Antioxidant Super Serum",
    price: "$24.99",
    starRating: 0,
    image:
      "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw4cefbe8c/images/large/Daily-Green-Juice-Antioxidant-Super-Serum/DailyGreenJuice_ingredient_hero.jpg?sw=400&sh=400&sm=fit",
  },
  {
    title: "Calm + Heal Melting Balm",
    price: "$32.99",
    starRating: 4,
    image:
      "https://www.honest.com/on/demandware.static/-/Sites-HC-master-catalog/default/dwbff4574e/images/large/calm-heal-melting-balm/Restage-CalmHealMeltingBalm/copygif.gif",
  },
  {
    title: "Hydrogel Cream",
    price: "$19.99",
    starRating: 5,
    image:
      "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwbe75ab74/images/large/Hydrogel-Cream/BeautyRestageHydrogelCream/hydrogelonwater.jpg?sw=400&sh=400&sm=fit",
  },
  {
    title: "Daily Green Juice Antioxidant Super Serum",
    price: "$24.99",
    starRating: 0,
    image:
      "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw4cefbe8c/images/large/Daily-Green-Juice-Antioxidant-Super-Serum/DailyGreenJuice_ingredient_hero.jpg?sw=400&sh=400&sm=fit",
  },
  {
    title: "Calm + Heal Melting Balm",
    price: "$32.99",
    starRating: 4,
    image:
      "https://www.honest.com/on/demandware.static/-/Sites-HC-master-catalog/default/dwbff4574e/images/large/calm-heal-melting-balm/Restage-CalmHealMeltingBalm/copygif.gif",
  },
  {
    title: "Hydrogel Cream",
    price: "$19.99",
    starRating: 5,
    image:
      "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwbe75ab74/images/large/Hydrogel-Cream/BeautyRestageHydrogelCream/hydrogelonwater.jpg?sw=400&sh=400&sm=fit",
  },
  {
    title: "Daily Green Juice Antioxidant Super Serum",
    price: "$24.99",
    starRating: 0,
    image:
      "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw4cefbe8c/images/large/Daily-Green-Juice-Antioxidant-Super-Serum/DailyGreenJuice_ingredient_hero.jpg?sw=400&sh=400&sm=fit",
  },
  {
    title: "Calm + Heal Melting Balm",
    price: "$32.99",
    starRating: 4,
    image:
      "https://www.honest.com/on/demandware.static/-/Sites-HC-master-catalog/default/dwbff4574e/images/large/calm-heal-melting-balm/Restage-CalmHealMeltingBalm/copygif.gif",
  },
  {
    title: "Hydrogel Cream",
    price: "$19.99",
    starRating: 5,
    image:
      "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwbe75ab74/images/large/Hydrogel-Cream/BeautyRestageHydrogelCream/hydrogelonwater.jpg?sw=400&sh=400&sm=fit",
  },
  {
    title: "Daily Green Juice Antioxidant Super Serum",
    price: "$24.99",
    starRating: 0,
    image:
      "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw4cefbe8c/images/large/Daily-Green-Juice-Antioxidant-Super-Serum/DailyGreenJuice_ingredient_hero.jpg?sw=400&sh=400&sm=fit",
  },
  {
    title: "Calm + Heal Melting Balm",
    price: "$32.99",
    starRating: 4,
    image:
      "https://www.honest.com/on/demandware.static/-/Sites-HC-master-catalog/default/dwbff4574e/images/large/calm-heal-melting-balm/Restage-CalmHealMeltingBalm/copygif.gif",
  },
  {
    title: "Hydrogel Cream",
    price: "$19.99",
    starRating: 5,
    image:
      "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwbe75ab74/images/large/Hydrogel-Cream/BeautyRestageHydrogelCream/hydrogelonwater.jpg?sw=400&sh=400&sm=fit",
  },
  {
    title: "Daily Green Juice Antioxidant Super Serum",
    price: "$24.99",
    starRating: 0,
    image:
      "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw4cefbe8c/images/large/Daily-Green-Juice-Antioxidant-Super-Serum/DailyGreenJuice_ingredient_hero.jpg?sw=400&sh=400&sm=fit",
  },
];

const populateBox = () => {
  products.forEach((object) => {
    createProductBox(object);
  });
};

const createProductBox = (obj) => {
  //Push Box into a container
  let main = document.querySelector(".majorContainer");

  // Create the Image
  // Create productContainer
  let proContainer = document.createElement("div");
  proContainer.setAttribute("class", "produx");

  let pic = document.createElement("img");
  pic.setAttribute("src", obj.image);
  pic.setAttribute("class", "pxImg");
  // pic.setAttribute('class', 'tt')

  //Create the price
  let price = document.createElement("div");
  price.setAttribute("src", "price");
  price.innerHTML = obj.price;

  // Create the text
  let text = document.createElement("div");
  text.setAttribute("class", "tt");
  text.innerHTML = obj.title;

  // Create the stars
  // let star = document.querySelector('div');

  proContainer.append(pic);
  proContainer.append(text);
  proContainer.append(price);
  main.append(proContainer);
};
