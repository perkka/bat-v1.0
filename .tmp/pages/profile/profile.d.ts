import { NavController } from 'ionic-angular';
import { Request } from '../../services/request';
import { Global } from '../../global/global';
export declare class ProfilePage {
    private navCtrl;
    private global;
    tap: number;
    private Request;
    AllUsers: any;
    Coaches: any;
    constructor(navCtrl: NavController, request: Request, global: Global);
    getUser(): void;
    setData(users: any): void;
    setCoaches(coaches: any): void;
    tapEvent(e: any): void;
}
