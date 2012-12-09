/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/17/12
 * Time: 6:20 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("InnovationFinDashBoard.view.TabViewShow",{
    extend: 'Ext.TabPanel',
    xtype:'tabViewShow',

    config:{
        id:'tabPanel',
        ui:'dark',
        tabBarPosition:'bottom',

        fullscreen:true,
//        activeItem:1,
        layout:{animation:{type:'flip',direction:'right',duration:1000}},
        items:[
            {
                title:'Table View',
                xtype:'tableview',
                iconCls:'info'
            },
            {
                title:'Chart View',
                xtype:'chartview',
                iconCls:'locate'
            }],
        listeners:{
            activeitemchange:function(item,newValue,oldValue){
                console.log(oldValue);
                console.log(newValue);
                newValue.addCls('colorRed');

            },
            painted:function(item){
//                Ext.Msg.alert("Hello");
//                    var it=item.getItems();
//                    item.getItems().items[0].addCls('colorRed');
                console.log(item.getActiveItem().title);
                item.getActiveItem().context=this.parent.dupontComponent;
                console.log(this.parent.dupontComponent);
                return true;

            }
        }
    }

});