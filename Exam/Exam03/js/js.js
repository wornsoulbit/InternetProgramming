var items = [];

/**
 * On run, it'll search the products.xml file for any item in the same
 * category as entered in the search box.
 */
function makeAjaxCall() {
    ajaxObj = new XMLHttpRequest();
    keyword = document.getElementById("textbox").value;
    console.log(keyword);
    if(keyword != "") {
        ajaxObj.open("GET", "search.php?query=" + keyword, true);
        ajaxObj.onreadystatechange = processResponse;
        ajaxObj.send();
    }
}

/**
 * Processes the response of the ajax call, send the JSON data to parseJsonData 
 * function, then calls showItems to display any items that may of been added
 * to the items array.
 */
function processResponse() {
    if (ajaxObj.readyState === XMLHttpRequest.DONE) {
        let stringResponse = ajaxObj.responseText;
        parseJsonData(stringResponse);
        console.log(items);
        showItems();
    }
}

/**
 * Takes in a JSON string and parses the data given, adding the data in it to the
 * items array to be later added to the webpage.
 * 
 * @param {string} strIn JSON data to be parsed.
 */
function parseJsonData(strIn) {
    let parseJson = JSON.parse(strIn);
    let jsonItems = parseJson.items;
    console.log(parseJson);
    items = [];
    if (jsonItems != null) {
        for (var i = 0; i < jsonItems.length; i++) {
            items.push(jsonItems[i]);
        }
    }
}

/**
 * Displays each item as a card with the title, description,
 * category, unit price, quantity and the color of the item.
 */
function showItems() {
    document.getElementById("outputtedItems").innerHTML = "";

    let numResults = items.length;

    console.log(numResults);
    let itemsOut = `<h2><span class="badge badge-primary">There are ` + numResults  + ` items that were found</span></h2>`;
    itemsOut += `<table class="table">
    <thead class="thead-dark">
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Color</th>
            <th>ID</th>
            <th>Code</th>
            <th>Supplier</th>
        </tr>
    </thead>
    <tbody>`
        for (var i = 0; i < items.length; i++) {
            itemsOut += `<tr>
            <td>${items[i].title}</td>
            <td>${items[i].description}</td>
            <td>${items[i].category}</td>
            <td>${items[i].unitPrice}</td>
            <td>${items[i].quantity}</td>
            <td>${items[i].color}</td>
            <td>${items[i].id}</td>
            <td>${items[i].code}</td>
            <td>${items[i].supplier}</td>
            </tr>`
        }
    `</tbody>
    </table>`;

    document.getElementById("outputtedItems").innerHTML = itemsOut;
}