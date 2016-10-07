import { NavController, NavParams } from 'ionic-angular';
import { Global } from '../../global/global';
import { Request } from '../../services/request';
export declare class WorkoutPage {
    private navCtrl;
    private work;
    constructor(navCtrl: NavController, params: NavParams, request: Request, global: Global);
    _Training(): void;
}
