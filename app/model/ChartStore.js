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
                name:'Qua',type:'string'
            },{
                name:'CompanyA',type:'int'
            },{
                name:'CompanyB',type:'int'
            },{
                name:'CompanyC',type:'int'
            },{
                name:'CompanyD',type:'int'
            }]
    }

});