import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Request } from '../../services/request';
import { CategoryPage } from '../category/category';
import { CoachPage } from '../coach/coach';
export var ExplorePage = (function () {
    function ExplorePage(navCtrl, request) {
        this.navCtrl = navCtrl;
        this.AllCategories = { category: "test" };
        this.Request = request;
        this.getCategories();
    }
    // Get Categories from Server
    ExplorePage.prototype.getCategories = function () {
        var _this = this;
        this.Request.getCategories().subscribe(function (data) { return _this.AllCategories = data; });
    };
    // Navigate to Coach
    ExplorePage.prototype._coach = function (coachData) {
        this.navCtrl.push(CoachPage, {
            coachData: coachData,
        });
    };
    // Navigate to categorypage
    ExplorePage.prototype._category = function (name, id) {
        this.navCtrl.push(CategoryPage, {
            categoryName: name,
            categoryId: id
        });
    };
    // Navigate to toplist
    ExplorePage.prototype._toplist = function () {
    };
    // Navigate to newcoaches
    ExplorePage.prototype._newcoaches = function () {
    };
    // Navigate to popular
    ExplorePage.prototype._popular = function () {
    };
    ExplorePage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'explore.html'
                },] },
    ];
    /** @nocollapse */
    ExplorePage.ctorParameters = [
        { type: NavController, },
        { type: Request, },
    ];
    return ExplorePage;
}());
