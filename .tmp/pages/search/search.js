import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var SearchPage = (function () {
    function SearchPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SearchPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'search.html'
                },] },
    ];
    /** @nocollapse */
    SearchPage.ctorParameters = [
        { type: NavController, },
    ];
    return SearchPage;
}());
