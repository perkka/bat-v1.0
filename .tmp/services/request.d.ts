import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class Request {
    private ExternalIpAdress;
    private LocalIpAdres;
    private http;
    private data;
    constructor(http: Http);
    getCategories(): any;
    getMedals(): any;
    getCoaches(categoryId: any): any;
    getUsers(userId: any): any;
    getWorkouts(workout: any): any;
    getCoach(coachId: any): any;
    getWorkoutWeek(coachId: any): any;
    getWrkExercises(exArray: any): any;
}
