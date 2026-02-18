const ctx = document.getElementById('chart')

new CharacterData(ctx, {
    type: 'line',
    data: {
        labels: [2018, 2019, 2020],
        datasets: [{
            label: 'GDP',
            data: [1, 2, 3]
        }]
    }
});