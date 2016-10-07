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
    WorkoutProfilePage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'workoutprofile.html'
                },] },
    ];
    /** @nocollapse */
    WorkoutProfilePage.ctorParameters = [
        { type: NavController, },
        { type: Global, },
        { type: Request, },
    ];
    return WorkoutProfilePage;
}());
