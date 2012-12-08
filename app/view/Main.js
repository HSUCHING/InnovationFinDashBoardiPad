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
            id:'navi'
//            items:[{
//                xtype: 'button',
//                ui: 'confirm-forward',
//                id:'forwardBtn',
////                disabled:true,
//                hidden:true,
//                text:'forward',
//                align: 'right',
//                action: 'forwardToTab'
//            }]
        },
        items: [{
            title: '<div style="margin-top: 10px; padding-bottom: 10px; font-size: 30px;font-family: helvetica">InnovationFinDashBoard</div>',
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
                    width: 300,
                    height: 200,
                    mode: 'img',
                    cls: 'imgborder',
                    listeners: {
                        tap: function(img, ev) {
                            Ext.getCmp('myPanel').push({
                                title: 'Second',
                                html: 'Second view!'
                            })
                        }
                    }
                },
                items: [{
                    xtype: 'image',
                    id: 'dupont',
                    html: 'Dupont',
                    src: 'resources/images/Picture1.png'
                },
                    {
                        width: 20
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/Picture2.png'
                    },
                    {
                        width: 20
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/Picture3.png'
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
                        width: 300,
                        height: 200,
                        mode: 'img',
                        listeners: {
                            tap: function(img, ev) {
                                var treeview = new InnovationFinDashBoard.view.TreeView({
//                                    "appName": img.id,
                                    "title":img.emb
                                });
                                Ext.getCmp('myPanel').push(
                                    treeview)
                            }
                        }
                    },
                    items: [{
                        xtype: 'image',
                        src: 'resources/images/Picture4.png',
                        flex: 1
                    },
                        {
                            width: 20
                        },
                        {
                            xtype: 'image',
                            emb:'Dupont Analysis',
                            src: 'resources/images/PictureDupont.png',
                            flex: 1
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'image',
                            src: 'resources/images/Picture5.png',
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
                        width: 300,
                        height: 200,
                        mode: 'img',
                        listeners: {
                            tap: function(img, ev) {

                                Ext.getCmp('myPanel').push({
                                    title: 'Second',
                                    html: 'Second view!'
                                })
                            }
                        }
                    },
                    items: [{
                        xtype: 'image',
                        src: 'resources/images/Picture6.png',
                        flex: 1
                    },
                        {
                            width: 20
                        },
                        {
                            xtype: 'image',
                            src: 'resources/images/Picture7.png',
                            flex: 1
                        },
                        {
                            width: 20
                        },
                        {
                            xtype: 'image',
                            src: 'resources/images/Picture8.png',
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