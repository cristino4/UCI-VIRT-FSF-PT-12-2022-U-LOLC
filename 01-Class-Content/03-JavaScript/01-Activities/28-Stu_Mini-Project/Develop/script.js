gameChoices = ["R","P","S"];



function computerChoose(){
computerChoice = gameChoices[Math.floor(Math.random()*3)];
return computerChoice;
}

function testGame(computerChoice,userChoice){
    if (computerChoice == userChoice ){
        result = "Draw";
    }
    else if(computerChoice == "R" && userChoice == "P"){
        result = "user wins";
    }
    else if(computerChoice == "R" && userChoice == "S"){
        result = "user loses";
    }
    else if(computerChoice == "P" && userChoice == "R"){
        result = "user loses";
    }
    else if(computerChoice == "P" && userChoice == "S"){
        result = "user wins";
    }
    else if(computerChoice == "S" && userChoice == "R"){
        result = "user wins";
    }
    else if(computerChoice == "S" && userChoice == "P"){
        result = "user loses";
    }
    else{
        result = "error";
    }
    return result;
}
while (i = true){
    userChoice = prompt("What is your choice?");
    computerChoice = computerChoose();
    result = testGame(computerChoice,userChoice);
    confirm("Computer chose " +computerChoice+"...The result: " +result);
}
