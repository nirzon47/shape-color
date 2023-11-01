// colors.json sourced from https://gist.github.com/jennyknuth/e2d9ee930303d5a5fe8862c6e31819c5
const colors = JSON.parse()
const length = colors.length

const shapesList = [
	'square circle',
	'square square',
	'triangle',
	'square rectangle',
	'square diamond',
]

const shape = document.getElementById('shape')
const container = document.getElementById('container')

/**
 * Generates a random color from a given array of colors.
 *
 * @return {string} The randomly selected color.
 */
const getRandomColor = () => {
	return colors[Math.floor(Math.random() * length)]
}

/**
 * Sets the color of the shape element to a randomly generated color.
 *
 * @return {void}
 */
const setColor = () => {
	shape.style.backgroundColor = getRandomColor()
}

/**
 * Generates a random shape and adds it to the shape list.
 *
 * @return {undefined} - Does not return a value.
 */
const getRandomShape = () => {
	removeShapes()

	shape.classList.add(shapesList[Math.floor(Math.random() * shapesList.length)])
}

/**
 * Removes the specified CSS classes from the shape element.
 *
 * @param {HTMLElement} shape - The shape element to remove classes from.
 * @param {...string} shapesList - The CSS classes to remove from the shape element.
 */
const removeShapes = () => {
	shape.classList.remove(...shapesList)
}
