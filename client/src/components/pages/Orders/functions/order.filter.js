export const orderFilter = object => {
    let itemsArray = []
    // Items
    if (object.platter > 0) {
        itemsArray.push(`Platter: ${object.platter}`);
    }
    if (object.glutenFree > 0) {
        itemsArray.push(`Gluten Free Platter: ${object.glutenFree}`);
    }
    if (object.brownBag > 0) {
        itemsArray.push(`Brown Bag Lunch: ${object.brownBag}`);
    }
    if (object.boxLunch > 0) {
        itemsArray.push(`Box Lunch: ${object.boxLunch}`);
    }
    // Large Sandwhich orders
    if (object.regNovice > 0) {
        itemsArray.push(`Regular Novice: ${object.regNovice}`);
    }
    if (object.regSnarf > 0) {
        itemsArray.push(`Regular Snarf: ${object.regSnarf}`);
    }
    if (object.regPro > 0) {
        itemsArray.push(`Regular Pro: ${object.regPro}`);
    }
    if (object.specSnarf > 0) {
        itemsArray.push(`Specialty Snarf: ${object.specSnarf}`);
    }
    if (object.specPro > 0) {
        itemsArray.push(`Specialty Pro: ${object.specPro}`);
    }
    // Salads
    if (object.cobb > 0) {
        itemsArray.push(`Cobb Salad: ${object.cobb}`);
    }
    if (object.greek > 0) {
        itemsArray.push(`Greek Salad: ${object.greek}`);
    }
    if (object.snarf > 0) {
        itemsArray.push(`Snarf Salad: ${object.snarf}`);
    }
    if (object.tossed > 0) {
        itemsArray.push(`Tossed Salad: ${object.tossed}`);
    }
    // Sides
    if (object.macaroni > 0) {
        itemsArray.push(`Macaroni Salad: ${object.macaroni}`);
    }
    if (object.potato > 0) {
        itemsArray.push(`Potato Salad: ${object.potato}`);
    }
    if (object.coleslaw > 0) {
        itemsArray.push(`Coleslaw: ${object.coleslaw}`);
    }
    if (object.pickles > 0) {
        itemsArray.push(`Pickles: ${object.pickles}`);
    }
    if (object.chips > 0) {
        itemsArray.push(`Chips: ${object.chips}`);
    }
    // Drinks
    if (object.bottled > 0) {
        itemsArray.push(`Bottled Drinks: ${object.bottled}`);
    }
    if (object.izze > 0) {
        itemsArray.push(`Izzes: ${object.izze}`);
    }
    if (object.arizona > 0) {
        itemsArray.push(`Arizona Tea: ${object.arizona}`);
    }
    if (object.gatorade > 0) {
        itemsArray.push(`Gatorade: ${object.gatorade}`);
    }
    if (object.snapple > 0) {
        itemsArray.push(`Snapple: ${object.snapple}`);
    }
    if (object.stewarts > 0) {
        itemsArray.push(`Stewarts: ${object.stewarts}`);
    }
    if (object.can > 0) {
        itemsArray.push(`Canned Soda: ${object.can}`);
    }
    // Desserts
    if (object.cookies > 0) {
        itemsArray.push(`Cookies: ${object.cookies}`);
    }
    if (object.brownies > 0) {
        itemsArray.push(`Brownies: ${object.brownies}`);
    }
    // Extras
    if (object.artichoke > 0) {
        itemsArray.push(`Artichoke: ${object.artichoke}`);
    }
    if (object.bacon > 0) {
        itemsArray.push(`Bacon: ${object.bacon}`);
    }
    if (object.portobello > 0) {
        itemsArray.push(`Portobello: ${object.portobello}`);
    }
    if (object.avocado > 0) {
        itemsArray.push(`Avocado: ${object.avocado}`);
    }
    if (object.meat > 0) {
        itemsArray.push(`Extra Meat: ${object.meat}`);
    }
    if (object.gfBread > 0) {
        itemsArray.push(`Gluten Free Bread: ${object.gfBread}`);
    }
    return itemsArray;
}