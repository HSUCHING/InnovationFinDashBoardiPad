/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 11/1/12
 * Time: 2:56 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InnovationFinDashBoard.view.PieChart', {
    xtype: 'piechart',
    extend: 'Ext.chart.Chart',
    config: {
        title: 'Pie',
        iconCls: 'pie',
        cls: 'chartpanel',
        animate: true,
        shadow:	true,
        store:'ChartStore',
        xtype: 'chart',
        insetPadding: 30,
        interactions: [
            {
                type: 'rotate'
            },{
                type:'itemhighlight'
            }
        ],
        series: [{
            type: 'pie',
            field:'CompanyA',
            animate: true,
            interactions: ['rotate', 'reset'],
            highlight: true,
//            angleField: 'CompanyA', //bind angle span to visits
//            lengthField: 'CompanyB', //bind pie slice length to views
//            highlight: {
//                segment: {
//                    margin: 20
//                }
//            },
            label: {
                field: 'Qua',   //bind label text to name
                display: 'rotate', //rotate labels (also middle, out).
                font: '14px "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
//                contrast: true
            },
            style: {
                'stroke-width': 1,
                'stroke': '#fff'
            }
            //add renderer
//            renderer: function(sprite, record, attr, index, store) {
//                var value = (record.get('CompanyA') >> 0) % 9;
//                var color = [ "#94ae0a", "#115fa6","#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"][value];
//                return Ext.apply(attr, {
//                    fill: color
//                });
//            }
        }]
    }

})