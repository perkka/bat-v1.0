import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Request } from '../../services/request';
export var MedalsPage = (function () {
    function MedalsPage(navCtrl, request) {
        this.navCtrl = navCtrl;
        // Here is All Medals :)
        this.allMedals = null;
        this.Request = request;
        this.getMedals();
    }
    MedalsPage.prototype.getMedals = function () {
        var _this = this;
        this.Request.getMedals().subscribe(function (data) { return _this.allMedals = data; });
    };
    MedalsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'medals.html'
                },] },
    ];
    /** @nocollapse */
    MedalsPage.ctorParameters = [
        { type: NavController, },
        { type: Request, },
    ];
    return MedalsPage;
}());
