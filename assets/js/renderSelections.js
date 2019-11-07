$("body").ready(function () {


    //This functions renders all the selected food items in the FOOD SECTION
    $("#foodList").empty();
    let foodObj = JSON.parse(localStorage.getItem("food"));
    console.log(foodObj);
    let size = foodObj.length;
    for (let i = 0; i < size; i++) {
        $("#foodList").append($("<div>", { "data-index": i }).html(`
        <p>${foodObj[i][0]}</p>
        <button class="foodRemover remover close" data-index=${i}>&times;</button>`)); // adds a "remove" button
    }

    //This functions renders all the selected drink items in the DRINKS SECTION
    $("#drinksList").empty();
    let drinksObj = JSON.parse(localStorage.getItem("drinks"));
    console.log(drinksObj);
    let length = drinksObj.length;
    for (let i = 0; i < length; i++) {
        $("#drinksList").append($("<div>", { "data-index": i }).html(`
        <p>${drinksObj[i][0]}</p>
        <button class="drinksRemover remover close" data-index=${i}>&times;</button>`)); // adds a "remove" button
    }

    $(".foodRemover").click(function () {
        //This function removes food items from the local storage when the "remove" button is clicked
        let foodObj = JSON.parse(localStorage.getItem("food"));
        let toRemove = $(this).attr("data-index");
        console.log(toRemove);
        foodObj.splice(toRemove, 1);
        localStorage.setItem("food", JSON.stringify(foodObj));
        location.reload();
    })

    $(".drinksRemover").click(function () {
        //This function removes food items from the local storage when the "remove" button is clicked
        let drinksObj = JSON.parse(localStorage.getItem("drinks"));
        let toRemove = $(this).attr("data-index");
        console.log(toRemove);
        drinksObj.splice(toRemove, 1);
        localStorage.setItem("drinks", JSON.stringify(drinksObj));
        location.reload();
    })
})

