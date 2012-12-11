/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/31/12
 * Time: 5:05 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/30/12
 * Time: 1:11 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define("InnovationFinDashBoard.controller.NaviController", {
    extend: 'Ext.app.Controller',
    config: {
        id: 'Navicontroller',
        refs: {
            naviview:'#myPanel',
            ForwardToTab:'button[action=forwardToTab]',
            ForwardToTree:'button[action=forwardToTree]'
        },
        control: {
            naviview:{
                push:'pushviewnavi',
                pop:'popviewnavi'
            },
            ForwardToTab:{
                tap:'forwardToTab'
            },
            ForwardToTree:{
                tap:'forwardToTree'
            }

        }
    },

    pushviewnavi:function(navi,obj,eOpts){
        if(obj.id=="treeview"){
            this.pushtreeview(navi,obj,eOpts);
            Ext.getCmp('settingpanel').show();
        }
    },
    popviewnavi:function(navi,obj,eOpts){
        if(obj.id=="treeview"){
            Ext.getCmp('settingpanel').hide();
        }
    },

    pushtreeview: function(navi,treeobj,eOpts) {

//        Ext.getCmp('forwardBtn').show();
//        Ext.getCmp('forwardBtn').disable();
        var margin = {
                top: 40,
                right: 100,
                bottom: 20,
                left: 120
            },
            width = 900 - margin.right - margin.left,
            height = 650 - margin.top - margin.bottom,
            i = 0,
            duration = 500,
            root;

        var tree = d3.layout.tree().size([height, width]);

        var diagonal = d3.svg.diagonal().projection(function(d) {
            return [d.y, d.x];
        });

        var vis = d3.select("#paneltreeview").append("svg").attr("width", width + margin.right + margin.left).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var defstemp=vis.append("defs").append("linearGradient").attr("id","grad1").attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%");
        defstemp.append("stop").attr("offset","0%").style("stop-color","rgb(255,255,255)").style("stop-opacity","1");
        defstemp.append("stop").attr("offset","90%").style("stop-color","rgb(144,144,144)").style("stop-opacity","1");
        defstemp.append("stop").attr("offset","100%").style("stop-color","rgb(50,50,50)").style("stop-opacity","0.5");

        var defstempbottom=vis.append("defs").append("linearGradient").attr("id","grad2").attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%");
        defstempbottom.append("stop").attr("offset","0%").style("stop-color","rgb(20,20,20)").style("stop-opacity","1");
        defstempbottom.append("stop").attr("offset","90%").style("stop-color","rgb(0,0,0)").style("stop-opacity","1");
        defstempbottom.append("stop").attr("offset","100%").style("stop-color","rgb(50,50,50)").style("stop-opacity","1");

        var defstempbottomred=vis.append("defs").append("linearGradient").attr("id","grad3").attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%");
        defstempbottomred.append("stop").attr("offset","0%").style("stop-color","rgb(208,14,14)").style("stop-opacity","1");
        defstempbottomred.append("stop").attr("offset","90%").style("stop-color","rgb(176,0,0)").style("stop-opacity","1");
        defstempbottomred.append("stop").attr("offset","100%").style("stop-color","rgb(117,0,0)").style("stop-opacity","1");




//        d3.json("http://10.58.68.233:8080/KPI_Dashboard/Servlet?appid=1&type=tree",
        d3.json("resources/json/tree/tree.json",
            function(json) {
                //    d3.json(jsonresponse, function(json) {
                root = json;
                root.x0 = height / 2;
                root.y0 = 0;

                function collapse(d) {
                    if (d.children) {
                        d._children = d.children;
                        d._children.forEach(collapse);
                        d.children = null;
                    }
                }

                //                root.children.forEach(collapse);
                update(root);
            });

        function update(source) {

            // Compute the new tree layout.
            var nodes = tree.nodes(root).reverse();

            // Normalize for fixed-depth.
            nodes.forEach(function(d) {
                d.y = d.depth * 180;
            });

            // Update the nodes…
            var node = vis.selectAll("g.node").data(nodes,
                function(d) {
                    return d.id || (d.id = ++i);
                });

            // Enter any new nodes at the parent's previous position.
//            var nodeEnter = node.enter().append("g").attr("class", "node").attr("transform",
//                function(d) {
//                    return "translate(" + source.y0 + "," + source.x0 + ")";
//                }).on("mouseover",mouseover).on("click",click).on("mouseout",blur);

              var nodeEnter = node.enter().append("g").attr("class", "node").attr("title",function(d){return "<div>Actual Value: "+d.value+";</div> <div style='height: 10px;'></div> <div>Target Value: Null</div>";}).attr("transform",
                function(d) {
                    return "translate(" + source.y0 + "," + source.x0 + ")";
                }).on("mouseover",mouseover).on("mouseout",mouseout);


            nodeEnter.append("rect").attr("x",-80).attr("class", "tip")
                .attr("y",-25).attr("width",90).attr("height",50).attr("rx",5).attr("ry",5).style("fill","url(#grad1)").style("stroke","grey");

            $(function(){
                $(".node").tipTip({maxWidth: "400px",defaultPosition:"top"});
            });

            var nodetext=nodeEnter.append("text").attr("x","-40").attr("y", function(d){
                    if(d.name=="+"||d.name=="-"||d.name=="*"||d.name=="/"){
                        return "20"
                    } else{
                        return "5";
                    }}).attr("text-anchor",
                function(d) {
                    return d.children || d._children ? "middle": "middle";
                }).text(function(d) {
                    if(d.name.indexOf(" ")!=-1){
//                        var texttemp=d.name.split(" ");
//                        var cc;
//                        var svgNS = "http://www.w3.org/2000/svg";
//                        var tspan_element = document.createElementNS(svgNS, "tspan");
//                        var text_node=document.createTextNode("Helloooooooo");
//                        tspan_element.setAttributeNS(null,"x",-40);
//                        tspan_element.setAttributeNS(null,"y",5);
//                        tspan_element.appendChild(text_node);
//                        this.appendChild(tspan_element);
////                        for(cc in texttemp){
////                            this.append("svg:tspan").text(cc);
////                        }
                    }else{
                        return d.name;
                    }
                }).style("fill-opacity", 1e-6).style("fill","black").style("font-size",function(d){
                    if(d.name=="+"||d.name=="-"||d.name=="*"||d.name=="/"){
                        return "25"
                    }else{
                        return "15"
                    }
                });


            nodetext.append("tspan").text(function(d){
                if(d.name.indexOf(" ")!=-1){
                    var texttemp=d.name.split(" ");
                    var cc;
                    var i;
                    var svgNS = "http://www.w3.org/2000/svg";
                    var tspan_element;
                    var text_node;
                    for(i=0;i<texttemp.length;i++){
                        cc=texttemp[i];
                        tspan_element = document.createElementNS(svgNS, "tspan");
//                        tspan_element.setAttributeNS(null,"dx",0-i*50);
                        if(i>0){
                            tspan_element.setAttributeNS(null,"x",-35);
                        }
                        tspan_element.setAttributeNS(null,"y",i*15+(-10));
                        text_node=document.createTextNode(cc);
                        tspan_element.appendChild(text_node);
                        this.parentElement.appendChild(tspan_element);
                    }
                    return null;
                }else{
                    return null;
                }

            });


            nodeEnter.append("rect").attr("x",-80).attr("y",28).attr("width",90).attr("height",20).attr("rx",2).attr("ry",2)
                .style("fill",function(d){
                    if(d.name=="Return On Investment"){
                        return "url(#grad3)"
                    }else{
                        return "url(#grad2)"
                    }
                }).style("fill-opacity", 0.8).style("stroke",function(d){
                    if(d.name=="Return On Investment"){
                        return "#9E0000"
                    }else{
                        return "#3F3F3F"
                    }
                });

            nodeEnter.append("text").attr("x","-40").attr("y", "40").attr("text-anchor",
                function(d) {
                    return d.children || d._children ? "middle": "middle";
                }).text(function(d) {
                    if(d.name=="+"||d.name=="-"||d.name=="*"||d.name=="/"){
                        var temp=this.parentElement.getElementsByTagName("rect");
                        while(temp.length!=0){
                            this.parentElement.removeChild(temp[0]);
                        }
                    }
                    if(d.value>=0)
                        return d.value;
                    else if(d.value<0)
                        return d.value*(-1);
                    else return "";
                }).style("fill-opacity", 1).style("fill","white").style("font-size","15");


            // Transition nodes to their new position.
            var nodeUpdate = node.transition().duration(duration).attr("transform",
                function(d) {
                    return "translate(" + d.y + "," + d.x + ")";
                });

            nodeUpdate.select("circle").attr("r", 15).style("fill",
                function(d) {
                    return d._children ? "#470759": "magenta";
                });

            nodeUpdate.select("text").style("fill-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            var nodeExit = node.exit().transition().duration(duration).attr("transform",
                function(d) {
                    return "translate(" + source.y + "," + source.x + ")";
                }).remove();

            nodeExit.select("circle").attr("r", 1e-6);

            nodeExit.select("text").style("fill-opacity", 1e-6);

            // Update the links…
            var link = vis.selectAll("path.link").data(tree.links(nodes),
                function(d) {
                    return d.target.id;
                });

            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g").attr("class", "link").attr("d",
                function(d) {
                    var o = {
                        x: source.x0,
                        y: source.y0
                    };
                    return diagonal({
                        source: o,
                        target: o
                    });
                });

            // Transition links to their new position.
            link.transition().duration(duration).attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition().duration(duration).attr("d",
                function(d) {
                    var o = {
                        x: source.x,
                        y: source.y
                    };
                    return diagonal({
                        source: o,
                        target: o
                    });
                }).remove();

            // Stash the old positions for transition.
            nodes.forEach(function(d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });

            link[0][1].setAttribute('opacity', '0');
            link[0][3].setAttribute('opacity', '0');
            link[0][6].setAttribute('opacity', '0');
            link[0][9].setAttribute('opacity', '0');
            link[0][11].setAttribute('opacity', '0');
            link[0][13].setAttribute('opacity', '0');
            link[0][16].setAttribute('opacity', '0');
            link[0][19].setAttribute('opacity', '0');
            link[0][22].setAttribute('opacity', '0');
            temp=null;
        }
        // Toggle children on click.
//        function click(d) {
//            if (d.children) {
//                d._children = d.children;
//                d.children = null;
//            } else {
//                d.children = d._children;
//                d._children = null;
//            }
//
//            update(d);
//            if (! (d.children || d._children)) {
//                naviTo(d);
//            }
//            naviTo(d);
//        }

        function mouseover(d){
            if(temp!=null){
                temp.childNodes[0].style.stroke="#808080";
            }
            temp=this;
            var operationmark=d.name;
            if(operationmark=="+"||operationmark=="-"||operationmark=="*"||operationmark=="/"){
//                Ext.getCmp('forwardBtn').hide();
            }else{
                if(d.name=="Return On Investment"){
                    this.parentElement.getElementsByTagName("path")[0].setAttribute('class','link red');
                    this.parentElement.getElementsByTagName("path")[5].setAttribute('class','link red');
                    this.parentElement.getElementsByTagName("path")[23].setAttribute('class','link red');
                    var i;
                    var nodeobj;
                    var nodetemp=this.parentElement.getElementsByClassName("node");
                    for(i=0;i<nodetemp.length;i++){
                        nodeobj=nodetemp[i];
                        if(nodeobj.getElementsByTagName("text")[0].textContent=="ProfitMargin"||nodeobj.getElementsByTagName("text")[0].textContent=="EarningsBeforeInterestandTax"||nodeobj.getElementsByTagName("text")[0].textContent=="OperatingIncome"){
                            nodeobj.getElementsByTagName("rect")[1].style.fill="red";
                            nodeobj.getElementsByTagName("rect")[1].style.stroke="#9e0000";
                        }
                    }
                }
                this.childNodes[0].style.stroke="yellow";
                Ext.getCmp('flipbutton').enable();
                Ext.getCmp('flipbutton').addCls('rightflipenable');
                Ext.getCmp('flipbutton').setText(d.name);
            }
        }

        function mouseout(d){
//            this.childNodes[0].style.stroke="#808080";
//            Ext.getCmp('flipbutton').disable();
//            this.lastChild.style.fillOpacity=0.5;
        }

    },

    naviTo:function(selectcontent) {
//        var tabview = new InnovationFinDashBoard.view.TabViewShow({
//            dupontComponent: selectcontent,
//            title:selectcontent
//        });
        var tabview = new InnovationFinDashBoard.view.TabView({
            dupontComponent: selectcontent,
            title:selectcontent
        });
        Ext.getCmp('myPanel').push(tabview);
        temp.childNodes[0].style.stroke="#808080";
        Ext.getCmp('navi').items.items[0].hide();
    },

    forwardToTab:function(btn){
        this.naviTo(btn.getText());
    },
    forwardToTree:function(btn){
        Ext.getCmp('myPanel').pop();
        Ext.getCmp('navi').items.items[0].show();

    }

})