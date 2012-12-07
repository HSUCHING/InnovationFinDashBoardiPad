/**
 * Created with JetBrains WebStorm.
 * User: Hsuching
 * Date: 12-10-21
 * Time: 下午12:36
 * To change this template use File | Settings | File Templates.
 */
Ext.define('InnovationFinDashBoard.model.DimensionModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id',  type: 'int'},
            {name: 'name',   type: 'string'},
            {name: 'selected', type: 'boolean'}
        ]
    }

//    setSelected: function(select){
//        this.set('selected', select);
//    }
});