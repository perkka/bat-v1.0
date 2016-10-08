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
    CategoryPage = __decorate([
        Component({
            selector: 'category-page',
            templateUrl: 'category.html'
        }), 
        __metadata('design:paramtypes', [NavController, Request, NavParams])
    ], CategoryPage);
    return CategoryPage;
}());
