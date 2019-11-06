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

    if (type.includes("thecocktail")) {

        if (localStorage.getItem("drinks") == null) {
            let drinks = { "item0": { "title": title, "ingredients": ingredients } };
            localStorage.setItem("drinks", JSON.stringify(drinks));
        }
        else {
            let drinks = JSON.parse(localStorage.getItem("drinks"));
            let i = Object.keys(drinks).length;
            drinks["item" + i] = { "title": title, "ingredients": ingredients };
            localStorage.setItem("drinks", JSON.stringify(drinks));
        }
    }

    else {

        if (localStorage.getItem("food") == null) {
            let food = { "item0": { "title": title, "ingredients": ingredients } };
            localStorage.setItem("food", JSON.stringify(food));
        }
        else {
            let food = JSON.parse(localStorage.getItem("food"));
            let i = Object.keys(food).length;
            food["item" + i] = { "title": title, "ingredients": ingredients };
            localStorage.setItem("food", JSON.stringify(food));
        }
    }

})