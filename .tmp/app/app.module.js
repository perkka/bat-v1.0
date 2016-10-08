var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TrainingPage } from '../pages/training/training';
import { WorkoutProfilePage } from '../pages/workoutprofile/workoutprofile';
import { CategoryPage } from '../pages/category/category';
import { CoachPage } from '../pages/coach/coach';
import { LoginPage } from '../pages/login/login';
import { MedalsPage } from '../pages/medals/medals';
import { NewcoachesPage } from '../pages/newcoaches/newcoaches';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { PopularPage } from '../pages/popular/popular';
import { TabsPage } from '../pages/tabs/tabs';
import { ToplistPage } from '../pages/toplist/toplist';
import { WorkoutPage } from '../pages/workout/workout';
import { ExplorePage } from '../pages/explore/explore';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                AboutPage,
                HomePage,
                TabsPage,
                TrainingPage,
                WorkoutProfilePage,
                CategoryPage,
                CoachPage,
                LoginPage,
                MedalsPage,
                NewcoachesPage,
                ProfilePage,
                SearchPage,
                PopularPage,
                ToplistPage,
                WorkoutPage,
                ExplorePage
            ],
            imports: [
                IonicModule.forRoot(MyApp)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                AboutPage,
                HomePage,
                TabsPage,
                TrainingPage,
                WorkoutProfilePage,
                CategoryPage,
                CoachPage,
                LoginPage,
                MedalsPage,
                NewcoachesPage,
                ProfilePage,
                SearchPage,
                WorkoutPage,
                ExplorePage
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
