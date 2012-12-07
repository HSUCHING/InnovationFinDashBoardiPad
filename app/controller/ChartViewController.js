/**
 * Created with JetBrains WebStorm.
 * User: Hsuching
 * Date: 12-10-21
 * Time: 上午11:27
 * To change this template use File | Settings | File Templates.
 */

Ext.define("InnovationFinDashBoard.controller.ChartViewController",{
    extend: 'Ext.app.Controller',

    config:{
        id:'chartviewcontroller',
        refs:{
            ChartView:'[xtype=chartview]',
            DimensionBar:'#dimensionbar',
            DimensionBar2:'#dimensionbar2',

            mypanel:'#myPanel',
            tabpanel:'#tabPanel',
            imgpanel:'#dupont',
//            DimensionBar
            DimensionItem : '[xtype=dimensionitem]',
//            AddDimensionBar : '[xtype=adddimensionview]',

            DimensionSideBar:'#dimensionsidebar',

//            Button
            SetDimensionButton:'button[action=setDimension]',
            AddDimensionButton:'button[action=addDimension]'
        },

        control:{
            SetDimensionButton:{
                tap:'settingDimensions'
            },

            AddDimensionButton:{
                tap:'addDimensions'
            }

        }
    },

    init : function() {
//        Ext.getStore('DimensionStore').on('load', this.renderDimensions, this);
//        Ext.getStore('DimensionStore').load(this.renderDimensions, this);

    },

    renderDimensions: function() {
        console.log(this.getTabpanel());
        console.log(this.getImgpanel());
        var DimBar =  this.getDimensionBar();
        console.log(Ext.getCmp('chartView'));
        console.log("Dimbar:"+DimBar);
        var DimItem =  this.getDimensionItem();
        console.log(DimItem);
        console.log(this.getDimensionSideBar());
//        var AddDimView = this.getAddDimensionBar();
        var dimensions = Ext.getStore('DimensionStore').getData().items;
        console.log(dimensions);
        var selectedDimensions = new Array();
        var deselectedDimensions = new Array();
        for(var key in dimensions){
            if(dimensions[key].data.selected){
                selectedDimensions.push(dimensions[key]);
            }else{
                deselectedDimensions.push(dimensions[key]);
            };
        };
        for(var key in selectedDimensions){
            DimBar.getItems().items.push({
                xtype: 'dimensionitem',
                html: selectedDimensions[key].data.name
            });
        };
//        for(var key in deselectedDimensions){
//            AddDimView.addTile({
//                xtype: 'dimensiontile',
//                name: deselectedDimensions[key].data.name
//            });
//        };
    },

    settingDimensions:function(){
//        this.renderDimensions();
        var temp=this.getDimensionBar().getItems().items;
        if(temp[0].items.items[2].getHidden()==true){
            for(var i= 0,cc=temp[i];i<temp.length;i++,cc=temp[i]){
//                cc.items.items[0].show();
                cc.items.items[2].show();
            }
            temp=this.getDimensionBar2().getItems().items;
            for(var i= 0,cc=temp[i];i<temp.length;i++,cc=temp[i]){
                cc.items.items[0].show();
//                cc.items.items[2].show();
            }
        }else{
            for(var i= 0,cc=temp[i];i<temp.length;i++,cc=temp[i]){
//                cc.items.items[0].hide();
                cc.items.items[2].hide();
            }
            temp=this.getDimensionBar2().getItems().items;
            for(var i= 0,cc=temp[i];i<temp.length;i++,cc=temp[i]){
                cc.items.items[0].hide();
//                cc.items.items[2].hide();
            }
        }
    },
    addDimensions:function(){
        if(this.getDimensionBar2().getHidden()==true)
            this.getDimensionBar2().show();
        else
            this.getDimensionBar2().hide();
    },

    loadDimension:function(){
//        Ext.Msg.alert("aa");
    }


})