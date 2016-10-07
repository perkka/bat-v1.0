import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Request } from '../services/request';
import { Global } from '../global/global';
import { TabsPage } from '../pages/tabs/tabs';
export var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        // this.loginPage = LoginPage;
        this.tabsPage = TabsPage;
        platform.ready().then(function () {
            StatusBar.styleDefault();
        });
    }
    MyApp.decorators = [
        { type: Component, args: [{
                    template: '<ion-nav [root]="tabsPage"></ion-nav>',
                    providers: [Request, Global]
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
    ];
    return MyApp;
}());
