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
import { Global } from '../../global/global';
export var ProfilePage = (function () {
    function ProfilePage(navCtrl, request, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.tap = 0;
        this.AllUsers = null;
        // Fatch on loading
        this.Request = request;
        this.getUser();
    }
    // Get User from Server
    ProfilePage.prototype.getUser = function () {
        var _this = this;
        this.Request.getUsers("42c39126-8c33-42b4-9cb5-3ab1ce336dd7").subscribe(function (data) { return _this.setData(data); });
    };
    ProfilePage.prototype.setData = function (users) {
        var _this = this;
        var coach = JSON.parse(users[0].Coaches);
        if (this.global.pickedCoaches == null) {
            this.Request.getCoach(coach[0].id).subscribe(function (data) { return _this.setCoaches(data); });
        }
        this.AllUsers = users;
    };
    ProfilePage.prototype.setCoaches = function (coaches) {
        this.global.pickedCoaches = coaches;
        this.Coaches = coaches;
        console.log(this.global.pickedCoaches);
    };
    ProfilePage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    ProfilePage = __decorate([
        Component({
            templateUrl: 'profile.html'
        }), 
        __metadata('design:paramtypes', [NavController, Request, Global])
    ], ProfilePage);
    return ProfilePage;
}());
