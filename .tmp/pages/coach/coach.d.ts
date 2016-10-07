import { NavController, NavParams } from 'ionic-angular';
import { Request } from '../../services/request';
export declare class CoachPage {
    private navCtrl;
    private Request;
    name: string;
    description: string;
    workouts: any;
    constructor(navCtrl: NavController, params: NavParams, request: Request);
    getWorkouts(id: any): void;
    check(): void;
    uncheck(): void;
}
