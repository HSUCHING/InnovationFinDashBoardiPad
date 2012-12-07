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
            ForwardToTab:'button[action=forwardToTab]'

        },
        control: {
            naviview:{
                push:'pushviewnavi'
            },
            ForwardToTab:{
                tap:'forwardToTab'
            }

        }
    },

    pushviewnavi:function(navi,obj,eOpts){
        if(obj.id=="treeview"){
            this.pushtreeview(navi,obj,eOpts);
        }else if(obj.id=="myPanel"){
            Ext.getCmp('forwardBtn').hide();
        }else if(obj.id='tabPanel'){
            Ext.getCmp('forwardBtn').hide();
        }
    },

    pushtreeview: function(navi,treeobj,eOpts) {

        console.log(treeobj.appName);
        Ext.getCmp('forwardBtn').show();
        Ext.getCmp('forwardBtn').disable();
        var margin = {
                top: 20,
                right: 120,
                bottom: 20,
                left: 120
            },
            width = 1000 - margin.right - margin.left,
            height = 650 - margin.top - margin.bottom,
            i = 0,
            duration = 500,
            root;

        var tree = d3.layout.tree().size([height, width]);

        var diagonal = d3.svg.diagonal().projection(function(d) {
            return [d.y, d.x];
        });

        var vis = d3.select("#paneltreeview").append("svg").attr("width", width + margin.right + margin.left).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");



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

              var nodeEnter = node.enter().append("g").attr("class", "node").attr("transform",
                function(d) {
                    return "translate(" + source.y0 + "," + source.x0 + ")";
                }).on("mouseover",mouseover).on("mouseout",mouseout);



//            node.on("mouseover", click2);


            nodeEnter.append("circle").attr("r", 1e-6).style("fill",
                function(d) {
                    return d._children ? "#470759": "magenta";
                });
            //                nodeEnter.append("svg:rect")
            //                    .attr("class","box").attr("x",-100).attr("y",-10).attr("width",100).attr("height",50)
            //                    .style("fill", function(d) { return d._children ? "#470759" : "magenta"; });
            nodeEnter.append("text").attr("x",
                function(d) {
                    return d.children || d._children ? -20 : 20;
                }).attr("dy", ".35em").attr("text-anchor",
                function(d) {
                    return d.children || d._children ? "end": "start";
                }).text(function(d) {
                    return d.name;
                }).style("fill-opacity", 1e-6).style("fill","yellow");

            nodeEnter.append("text").attr("x",
                function(d) {
                    return d.children || d._children ? -20 : 20;
                }).attr("dy", "1.39em").attr("text-anchor",
                function(d) {
                    return d.children || d._children ? "end": "start";
                }).text(function(d) {
                    {if(d.value>=0) return d.value;else if(d.value<0) return d.value*(-1);else return "";}
                }).style("fill-opacity", 0.5).style("fill","red");



            console.log(nodeEnter);

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
            this.lastChild.style.fillOpacity=1;
            var operationmark=d.name;
            if(operationmark=="+"||operationmark=="-"||operationmark=="*"||operationmark=="/"){
                Ext.getCmp('forwardBtn').hide();
            }else{
                Ext.getCmp('forwardBtn').setText(d.name);
                Ext.getCmp('forwardBtn').show();
                Ext.getCmp('forwardBtn').enable();
            }
        }

        function mouseout(d){
            this.lastChild.style.fillOpacity=0.5;
        }

    },

    naviTo:function(selectcontent) {
        var tabview = new InnovationFinDashBoard.view.TabViewShow({
            dupontComponent: selectcontent,
            title:selectcontent
        });
        Ext.getCmp('myPanel').push(tabview);
    },

    forwardToTab:function(btn){
        this.naviTo(btn.getText());
    }

})