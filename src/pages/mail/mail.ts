import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';


/**
 * Generated class for the MailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mail',
  templateUrl: 'mail.html',
})
export class MailPage {
	subject="";
	body="";
	to="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MailPage');
  }

  Enviar(){
  let email= {
  	to:	this.to,
  	cc: [],
  	bcc: [],
  	attachment: [],
  	subject: this.subject,
  	body: this.body,
  	isHtml: false,
  	app: "Gmail"
  }
  this.emailComposer.open(email);
  }

}
