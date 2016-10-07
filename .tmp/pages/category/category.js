import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Request } from '../../services/request';
import { CoachPage } from '../coach/coach';
export var CategoryPage = (function () {
    function CategoryPage(navCtrl, request, params) {
        this.navCtrl = navCtrl;
        this.coaches = null;
        this.categoryName = params.get("categoryName");
        this.categoryId = params.get("categoryId");
        this.Request = request;
        this.getCoaches();
    }
    CategoryPage.prototype.getCoaches = function () {
        var _this = this;
        this.Request.getCoaches(this.categoryId).subscribe(function (data) { return _this.coaches = data; });
    };
    CategoryPage.prototype._coach = function (coachData) {
        this.navCtrl.push(CoachPage, {
            coachData: coachData,
        });
    };
    CategoryPage.decorators = [
        { type: Component, args: [{
                    selector: 'category-page',
                    templateUrl: 'category.html'
                },] },
    ];
    /** @nocollapse */
    CategoryPage.ctorParameters = [
        { type: NavController, },
        { type: Request, },
        { type: NavParams, },
    ];
    return CategoryPage;
}());
