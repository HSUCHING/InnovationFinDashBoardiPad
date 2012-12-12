/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/24/12
 * Time: 3:53 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define("InnovationFinDashBoard.view.MapPanel", {
    extend: 'Ext.Panel',
    xtype: 'mapPanel',

    config: {

        items: [{
            xtype: "map",
            id: 'map',
            width: '100%',
//            height:'100%',
            height: 525,
            style: {
                "text-align": "center",
                "color": "black"
            },
            //                    useCurrentLocation:true
            mapOptions: {
                center: new google.maps.LatLng(30.66, 104.06),
                zoom: 3
                //                        navigationControlOptions: {
                //                            style: google.maps.NavigationControlStyle.DEFAULT
                //                        }
            },
            listeners: {
                maprender: function(comp, map) {

                    var infoBubble1 = new InfoBubble({
                        map: map,
                        content: '<div class="phoneytext">Shanghai</div>',
                        position: new google.maps.LatLng(31.23, 121.47),
                        maxWidth:150,
                        maxHeight:50,
                        shadowStyle: 1,
                        padding: 0,
                        backgroundColor: 'rgb(57,57,57)',
                        borderRadius: 4,
                        arrowSize: 10,
                        borderWidth: 1,
                        borderColor: '#2c2c2c',
                        disableAutoPan: true,
                        hideCloseButton: true,
                        arrowPosition: 30,
                        backgroundClassName: 'phoney',
                        arrowStyle: 2
                    });

                    var infoBubble2 = new InfoBubble({
                        map: map,
                        content: '<div class="phoneytext">Beijing</div>',
                        position: new google.maps.LatLng(39.90, 116.40),
                        maxWidth:150,
                        maxHeight:50,
                        shadowStyle: 1,
                        padding: 0,
                        backgroundColor: 'rgb(57,57,57)',
                        borderRadius: 4,
                        arrowSize: 10,
                        borderWidth: 1,
                        borderColor: '#2c2c2c',
                        disableAutoPan: true,
                        hideCloseButton: true,
                        arrowPosition: 30,
                        backgroundClassName: 'phoney',
                        arrowStyle: 2
                    });


                    var infoBubble3 = new InfoBubble({
                        map: map,
                        content: '<div class="phoneytext">Chengdu</div>',
                        position: new google.maps.LatLng(30.67, 104.06),
                        maxWidth:150,
                        maxHeight:50,
                        shadowStyle: 1,
                        padding: 0,
                        backgroundColor: 'rgb(57,57,57)',
                        borderRadius: 4,
                        arrowSize: 10,
                        borderWidth: 1,
                        borderColor: '#2c2c2c',
                        disableAutoPan: true,
                        hideCloseButton: true,
                        arrowPosition: 30,
                        backgroundClassName: 'phoney',
                        arrowStyle: 2
                    });

                    var infoBubble4 = new InfoBubble({
                        map: map,
                        content: '<div class="phoneytext">Nanjing</div>',
//                        position: new google.maps.LatLng(32.04, 118.78),
                        maxWidth:150,
                        maxHeight:50,
                        shadowStyle: 1,
                        padding: 0,
                        backgroundColor: 'rgb(57,57,57)',
                        borderRadius: 4,
                        arrowSize: 10,
                        borderWidth: 1,
                        borderColor: '#2c2c2c',
                        disableAutoPan: true,
                        hideCloseButton: true,
                        arrowPosition: 30,
                        backgroundClassName: 'phoney',
                        arrowStyle: 2
                    });


                    //latlng
                    var latlngSh = new google.maps.LatLng(
                        //            纬度
                        //            coords.latitude,
                        31.23, 121.47
                        //            经度
                        //            coords.longitude
                    );

                    var latlngBj = new google.maps.LatLng(
                        //            纬度
                        //            coords.latitude,
                        39.90, 116.40
                        //            经度
                        //            coords.longitude
                    );

                    var latlngCd = new google.maps.LatLng(
                        //            纬度
                        //            coords.latitude,
                        30.67, 104.06
                        //            经度
                        //            coords.longitude
                    );

                    var latlngNj = new google.maps.LatLng(
                        //            纬度
                        //            coords.latitude,
                        32.04, 118.78
                        //            经度
                        //            coords.longitude
                    );


                    var marker1 = new google.maps.Marker({
                        position: latlngSh,
                        title: 'Shanghai',
                        map: map
                    });
                    var marker2 = new google.maps.Marker({
                        position: latlngBj,
                        title: 'Beijing',
                        map: map
                    });
                    var marker3 = new google.maps.Marker({
                        position: latlngCd,
                        title: 'Chengdu',
                        map: map
                    });
                    var marker4 = new google.maps.Marker({
                        position: latlngNj,
                        title: 'Nanjing',
                        map: map
                    });

                    //                            infowindow.open(map, marker);
                    var renderChart = function(marker) {
                        //                                infowindow.open(map, marker1);
                        switch (marker.title) {
                            case "Shanghai":
                            {
                                infowindowsh.open(map, marker);
                                break;
                            }
                            case "Beijing":
                            {
                                infowindowbj.open(map, marker);
                                break;
                            }
                            case "Chengdu":
                            {
                                infowindowcd.open(map, marker);
                                break;
                            }
                            case "Nanjing":
                            {
                                infowindownj.open(map, marker);
                                break;
                            }
                            default:
                            {
                                break;
                            }
                        }

                    };

                    google.maps.event.addListener(marker1, 'click',
                        function(event) {
//                            renderChart(marker1);
                            infoBubble1.open(map,marker1);
                            var store=Ext.getStore('ChartStore');
                            store.setProxy({
                                type:'ajax',
                                url:'resources/json/chart/chartstoresh.json',
                                reader:{
                                    type:'json',
                                    rootProperty: 'items'
                                }
                            });
                            store.load();
                            Ext.getCmp('columnchart').setStore(store);
                            Ext.getCmp('columnchart').getAxes().get('bottom').setTitle("Company");
                            Ext.getCmp('columnchart').redraw();
                            Ext.getCmp('piechart').setStore(store);
                            Ext.getCmp('piechart').redraw();

//                            store.data.items[0].data.Q1=18782;
//                            Ext.chart.getChart()
//                            if(Ext.getCmp('rightchart').showed==false){
//                                Ext.getCmp('rightchart').add({xtype:'chartpanel',height:525});
//                                Ext.getCmp('rightchart').show();
//                                Ext.getCmp('rightchart').showed=true;
//                            }
                        });
                    google.maps.event.addListener(marker2, 'click',
                        function(event) {
                            infoBubble2.open(map,marker2);
                            var store=Ext.getStore('ChartStore');
                            store.setProxy({
                                type:'ajax',
                                url:'resources/json/chart/chartstorebj.json',
                                reader:{
                                    type:'json',
                                    rootProperty: 'items'
                                }
                            });
                            store.load();

                            Ext.getCmp('columnchart').setStore(store);
                            Ext.getCmp('columnchart').getAxes().get('bottom').setTitle("Company");
                            Ext.getCmp('columnchart').redraw();
                            Ext.getCmp('piechart').setStore(store);
                            Ext.getCmp('piechart').redraw();
                        });
                    google.maps.event.addListener(marker3, 'click',
                        function(event) {
                            infoBubble3.open(map,marker3);
                            var store=Ext.getStore('ChartStore');
                            store.setProxy({
                                type:'ajax',
                                url:'resources/json/chart/chartstorecd.json',
                                reader:{
                                    type:'json',
                                    rootProperty: 'items'
                                }
                            });
                            store.load();
                            Ext.getCmp('columnchart').setStore(store);
                            Ext.getCmp('columnchart').getAxes().get('bottom').setTitle("Company");
                            Ext.getCmp('columnchart').redraw();
                            Ext.getCmp('piechart').setStore(store);
                            Ext.getCmp('piechart').redraw();
                        });
                    google.maps.event.addListener(marker4, 'click',
                        function(event) {
                            infoBubble4.open(map,marker4);
                            var store=Ext.getStore('ChartStore');
                            store.setProxy({
                                type:'ajax',
                                url:'resources/json/chart/chartstorenj.json',
                                reader:{
                                    type:'json',
                                    rootProperty: 'items'
                                }
                            });
                            store.load();
                            Ext.getCmp('columnchart').setStore(store);
                            Ext.getCmp('columnchart').getAxes().get('bottom').setTitle("Company");
                            Ext.getCmp('columnchart').redraw();
                            Ext.getCmp('piechart').setStore(store);
                            Ext.getCmp('piechart').redraw();
                        });
                    google.maps.event.addListener(marker2, 'click',
                        function(event) {
                            renderChart(marker2)
                        });
                }
            }
        }]
    }
})