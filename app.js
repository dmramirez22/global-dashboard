// async function getGDP(country="USA") {
//     const res = await fetch (`https://api.https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?format=json`);
//     const data = await res.json();
//     console.log(data)
// }

// getGDP()

let grades = ['A+', 'A', 'FAIL']

let goodGrades = grades.filter (element =>  element !== 'FAIL')

console.log(goodGrades)


