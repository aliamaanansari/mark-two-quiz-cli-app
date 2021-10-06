var readlineSync = require('readline-sync')
var chalk = require('chalk')

var scores = 0

var highestScore = {
  name: 'ALI AMAAN',
  score: 4,
}

var questionBank = [
  {
    question: 'In which country was Tony stark born ? ',
    options: ['Romania', 'Canada', 'South Africa', 'America'],
    answer: 3,
  },
  {
    question:
      'What is Tony Stark’s middle name ? ',
    options: ['clark', 'mike', 'edward', 'tyson'],
    answer: 2,
  },
  {
    question:
    'How old was Tony Stark when he won the 4th Annual MIT Robot Design Award? ? ',
    options: ['17','16', '15','14'],
    answer: 1,
  },
  {
    question:
    'What did Tony Stark say he wanted to put around the world in Avengers: Age of Ultron? ? ',
    options: ['An impenetrable barrier',
    ' A force field',
    ' A suit of armour',
    'A protective shield'],
    answer: 2,
  },
  {
    question:
      'Which chemical element was revealed to be poisoning Tony Stark’s blood in Iron Man 2?? ',
    options: ['Beryllium','Uranium','Palladium','Lithium'],
    answer: 2,
  },
]

function welcome() {
  var userName = readlineSync.question(chalk.blue.bold('What is your name? '))
  console.log(
    chalk.blue.bold(
      `Welcome ${chalk.underline(userName)}, do you know IRON MAN? \n`
    )
  )
}

function askQuestion(currentQuestion, queIndex, totalQuestion) {
  console.log(
    `${chalk.bgBlue.bold(`Q. ${queIndex + 1} of ${totalQuestion}: `)} ${
      currentQuestion.question
    }`
  )
  var index = readlineSync.keyInSelect(
    currentQuestion.options,
    'Please enter correct option number',
    { cancel: false }
  )
  
  if (index === currentQuestion.answer) {
    scores = scores + 1
    console.log(
      chalk.bgGreen.bold('Correctly answered | Current Score: ' + scores)
    )
  } else {
    console.log(
      chalk.bgRedBright.bold('Naah! Wrong Answer | Current Score: ' + scores)
    )
  }
}

function play() {
  var totalQuestion = questionBank.length
  for (var i = 0; i < totalQuestion; i++) {
    var currentQuestion = questionBank[i]
    askQuestion(currentQuestion, i, totalQuestion)
  }
}

function outro() {
  console.log(chalk.cyan.bold('\nYour Final SCORE: ', scores))
  console.log(
    '\nCurrent Highest Score: ' +
      highestScore.score +
      ' made by ' +
      highestScore.name
  )
  if (scores > highestScore.score) {
    console.log(
      '\nCongratulations!!! You have made new record by scoring ' +
        scores +
        '\n'
    )
    console.log('Contact me to update the this')
  }
}

welcome()
play()
outro()
