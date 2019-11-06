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

    if (localStorage.getItem("drinks") == null) {
        let drinks = {"item0":{"title":title,"ingredients":ingredients}};
        localStorage.setItem("drinks", JSON.stringify(drinks));
    }
    else {
        let drinks = JSON.parse(localStorage.getItem("drinks"));
        let i = Object.keys(drinks).length;
        cart["item" + i] = {"title":title, "ingredients":ingredients};
        localStorage.setItem("drinks", JSON.stringify(drinks));
    }

    if (localStorage.getItem("cart") == null) {
        let cart = {"item0":{"title":title,"ingredients":ingredients}};
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    else {
        let cart = JSON.parse(localStorage.getItem("cart"));
        let i = Object.keys(cart).length;
        cart["item" + i] = {"title":title, "ingredients":ingredients};
        localStorage.setItem("cart", JSON.stringify(cart));
    }

})