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
    CoachPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'coach.html'
                },] },
    ];
    /** @nocollapse */
    CoachPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: Request, },
    ];
    return CoachPage;
}());
