import {Component, ViewEncapsulation} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {Global} from '../../global/global';
import {Request} from '../../services/request';
import {HomePage} from '../home/home';




@Component({
    templateUrl: 'training.html',
    encapsulation: ViewEncapsulation.None,
})
export class TrainingPage {


  


  public theTimer: any;
  public sec: any = 0;
  public min: any = 0;
  public h: any = 0;
  public zero1: string = "0";
  public zero2: string = "0";
  public zero3: string = "0";

  public exercises = [];
  public currentExercise = {Name: "undefined", Description:"undefined"};

  constructor(private navCtrl: NavController, params:NavParams, private request: Request, 
              global: Global, public alertCtrl: AlertController, private viewCtrl: ViewController) {

      

      let workout = params.get("Workout")
      
      let ExerciseArray = [];

      for(let exercise in workout.Exercises){

        let exObj = JSON.parse(workout.Exercises[exercise]);

        // TODO: Remove substring when fixed space problem in database/admin
        if(exObj.id != null) ExerciseArray.push(exObj.id.substring(0, exObj.id.length - 1)); 
       
        }
        
      this.request.getWrkExercises(ExerciseArray).subscribe(
            data => this.setExercises(data)
      );



        // Hide the tabbs
        //document.querySelector("ion-tabbar")['style'].display = 'none';

        // Show the tabbs again
        //document.querySelector("ion-tabbar")['style'].display = 'flex';

        let start = document.querySelector(".start");
        let inTraining = document.querySelector(".inTraining");
        let stop = document.querySelector(".stop");
        let pause = document.querySelector(".pause");
        


   
  }



  timer(){

    this.sec++;

    if(this.sec == 10){
      this.zero1 = "";
    }

    if(this.sec == 60){
      this.min++;
      this.sec = 0;
      this.zero1 = "0";
    }

    if(this.min == 10){
      this.zero2 = "";
    }

    if(this.min == 60){
      this.h++;
      this.min = 0;
      this.zero2 = "0";
    }

    if(this.h == 10){
      this.zero3 = "";
    }


  }



  startTraining(){

    let exSquare = document.querySelector(".exSquare");
    exSquare["style"].height = "50%";

    let start = document.querySelector(".start");
    let inTraining = document.querySelector(".inTraining");
    let stop = document.querySelector(".stop");
    let pause = document.querySelector(".pause");
    
    this.viewCtrl.showBackButton(false);

    start["style"].display = "none";
    inTraining["style"].display = "flex";
    
    this.nextExer[0];

    this.theTimer = setInterval( () => this.timer() , 1000);
    

  }

  inTraining(){

    let stop = document.querySelector(".stop");
    let pause = document.querySelector(".pause");

    stop["style"].display = "flex";
    pause["style"].display = "flex";

  }


  stopTraining(){

    this.endTraining();


  }

  pauseTraining(fab){

    fab.close();
    clearTimeout(this.theTimer);

    // Fab buttons
    let start = document.querySelector(".start");
    start["style"].display = "flex";

    let inTraining = document.querySelector(".inTraining");
    inTraining["style"].display = "none";
    
  }


// Alert if user try to stop in middle of training
   endTraining() {
    let confirm = this.alertCtrl.create({
      title: 'Do you want to end the training?',
      message: 'If you end your training you will not be able to continue it later. If you want to take a break click on pause.',
      cssClass: 'myAlert',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            //console.log('Disagree clicked');


            
          }
        },
        {
          text: 'Agree',
          handler: () => {
            //console.log('Agree clicked');
            //console.log(this.navCtrl.canGoBack());
            
            this._workoutprofile();

          }
        }
      ]
    });
    confirm.present();
  }











// Hide and show tabs and navigationbar
// Make improvments because this is a ugly hack!
// There will be a directive
ionViewWillEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(56px)';
      });
    } // end if
  }

  ionViewDidLeave() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(0)';
      });
    } // end if
  }
//----------------------------------------------------------

















  


  setExercises(data){

    this.exercises = data;
    

  }

  nextExer(i){

   this.currentExercise = this.exercises[i] 
   console.log(this.currentExercise)
  }


  _workoutprofile(){

         this.navCtrl.pop();

  }



















}













