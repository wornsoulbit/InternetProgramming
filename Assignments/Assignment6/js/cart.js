
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
    
    category = new Category(1, "Consoles", "Various Consoles");
    categories.push(category);
    
    category = new Category(2, "Laptops", "Various Laptops");
    categories.push(category);
    
    category = new Category(3, "Desktops", "Various Desktops");
    categories.push(category);
    
    category = new Category(4, "Keyboards", "Keyboards");
    categories.push(category);
    
    category = new Category(5, "Mouses", "Mouses for PCs/Consoles");
    categories.push(category);
    
    category = new Category(6, "Controllers", "Controllers for consoles");
    categories.push(category);
    
    category = new Category(7, "Headphones", "Headphones");
    categories.push(category);
}

/**
 * Initialize all the items.
 */
function initializeItems() {
    catalog = [];

    let item = new Item(0, "Celeste", "Platformer", "Matt Makes Games", 19.99, 10, "Matt Makes Games", "Images\\1200px-Celeste_box_art_final.png", categories[0]);
    catalog.push(item);
    
    item = new Item(1, "PS5", "Playstation 5", "Sony", 499.99, 5, "Sony", "Images\\ps560.png",  categories[1]);
    catalog.push(item);
    
    item = new Item(2, "Xbox Series X", "Xbox Series X", "Microsoft", 499.99, 5, "Microsoft", "Images\\NsoHYKDiUwbnB4smAF4UGE.jpg",  categories[1]);
    catalog.push(item);
    
    item = new Item(3, "Xbox Series S", "Xbox Series S", "Microsoft", 299.99, 5, "Microsoft", "Images\\NsoHYKDiUwbnB4smAF4UGE.jpg",  categories[1]);
    catalog.push(item);
    
    item = new Item(4, "LG Gram 17\"", "Lightweight & High performance Laptop", "LG", 1699.99, 4, "LG", "Images\\350-v1.jpg", categories[2]);
    catalog.push(item);
    
    item = new Item(5, "ROG Zephyrus G15 Series", "Gaming Laptop", "Asus", 1399.99, 3, "Asus", "Images\\w250.png", categories[2]);
    catalog.push(item);
    
    item = new Item(6, "Factorio", "Factory, survival", "Wube Software", 30.00, 5, "Wube Software", "Images\\capsule_616x353.jpg", categories[0]);
    catalog.push(item);
    
    item = new Item(7, "Europa Universalis 4", "Grand Strategy Game, RTS", "Paradox Interactive", 39.99, 5, "PDX", "Images\\EuropaUniversalisIV_Packshot_edited.png", categories[0]);
    catalog.push(item);
    
    item = new Item(8, "Ducky One Two RGB TKL", "Mechanical Keyboard", "Ducky", 125.00, 3, "Ducky", "Images\\large_4284_large_DKON1787ST-USPDAZT1_main.jpg", categories[4]);
    catalog.push(item);
    
    item = new Item(9, "Razer Naga Trinity", "Razer Mouse", "Razer", 99.99, 3, "Razer", "Images\\razerNagaTrinity.jpg", categories[5]);
    catalog.push(item);

    item = new Item(10, "PS5 Controller", "Playstation Controller", "Sony", 49.99, 3, "Sony", "Images\\DualSense-Controller.webp", categories[6]);
    catalog.push(item);

    item = new Item(11, "Xbox X Controller", "Xbox X Controller", "Microsoft", 49.99, 7, "Microsoft", "Images\\index.jpg", categories[6]);
    catalog.push(item);

    item = new Item(12, "HyperX Cloud II", "HyperX Headphones", "HyperX", 99.99, 5, "HyperX", "Images\\hyperXHeadphones.jpg", categories[7]);
    catalog.push(item);

    item = new Item(13, "NZXT Starter PC", "Entry Level Desktop PC", "NZXT", 699.99, 2, "NZXT", "Images\\images_gallery_5f60d3b49393c.png", categories[3]);
    catalog.push(item);

    item = new Item(14, "Razer Blackshark v2", "Wireless Razer Headphones", "Razer", 179.99, 4, "Razer", "Images\\2020-07-30-product-7.webp", categories[7]);
    catalog.push(item);

    item = new Item(15, "Razer Blackshark v2x", "Wired Razer Headphones", "Razer", 59.99, 8, "Razer", "Images\\2020-07-30-product-7.webp", categories[7]);
    catalog.push(item);

    item = new Item(16, "Far Cry 6", "Far From Crying", "Ubisoft Toronto", 79.99, 2, "Ubisoft Toronto", "Images\\far-cry-6-placeholder-1594397352824.jpg", categories[0]);
    catalog.push(item);

    item = new Item(17, "Osu!", "Click those circles!", "Dean Herbert", 0, 1000, "Dean Herbert", "Images\\1200px-Osu!Logo_(2015).svg.png", categories[0]);
    catalog.push(item);

    item = new Item(18, "Rocket League", "Left steam forever", "Pysonix", 0, 1000, "Pysonix", "Images\\rocket-league-switch-hero.jpg", categories[0]);
    catalog.push(item);

    item = new Item(19, "Skyrim", "\"It's a pretty cool game\" -Anon", "Bethesda", 19.99, 2, "Bethesda", "Images\\220px-The_Elder_Scrolls_V_Skyrim_cover.png", categories[0]);
    catalog.push(item);
}

/**
 * Makes a request to search whats given in the search text-box.
 */
function makeAjaxCall() {
    ajaxObj = new XMLHttpRequest();
    keyword = document.getElementById("textbox").value;
    console.log(keyword);
    if (keyword != "") {
        ajaxObj.open("GET", "search.php?query=" + keyword, true);
        ajaxObj.onreadystatechange = processResponse;
        ajaxObj.send();
    } else {
        setUpCart();
    }
}

/**
 * Processes the Ajax response and returns a JSON 
 * file with all the relevant search terms in it.
 */
function processResponse() {
    if (ajaxObj.readyState === XMLHttpRequest.DONE) {
        document.getElementById("itemsCards").innerHTML = "";
        let stringResponse = ajaxObj.responseText;
        parseJsonData(stringResponse);
        showListOfItems();
    }
}

/**
 * Parses the JSON response and displays the output onto the webpage.
 * 
 * @param { String } strData The JSON data to be parsed.
 */
function parseJsonData(strData) {
    let parsedJSON = JSON.parse(strData);
    let jsonCategories = parsedJSON.categories;
    catalog = [];
    categories = [];

    for (var i = 0; i < jsonCategories.length; i++) {
        categories.push(jsonCategories[i]);
        for (var j = 0; j < jsonCategories[i].items.length; j++) {
            catalog.push(jsonCategories[i].items[j]);
        }
    }
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

/**
 * Shows all the items in the catalog on the webpage.
 */
function showListOfItems() {
    document.getElementById("itemsCards").innerHTML = "";

    let listOfItems = "<div class=\"row\">";
    for (var i = 0; i < catalog.length; i++) {
        listOfItems += 
        "<div class=\"card col-sm-3\" style=\"width: 16rem;\">" + 
            "<img class=\"card-img-top\" src=\"" + catalog[i].thumbnail + "\" alt=\"Card image cap\">" +
            "<div class=\"card-body\">" +
                "<h5 class=\"card-title\">" + catalog[i].itemTitle + "</h5>" +
                "<p class=\"card-text\">" + catalog[i].desc + "</p>" + 
                "<button onClick=\"addToCart(" + i + ")\" class=\"btn btn-success\">Add to Cart</button>" + 
                "<button onClick=\"showItemDetails(" + i + ")\" class=\"btn btn-secondary\">Item Details</button>" + 
            "</div>" + 
        "</div>";
    }

    document.getElementById("itemsCards").innerHTML += listOfItems + "</div>";
}

/**
 * Shows whats in the cart.
 */
function viewCart() {
    document.getElementById("itemsCards").innerHTML = "";
    let itemDetails = "";

    itemDetails += 
    `<table class="table">
    <thead class="thead-dark">
        <tr>
            <th>Items Id</th>
            <th>Item Title</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity in Stock</th>
            <th>Make</th>
            <th>Image</th>
            <th>Category</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>`
        for (var i = 0; i < cart.length; i++) {
            itemDetails += `<tr>
            <td>${cart[i].itemId}</td>
            <td>${cart[i].itemTitle}</td>
            <td>${cart[i].desc}</td>
            <td>${cart[i].brand}</td>
            <td>${cart[i].unitPrice}</td>
            <td>${cart[i].quantityInStock}</td>
            <td>${cart[i].make}</td>
            <td><img src="${cart[i].thumbnail}" width="30%" height="30%"></td>
            <td>${cart[i].category.catName}</td>
            <td><button class="btn btn-danger" onclick="removeFromCart(${cart[i].itemId}); viewCart()"> Remove </button></td>
            <td><button class="btn btn-dark" onclick="showItemDetails(${cart[i].itemId})"> Details </button></td>
            </tr>`
        }
    `</tbody>
    </table>`;

    document.getElementById("itemsCards").innerHTML = itemDetails;
}

/**
 * Finds a item with given Id in the catalog array.
 * 
 * @param { Number } itemId 
 */
function findItemById(itemId) {
    let output;

    for (var i = 0; i < catalog.length; i++) {
        if (itemId === catalog[i].itemId) {
            output = catalog[i];
            break;
        }
    }

    return output;
}

/**
 * Shows the all the params of a given item.
 * 
 * @param { Number } itemId 
 */
function showItemDetails(itemId) {
    let item = findItemById(itemId);

    document.getElementById("itemsCards").innerHTML = "";

    let itemDetails = "";

    itemDetails += 
    `<table class="table">
    <thead class="thead-dark">
        <tr>
            <th>Items Id</th>
            <th>Item Title</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity in Stock</th>
            <th>Make</th>
            <th>Image</th>
            <th>Category</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${item.itemId}</td>
            <td>${item.itemTitle}</td>
            <td>${item.desc}</td>
            <td>${item.brand}</td>
            <td>${item.unitPrice}</td>
            <td>${item.quantityInStock}</td>
            <td>${item.make}</td>
            <td><img src="${item.thumbnail}" width="30%" height="30%"></td>
            <td>${item.category.catName}</td>
        </tr>
    </tbody>
    </table>`;

    document.getElementById("itemsCards").innerHTML = itemDetails;
}

/**
 * Adds a item to the cart.
 * 
 * @param { Number } itemId 
 */
function addToCart(itemId) {
    if (itemId < catalog.length) {
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
    for (var i = 0; i < cart.length; i++) {
        if (itemId === cart[i].itemId) {
            cart.splice(i, 1);
            showStatusMessage("alert-danger", "Successfully removed item from cart");
            break;
        }
    }
}

/**
 * Searches through the catalog for any work that is exactly the same.
 * 
 * @param { String } keyword 
 */
function searchByKeyword(keyword) {
    setUpCart();
    keyword = document.getElementById("textbox").value;

    document.getElementById("itemsCards").innerHTML = "";
    let itemDetails = "";

    itemDetails += 
    `<table class="table">
    <thead class="thead-dark">
        <tr>
            <th>Items Id</th>
            <th>Item Title</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity in Stock</th>
            <th>Make</th>
            <th>Image</th>
            <th>Category</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>`
        for (var i = 0; i < catalog.length; i++) {
        if (keyword === catalog[i].itemTitle || keyword === catalog[i].itemDetails ||
             keyword === catalog[i].brand || keyword === catalog[i].make || 
             keyword === catalog[i].category.catName || keyword === catalog[i].category.catDesc) {
                itemDetails += `<tr>
                <td>${catalog[i].itemId}</td>
                <td>${catalog[i].itemTitle}</td>
                <td>${catalog[i].desc}</td>
                <td>${catalog[i].brand}</td>
                <td>${catalog[i].unitPrice}</td>
                <td>${catalog[i].quantityInStock}</td>
                <td>${catalog[i].make}</td>
                <td><img src="${catalog[i].thumbnail}" width="30%" height="30%"></td>
                <td>${catalog[i].category.catName}</td>
                <td><button class="btn btn-success" onclick="addToCart(${catalog[i].itemId}); viewCart()"> Add to Cart </button></td>
                <td><button class="btn btn-dark" onclick="showItemDetails(${catalog[i].itemId})"> Details </button></td>
                </tr>`
            }
    }
    `</tbody>
    </table>`;
    document.getElementById("itemsCards").innerHTML = itemDetails;
}