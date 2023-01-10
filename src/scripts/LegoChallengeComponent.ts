import '@bladeski/countdown-timer'

import Challenges, { ChallengeModel } from './Challenges';

import {CountdownComponent} from '@bladeski/countdown-timer'
import confetti from 'canvas-confetti';
import moment from 'moment';

export default class LegoChallengeComponent {
  private timer?: CountdownComponent;
  private cycleThemeTimeout?: number;
  private themeColour: number = 260;
  private currentChallenge: ChallengeModel = {
    title: 'No Challenge!',
    challengeText: 'Sorry, there are no challenges today!',
    length: [],
    date: ''
  };
  private challenges: ChallengeModel[] = Challenges;

  constructor() {
    this.timer = document.querySelector('countdown-component') as CountdownComponent;
    this.currentChallenge = this.challenges.find(challenge => moment(challenge.date).isSame(new Date(), 'day')) || this.currentChallenge;

    const titleEl = document.querySelector('.challenge-title') as HTMLTitleElement;
    const challengeTextEl = document.querySelector('.challenge-text') as HTMLDivElement;

    if (titleEl) {
      titleEl.textContent = this.currentChallenge.title;
    }
    
    if (challengeTextEl) {
      challengeTextEl.textContent = this.currentChallenge.challengeText;
    }    

    if (this.currentChallenge.length.length) {
      this.timer.classList.remove('hide');
      this.timer.setCountdownLength(this.currentChallenge.length, true);
    }

    this.timer.addEventListener('countdownStart', () => {
      document.body.requestFullscreen();

      if (this.cycleThemeTimeout) {
        clearInterval(this.cycleThemeTimeout);
        this.cycleThemeTimeout = undefined;
      }

      this.cycleThemeTimeout = setInterval(() => {
        this.setThemeColour(this.themeColour ? this.themeColour + 1 % 255 : 260);
      }, 250);
    });

    this.timer.addEventListener('countdownStop', () => {
      if (this.cycleThemeTimeout) {
        clearInterval(this.cycleThemeTimeout);
        this.cycleThemeTimeout = undefined;
      }
    });

    this.timer.addEventListener('countdownEnd', () => {
      confetti()?.then(() => {
        this.timer?.setCountdownLength(
          this.currentChallenge.length || [0, 0, 0],
          true
        );
      });
    });

    this.timer.addEventListener('countdownReset', () => {
      document.exitFullscreen();
    });
  }

  private setThemeColour(colour: number) {

    if (!isNaN(colour)) {
      document.body.style.setProperty('--theme-hue-saturation', `${colour}, 71%`);
      this.themeColour = colour;
    }
  }
}
