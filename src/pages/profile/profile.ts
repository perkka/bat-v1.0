import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Request} from '../../services/request';
import {Global} from '../../global/global';

@Component({
    templateUrl: 'profile.html'
})
export class ProfilePage {




  public tap: number = 0;
  

  private Request : Request;
  AllUsers = null;
  Coaches:any;

  constructor(private navCtrl: NavController, request: Request, private global:Global) {

  // Fatch on loading
  this.Request = request;
  this.getUser();

  }

  // Get User from Server
  getUser(){
    
      this.Request.getUsers("42c39126-8c33-42b4-9cb5-3ab1ce336dd7").subscribe(
            data => this.setData(data) 
        );
        
  }

  setData(users){

    let coach = JSON.parse(users[0].Coaches)

    
    if(this.global.pickedCoaches == null){


          this.Request.getCoach(coach[0].id).subscribe(
            data => this.setCoaches(data)
        );
    }
  

    this.AllUsers = users;
  }

  setCoaches(coaches){

        this.global.pickedCoaches = coaches; 
        this.Coaches = coaches;
        console.log(this.global.pickedCoaches);
  }


  tapEvent(e){
    this.tap++
  }


// Hej Pär, ser du mig?



}
