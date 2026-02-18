async function getGDP(country="USA") {
    const res = await fetch (`https://api.worldbank.org/v2/country/USA/indicator/NY.GDP.MKTP.CD?format=json`)
    const data = await res.json();
    console.log(data)
}
