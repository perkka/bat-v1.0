import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the PopularPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var PopularPage = (function () {
    function PopularPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PopularPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'popular.html'
                },] },
    ];
    /** @nocollapse */
    PopularPage.ctorParameters = [
        { type: NavController, },
    ];
    return PopularPage;
}());
