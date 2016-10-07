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
        // document.querySelector("ion-tabbar")['style'].display = 'none';
        // Show the tabbs again
        //document.querySelector("ion-tabbar")['style'].display = 'flex';
    }
    TrainingPage.prototype.startTraining = function () {
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
    TrainingPage.prototype.pauseTraining = function () {
    };
    TrainingPage.prototype.endTraining = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Do you want to end the training?',
            message: 'If you end your training you will not be able to continue it later. If you want to take a break click on pause.',
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
    TrainingPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'training.html',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    TrainingPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: Request, },
        { type: Global, },
        { type: AlertController, },
        { type: ViewController, },
    ];
    return TrainingPage;
}());
