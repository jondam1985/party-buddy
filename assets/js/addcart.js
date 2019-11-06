//Click on the add to list button in modal
$(".add-to-list").click(function () {
    let title = $(".modal-title").text();
    let ingredients = [];
    let type = $(".modal-body img").attr("src");
    $(".modal-body li").each(function (i, li) {
        ingredients.push($(li).text());
    });

    console.log(type);
    console.log(type.includes("thecocktail"));

    var drinks = [];

    if (type.includes("thecocktail")) {

        if (localStorage.getItem("drinks") == null) {
            drinks[0] = [title, ingredients];
            localStorage.setItem("drinks", JSON.stringify(drinks));
        }
        else {
            let drinks = JSON.parse(localStorage.getItem("drinks"));
            let i = drinks.length;
            drinks[i] = [title, ingredients];
            localStorage.setItem("drinks", JSON.stringify(drinks));
        }
    }

    else {

        var food = [];

        if (localStorage.getItem("food") == null) {
            food[0] = [title, ingredients];
            localStorage.setItem("food", JSON.stringify(food));
        }
        else {
            let food = JSON.parse(localStorage.getItem("food"));
            let i = food.length;
            food[i] = [title, ingredients];
            localStorage.setItem("food", JSON.stringify(food));
        }
    }

})