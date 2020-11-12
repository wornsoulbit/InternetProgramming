
class Category {

    /**
     * Constructor for a category.
     * 
     * @param { Number } catId Category Id.
     * @param { String } catName Category Name.
     * @param { String } catDesc Category Description.
     */
    constructor(catId, catName, catDesc) {
        this.catId = catId;
        this.catName = catName;
        this.catDesc = catDesc;
    }
}

class Item {

    /**
     * Constructor for a item.
     * 
     * @param { Number } itemId Id of a item.
     * @param { String } itemTitle Title of a item.
     * @param { String } desc Description of a item.
     * @param { String } brand Brand of a item.
     * @param { Number } unitPrice Unit price.
     * @param { Number } quantityInStock Quantity in Stock.
     * @param { String } make Manufacturer of a item.
     * @param { String } thumbnail Image of the item.
     * @param { object } category Category of the item.
     */
    constructor(itemId, itemTitle, desc, brand, unitPrice, quantityInStock, make, thumbnail, category) {
        this.itemId = itemId;
        this.itemTitle = itemTitle;
        this.desc = desc;
        this.brand = brand;
        this.unitPrice = unitPrice;
        this.quantityInStock = quantityInStock;
        this.make = make;
        this.thumbnail = thumbnail;
        this.category = category;
    }
}

var categories = [];
var catalog = [];
var cart = [];

/**
 * Initial cart setup.
 */
function setUpCart() {
    initializeCategories();
    initializeItems();
    showListOfItems();
}

/**
 * Initialize all the categories.
 */
function initializeCategories() {
    categories = [];

    let category = new Category(0, "Games", "Various console/PC games");
    categories.push(category);
    let category = new Category(1, "Consoles", "Various Consoles");
    categories.push(category);
    let category = new Category(2, "Laptops", "Various Laptops");
    categories.push(category);
    let category = new Category(3, "Desktops", "Various Desktops");
    categories.push(category);
    let category = new Category(4, "Keyboards", "Keyboards");
    categories.push(category);
    let category = new Category(5, "Mouses", "Mouses for PCs/Consoles");
    categories.push(category);
    let category = new Category(6, "Controllers", "Controllers for consoles");
    categories.push(category);
    let category = new Category(7, "Networking", "Networking gear");
    categories.push(category);
}

/**
 * Initialize all the items.
 */
function initializeItems() {
    catalog = [];

    let item = new Item(1, "Celeste", "Platformer", "Matt Makes Games", 19.99, 10, "Matt Makes Games", "Images\1200px-Celeste_box_art_final.png", categories[0]);
    catalog.push(item);
    let item = new Item(2, "PS5", "Playstation 5", "Sony", 499.99, 5, "Sony", "Images\ps560.png",  categories[1]);
    catalog.push(item);
    let item = new Item(3, "Xbox Series X", "Xbox Series X", "Microsoft", 499.99, 5, "Microsoft", "Images\NsoHYKDiUwbnB4smAF4UGE.jpg",  categories[1]);
    catalog.push(item);
    let item = new Item(4, "Xbox Series S", "Xbox Series S", "Microsoft", 299.99, 5, "Microsoft", "Images\NsoHYKDiUwbnB4smAF4UGE.jpg",  categories[1]);
    catalog.push(item);
    let item = new Item(5, "LG Gram 17\"", "Lightweight & High performance Laptop", "LG", 1699.99, 4, "LG", "Images\350-v1.jpg", categories[2]);
    catalog.push(item);
    let item = new Item(6, "ROG Zephyrus G15 Series", "Gaming Laptop", "Asus", 1399.99, 3, "Asus", "Images\w250.png", categories[1]);
    catalog.push(item);
    let item = new Item(7, "Factorio", "Factory, survival", "Wube Software", 30.00, 5, "Wube Software", "Images\capsule_616x353.jpg", categories[0]);
    catalog.push(item);
    let item = new Item(8, "Europa Universalis 4", "Grand Strategy Game, RTS", "Paradox Interactive", 39.99, 5, "PDX", "Images\EuropaUniversalisIV_Packshot_edited.png", categories[0]);
    catalog.push(item);
    let item = new Item(9, "Ducky One Two RGB TKL", "Mechanical Keyboard", "Ducky", 125.00, 3, "Ducky", "Images\large_4284_large_DKON1787ST-USPDAZT1_main.jpg", categories[4]);
    catalog.push(item);
    let item = new Item(10, "Razer Naga Trinity", "Razer Mouse", "Razer", 99.99, 3, "Razer", "Images\razerNagaTrinity.jpg", categories[5]);
    catalog.push(item);
}

/**
 * Shows a Alert message when called.
 * 
 * @param { String } cssClass Alert message class.
 * @param { String } messageToDisplay Message to be displayed.
 */
function showStatusMessage(cssClass, messageToDisplay) {
    let alertBox = document.getElementById("alertBox");
    alertBox.style.display = "block";
    alertBox.setAttribute("class", cssClass);
    alertBox.innerHTML = "<p>" + messageToDisplay + "</p>";
    setTimeout(hideStatusMessage, 5000);
}

/**
 * Hides the current alert message.
 */
function hideStatusMessage() {
    let alertBox = document.getElementById("alertBox");
    alertBox.style.display = "none";
}

function showListOfItems() {

}

function viewCart() {

}

function findItemById() {

}

function showItemDetails(itemId) {

}

/**
 * Adds a item to the cart.
 * 
 * @param { Number } itemId 
 */
function addToCart(itemId) {
    if (!itemId > catalog.length) {
        cart.push(catalog[itemId]);
        showStatusMessage("alert-success", "Successfully added item to cart");
    } else {
        console.log("somehow here we are, an item that doesn't exist in the catalog is somehow added?????????????????");
        showStatusMessage("alert-danger", "Somehow you tried to add an item that doesn't exist so congrats");
    }
}

/**
 * Remove a item from the cart.
 * 
 * @param { Number } itemId 
 */
function removeFromCart(itemId) {
    cart.forEach(function (x) {
        if (x == itemId) {
            cart.splice(x, 1);
            break;
        }
    });
    //some alert goes here for the item being removed.
    showStatusMessage("alert-info", "Successfully removed item from cart");
}

function searchByKeyword(keyword) {

}