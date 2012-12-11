/**
 * Created with JetBrains WebStorm.
 * User: Hsuching
 * Date: 12-10-21
 * Time: 上午10:28
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InnovationFinDashBoard.view.ChartView', {
    extend : 'Ext.Panel',
    xtype : 'chartview',
    id:'chartView',
    config : {
        layout:{
            type:'vbox',
            align:'stretch'
        },

//        style:{"border":"1px solid red"},
        height:'100%',
        items:[{
//            flex:1,
            xtype:'panel',
            items:[{
                xtype : 'panel',
                id: 'dimensionbar',
//                scrollable : {
//                    direction : 'horizontal'
////                    slotSnapSize : {
////                        x : 180,
////                        y : 5
////                    }
//                },
                height:'100%',
                layout:{
                    type:'hbox',
                    align:'center',
                    pack:'left'
                },
                defaults:{
                    draggable:true,
                    constrain: true
                },
                items:[{
                    xtype:'dimensionitem1',id:'dimensionitem1'
                },{
                    xtype:'dimensionitem2',id:'dimensionitem2'
                },{
                    xtype:'dimensionitem3',id:'dimensionitem3'
                },{
                    xtype:'dimensionitem4',id:'dimensionitem4',hidden:true
                },{
                    xtype:'dimensionitem5',id:'dimensionitem5',hidden:true
                }]
            },{
                xtype : 'toolbar',
                id:'toolbartop',
                docked : 'top',
                height : 30
            },{
                xtype : 'toolbar',
                docked : 'bottom',
                height : 30,
                items : [{
                    xtype : 'button',
                    iconCls : 'arrow_up',
                    docked : 'right',
                    id:'upbutton',
                    iconAlign : 'top',
                    height:25,
                    iconMask : true,
                    handler:function(button,event){
                        console.log(button);
                        button.setHidden(true);
                        Ext.getCmp('downbutton').setHidden(false);
                        Ext.getCmp('toolbartop').setHidden(true);
                        Ext.getCmp('dimensionsidebar').setHidden(true);
                        Ext.getCmp('dimensionbar').setHidden(true);
                        Ext.getCmp('dimensionbar2').hide();
                    }
//                action : 'hideDimensionView'
                }, {
                    xtype : 'button',
                    docked : 'right',
                    id:'downbutton',
                    iconCls : 'arrow_down',
                    iconAlign : 'top',
                    height:25,
                    iconMask : true,
//                action : 'showDimensionView',
                    hidden : true,
                    handler:function(button,event){
                        console.log(button);
                        button.setHidden(true);
                        Ext.getCmp('upbutton').setHidden(false);
                        Ext.getCmp('dimensionbar').show();
                        Ext.getCmp('toolbartop').setHidden(false);
                        Ext.getCmp('dimensionsidebar').setHidden(false);
                        Ext.getCmp('dimensionbar').setHidden(false);
                    }
                } ]
            }, {
                xtype : 'toolbar',
                id : 'dimensionsidebar',
                docked : 'right',
                width : 55,
                items : [{
                    xtype : 'spacer'
                }, {
                    xtype : 'button',
                    width : 40,
                    iconCls : 'settings',
                    iconAlign : 'top',
                    iconMask : true,
                    action : 'setDimension'
                }, {
                    xtype : 'spacer',
                    height:10
                }, {
                    xtype : 'button',
                    width : 40,
                    iconCls : 'add',
                    iconAlign : 'top',
                    iconMask : true,
                    action : 'addDimension'
                }, {
                    xtype : 'spacer'
                }]
            }]
        },{
//            flex:1,
            xtype:'panel',
            hidden:true,
            id: 'dimensionbar2',
//                scrollable : {
//                    direction : 'horizontal'
////                    slotSnapSize : {
////                        x : 180,
////                        y : 5
////                    }
//                },
            height:'100%',
            layout:{
                    type:'hbox',
                    align:'center',
                    pack:'left'
            },
            items:[{
                xtype:'dimensionitem1',id:'dimensionitem11',hidden:true
            },{
                xtype:'dimensionitem2',id:'dimensionitem22',hidden:true
            },{
                xtype:'dimensionitem3',id:'dimensionitem33',hidden:true
            },{
                xtype:'dimensionitem4',id:'dimensionitem44'
            },{
                xtype:'dimensionitem5',id:'dimensionitem55'
            }]

        },{
//            flex:3,
            xtype:'panel',
            layout:{
                type:'hbox',
                align:'stretch',
                pack:'center'
            },
            items:[{
                flex:1,
//                height:'100%',
                id:'leftmap',
                xtype:'panel'
            },{
                flex:1,
//                height:'100%',
                id:'rightchart',
                cls:'rightchart',
                showed:false,
                hidden:true,
                xtype:'panel'
            }]
        }]
    }
})
