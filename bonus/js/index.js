// checking to make sure js and html files are connected
console.log('checking js');

// constructor obect for my witch with at least 4 properties (see pg. 111)
function Witch(name, frogToeCount, newtEyeCount, batWoolCount) {
    this.name = name;
    this.frogToeCount = frogToeCount;
    this.newtEyeCount = newtEyeCount;
    this.batWoolCount = batWoolCount;
    this.generateApothecaryInventory = () => {
        return `${this.name} has ${this.frogToeCount} frog toes, ${this.newtEyeCount} newt eyes, and ${this.batWoolCount} bat wools.`
    }
}

// addMonster function fires when button is clicked
const addMonster = () => {
    // get data from 4 inputs for this monster
    const nameValue = document.getElementById('name').value;
    const frogToesValue = document.getElementById('frog-toes').value;
    const newtEyesValue = document.getElementById('newt-eyes').value;
    const batWoolsValue = document.getElementById('bat-wools').value;

    // create a new monster using monster constructor
    const witch = new Witch(nameValue, frogToesValue, newtEyesValue, batWoolsValue);

    // add this new monster to the array
    let witchList = [];
    const witchText = witch.generateApothecaryInventory();
    witchList.push(witchText);

    // use a loop to display all monsters that have been created
    const witchListDiv = document.getElementById('monster-list');
    witchList.forEach(witchInventory => {
        // add each monster's text to the div, one at a time
        const witchTextElement = document.createElement('p');
        witchTextElement.textContent = witchInventory;
        witchListDiv.appendChild(witchTextElement);
    })
}