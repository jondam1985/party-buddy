$("body").ready(function () {

    $("#shopListArea").empty();

    //This function renders all the ingredients needed per food item
    let food = JSON.parse(localStorage.getItem("food"));
    for (let i = 0; i < food.length; i++) {
        let title = food[i][0];
        let items = food[i][1];
        $("#shopListArea").append($("<div>", { class: "list" }).html(`
        <h2>${title}</h2><hr>
        <ul>
        ${(function () {
                let ingredient = "";
                for (let i = 0; i < items.length; i++) {
                    ingredient += `<li>${items[i]}</li>`
                }
                return ingredient;
            })()}
    </ul>`)
        )
    }

    //This function renders all the ingredients needed per drink item
    let drinks = JSON.parse(localStorage.getItem("drinks"));
    for (let i = 0; i < drinks.length; i++) {
        let title = drinks[i][0];
        let items = drinks[i][1];
        $("#shopListArea").append($("<div>", { class: "list" }).html(`
        <h2>${title}</h2><hr>
        <ul>
        ${(function () {
                let ingredient = "";
                for (let i = 0; i < items.length; i++) {
                    ingredient += `<li>${items[i]}</li>`
                }
                return ingredient;
            })()}
    </ul>`)
        )
    }
})

//This prints the current page
$("#print").click(function () {
    window.print();
})



