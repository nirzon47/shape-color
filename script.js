// colors.json sourced from https://gist.github.com/jennyknuth/e2d9ee930303d5a5fe8862c6e31819c5

/**
 * Fetches the colors from the 'assets/colors.json' source endpoint and assigns them to the 'colors' variable.
 * If the response is not OK, throws an error.
 * Logs the fetched colors to the console.
 * Handles any errors that occur during the fetch operation.
 *
 * @param {none} none - This function does not take any parameters.
 * @return {none} This function does not return anything.
 */
let colors
fetch('assets/colors.json')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		return response.json()
	})
	.then((data) => {
		colors = data
	})
	.catch((error) => {
		console.error('There was a problem with the fetch operation:', error)
	})

// Shape List has the available shapes, they are classes to be added to an element
const shapesList = ['circle', 'square', 'triangle', 'rectangle', 'diamond']
// Theme List has the available themes in DaisyUI import
const themeList = [
	'light',
	'dark',
	'cupcake',
	'bumblebee',
	'emerald',
	'corporate',
	'synthwave',
	'retro',
	'cyberpunk',
	'valentine',
	'halloween',
	'garden',
	'forest',
	'aqua',
	'lofi',
	'pastel',
	'fantasy',
	'wireframe',
	'black',
	'luxury',
	'dracula',
	'cmyk',
	'autumn',
	'business',
	'acid',
	'lemonade',
	'night',
	'coffee',
	'winter',
]

// DOM Elements
const html = document.documentElement
const shape = document.getElementById('shape')
const container = document.getElementById('container')

/**
 * Generates a random color from a given array of colors.
 *
 * @return {string} The randomly selected color.
 */
const getRandomColor = () => {
	return colors[Math.floor(Math.random() * colors.length)].name
}

/**
 * Sets the color of the shape element to a randomly generated color.
 *
 * @return {void}
 */
const setContainerColor = () => {
	container.style.backgroundColor = getRandomColor()
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

/**
 * Sets the background color of the shape to a random color.
 *
 * @param {none} none - This function does not take any parameters.
 * @return {none} This function does not return anything.
 */
const setShapeColor = () => {
	shape.style.backgroundColor = getRandomColor()
}

/**
 * Changes the theme of the HTML page to a random theme from the theme list.
 *
 * @return {undefined} The function does not return a value.
 */
const changeTheme = () => {
	html.setAttribute(
		'data-theme',
		themeList[Math.floor(Math.random() * themeList.length)]
	)
}
