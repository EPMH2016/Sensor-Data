
$(function () { 
    $('#container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Sensor temperatures'
        },
        xAxis: {
            categories: ['9am', '10am', '11am', '12pm', '1pm', '2pm','3pm','4pm','5pm']
        },
        yAxis: {
            title: {
                text: 'Temperature (F)'
            }
        },
        series: [{
            name: 'Sensor 1',
            data: [70, 60, 65, 67, 70, 75, 90, 85, 80]
        }, {
            name: 'Sensor 2',
            data: [75, 64, 62, 69, 75, 80, 96, 89, 81]
        },
        {
            name: 'Sensor 3',
            data: [85, 62, 67, 75, 75, 89, 99, 73, 74]
        },
        {
            name: 'Sensor 4',
            data: [55, 60, 62, 76, 79, 85,65, 76, 89]},
            {
            name: 'Sensor 5',
            data: [60, 69, 85, 76, 69, 83, 75, 65, 60]
        }
        
        
        
        
        ]
    });
});