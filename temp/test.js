if (window.location.search.match(/test/gi)) {
    // Test mode
    var test = true;

    // Prepopulate search field
    $("#search input[type='text']").val("apple").attr("readonly",true);

    // Food API test data
    var foodTestData = {
        "q" : "apple",
        "from" : 0,
        "to" : 10,
        "params" : {
            "sane" : [ ],
            "q" : [ "apple" ],
            "app_key" : [ "b6712cfa198b3f28dcba3757859ce01e" ],
            "app_id" : [ "aba51d86" ]
        },
        "more" : true,
        "count" : 60161,
        "hits" : [ {
            "recipe" : {
            "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_efc78b450655c26cf4819f87dab2987c",
            "label" : "Apple Elixir Recipe",
            "image" : "https://www.edamam.com/web-img/efe/efe1546ab8593aaa62ed4fac11838f35.jpg",
            "source" : "Serious Eats",
            "url" : "http://www.seriouseats.com/recipes/2014/09/apple-elixir-cocktail-recipe.html",
            "shareAs" : "http://www.edamam.com/recipe/apple-elixir-recipe-efc78b450655c26cf4819f87dab2987c/apple",
            "yield" : 4.0,
            "dietLabels" : [ "Low-Fat" ],
            "healthLabels" : [ "Vegan", "Vegetarian", "Peanut-Free", "Tree-Nut-Free" ],
            "cautions" : [ "Sulfites" ],
            "ingredientLines" : [ "For the Spiced Cider Concentrate:", "4 cups fresh apple cider", "2 cinnamon sticks", "4 allspice berries, whole", "1 teaspoon cloves, whole", "2 teaspoons black peppercorns, whole", "For the Cocktail:", "2 ounces Laird's Bonded Apple Brandy", "1 ounce apple cider concentrate syrup", "1/2 ounce freshly squeezed lemon juice from about half a lemon", "4 ounces hard cider such as Samuel Smith’s Organic Cider", "Apple slice or apple chip for garnish (optional)" ],
            "ingredients" : [ {
                "text" : "4 cups fresh apple cider",
                "weight" : 992.0
            }, {
                "text" : "2 cinnamon sticks",
                "weight" : 5.2
            }, {
                "text" : "4 allspice berries, whole",
                "weight" : 7.6
            }, {
                "text" : "1 teaspoon cloves, whole",
                "weight" : 2.1
            }, {
                "text" : "2 teaspoons black peppercorns, whole",
                "weight" : 5.8
            }, {
                "text" : "2 ounces Laird's Bonded Apple Brandy",
                "weight" : 56.69904625
            }, {
                "text" : "1 ounce apple cider concentrate syrup",
                "weight" : 28.349523125
            }, {
                "text" : "1/2 ounce freshly squeezed lemon juice from about half a lemon",
                "weight" : 14.1747615625
            }, {
                "text" : "4 ounces hard cider such as Samuel Smith’s Organic Cider",
                "weight" : 113.3980925
            } ],
            "calories" : 769.4291270562501,
            "totalWeight" : 1225.3214234375,
            "totalTime" : 120.0,
            "totalNutrients" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 769.4291270562501,
                "unit" : "kcal"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 2.675046661875,
                "unit" : "g"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 0.62630995159375,
                "unit" : "g"
                },
                "FATRN" : {
                "label" : "Trans",
                "quantity" : 0.005334,
                "unit" : "g"
                },
                "FAMS" : {
                "label" : "Monounsaturated",
                "quantity" : 0.20535981878750004,
                "unit" : "g"
                },
                "FAPU" : {
                "label" : "Polyunsaturated",
                "quantity" : 0.755407374934375,
                "unit" : "g"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 159.65059330331252,
                "unit" : "g"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 8.8354204696875,
                "unit" : "g"
                },
                "SUGAR" : {
                "label" : "Sugars",
                "quantity" : 124.03656217125001,
                "unit" : "g"
                },
                "SUGAR.added" : {
                "label" : "Sugars, added",
                "quantity" : 17.140121681375003,
                "unit" : "g"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 2.56465956721875,
                "unit" : "g"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 61.675604553125,
                "unit" : "mg"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 259.50484668124994,
                "unit" : "mg"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 90.810790175,
                "unit" : "mg"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 1392.545047784375,
                "unit" : "mg"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 3.1724916141875004,
                "unit" : "mg"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 0.9572446077187501,
                "unit" : "mg"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 104.61079971250001,
                "unit" : "mg"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 4.566,
                "unit" : "µg"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 18.615215557187504,
                "unit" : "mg"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 0.2760501702375,
                "unit" : "mg"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 0.5743307954968752,
                "unit" : "mg"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 1.2358516302906248,
                "unit" : "mg"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 0.25589102789375,
                "unit" : "mg"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 7.393952312500001,
                "unit" : "µg"
                },
                "FOLFD" : {
                "label" : "Folate (food)",
                "quantity" : 7.393952312500001,
                "unit" : "µg"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 0.49798195159374997,
                "unit" : "mg"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 14.0948,
                "unit" : "µg"
                },
                "WATER" : {
                "label" : "Water",
                "quantity" : 1037.555044563031,
                "unit" : "g"
                }
            },
            "totalDaily" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 38.47145635281251,
                "unit" : "%"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 4.1154564028846154,
                "unit" : "%"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 3.13154975796875,
                "unit" : "%"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 53.21686443443751,
                "unit" : "%"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 35.34168187875,
                "unit" : "%"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 5.1293191344375,
                "unit" : "%"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 2.569816856380208,
                "unit" : "%"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 25.950484668124993,
                "unit" : "%"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 21.621616708333335,
                "unit" : "%"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 29.628618037965424,
                "unit" : "%"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 17.624953412152777,
                "unit" : "%"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 8.702223706534092,
                "unit" : "%"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 14.944399958928573,
                "unit" : "%"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 0.5073333333333333,
                "unit" : "%"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 20.68357284131945,
                "unit" : "%"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 23.004180853125003,
                "unit" : "%"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 44.179291961298084,
                "unit" : "%"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 7.724072689316405,
                "unit" : "%"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 19.683925222596155,
                "unit" : "%"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 1.8484880781250002,
                "unit" : "%"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 3.3198796772916666,
                "unit" : "%"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 11.745666666666667,
                "unit" : "%"
                }
            },
            "digest" : [ {
                "label" : "Fat",
                "tag" : "FAT",
                "schemaOrgTag" : "fatContent",
                "total" : 2.675046661875,
                "hasRDI" : true,
                "daily" : 4.1154564028846154,
                "unit" : "g",
                "sub" : [ {
                "label" : "Saturated",
                "tag" : "FASAT",
                "schemaOrgTag" : "saturatedFatContent",
                "total" : 0.62630995159375,
                "hasRDI" : true,
                "daily" : 3.13154975796875,
                "unit" : "g"
                }, {
                "label" : "Trans",
                "tag" : "FATRN",
                "schemaOrgTag" : "transFatContent",
                "total" : 0.005334,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Monounsaturated",
                "tag" : "FAMS",
                "schemaOrgTag" : null,
                "total" : 0.20535981878750004,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Polyunsaturated",
                "tag" : "FAPU",
                "schemaOrgTag" : null,
                "total" : 0.755407374934375,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Carbs",
                "tag" : "CHOCDF",
                "schemaOrgTag" : "carbohydrateContent",
                "total" : 159.65059330331252,
                "hasRDI" : true,
                "daily" : 53.21686443443751,
                "unit" : "g",
                "sub" : [ {
                "label" : "Carbs (net)",
                "tag" : "CHOCDF.net",
                "schemaOrgTag" : null,
                "total" : 150.815172833625,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Fiber",
                "tag" : "FIBTG",
                "schemaOrgTag" : "fiberContent",
                "total" : 8.8354204696875,
                "hasRDI" : true,
                "daily" : 35.34168187875,
                "unit" : "g"
                }, {
                "label" : "Sugars",
                "tag" : "SUGAR",
                "schemaOrgTag" : "sugarContent",
                "total" : 124.03656217125001,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Sugars, added",
                "tag" : "SUGAR.added",
                "schemaOrgTag" : null,
                "total" : 17.140121681375003,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Protein",
                "tag" : "PROCNT",
                "schemaOrgTag" : "proteinContent",
                "total" : 2.56465956721875,
                "hasRDI" : true,
                "daily" : 5.1293191344375,
                "unit" : "g"
            }, {
                "label" : "Cholesterol",
                "tag" : "CHOLE",
                "schemaOrgTag" : "cholesterolContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "mg"
            }, {
                "label" : "Sodium",
                "tag" : "NA",
                "schemaOrgTag" : "sodiumContent",
                "total" : 61.675604553125,
                "hasRDI" : true,
                "daily" : 2.569816856380208,
                "unit" : "mg"
            }, {
                "label" : "Calcium",
                "tag" : "CA",
                "schemaOrgTag" : null,
                "total" : 259.50484668124994,
                "hasRDI" : true,
                "daily" : 25.950484668124993,
                "unit" : "mg"
            }, {
                "label" : "Magnesium",
                "tag" : "MG",
                "schemaOrgTag" : null,
                "total" : 90.810790175,
                "hasRDI" : true,
                "daily" : 21.621616708333335,
                "unit" : "mg"
            }, {
                "label" : "Potassium",
                "tag" : "K",
                "schemaOrgTag" : null,
                "total" : 1392.545047784375,
                "hasRDI" : true,
                "daily" : 29.628618037965424,
                "unit" : "mg"
            }, {
                "label" : "Iron",
                "tag" : "FE",
                "schemaOrgTag" : null,
                "total" : 3.1724916141875004,
                "hasRDI" : true,
                "daily" : 17.624953412152777,
                "unit" : "mg"
            }, {
                "label" : "Zinc",
                "tag" : "ZN",
                "schemaOrgTag" : null,
                "total" : 0.9572446077187501,
                "hasRDI" : true,
                "daily" : 8.702223706534092,
                "unit" : "mg"
            }, {
                "label" : "Phosphorus",
                "tag" : "P",
                "schemaOrgTag" : null,
                "total" : 104.61079971250001,
                "hasRDI" : true,
                "daily" : 14.944399958928573,
                "unit" : "mg"
            }, {
                "label" : "Vitamin A",
                "tag" : "VITA_RAE",
                "schemaOrgTag" : null,
                "total" : 4.566,
                "hasRDI" : true,
                "daily" : 0.5073333333333333,
                "unit" : "µg"
            }, {
                "label" : "Vitamin C",
                "tag" : "VITC",
                "schemaOrgTag" : null,
                "total" : 18.615215557187504,
                "hasRDI" : true,
                "daily" : 20.68357284131945,
                "unit" : "mg"
            }, {
                "label" : "Thiamin (B1)",
                "tag" : "THIA",
                "schemaOrgTag" : null,
                "total" : 0.2760501702375,
                "hasRDI" : true,
                "daily" : 23.004180853125003,
                "unit" : "mg"
            }, {
                "label" : "Riboflavin (B2)",
                "tag" : "RIBF",
                "schemaOrgTag" : null,
                "total" : 0.5743307954968752,
                "hasRDI" : true,
                "daily" : 44.179291961298084,
                "unit" : "mg"
            }, {
                "label" : "Niacin (B3)",
                "tag" : "NIA",
                "schemaOrgTag" : null,
                "total" : 1.2358516302906248,
                "hasRDI" : true,
                "daily" : 7.724072689316405,
                "unit" : "mg"
            }, {
                "label" : "Vitamin B6",
                "tag" : "VITB6A",
                "schemaOrgTag" : null,
                "total" : 0.25589102789375,
                "hasRDI" : true,
                "daily" : 19.683925222596155,
                "unit" : "mg"
            }, {
                "label" : "Folate equivalent (total)",
                "tag" : "FOLDFE",
                "schemaOrgTag" : null,
                "total" : 7.393952312500001,
                "hasRDI" : true,
                "daily" : 1.8484880781250002,
                "unit" : "µg"
            }, {
                "label" : "Folate (food)",
                "tag" : "FOLFD",
                "schemaOrgTag" : null,
                "total" : 7.393952312500001,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Folic acid",
                "tag" : "FOLAC",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin B12",
                "tag" : "VITB12",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin D",
                "tag" : "VITD",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin E",
                "tag" : "TOCPHA",
                "schemaOrgTag" : null,
                "total" : 0.49798195159374997,
                "hasRDI" : true,
                "daily" : 3.3198796772916666,
                "unit" : "mg"
            }, {
                "label" : "Vitamin K",
                "tag" : "VITK1",
                "schemaOrgTag" : null,
                "total" : 14.0948,
                "hasRDI" : true,
                "daily" : 11.745666666666667,
                "unit" : "µg"
            }, {
                "label" : "Sugar alcohols",
                "tag" : "Sugar.alcohol",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            }, {
                "label" : "Water",
                "tag" : "WATER",
                "schemaOrgTag" : null,
                "total" : 1037.555044563031,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            } ]
            },
            "bookmarked" : false,
            "bought" : false
        }, {
            "recipe" : {
            "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_2bdefb60f86458dfa15d9b3bc74a001f",
            "label" : "Apple Fennel Granita",
            "image" : "https://www.edamam.com/web-img/296/296665c735c52f9db7c71e36783cb7c3.jpg",
            "source" : "Epicurious",
            "url" : "http://www.epicurious.com/recipes/food/views/Apple-Fennel-Granita-106539",
            "shareAs" : "http://www.edamam.com/recipe/apple-fennel-granita-2bdefb60f86458dfa15d9b3bc74a001f/apple",
            "yield" : 6.0,
            "dietLabels" : [ "Low-Fat" ],
            "healthLabels" : [ "Vegan", "Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free" ],
            "cautions" : [ "Sulfites" ],
            "ingredientLines" : [ "1 teaspoon fennel seeds, toasted", "3 cups sparkling apple cider (not hard) or apple juice", "1 1/2 tablespoons superfine granulated sugar" ],
            "ingredients" : [ {
                "text" : "1 teaspoon fennel seeds, toasted",
                "weight" : 2.0
            }, {
                "text" : "3 cups sparkling apple cider (not hard) or apple juice",
                "weight" : 744.0
            }, {
                "text" : "1 1/2 tablespoons superfine granulated sugar",
                "weight" : 18.9
            } ],
            "calories" : 422.283,
            "totalWeight" : 764.9,
            "totalTime" : 0.0,
            "totalNutrients" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 422.283,
                "unit" : "kcal"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 1.2646000000000002,
                "unit" : "g"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 0.17328,
                "unit" : "g"
                },
                "FAMS" : {
                "label" : "Monounsaturated",
                "quantity" : 0.24284000000000003,
                "unit" : "g"
                },
                "FAPU" : {
                "label" : "Polyunsaturated",
                "quantity" : 0.32396,
                "unit" : "g"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 104.01402,
                "unit" : "g"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 2.2840000000000003,
                "unit" : "g"
                },
                "SUGAR" : {
                "label" : "Sugars",
                "quantity" : 90.435,
                "unit" : "g"
                },
                "SUGAR.added" : {
                "label" : "Sugars, added",
                "quantity" : 18.862199999999998,
                "unit" : "g"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 1.06,
                "unit" : "g"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 31.709000000000003,
                "unit" : "mg"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 83.62899999999999,
                "unit" : "mg"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 44.900000000000006,
                "unit" : "mg"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 785.6980000000001,
                "unit" : "mg"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 1.27305,
                "unit" : "mg"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 0.22469000000000003,
                "unit" : "mg"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 61.82000000000001,
                "unit" : "mg"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 0.14,
                "unit" : "µg"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 7.1160000000000005,
                "unit" : "mg"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 0.16440000000000002,
                "unit" : "mg"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 0.13713100000000003,
                "unit" : "mg"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 0.66412,
                "unit" : "mg"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 0.14331999999999998,
                "unit" : "mg"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 0.07440000000000001,
                "unit" : "mg"
                },
                "WATER" : {
                "label" : "Water",
                "quantity" : 656.68558,
                "unit" : "g"
                }
            },
            "totalDaily" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 21.114150000000002,
                "unit" : "%"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 1.9455384615384619,
                "unit" : "%"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 0.8664,
                "unit" : "%"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 34.67134,
                "unit" : "%"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 9.136000000000001,
                "unit" : "%"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 2.12,
                "unit" : "%"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 1.3212083333333335,
                "unit" : "%"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 8.3629,
                "unit" : "%"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 10.690476190476193,
                "unit" : "%"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 16.716978723404257,
                "unit" : "%"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 7.072500000000001,
                "unit" : "%"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 2.0426363636363636,
                "unit" : "%"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 8.831428571428573,
                "unit" : "%"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 0.015555555555555557,
                "unit" : "%"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 7.906666666666667,
                "unit" : "%"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 13.700000000000001,
                "unit" : "%"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 10.548538461538463,
                "unit" : "%"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 4.15075,
                "unit" : "%"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 11.024615384615382,
                "unit" : "%"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 0.49600000000000005,
                "unit" : "%"
                }
            },
            "digest" : [ {
                "label" : "Fat",
                "tag" : "FAT",
                "schemaOrgTag" : "fatContent",
                "total" : 1.2646000000000002,
                "hasRDI" : true,
                "daily" : 1.9455384615384619,
                "unit" : "g",
                "sub" : [ {
                "label" : "Saturated",
                "tag" : "FASAT",
                "schemaOrgTag" : "saturatedFatContent",
                "total" : 0.17328,
                "hasRDI" : true,
                "daily" : 0.8664,
                "unit" : "g"
                }, {
                "label" : "Trans",
                "tag" : "FATRN",
                "schemaOrgTag" : "transFatContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Monounsaturated",
                "tag" : "FAMS",
                "schemaOrgTag" : null,
                "total" : 0.24284000000000003,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Polyunsaturated",
                "tag" : "FAPU",
                "schemaOrgTag" : null,
                "total" : 0.32396,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Carbs",
                "tag" : "CHOCDF",
                "schemaOrgTag" : "carbohydrateContent",
                "total" : 104.01402,
                "hasRDI" : true,
                "daily" : 34.67134,
                "unit" : "g",
                "sub" : [ {
                "label" : "Carbs (net)",
                "tag" : "CHOCDF.net",
                "schemaOrgTag" : null,
                "total" : 101.73002,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Fiber",
                "tag" : "FIBTG",
                "schemaOrgTag" : "fiberContent",
                "total" : 2.2840000000000003,
                "hasRDI" : true,
                "daily" : 9.136000000000001,
                "unit" : "g"
                }, {
                "label" : "Sugars",
                "tag" : "SUGAR",
                "schemaOrgTag" : "sugarContent",
                "total" : 90.435,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Sugars, added",
                "tag" : "SUGAR.added",
                "schemaOrgTag" : null,
                "total" : 18.862199999999998,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Protein",
                "tag" : "PROCNT",
                "schemaOrgTag" : "proteinContent",
                "total" : 1.06,
                "hasRDI" : true,
                "daily" : 2.12,
                "unit" : "g"
            }, {
                "label" : "Cholesterol",
                "tag" : "CHOLE",
                "schemaOrgTag" : "cholesterolContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "mg"
            }, {
                "label" : "Sodium",
                "tag" : "NA",
                "schemaOrgTag" : "sodiumContent",
                "total" : 31.709000000000003,
                "hasRDI" : true,
                "daily" : 1.3212083333333335,
                "unit" : "mg"
            }, {
                "label" : "Calcium",
                "tag" : "CA",
                "schemaOrgTag" : null,
                "total" : 83.62899999999999,
                "hasRDI" : true,
                "daily" : 8.3629,
                "unit" : "mg"
            }, {
                "label" : "Magnesium",
                "tag" : "MG",
                "schemaOrgTag" : null,
                "total" : 44.900000000000006,
                "hasRDI" : true,
                "daily" : 10.690476190476193,
                "unit" : "mg"
            }, {
                "label" : "Potassium",
                "tag" : "K",
                "schemaOrgTag" : null,
                "total" : 785.6980000000001,
                "hasRDI" : true,
                "daily" : 16.716978723404257,
                "unit" : "mg"
            }, {
                "label" : "Iron",
                "tag" : "FE",
                "schemaOrgTag" : null,
                "total" : 1.27305,
                "hasRDI" : true,
                "daily" : 7.072500000000001,
                "unit" : "mg"
            }, {
                "label" : "Zinc",
                "tag" : "ZN",
                "schemaOrgTag" : null,
                "total" : 0.22469000000000003,
                "hasRDI" : true,
                "daily" : 2.0426363636363636,
                "unit" : "mg"
            }, {
                "label" : "Phosphorus",
                "tag" : "P",
                "schemaOrgTag" : null,
                "total" : 61.82000000000001,
                "hasRDI" : true,
                "daily" : 8.831428571428573,
                "unit" : "mg"
            }, {
                "label" : "Vitamin A",
                "tag" : "VITA_RAE",
                "schemaOrgTag" : null,
                "total" : 0.14,
                "hasRDI" : true,
                "daily" : 0.015555555555555557,
                "unit" : "µg"
            }, {
                "label" : "Vitamin C",
                "tag" : "VITC",
                "schemaOrgTag" : null,
                "total" : 7.1160000000000005,
                "hasRDI" : true,
                "daily" : 7.906666666666667,
                "unit" : "mg"
            }, {
                "label" : "Thiamin (B1)",
                "tag" : "THIA",
                "schemaOrgTag" : null,
                "total" : 0.16440000000000002,
                "hasRDI" : true,
                "daily" : 13.700000000000001,
                "unit" : "mg"
            }, {
                "label" : "Riboflavin (B2)",
                "tag" : "RIBF",
                "schemaOrgTag" : null,
                "total" : 0.13713100000000003,
                "hasRDI" : true,
                "daily" : 10.548538461538463,
                "unit" : "mg"
            }, {
                "label" : "Niacin (B3)",
                "tag" : "NIA",
                "schemaOrgTag" : null,
                "total" : 0.66412,
                "hasRDI" : true,
                "daily" : 4.15075,
                "unit" : "mg"
            }, {
                "label" : "Vitamin B6",
                "tag" : "VITB6A",
                "schemaOrgTag" : null,
                "total" : 0.14331999999999998,
                "hasRDI" : true,
                "daily" : 11.024615384615382,
                "unit" : "mg"
            }, {
                "label" : "Folate equivalent (total)",
                "tag" : "FOLDFE",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Folate (food)",
                "tag" : "FOLFD",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Folic acid",
                "tag" : "FOLAC",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin B12",
                "tag" : "VITB12",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin D",
                "tag" : "VITD",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin E",
                "tag" : "TOCPHA",
                "schemaOrgTag" : null,
                "total" : 0.07440000000000001,
                "hasRDI" : true,
                "daily" : 0.49600000000000005,
                "unit" : "mg"
            }, {
                "label" : "Vitamin K",
                "tag" : "VITK1",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Sugar alcohols",
                "tag" : "Sugar.alcohol",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            }, {
                "label" : "Water",
                "tag" : "WATER",
                "schemaOrgTag" : null,
                "total" : 656.68558,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            } ]
            },
            "bookmarked" : false,
            "bought" : false
        }, {
            "recipe" : {
            "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_c6cfbde5baac59b24fddb9a87b92b092",
            "label" : "The Big Apple recipes",
            "image" : "https://www.edamam.com/web-img/ffe/ffec3dfe693bd7e995d3466543594a06",
            "source" : "Martha Stewart",
            "url" : "http://www.marthastewart.com/354108/shaken-and-stirred-big-apple",
            "shareAs" : "http://www.edamam.com/recipe/the-big-apple-recipes-c6cfbde5baac59b24fddb9a87b92b092/apple",
            "yield" : 4.0,
            "dietLabels" : [ "Low-Fat" ],
            "healthLabels" : [ "Vegan", "Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Cocktail" ],
            "cautions" : [ "Gluten", "Wheat", "Sulfites" ],
            "ingredientLines" : [ "1 lady apple, cut in half lengthwise, or 2 slices of a larger apple", "3 ounces whiskey", "1 ounce dry vermouth", "2 dashes bitters", "1 cup sparkling apple cider" ],
            "ingredients" : [ {
                "text" : "1 lady apple, cut in half lengthwise, or 2 slices of a larger apple",
                "weight" : 182.0
            }, {
                "text" : "3 ounces whiskey",
                "weight" : 85.048569375
            }, {
                "text" : "1 ounce dry vermouth",
                "weight" : 28.349523125
            }, {
                "text" : "2 dashes bitters",
                "weight" : 2.0
            }, {
                "text" : "1 cup sparkling apple cider",
                "weight" : 248.0
            } ],
            "calories" : 449.49152763125,
            "totalWeight" : 545.3980925000001,
            "totalTime" : 15.0,
            "totalNutrients" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 449.49152763125,
                "unit" : "kcal"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 0.6318,
                "unit" : "g"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 0.10552,
                "unit" : "g"
                },
                "FAMS" : {
                "label" : "Monounsaturated",
                "quantity" : 0.027620000000000002,
                "unit" : "g"
                },
                "FAPU" : {
                "label" : "Polyunsaturated",
                "quantity" : 0.18954,
                "unit" : "g"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 54.014355598375005,
                "unit" : "g"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 4.864000000000001,
                "unit" : "g"
                },
                "SUGAR" : {
                "label" : "Sugars",
                "quantity" : 42.991361232687495,
                "unit" : "g"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 0.7410446661875001,
                "unit" : "g"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 14.02796185,
                "unit" : "mg"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 33.02796185,
                "unit" : "mg"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 24.61844754375,
                "unit" : "mg"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 475.02699928125,
                "unit" : "mg"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 0.6557126633125001,
                "unit" : "mg"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 0.1940738078125,
                "unit" : "mg"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 46.5318474,
                "unit" : "mg"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 5.46,
                "unit" : "µg"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 10.604,
                "unit" : "mg"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 0.08966039031875,
                "unit" : "mg"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 0.09948233309375,
                "unit" : "mg"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 0.40503652240625,
                "unit" : "mg"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 0.13543922818125,
                "unit" : "mg"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 5.74349523125,
                "unit" : "µg"
                },
                "FOLFD" : {
                "label" : "Folate (food)",
                "quantity" : 5.74349523125,
                "unit" : "µg"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 0.3524,
                "unit" : "mg"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 4.0040000000000004,
                "unit" : "µg"
                },
                "WATER" : {
                "label" : "Water",
                "quantity" : 454.77745295225,
                "unit" : "g"
                }
            },
            "totalDaily" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 22.4745763815625,
                "unit" : "%"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 0.972,
                "unit" : "%"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 0.5276,
                "unit" : "%"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 18.004785199458336,
                "unit" : "%"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 19.456000000000003,
                "unit" : "%"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 1.4820893323750002,
                "unit" : "%"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 0.5844984104166667,
                "unit" : "%"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 3.3027961849999996,
                "unit" : "%"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 5.861535129464286,
                "unit" : "%"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 10.106957431515958,
                "unit" : "%"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 3.6428481295138897,
                "unit" : "%"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 1.76430734375,
                "unit" : "%"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 6.647406771428571,
                "unit" : "%"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 0.6066666666666667,
                "unit" : "%"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 11.78222222222222,
                "unit" : "%"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 7.471699193229168,
                "unit" : "%"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 7.652487161057692,
                "unit" : "%"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 2.5314782650390626,
                "unit" : "%"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 10.418402167788463,
                "unit" : "%"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 1.4358738078125,
                "unit" : "%"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 2.3493333333333335,
                "unit" : "%"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 3.336666666666667,
                "unit" : "%"
                }
            },
            "digest" : [ {
                "label" : "Fat",
                "tag" : "FAT",
                "schemaOrgTag" : "fatContent",
                "total" : 0.6318,
                "hasRDI" : true,
                "daily" : 0.972,
                "unit" : "g",
                "sub" : [ {
                "label" : "Saturated",
                "tag" : "FASAT",
                "schemaOrgTag" : "saturatedFatContent",
                "total" : 0.10552,
                "hasRDI" : true,
                "daily" : 0.5276,
                "unit" : "g"
                }, {
                "label" : "Trans",
                "tag" : "FATRN",
                "schemaOrgTag" : "transFatContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Monounsaturated",
                "tag" : "FAMS",
                "schemaOrgTag" : null,
                "total" : 0.027620000000000002,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Polyunsaturated",
                "tag" : "FAPU",
                "schemaOrgTag" : null,
                "total" : 0.18954,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Carbs",
                "tag" : "CHOCDF",
                "schemaOrgTag" : "carbohydrateContent",
                "total" : 54.014355598375005,
                "hasRDI" : true,
                "daily" : 18.004785199458336,
                "unit" : "g",
                "sub" : [ {
                "label" : "Carbs (net)",
                "tag" : "CHOCDF.net",
                "schemaOrgTag" : null,
                "total" : 49.150355598375,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Fiber",
                "tag" : "FIBTG",
                "schemaOrgTag" : "fiberContent",
                "total" : 4.864000000000001,
                "hasRDI" : true,
                "daily" : 19.456000000000003,
                "unit" : "g"
                }, {
                "label" : "Sugars",
                "tag" : "SUGAR",
                "schemaOrgTag" : "sugarContent",
                "total" : 42.991361232687495,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Sugars, added",
                "tag" : "SUGAR.added",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Protein",
                "tag" : "PROCNT",
                "schemaOrgTag" : "proteinContent",
                "total" : 0.7410446661875001,
                "hasRDI" : true,
                "daily" : 1.4820893323750002,
                "unit" : "g"
            }, {
                "label" : "Cholesterol",
                "tag" : "CHOLE",
                "schemaOrgTag" : "cholesterolContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "mg"
            }, {
                "label" : "Sodium",
                "tag" : "NA",
                "schemaOrgTag" : "sodiumContent",
                "total" : 14.02796185,
                "hasRDI" : true,
                "daily" : 0.5844984104166667,
                "unit" : "mg"
            }, {
                "label" : "Calcium",
                "tag" : "CA",
                "schemaOrgTag" : null,
                "total" : 33.02796185,
                "hasRDI" : true,
                "daily" : 3.3027961849999996,
                "unit" : "mg"
            }, {
                "label" : "Magnesium",
                "tag" : "MG",
                "schemaOrgTag" : null,
                "total" : 24.61844754375,
                "hasRDI" : true,
                "daily" : 5.861535129464286,
                "unit" : "mg"
            }, {
                "label" : "Potassium",
                "tag" : "K",
                "schemaOrgTag" : null,
                "total" : 475.02699928125,
                "hasRDI" : true,
                "daily" : 10.106957431515958,
                "unit" : "mg"
            }, {
                "label" : "Iron",
                "tag" : "FE",
                "schemaOrgTag" : null,
                "total" : 0.6557126633125001,
                "hasRDI" : true,
                "daily" : 3.6428481295138897,
                "unit" : "mg"
            }, {
                "label" : "Zinc",
                "tag" : "ZN",
                "schemaOrgTag" : null,
                "total" : 0.1940738078125,
                "hasRDI" : true,
                "daily" : 1.76430734375,
                "unit" : "mg"
            }, {
                "label" : "Phosphorus",
                "tag" : "P",
                "schemaOrgTag" : null,
                "total" : 46.5318474,
                "hasRDI" : true,
                "daily" : 6.647406771428571,
                "unit" : "mg"
            }, {
                "label" : "Vitamin A",
                "tag" : "VITA_RAE",
                "schemaOrgTag" : null,
                "total" : 5.46,
                "hasRDI" : true,
                "daily" : 0.6066666666666667,
                "unit" : "µg"
            }, {
                "label" : "Vitamin C",
                "tag" : "VITC",
                "schemaOrgTag" : null,
                "total" : 10.604,
                "hasRDI" : true,
                "daily" : 11.78222222222222,
                "unit" : "mg"
            }, {
                "label" : "Thiamin (B1)",
                "tag" : "THIA",
                "schemaOrgTag" : null,
                "total" : 0.08966039031875,
                "hasRDI" : true,
                "daily" : 7.471699193229168,
                "unit" : "mg"
            }, {
                "label" : "Riboflavin (B2)",
                "tag" : "RIBF",
                "schemaOrgTag" : null,
                "total" : 0.09948233309375,
                "hasRDI" : true,
                "daily" : 7.652487161057692,
                "unit" : "mg"
            }, {
                "label" : "Niacin (B3)",
                "tag" : "NIA",
                "schemaOrgTag" : null,
                "total" : 0.40503652240625,
                "hasRDI" : true,
                "daily" : 2.5314782650390626,
                "unit" : "mg"
            }, {
                "label" : "Vitamin B6",
                "tag" : "VITB6A",
                "schemaOrgTag" : null,
                "total" : 0.13543922818125,
                "hasRDI" : true,
                "daily" : 10.418402167788463,
                "unit" : "mg"
            }, {
                "label" : "Folate equivalent (total)",
                "tag" : "FOLDFE",
                "schemaOrgTag" : null,
                "total" : 5.74349523125,
                "hasRDI" : true,
                "daily" : 1.4358738078125,
                "unit" : "µg"
            }, {
                "label" : "Folate (food)",
                "tag" : "FOLFD",
                "schemaOrgTag" : null,
                "total" : 5.74349523125,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Folic acid",
                "tag" : "FOLAC",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin B12",
                "tag" : "VITB12",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin D",
                "tag" : "VITD",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin E",
                "tag" : "TOCPHA",
                "schemaOrgTag" : null,
                "total" : 0.3524,
                "hasRDI" : true,
                "daily" : 2.3493333333333335,
                "unit" : "mg"
            }, {
                "label" : "Vitamin K",
                "tag" : "VITK1",
                "schemaOrgTag" : null,
                "total" : 4.0040000000000004,
                "hasRDI" : true,
                "daily" : 3.336666666666667,
                "unit" : "µg"
            }, {
                "label" : "Sugar alcohols",
                "tag" : "Sugar.alcohol",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            }, {
                "label" : "Water",
                "tag" : "WATER",
                "schemaOrgTag" : null,
                "total" : 454.77745295225,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            } ]
            },
            "bookmarked" : false,
            "bought" : false
        }, {
            "recipe" : {
            "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_9cc20bf4e36700ad1b0867fd4d4f90b5",
            "label" : "Apple crunch",
            "image" : "https://www.edamam.com/web-img/e7a/e7a3646942e4d09ab62537a1853e71e2.jpg",
            "source" : "BBC Good Food",
            "url" : "http://www.bbcgoodfood.com/recipes/apple-crunch",
            "shareAs" : "http://www.edamam.com/recipe/apple-crunch-9cc20bf4e36700ad1b0867fd4d4f90b5/apple",
            "yield" : 1.0,
            "dietLabels" : [ ],
            "healthLabels" : [ "Vegan", "Vegetarian", "Tree-Nut-Free", "Alcohol-Free" ],
            "cautions" : [ "Sulfites" ],
            "ingredientLines" : [ "1 small eating apple", "1 tbsp organic unsalted crunchy peanut butter" ],
            "ingredients" : [ {
                "text" : "1 small eating apple",
                "weight" : 182.0
            }, {
                "text" : "1 tbsp organic unsalted crunchy peanut butter",
                "weight" : 16.0
            } ],
            "calories" : 190.32,
            "totalWeight" : 198.0,
            "totalTime" : 0.0,
            "totalNutrients" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 190.32,
                "unit" : "kcal"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 8.527000000000001,
                "unit" : "g"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 1.70296,
                "unit" : "g"
                },
                "FATRN" : {
                "label" : "Trans",
                "quantity" : 0.012,
                "unit" : "g"
                },
                "FAMS" : {
                "label" : "Monounsaturated",
                "quantity" : 4.1633,
                "unit" : "g"
                },
                "FAPU" : {
                "label" : "Polyunsaturated",
                "quantity" : 2.0984200000000004,
                "unit" : "g"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 28.703800000000005,
                "unit" : "g"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 5.168,
                "unit" : "g"
                },
                "SUGAR" : {
                "label" : "Sugars",
                "quantity" : 20.5882,
                "unit" : "g"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 4.026800000000001,
                "unit" : "g"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 4.54,
                "unit" : "mg"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 18.759999999999998,
                "unit" : "mg"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 35.98,
                "unit" : "mg"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 284.02,
                "unit" : "mg"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 0.4968,
                "unit" : "mg"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 0.47439999999999993,
                "unit" : "mg"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 73.62,
                "unit" : "mg"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 5.46,
                "unit" : "µg"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 8.372,
                "unit" : "mg"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 0.05494,
                "unit" : "mg"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 0.07804,
                "unit" : "mg"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 2.2635400000000003,
                "unit" : "mg"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 0.14518,
                "unit" : "mg"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 19.38,
                "unit" : "µg"
                },
                "FOLFD" : {
                "label" : "Folate (food)",
                "quantity" : 19.38,
                "unit" : "µg"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 1.7835999999999999,
                "unit" : "mg"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 4.0520000000000005,
                "unit" : "µg"
                },
                "WATER" : {
                "label" : "Water",
                "quantity" : 155.916,
                "unit" : "g"
                }
            },
            "totalDaily" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 9.516,
                "unit" : "%"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 13.118461538461538,
                "unit" : "%"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 8.5148,
                "unit" : "%"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 9.567933333333336,
                "unit" : "%"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 20.672000000000004,
                "unit" : "%"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 8.053600000000001,
                "unit" : "%"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 0.18916666666666668,
                "unit" : "%"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 1.8759999999999997,
                "unit" : "%"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 8.566666666666666,
                "unit" : "%"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 6.042978723404255,
                "unit" : "%"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 2.76,
                "unit" : "%"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 4.312727272727272,
                "unit" : "%"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 10.517142857142858,
                "unit" : "%"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 0.6066666666666667,
                "unit" : "%"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 9.302222222222223,
                "unit" : "%"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 4.578333333333334,
                "unit" : "%"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 6.003076923076923,
                "unit" : "%"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 14.147125000000003,
                "unit" : "%"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 11.167692307692308,
                "unit" : "%"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 4.845,
                "unit" : "%"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 11.890666666666666,
                "unit" : "%"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 3.376666666666667,
                "unit" : "%"
                }
            },
            "digest" : [ {
                "label" : "Fat",
                "tag" : "FAT",
                "schemaOrgTag" : "fatContent",
                "total" : 8.527000000000001,
                "hasRDI" : true,
                "daily" : 13.118461538461538,
                "unit" : "g",
                "sub" : [ {
                "label" : "Saturated",
                "tag" : "FASAT",
                "schemaOrgTag" : "saturatedFatContent",
                "total" : 1.70296,
                "hasRDI" : true,
                "daily" : 8.5148,
                "unit" : "g"
                }, {
                "label" : "Trans",
                "tag" : "FATRN",
                "schemaOrgTag" : "transFatContent",
                "total" : 0.012,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Monounsaturated",
                "tag" : "FAMS",
                "schemaOrgTag" : null,
                "total" : 4.1633,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Polyunsaturated",
                "tag" : "FAPU",
                "schemaOrgTag" : null,
                "total" : 2.0984200000000004,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Carbs",
                "tag" : "CHOCDF",
                "schemaOrgTag" : "carbohydrateContent",
                "total" : 28.703800000000005,
                "hasRDI" : true,
                "daily" : 9.567933333333336,
                "unit" : "g",
                "sub" : [ {
                "label" : "Carbs (net)",
                "tag" : "CHOCDF.net",
                "schemaOrgTag" : null,
                "total" : 23.535800000000005,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Fiber",
                "tag" : "FIBTG",
                "schemaOrgTag" : "fiberContent",
                "total" : 5.168,
                "hasRDI" : true,
                "daily" : 20.672000000000004,
                "unit" : "g"
                }, {
                "label" : "Sugars",
                "tag" : "SUGAR",
                "schemaOrgTag" : "sugarContent",
                "total" : 20.5882,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Sugars, added",
                "tag" : "SUGAR.added",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Protein",
                "tag" : "PROCNT",
                "schemaOrgTag" : "proteinContent",
                "total" : 4.026800000000001,
                "hasRDI" : true,
                "daily" : 8.053600000000001,
                "unit" : "g"
            }, {
                "label" : "Cholesterol",
                "tag" : "CHOLE",
                "schemaOrgTag" : "cholesterolContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "mg"
            }, {
                "label" : "Sodium",
                "tag" : "NA",
                "schemaOrgTag" : "sodiumContent",
                "total" : 4.54,
                "hasRDI" : true,
                "daily" : 0.18916666666666668,
                "unit" : "mg"
            }, {
                "label" : "Calcium",
                "tag" : "CA",
                "schemaOrgTag" : null,
                "total" : 18.759999999999998,
                "hasRDI" : true,
                "daily" : 1.8759999999999997,
                "unit" : "mg"
            }, {
                "label" : "Magnesium",
                "tag" : "MG",
                "schemaOrgTag" : null,
                "total" : 35.98,
                "hasRDI" : true,
                "daily" : 8.566666666666666,
                "unit" : "mg"
            }, {
                "label" : "Potassium",
                "tag" : "K",
                "schemaOrgTag" : null,
                "total" : 284.02,
                "hasRDI" : true,
                "daily" : 6.042978723404255,
                "unit" : "mg"
            }, {
                "label" : "Iron",
                "tag" : "FE",
                "schemaOrgTag" : null,
                "total" : 0.4968,
                "hasRDI" : true,
                "daily" : 2.76,
                "unit" : "mg"
            }, {
                "label" : "Zinc",
                "tag" : "ZN",
                "schemaOrgTag" : null,
                "total" : 0.47439999999999993,
                "hasRDI" : true,
                "daily" : 4.312727272727272,
                "unit" : "mg"
            }, {
                "label" : "Phosphorus",
                "tag" : "P",
                "schemaOrgTag" : null,
                "total" : 73.62,
                "hasRDI" : true,
                "daily" : 10.517142857142858,
                "unit" : "mg"
            }, {
                "label" : "Vitamin A",
                "tag" : "VITA_RAE",
                "schemaOrgTag" : null,
                "total" : 5.46,
                "hasRDI" : true,
                "daily" : 0.6066666666666667,
                "unit" : "µg"
            }, {
                "label" : "Vitamin C",
                "tag" : "VITC",
                "schemaOrgTag" : null,
                "total" : 8.372,
                "hasRDI" : true,
                "daily" : 9.302222222222223,
                "unit" : "mg"
            }, {
                "label" : "Thiamin (B1)",
                "tag" : "THIA",
                "schemaOrgTag" : null,
                "total" : 0.05494,
                "hasRDI" : true,
                "daily" : 4.578333333333334,
                "unit" : "mg"
            }, {
                "label" : "Riboflavin (B2)",
                "tag" : "RIBF",
                "schemaOrgTag" : null,
                "total" : 0.07804,
                "hasRDI" : true,
                "daily" : 6.003076923076923,
                "unit" : "mg"
            }, {
                "label" : "Niacin (B3)",
                "tag" : "NIA",
                "schemaOrgTag" : null,
                "total" : 2.2635400000000003,
                "hasRDI" : true,
                "daily" : 14.147125000000003,
                "unit" : "mg"
            }, {
                "label" : "Vitamin B6",
                "tag" : "VITB6A",
                "schemaOrgTag" : null,
                "total" : 0.14518,
                "hasRDI" : true,
                "daily" : 11.167692307692308,
                "unit" : "mg"
            }, {
                "label" : "Folate equivalent (total)",
                "tag" : "FOLDFE",
                "schemaOrgTag" : null,
                "total" : 19.38,
                "hasRDI" : true,
                "daily" : 4.845,
                "unit" : "µg"
            }, {
                "label" : "Folate (food)",
                "tag" : "FOLFD",
                "schemaOrgTag" : null,
                "total" : 19.38,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Folic acid",
                "tag" : "FOLAC",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin B12",
                "tag" : "VITB12",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin D",
                "tag" : "VITD",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin E",
                "tag" : "TOCPHA",
                "schemaOrgTag" : null,
                "total" : 1.7835999999999999,
                "hasRDI" : true,
                "daily" : 11.890666666666666,
                "unit" : "mg"
            }, {
                "label" : "Vitamin K",
                "tag" : "VITK1",
                "schemaOrgTag" : null,
                "total" : 4.0520000000000005,
                "hasRDI" : true,
                "daily" : 3.376666666666667,
                "unit" : "µg"
            }, {
                "label" : "Sugar alcohols",
                "tag" : "Sugar.alcohol",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            }, {
                "label" : "Water",
                "tag" : "WATER",
                "schemaOrgTag" : null,
                "total" : 155.916,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            } ]
            },
            "bookmarked" : false,
            "bought" : false
        }, {
            "recipe" : {
            "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_2997dfa4b41e0cbca60683731953389b",
            "label" : "Apple Butter recipes",
            "image" : "https://www.edamam.com/web-img/010/010049db50a572b9804d8097b1e79e7f",
            "source" : "Bon Appetit",
            "url" : "http://www.bonappetit.com/recipe/apple-butter",
            "shareAs" : "http://www.edamam.com/recipe/apple-butter-recipes-2997dfa4b41e0cbca60683731953389b/apple",
            "yield" : 4.0,
            "dietLabels" : [ "Low-Fat" ],
            "healthLabels" : [ "Vegan", "Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free" ],
            "cautions" : [ "Sulfites" ],
            "ingredientLines" : [ "6 pounds mixed sweet and tart apples, unpeeled, uncored, chopped", "6 cups apple cider", "1 cup raw or granulated sugar", "1 3-inch cinnamon stick", "3 whole cloves", "½ teaspoon kosher salt", "1 tablespoon apple cider vinegar" ],
            "ingredients" : [ {
                "text" : "6 pounds mixed sweet and tart apples, unpeeled, uncored, chopped",
                "weight" : 2721.55422
            }, {
                "text" : "6 cups apple cider",
                "weight" : 1488.0
            }, {
                "text" : "1 cup raw or granulated sugar",
                "weight" : 200.0
            }, {
                "text" : "1 3-inch cinnamon stick",
                "weight" : 2.6
            }, {
                "text" : "3 whole cloves",
                "weight" : 0.44999999999999996
            }, {
                "text" : "½ teaspoon kosher salt",
                "weight" : 2.4270833334564377
            }, {
                "text" : "1 tablespoon apple cider vinegar",
                "weight" : 14.9
            } ],
            "calories" : 3047.7654476000002,
            "totalWeight" : 4429.9313033334565,
            "totalTime" : 85.0,
            "totalNutrients" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 3047.7654476000002,
                "unit" : "kcal"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 7.196093018000001,
                "unit" : "g"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 0.354114,
                "unit" : "g"
                },
                "FATRN" : {
                "label" : "Trans",
                "quantity" : 0.001143,
                "unit" : "g"
                },
                "FAMS" : {
                "label" : "Monounsaturated",
                "quantity" : 0.10194450000000001,
                "unit" : "g"
                },
                "FAPU" : {
                "label" : "Polyunsaturated",
                "quantity" : 0.598315,
                "unit" : "g"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 741.036324342,
                "unit" : "g"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 80.71266816,
                "unit" : "g"
                },
                "SUGAR" : {
                "label" : "Sugars",
                "quantity" : 603.8693796980001,
                "unit" : "g"
                },
                "SUGAR.added" : {
                "label" : "Sugars, added",
                "quantity" : 199.6,
                "unit" : "g"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 13.593443568000001,
                "unit" : "g"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 1031.676000581046,
                "unit" : "mg"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 287.6392110000296,
                "unit" : "mg"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 213.9724818333346,
                "unit" : "mg"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 4799.6122306666775,
                "unit" : "mg"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 6.275295705000405,
                "unit" : "mg"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 1.4726287713334567,
                "unit" : "mg"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 434.07050640000006,
                "unit" : "mg"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 136.503711,
                "unit" : "µg"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 13.491700000000002,
                "unit" : "mg"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 0.8308583018000001,
                "unit" : "mg"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 0.9734045550000001,
                "unit" : "mg"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 4.557050317200001,
                "unit" : "mg"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 1.2806825614,
                "unit" : "mg"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 0.2685,
                "unit" : "µg"
                },
                "FOLFD" : {
                "label" : "Folate (food)",
                "quantity" : 81.91512660000001,
                "unit" : "µg"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 5.147607596,
                "unit" : "mg"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 88.53903504,
                "unit" : "µg"
                },
                "WATER" : {
                "label" : "Water",
                "quantity" : 3653.1934755786665,
                "unit" : "g"
                }
            },
            "totalDaily" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 152.38827238000002,
                "unit" : "%"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 11.070912335384618,
                "unit" : "%"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 1.77057,
                "unit" : "%"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 247.012108114,
                "unit" : "%"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 322.85067264,
                "unit" : "%"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 27.186887136000006,
                "unit" : "%"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 42.98650002421025,
                "unit" : "%"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 28.76392110000296,
                "unit" : "%"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 50.94582900793681,
                "unit" : "%"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 102.11940916312079,
                "unit" : "%"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 34.862753916668915,
                "unit" : "%"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 13.387534284849608,
                "unit" : "%"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 62.01007234285716,
                "unit" : "%"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 15.167079000000001,
                "unit" : "%"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 14.990777777777778,
                "unit" : "%"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 69.23819181666667,
                "unit" : "%"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 74.87727346153848,
                "unit" : "%"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 28.481564482500005,
                "unit" : "%"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 98.51404318461537,
                "unit" : "%"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 0.067125,
                "unit" : "%"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 34.317383973333335,
                "unit" : "%"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 73.7825292,
                "unit" : "%"
                }
            },
            "digest" : [ {
                "label" : "Fat",
                "tag" : "FAT",
                "schemaOrgTag" : "fatContent",
                "total" : 7.196093018000001,
                "hasRDI" : true,
                "daily" : 11.070912335384618,
                "unit" : "g",
                "sub" : [ {
                "label" : "Saturated",
                "tag" : "FASAT",
                "schemaOrgTag" : "saturatedFatContent",
                "total" : 0.354114,
                "hasRDI" : true,
                "daily" : 1.77057,
                "unit" : "g"
                }, {
                "label" : "Trans",
                "tag" : "FATRN",
                "schemaOrgTag" : "transFatContent",
                "total" : 0.001143,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Monounsaturated",
                "tag" : "FAMS",
                "schemaOrgTag" : null,
                "total" : 0.10194450000000001,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Polyunsaturated",
                "tag" : "FAPU",
                "schemaOrgTag" : null,
                "total" : 0.598315,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Carbs",
                "tag" : "CHOCDF",
                "schemaOrgTag" : "carbohydrateContent",
                "total" : 741.036324342,
                "hasRDI" : true,
                "daily" : 247.012108114,
                "unit" : "g",
                "sub" : [ {
                "label" : "Carbs (net)",
                "tag" : "CHOCDF.net",
                "schemaOrgTag" : null,
                "total" : 660.3236561819999,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Fiber",
                "tag" : "FIBTG",
                "schemaOrgTag" : "fiberContent",
                "total" : 80.71266816,
                "hasRDI" : true,
                "daily" : 322.85067264,
                "unit" : "g"
                }, {
                "label" : "Sugars",
                "tag" : "SUGAR",
                "schemaOrgTag" : "sugarContent",
                "total" : 603.8693796980001,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Sugars, added",
                "tag" : "SUGAR.added",
                "schemaOrgTag" : null,
                "total" : 199.6,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Protein",
                "tag" : "PROCNT",
                "schemaOrgTag" : "proteinContent",
                "total" : 13.593443568000001,
                "hasRDI" : true,
                "daily" : 27.186887136000006,
                "unit" : "g"
            }, {
                "label" : "Cholesterol",
                "tag" : "CHOLE",
                "schemaOrgTag" : "cholesterolContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "mg"
            }, {
                "label" : "Sodium",
                "tag" : "NA",
                "schemaOrgTag" : "sodiumContent",
                "total" : 1031.676000581046,
                "hasRDI" : true,
                "daily" : 42.98650002421025,
                "unit" : "mg"
            }, {
                "label" : "Calcium",
                "tag" : "CA",
                "schemaOrgTag" : null,
                "total" : 287.6392110000296,
                "hasRDI" : true,
                "daily" : 28.76392110000296,
                "unit" : "mg"
            }, {
                "label" : "Magnesium",
                "tag" : "MG",
                "schemaOrgTag" : null,
                "total" : 213.9724818333346,
                "hasRDI" : true,
                "daily" : 50.94582900793681,
                "unit" : "mg"
            }, {
                "label" : "Potassium",
                "tag" : "K",
                "schemaOrgTag" : null,
                "total" : 4799.6122306666775,
                "hasRDI" : true,
                "daily" : 102.11940916312079,
                "unit" : "mg"
            }, {
                "label" : "Iron",
                "tag" : "FE",
                "schemaOrgTag" : null,
                "total" : 6.275295705000405,
                "hasRDI" : true,
                "daily" : 34.862753916668915,
                "unit" : "mg"
            }, {
                "label" : "Zinc",
                "tag" : "ZN",
                "schemaOrgTag" : null,
                "total" : 1.4726287713334567,
                "hasRDI" : true,
                "daily" : 13.387534284849608,
                "unit" : "mg"
            }, {
                "label" : "Phosphorus",
                "tag" : "P",
                "schemaOrgTag" : null,
                "total" : 434.07050640000006,
                "hasRDI" : true,
                "daily" : 62.01007234285716,
                "unit" : "mg"
            }, {
                "label" : "Vitamin A",
                "tag" : "VITA_RAE",
                "schemaOrgTag" : null,
                "total" : 136.503711,
                "hasRDI" : true,
                "daily" : 15.167079000000001,
                "unit" : "µg"
            }, {
                "label" : "Vitamin C",
                "tag" : "VITC",
                "schemaOrgTag" : null,
                "total" : 13.491700000000002,
                "hasRDI" : true,
                "daily" : 14.990777777777778,
                "unit" : "mg"
            }, {
                "label" : "Thiamin (B1)",
                "tag" : "THIA",
                "schemaOrgTag" : null,
                "total" : 0.8308583018000001,
                "hasRDI" : true,
                "daily" : 69.23819181666667,
                "unit" : "mg"
            }, {
                "label" : "Riboflavin (B2)",
                "tag" : "RIBF",
                "schemaOrgTag" : null,
                "total" : 0.9734045550000001,
                "hasRDI" : true,
                "daily" : 74.87727346153848,
                "unit" : "mg"
            }, {
                "label" : "Niacin (B3)",
                "tag" : "NIA",
                "schemaOrgTag" : null,
                "total" : 4.557050317200001,
                "hasRDI" : true,
                "daily" : 28.481564482500005,
                "unit" : "mg"
            }, {
                "label" : "Vitamin B6",
                "tag" : "VITB6A",
                "schemaOrgTag" : null,
                "total" : 1.2806825614,
                "hasRDI" : true,
                "daily" : 98.51404318461537,
                "unit" : "mg"
            }, {
                "label" : "Folate equivalent (total)",
                "tag" : "FOLDFE",
                "schemaOrgTag" : null,
                "total" : 0.2685,
                "hasRDI" : true,
                "daily" : 0.067125,
                "unit" : "µg"
            }, {
                "label" : "Folate (food)",
                "tag" : "FOLFD",
                "schemaOrgTag" : null,
                "total" : 81.91512660000001,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Folic acid",
                "tag" : "FOLAC",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin B12",
                "tag" : "VITB12",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin D",
                "tag" : "VITD",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin E",
                "tag" : "TOCPHA",
                "schemaOrgTag" : null,
                "total" : 5.147607596,
                "hasRDI" : true,
                "daily" : 34.317383973333335,
                "unit" : "mg"
            }, {
                "label" : "Vitamin K",
                "tag" : "VITK1",
                "schemaOrgTag" : null,
                "total" : 88.53903504,
                "hasRDI" : true,
                "daily" : 73.7825292,
                "unit" : "µg"
            }, {
                "label" : "Sugar alcohols",
                "tag" : "Sugar.alcohol",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            }, {
                "label" : "Water",
                "tag" : "WATER",
                "schemaOrgTag" : null,
                "total" : 3653.1934755786665,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            } ]
            },
            "bookmarked" : false,
            "bought" : false
        }, {
            "recipe" : {
            "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_6e53ccee356ea429bd1fec75f370cb66",
            "label" : "Apple Slaw",
            "image" : "https://www.edamam.com/web-img/a3a/a3ad2b6121c0d0e0d750b3b3879e6a52.jpeg",
            "source" : "Food52",
            "url" : "https://food52.com/recipes/8730-apple-slaw",
            "shareAs" : "http://www.edamam.com/recipe/apple-slaw-6e53ccee356ea429bd1fec75f370cb66/apple",
            "yield" : 3.0,
            "dietLabels" : [ "Low-Carb" ],
            "healthLabels" : [ "Vegan", "Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free" ],
            "cautions" : [ "Sulfites" ],
            "ingredientLines" : [ "1 granny smith apple", "1 tablespoon fresh lemon juice", "1.5 cups red cabbage", "1.25 cups green cabbage", "1 beet", ".5 cups rice vinegar", ".25 cups apple cider vinegar", "2 teaspoons dijon mustard", "1 cup olive oil" ],
            "ingredients" : [ {
                "text" : "1 granny smith apple",
                "weight" : 174.6
            }, {
                "text" : "1 tablespoon fresh lemon juice",
                "weight" : 14.0
            }, {
                "text" : "1.5 cups red cabbage",
                "weight" : 133.5
            }, {
                "text" : "1.25 cups green cabbage",
                "weight" : 111.25
            }, {
                "text" : "1 beet",
                "weight" : 82.0
            }, {
                "text" : ".5 cups rice vinegar",
                "weight" : 119.0
            }, {
                "text" : ".25 cups apple cider vinegar",
                "weight" : 59.75
            }, {
                "text" : "2 teaspoons dijon mustard",
                "weight" : 10.0
            }, {
                "text" : "1 cup olive oil",
                "weight" : 216.0
            } ],
            "calories" : 2158.213,
            "totalWeight" : 920.1,
            "totalTime" : 16.0,
            "totalNutrients" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 2158.213,
                "unit" : "kcal"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 217.16359,
                "unit" : "g"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 29.94028,
                "unit" : "g"
                },
                "FATRN" : {
                "label" : "Trans",
                "quantity" : 9.0E-4,
                "unit" : "g"
                },
                "FAMS" : {
                "label" : "Monounsaturated",
                "quantity" : 157.87597250000002,
                "unit" : "g"
                },
                "FAPU" : {
                "label" : "Polyunsaturated",
                "quantity" : 22.984932500000003,
                "unit" : "g"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 50.045985,
                "unit" : "g"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 13.211549999999999,
                "unit" : "g"
                },
                "SUGAR" : {
                "label" : "Sugars",
                "quantity" : 31.691789999999997,
                "unit" : "g"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 5.8444899999999995,
                "unit" : "g"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 242.0035,
                "unit" : "mg"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 147.0475,
                "unit" : "mg"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 72.11749999999999,
                "unit" : "mg"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 1067.3275,
                "unit" : "mg"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 4.045775,
                "unit" : "mg"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 0.9575900000000002,
                "unit" : "mg"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 144.187,
                "unit" : "mg"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 91.1925,
                "unit" : "µg"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 126.27850000000001,
                "unit" : "mg"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 0.2329565,
                "unit" : "mg"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 0.22216500000000003,
                "unit" : "mg"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 1.3814710000000001,
                "unit" : "mg"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 0.549947,
                "unit" : "mg"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 164.7475,
                "unit" : "µg"
                },
                "FOLFD" : {
                "label" : "Folate (food)",
                "quantity" : 169.9855,
                "unit" : "µg"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 31.713805,
                "unit" : "mg"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 271.4702,
                "unit" : "µg"
                },
                "WATER" : {
                "label" : "Water",
                "quantity" : 634.3847349999999,
                "unit" : "g"
                }
            },
            "totalDaily" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 107.91065,
                "unit" : "%"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 334.09783076923077,
                "unit" : "%"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 149.7014,
                "unit" : "%"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 16.681995,
                "unit" : "%"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 52.846199999999996,
                "unit" : "%"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 11.688979999999999,
                "unit" : "%"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 10.083479166666667,
                "unit" : "%"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 14.704750000000002,
                "unit" : "%"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 17.17083333333333,
                "unit" : "%"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 22.709095744680855,
                "unit" : "%"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 22.476527777777775,
                "unit" : "%"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 8.705363636363638,
                "unit" : "%"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 20.598142857142857,
                "unit" : "%"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 10.1325,
                "unit" : "%"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 140.30944444444444,
                "unit" : "%"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 19.41304166666667,
                "unit" : "%"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 17.089615384615385,
                "unit" : "%"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 8.634193750000001,
                "unit" : "%"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 42.30361538461538,
                "unit" : "%"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 41.186875,
                "unit" : "%"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 211.4253666666667,
                "unit" : "%"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 226.22516666666664,
                "unit" : "%"
                }
            },
            "digest" : [ {
                "label" : "Fat",
                "tag" : "FAT",
                "schemaOrgTag" : "fatContent",
                "total" : 217.16359,
                "hasRDI" : true,
                "daily" : 334.09783076923077,
                "unit" : "g",
                "sub" : [ {
                "label" : "Saturated",
                "tag" : "FASAT",
                "schemaOrgTag" : "saturatedFatContent",
                "total" : 29.94028,
                "hasRDI" : true,
                "daily" : 149.7014,
                "unit" : "g"
                }, {
                "label" : "Trans",
                "tag" : "FATRN",
                "schemaOrgTag" : "transFatContent",
                "total" : 9.0E-4,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Monounsaturated",
                "tag" : "FAMS",
                "schemaOrgTag" : null,
                "total" : 157.87597250000002,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Polyunsaturated",
                "tag" : "FAPU",
                "schemaOrgTag" : null,
                "total" : 22.984932500000003,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Carbs",
                "tag" : "CHOCDF",
                "schemaOrgTag" : "carbohydrateContent",
                "total" : 50.045985,
                "hasRDI" : true,
                "daily" : 16.681995,
                "unit" : "g",
                "sub" : [ {
                "label" : "Carbs (net)",
                "tag" : "CHOCDF.net",
                "schemaOrgTag" : null,
                "total" : 36.834435,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Fiber",
                "tag" : "FIBTG",
                "schemaOrgTag" : "fiberContent",
                "total" : 13.211549999999999,
                "hasRDI" : true,
                "daily" : 52.846199999999996,
                "unit" : "g"
                }, {
                "label" : "Sugars",
                "tag" : "SUGAR",
                "schemaOrgTag" : "sugarContent",
                "total" : 31.691789999999997,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Sugars, added",
                "tag" : "SUGAR.added",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Protein",
                "tag" : "PROCNT",
                "schemaOrgTag" : "proteinContent",
                "total" : 5.8444899999999995,
                "hasRDI" : true,
                "daily" : 11.688979999999999,
                "unit" : "g"
            }, {
                "label" : "Cholesterol",
                "tag" : "CHOLE",
                "schemaOrgTag" : "cholesterolContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "mg"
            }, {
                "label" : "Sodium",
                "tag" : "NA",
                "schemaOrgTag" : "sodiumContent",
                "total" : 242.0035,
                "hasRDI" : true,
                "daily" : 10.083479166666667,
                "unit" : "mg"
            }, {
                "label" : "Calcium",
                "tag" : "CA",
                "schemaOrgTag" : null,
                "total" : 147.0475,
                "hasRDI" : true,
                "daily" : 14.704750000000002,
                "unit" : "mg"
            }, {
                "label" : "Magnesium",
                "tag" : "MG",
                "schemaOrgTag" : null,
                "total" : 72.11749999999999,
                "hasRDI" : true,
                "daily" : 17.17083333333333,
                "unit" : "mg"
            }, {
                "label" : "Potassium",
                "tag" : "K",
                "schemaOrgTag" : null,
                "total" : 1067.3275,
                "hasRDI" : true,
                "daily" : 22.709095744680855,
                "unit" : "mg"
            }, {
                "label" : "Iron",
                "tag" : "FE",
                "schemaOrgTag" : null,
                "total" : 4.045775,
                "hasRDI" : true,
                "daily" : 22.476527777777775,
                "unit" : "mg"
            }, {
                "label" : "Zinc",
                "tag" : "ZN",
                "schemaOrgTag" : null,
                "total" : 0.9575900000000002,
                "hasRDI" : true,
                "daily" : 8.705363636363638,
                "unit" : "mg"
            }, {
                "label" : "Phosphorus",
                "tag" : "P",
                "schemaOrgTag" : null,
                "total" : 144.187,
                "hasRDI" : true,
                "daily" : 20.598142857142857,
                "unit" : "mg"
            }, {
                "label" : "Vitamin A",
                "tag" : "VITA_RAE",
                "schemaOrgTag" : null,
                "total" : 91.1925,
                "hasRDI" : true,
                "daily" : 10.1325,
                "unit" : "µg"
            }, {
                "label" : "Vitamin C",
                "tag" : "VITC",
                "schemaOrgTag" : null,
                "total" : 126.27850000000001,
                "hasRDI" : true,
                "daily" : 140.30944444444444,
                "unit" : "mg"
            }, {
                "label" : "Thiamin (B1)",
                "tag" : "THIA",
                "schemaOrgTag" : null,
                "total" : 0.2329565,
                "hasRDI" : true,
                "daily" : 19.41304166666667,
                "unit" : "mg"
            }, {
                "label" : "Riboflavin (B2)",
                "tag" : "RIBF",
                "schemaOrgTag" : null,
                "total" : 0.22216500000000003,
                "hasRDI" : true,
                "daily" : 17.089615384615385,
                "unit" : "mg"
            }, {
                "label" : "Niacin (B3)",
                "tag" : "NIA",
                "schemaOrgTag" : null,
                "total" : 1.3814710000000001,
                "hasRDI" : true,
                "daily" : 8.634193750000001,
                "unit" : "mg"
            }, {
                "label" : "Vitamin B6",
                "tag" : "VITB6A",
                "schemaOrgTag" : null,
                "total" : 0.549947,
                "hasRDI" : true,
                "daily" : 42.30361538461538,
                "unit" : "mg"
            }, {
                "label" : "Folate equivalent (total)",
                "tag" : "FOLDFE",
                "schemaOrgTag" : null,
                "total" : 164.7475,
                "hasRDI" : true,
                "daily" : 41.186875,
                "unit" : "µg"
            }, {
                "label" : "Folate (food)",
                "tag" : "FOLFD",
                "schemaOrgTag" : null,
                "total" : 169.9855,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Folic acid",
                "tag" : "FOLAC",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin B12",
                "tag" : "VITB12",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin D",
                "tag" : "VITD",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin E",
                "tag" : "TOCPHA",
                "schemaOrgTag" : null,
                "total" : 31.713805,
                "hasRDI" : true,
                "daily" : 211.4253666666667,
                "unit" : "mg"
            }, {
                "label" : "Vitamin K",
                "tag" : "VITK1",
                "schemaOrgTag" : null,
                "total" : 271.4702,
                "hasRDI" : true,
                "daily" : 226.22516666666664,
                "unit" : "µg"
            }, {
                "label" : "Sugar alcohols",
                "tag" : "Sugar.alcohol",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            }, {
                "label" : "Water",
                "tag" : "WATER",
                "schemaOrgTag" : null,
                "total" : 634.3847349999999,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            } ]
            },
            "bookmarked" : false,
            "bought" : false
        }, {
            "recipe" : {
            "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_773dbe1a19ec3fe1b11e5cd44a8f1275",
            "label" : "Broccoli Apple Soup",
            "image" : "https://www.edamam.com/web-img/7df/7dfe3bc4c4f9f7e7880aadcfd9e812b5.jpg",
            "source" : "Simply Recipes",
            "url" : "http://www.simplyrecipes.com/recipes/broccoli_apple_soup/",
            "shareAs" : "http://www.edamam.com/recipe/broccoli-apple-soup-773dbe1a19ec3fe1b11e5cd44a8f1275/apple",
            "yield" : 4.0,
            "dietLabels" : [ "Balanced" ],
            "healthLabels" : [ "Peanut-Free", "Tree-Nut-Free" ],
            "cautions" : [ "Sulfites" ],
            "ingredientLines" : [ "1 large bunch of broccoli (about 3 heads with stems)", "3 Tbsp butter", "1 cup of thinly sliced or finely chopped yellow or white onion", "1 good cooking apple (a non-tart apple such as Jonagold, golden delicious, McIntosh), peeled, cored, chopped", "3 cups of chicken stock", "1 cup of unfiltered apple juice or apple cider (not hard cider)", "4 sprigs of lemon thyme or thyme", "2 strips of lemon peel", "1 Tbsp chopped fresh chives for garnish" ],
            "ingredients" : [ {
                "text" : "1 large bunch of broccoli (about 3 heads with stems)",
                "weight" : 760.0
            }, {
                "text" : "3 Tbsp butter",
                "weight" : 42.599999999999994
            }, {
                "text" : "1 cup of thinly sliced or finely chopped yellow or white onion",
                "weight" : 160.0
            }, {
                "text" : "1 good cooking apple (a non-tart apple such as Jonagold, golden delicious, McIntosh), peeled, cored, chopped",
                "weight" : 182.0
            }, {
                "text" : "3 cups of chicken stock",
                "weight" : 720.0
            }, {
                "text" : "1 cup of unfiltered apple juice or apple cider (not hard cider)",
                "weight" : 248.0
            }, {
                "text" : "4 sprigs of lemon thyme or thyme",
                "weight" : 12.0
            }, {
                "text" : "2 strips of lemon peel",
                "weight" : 4.0
            } ],
            "calories" : 1109.762,
            "totalWeight" : 2128.6,
            "totalTime" : 0.0,
            "totalNutrients" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 1109.762,
                "unit" : "kcal"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 47.01025999999999,
                "unit" : "g"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 24.720687999999996,
                "unit" : "g"
                },
                "FATRN" : {
                "label" : "Trans",
                "quantity" : 1.3964279999999998,
                "unit" : "g"
                },
                "FAMS" : {
                "label" : "Monounsaturated",
                "quantity" : 13.287525999999998,
                "unit" : "g"
                },
                "FAPU" : {
                "label" : "Polyunsaturated",
                "quantity" : 3.4028579999999993,
                "unit" : "g"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 147.58176,
                "unit" : "g"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 29.447999999999997,
                "unit" : "g"
                },
                "SUGAR" : {
                "label" : "Sugars",
                "quantity" : 74.03976,
                "unit" : "g"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 43.1465,
                "unit" : "g"
                },
                "CHOLE" : {
                "label" : "Cholesterol",
                "quantity" : 113.19,
                "unit" : "mg"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 1304.546,
                "unit" : "mg"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 510.5440000000001,
                "unit" : "mg"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 246.55200000000002,
                "unit" : "mg"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 3926.1240000000007,
                "unit" : "mg"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 10.046520000000001,
                "unit" : "mg"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 4.783939999999999,
                "unit" : "mg"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 803.2040000000001,
                "unit" : "mg"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 568.324,
                "unit" : "µg"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 726.176,
                "unit" : "mg"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 0.9585099999999999,
                "unit" : "mg"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 1.7080840000000004,
                "unit" : "mg"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 17.046232,
                "unit" : "mg"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 2.130378,
                "unit" : "mg"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 557.858,
                "unit" : "µg"
                },
                "FOLFD" : {
                "label" : "Folate (food)",
                "quantity" : 557.858,
                "unit" : "µg"
                },
                "VITB12" : {
                "label" : "Vitamin B12",
                "quantity" : 0.07242,
                "unit" : "µg"
                },
                "VITD" : {
                "label" : "Vitamin D",
                "quantity" : 25.559999999999995,
                "unit" : "IU"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 7.526720000000001,
                "unit" : "mg"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 781.226,
                "unit" : "µg"
                },
                "WATER" : {
                "label" : "Water",
                "quantity" : 1878.01004,
                "unit" : "g"
                }
            },
            "totalDaily" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 55.488099999999996,
                "unit" : "%"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 72.32347692307691,
                "unit" : "%"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 123.60343999999998,
                "unit" : "%"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 49.19392,
                "unit" : "%"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 117.79199999999999,
                "unit" : "%"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 86.293,
                "unit" : "%"
                },
                "CHOLE" : {
                "label" : "Cholesterol",
                "quantity" : 37.73,
                "unit" : "%"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 54.35608333333334,
                "unit" : "%"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 51.05440000000001,
                "unit" : "%"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 58.70285714285714,
                "unit" : "%"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 83.53455319148938,
                "unit" : "%"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 55.814,
                "unit" : "%"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 43.49036363636363,
                "unit" : "%"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 114.74342857142858,
                "unit" : "%"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 63.1471111111111,
                "unit" : "%"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 806.8622222222223,
                "unit" : "%"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 79.87583333333332,
                "unit" : "%"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 131.39107692307695,
                "unit" : "%"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 106.53895,
                "unit" : "%"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 163.87523076923074,
                "unit" : "%"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 139.4645,
                "unit" : "%"
                },
                "VITB12" : {
                "label" : "Vitamin B12",
                "quantity" : 3.0175,
                "unit" : "%"
                },
                "VITD" : {
                "label" : "Vitamin D",
                "quantity" : 170.39999999999998,
                "unit" : "%"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 50.17813333333334,
                "unit" : "%"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 651.0216666666668,
                "unit" : "%"
                }
            },
            "digest" : [ {
                "label" : "Fat",
                "tag" : "FAT",
                "schemaOrgTag" : "fatContent",
                "total" : 47.01025999999999,
                "hasRDI" : true,
                "daily" : 72.32347692307691,
                "unit" : "g",
                "sub" : [ {
                "label" : "Saturated",
                "tag" : "FASAT",
                "schemaOrgTag" : "saturatedFatContent",
                "total" : 24.720687999999996,
                "hasRDI" : true,
                "daily" : 123.60343999999998,
                "unit" : "g"
                }, {
                "label" : "Trans",
                "tag" : "FATRN",
                "schemaOrgTag" : "transFatContent",
                "total" : 1.3964279999999998,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Monounsaturated",
                "tag" : "FAMS",
                "schemaOrgTag" : null,
                "total" : 13.287525999999998,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Polyunsaturated",
                "tag" : "FAPU",
                "schemaOrgTag" : null,
                "total" : 3.4028579999999993,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Carbs",
                "tag" : "CHOCDF",
                "schemaOrgTag" : "carbohydrateContent",
                "total" : 147.58176,
                "hasRDI" : true,
                "daily" : 49.19392,
                "unit" : "g",
                "sub" : [ {
                "label" : "Carbs (net)",
                "tag" : "CHOCDF.net",
                "schemaOrgTag" : null,
                "total" : 118.13376000000001,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Fiber",
                "tag" : "FIBTG",
                "schemaOrgTag" : "fiberContent",
                "total" : 29.447999999999997,
                "hasRDI" : true,
                "daily" : 117.79199999999999,
                "unit" : "g"
                }, {
                "label" : "Sugars",
                "tag" : "SUGAR",
                "schemaOrgTag" : "sugarContent",
                "total" : 74.03976,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Sugars, added",
                "tag" : "SUGAR.added",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Protein",
                "tag" : "PROCNT",
                "schemaOrgTag" : "proteinContent",
                "total" : 43.1465,
                "hasRDI" : true,
                "daily" : 86.293,
                "unit" : "g"
            }, {
                "label" : "Cholesterol",
                "tag" : "CHOLE",
                "schemaOrgTag" : "cholesterolContent",
                "total" : 113.19,
                "hasRDI" : true,
                "daily" : 37.73,
                "unit" : "mg"
            }, {
                "label" : "Sodium",
                "tag" : "NA",
                "schemaOrgTag" : "sodiumContent",
                "total" : 1304.546,
                "hasRDI" : true,
                "daily" : 54.35608333333334,
                "unit" : "mg"
            }, {
                "label" : "Calcium",
                "tag" : "CA",
                "schemaOrgTag" : null,
                "total" : 510.5440000000001,
                "hasRDI" : true,
                "daily" : 51.05440000000001,
                "unit" : "mg"
            }, {
                "label" : "Magnesium",
                "tag" : "MG",
                "schemaOrgTag" : null,
                "total" : 246.55200000000002,
                "hasRDI" : true,
                "daily" : 58.70285714285714,
                "unit" : "mg"
            }, {
                "label" : "Potassium",
                "tag" : "K",
                "schemaOrgTag" : null,
                "total" : 3926.1240000000007,
                "hasRDI" : true,
                "daily" : 83.53455319148938,
                "unit" : "mg"
            }, {
                "label" : "Iron",
                "tag" : "FE",
                "schemaOrgTag" : null,
                "total" : 10.046520000000001,
                "hasRDI" : true,
                "daily" : 55.814,
                "unit" : "mg"
            }, {
                "label" : "Zinc",
                "tag" : "ZN",
                "schemaOrgTag" : null,
                "total" : 4.783939999999999,
                "hasRDI" : true,
                "daily" : 43.49036363636363,
                "unit" : "mg"
            }, {
                "label" : "Phosphorus",
                "tag" : "P",
                "schemaOrgTag" : null,
                "total" : 803.2040000000001,
                "hasRDI" : true,
                "daily" : 114.74342857142858,
                "unit" : "mg"
            }, {
                "label" : "Vitamin A",
                "tag" : "VITA_RAE",
                "schemaOrgTag" : null,
                "total" : 568.324,
                "hasRDI" : true,
                "daily" : 63.1471111111111,
                "unit" : "µg"
            }, {
                "label" : "Vitamin C",
                "tag" : "VITC",
                "schemaOrgTag" : null,
                "total" : 726.176,
                "hasRDI" : true,
                "daily" : 806.8622222222223,
                "unit" : "mg"
            }, {
                "label" : "Thiamin (B1)",
                "tag" : "THIA",
                "schemaOrgTag" : null,
                "total" : 0.9585099999999999,
                "hasRDI" : true,
                "daily" : 79.87583333333332,
                "unit" : "mg"
            }, {
                "label" : "Riboflavin (B2)",
                "tag" : "RIBF",
                "schemaOrgTag" : null,
                "total" : 1.7080840000000004,
                "hasRDI" : true,
                "daily" : 131.39107692307695,
                "unit" : "mg"
            }, {
                "label" : "Niacin (B3)",
                "tag" : "NIA",
                "schemaOrgTag" : null,
                "total" : 17.046232,
                "hasRDI" : true,
                "daily" : 106.53895,
                "unit" : "mg"
            }, {
                "label" : "Vitamin B6",
                "tag" : "VITB6A",
                "schemaOrgTag" : null,
                "total" : 2.130378,
                "hasRDI" : true,
                "daily" : 163.87523076923074,
                "unit" : "mg"
            }, {
                "label" : "Folate equivalent (total)",
                "tag" : "FOLDFE",
                "schemaOrgTag" : null,
                "total" : 557.858,
                "hasRDI" : true,
                "daily" : 139.4645,
                "unit" : "µg"
            }, {
                "label" : "Folate (food)",
                "tag" : "FOLFD",
                "schemaOrgTag" : null,
                "total" : 557.858,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Folic acid",
                "tag" : "FOLAC",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin B12",
                "tag" : "VITB12",
                "schemaOrgTag" : null,
                "total" : 0.07242,
                "hasRDI" : true,
                "daily" : 3.0175,
                "unit" : "µg"
            }, {
                "label" : "Vitamin D",
                "tag" : "VITD",
                "schemaOrgTag" : null,
                "total" : 25.559999999999995,
                "hasRDI" : true,
                "daily" : 170.39999999999998,
                "unit" : "µg"
            }, {
                "label" : "Vitamin E",
                "tag" : "TOCPHA",
                "schemaOrgTag" : null,
                "total" : 7.526720000000001,
                "hasRDI" : true,
                "daily" : 50.17813333333334,
                "unit" : "mg"
            }, {
                "label" : "Vitamin K",
                "tag" : "VITK1",
                "schemaOrgTag" : null,
                "total" : 781.226,
                "hasRDI" : true,
                "daily" : 651.0216666666668,
                "unit" : "µg"
            }, {
                "label" : "Sugar alcohols",
                "tag" : "Sugar.alcohol",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            }, {
                "label" : "Water",
                "tag" : "WATER",
                "schemaOrgTag" : null,
                "total" : 1878.01004,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            } ]
            },
            "bookmarked" : false,
            "bought" : false
        }, {
            "recipe" : {
            "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_1dca31f7ccd30af8622b2e1a0fa89484",
            "label" : "Apple Bomb",
            "image" : "https://www.edamam.com/web-img/4b9/4b9169a70befe46eec9ebf30e21e00e9.jpg",
            "source" : "Food & Wine",
            "url" : "http://www.foodandwine.com/recipes/apple-bomb",
            "shareAs" : "http://www.edamam.com/recipe/apple-bomb-1dca31f7ccd30af8622b2e1a0fa89484/apple",
            "yield" : 1.0,
            "dietLabels" : [ "Low-Fat" ],
            "healthLabels" : [ "Vegan", "Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Cocktail" ],
            "cautions" : [ "Sulfites" ],
            "ingredientLines" : [ "2 ounces applejack", "2 ounces chilled apple juice", "1 1/2 ounces chilled ginger beer", "3 pieces of candied ginger or 1 apple slice, skewered on a pick" ],
            "ingredients" : [ {
                "text" : "2 ounces applejack",
                "weight" : 56.69904625
            }, {
                "text" : "2 ounces chilled apple juice",
                "weight" : 56.69904625
            }, {
                "text" : "1 1/2 ounces chilled ginger beer",
                "weight" : 42.5242846875
            }, {
                "text" : "3 pieces of candied ginger or 1 apple slice, skewered on a pick",
                "weight" : 45.0
            } ],
            "calories" : 207.51461490625002,
            "totalWeight" : 200.9223771875,
            "totalTime" : 6.0,
            "totalNutrients" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 207.51461490625002,
                "unit" : "kcal"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 0.411208760125,
                "unit" : "g"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 0.10382379017500001,
                "unit" : "g"
                },
                "FAMS" : {
                "label" : "Monounsaturated",
                "quantity" : 0.072701942775,
                "unit" : "g"
                },
                "FAPU" : {
                "label" : "Polyunsaturated",
                "quantity" : 0.0914126280375,
                "unit" : "g"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 18.132871993343752,
                "unit" : "g"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 1.0133980925000001,
                "unit" : "g"
                },
                "SUGAR" : {
                "label" : "Sugars",
                "quantity" : 9.9190610170625,
                "unit" : "g"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 0.8756990462500001,
                "unit" : "g"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 11.661652240625001,
                "unit" : "mg"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 13.011652240625,
                "unit" : "mg"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 22.610195159375003,
                "unit" : "mg"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 245.575260484375,
                "unit" : "mg"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 0.43726218643750003,
                "unit" : "mg"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 0.20828157009375003,
                "unit" : "mg"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 21.5368950875,
                "unit" : "mg"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 2.7602914162500003,
                "unit" : "mg"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 0.026558742487500002,
                "unit" : "mg"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 0.0272067997125,
                "unit" : "mg"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 0.386261179775,
                "unit" : "mg"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 0.08277281878750001,
                "unit" : "mg"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 4.95,
                "unit" : "µg"
                },
                "FOLFD" : {
                "label" : "Folate (food)",
                "quantity" : 4.95,
                "unit" : "µg"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 0.122669904625,
                "unit" : "mg"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 0.045000000000000005,
                "unit" : "µg"
                },
                "WATER" : {
                "label" : "Water",
                "quantity" : 162.08820813390628,
                "unit" : "g"
                }
            },
            "totalDaily" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 10.3757307453125,
                "unit" : "%"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 0.6326288617307692,
                "unit" : "%"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 0.519118950875,
                "unit" : "%"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 6.044290664447917,
                "unit" : "%"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 4.0535923700000005,
                "unit" : "%"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 1.7513980925000001,
                "unit" : "%"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 0.48590217669270835,
                "unit" : "%"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 1.3011652240625,
                "unit" : "%"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 5.383379799851191,
                "unit" : "%"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 5.225005542220744,
                "unit" : "%"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 2.4292343690972222,
                "unit" : "%"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 1.8934688190340914,
                "unit" : "%"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 3.0766992982142853,
                "unit" : "%"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 3.0669904625,
                "unit" : "%"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 2.2132285406250003,
                "unit" : "%"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 2.0928307471153844,
                "unit" : "%"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 2.41413237359375,
                "unit" : "%"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 6.3671399067307695,
                "unit" : "%"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 1.2375,
                "unit" : "%"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 0.8177993641666668,
                "unit" : "%"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 0.037500000000000006,
                "unit" : "%"
                }
            },
            "digest" : [ {
                "label" : "Fat",
                "tag" : "FAT",
                "schemaOrgTag" : "fatContent",
                "total" : 0.411208760125,
                "hasRDI" : true,
                "daily" : 0.6326288617307692,
                "unit" : "g",
                "sub" : [ {
                "label" : "Saturated",
                "tag" : "FASAT",
                "schemaOrgTag" : "saturatedFatContent",
                "total" : 0.10382379017500001,
                "hasRDI" : true,
                "daily" : 0.519118950875,
                "unit" : "g"
                }, {
                "label" : "Trans",
                "tag" : "FATRN",
                "schemaOrgTag" : "transFatContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Monounsaturated",
                "tag" : "FAMS",
                "schemaOrgTag" : null,
                "total" : 0.072701942775,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Polyunsaturated",
                "tag" : "FAPU",
                "schemaOrgTag" : null,
                "total" : 0.0914126280375,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Carbs",
                "tag" : "CHOCDF",
                "schemaOrgTag" : "carbohydrateContent",
                "total" : 18.132871993343752,
                "hasRDI" : true,
                "daily" : 6.044290664447917,
                "unit" : "g",
                "sub" : [ {
                "label" : "Carbs (net)",
                "tag" : "CHOCDF.net",
                "schemaOrgTag" : null,
                "total" : 17.11947390084375,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Fiber",
                "tag" : "FIBTG",
                "schemaOrgTag" : "fiberContent",
                "total" : 1.0133980925000001,
                "hasRDI" : true,
                "daily" : 4.0535923700000005,
                "unit" : "g"
                }, {
                "label" : "Sugars",
                "tag" : "SUGAR",
                "schemaOrgTag" : "sugarContent",
                "total" : 9.9190610170625,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Sugars, added",
                "tag" : "SUGAR.added",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Protein",
                "tag" : "PROCNT",
                "schemaOrgTag" : "proteinContent",
                "total" : 0.8756990462500001,
                "hasRDI" : true,
                "daily" : 1.7513980925000001,
                "unit" : "g"
            }, {
                "label" : "Cholesterol",
                "tag" : "CHOLE",
                "schemaOrgTag" : "cholesterolContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "mg"
            }, {
                "label" : "Sodium",
                "tag" : "NA",
                "schemaOrgTag" : "sodiumContent",
                "total" : 11.661652240625001,
                "hasRDI" : true,
                "daily" : 0.48590217669270835,
                "unit" : "mg"
            }, {
                "label" : "Calcium",
                "tag" : "CA",
                "schemaOrgTag" : null,
                "total" : 13.011652240625,
                "hasRDI" : true,
                "daily" : 1.3011652240625,
                "unit" : "mg"
            }, {
                "label" : "Magnesium",
                "tag" : "MG",
                "schemaOrgTag" : null,
                "total" : 22.610195159375003,
                "hasRDI" : true,
                "daily" : 5.383379799851191,
                "unit" : "mg"
            }, {
                "label" : "Potassium",
                "tag" : "K",
                "schemaOrgTag" : null,
                "total" : 245.575260484375,
                "hasRDI" : true,
                "daily" : 5.225005542220744,
                "unit" : "mg"
            }, {
                "label" : "Iron",
                "tag" : "FE",
                "schemaOrgTag" : null,
                "total" : 0.43726218643750003,
                "hasRDI" : true,
                "daily" : 2.4292343690972222,
                "unit" : "mg"
            }, {
                "label" : "Zinc",
                "tag" : "ZN",
                "schemaOrgTag" : null,
                "total" : 0.20828157009375003,
                "hasRDI" : true,
                "daily" : 1.8934688190340914,
                "unit" : "mg"
            }, {
                "label" : "Phosphorus",
                "tag" : "P",
                "schemaOrgTag" : null,
                "total" : 21.5368950875,
                "hasRDI" : true,
                "daily" : 3.0766992982142853,
                "unit" : "mg"
            }, {
                "label" : "Vitamin A",
                "tag" : "VITA_RAE",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin C",
                "tag" : "VITC",
                "schemaOrgTag" : null,
                "total" : 2.7602914162500003,
                "hasRDI" : true,
                "daily" : 3.0669904625,
                "unit" : "mg"
            }, {
                "label" : "Thiamin (B1)",
                "tag" : "THIA",
                "schemaOrgTag" : null,
                "total" : 0.026558742487500002,
                "hasRDI" : true,
                "daily" : 2.2132285406250003,
                "unit" : "mg"
            }, {
                "label" : "Riboflavin (B2)",
                "tag" : "RIBF",
                "schemaOrgTag" : null,
                "total" : 0.0272067997125,
                "hasRDI" : true,
                "daily" : 2.0928307471153844,
                "unit" : "mg"
            }, {
                "label" : "Niacin (B3)",
                "tag" : "NIA",
                "schemaOrgTag" : null,
                "total" : 0.386261179775,
                "hasRDI" : true,
                "daily" : 2.41413237359375,
                "unit" : "mg"
            }, {
                "label" : "Vitamin B6",
                "tag" : "VITB6A",
                "schemaOrgTag" : null,
                "total" : 0.08277281878750001,
                "hasRDI" : true,
                "daily" : 6.3671399067307695,
                "unit" : "mg"
            }, {
                "label" : "Folate equivalent (total)",
                "tag" : "FOLDFE",
                "schemaOrgTag" : null,
                "total" : 4.95,
                "hasRDI" : true,
                "daily" : 1.2375,
                "unit" : "µg"
            }, {
                "label" : "Folate (food)",
                "tag" : "FOLFD",
                "schemaOrgTag" : null,
                "total" : 4.95,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Folic acid",
                "tag" : "FOLAC",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin B12",
                "tag" : "VITB12",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin D",
                "tag" : "VITD",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin E",
                "tag" : "TOCPHA",
                "schemaOrgTag" : null,
                "total" : 0.122669904625,
                "hasRDI" : true,
                "daily" : 0.8177993641666668,
                "unit" : "mg"
            }, {
                "label" : "Vitamin K",
                "tag" : "VITK1",
                "schemaOrgTag" : null,
                "total" : 0.045000000000000005,
                "hasRDI" : true,
                "daily" : 0.037500000000000006,
                "unit" : "µg"
            }, {
                "label" : "Sugar alcohols",
                "tag" : "Sugar.alcohol",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            }, {
                "label" : "Water",
                "tag" : "WATER",
                "schemaOrgTag" : null,
                "total" : 162.08820813390628,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            } ]
            },
            "bookmarked" : false,
            "bought" : false
        }, {
            "recipe" : {
            "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_666bf71b5d077a2c51ee52841f2f01ca",
            "label" : "Autumn Apple",
            "image" : "https://www.edamam.com/web-img/ce2/ce2760f3bd51eb0cc3b2ea064946e315.jpg",
            "source" : "San Francisco Gate",
            "url" : "http://www.sfgate.com/food/recipes/detail.html?rid=16155&sorig=qs",
            "shareAs" : "http://www.edamam.com/recipe/autumn-apple-666bf71b5d077a2c51ee52841f2f01ca/apple",
            "yield" : 2.0,
            "dietLabels" : [ "Low-Fat" ],
            "healthLabels" : [ "Vegan", "Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Cocktail" ],
            "cautions" : [ "Sulfites" ],
            "ingredientLines" : [ "1 ounce Germain-Robin apple brandy", "1 ounce Gravenstein apple juice", "1 ounce Sonoma Sparkler Apple Cider, or Martinelli's Sparkling Cider", "1/2 ounce fresh lemon juice", "1/2 ounce Ginger Simple Syrup (see recipe)", "1 lemon twist, for garnish" ],
            "ingredients" : [ {
                "text" : "1 ounce Germain-Robin apple brandy",
                "weight" : 28.349523125
            }, {
                "text" : "1 ounce Gravenstein apple juice",
                "weight" : 28.349523125
            }, {
                "text" : "1 ounce Sonoma Sparkler Apple Cider, or Martinelli's Sparkling Cider",
                "weight" : 28.349523125
            }, {
                "text" : "1/2 ounce fresh lemon juice",
                "weight" : 14.1747615625
            }, {
                "text" : "1/2 ounce Ginger Simple Syrup (see recipe)",
                "weight" : 14.1747615625
            } ],
            "calories" : 132.81751584062502,
            "totalWeight" : 113.39809249999999,
            "totalTime" : 0.0,
            "totalNutrients" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 132.81751584062502,
                "unit" : "kcal"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 0.10772818787500002,
                "unit" : "g"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 0.018143694800000002,
                "unit" : "g"
                },
                "FAMS" : {
                "label" : "Monounsaturated",
                "quantity" : 0.0042524284687500006,
                "unit" : "g"
                },
                "FAPU" : {
                "label" : "Polyunsaturated",
                "quantity" : 0.025089327965625,
                "unit" : "g"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 17.752471380875,
                "unit" : "g"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 0.15592237718750002,
                "unit" : "g"
                },
                "SUGAR" : {
                "label" : "Sugars",
                "quantity" : 16.187577704375002,
                "unit" : "g"
                },
                "SUGAR.added" : {
                "label" : "Sugars, added",
                "quantity" : 10.375925463750002,
                "unit" : "g"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 0.10631071171875,
                "unit" : "g"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 10.914566403125,
                "unit" : "mg"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 7.229128396875001,
                "unit" : "mg"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 5.102914162500001,
                "unit" : "mg"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 81.36313136875,
                "unit" : "mg"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 0.6010098902500001,
                "unit" : "mg"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 0.05669904625000001,
                "unit" : "mg"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 7.370876012500001,
                "unit" : "mg"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 5.995924140937501,
                "unit" : "mg"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 0.035436903906250004,
                "unit" : "mg"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 0.021403889959375002,
                "unit" : "mg"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 0.072149536353125,
                "unit" : "mg"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 0.017009713875000002,
                "unit" : "mg"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 2.8349523125000005,
                "unit" : "µg"
                },
                "FOLFD" : {
                "label" : "Folate (food)",
                "quantity" : 2.8349523125000005,
                "unit" : "µg"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 0.02693204696875,
                "unit" : "mg"
                },
                "WATER" : {
                "label" : "Water",
                "quantity" : 85.68218121684376,
                "unit" : "g"
                }
            },
            "totalDaily" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 6.640875792031251,
                "unit" : "%"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 0.1657356736538462,
                "unit" : "%"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 0.09071847400000002,
                "unit" : "%"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 5.917490460291667,
                "unit" : "%"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 0.6236895087500001,
                "unit" : "%"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 0.2126214234375,
                "unit" : "%"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 0.45477360013020834,
                "unit" : "%"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 0.7229128396875001,
                "unit" : "%"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 1.2149795625000002,
                "unit" : "%"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 1.7311304546542554,
                "unit" : "%"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 3.3389438347222224,
                "unit" : "%"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 0.515445875,
                "unit" : "%"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 1.0529822875000001,
                "unit" : "%"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 6.662137934375001,
                "unit" : "%"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 2.953075325520834,
                "unit" : "%"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 1.646453073798077,
                "unit" : "%"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 0.45093460220703124,
                "unit" : "%"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 1.308439528846154,
                "unit" : "%"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 0.7087380781250002,
                "unit" : "%"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 0.17954697979166667,
                "unit" : "%"
                }
            },
            "digest" : [ {
                "label" : "Fat",
                "tag" : "FAT",
                "schemaOrgTag" : "fatContent",
                "total" : 0.10772818787500002,
                "hasRDI" : true,
                "daily" : 0.1657356736538462,
                "unit" : "g",
                "sub" : [ {
                "label" : "Saturated",
                "tag" : "FASAT",
                "schemaOrgTag" : "saturatedFatContent",
                "total" : 0.018143694800000002,
                "hasRDI" : true,
                "daily" : 0.09071847400000002,
                "unit" : "g"
                }, {
                "label" : "Trans",
                "tag" : "FATRN",
                "schemaOrgTag" : "transFatContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Monounsaturated",
                "tag" : "FAMS",
                "schemaOrgTag" : null,
                "total" : 0.0042524284687500006,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Polyunsaturated",
                "tag" : "FAPU",
                "schemaOrgTag" : null,
                "total" : 0.025089327965625,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Carbs",
                "tag" : "CHOCDF",
                "schemaOrgTag" : "carbohydrateContent",
                "total" : 17.752471380875,
                "hasRDI" : true,
                "daily" : 5.917490460291667,
                "unit" : "g",
                "sub" : [ {
                "label" : "Carbs (net)",
                "tag" : "CHOCDF.net",
                "schemaOrgTag" : null,
                "total" : 17.5965490036875,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Fiber",
                "tag" : "FIBTG",
                "schemaOrgTag" : "fiberContent",
                "total" : 0.15592237718750002,
                "hasRDI" : true,
                "daily" : 0.6236895087500001,
                "unit" : "g"
                }, {
                "label" : "Sugars",
                "tag" : "SUGAR",
                "schemaOrgTag" : "sugarContent",
                "total" : 16.187577704375002,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Sugars, added",
                "tag" : "SUGAR.added",
                "schemaOrgTag" : null,
                "total" : 10.375925463750002,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Protein",
                "tag" : "PROCNT",
                "schemaOrgTag" : "proteinContent",
                "total" : 0.10631071171875,
                "hasRDI" : true,
                "daily" : 0.2126214234375,
                "unit" : "g"
            }, {
                "label" : "Cholesterol",
                "tag" : "CHOLE",
                "schemaOrgTag" : "cholesterolContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "mg"
            }, {
                "label" : "Sodium",
                "tag" : "NA",
                "schemaOrgTag" : "sodiumContent",
                "total" : 10.914566403125,
                "hasRDI" : true,
                "daily" : 0.45477360013020834,
                "unit" : "mg"
            }, {
                "label" : "Calcium",
                "tag" : "CA",
                "schemaOrgTag" : null,
                "total" : 7.229128396875001,
                "hasRDI" : true,
                "daily" : 0.7229128396875001,
                "unit" : "mg"
            }, {
                "label" : "Magnesium",
                "tag" : "MG",
                "schemaOrgTag" : null,
                "total" : 5.102914162500001,
                "hasRDI" : true,
                "daily" : 1.2149795625000002,
                "unit" : "mg"
            }, {
                "label" : "Potassium",
                "tag" : "K",
                "schemaOrgTag" : null,
                "total" : 81.36313136875,
                "hasRDI" : true,
                "daily" : 1.7311304546542554,
                "unit" : "mg"
            }, {
                "label" : "Iron",
                "tag" : "FE",
                "schemaOrgTag" : null,
                "total" : 0.6010098902500001,
                "hasRDI" : true,
                "daily" : 3.3389438347222224,
                "unit" : "mg"
            }, {
                "label" : "Zinc",
                "tag" : "ZN",
                "schemaOrgTag" : null,
                "total" : 0.05669904625000001,
                "hasRDI" : true,
                "daily" : 0.515445875,
                "unit" : "mg"
            }, {
                "label" : "Phosphorus",
                "tag" : "P",
                "schemaOrgTag" : null,
                "total" : 7.370876012500001,
                "hasRDI" : true,
                "daily" : 1.0529822875000001,
                "unit" : "mg"
            }, {
                "label" : "Vitamin A",
                "tag" : "VITA_RAE",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin C",
                "tag" : "VITC",
                "schemaOrgTag" : null,
                "total" : 5.995924140937501,
                "hasRDI" : true,
                "daily" : 6.662137934375001,
                "unit" : "mg"
            }, {
                "label" : "Thiamin (B1)",
                "tag" : "THIA",
                "schemaOrgTag" : null,
                "total" : 0.035436903906250004,
                "hasRDI" : true,
                "daily" : 2.953075325520834,
                "unit" : "mg"
            }, {
                "label" : "Riboflavin (B2)",
                "tag" : "RIBF",
                "schemaOrgTag" : null,
                "total" : 0.021403889959375002,
                "hasRDI" : true,
                "daily" : 1.646453073798077,
                "unit" : "mg"
            }, {
                "label" : "Niacin (B3)",
                "tag" : "NIA",
                "schemaOrgTag" : null,
                "total" : 0.072149536353125,
                "hasRDI" : true,
                "daily" : 0.45093460220703124,
                "unit" : "mg"
            }, {
                "label" : "Vitamin B6",
                "tag" : "VITB6A",
                "schemaOrgTag" : null,
                "total" : 0.017009713875000002,
                "hasRDI" : true,
                "daily" : 1.308439528846154,
                "unit" : "mg"
            }, {
                "label" : "Folate equivalent (total)",
                "tag" : "FOLDFE",
                "schemaOrgTag" : null,
                "total" : 2.8349523125000005,
                "hasRDI" : true,
                "daily" : 0.7087380781250002,
                "unit" : "µg"
            }, {
                "label" : "Folate (food)",
                "tag" : "FOLFD",
                "schemaOrgTag" : null,
                "total" : 2.8349523125000005,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Folic acid",
                "tag" : "FOLAC",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin B12",
                "tag" : "VITB12",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin D",
                "tag" : "VITD",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin E",
                "tag" : "TOCPHA",
                "schemaOrgTag" : null,
                "total" : 0.02693204696875,
                "hasRDI" : true,
                "daily" : 0.17954697979166667,
                "unit" : "mg"
            }, {
                "label" : "Vitamin K",
                "tag" : "VITK1",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Sugar alcohols",
                "tag" : "Sugar.alcohol",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            }, {
                "label" : "Water",
                "tag" : "WATER",
                "schemaOrgTag" : null,
                "total" : 85.68218121684376,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            } ]
            },
            "bookmarked" : false,
            "bought" : false
        }, {
            "recipe" : {
            "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_f7fd8b4bb5cf4eb674a503d1059de7ae",
            "label" : "Apple Jellies",
            "image" : "https://www.edamam.com/web-img/9fc/9fc3fdec6f98c6e413c236704a1ac735.jpg",
            "source" : "Donna Hay",
            "url" : "http://www.donnahay.com.au/recipes/sweets/fruit/apple-jellies",
            "shareAs" : "http://www.edamam.com/recipe/apple-jellies-f7fd8b4bb5cf4eb674a503d1059de7ae/apple",
            "yield" : 2.0,
            "dietLabels" : [ "Low-Fat" ],
            "healthLabels" : [ "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free" ],
            "cautions" : [ "Sulfites" ],
            "ingredientLines" : [ "1 tablespoon powdered gelatine", "1 tablespoon apple juice", "1 cup (250ml) apple juice, extra", "2 tablespoons caster (superfine) sugar", "2 Granny Smith (green) apples, thinly sliced", "hard cheese such as aged cheddar and crispbread, to serve" ],
            "ingredients" : [ {
                "text" : "1 tablespoon powdered gelatine",
                "weight" : 6.9
            }, {
                "text" : "1 tablespoon apple juice",
                "weight" : 15.499999999737943
            }, {
                "text" : "1 cup (250ml) apple juice, extra",
                "weight" : 262.0586759392832
            }, {
                "text" : "2 tablespoons caster (superfine) sugar",
                "weight" : 25.2
            }, {
                "text" : "2 Granny Smith (green) apples, thinly sliced",
                "weight" : 364.0
            } ],
            "calories" : 437.5959909319497,
            "totalWeight" : 673.6586759390211,
            "totalTime" : 0.0,
            "totalNutrients" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 437.5959909319497,
                "unit" : "kcal"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 0.9865262787207275,
                "unit" : "g"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 0.16781290870658466,
                "unit" : "g"
                },
                "FAMS" : {
                "label" : "Monounsaturated",
                "quantity" : 0.04627352055634128,
                "unit" : "g"
                },
                "FAPU" : {
                "label" : "Polyunsaturated",
                "quantity" : 0.29457788361621823,
                "unit" : "g"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 106.8274903811094,
                "unit" : "g"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 9.291117351878043,
                "unit" : "g"
                },
                "SUGAR" : {
                "label" : "Sugars",
                "quantity" : 89.67034462533383,
                "unit" : "g"
                },
                "SUGAR.added" : {
                "label" : "Sugars, added",
                "quantity" : 25.1496,
                "unit" : "g"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 7.130358675939021,
                "unit" : "g"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 28.518347037560847,
                "unit" : "mg"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 48.091694075121694,
                "unit" : "mg"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 33.59593379695106,
                "unit" : "mg"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 671.4222626984114,
                "unit" : "mg"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 0.8590604111268254,
                "unit" : "mg"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 0.21329173518780423,
                "unit" : "mg"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 62.16010731573148,
                "unit" : "mg"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 10.92,
                "unit" : "µg"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 19.24202808345119,
                "unit" : "mg"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 0.12189232194719445,
                "unit" : "mg"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 0.1624829749096336,
                "unit" : "mg"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 0.5397228334354854,
                "unit" : "mg"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 0.19968356166902382,
                "unit" : "mg"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 12.99,
                "unit" : "µg"
                },
                "FOLFD" : {
                "label" : "Folate (food)",
                "quantity" : 12.99,
                "unit" : "µg"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 0.6829558675939021,
                "unit" : "mg"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 8.008000000000001,
                "unit" : "µg"
                },
                "WATER" : {
                "label" : "Water",
                "quantity" : 557.2582156485922,
                "unit" : "g"
                }
            },
            "totalDaily" : {
                "ENERC_KCAL" : {
                "label" : "Energy",
                "quantity" : 21.879799546597486,
                "unit" : "%"
                },
                "FAT" : {
                "label" : "Fat",
                "quantity" : 1.517732736493427,
                "unit" : "%"
                },
                "FASAT" : {
                "label" : "Saturated",
                "quantity" : 0.8390645435329234,
                "unit" : "%"
                },
                "CHOCDF" : {
                "label" : "Carbs",
                "quantity" : 35.6091634603698,
                "unit" : "%"
                },
                "FIBTG" : {
                "label" : "Fiber",
                "quantity" : 37.16446940751217,
                "unit" : "%"
                },
                "PROCNT" : {
                "label" : "Protein",
                "quantity" : 14.260717351878043,
                "unit" : "%"
                },
                "NA" : {
                "label" : "Sodium",
                "quantity" : 1.1882644598983687,
                "unit" : "%"
                },
                "CA" : {
                "label" : "Calcium",
                "quantity" : 4.80916940751217,
                "unit" : "%"
                },
                "MG" : {
                "label" : "Magnesium",
                "quantity" : 7.999031856416918,
                "unit" : "%"
                },
                "K" : {
                "label" : "Potassium",
                "quantity" : 14.285580057413007,
                "unit" : "%"
                },
                "FE" : {
                "label" : "Iron",
                "quantity" : 4.772557839593475,
                "unit" : "%"
                },
                "ZN" : {
                "label" : "Zinc",
                "quantity" : 1.9390157744345837,
                "unit" : "%"
                },
                "P" : {
                "label" : "Phosphorus",
                "quantity" : 8.880015330818784,
                "unit" : "%"
                },
                "VITA_RAE" : {
                "label" : "Vitamin A",
                "quantity" : 1.2133333333333334,
                "unit" : "%"
                },
                "VITC" : {
                "label" : "Vitamin C",
                "quantity" : 21.380031203834655,
                "unit" : "%"
                },
                "THIA" : {
                "label" : "Thiamin (B1)",
                "quantity" : 10.157693495599538,
                "unit" : "%"
                },
                "RIBF" : {
                "label" : "Riboflavin (B2)",
                "quantity" : 12.498690377664122,
                "unit" : "%"
                },
                "NIA" : {
                "label" : "Niacin (B3)",
                "quantity" : 3.373267708971784,
                "unit" : "%"
                },
                "VITB6A" : {
                "label" : "Vitamin B6",
                "quantity" : 15.360273974540293,
                "unit" : "%"
                },
                "FOLDFE" : {
                "label" : "Folate equivalent (total)",
                "quantity" : 3.2475,
                "unit" : "%"
                },
                "TOCPHA" : {
                "label" : "Vitamin E",
                "quantity" : 4.553039117292681,
                "unit" : "%"
                },
                "VITK1" : {
                "label" : "Vitamin K",
                "quantity" : 6.673333333333334,
                "unit" : "%"
                }
            },
            "digest" : [ {
                "label" : "Fat",
                "tag" : "FAT",
                "schemaOrgTag" : "fatContent",
                "total" : 0.9865262787207275,
                "hasRDI" : true,
                "daily" : 1.517732736493427,
                "unit" : "g",
                "sub" : [ {
                "label" : "Saturated",
                "tag" : "FASAT",
                "schemaOrgTag" : "saturatedFatContent",
                "total" : 0.16781290870658466,
                "hasRDI" : true,
                "daily" : 0.8390645435329234,
                "unit" : "g"
                }, {
                "label" : "Trans",
                "tag" : "FATRN",
                "schemaOrgTag" : "transFatContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Monounsaturated",
                "tag" : "FAMS",
                "schemaOrgTag" : null,
                "total" : 0.04627352055634128,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Polyunsaturated",
                "tag" : "FAPU",
                "schemaOrgTag" : null,
                "total" : 0.29457788361621823,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Carbs",
                "tag" : "CHOCDF",
                "schemaOrgTag" : "carbohydrateContent",
                "total" : 106.8274903811094,
                "hasRDI" : true,
                "daily" : 35.6091634603698,
                "unit" : "g",
                "sub" : [ {
                "label" : "Carbs (net)",
                "tag" : "CHOCDF.net",
                "schemaOrgTag" : null,
                "total" : 97.53637302923136,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Fiber",
                "tag" : "FIBTG",
                "schemaOrgTag" : "fiberContent",
                "total" : 9.291117351878043,
                "hasRDI" : true,
                "daily" : 37.16446940751217,
                "unit" : "g"
                }, {
                "label" : "Sugars",
                "tag" : "SUGAR",
                "schemaOrgTag" : "sugarContent",
                "total" : 89.67034462533383,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                }, {
                "label" : "Sugars, added",
                "tag" : "SUGAR.added",
                "schemaOrgTag" : null,
                "total" : 25.1496,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
                } ]
            }, {
                "label" : "Protein",
                "tag" : "PROCNT",
                "schemaOrgTag" : "proteinContent",
                "total" : 7.130358675939021,
                "hasRDI" : true,
                "daily" : 14.260717351878043,
                "unit" : "g"
            }, {
                "label" : "Cholesterol",
                "tag" : "CHOLE",
                "schemaOrgTag" : "cholesterolContent",
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "mg"
            }, {
                "label" : "Sodium",
                "tag" : "NA",
                "schemaOrgTag" : "sodiumContent",
                "total" : 28.518347037560847,
                "hasRDI" : true,
                "daily" : 1.1882644598983687,
                "unit" : "mg"
            }, {
                "label" : "Calcium",
                "tag" : "CA",
                "schemaOrgTag" : null,
                "total" : 48.091694075121694,
                "hasRDI" : true,
                "daily" : 4.80916940751217,
                "unit" : "mg"
            }, {
                "label" : "Magnesium",
                "tag" : "MG",
                "schemaOrgTag" : null,
                "total" : 33.59593379695106,
                "hasRDI" : true,
                "daily" : 7.999031856416918,
                "unit" : "mg"
            }, {
                "label" : "Potassium",
                "tag" : "K",
                "schemaOrgTag" : null,
                "total" : 671.4222626984114,
                "hasRDI" : true,
                "daily" : 14.285580057413007,
                "unit" : "mg"
            }, {
                "label" : "Iron",
                "tag" : "FE",
                "schemaOrgTag" : null,
                "total" : 0.8590604111268254,
                "hasRDI" : true,
                "daily" : 4.772557839593475,
                "unit" : "mg"
            }, {
                "label" : "Zinc",
                "tag" : "ZN",
                "schemaOrgTag" : null,
                "total" : 0.21329173518780423,
                "hasRDI" : true,
                "daily" : 1.9390157744345837,
                "unit" : "mg"
            }, {
                "label" : "Phosphorus",
                "tag" : "P",
                "schemaOrgTag" : null,
                "total" : 62.16010731573148,
                "hasRDI" : true,
                "daily" : 8.880015330818784,
                "unit" : "mg"
            }, {
                "label" : "Vitamin A",
                "tag" : "VITA_RAE",
                "schemaOrgTag" : null,
                "total" : 10.92,
                "hasRDI" : true,
                "daily" : 1.2133333333333334,
                "unit" : "µg"
            }, {
                "label" : "Vitamin C",
                "tag" : "VITC",
                "schemaOrgTag" : null,
                "total" : 19.24202808345119,
                "hasRDI" : true,
                "daily" : 21.380031203834655,
                "unit" : "mg"
            }, {
                "label" : "Thiamin (B1)",
                "tag" : "THIA",
                "schemaOrgTag" : null,
                "total" : 0.12189232194719445,
                "hasRDI" : true,
                "daily" : 10.157693495599538,
                "unit" : "mg"
            }, {
                "label" : "Riboflavin (B2)",
                "tag" : "RIBF",
                "schemaOrgTag" : null,
                "total" : 0.1624829749096336,
                "hasRDI" : true,
                "daily" : 12.498690377664122,
                "unit" : "mg"
            }, {
                "label" : "Niacin (B3)",
                "tag" : "NIA",
                "schemaOrgTag" : null,
                "total" : 0.5397228334354854,
                "hasRDI" : true,
                "daily" : 3.373267708971784,
                "unit" : "mg"
            }, {
                "label" : "Vitamin B6",
                "tag" : "VITB6A",
                "schemaOrgTag" : null,
                "total" : 0.19968356166902382,
                "hasRDI" : true,
                "daily" : 15.360273974540293,
                "unit" : "mg"
            }, {
                "label" : "Folate equivalent (total)",
                "tag" : "FOLDFE",
                "schemaOrgTag" : null,
                "total" : 12.99,
                "hasRDI" : true,
                "daily" : 3.2475,
                "unit" : "µg"
            }, {
                "label" : "Folate (food)",
                "tag" : "FOLFD",
                "schemaOrgTag" : null,
                "total" : 12.99,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Folic acid",
                "tag" : "FOLAC",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin B12",
                "tag" : "VITB12",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin D",
                "tag" : "VITD",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "µg"
            }, {
                "label" : "Vitamin E",
                "tag" : "TOCPHA",
                "schemaOrgTag" : null,
                "total" : 0.6829558675939021,
                "hasRDI" : true,
                "daily" : 4.553039117292681,
                "unit" : "mg"
            }, {
                "label" : "Vitamin K",
                "tag" : "VITK1",
                "schemaOrgTag" : null,
                "total" : 8.008000000000001,
                "hasRDI" : true,
                "daily" : 6.673333333333334,
                "unit" : "µg"
            }, {
                "label" : "Sugar alcohols",
                "tag" : "Sugar.alcohol",
                "schemaOrgTag" : null,
                "total" : 0.0,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            }, {
                "label" : "Water",
                "tag" : "WATER",
                "schemaOrgTag" : null,
                "total" : 557.2582156485922,
                "hasRDI" : false,
                "daily" : 0.0,
                "unit" : "g"
            } ]
            },
            "bookmarked" : false,
            "bought" : false
        } ]
    };
}
