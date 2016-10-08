var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Global } from '../../global/global';
import { Request } from '../../services/request';
export var TrainingPage = (function () {
    function TrainingPage(navCtrl, params, request, global, alertCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.request = request;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.sec = 0;
        this.min = 0;
        this.h = 0;
        this.zero1 = "0";
        this.zero2 = "0";
        this.zero3 = "0";
        this.exercises = [];
        this.currentExercise = { Name: "undefined", Description: "undefined" };
        var workout = params.get("Workout");
        var ExerciseArray = [];
        for (var exercise in workout.Exercises) {
            var exObj = JSON.parse(workout.Exercises[exercise]);
            // TODO: Remove substring when fixed space problem in database/admin
            if (exObj.id != null)
                ExerciseArray.push(exObj.id.substring(0, exObj.id.length - 1));
        }
        this.request.getWrkExercises(ExerciseArray).subscribe(function (data) { return _this.setExercises(data); });
        // Hide the tabbs
        //document.querySelector("ion-tabbar")['style'].display = 'none';
        // Show the tabbs again
        //document.querySelector("ion-tabbar")['style'].display = 'flex';
        var start = document.querySelector(".start");
        var inTraining = document.querySelector(".inTraining");
        var stop = document.querySelector(".stop");
        var pause = document.querySelector(".pause");
    }
    TrainingPage.prototype.timer = function () {
        this.sec++;
        if (this.sec == 10) {
            this.zero1 = "";
        }
        if (this.sec == 60) {
            this.min++;
            this.sec = 0;
            this.zero1 = "0";
        }
        if (this.min == 10) {
            this.zero2 = "";
        }
        if (this.min == 60) {
            this.h++;
            this.min = 0;
            this.zero2 = "0";
        }
        if (this.h == 10) {
            this.zero3 = "";
        }
    };
    TrainingPage.prototype.startTraining = function () {
        var _this = this;
        var exSquare = document.querySelector(".exSquare");
        exSquare["style"].height = "50%";
        var start = document.querySelector(".start");
        var inTraining = document.querySelector(".inTraining");
        var stop = document.querySelector(".stop");
        var pause = document.querySelector(".pause");
        this.viewCtrl.showBackButton(false);
        start["style"].display = "none";
        inTraining["style"].display = "flex";
        this.nextExer[0];
        this.theTimer = setInterval(function () { return _this.timer(); }, 1000);
    };
    TrainingPage.prototype.inTraining = function () {
        var stop = document.querySelector(".stop");
        var pause = document.querySelector(".pause");
        stop["style"].display = "flex";
        pause["style"].display = "flex";
    };
    TrainingPage.prototype.stopTraining = function () {
        this.endTraining();
    };
    TrainingPage.prototype.pauseTraining = function (fab) {
        fab.close();
        clearTimeout(this.theTimer);
        // Fab buttons
        var start = document.querySelector(".start");
        start["style"].display = "flex";
        var inTraining = document.querySelector(".inTraining");
        inTraining["style"].display = "none";
    };
    // Alert if user try to stop in middle of training
    TrainingPage.prototype.endTraining = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Do you want to end the training?',
            message: 'If you end your training you will not be able to continue it later. If you want to take a break click on pause.',
            cssClass: 'myAlert',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        //console.log('Agree clicked');
                        //console.log(this.navCtrl.canGoBack());
                        _this._workoutprofile();
                    }
                }
            ]
        });
        confirm.present();
    };
    // Hide and show tabs and navigationbar
    // Make improvments because this is a ugly hack!
    // There will be a directive
    TrainingPage.prototype.ionViewWillEnter = function () {
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.transform = 'translateY(56px)';
            });
        } // end if
    };
    TrainingPage.prototype.ionViewDidLeave = function () {
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.transform = 'translateY(0)';
            });
        } // end if
    };
    //----------------------------------------------------------
    TrainingPage.prototype.setExercises = function (data) {
        this.exercises = data;
    };
    TrainingPage.prototype.nextExer = function (i) {
        this.currentExercise = this.exercises[i];
        console.log(this.currentExercise);
    };
    TrainingPage.prototype._workoutprofile = function () {
        this.navCtrl.pop();
    };
    TrainingPage = __decorate([
        Component({
            templateUrl: 'training.html',
            encapsulation: ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, Request, Global, AlertController, ViewController])
    ], TrainingPage);
    return TrainingPage;
}());
