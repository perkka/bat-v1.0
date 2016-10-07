import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Global } from '../../global/global';
import { Request } from '../../services/request';
export declare class TrainingPage {
    private navCtrl;
    private request;
    alertCtrl: AlertController;
    private viewCtrl;
    exercises: any[];
    currentExercise: {
        Name: string;
        Description: string;
    };
    constructor(navCtrl: NavController, params: NavParams, request: Request, global: Global, alertCtrl: AlertController, viewCtrl: ViewController);
    startTraining(): void;
    inTraining(): void;
    stopTraining(): void;
    pauseTraining(): void;
    endTraining(): void;
    setExercises(data: any): void;
    nextExer(i: any): void;
    _workoutprofile(): void;
}
