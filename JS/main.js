
var userEmail = prompt("Enter your Email");
var userPassword = prompt("Enter your password");
var attempts = 0;

while (userEmail != "s" || userPassword != "s") {
    attempts++
    alert("Email or password is incorrect. Try again.")

    if (attempts < 3) {
        userEmail = prompt("Enter your Email again");
        userPassword = prompt("Enter your password again");

    }

    else {
        alert("You have used all attempts");
        break;
    }

}

if (userEmail == "s" && userPassword == "s") {
    alert("Login successful!");

    var num_of_question = +prompt("Plz enter your number of questions");

    var operators = ["+", "-", "*", "/"]
    var score = 0

    for (var i = 0; i < num_of_question; i++) {

        var num1 = Math.floor(Math.random() * 10);
        var num2 = Math.floor(Math.random() * 10);
        var operation = operators[Math.floor(Math.random() * operators.length)];

        var correctAnswer;
        if (operation == "+") {
            correctAnswer = num1 + num2;
        }
        else if (operation == "-") {
            correctAnswer = num1 - num2;
        }
        else if (operation == "*") {
            correctAnswer = num1 * num2;
        }
        else if (operation == "/") {
            correctAnswer = num1 / num2;
        }

        var userAnswer = prompt(`${i}. ${num1} ${operation} ${num2} =`)

        if (userAnswer == correctAnswer) {
            alert("Correct Well Done")
            score++;
        }

    }

    console.log("The score: " + score + " out of " + num_of_question);
}

