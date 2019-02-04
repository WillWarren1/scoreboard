let counter1 = 0

let counter2 = 0

// team name values
let teamName1 = document.querySelector('.team1name').value
let teamName2 = document.querySelector('.team2name').value
// let newName1 = document.querySelector('team1new').value
// let newName2 = document.querySelector('team2new').value

// let scores be 0 upon opening page
const main = () => {
	document.querySelector('.team1Score').textContent = 0
	document.querySelector('.team2Score').textContent = 0
}

const updateName1 = () => {
	teamName1 = document.querySelector('.team1new').value
	document.querySelector('.team1name').textContent = teamName1
}
const updateName2 = () => {
	teamName2 = document.querySelector('.team2new').value
	document.querySelector('.team2name').textContent = teamName2
}

//when a user clicks a button
const increaseCounterOne = () => {
	// do things
	console.log('button clicked')
	// increase the variable counter1 by one
	counter1++
	console.log(counter1)
	// update the html with the new value
	document.querySelector('.team1Score').textContent = counter1
}

// when a user clicks a button
const decreaseCounterOne = () => {
	// do things
	console.log('button clicked')
	// increase the variable counter1 by one
	counter1 = counter1 - 1
	console.log(counter1)
	// update the html with the new value
	document.querySelector('.team1Score').textContent = counter1
}

// counter 2 stuff
// when a user clicks a button
const increaseCounterTwo = () => {
	// do things
	console.log('button clicked')
	// increase the variable counter1 by one
	counter2++
	console.log(counter2)
	// update the html with the new value
	document.querySelector('.team2Score').textContent = counter2
}

// when a user clicks a button
const decreaseCounterTwo = () => {
	// do things
	console.log('button clicked')
	// decrease the variable counter1 by one
	counter2 = counter2 - 1
	console.log(counter2)
	// update the html with the new value
	document.querySelector('.team2Score').textContent = counter2
}

document
	.querySelector('.update-team-1-name')
	.addEventListener('click', updateName1)

document
	.querySelector('.update-team-2-name')
	.addEventListener('click', updateName2)

document
	.querySelector('.team-1-add-1-button')
	.addEventListener('click', increaseCounterOne)

document
	.querySelector('.team-1-subtract-1-button')
	.addEventListener('click', decreaseCounterOne)

document
	.querySelector('.team-2-add-1-button')
	.addEventListener('click', increaseCounterTwo)

document
	.querySelector('.team-2-subtract-1-button')
	.addEventListener('click', decreaseCounterTwo)

document.addEventListener('DOMContentLoaded', main)
