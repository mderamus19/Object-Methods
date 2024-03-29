const allCars = [
  {
    model: "Mustang",
    color: "Midnight Blue",
    year: 1976,
    length: 120,
    width: 62,
    height: 47
  },
  {
    model: "Xterra",
    color: "Forest Green",
    year: 2011,
    length: 144,
    width: 71,
    height: 55
  },
  {
    model: "Thunderbird",
    color: "Red",
    year: 2005,
    length: 115,
    width: 58,
    height: 42
  },
  {
    model: "Suburban",
    color: "Grey",
    year: 2015,
    length: 149,
    width: 73,
    height: 58
  }
];

const outputElement = document.querySelector("#app");

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {
  // Iterate all of the values of the current car
  for (const value of Object.values(car)) {
    outputElement.innerHTML += `<h2>${value}</h2>`;
  }
});

outputElement.innerHTML += "<h1> Car List </h1>";

allCars.forEach(car => {
  outputElement.innerHTML += "<hr>";
  for (const entry of Object.entries(car)) {
    outputElement.innerHTML += `<div> ${entry[0]}: ${entry[1]}</div>`;
  }
});

// Lightning Exercise : Create an object that represents a bill from your doctor's office. It should have the following properties: officeName,
// streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.
const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";

const doctorBill = {
  officeName: "Happy Clinic",
  streetAddress: "123 Heal Them Way",
  doctorName: "Jack Ripper",
  patientName: "Sue Happy",
  visitDate: "05-09-2019",
  amountBilled: 250,
  dueDate: "07-09-2019"
};

console.log("Patient Name:", doctorBill[patient]);
console.log("Visit date: ", doctorBill[dateVisited]);
console.log("Amount owed for visit:", doctorBill[owed]);
console.log(Object.values(doctorBill));

// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.

// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent
// <section> element. Wrap each one in a <span> element.

console.log(Object.keys(doctorBill));
const medicalBill = doctorBill[0];
outputElement.innerHTML += "<section> Provider Info </section>";
for (const key of Object.keys(doctorBill)) {
  outputElement.innerHTML += `<p>${key}</p>`;
}
// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo).
// Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.
// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.

const favoriteFood = [
  {
    name: "Pizza",
    type: "Italian"
  },
  {
    name: "Street Tacos",
    type: "Mexican"
  },
  {
    name: "Steak",
    type: "American"
  },
  {
    name: "Chicken Alfredo",
    type: "Italian"
  }
];

const container = document.querySelector("#food");

container.innerHTML += "<h1> FAVORITE FOODS </h1>"
favoriteFood.forEach(food => {
    container.innerHTML += "<hr>"
for(const entry of Object.entries(food)) {
    container.innerHTML += `<div> ${entry[0]}: ${entry[1]}</div>`
}
});
