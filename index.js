// This asks the user to input inceream falvors seperated by commas
const userInputString = prompt(
    "Please enter froyo flavors seperated by commas: ",
    "chocolate,vanilla,strawberry,coffee"
);

const flavorsArray = userInputString.split(",");

//This is an empty obj to later store the falvors and values
const flavorsobj = {};

//This for loop will add falvors and value
for (let i = 0; i < flavorsArray.length; i++) {
  const currentFlavor = flavorsArray[i];
  //Checks if the flavor is currently in the list if not it will add to obj and set it equal to one
  if (!flavorsobj[currentFlavor]) {
    flavorsobj[currentFlavor] = 1;
  } 
  //Checks if falvor is in list and if it is add 1 to it
  else {
    flavorsobj[currentFlavor] += 1;
  }
}

console.table(flavorsobj);