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
// const result = reverseSorting(mixed)
// app.innerHTML = JSON.stringify(result)

// REVERSE SORTING FOR STRINGS
const reverseStr = (array) => {
    return array.sort().reverse()
}
// const result = reverseStr(mixed)
// app.innerHTML = JSON.stringify(result)

// SORTING ARRAY OF OBJECTS BY NUMBER VALUE
const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ]

const sortingArrObj = (array) => {
    return array.sort((a, b) => a.value - b.value)
}
// const result = sortingArrObj(items)
// app.innerHTML = JSON.stringify(result)

// CONDITIONAL SORTING 
const conditionalSorting = (array) => {
    if(!array.length) return
    return array.sort()
}
const result = conditionalSorting(mixed)
app.innerHTML = JSON.stringify(result)


// DESCENDING SORTING FOR NUMBERS
const descNum = (array) => {
    return array.sort((a, b) => a -b ).reverse()
}

// DESCENDING SORTING FOR NUMBERS - SECOND WAY
const descNumTwo = (array) => {
    return array.sort((a, b) => b - a) 
}
