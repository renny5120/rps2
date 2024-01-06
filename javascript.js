function getComputerChoice(){
    const choices = [];
    choices.push("rock", "paper", "scissors");
    const randomElement = Math.floor(Math.random() * choices.length);
    return choices[randomElement];
}

console.log(getComputerChoice());