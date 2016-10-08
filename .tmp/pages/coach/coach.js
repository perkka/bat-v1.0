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
export var CoachPage = (function () {
    function CoachPage(navCtrl, params, request) {
        this.navCtrl = navCtrl;
        this.workouts = null;
        var coachData = params.get("coachData")[0];
        console.log(coachData);
        this.name = coachData.Name;
        this.description = coachData.Description;
        //this.profileImg = coachData.profileImg;
        //this.coverImg = coachData.coverImg;
        this.Request = request;
        this.getWorkouts(coachData.id);
    }
    CoachPage.prototype.getWorkouts = function (id) {
        var _this = this;
        this.Request.getWorkouts(id).subscribe(function (data) { return _this.workouts = data; });
    };
    CoachPage.prototype.check = function () {
        var element = document.getElementById("myCheck");
        element.checked = true;
    };
    CoachPage.prototype.uncheck = function () {
        var element = document.getElementById("myCheck");
        element.checked = false;
    };
    CoachPage = __decorate([
        Component({
            templateUrl: 'coach.html'
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, Request])
    ], CoachPage);
    return CoachPage;
}());
