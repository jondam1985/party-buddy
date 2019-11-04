'use strict';

$("#search button").click(function() {

    //This function generates the terms array to feed the urlBuilder function
    var getTerms = function () {
        let searchValues = $(".form-control").val();
        let termsArr = searchValues.split(" "); //Creates terms array
        return termsArr;
    }

    //This function generates the resctrictions array to feed the urlBuilder function
    var getRestrictions = function () {
        let checkedBoxes = $("input[name='dietary']:checked"); //selects checked boxes
        let restrictionsArr = [];
        for (var i of checkedBoxes) {
            restrictionsArr.push($(i).attr("value")); //creates restrictions array
        }
        return restrictionsArr;
    }

    //This functions builds the url query to search recipes in Edamam API
    //This functions takes an array of search terms and an array of diet restrictions
    var urlBuilder = function (terms, restrictions) {

        console.log(terms);
        console.log(restrictions);

        let baseUrl = "https://api.edamam.com/search?q="
        let appId = "&app_id=aba51d86";
        let appKey = "&app_key=b6712cfa198b3f28dcba3757859ce01e";
        let termsQuery = ""; //this variable will contain the concatenated search terms
        let restrictionsQuery = ""; //this variable will contain the concatenated diet restrictions

        //Concatenating all the search terms
        for (var term of terms) {
            termsQuery += term + "+";
        }
        termsQuery = termsQuery.slice(0, termsQuery.length - 1);

        //Concatenating all the diet restrictions
        for (var restriction of restrictions) {
            restrictionsQuery += "&health=" + restriction;
        }

        let queryUrl = baseUrl + termsQuery + appId + appKey + restrictionsQuery; //final query URL

        return queryUrl;
    }

    renderLoading();

    //This functions makes an ajax call to the Edamam API
    $.ajax({
        url: urlBuilder(getTerms(), getRestrictions()
        ), //Invokes urlBuilder function
        method: "GET",
        error: function () {
            let errorMsg = "Nothing found"; //Shows error message if city field is empty or city is not found
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
        `).on("click", function() {
            $("#modal .modal-title ").html(`${recipe.label}`);
            $("#modal .modal-body").html(`
                <p><img src="${recipe.image}" alt=""></p>
                <p><b>Calories:</b> ${recipe.calories.toFixed()} cal</p>
                <p><b>Dietary Traits:</b> ${recipe.healthLabels.join(", ")}</p>
                <p style="margin-bottom: 0;"><b>Ingredients:</b></p>
                <ul>
                    ${(function() {
                        let ingredients = "";
                        for (let i = 0; i < recipe.ingredientLines.length; i++) {
                            ingredients += `<li>${recipe.ingredientLines[i]}</li>`
                        }
                        return ingredients;
                    })()}
                </ul>
            `);
        }));
    }

};
