// This asks the user to input inceream falvors seperated by commas
const userInputString = prompt(
    "Please enter froyo flavors seperated by commas (chocolate,vanilla,strawberry,coffee): ",
    "chocolate,vanilla,strawberry,coffee"
);

const stringArray = userInputString.split(",");

const flavors = [];
for (let i = 0; i < stringArray.length; i++) {
    flavors[i] = stringArray[i];
}

const obj_flavors = {
    chocolate: 0,
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
};

for (let i = 0; i < flavors.length; i++) {

    if (flavors[i] === 'chocolate') {
        obj_flavors.chocolate += 1;
    }

    else if (flavors[i] === 'vanilla') {
        obj_flavors.vanilla += 1;
    }

    else if (flavors[i] === 'strawberry') {
        obj_flavors.strawberry += 1;
    }

    else if (flavors[i] === 'coffee') {
        obj_flavors.coffee += 1;
    }
}

console.table(obj_flavors);
