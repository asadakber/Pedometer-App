import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  goal: number;
  constructor(public settings: SettingsProvider,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.goal = this.settings.getGoal();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  update() {
    let value = Math.trunc(this.goal);
    this.settings.setGoal(value);
    this.viewCtrl.dismiss(true);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
