// DOM select the HTML element
const app = document.getElementById('app')

// Your main array
const mixed = ["Banana", "Orange", "Apple", 40, 100, 1, 5, 25, 10, 400, 34, 299, 150, "Mango", "Saab", "Volvo", "BMW"];

// SORT STRINGS
const stringSorting = (array) => {
    return array.sort()
}

// // Call the function
// const result = stringSorting(mixed)

// // Show the function result
// app.innerHTML = JSON.stringify(result)

// NUMBER SORTING
const numberSorting = (array) => {
    return array.sort((a, b) => a - b)
}
// const result = numberSorting(mixed)
// app.innerHTML = JSON.stringify(result)

// SORTING NUMBERS AND STRINGS
const mixedSorting = (array) => {
    const numArray = []
    const strArray = []
    array.forEach(element => {
        isNaN(element) ? strArray.push(element) : numArray.push(element)
    })
    numArray.sort((a, b) => a - b)
    strArray.sort()
    return [...strArray, ...numArray]
}
// const result = mixedSorting(mixed)
// app.innerHTML = JSON.stringify(result)

// REVERSE NUMBER SORTING
const reverseSorting = (array) => {
    return array.sort((a,b) => a - b).reverse()
}
const result = reverseSorting(mixed)
app.innerHTML = JSON.stringify(result)