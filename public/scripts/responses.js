function getBotResponse(input) {
    let respuesta = input.toLowerCase();


    //rock paper scissors
    if (respuesta == "rock") {
        return "paper";
    } else if (respuesta == "paper") {
        return "scissors";
    } else if (respuesta == "scissors") {
        return "rock";
    }

    // Simple responses
    if (respuesta == "hello") {
        return "Hello there!";
    } else if (respuesta == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}