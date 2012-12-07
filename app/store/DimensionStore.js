/**
 * Created with JetBrains WebStorm.
 * User: Hsuching
 * Date: 12-10-21
 * Time: 下午12:32
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InnovationFinDashBoard.store.DimensionStore', {
    extend: 'Ext.data.JsonStore',

    config : {
        model: 'InnovationFinDashBoard.model.DimensionModel',
        proxy: {
            type: 'ajax',
            url : 'resources/json/dimension/dimensions.json',
            reader: {
                type: 'json',
                rootProperty: 'dimensions'
            }
        },
        autoLoad: true
    }

});