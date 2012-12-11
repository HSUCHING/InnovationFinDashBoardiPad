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

                    var infowindowsh = new google.maps.InfoWindow({
                        content: '上海(4 Company)'
                    });
                    var infowindowbj = new google.maps.InfoWindow({
                        content: '北京(4 Company)'
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
                            default:
                            {
                                break;
                            }
                        }

                    };
                    google.maps.event.addListener(marker1, 'click',
                        function(event) {
                            renderChart(marker1);
                            if(Ext.getCmp('rightchart').showed==false){
                                Ext.getCmp('rightchart').add({xtype:'chartpanel',height:525});
                                Ext.getCmp('rightchart').show();
                                Ext.getCmp('rightchart').showed=true;
                            }
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