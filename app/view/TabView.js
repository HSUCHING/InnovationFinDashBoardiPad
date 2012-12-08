/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/17/12
 * Time: 6:20 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("InnovationFinDashBoard.view.TabView",{
    extend: 'Ext.Panel',

    config:{
        id:'TabView',
        fullscreen:true,
        layout: {
            type: 'hbox',
            align:"stretch",
            pack:"justify"
        },
        items:[{
            xtype: 'tabViewShow',
//                flex:5,
            id: 'tabPanel',
            width:'100%',
            height:'100%'
        },{
            xtype:'panel',
            docked:'left',
            width:50,
            layout:{
              type:'fit'
            },
            items:[{
                xtype:'button',
                id:'flipbuttonbackToTree',
                ui:'normal',
                cls:'leftflip',
                action: 'forwardToTree'
                }]
            }]
    }
});