import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
data:string ='';
data1:string ='';
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }
  locate(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.data ='Latitude: ' + resp.coords.latitude; 
      this.data1 ='Longitude: ' + resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

}
