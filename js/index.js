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

// addMonsters function fires when button is clicked
const addMonsters = () => {
    // create and add monster 1
    const monster1 = new Witch('Agatha', 4, 12, 36);
    const monster1Element = document.getElementById('monster-1');
    monster1Element.textContent = monster1.generateApothecaryInventory();

    // create and add monster 2
    const monster2 = new Witch('Bellatrix', 6, 18, 54);
    const monster2Element = document.getElementById('monster-2');
    monster2Element.textContent = monster2.generateApothecaryInventory();
    
    // create and add monster 3
    const monster3 = new Witch('Maleficent', 2, 6, 18);
    const monster3Element = document.getElementById('monster-3');
    monster3Element.textContent = monster3.generateApothecaryInventory();
}