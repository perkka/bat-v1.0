import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the ToplistPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ToplistPage = (function () {
    function ToplistPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ToplistPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'toplist.html'
                },] },
    ];
    /** @nocollapse */
    ToplistPage.ctorParameters = [
        { type: NavController, },
    ];
    return ToplistPage;
}());
