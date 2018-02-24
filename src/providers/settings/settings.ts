import { Injectable } from '@angular/core';


@Injectable()
export class SettingsProvider {
  goal: number = 1000;
  constructor() {
    console.log('Hello SettingsProvider Provider');
  }

  setGoal(goal: number) {
    if(goal && goal > 0) {
      this.goal = goal
    }
  }

  getGoal() {
    return this.goal;
  }

}
