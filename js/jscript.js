//Lessons
function run_me() {
    const name = "Jessica";
    var i = Math.random();
    console.log(i);
    console.log(i * 50);
    console.log(Math.floor(i * 50));
}

function mathRand() {

    var daysInYear = 365;
    var weeksInYear = 52;
    var daysInWeek = 7;

    // add a value 1 to daysInWeek
    console.log("Leap year has " + (daysInYear + 1));
    // subtract a value of 2 from daysInWeek
    daysInWeek -= 2;
    //Working days in a year
    console.log("Working days in a year " + (daysInWeek * weeksInYear));
    // divide weeksinyear by 12 average weeks in a month
    console.log("average weeks in a month " + (weeksInYear /= 12));
}

function interpolation() {
    var name = "Jessica";
    var age = 2024 - 1992
    // to avoid concatination
    console.log(`${name} has ${age} years old`)
}

function ifStatement() {
    let sunny = false;
    //check if its sunny and return a msg
    if (sunny) {
        console.log("Go outside!!! IT IS SUNNY");
    } else {
        console.log("Go outside!!! It's NOT sunny, but life is not fare")
    }

}

function switchCase() {
    let name = "Jessica";

    switch (name) {
        case "Chester":
            console.log("Yes it isss!")
            break;
        case "Jessica":
            console.log("It's Jessica!")
            break;
        case "Thayna":
            console.log("It's Thayna!")
            break;
        default:
            console.log("incorrect input")
    }
}

function switchCaseTwo() {
    let classicGame = "Bust a groove";

    switch (classicGame) {
        case "Guitar Hero":
            console.log(`Yes, ${classicGame} o is the best game in the world!`)
            break;
        case "Hogwarts Legacy":
            console.log("Hogwarts Legacy is not a classic")
            break;
        case "Bust a groove":
            console.log("Bust a groove its a classic only for Jessica")
            break;
        default:
            console.log("incorrect input")
    }
}

function XOR() {
    let a = 10;
    let b = "Jessica";

    if (a == 10 && b == "Jessica") {
        console.log("it is");
    }

    if (b == "Jessica" || a == 20) {
        console.log("Jessica 20");
    }
}

function falsy() {
    let username = '';
    let defaultName = username || 'Stranger';

    console.log(defaultName)


}

//EXERCISES
function dogAge() {
    var myAge = 32;
    var earlyYear = 2;

    earlyYear *= 10.5;

    var laterYears = myAge - 2;

    laterYears *= 4;

    console.log(earlyYear);
    console.log(laterYears);
}

function temperature() {
    // creating temperatures const variables
    const kelvin = 0;
    // Celsius is 273 degrees less than Kelvin.
    const celsius = kelvin - 273;
    //Use this equation to calculate Fahrenheit,
    //then store the answer in a variable named fahrenheit
    const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

}

function magicEightBall() {
    let username = "";

    username ? defaultname = username : defaultname = "Jane";
    console.log(`Hello, ${defaultname}`);

    let userQuestion = "Test question?";
    console.log(userQuestion);
    let rand = Math.floor(Math.random() * 7);

    let eightBall = "";

    switch (rand) {
        case 0:
            eightBall = "It is certain";
            break;
        case 1:
            eightBall = "It is decidedly so";
            break;
        case 2:
            eightBall = "Reply hazy try again";
            break;
        case 3:
            eightBall = "Cannot predict now";
            break;
        case 4:
            eightBall = "Do not count on it";
            break;
        case 5:
            eightBall = "My sources say no";
            break;
        case 6:
            eightBall = "Outlook not so good";
            break;
        case 7:
            eightBall = "Signs point to yes";
            break;
        default:
            console.log("no luck")

    }

    console.log(eightBall);
}

function race() {
    let raceNumber = Math.floor(Math.random() * 1000);

    let registeredEarly = false;
    let runnerAge = 75;

    if (runnerAge < 18) {
        raceNumber = Math.floor(Math.random() * 999);
        console.log(`Young registered will run 12:30. Your race number is ${raceNumber}`)
    } else {
        raceNumber = Math.floor((Math.random() * 3) * 1000);
    }

    if (runnerAge > 18 && registeredEarly) {
        console.log(`Adults registered early will run 09:30. Your race number is ${raceNumber}`)

    } else if (runnerAge > 18 && !registeredEarly) {
        console.log(`Adults registered late will run 11:00. Your race number is ${raceNumber}`)
    } else {
        raceNumber = Math.floor(Math.random() * 999);
        console.log("You are still a teenager, go run with the kids at 12:30");
    }
}

function arrays() {
    let myArray = [];

}

function forLoops() {
    let arrOne = [10, 20, 30, 40];
    let arrTwo = [20, 25, 30, 35];
    let arrThree = [];
    let include = false;

    for (let i = 0; i < arrOne.length; i++) {
        let include = false; // Reset include flag for each iteration of arrOne
        for (let j = 0; j < arrTwo.length; j++) {
            if (arrOne[i] === arrTwo[j]) {
                include = true; // Set flag to true if number is found in arrTwo
                break; // Exit inner loop once match is found
            }
        }
        if (!include) {
            arrThree.push(arrOne[i]); // If number is not found in arrTwo, push it to arrThree
        }
    }

    // Add remaining unique numbers from arrTwo
    for (let k = 0; k < arrTwo.length; k++) {
        if (!arrOne.includes(arrTwo[k])) {
            arrThree.push(arrTwo[k]);
        }
    }
    console.log(arrThree)
}

function forEach() {
    // let students = ["Jéssica", "Larissa","Ana Catarina"];
    //
    // students.forEach(student => {
    //     console.log(student)
    // });


    let favorites = ["Sara Bareilles", "Paramore", "Tuyo", "Supercombo"];

    favorites.forEach(favorite => {
        console.log(favorite);
    })


    let randNum = [1, 2, 3, 4, 5, 6, 7];
    const nums = randNum.map(num => {
        return num * 5;
    })
    console.log(randNum)
    console.log(nums)

    // let roles = ["middle sister","older sister", "younger sister"];
    // console.log(JSON.stringify(roles));
    // const assingRole = roles.map(role =>{
    //     return "associate";
    // })

}

function filter() {
    let values = [12, "text", "christmas", 13, true, false, "jéssica"]

    const text = values.filter(value => {
        return typeof value === "string";
    })
    console.log(text)


    let nums = []
    //populating nums with nums between 0-1000
    for (let i = 0; i <= 15; i++) {
        let num = Math.floor(Math.random() * 1000);
        nums.push(num);
    }
    console.log(JSON.stringify(nums));

    //finding nums below 250
    const below = nums.filter(value => {
        if (value < 250) {
            return value;
        }
    })

    console.log(below)
}

function reduce() {
    let numbers = [55, 30, 30, 40, 50];

    // let initialValue = 150;

    let total = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });

    console.log(total);

}

//EXERCÍCIOS
//calcular area

function calcArea() {
    //quadrado
    let sqLenghts = 5;
    let calcSq = sqArea(sqLenghts);
    console.log(`A area do quadrado: ${calcSq} cm2`);


    //circulo
    let circleRaio = 5;
    let calcCircle = circleArea(circleRaio);
    console.log(`A area do circulo: ${calcCircle} cm2`);
}

function sqArea(length) {
    return length * length;
}

function circleArea(raio) {
    return 3.14 * (raio * raio);
}


//Rock paper and scissors

function rps() {
    let userChoice = prompt("Please enter your choice - Rock Paper Scissors").toLowerCase();

    const cpuChoice = () => {
        let options = ["rock", "paper", "scissors"];
        return options[Math.floor(Math.random() * options.length)];

    }
    console.log(`User choice -> ${userChoice}  |  CPU Choice -> ${cpuChoice()}`)


    if (userChoice != null && userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        let playGame = determineWinner(userChoice, cpuChoice())
        console.log(playGame);
    } else {
        console.log("Wrong input")
    }


}

function determineWinner(userChoice, cpuChoice) {

    if (userChoice === cpuChoice) {
        return "Game is a tie";
    } else if (
        (userChoice === 'rock' && cpuChoice === 'scissors') ||
        (userChoice === 'paper' && cpuChoice === 'rock') ||
        (userChoice === 'scissors' && cpuChoice === 'paper')) {
        return "You won!!!"
    } else {
        return "You lose";
    }
}

//Sleep Calculator

function sleepCalc() {
    const getSleepingHours = day => {
        if (day === 'monday') {
            return 8;
        } else if (day === 'tuesday') {
            return 6;
        } else if (day === 'wednesday') {
            return 9;
        } else if (day === 'thursday') {
            return 7;
        } else if (day === 'friday') {
            return 9;
        } else if (day === 'saturday') {
            return 12;
        } else if (day === 'sunday') {
            return 15;
        } else {
            return "wrong input"
        }
    }

    let input = "SATURDAY"
    console.log(getSleepingHours(input.toLowerCase()))

    const getTotalHours = () => {
        const getActualSleepHours = () => getSleepingHours('monday') + getSleepingHours('tuesday') + getSleepingHours('wednesday') + getSleepingHours('thursday') + getSleepingHours('friday') + getSleepingHours('saturday') + getSleepingHours('sunday');
        return getActualSleepHours();
    }

    const getIdealSleepHours = () => {
        const idealHours = 7.5;
        return idealHours * 7;
    };

    console.log(getTotalHours())
    console.log(getIdealSleepHours())
}

function codedMsg() {
    let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

    // 1. Use an array method to remove the last string of the array secretMessage.
    secretMessage.pop();

// 2. Log the length of the array.
    console.log(secretMessage.length);

// 3. Use an array method to add the words 'to' and 'Program' as separate strings to the end of the secretMessage array.
    secretMessage.push('to', 'Program');

// 4. Change the word 'easily' to the word 'right' by accessing the index and replacing it.
    let easilyIndex = secretMessage.indexOf('easily');
    if (easilyIndex !== -1) {
        secretMessage[easilyIndex] = 'right';
    }

// 5. Use an array method to remove the first string of the array.
    secretMessage.shift();

// 6. Use an array method to add the string 'Programming' to the beginning of the array.
    secretMessage.unshift('Programming');

// 7. Use an array method to remove the strings 'get', 'right', 'the', 'first', 'time,', and replace them with the single string 'know,'.
    secretMessage.splice(6, 5, 'know,');

// 8. Print the secret message as a sentence.
    console.log(secretMessage.join(' '));

}

//whale

function whaleTalk() {
    // 1. Create a variable named input that is equal to any phrase you’d like.
    let input = "Hello, how are you today?";

// 2. Create an array named vowels containing the vowels "a", "e", "i", "o", and "u".
    const vowels = ['a', 'e', 'i', 'o', 'u'];

// 3. Create a variable named resultArray and set it equal to an empty array: [].
    let resultArray = [];

// 4. Create a loop to iterate through each letter of the input variable text.
    for (let i = 0; i < input.length; i++) {
        // 6. Create a nested loop to iterate through the vowels array.
        for (let j = 0; j < vowels.length; j++) {
            // 8. Compare the input letter to every letter in the vowels array.
            if (input[i] === vowels[j]) {
                // 9. Add the matching vowels to the resultArray.
                resultArray.push(input[i]);
                // 10. Check if the letter is 'e' and double it.
                if (input[i] === 'e') {
                    resultArray.push(input[i]);
                }
                // 11. Check if the letter is 'u' and double it.
                if (input[i] === 'u') {
                    resultArray.push(input[i]);
                }
            }
        }
    }

// 12. Log the resultArray to the console.
    console.log(resultArray);

// 13. Capitalize the array elements and join them together as one string.
    let whaleTalk = resultArray.join('').toUpperCase();
    console.log(whaleTalk);
}


function correctIterator() {

    const cities = ['Edinburgh', 'Chennao', 'Hannover', 'Tokyo', 'Accra', 'Lahore', 'Eskisehir', 'Northampton', 'Taipei'];

    const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
    cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
    const longCities = cities.filter(city => city.length > 7);
    console.log(longCities)

// Choose a method that will return a single value
  const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
  }, "T");

  console.log(word)

// // Choose a method that will return a new array
  const smallerNums = nums.filter(num => num - 5);
    console.log(smallerNums)

// // Choose a method that will return a boolean value
    console.log(nums.some(num => num < 0));


}


function grammarChecker(){
    let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

    let storyWords = story.split(' ');
    let unnecessaryWord = 'literally';
    let misspelledWord = 'beautifull';
    let badWord = 'freaking';
    console.log(storyWords)

    console.log(storyWords.join(' '));

    let count = 0;
    storyWords.forEach(word =>{
        count++
    });
    console.log(count);

   storyWords.forEach(function(word, index) {
       if (word === unnecessaryWord){
        console.log("Index:", index, "Element:", word);
        storyWords.splice(index,1);
       }
    });

   storyWords.map(function (word,index){
       if (word === misspelledWord){
           storyWords[index] = 'beautiful';
       }else {
           return word;
       }
   });

    console.log(storyWords.join(' '));

    let badWordIndex = storyWords.findIndex(function(word) {
        return word === badWord;
    });

    console.log(badWordIndex);
    storyWords[badWordIndex] = 'really';
    console.log(storyWords.join(' '));

    let lengthCheck = storyWords.every(word => {
        return word.length >= 10;
    })

    // Find the first word longer than 10 characters
    let longWord = storyWords.find(word => word.length > 10);

    let replacementWords = ['stunning', 'dazzling', 'glorious'];

    let replacementWord = replacementWords[Math.floor(Math.random() * replacementWords.length)];

    let originalStory = storyWords.join(' '); // Replace with your original story string
    let updatedStory = originalStory.replace(longWord, replacementWord);

    console.log(updatedStory);
}


//styling

