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


// the second api call uses the random option where a random drink is generated.
var byRandomCallAPI= function(){
    var byRandomQueryURL= "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    // the API response only returns one drink so for user choice and options we make 6 calls at once to receive 6 different drinks

    $.ajax({
        url: byRandomQueryURL,
        method: "GET",
        error: function(){
            let errorMsg = "nothing found";}
    })
    .then(function(response){
        localStorage.setItem("randomDrinkResponse1",JSON.stringify(response));
        console.log(response);
    });
    $.ajax({
        url: byRandomQueryURL,
        method: "GET",
        error: function(){
            let errorMsg = "nothing found";}
    })
    .then(function(response){
        localStorage.setItem("randomDrinkResponse2",JSON.stringify(response));
        console.log(response);
    });
    $.ajax({
        url: byRandomQueryURL,
        method: "GET", 
        error: function(){
            let errorMsg = "nothing found";}
    })
    .then(function(response){
        localStorage.setItem("randomDrinkResponse3",JSON.stringify(response));
        console.log(response);
    });
    $.ajax({
        url: byRandomQueryURL,
        method: "GET",
        error: function(){
            let errorMsg = "nothing found";}
    })
    .then(function(response){
        localStorage.setItem("randomDrinkResponse4",JSON.stringify(response));
        console.log(response);
    });
    $.ajax({
        url: byRandomQueryURL,
        method: "GET",
        error: function(){
            let errorMsg = "nothing found";}
    })
    .then(function(response){
        localStorage.setItem("randomDrinkResponse5",JSON.stringify(response));
        console.log(response);
    });
    $.ajax({
        url: byRandomQueryURL,
        method: "GET",
        error: function(){
            let errorMsg = "nothing found";}
    })
    .then(function(response){
        localStorage.setItem("randomDrinkResponse6",JSON.stringify(response));
        console.log(response);
    });
    renderRDrinkResults();
 };


var renderBNDrinkRes = function(){
    let drinkResponse = JSON.parse(localStorage.getItem("DrinkResponse"));
    let results=$("#results");
    results.empty(); // clears all pervious results
    
    for (var i=0; i<6; i++){
        let dResponseImage = drinkResponse.drinks[i].strDrinkThumb;
        let dResponseTitle= drinkResponse.drinks[i].strDrink;
        // creating a new array that holds only ingredient keys without null values
        var ingredientTypes = [];
        for (var key in drinkResponse.drinks[i]) {
            if (drinkResponse.drinks[i].hasOwnProperty(key) && key.match(/strIngredient/gi) && drinkResponse.drinks[i][key] != null) {
            ingredientTypes.push(drinkResponse.drinks[i][key]);
            }
        };
        // creaitng a new array that holds on the measurement keys without null values
        var measurements =[];
        for (var key in drinkResponse.drinks[i]) {
            if (drinkResponse.drinks[i].hasOwnProperty(key) && key.match(/strMeasure/gi) && drinkResponse.drinks[i][key] != null) {
            measurements.push(drinkResponse.drinks[i][key]);
            }
        };
        // cancatinatiing the ingredients and measurments to create a recipe array
        var recipe = measurements.map(function (str, idx) {
            return str+ " "+ ingredientTypes[idx];});

        let DrinkResponseImage = drinkResponse.drinks[i].strDrinkThumb;
        let DrinkResponseTitle= drinkResponse.drinks[i].strDrink;
        let numIngredients= ingredientTypes.length;
        let resultinfo = "Servings: 1 " + "Ingredients: "+numIngredients;
            
        
        let singleResult=$("<div>");
        let resultImg = $("<img>").attr("src", DrinkResponseImage);
        let resultTitle = $("<h5>").text(DrinkResponseTitle);
        let resultText=$("<p>").text(resultinfo);
        singleResult.attr("data-index", i);
        results.append(singleResult.append([resultImg,resultTitle,resultText]));
    
    };

};


var renderRDrinkResults = function(){
    let results=$("#results");
    results.empty(); // clears all pervious results
    // retreiving drink responses from localstorage 
    let randomDrinkResponse1= JSON.parse(localStorage.getItem("randomDrinkResponse1"));
    let randomDrinkResponse2= JSON.parse(localStorage.getItem("randomDrinkResponse2"));
    let randomDrinkResponse3= JSON.parse(localStorage.getItem("randomDrinkResponse3"));
    let randomDrinkResponse4= JSON.parse(localStorage.getItem("randomDrinkResponse4"));
    let randomDrinkResponse5= JSON.parse(localStorage.getItem("randomDrinkResponse5"));
    let randomDrinkResponse6= JSON.parse(localStorage.getItem("randomDrinkResponse6"));
  
// for random drink response 1
    let rResponseImage1 = randomDrinkResponse1.drinks[0].strDrinkThumb;
    let rResponseTitle1= randomDrinkResponse1.drinks[0].strDrink;
    let ranDrinkingredientTypes1 = [];
    for (var key in randomDrinkResponse1.drinks[0]) {
        if (randomDrinkResponse1.drinks[0].hasOwnProperty(key) && key.match(/strIngredient/gi) && randomDrinkResponse1.drinks[0][key] != null) {
        ranDrinkingredientTypes1.push(randomDrinkResponse1.drinks[0][key]);
        }
    };
    let ranDrinkmeasurements1 =[];
    for (var key in randomDrinkResponse1.drinks[0]) {
        if (randomDrinkResponse1.drinks[0].hasOwnProperty(key) && key.match(/strMeasure/gi) && randomDrinkResponse1.drinks[0][key] != null) {
        ranDrinkmeasurements1.push(randomDrinkResponse1.drinks[0][key]);
        }
    };
    var recipe1 = ranDrinkmeasurements1.map(function (str, idx) {
        return str+ " "+ ranDrinkingredientTypes1[idx];});
    let numRandomDrinkIngredients1= ranDrinkingredientTypes1.length;
    let randomDrinkResultinfo1 = "Servings: 1 " + "Ingredients: "+numRandomDrinkIngredients1;

// for random drink response 2
    let rResponseImage2 = randomDrinkResponse2.drinks[0].strDrinkThumb;
    let rResponseTitle2= randomDrinkResponse2.drinks[0].strDrink;
    let ranDrinkingredientTypes2 = [];
    for (var key in randomDrinkResponse2.drinks[0]) {
        if (randomDrinkResponse2.drinks[0].hasOwnProperty(key) && key.match(/strIngredient/gi) && randomDrinkResponse2.drinks[0][key] != null) {
        ranDrinkingredientTypes2.push(randomDrinkResponse2.drinks[0][key]);
        }
    };
    let ranDrinkmeasurements2 =[];
    for (var key in randomDrinkResponse2.drinks[0]) {
        if (randomDrinkResponse2.drinks[0].hasOwnProperty(key) && key.match(/strMeasure/gi) && randomDrinkResponse2.drinks[0][key] != null) {
        ranDrinkmeasurements2.push(randomDrinkResponse2.drinks[0][key]);
        }
    };
    var recipe2 = ranDrinkmeasurements2.map(function (str, idx) {
        return str+ " "+ ranDrinkingredientTypes2[idx];});
    let numRandomDrinkIngredients2= ranDrinkingredientTypes2.length;
    let randomDrinkResultinfo2= "Servings: 1 " + "Ingredients: "+numRandomDrinkIngredients2;

// for random drink response 3
    let rResponseImage3 = randomDrinkResponse3.drinks[0].strDrinkThumb;
    let rResponseTitle3= randomDrinkResponse3.drinks[0].strDrink;
    let ranDrinkingredientTypes3 = [];
    for (var key in randomDrinkResponse3.drinks[0]) {
        if (randomDrinkResponse3.drinks[0].hasOwnProperty(key) && key.match(/strIngredient/gi) && randomDrinkResponse3.drinks[0][key] != null) {
        ranDrinkingredientTypes3.push(randomDrinkResponse3.drinks[0][key]);
        }
    };
    let ranDrinkmeasurements3=[];
    for (var key in randomDrinkResponse3.drinks[0]) {
        if (randomDrinkResponse3.drinks[0].hasOwnProperty(key) && key.match(/strMeasure/gi) && randomDrinkResponse3.drinks[0][key] != null) {
        ranDrinkmeasurements3.push(randomDrinkResponse3.drinks[0][key]);
        }
    };
    var recipe3 = ranDrinkmeasurements3.map(function (str, idx) {
        return str+ " "+ ranDrinkingredientTypes3[idx];});
        let numRandomDrinkIngredients3= ranDrinkingredientTypes3.length;
        let randomDrinkResultinfo3= "Servings: 1 " + "Ingredients: "+numRandomDrinkIngredients3;

// for random drink response 4
    let rResponseImage4 = randomDrinkResponse4.drinks[0].strDrinkThumb;
    let rResponseTitle4= randomDrinkResponse4.drinks[0].strDrink;
    let ranDrinkingredientTypes4 = [];
    for (var key in randomDrinkResponse4.drinks[0]) {
        if (randomDrinkResponse4.drinks[0].hasOwnProperty(key) && key.match(/strIngredient/gi) && randomDrinkResponse4.drinks[0][key] != null) {
        ranDrinkingredientTypes4.push(randomDrinkResponse4.drinks[0][key]);
        }
    };
    let ranDrinkmeasurements4 =[];
    for (var key in randomDrinkResponse4.drinks[0]) {
        if (randomDrinkResponse4.drinks[0].hasOwnProperty(key) && key.match(/strMeasure/gi) && randomDrinkResponse4.drinks[0][key] != null) {
        ranDrinkmeasurements4.push(randomDrinkResponse4.drinks[0][key]);
        }
    };
    var recipe4 = ranDrinkmeasurements4.map(function (str, idx) {
        return str+ " "+ ranDrinkingredientTypes4[idx];});
        let numRandomDrinkIngredients4 = ranDrinkingredientTypes4.length;
        let randomDrinkResultinfo4= "Servings: 1 " + "Ingredients: "+numRandomDrinkIngredients4;

// for random drink response 5
    let rResponseImage5 = randomDrinkResponse5.drinks[0].strDrinkThumb;
    let rResponseTitle5= randomDrinkResponse5.drinks[0].strDrink;
    let ranDrinkingredientTypes5 = [];
    for (var key in randomDrinkResponse5.drinks[0]) {
        if (randomDrinkResponse5.drinks[0].hasOwnProperty(key) && key.match(/strIngredient/gi) && randomDrinkResponse5.drinks[0][key] != null) {
        ranDrinkingredientTypes5.push(randomDrinkResponse5.drinks[0][key]);
        }
    };
    let ranDrinkmeasurements5 =[];
    for (var key in randomDrinkResponse5.drinks[0]) {
        if (randomDrinkResponse5.drinks[0].hasOwnProperty(key) && key.match(/strMeasure/gi) && randomDrinkResponse1.drinks[0][key] != null) {
        ranDrinkmeasurements5.push(randomDrinkResponse5.drinks[0][key]);
        }
    };
    var recipe5 = ranDrinkmeasurements5.map(function (str, idx) {
        return str+ " "+ ranDrinkingredientTypes5[idx];});
    let numRandomDrinkIngredients5= ranDrinkingredientTypes5.length;
    let randomDrinkResultinfo5= "Servings: 1 " + "Ingredients: "+numRandomDrinkIngredients5;


// for random drink response 6
    let rResponseImage6 = randomDrinkResponse6.drinks[0].strDrinkThumb;
    let rResponseTitle6= randomDrinkResponse6.drinks[0].strDrink;
    let ranDrinkingredientTypes6 = [];
    for (var key in randomDrinkResponse6.drinks[0]) {
        if (randomDrinkResponse6.drinks[0].hasOwnProperty(key) && key.match(/strIngredient/gi) && randomDrinkResponse6.drinks[0][key] != null) {
        ranDrinkingredientTypes6.push(randomDrinkResponse6.drinks[0][key]);
        }
    };
    let ranDrinkmeasurements6 =[];
    for (var key in randomDrinkResponse6.drinks[0]) {
        if (randomDrinkResponse6.drinks[0].hasOwnProperty(key) && key.match(/strMeasure/gi) && randomDrinkResponse1.drinks[0][key] != null) {
        ranDrinkmeasurements6.push(randomDrinkResponse6.drinks[0][key]);
        }
    };
    var recipe6 = ranDrinkmeasurements6.map(function (str, idx) {
        return str+ " "+ ranDrinkingredientTypes6[idx];});
    let numRandomDrinkIngredients6= ranDrinkingredientTypes6.length;
    let randomDrinkResultinfo6= "Servings: 1 " + "Ingredients: "+numRandomDrinkIngredients6;

//  appending the random drinks to html 
// drink 1
    let singleResult=$("<div>");
    let resultImg1= $("<img>").attr("src", rResponseImage1);
    let resultTitle1 = $("<h5>").text(rResponseTitle1);
    let resultText1=$("<p>").text(randomDrinkResultinfo1);
     singleResult.attr("data-index",0);
     results.append(singleResult.append([resultImg1,resultTitle1,resultText1]));

// drink 2
    let resultImg2 = $("<img>").attr("src", rResponseImage2);
    let resultTitle2 = $("<h5>").text(rResponseTitle2);
    let resultText2=$("<p>").text(randomDrinkResultinfo2);
    singleResult.attr("data-index",0);
    results.append(singleResult.append([resultImg2,resultTitle2,resultText2]));

// drink 3
    let resultImg3 = $("<img>").attr("src", rResponseImage3);
    let resultTitle3 = $("<h5>").text(rResponseTitle3);
    let resultText3=$("<p>").text(randomDrinkResultinfo3);
    singleResult.attr("data-index",0);
    results.append(singleResult.append([resultImg3,resultTitle3,resultText3]));

// drink 4
    let resultImg4 = $("<img>").attr("src", rResponseImage4);
    let resultTitle4= $("<h5>").text(rResponseTitle4);
    let resultText4=$("<p>").text(randomDrinkResultinfo4);
    singleResult.attr("data-index",0);
    results.append(singleResult.append([resultImg4,resultTitle4,resultText4]));

// drink 5  
    let resultImg5 = $("<img>").attr("src", rResponseImage5);
    let resultTitle5 = $("<h5>").text(rResponseTitle5);
    let resultText5=$("<p>").text(randomDrinkResultinfo5);
    singleResult.attr("data-index",0);
    results.append(singleResult.append([resultImg5,resultTitle5,resultText5]));

// drink 6  
    let resultImg6 = $("<img>").attr("src", rResponseImage6);
    let resultTitle6 = $("<h5>").text(rResponseTitle6);
    let resultText6=$("<p>").text(randomDrinkResultinfo6);
    singleResult.attr("data-index",0);
    results.append(singleResult.append([resultImg6,resultTitle6,resultText6]));

};
// when the ByName button is clicked it activates that the search button calls the by Name api 
$("#byName").click(byNameCallAPI);
// when the by random button is clicked it starts the by random api call 
$("#byRandom").click(byRandomCallAPI);
  