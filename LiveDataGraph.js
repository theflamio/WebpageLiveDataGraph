    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    var dateNow = new Date();

    let randomData = [
        ['Year', 'Sales'],
        [dateNow.getSeconds().toLocaleString(), Math.floor(Math.random() * 1000) + 1000]
    ];

    function drawChart() {
        var data = google.visualization.arrayToDataTable(randomData);

        var options = {
            title: 'Company Performance',
            curveType: 'function',
            legend: {
                position: 'bottom'
            }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    }