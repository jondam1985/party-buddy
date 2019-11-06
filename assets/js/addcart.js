//Click on the add to list button in modal
$(".add-to-list").click(function () {
    let title = $(".modal-title").text();
    let ingredients = [];
    $(".modal-body li").each(function (i, li) {
        ingredients.push($(li).text());
    });

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