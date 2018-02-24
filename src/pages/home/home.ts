import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { Pedometer } from '@ionic-native/pedometer';
import { SettingsProvider } from '../../providers/settings/settings';
import { SettingsPage } from '../../pages/settings/settings';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  steps: number = 0;
  goal: number;
  percentage: number;
  constructor(private setting:SettingsProvider,public pedometer: Pedometer,public modalCtrl: ModalController,private ref: ChangeDetectorRef,public plt: Platform,public navCtrl: NavController) {
    this.pedometer.startPedometerUpdates()
    .subscribe((data) => {
      this.steps = data.numberOfSteps;
      this.setPercentage();
      this.ref.detectChanges();
    });
    this.goal = this.setting.getGoal();
    this.setPercentage();
  }

  setPercentage() {
    this.percentage = (this.steps / this.goal) * 100;
  }

  showOptions() {
    let modal = this.modalCtrl.create(SettingsPage);
    modal.onDidDismiss((result) => {
      if(result) {
        this.goal = result;
      }
    })
    modal.present();
  }

}
