/**
 * Created with JetBrains WebStorm.
 * User: Hsuching
 * Date: 12-10-20
 * Time: 下午9:02
 * To change this template use File | Settings | File Templates.
 */
Ext.define("InnovationFinDashBoard.view.TreeView", {
    extend: 'Ext.Panel',
    xtype: 'treeview',

    config: {
        id: 'treeview',
        layout: {
            type: 'hbox',
            align:"stretch",
            pack:"justify"
        },
        items: [
            {
                xtype: 'panel',
                id: 'paneltreeview',
                docked:'left'
            },{
                width:50,
                xtype:'panel',
                layout:{
                    type:'fit'
                },
                docked:'right',
                items:[{
                    xtype:'button',
                    id:'flipbutton',
//                    ui:'normal',
                    disabled:true,
                    style:{"text-indent": "300px"},
                    disabledCls:'rightflipdisable',
//                    cls:'rightflipenable'
                    action: 'forwardToTab'
                }]
            }]

    }
})