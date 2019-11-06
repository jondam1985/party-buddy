// api key 
var drinkAPIKEY= "1";
// first API call is based on the users input, the key word is then used to generate results from the api.

var byNameCallAPI = function(){
    var drinkInput = $("input").val();
    var byNameQueryURL= "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+drinkInput
    $.ajax({
        url: byNameQueryURL,
        methdd: "GET",
        error: function(){
            let errorMsg = "nothing found";}
    
    })
    .then(function(response){
        console.log(response);
        localStorage.setItem("DrinkResponse",JSON.stringify(response));

        renderBNDrinkRes();
    });
};
// second ajax call for the random drink function 
var randomDrinkCounter = 0;
var RandomQueryURL="https://www.thecocktaildb.com/api/json/v1/1/random.php";
var randomDrinkCall = function(randomDrinkCounter){
        
    var randomCallParams={
        url: RandomQueryURL,
        method: "GET",
        error: function () {
            let errorMsg = "Nothing found"; //Shows error message if city field is empty or city is not found
        }};
    var responseFn = function(response){ 
        randomDrinkCounter++;
        localStorage.setItem("randomDrinkResponse"+randomDrinkCounter,JSON.stringify(response));
        if(randomDrinkCounter<=5){randomDrinkCall(randomDrinkCounter);
        }
    };
    $.ajax(randomCallParams).then(responseFn);

      renderRDrinkResults();
    };
   
var renderBNDrinkRes = function(){
    let drinkResponse = JSON.parse(localStorage.getItem("DrinkResponse"));
    let results=$("#results");
    results.empty(); // clears all pervious results
    
    for (var i=0; i<6; i++){
        let drink=drinkResponse.drinks[i]
        let drinkImage = drink.strDrinkThumb;
        let drinkTitle= drink.strDrink;
        let drinkInstruc=drink.strInstructions;
        // creating a new array that holds only ingredient keys without null values
        var bevIngredients = [];
        for (var key in drink) {
            if (drink.hasOwnProperty(key) && key.match(/strIngredient/gi) && drink[key] != null) {
            bevIngredients.push(drinkResponse.drinks[i][key]);
            }
        };
        // creaitng a new array that holds on the measurement keys without null values
        var measurements =[];
        for (var key in drink) {
            if (drink.hasOwnProperty(key) && key.match(/strMeasure/gi) && drink[key] != null) {
            measurements.push(drink[key]);
            }
        };
        // cancatinatiing the ingredients and measurments to create a recipe array
        var recipe = measurements.map(function (str, idx) {
            return str+ " "+ bevIngredients[idx];});
            console.log(recipe);

        $(results).append($("<div>", {
            class: "byNameDrink",
            "data-index": i,
            "data-toggle":"modal",
            "data-target": "#modal"
        }).html(`<p><img src="${drinkImage}"alt=""></p>
        <h5>${drinkTitle}</h5>
        <p>
            Servings: 1 <br>
            Ingredients: ${bevIngredients.length}<br>
        </p>
`   ).on("click",function(){
        $("#modal .modal-title ").html(`${drinkTitle}`);
        $("#modal .modal-body").html(`
            <p><img src="${drinkImage}" alt=""></p>
            <p style="margin-bottom: 0;"><b>Ingredients:</b></p>
            <ul>
                ${(function() {
                    let drinkingredients = "";
                    for (let i = 0; i < recipe.length; i++) {
                    drinkingredients += `<li>${recipe[i]}</li>`
                    }
                    return drinkingredients;
                     })()}
            </ul>
            <p> 
                <b>Instructions:</b> 
                <br>
                 ${drinkInstruc}
            <p>
    `);
     }));

        
    };

    // for loop  ends

};
// function to render the randon drinks response to html 
var renderRDrinkResults = function(){
    let results = $("#results");
    results.empty();// clears all pervious results

    for(var i=1;i<=6;i++){
        let randomDrinkResponse= JSON.parse(localStorage.getItem("randomDrinkResponse"+i));
        let randomDrinks=randomDrinkResponse.drinks[0];
        let DrinkInstruc=randomDrinks.strInstructions;
        let drinkImage= randomDrinks.strDrinkThumb;
        let drinkTitle= randomDrinks.strDrink;
        let randomIngredients = [];
        for (var key in randomDrinks) {
                if (randomDrinks.hasOwnProperty(key) && key.match(/strIngredient/gi) && randomDrinks[key] != null) {
                randomIngredients.push(randomDrinks[key]);
                }
        };
        let randomMeasurements =[];
        for (var key in randomDrinks) {
                if (randomDrinks.hasOwnProperty(key) && key.match(/strMeasure/gi) && randomDrinks[key] != null) {
                randomMeasurements.push(randomDrinks[key]);
                }
            };
        var recipe1 = randomMeasurements.map(function (str, idx) {
                return str+ " "+ randomIngredients[idx];});
        let numbIngredients= randomIngredients.length;
    

        $(results).append($("<div>", {
            class: "randomDrink",
            "data-index": 0,
            "data-toggle": "modal",
            "data-target": "#modal"
         }).html(`
            <p><img src="${drinkImage}"alt=""></p>
            <h5>${drinkTitle}</h5>
            <p>
                Servings: 1 <br>
                Ingredients: ${numbIngredients}<br>
            </p>
    `   ).on("click",function(){
            $("#modal .modal-title ").html(`${drinkTitle}`);
            $("#modal .modal-body").html(`
                <p><img src="${drinkImage}" alt=""></p>
                <p style="margin-bottom: 0;"><b>Ingredients:</b></p>
                <ul>
                    ${(function() {
                        let drinkingredients = "";
                        for (let i = 0; i < recipe1.length; i++) {
                        drinkingredients += `<li>${recipe1[i]}</li>`
                        }
                        return drinkingredients;
                         })()}
                </ul>
                <p> 
                    <b>Instructions:</b> 
                    <br>
                     ${DrinkInstruc}
                <p>
        `);
         }));
    };
};

// when the ByName button is clicked it activates that the search button calls the by Name api 
$("#byName").click(byNameCallAPI);
// when the by random button is clicked it starts the by random api call 
$("#byRandom").click(function() {randomDrinkCall(randomDrinkCounter)});
  