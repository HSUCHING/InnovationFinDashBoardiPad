/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/30/12
 * Time: 4:11 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InnovationFinDashBoard.view.ColumnChart', {
    xtype: 'columnchart',
    extend: 'Ext.chart.Chart',
    config: {
        title: 'Column',
        iconCls: 'column',
        cls: 'chartpanel',
        id:'columnchart',
//        interactions: ['reset', {
//            type: 'panzoom'
//        }, {
//            type: 'iteminfo',
//            gesture: 'tap',
//            listeners: {
//                show: function (interaction, item, panel) {
//                    FinChart.popup(item, panel);
//                }
//            }
//        }],
        animate: true,
        shadow:	true,
        store:'ChartStore',
        legend: {
            position: {
                portrait: 'bottom',
                landscape: 'right'
            },
            labelFont: '11px Arial'
        },

        axes: [
            {
                type: 'Numeric',
                position: 'left',
                label: {
//                    text:'Text',
                    font: '11px Arial',
                    fill:'yellow'
                },
                adjustMinimumByMajorUnit: 0,
                fields: ['Q1', 'Q2', 'Q3', 'Q4'],
                title: 'Volume'

            },
            {
                type: 'Category',
                position: 'bottom',
                fields: ['Company'],
                label:{
                    font: '15px Arial',
                    fill:'yellow'
                },
                title: 'Company'
            }
        ],
        legend: {
            position: Ext.os.is.Phone ? 'left' : 'top'
        },
        series: [
            {
                type: 'column',
                xField: 'Company',
                yField: ['Q1', 'Q2', 'Q3', 'Q3'],
                axis: 'left',
                highlight: true,
                title: ['Q1', 'Q2', 'Q3', 'Q4'],
                showInLegend: true
            }
        ]


    }
});