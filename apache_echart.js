var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;



init_the_chart();

function init_the_chart() {
    $.get('covid_data.json', function (_rawData) {
        run(_rawData);
    })
};
;



function run(_rawData) {

    // var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];
    var countries = ["Ha Noi", "TP HCM", "Bac Ninh", "Bac Giang","Binh Duong","Dong Nai","Long An","Tien Giang"];
    var datasetWithFilters = [];
    var seriesList = [];
    echarts.util.each(countries, function (country) {
        var datasetId = 'dataset_' + country;
        datasetWithFilters.push({
            id: datasetId,
            fromDatasetId: 'dataset_raw',
            transform: {
                type: 'filter',
                config: {
                    and: [
                        { dimension: 'Year', gte: 20210427 },
                        { dimension: 'Country', '=': country }
                    ]
                }
            }
        });
        seriesList.push({
            type: 'line',
            datasetId: datasetId,
            showSymbol: false,
            name: country,
            endLabel: {
                show: true,
                formatter: function (params) {
                    return params.value[0] + ': ' + params.value[1];
                }
            },
            labelLayout: {
                moveOverlap: 'shiftY'
            },
            emphasis: {
                focus: 'series'
            },
            encode: {
                x: 'Year',
                y: 'Income',
                label: ['Country', 'Income'],
                itemName: 'Year',
                tooltip: ['Income'],
            }
        });
    });

    option = {
        animationDuration: 30000,
        dataset: [{
            id: 'dataset_raw',
            source: _rawData
        }].concat(datasetWithFilters),
        title: {
            text: 'Covid cases since the outbreak'
        },
        tooltip: {
            order: 'valueDesc',
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            nameLocation: 'middle'
        },
        yAxis: {
            name: 'Cases'
        },
        grid: {
            right: 140
        },
        series: seriesList
    };

    myChart.setOption(option);

}

option && myChart.setOption(option);
