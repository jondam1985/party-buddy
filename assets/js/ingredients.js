//This is a list of ingredients to generate random searches
var ingredientsList = [
    "butter",
    "egg",
    "milk",
    "parmesan",
    "cheddar",
    "american",
    "sour",
    "cream",
    "mozzarella",
    "yogurt",
    "evaporated",
    "whipped",
    "half",
    "feta",
    "monterey",
    "condensed",
    "cottage",
    "ice",
    "swiss",
    "velveeta",
    "frosting",
    "buttermilk",
    "ricotta",
    "goat",
    "provolone",
    "blue",
    "powdered",
    "colby",
    "pepper",
    "italian",
    "soft",
    "gouda",
    "pepperjack",
    "romano",
    "brie",
    "pizza",
    "ghee",
    "creme",
    "cheese",
    "gruyere",
    "pecorino",
    "custard",
    "muenster",
    "queso",
    "hard",
    "havarti",
    "asiago",
    "mascarpone",
    "neufchatel",
    "halloumi",
    "paneer",
    "brick",
    "camembert",
    "garlic",
    "edam",
    "manchego",
    "fontina",
    "stilton",
    "emmenthaler",
    "red",
    "jarlsberg",
    "bocconcini",
    "farmer",
    "wensleydale",
    "longhorn",
    "double",
    "raclette",
    "lancashire",
    "cheshire",
    "onion",
    "tomato",
    "potato",
    "carrot",
    "bell",
    "basil",
    "parsley",
    "broccoli",
    "corn",
    "spinach",
    "mushroom",
    "green",
    "ginger",
    "chili",
    "celery",
    "rosemary",
    "salad",
    "cucumber",
    "sweet",
    "pickle",
    "avocado",
    "zucchini",
    "cilantro",
    "frozen",
    "olive",
    "asparagus",
    "cabbage",
    "cauliflower",
    "dill",
    "kale",
    "mixed",
    "pumpkin",
    "squash",
    "mint",
    "scallion",
    "sun",
    "shallot",
    "eggplant",
    "beet",
    "butternut",
    "horseradish",
    "leek",
    "caper",
    "brussels",
    "artichoke",
    "chia",
    "radish",
    "sauerkraut",
    "portobello",
    "arugula",
    "spaghetti",
    "capsicum",
    "bok",
    "parsnip",
    "okra",
    "yam",
    "fennel",
    "turnip",
    "snow",
    "bean",
    "seaweed",
    "chard",
    "collard",
    "canned",
    "pimiento",
    "watercress",
    "tomatillo",
    "rocket",
    "mustard",
    "bamboo",
    "rutabaga",
    "endive",
    "jicama",
    "kohlrabi",
    "hearts",
    "daikon",
    "radicchio",
    "porcini",
    "chinese",
    "jerusalem",
    "cress",
    "water",
    "dulse",
    "micro",
    "burdock",
    "chayote",
    "lemon",
    "apple",
    "banana",
    "lime",
    "strawberry",
    "orange",
    "pineapple",
    "blueberry",
    "raisin",
    "coconut",
    "grape",
    "peach",
    "raspberry",
    "cranberry",
    "mango",
    "pear",
    "blackberry",
    "cherry",
    "date",
    "watermelon",
    "berries",
    "kiwi",
    "grapefruit",
    "mandarin",
    "craisins",
    "cantaloupe",
    "plum",
    "apricot",
    "clementine",
    "prunes",
    "pomegranate",
    "nectarine",
    "fig",
    "tangerine",
    "papaya",
    "rhubarb",
    "sultanas",
    "plantain",
    "currant",
    "passion",
    "guava",
    "persimmons",
    "lychee",
    "lingonberry",
    "tangelos",
    "kumquat",
    "boysenberry",
    "star",
    "quince",
    "honeydew",
    "crabapples",
    "rice",
    "pasta",
    "flour",
    "bread",
    "baking",
    "cornstarch",
    "rolled",
    "noodle",
    "pancake",
    "yeast",
    "cracker",
    "quinoa",
    "brown",
    "cornmeal",
    "self",
    "cake",
    "saltines",
    "popcorn",
    "macaroni",
    "ramen",
    "cereal",
    "biscuits",
    "stuffing",
    "couscous",
    "pie",
    "bisquick",
    "chips",
    "angel",
    "croutons",
    "lasagne",
    "bagel",
    "puff",
    "hot",
    "barley",
    "multigrain",
    "pretzel",
    "cornbread",
    "english",
    "cornflour",
    "crescent",
    "pita",
    "risotto",
    "muffin",
    "bicarbonate",
    "ravioli",
    "wheat",
    "polenta",
    "baguette",
    "gnocchi",
    "vermicelli",
    "semolina",
    "buckwheat",
    "croissants",
    "filo",
    "pierogi",
    "matzo",
    "rye",
    "tapioca",
    "shortcrust",
    "breadsticks",
    "ciabatta",
    "spelt",
    "starch",
    "whole",
    "gram",
    "sourdough",
    "wafer",
    "bran",
    "challah",
    "sponge",
    "malt",
    "sorghum",
    "sugar",
    "honey",
    "confectioners",
    "maple",
    "molasses",
    "artificial",
    "agave",
    "cinnamon",
    "vanilla",
    "paprika",
    "oregano",
    "cumin",
    "cayenne",
    "thyme",
    "nutmeg",
    "ground",
    "curry",
    "bay",
    "taco",
    "sage",
    "clove",
    "allspice",
    "turmeric",
    "chive",
    "peppercorn",
    "cajun",
    "coriander",
    "herbs",
    "steak",
    "poultry",
    "chile",
    "cardamom",
    "tarragon",
    "garam",
    "marjoram",
    "saffron",
    "herbes",
    "chipotle",
    "caraway",
    "cacao",
    "savory",
    "tamarind",
    "aniseed",
    "fenugreek",
    "lavender",
    "old",
    "chicken",
    "bacon",
    "sausage",
    "beef",
    "ham",
    "pork",
    "cooked",
    "turkey",
    "pepperoni",
    "chorizo",
    "polish",
    "salami",
    "spam",
    "venison",
    "bologna",
    "bratwurst",
    "prosciutto",
    "lamb",
    "corned",
    "pancetta",
    "duck",
    "leg",
    "canadian",
    "veal",
    "cornish",
    "deer",
    "pastrami",
    "rabbit",
    "sliced",
    "elk",
    "marrow",
    "goose",
    "quail",
    "oxtail",
    "pheasant",
    "moose",
    "foie",
    "liver",
    "sweetbread",
    "wild",
    "snail",
    "pigeon",
    "grouse",
    "ostrich",
    "soppressata",
    "alligator",
    "salmon",
    "tilapia",
    "fish",
    "cod",
    "anchovy",
    "smoked",
    "sardines",
    "tuna",
    "whitefish",
    "halibut",
    "trout",
    "haddock",
    "flounder",
    "catfish",
    "mahi",
    "mackerel",
    "sole",
    "sea",
    "swordfish",
    "pollock",
    "herring",
    "perch",
    "grouper",
    "caviar",
    "monkfish",
    "rockfish",
    "pike",
    "barramundi",
    "eel",
    "bluefish",
    "carp",
    "cuttlefish",
    "pompano",
    "arctic",
    "john",
    "marlin",
    "amberjack",
    "sturgeon",
    "shrimp",
    "crab",
    "prawns",
    "scallop",
    "clam",
    "lobster",
    "mussel",
    "oyster",
    "squid",
    "calamari",
    "crawfish",
    "octopus",
    "cockle",
    "conch",
    "chocolate",
    "graham",
    "marshmallow",
    "nutella",
    "peas",
    "black",
    "chickpea",
    "lentil",
    "refried",
    "hummus",
    "lima",
    "kidney",
    "pinto",
    "edamame",
    "split",
    "snap",
    "soybeans",
    "cannellini",
    "navy",
    "french",
    "great",
    "fava",
    "and",
    "jack",
    "fraiche",
    "soup",
    "fresco",
    "herb",
    "leicester",
    "gloucester",
    "beans",
    "greens",
    "vegetables",
    "vegetable",
    "dried",
    "sprout",
    "heart",
    "seeds",
    "choy",
    "sprouts",
    "shoot",
    "rabe",
    "root",
    "chestnut",
    "fruit",
    "powder",
    "soda",
    "crumbs",
    "oats",
    "tortillas",
    "mix",
    "rising",
    "crust",
    "hair",
    "flake",
    "dough",
    "pastry",
    "dog",
    "flakes",
    "roll",
    "germ",
    "meal",
    "food",
    "starter",
    "extract",
    "syrup",
    "sweetener",
    "nectar",
    "seasoning",
    "leaf",
    "salt",
    "essence",
    "masala",
    "seed",
    "five",
    "spice",
    "anise",
    "paste",
    "balm",
    "breast",
    "chops",
    "thighs",
    "wings",
    "roast",
    "ribs",
    "shoulder",
    "belly",
    "shank",
    "giblets",
    "hen",
    "loin",
    "suet",
    "cutlet",
    "bones",
    "tenders",
    "gras",
    "sirloin",
    "boar",
    "fillets",
    "bass",
    "snapper",
    "char",
    "dory",
    "urchin",
    "sauce",
    "jam",
    "northern",
    "cassis",
    "palm",
    "bun",
    "provence"
];