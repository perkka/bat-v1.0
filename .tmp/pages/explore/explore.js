var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    ExplorePage = __decorate([
        Component({
            templateUrl: 'explore.html'
        }), 
        __metadata('design:paramtypes', [NavController, Request])
    ], ExplorePage);
    return ExplorePage;
}());
