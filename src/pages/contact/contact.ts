import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the Contact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  private socialSharing: SocialSharing) {
  }

  createEmail(){
  	 this.socialSharing.canShareViaEmail().then(() => {
        this.socialSharing.shareViaEmail('', 'FeedBack EMT-Palma', ['leox_vm@hotmail.com']).then(() => {
        }).catch(() => {
            alert("Uh!! Seems like some issues right now, please try later");
            });
        })
  }
}
