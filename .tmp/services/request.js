var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
export var Request = (function () {
    function Request(http) {
        // Used Outside Perkkas Place :)
        this.ExternalIpAdress = "http://2.68.167.57:3000";
        // Used At PerkKas Place :)
        this.LocalIpAdres = "http://192.168.1.2:4000";
        this.http = http;
    }
    Request.prototype.getCategories = function () {
        var url = this.LocalIpAdres + '/categories'; //+ encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    Request.prototype.getMedals = function () {
        var url = this.LocalIpAdres + '/achievements'; //+ encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    Request.prototype.getCoaches = function (categoryId) {
        var url = this.LocalIpAdres + '/categories/' + categoryId; //+ encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    Request.prototype.getUsers = function (userId) {
        var url = this.LocalIpAdres + '/users/' + userId; //+ encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    Request.prototype.getWorkouts = function (workout) {
        var url = this.LocalIpAdres + '/coaches/workouts' + workout; //+ encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    Request.prototype.getCoach = function (coachId) {
        var url = this.LocalIpAdres + '/coaches/' + coachId; //+ encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    Request.prototype.getWorkoutWeek = function (coachId) {
        var url = this.LocalIpAdres + '/workoutweeks/' + coachId; //+ encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    Request.prototype.getWrkExercises = function (exArray) {
        var url = this.LocalIpAdres + '/exercises/'; //+ encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        var body = exArray;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
    };
    Request = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], Request);
    return Request;
}());
