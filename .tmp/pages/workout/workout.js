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
    WorkoutPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'workout.html'
                },] },
    ];
    /** @nocollapse */
    WorkoutPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: Request, },
        { type: Global, },
    ];
    return WorkoutPage;
}());
