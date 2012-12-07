/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/30/12
 * Time: 5:36 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InnovationFinDashBoard.store.ChartStore', {
    extend: 'Ext.data.JsonStore',
    config:{
        model:'InnovationFinDashBoard.model.ChartStore',
        autoLoad:true,
        proxy:{
            type:'ajax',
            url:'resources/json/chart/chartstore.json',
            reader:{
                type:'json',
                rootProperty: 'items'
            }
        }
    }
})
