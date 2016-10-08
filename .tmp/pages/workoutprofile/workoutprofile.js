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
import { Global } from '../../global/global';
import { Request } from '../../services/request';
import { WorkoutPage } from '../workout/workout';
export var WorkoutProfilePage = (function () {
    function WorkoutProfilePage(navCtrl, global, request) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.request = request;
        this.pickedCoaches = null;
        this.wrkWeek = null;
        this.weekInfo = {
            id: 1
        };
        this.pickedCoaches = global.pickedCoaches;
        this.showWorkoutWeek();
    }
    WorkoutProfilePage.prototype.showWorkoutWeek = function () {
        var _this = this;
        this.request.getWorkoutWeek("e7667c6e-1bbd-4c1e-a1ad-b04c7ff776b1").subscribe(function (data) { return _this.setWrkWeek(data); });
    };
    WorkoutProfilePage.prototype.setWrkWeek = function (data) {
        var test = data.workouts;
        var testArray = [];
        this.weekInfo = data.week;
        console.log(this.weekInfo);
        for (var wrk in test) {
            testArray.push(test[wrk]);
        }
        console.log(testArray);
        this.wrkWeek = testArray;
    };
    WorkoutProfilePage.prototype._descWorkout = function (wrkObj) {
        console.log(wrkObj);
        this.navCtrl.push(WorkoutPage, {
            Workout: wrkObj
        });
    };
    WorkoutProfilePage = __decorate([
        Component({
            templateUrl: 'workoutprofile.html'
        }), 
        __metadata('design:paramtypes', [NavController, Global, Request])
    ], WorkoutProfilePage);
    return WorkoutProfilePage;
}());
