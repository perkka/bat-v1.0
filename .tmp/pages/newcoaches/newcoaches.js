import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the NewcoachesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var NewcoachesPage = (function () {
    function NewcoachesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NewcoachesPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'newcoaches.html'
                },] },
    ];
    /** @nocollapse */
    NewcoachesPage.ctorParameters = [
        { type: NavController, },
    ];
    return NewcoachesPage;
}());
