/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/31/12
 * Time: 5:20 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("InnovationFinDashBoard.controller.TabController", {
    extend: 'Ext.app.Controller',
    config: {
        id: 'Tabcontroller',
        refs: {
//            tabview:'#tabPanel'

        },
        control: {
            tabview:{
//                show:'activeTableView'
            }

        }
    },
//    activeTableView:function(item){
////        console.log(item.parent.parent.context);
//        Ext.Ajax.request({
//            url:'resources/json/table.json',
////                            url:'http://localhost:8080/KPI_Dashboard/Servlet?appid=1&type=table&tableitem='+tableobj.parent.parent.context,
//            success:function(response,opts){
//
//                var tablevdata=Ext.decode(response.responseText);
//                var tpl = new Ext.XTemplate('<table id="tableshow">',
//                    '<thead>',
//                    '<tr>',
//                    '<th class="theadsidetitle left">{app}</th>',
//                    '<th class="theadside">{field1}</th>',
//                    '<th class="theadside">{field2}</th>',
//                    '<th class="theadside">{field3}</th>',
////                                    '<th class="theadside">{field4}</th>',
//                    '<th class="theadside right">{value}</th>',
//                    '</tr>',
//                    '</thead>',
//                    '<tbody>',
//                    '<tpl for="items">',
//                    '<tr class="choice" onclick="activateThisColumn(\'choice\',this)">',
//                    '<th class="left">{#}</th>',
//                    '<th><tpl if="field1Value!=&quot;&quot;">{field1Value}</tpl><tpl if="field1Value==&quot;&quot;">NULL</tpl></th>',
//                    '<th><tpl if="field2Value!=&quot;&quot;">{field2Value}</tpl><tpl if="field2Value==&quot;&quot;">NULL</tpl></th>',
//                    '<th><tpl if="field3Value!=&quot;&quot;">{field3Value}</tpl><tpl if="field3Value==&quot;&quot;">NULL</tpl></th>',
////                                        '<th><tpl if="field4Value!=&quot;&quot;">{field4Value}</tpl><tpl if="field4Value==&quot;&quot;">NULL</tpl></th>',
//                    '<th class="right"><tpl if="value!=&quot;&quot;">{value}</tpl><tpl if="value==&quot;&quot;">0</tpl></th>',
//                    '</tr>',
//                    '</tpl>',
//                    '</tbody>',
//                    '</table>');
//
//                var tplHtml=tpl.apply(tablevdata);
//                Ext.getCmp('tabledataview').setHtml(tplHtml);
//            },
//            failure:function(response,opts){
//                console.log("Error");
//            }
//        })
//    }
})