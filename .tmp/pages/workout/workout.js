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
import { Global } from '../../global/global';
import { Request } from '../../services/request';
import { TrainingPage } from '../training/training';
export var WorkoutPage = (function () {
    function WorkoutPage(navCtrl, params, request, global) {
        this.navCtrl = navCtrl;
        var workout = params.get("Workout")[0];
        this.work = workout;
        // Show the tabbs again
        //document.querySelector("ion-tabbar")['style'].display = 'flex';
    }
    WorkoutPage.prototype._Training = function () {
        this.navCtrl.push(TrainingPage, {
            Workout: this.work
        });
    };
    WorkoutPage = __decorate([
        Component({
            templateUrl: 'workout.html'
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, Request, Global])
    ], WorkoutPage);
    return WorkoutPage;
}());
