import { NavController } from 'ionic-angular';
import { Request } from '../../services/request';
export declare class MedalsPage {
    private navCtrl;
    allMedals: any;
    private Request;
    constructor(navCtrl: NavController, request: Request);
    getMedals(): void;
}
