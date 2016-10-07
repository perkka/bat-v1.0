import { NavController } from 'ionic-angular';
import { Global } from '../../global/global';
import { Request } from '../../services/request';
export declare class WorkoutProfilePage {
    private navCtrl;
    private global;
    private request;
    pickedCoaches: any;
    wrkWeek: any;
    weekInfo: any;
    constructor(navCtrl: NavController, global: Global, request: Request);
    showWorkoutWeek(): void;
    setWrkWeek(data: any): void;
    _descWorkout(wrkObj: any): void;
}
