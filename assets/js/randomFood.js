

$("#randomSearchBTN").click(function () {

    //This function generates a random integer between 0 and 533
    var randomNum = function () {
        let random = Math.floor(Math.random() * 533);
        return random;
    }

    //This function generates a string with three random ingredients from a given array of ingredients
    var randomIngredients = function (arr) {
        let randomIngredient = arr[randomNum()];
        console.log(randomIngredient);
        return randomIngredient;
    }

    //This function generates a query URL for a random search
    var urlBuilderRandom = function (terms) {
        let baseUrl = "https://api.edamam.com/search?q="
        let appId = "&app_id=aba51d86";
        let appKey = "&app_key=b6712cfa198b3f28dcba3757859ce01e";
        let termsQuery = terms; //this variable will contain the concatenated search terms

        let urlQueryRandom = baseUrl + termsQuery + appId + appKey;

        return urlQueryRandom;
    }


    renderLoading();

    //This functions makes an ajax call to the Edamam API
    $.ajax({
        url: urlBuilderRandom(randomIngredients(ingredientsList)), //Invokes urlBuilderRandom function
        method: "GET",
        error: function () {
            let errorMsg = "Nothing found"; //Shows error message if field is empty or city is not found
        }
    }).then(function (response) {
        console.log(response);
        localStorage.setItem("foodResponse", JSON.stringify(response));
        renderResults();
    })
})

var renderLoading = function () {
    // Clear results and display loading text
    $("#results").empty().text("Loading...");
};

//This function renders the results in the page
var renderResults = function () {

    let foodResponse = JSON.parse(localStorage.getItem("foodResponse")); //Object from search response
    let results = $("#results");
    results.empty(); // Clears previous results

    for (let i = 0; i < 6; i++) {
        let recipe = foodResponse.hits[i].recipe;

        $(results).append($("<div>", {
            class: "recipe",
            "data-index": i,
            "data-toggle": "modal",
            "data-target": "#modal"
        }).html(`
                    <p><img src="${recipe.image}" alt=""></p>
                    <h5>${recipe.label}</h5>
                    <p>
                        Servings: ${recipe.yield}<br>
                        Ingredients: ${recipe.ingredientLines.length}<br>
                        Calories: ${recipe.calories.toFixed()}
                    </p>
                `).on("click", function () {
            $("#modal .modal-title ").html(`${recipe.label}`);
            $("#modal .modal-body").html(`
                        <p><img src="${recipe.image}" alt=""></p>
                        <p><b>Calories:</b> ${recipe.calories.toFixed()} cal</p>
                        <p><b>Dietary Traits:</b> ${recipe.healthLabels.join(", ")}</p>
                        <p style="margin-bottom: 0;"><b>Ingredients:</b></p>
                        <ul>
                            ${(function () {
                    let ingredients = "";
                    for (let i = 0; i < recipe.ingredientLines.length; i++) {
                        ingredients += `<li>${recipe.ingredientLines[i]}</li>`
                    }
                    return ingredients;
                })()}
                        </ul>
                        <a href="${recipe.url}" target="_blank">See recipe</a>
                    `);
        }));
    }

};
