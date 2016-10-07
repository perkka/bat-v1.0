import { NavController, NavParams } from 'ionic-angular';
import { Request } from '../../services/request';
export declare class CategoryPage {
    private navCtrl;
    private Request;
    coaches: any;
    categoryName: string;
    categoryId: number;
    constructor(navCtrl: NavController, request: Request, params: NavParams);
    getCoaches(): void;
    _coach(coachData: any): void;
}
