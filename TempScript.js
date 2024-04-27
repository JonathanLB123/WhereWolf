const nameList = [];
const playerList = [];

for (var i = 0; i < nameList.length; i++){
    console.log(nameList[i] + " " + i);
}

document.querySelector('#name').addEventListener('keydown', (e) => {
    if(e.keyCode == 13){
        const elem = e.target;
        nameList.push(elem.value);
        
        document.querySelector('#name').value = '';

        displayWords();
    }
});

document.querySelector('#done').addEventListener('click', (e) => {
    for(let i = 0; i < nameList.length; i++) {
        const newPlayer = new player(nameList[i]);
        playerList.push(newPlayer);
        console.log("newPlayer: " + newPlayer.name);
    }
});

function displayWords() {
    const list = document.getElementById('wordList'); // Get the ul element
    list.innerHTML = ''; // Empty the ul
    nameList.forEach(word => {
        const listItem = document.createElement('li'); // Create a new li element
        listItem.textContent = word; // Set the text of li to the word
        list.appendChild(listItem); // Append the li to the ul
    });
}

class player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}
