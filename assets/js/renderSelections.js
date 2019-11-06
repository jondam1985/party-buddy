$("body").ready(function () {
    $("#foodList").empty();
    let foodObj = JSON.parse(localStorage.getItem("food"));
    let size = Object.keys(foodObj).length;
    for (let i = 0; i < size; i++) {
        $("#foodList").append($("<div>", {"data-index": i}).html(`
        <p>${foodObj["item" + i].title}</p>
        <button>&times;</button>`));
    }

    $("#drinksList").empty();
    let drinksObj = JSON.parse(localStorage.getItem("drinks"));
    let length = Object.keys(drinksObj).length;
    for (let i = 0; i < length; i++) {
        $("#drinksList").append($("<div>", {"data-index": i}).html(`
        <p>${drinksObj["item" + i].title}</p>
        <button>&times;</button>`));
    }
})

