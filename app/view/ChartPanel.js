/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/30/12
 * Time: 3:42 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InnovationFinDashBoard.view.ChartPanel', {
    extend : 'Ext.TabPanel',
    xtype : 'chartpanel',

    config:{
        cls:'chartpanel',
        layout:'card',
//        height:'100%',
        tabBar:{
            docked:'top',
            layout:{
                pack:'center'
            }
        },
        ui: 'light',
        cardSwitchAnimation: {
            type: 'slide'
        },
        items:[{
            xtype:'columnchart'
        },{
            xtype:'piechart'
        }]

    }

})