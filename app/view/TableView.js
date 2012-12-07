/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/18/12
 * Time: 12:25 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("InnovationFinDashBoard.view.TableView",{
    extend: 'Ext.Panel',
    xtype:'tableview',

    config:{
//        autoDestory:true,
        id:'tableview',
        layout:{
            type:'vbox',
            align:'stretch',
            pack:'center'
        },

        items:[{
            xtype: 'toolbar',
//            title:'我的标题栏',
            docked:'top',
//            height:40,
            items:[{
                xtype:'button',
                text:'View All Data',
                width:200,
                listeners:{
                    tap:function(){
                        console.log(this.parent.parent.context);
                        Ext.Ajax.request({
                            url:'resources/json/table.json',
//                            url:'http://10.58.68.233:8080/KPI_Dashboard/Servlet?appid=1&type=table&tableitem='+this.parent.parent.context,
                            success:function(response,opts){
//                                var obj=Ext.decode(response.responseText);
//                                console.log(obj);
//                                console.log(response.responseText);

                              var tablevdata=Ext.decode(response.responseText);
                              var tpl = new Ext.XTemplate('<table id="tableshow">',
                                    '<thead>',
                                    '<tr>',
                                    '<th class="theadsidetitle left">No.</th>',
                                    '<th class="theadside">{field1}</th>',
                                    '<th class="theadside">{field2}</th>',
                                    '<th class="theadside">{field3}</th>',
//                                    '<th class="theadside">{field4}</th>',
                                    '<th class="theadside right">{value}</th>',
                                    '</tr>',
                                    '</thead>',
                                    '<tbody>',
                                    '<tpl for="items">',
                                        '<tr class="choice" onclick="activateThisColumn(\'choice\',this)">',
                                        '<th class="left">{#}</th>',
                                        '<th><tpl if="field1Value!=&quot;&quot;">{field1Value}</tpl><tpl if="field1Value==&quot;&quot;">NULL</tpl></th>',
                                        '<th><tpl if="field2Value!=&quot;&quot;">{field2Value}</tpl><tpl if="field2Value==&quot;&quot;">NULL</tpl></th>',
                                        '<th><tpl if="field3Value!=&quot;&quot;">{field3Value}</tpl><tpl if="field3Value==&quot;&quot;">NULL</tpl></th>',
//                                        '<th><tpl if="field4Value!=&quot;&quot;">{field4Value}</tpl><tpl if="field4Value==&quot;&quot;">NULL</tpl></th>',
                                        '<th class="right"><tpl if="value!=&quot;&quot;">{value}</tpl><tpl if="value==&quot;&quot;">0</tpl></th>',
                                        '</tr>',
                                    '</tpl>',
                                    '</tbody>',
                                    '</table>');


//                              var tpl = new Ext.XTemplate('<table id="tableshow">',
//                                    '<thead>',
//                                    '<tr>',
//                                    '<th class="theadsidetitle left"></th>',
//                                    '<th class="theadside">Area</th>',
//                                    '<th class="theadside">Code</th>',
//                                    '<th class="theadside">Company</th>',
//                                    '<th class="theadside">Product</th>',
//                                    '<th class="theadside right">Value</th>',
//                                    '</tr>',
//                                    '</thead>',
//                                    '<tbody>',
//                                    '<tr class="choiceA" onclick="activateThisColumn(\'choiceA\')">',
//                                    '<th class="left">1</th>',
//                                    '<th>4,000</th>',
//                                    '<th>400</th>',
//                                    '<th>40</th>',
//                                    '<th>4</th>',
//                                    '<th class="right">None</th>',
//                                    '</tr>',
//                                    '<tr class="choiceB" onclick="activateThisColumn(\'choiceB\')">',
//                                    '<th class="left">2</th>',
//                                    '<th>4,000</th>',
//                                    '<th>400</th>',
//                                    '<th>40</th>',
//                                    '<th>4</th>',
//                                    '<th class="right">None</th>',
//                                    '</tr>',
//                                    '<tr class="choiceC" onclick="activateThisColumn(\'choiceC\')">',
//                                    '<th class="left">3</th>',
//                                    '<th>4,000</th>',
//                                    '<th>400</th>',
//                                    '<th>40</th>',
//                                    '<th>4</th>',
//                                    '<th class="right">None</th>',
//                                    '</tr>',
//                                    '<tr class="choiceD" onclick="activateThisColumn(\'choiceD\')">',
//                                    '<th class="left">4</th>',
//                                    '<th>4,000</th>',
//                                    '<th>400</th>',
//                                    '<th>40</th>',
//                                    '<th>4</th>',
//                                    '<th class="right">None</th>',
//                                    '</tr>',
//                                    '<tr class="choiceE" onclick="activateThisColumn(\'choiceE\')">',
//                                    '<th class="left">5</th>',
//                                    '<th>4,000</th>',
//                                    '<th>400</th>',
//                                    '<th>40</th>',
//                                    '<th>4</th>',
//                                    '<th class="right">None</th>',
//                                    '</tr>',
//                                    '</tbody>',
//
//                                    '</table>');

                                var tplHtml=tpl.apply(tablevdata);

//                                Ext.getCmp('tabledataview').add({xtype:'panel',html:this.parent.parent.context});
                                Ext.getCmp('tabledataview').setHtml(tplHtml);



                            },
                            failure:function(response,opts){
                                console.log("Error");
                            }
                        })

                    }
                }
            },{

                xtype:'spacer',
                width:10
            },{
                xtype:'image',
                src:'resources/icons/dividing.png',
                mode:'img',
                width:30,
                height:30
            },{

                xtype:'spacer',
                width:10

            },{
                xtype:'searchfield',
                id:'search',
                placeHolder:'请输入...',
                width:150
            },{
                xtype:'button',
                text:'Search Product',
                width:150,
//                handler:this.follow,
//                scope:this.parent.parent
                handler:function(){
                    this.parent.parent.follow();
                }
            },
            {
                xtype:'spacer',
                width:10
            },{
                xtype:'image',
                src:'resources/icons/dividing.png',
                mode:'img',
                width:30,
                height:30
            },{
                xtype:'spacer',
                width:10
            },{
                text:'Q1'
            },{
                text:'Q2'
            },{
                text:'Q3'
            },{
                text:'Q4'
            }]
        },{
            xtype:'panel',
            id:'tabledataview',
            layout:{
                type:'hbox',
                align:'center',
                pack:'center'
            },
            items:[{

            }
            ]
        }
        ]

    },

    follow:function(){
        console.log(this);
    }

})
