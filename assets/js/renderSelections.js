$("body").ready(function () {

    $("#foodList").empty();
    $("#drinksList").empty();

    //This functions renders all the selected food items in the FOOD SECTION
    $("#foodList").empty();
    let foodObj = JSON.parse(localStorage.getItem("food"));
    let size = Object.keys(foodObj).length;
    for (let i = 0; i < size; i++) {
        $("#foodList").append($("<div>", { "data-index": i }).html(`
        <p>${foodObj["item" + i].title}</p>
        <button>&times;</button>`)); // adds a "remove" button
    }

    //This functions renders all the selected drink items in the DRINKS SECTION
    $("#drinksList").empty();
    let drinksObj = JSON.parse(localStorage.getItem("drinks"));
    let length = Object.keys(drinksObj).length;
    for (let i = 0; i < length; i++) {
        $("#drinksList").append($("<div>", { "data-index": i }).html(`
        <p>${drinksObj["item" + i].title}</p>
        <button>&times;</button>`)); // adds a "remove" button
    }
})

$("#foodList button").click(function () {
    let foodObj = JSON.parse(localStorage.getItem("food"));
    let toRemove = $("#")
})