// api key 
var drinkAPIKEY = "1";
// first API call is based on the users input, the key word is then used to generate results from the api.



var byNameCallAPI = function () {
    var drinkInput = $("input").val();
    var byNameQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkInput
    $.ajax({
        url: byNameQueryURL,
        methdd: "GET",
        error: function () {
            let errorMsg = "nothing found";
        }

    })
        .then(function (response) {
            console.log(response);
            localStorage.setItem("DrinkResponse", JSON.stringify(response));

            renderBNDrinkRes();
        });
};


var renderBNDrinkRes = function () {
    let drinkResponse = JSON.parse(localStorage.getItem("DrinkResponse"));
    let results = $("#results");
    results.empty(); // clears all pervious results

    for (var i = 0; i < 6; i++) {
        let dResponseImage = drinkResponse.drinks[i].strDrinkThumb;
        let dResponseTitle = drinkResponse.drinks[i].strDrink;
        let dResponseInstructions = drinkResponse.drinks[i].strInstructions;
        // creating a new array that holds only ingredient keys without null values
        var ingredientTypes = [];
        for (var key in drinkResponse.drinks[i]) {
            if (drinkResponse.drinks[i].hasOwnProperty(key) && key.match(/strIngredient/gi) && drinkResponse.drinks[i][key] != null) {
                ingredientTypes.push(drinkResponse.drinks[i][key]);
            }
        };
        // creaitng a new array that holds on the measurement keys without null values
        var measurements = [];
        for (var key in drinkResponse.drinks[i]) {
            if (drinkResponse.drinks[i].hasOwnProperty(key) && key.match(/strMeasure/gi) && drinkResponse.drinks[i][key] != null) {
                measurements.push(drinkResponse.drinks[i][key]);
            }
        };
        // cancatinatiing the ingredients and measurments to create a recipe array
        var recipe = measurements.map(function (str, idx) {
            return str + " " + ingredientTypes[idx];
        });


        $(results).append($("<div>", {
            class: "recipe",
            "data-index": i,
            "data-toggle": "modal",
            "data-target": "#modal"
        }).html(`
                <p><img src="${dResponseImage}" alt=""></p>
                <h5>${dResponseTitle}</h5>
                <p>
                    Servings: 1<br>
                    Ingredients: ${ingredientTypes.length}<br>
                </p>
            `).on("click", function () {
            $("#modal .modal-title ").html(`${dResponseTitle}`);
            $("#modal .modal-body").html(`
                    <p><img src="${dResponseImage}" alt=""></p>
                    <p style="margin-bottom: 0;"><b>Ingredients:</b></p>
                    <ul>
                        ${(function () {
                    let ingredients = "";
                    for (let i = 0; i < ingredientTypes.length; i++) {
                        ingredients += `<li>${recipe[i]}</li>`
                    }
                    return ingredients;
                })()}
                    </ul>
                    <p>${dResponseInstructions}</p>
                `);
        }));


    };

};

// when the ByName button is clicked it activates that the search button calls the by Name api 
$("#byName").click(byNameCallAPI);  