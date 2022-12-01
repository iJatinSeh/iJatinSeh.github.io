var titles = ['Alpaca', 'Bull', 'Crab', 'Duck', 'Elephant', 'Flamingo', 'Gorilla', 'Hippo', 'Impala', 'Jellyfish', 'Koala', 'Lion', 'Monkey', 'Nightingale', 'Octopus', 'Penguin', 'Quokka', 'Rabbit', 'Seagull', 'Tiger', 'Unicorn', 'Vulture', 'Wolf', 'Yak', 'Zebra']
var title = titles[Math.floor(Math.random() * titles.length)]
document.title = 'Jatin : Oh! ' + title
const myHeading = document.querySelector('h1')
myHeading.textContent = 'Hello World!'
