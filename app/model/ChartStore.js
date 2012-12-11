/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/30/12
 * Time: 5:38 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InnovationFinDashBoard.model.ChartStore',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            {
                name:'Company',type:'string'
            },{
                name:'Q1',type:'int'
            },{
                name:'Q2',type:'int'
            },{
                name:'Q3',type:'int'
            },{
                name:'Q4',type:'int'
            }]
    }

});