
var drinkAPIKEY= "1";
// first API call is based on the users input, the key word is then used to generate results from the api.
var searchBy = function(){
    if()
}

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
        for(i=0;i<6;i++){
            // appending results elements to html 
            $("#results").append("<div class= col id=drinkres"+i+"></div>");
            $("#drinkres"+i).append("<p id=drinktitle"+i+"></p>");
            $("#drinkres"+i).append("<img id=drinkthumb"+i+">");
            $("#drinkres"+i).append("<p id=ingrdients"+i+"></p>");

            $("#drinktitle"+i).text(response.drinks[i].strDrink);
            $("#drinkthumb"+i).attr("src",response.drinks[i].strDrinkThumb);
            $("#ingrdients"+i).text(


        


       
            }
     });
};
// the second api call uses the random option where a random drink is generated.
var byRandomCallAPI= function(){
    var byRandomQueryURL= "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    // the API response only returns one drink so for user choice and options we make 6 calls at one to receive 6 different drinks

    $.ajax({
        url: byRandomQueryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
    });
    $.ajax({
        url: byRandomQueryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
    });
    $.ajax({
        url: byRandomQueryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
    });
    $.ajax({
        url: byRandomQueryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
    });
    $.ajax({
        url: byRandomQueryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
    });
    $.ajax({
        url: byRandomQueryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
    });
    }
    // $("button").click(byNameCallAPI);
