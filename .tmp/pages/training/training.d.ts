import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Global } from '../../global/global';
import { Request } from '../../services/request';
export declare class TrainingPage {
    private navCtrl;
    private request;
    alertCtrl: AlertController;
    private viewCtrl;
    theTimer: any;
    sec: any;
    min: any;
    h: any;
    zero1: string;
    zero2: string;
    zero3: string;
    exercises: any[];
    currentExercise: {
        Name: string;
        Description: string;
    };
    constructor(navCtrl: NavController, params: NavParams, request: Request, global: Global, alertCtrl: AlertController, viewCtrl: ViewController);
    timer(): void;
    startTraining(): void;
    inTraining(): void;
    stopTraining(): void;
    pauseTraining(fab: any): void;
    endTraining(): void;
    ionViewWillEnter(): void;
    ionViewDidLeave(): void;
    setExercises(data: any): void;
    nextExer(i: any): void;
    _workoutprofile(): void;
}
