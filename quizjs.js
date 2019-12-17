var time = "none";
var flavor = "none";
var diet = "none";
var occasion = "none";
function setTime(choice) {
  time = choice;
}
function setFlavor(choice) {
  flavor = choice;
}
function setDiet(choice) {
  diet = choice;
}
function setOccasion(choice) {
  occasion = choice;
}

function submit() {
  var i;
  var j;
  var highScore = 0;
  var highFood = "";
  var score = 0;
  var answer = ""
  var foods = ["Asian", "Italian", "Mexican", "Barbecue", "Indian", "Burgers", "Mediterranean",
               "Ice Cream", "Steakhouse", "Seafood", "Pizza"];
  var traits = [["takes minutes", "spicy", "nuts", "casual"],
                ["takes an hour", "savory", "no restriction", "date"],
                ["takes minutes", "spicy", "dairy", "casual"],
                ["takes very long", "savory", "no restriction", "family"],
                ["takes an hour", "spicy", "nuts", "casual"],
                ["fast food", "salty", "no restriction", "casual"],
                ["takes very long", "salty", "no restrictions", "date"],
                ["fast food", "sweet", "dairy", "date"],
                ["takes very long", "savory", "no restrictions", "family"],
                ["takes very long", "salty", "no restrictions", "business"],
                ["fast food", "savory", "dairy", "casual"]];
  for(i = 0; i < traits.length; i+=1) {
    score = 0;
    if(time === traits[i][0]) {
      score++;
    }
    if(flavor === traits[i][1]) {
      score++;
    }
    if(diet !== traits[i][2]) {
      score++;
    }
    if(occasion === traits[i][3]) {
      score++;
    }
    if(score > highScore) {
      highScore = score;
      highFood = foods[i];
    }
  }
  document.querySelector("#answer").innerHTML = "You should get " + highFood + "!";

}
