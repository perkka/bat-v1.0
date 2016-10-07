import { NavController } from 'ionic-angular';
import { Request } from '../../services/request';
export declare class ExplorePage {
    private navCtrl;
    Request: Request;
    AllCategories: {
        category: string;
    };
    constructor(navCtrl: NavController, request: Request);
    getCategories(): void;
    _coach(coachData: any): void;
    _category(name: any, id: any): void;
    _toplist(): void;
    _newcoaches(): void;
    _popular(): void;
}
