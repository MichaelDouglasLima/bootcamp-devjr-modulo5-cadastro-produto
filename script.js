var products = [
    {
        id: 1,
        name: "Computador M1-TX",
        description: "Intel I7, 16GB, SSD 256, HD 1T",
        price: 4900,
        category: 1,
        promotion: true,
        new: true
    },
    {
        id: 2,
        name: "Computador M2-TX",
        description: "Intel I7, 32GB, SSD 512, HD 1T",
        price: 5900,
        category: 2,
        promotion: false,
        new: true
    },
    {
        id: 3,
        name: "Computador M1-T",
        description: "Intel I5, 16GB, HD 1T",
        price: 2900,
        category: 3,
        promotion: false,
        new: false
    },
];

var categories = [
    { id: 1, name: "Produção Própria" },
    { id: 2, name: "Nacional" },
    { id: 3, name: "Importado" }
];

//Onload
loadProducts();

//Load all products
function loadProducts() {
    for (let prod of products){
        addNewRow(prod);
    }
}

//Add new Row
function addNewRow(prod){
    var table = document.getElementById("productsTable");

    var newRow = table.insertRow();

    //Insert id product
    var idNode = document.createTextNode(prod.id);
    newRow.insertCell().appendChild(idNode);

    //Insert name product
    var idNode = document.createTextNode(prod.name);
    newRow.insertCell().appendChild(idNode);

    //Insert description product
    var idNode = document.createTextNode(prod.description);
    newRow.insertCell().appendChild(idNode);

    //Insert price product
    var idNode = document.createTextNode(prod.price);
    newRow.insertCell().appendChild(idNode);

    //Insert category product
    var idNode = document.createTextNode(categories[prod.category - 1].name);
    newRow.insertCell().appendChild(idNode);

    //Insert options product - Promotion
    var idNode = document.createTextNode(prod.promotion);

    if (prod.promotion) {
        newRow.insertCell().innerHTML = `<span class="badge bg-success">P</span>`;
    }

    //Insert options product - New
    var idNode = document.createTextNode(prod.new);

    if (prod.new) {
        newRow.insertCell().innerHTML = `<span class="badge bg-primary">L</span>`;
    }
    
}