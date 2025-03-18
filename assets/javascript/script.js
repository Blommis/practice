// Knapparna längst upp på sidan. 
function clickOnMe(){
    let buttons = Document.getElementById("firstbutton")
    
}




// Memory spelet
function startGame() {
    let name = document.getElementById("playerName").value;
    if (name.trim() === "") {
        alert("Skriv in ditt namn för att spela!");
        return;
    }
    document.getElementById("intro").classList.add("hidden"); // Dölj introduktionen
    document.getElementById("game").classList.remove("hidden"); // Visa spelet
    document.getElementById("greeting").innerText = `Lycka till, ${name}!`; // Hälsa spelaren
    createGameBoard();
}

function createGameBoard() {
    const icons = [
        "fa-solid fa-cat", "fa-solid fa-dog", "fa-solid fa-bug", "fa-solid fa-car",
        "fa-solid fa-cat", "fa-solid fa-dog", "fa-solid fa-bug", "fa-solid fa-car"
    ];

    let shuffledIcons = icons.sort(() => Math.random() - 0.5);
    let selectedCards = [];
    let matchedPairs = 0;
    const gameBoard = document.getElementById("game-board");

    shuffledIcons.forEach((iconClass, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.icon = iconClass;
        card.dataset.index = index;

        let icon = document.createElement("i");
        icon.className = iconClass;
        card.appendChild(icon);

        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });

    function flipCard() {
        if (selectedCards.length < 2 && !this.classList.contains("flipped")) {
            this.classList.add("flipped");
            selectedCards.push(this);
        }

        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }

    function checkMatch() {
        if (selectedCards[0].dataset.icon === selectedCards[1].dataset.icon) {
            selectedCards = [];
            matchedPairs++;
            if (matchedPairs === icons.length / 2) {
                alert("Grattis! Du vann!");
            }
        } else {
            selectedCards.forEach(card => {
                card.classList.remove("flipped");
            });
            selectedCards = [];
        }
    }
}