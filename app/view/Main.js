Ext.define("InnovationFinDashBoard.view.Main", {
    extend: 'Ext.navigation.View',

    requires: ['Ext.Img'],

    config: {
        autoDestory: false,
        id: 'myPanel',
        fullscreen: true,
        cls: 'backgd',
//        useTitleForBackButtonText:true,
        navigationBar: {
            ui: 'dark',
            docked: 'top',
            cls: 'navibar',
            height: 80,
            items:[{
                xtype: 'button',
                ui: 'confirm-forward',
                id:'forwardBtn',
//                disabled:true,
                hidden:true,
                text:'forward',
                align: 'right',
                action: 'forwardToTab'
            }]
        },
        items: [{
            title: '<div class="hometop"></div>',
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'justify',
                fullscreen: true
            },
            items: [{
                id: 'homepanel1',
                xtype: 'panel',
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center',
                    fullscreen: true
                },
                defaults: {
                    width: 150,
                    height: 100,
                    mode: 'img',
                    cls: 'imgborder',
                    listeners: {
                        tap: function(img, ev) {
                            //                            Ext.Msg.alert(img.id);
                            //                            var tabview=new InnovationFinDashBoard.view.TabViewShow();
                            //                            Ext.getCmp('myPanel').push(
                            ////                                title:'Second',
                            ////                                html:'Second view!'
                            //                                tabview
                            ////                                {
                            ////                                    xtype:'tabViewShow',
                            ////                                    id:'tabPanel'
                            ////                                }
                            //                            )
//                            Ext.Msg.alert(img.id);

                            var treeview = new InnovationFinDashBoard.view.TreeView({
                                "appName": img.id
                            });
                            Ext.getCmp('myPanel').push(
                                treeview)
                        }
                    }
                },
                items: [{
                    xtype: 'image',
                    id: 'dupont',
                    html: 'Dupont',
                    src: 'resources/images/dupont.jpg'
                },
                    {
                        width: 150
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/Data_analysis.jpg'
                    },
                    {
                        width: 150
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/IDEA.jpg'
                    }]
            },
                {
                    id: 'homepanel2',
                    xtype: 'panel',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center',
                        fullscreen: true
                    },
                    defaults: {
                        width: 150,
                        height: 100,
                        mode: 'img',
                        listeners: {
                            tap: function(img, ev) {
                                Ext.Msg.alert(img.id);
                                Ext.getCmp('myPanel').push({
                                    title: 'Second',
                                    html: 'Second view!'
                                })

                            }
                        }
                    },
                    items: [{
                        xtype: 'image',
                        src: 'resources/images/FICOADD01.png',
                        flex: 1
                    },
                        {
                            width: 150
                        },
                        {
                            xtype: 'image',
                            src: 'resources/images/FICOADD02.jpg',
                            flex: 1
                        },
                        {
                            width: 150
                        },
                        {
                            xtype: 'image',
                            src: 'resources/images/FICOADD03.jpg',
                            flex: 1
                        }]
                },
                {
                    id: 'homepanel3',
                    xtype: 'panel',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center',
                        fullscreen: true
                    },
                    defaults: {
                        width: 150,
                        height: 100,
                        mode: 'img',
                        listeners: {
                            tap: function(img, ev) {
                                Ext.Msg.alert(img.id);
                                Ext.getCmp('myPanel').push({
                                    title: 'Second',
                                    html: 'Second view!'
                                })

                            }
                        }
                    },
                    items: [{
                        xtype: 'image',
                        src: 'resources/images/FICOADD04.jpg',
                        flex: 1
                    },
                        {
                            width: 150
                        },
                        {
                            xtype: 'image',
                            src: 'resources/images/FICOADD05.gif',
                            flex: 1
                        },
                        {
                            width: 150
                        },
                        {
                            xtype: 'image',
                            src: 'resources/images/FICOADD06.jpg',
                            flex: 1
                        }]
                }]

        }]
    },
    listeners:{
        pop:function(obj,view,eOpts){
            if(view.id="treeview"){
                treeExist=true;
            }
        }
    }

});