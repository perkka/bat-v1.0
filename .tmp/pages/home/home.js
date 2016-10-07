import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { MedalsPage } from '../medals/medals';
import { ProfilePage } from '../profile/profile';
export var HomePage = (function () {
    function HomePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    HomePage.prototype._medals = function () {
        this.navCtrl.push(MedalsPage);
    };
    HomePage.prototype._profile = function () {
        this.navCtrl.push(ProfilePage);
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: ViewController, },
    ];
    return HomePage;
}());
