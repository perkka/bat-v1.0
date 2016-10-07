import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Request} from '../../services/request';
import {CategoryPage} from '../category/category';
import {CoachPage} from '../coach/coach';
import {ToplistPage} from '../toplist/toplist';
import {NewcoachesPage} from '../newcoaches/newcoaches';
import {PopularPage} from '../popular/popular';

@Component({
   templateUrl: 'explore.html'
})
export class ExplorePage {

  public Request : Request;
  public AllCategories  = {category: "test"};

  constructor(private navCtrl: NavController, request: Request) {

    this.Request = request;
    this.getCategories();

  }

  // Get Categories from Server
   getCategories(){
    
      this.Request.getCategories().subscribe(
            data => this.AllCategories = data
        );

      
  }

  // Navigate to Coach
   _coach(coachData){

       this.navCtrl.push(CoachPage,{
            coachData: coachData,
          });

  }

  // Navigate to categorypage
  _category(name, id){

         this.navCtrl.push(CategoryPage,{
            categoryName: name,
            categoryId: id
          });

  }

  // Navigate to toplist
  _toplist(){

         

  }

// Navigate to newcoaches
  _newcoaches(){

         

  }

  // Navigate to popular
  _popular(){

        

  }





}




