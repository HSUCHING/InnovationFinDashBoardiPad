/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/30/12
 * Time: 4:11 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InnovationFinDashBoard.view.BarChart', {
    xtype: 'barchart',
    extend: 'Ext.chart.Chart',
    config: {
        title: 'Bar',
        iconCls: 'Bar',
        cls: 'chartpanel',
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
        shadow:	false,
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
                fields: ['CompanyA', 'CompanyB', 'CompanyC', 'CompanyD'],
                title: 'Volume'

            },
            {
                type: 'Category',
                position: 'bottom',
                fields: ['Qua'],
                label:{
                    font: '15px Arial',
                    fill:'yellow'
                },
                title: 'Quarter'
            }
        ],
        legend: {
            position: Ext.os.is.Phone ? 'left' : 'top'
        },
        series: [
            {
                type: 'column',
                xField: 'Qua',
                yField: ['CompanyA', 'CompanyB', 'CompanyC', 'CompanyD'],
                axis: 'left',
                highlight: true,
                title: ['SAP_SH', 'SAP_BJ', 'SAP_CD', 'SAP_NJ'],
                showInLegend: true
            }
        ]


    }
});