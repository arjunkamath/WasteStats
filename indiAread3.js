var chart = c3.generate({
 bindto: '#userData',
    data: {
        columns: [
            ['Bio', 128,153,109,183,112,103,157,179,163,163,163,144,198,172,191,138,175,118,131,198,173,116],
            ['Energy', 613,691,504,522,659,650,530,658,594,549,655,518,613,575,667,674,674,679,623,542,596,699],
            ['Mixed', 1384,1366,1458,1485,1460,1459,1452,1574,1457,1496,1235,1354,1458,1368,1156,1524,1245,1554,1211,1454,1453,1560]
        ],
        types: {
            Bio: 'area-spline',
            Energy: 'area-spline',
            Mixed: 'area-spline'
            // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
        },
        colors: {
           Bio: '#78BE20',
	    Mixed: '#009CA6',
	    Energy: '#AF272F'
        },
        groups: [['Bio', 'Energy', 'Mixed']]
    },
    zoom: {
        enabled: true
    },
    subchart: {
        show: true
    }
});


var chart7 = c3.generate({
  bindto: '#basicNeighbour',
    data: {
        columns: [
            [' ', 30, 40, 50]
        ],
        type: 'bar',
        color: function (color, d) {
            // d will be 'id' when called for legends
            return d.index === 2? "#78BE20": d.index === 1? "#009CA6": "#AF272F";
        }
    },
    axis: {
        rotated: true,
        x: {
            type: 'category',
            categories: ['BEST', 'YOU', 'AVERAGE'],
	    tick: {
                fit: true
            }
        }
    },
    legend : {
        hide: true
    }
});

var chart3 = c3.generate({
 bindto: '#compareChartEnergy',
    data: {
        columns: [
            ['Best', 128,153,109,183,112,103,157,179,163,163,163,144,198,172,191,138,175,118,131,198,173,116],
            ['You', 613,691,504,522,659,650,530,658,594,549,655,518,613,575,667,674,674,679,623,542,596,699],
            ['Average', 1384,1366,1458,1485,1460,1459,1452,1574,1457,1496,1235,1354,1458,1368,1156,1524,1245,1554,1211,1454,1453,1560]
        ],
        type: 'bar',
        colors: {
            Best: '#AF272F',
	    You: '#009CA6',
	    Average: '#78BE20'
        }
    },
    zoom: {
        enabled: true
    }
});

var chart5 = c3.generate({
  bindto: '#userRating',
    data: {
        columns: [
            [' ', 30, 40, 50]
        ],
        type: 'bar',
        color: function (color, d) {
            // d will be 'id' when called for legends
            return d.index === 2? "#b7b09c": d.index === 1? "#009ca6": "#78be20";
        }
    },
    axis: {
        rotated: true,
        x: {
            type: 'category',
            categories: ['BEST', 'NOW', 'WORST'],
	    tick: {
                fit: true
            }
        }
    },
    legend : {
        hide: true
    }
});

var chart6 = c3.generate({
  bindto: '#yourPie',
    data: {
        columns: [
            ['Bio', 10],
            ['Mixed', 60],
            ['Energy',30]
        ], type: "donut",
        colors: {
            Bio: '#78BE20',
	    Mixed: '#009CA6',
	    Energy: '#AF272F'
        }
    }
});
