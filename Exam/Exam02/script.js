class Product {
    /**
     * 
     * @param {String} productTitle Name of the product.
     * @param {Number} Q1 Number of sales in Q1
     * @param {Number} Q2 Number of sales in Q2
     * @param {Number} Q3 Number of sales in Q3
     * @param {Number} Q4 Number of sales in Q4
     */
    constructor(productTitle, Q1, Q2, Q3, Q4) {
        this.productTitle = productTitle;
        this.Q1 = Q1;
        this.Q2 = Q2;
        this.Q3 = Q3;
        this.Q4 = Q4;
    }
}

var products = [];

function initProducts() {
    products = [];

    let productItems = new Product("Pepsi", 1200000, 950000, 900000, 1200000);
    products.push(productItems);

    productItems = new Product("Coke", 1500000, 1200000, 1300000, 1500000);
    products.push(productItems);
    
    productItems = new Product("Mountain Dew", 1000000, 850000, 900000, 1100000);
    products.push(productItems);

    productItems = new Product("Sprite", 1000000, 1200000, 1100000, 1400000);
    products.push(productItems);

    productItems = new Product("7Up", 850000, 800000, 750000, 900000);
    products.push(productItems);

    productItems = new Product("Dr Pepper", 1000000, 1100000, 1200000, 1400000);
    products.push(productItems);

    productItems = new Product("Fanta", 1000000, 750000, 700000, 800000);
    products.push(productItems);
}

function setup() {
    initProducts();
    smth();
}

function smth() {
    document.getElementById("SalesReport").innerHTML = "";

    let introduction = `<p> When you click on the Sales Report Button, it will generate 
    a table based off of whats in the products table. It will show; The name of the product,
    Q1-Q4 sales numbers, and total sales.</p
    <br>
    <p> When you Click on the Home button it will return to this page </p>`;

    document.getElementById("SalesReport").innerHTML += introduction;
}

function calculateTotalSales(product) {
    let totalSales = 0;

    totalSales = product.Q1 + product.Q2 + product.Q3 + product.Q4;

    return totalSales;
}

function salesReport() {
    document.getElementById("SalesReport").innerHTML = "";

    let salesReport = `
    <table class="table table-striped table-dark">
    <thead class="thead-dark">
        <tr>
            <th> Product Title </th>
            <th> Q1 Sales </th>
            <th> Q2 Sales </th>
            <th> Q3 Sales </th>
            <th> Q4 Sales </th>
            <th> Total Sales</th>
        </tr>
    </thead>
    <tbody>`;
    for (var i = 0; i < products.length; i++) {
        salesReport += `
        <tr>
            <td>${products[i].productTitle}</td>
            <td>${products[i].Q1}</td>
            <td>${products[i].Q2}</td>
            <td>${products[i].Q3}</td>
            <td>${products[i].Q4}</td>
            <td>${calculateTotalSales(products[i])}</td>`
        
    }
    salesReport += `</tbody>
    </table>`
    document.getElementById("SalesReport").innerHTML = salesReport;
}