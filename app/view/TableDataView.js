/**
 * Created with JetBrains WebStorm.
 * User: Hsuching
 * Date: 12-10-20
 * Time: 下午9:29
 * To change this template use File | Settings | File Templates.
 */
Ext.define("InnovationFinDashBoard.view.TableDataView",{
    extend:'Ext.DataView',
    xtype:'tabledataview',
    config:{

//        id:'tabledataview',
        store: {
            fields: ['name', 'age'],
            data: [
                {name: 'Jamie',  age: 100},
                {name: 'Heloo',  age: 100}
            ]
        },
//        itemTpl: '<div>{name} is {age} years old</div>',

        itemTpl:new Ext.XTemplate('<table id="tableshow">',
            '<thead>',
            '<tr>',
                '<th class="theadsidetitle left">{data[0]}</th>',
                '<th class="theadside">Area</th>',
                '<th class="theadside">Code</th>',
                '<th class="theadside">Company</th>',
                '<th class="theadside">Product</th>',
                '<th class="theadside right">Value</th>',
            '</tr>',
            '</thead>',
'<tbody>',
    '<tr class="choiceA" onclick="activateThisColumn(\'choiceA\')">',
        '<th class="left">1</th>',
        '<th>4,000</th>',
        '<th>400</th>',
        '<th>40</th>',
        '<th>4</th>',
        '<th class="right">None</th>',
    '</tr>',
    '<tr class="choiceB" onclick="activateThisColumn(\'choiceB\')">',
        '<th class="left">2</th>',
        '<th>4,000</th>',
        '<th>400</th>',
        '<th>40</th>',
        '<th>4</th>',
        '<th class="right">None</th>',
    '</tr>',
    '<tr class="choiceC" onclick="activateThisColumn(\'choiceC\')">',
        '<th class="left">3</th>',
        '<th>4,000</th>',
        '<th>400</th>',
        '<th>40</th>',
        '<th>4</th>',
        '<th class="right">None</th>',
    '</tr>',
    '<tr class="choiceD" onclick="activateThisColumn(\'choiceD\')">',
        '<th class="left">4</th>',
        '<th>4,000</th>',
        '<th>400</th>',
        '<th>40</th>',
        '<th>4</th>',
        '<th class="right">None</th>',
   '</tr>',
    '<tr class="choiceE" onclick="activateThisColumn(\'choiceE\')">',
       '<th class="left">5</th>',
       '<th>4,000</th>',
        '<th>400</th>',
        '<th>40</th>',
        '<th>4</th>',
        '<th class="right">None</th>',
    '</tr>',
'</tbody>',

'</table>'),
        scrollable: false
    }

})



