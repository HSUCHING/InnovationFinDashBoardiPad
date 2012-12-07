/**
 * Created with JetBrains WebStorm.
 * User: Hsuching
 * Date: 12-10-21
 * Time: 下午1:02
 * To change this template use File | Settings | File Templates.
 */


Ext.define("InnovationFinDashBoard.view.DimensionItem3", {
    extend: 'Ext.Panel',
    xtype: 'dimensionitem3',
//    id:'dimensionitem3',

    config: {
        clickable: true,
        name: 'default',
        layout: {
            type:'vbox',
            align:'center',
            pack:'center'
        },
        height: 100,
        defaults:{
            width: 150

        },
        items: [
            {
                xtype: 'button',
                flex: 1,
                docked:'top',
                text: 'Add',
                itemId: 'addButton',
                //action: 'addThisTile',
                ui: 'confirm',
                hidden: true,
                action:'addbutton',
                scope: this
            },
            {
                xtype: 'panel',
                id:'context',
                html:"Company Code",
                layout:{type:'vbox',align:'center',pack:'center'},
                style:{"text-align":"center","padding-top":"5%"},
                items:[{
                    xtype:'image',
                    width:60,
                    height:60,
                    mode:'img',
                    src:'resources/icons/dimension/Companycode.png'
                }],
                flex: 5

            },
            {
                xtype: 'button',
                flex: 1,
                docked:'bottom',
                itemId: 'removeButton',
                text:'Remove',
                //action: 'removeThisTile',
                ui: 'decline',
                hidden: true,
                action:'removebutton',
                scope: this
            }

        ]

    }}
    )

