'use strict'

$(".btn-primary").click(function () {

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

        //let results = $("#results");
        //let resultsStr = response.hits[0].recipe.label;

        //results.append($("<p>").text(resultsStr));

        //renderResults();

        renderResults();
    })
})

//This function renders the results in the page

var renderResults = function () {

    let foodResponse = JSON.parse(localStorage.getItem("foodResponse")); //Object from search response
    let results = $("#results");
    results.empty(); //Clears previous results

    for (let i = 0; i < 6; i++) {

        let responseImage = foodResponse.hits[i].recipe.image;
        let responseTitle = foodResponse.hits[i].recipe.label;
        let responseServings = foodResponse.hits[i].recipe.yield;
        let responseIngredients = foodResponse.hits[i].recipe.ingredientLines;
        let numIngredients = responseIngredients.length;
        let responseCalories = parseInt(foodResponse.hits[i].recipe.calories);
        let resultInfo = "Servings: " + responseServings + "/" + "Ingredients: " + numIngredients + "/" + "Calories: " + responseCalories;

        let singleResult = $("<div>");
        let resultImg = $("<img>").attr("src", responseImage);
        let resultTitle = $("<h5>").text(responseTitle);
        let resultText = $("<p>").text(resultInfo);

        singleResult.attr("data-index", i);
        results.append(singleResult.append([resultImg, resultTitle, resultText]));

    }

}