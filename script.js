document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    axios.get("https://crudcrud.com/api/ef1647ccdf4b42b698b205739532fe07/inventData")
        .then((response) => {
            const storedDataArray = response.data;
            // Display each item in the response
            storedDataArray.forEach((storedData) => {
                displayStoredData(storedData);
            });
        })
        .catch((err) => {
            console.log(err);
        });

    form.addEventListener("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        let name = document.getElementById("name").value;
        let des = document.getElementById("des").value;
        let price = document.getElementById("price").value;
        let quat = document.getElementById("quat").value;

        let formData = {
            name: name,
            des: des,
            price: price,
            quat: quat,
        };

        axios.post("https://crudcrud.com/api/ef1647ccdf4b42b698b205739532fe07/inventData", formData)
            .then((response) => {
                const storedData = response.data;
                displayStoredData(storedData);
            })
            .catch((err) => {
                console.log(err);
            });
    });
});

function displayStoredData(storedData) {
    const displayElement = document.getElementById("displayData");

    // Create list item to display stored data
    const listItem = document.createElement("li");

    // Create a container for the "Edit" and "Delete" buttons, and data elements
    const container = document.createElement("div");

    // Create an "Edit" button
    const editButton1 = document.createElement("button");
    editButton1.textContent = "Buy1";
    editButton1.style.color = "blue";

    editButton1.addEventListener("click", function () {
        handleBuyButtonClick(storedData, 1);
    });

    const editButton2 = document.createElement("button");
    editButton2.textContent = "Buy2";
    editButton2.style.color = "blue";
    editButton2.style.marginInline = "5px";
    editButton2.addEventListener("click", function () {
        handleBuyButtonClick(storedData, 2);
    });

    const editButton3 = document.createElement("button");
    editButton3.textContent = "Buy3";
    editButton3.style.color = "blue";
    editButton3.addEventListener("click", function () {
        handleBuyButtonClick(storedData, 3);
    });

    // Populate the list item with input values (replace these with actual values)
    container.innerHTML = `
        <strong>Item Name:</strong> ${storedData.name} &nbsp &nbsp
        <strong>Description:</strong> ${storedData.des} &nbsp &nbsp
        <strong>Price:</strong> ${storedData.price} &nbsp &nbsp
        <strong>Quantity:</strong> ${storedData.quat} &nbsp &nbsp
    `;

    container.appendChild(editButton1);
    container.appendChild(editButton2);
    container.appendChild(editButton3);
    // Append the container and list item to the display element
    listItem.appendChild(container);
    displayElement.appendChild(listItem);
}

function handleBuyButtonClick(storedData, buyType) {
    // Assuming you have an endpoint to update the quantity
    const updateQuantityEndpoint = `https://crudcrud.com/api/ef1647ccdf4b42b698b205739532fe07/inventData/${storedData._id}`;

    // Update quantity based on buyType (1, 2, or 3)
    let updatedQuantity = storedData.quat;
    let updName=storedData.name;
    let updDes=storedData.des;
    let updPri=storedData.price;
    switch (buyType) {
        case 1:
            updatedQuantity -= 1;
            break;
        case 2:
            updatedQuantity -= 2;
            break;
        case 3:
            updatedQuantity -= 3;
            break;
        default:
            break;
    }

    // Make a PUT request to update the quantity
    axios.put(updateQuantityEndpoint, {name:updName,des:updDes,price:updPri, quat: updatedQuantity })
        .then((response) => {
            // Update the displayed quantity
            storedData.quat = updatedQuantity;
            //displayStoredData(storedData);
            location.reload();
        })
        .catch((err) => {
            console.log(err);
        });
}






//============================================================================================


// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector('form');

//     axios.get("https://crudcrud.com/api/66de1b83898d4696b593cb3d5f8d393d/inventData")
//         .then((response) => {
//             const storedDataArray = response.data;
//             // Display each item in the response
//             storedDataArray.forEach((storedData) => {
//                 displayStoredData(storedData);
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//         });

//     form.addEventListener("submit", function(event) {
//         // Prevent the default form submission
//         event.preventDefault();

//         let name = document.getElementById("name").value;
//         let des = document.getElementById("des").value;
//         let price = document.getElementById("price").value;
//         let quat = document.getElementById("quat").value;

//         let formData = {
//             name: name,
//             des: des,
//             price: price,
//             quat: quat,
//         };

//         axios.post("https://crudcrud.com/api/66de1b83898d4696b593cb3d5f8d393d/inventData", formData)
//             .then((response) => {
//                 const storedData = response.data;
//                 displayStoredData(storedData);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     });
// });


// function displayStoredData(storedData) {
//     const displayElement = document.getElementById("displayData");

//     // Create list item to display stored data
//     const listItem = document.createElement("li");

//     // Create a container for the "Edit" and "Delete" buttons, and data elements
//     const container = document.createElement("div");

//     // Create an "Edit" button
//     const editButton1 = document.createElement("button");
//     editButton1.textContent = "Buy1";
//     editButton1.style.color = "blue";
    
//     editButton1.addEventListener("click", function() {
//         // Handle Buy1 button click, e.g., perform some action
//         console.log("Buy1 clicked");
//     });

//     const editButton2 = document.createElement("button");
//     editButton2.textContent = "Buy2";
//     editButton2.style.color = "blue";
//     editButton2.style.marginInline="5px";
//     editButton2.addEventListener("click", function() {
//         // Handle Buy2 button click, e.g., perform some action
//         console.log("Buy2 clicked");
//     });

//     const editButton3 = document.createElement("button");
//     editButton3.textContent = "Buy3";
//     editButton3.style.color = "blue";
//     editButton3.addEventListener("click", function() {
//         // Handle Buy3 button click, e.g., perform some action
//         console.log("Buy3 clicked");
//     });

    

//     // Populate the list item with input values (replace these with actual values)
//     container.innerHTML = `
//         <strong>Item Name:</strong> ${storedData.name} &nbsp &nbsp
//         <strong>Description:</strong> ${storedData.des} &nbsp &nbsp
//         <strong>Price:</strong> ${storedData.price} &nbsp &nbsp
//         <strong>Quantity:</strong> ${storedData.quat} &nbsp &nbsp
//     `;

//     container.appendChild(editButton1);
//     container.appendChild(editButton2);
//     container.appendChild(editButton3);
//     // Append the container and list item to the display element
//     listItem.appendChild(container);
//     displayElement.appendChild(listItem);
// }
