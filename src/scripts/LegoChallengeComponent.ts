import '@bladeski/countdown-timer';

import Challenges, { ChallengeModel } from './Challenges';

import { CountdownComponent } from '@bladeski/countdown-timer';
import confetti from 'canvas-confetti';
import moment from 'moment';

export default class LegoChallengeComponent {
  private challenges: ChallengeModel[] = Challenges;
  private currentChallenge: ChallengeModel = {
    title: 'No Challenge!',
    challengeText: 'Sorry, there are no challenges today!',
    duration: [],
    date: '',
  };

  private cycleThemeTimeout?: number;
  private themeColour = 205;
  private timer?: CountdownComponent;

  constructor() {
    this.timer = document.querySelector(
      'countdown-component',
    ) as CountdownComponent;
    const newChallenge = this.challenges.find((challenge) =>
      moment(challenge.date).isSame(new Date(), 'day'),
    );

    if (newChallenge) {
      this.currentChallenge = newChallenge;

      this.setChallengeText();

      if (this.currentChallenge.duration.length) {
        this.timer.classList.remove('hide');
        this.timer.setCountdownLength(this.currentChallenge.duration, true);
      }

      this.timer.addEventListener('countdownStart', () =>
        this.onCountdownStart(),
      );
      this.timer.addEventListener('countdownStop', () =>
        this.onCountdownStop(),
      );
      this.timer.addEventListener('countdownEnd', () => this.onCountdownEnd());
      this.timer.addEventListener('countdownReset', () =>
        this.onCountdownReset(),
      );
    } else {
      this.setChallengeText();
      const challenge = document.querySelector('article');
      challenge?.classList.add('show');
      console.log('else');
    }
  }

  private onCountdownEnd() {
    confetti()
      ?.then(() => {
        this.timer?.setCountdownLength(
          this.currentChallenge.duration || [0, 0, 0],
          true,
        );
      })
      .catch((err) => console.log(err));
  }

  private onCountdownReset() {
    document.exitFullscreen().catch((err) => console.log(err));
  }

  private onCountdownStart() {
    document.documentElement
      .requestFullscreen()
      .then(() => this.startTimer())
      .catch(() => this.startTimer());
  }

  private onCountdownStop() {
    if (this.cycleThemeTimeout) {
      clearInterval(this.cycleThemeTimeout);
      this.cycleThemeTimeout = undefined;
    }

    const challenge = document.querySelector('article');
    challenge?.classList.remove('show');
  }

  private setChallengeText() {
    const titleEl = document.querySelector(
      '.challenge-title',
    ) as HTMLTitleElement;
    const challengeTextEl = document.querySelector(
      '.challenge-text',
    ) as HTMLDivElement;

    if (titleEl) {
      titleEl.textContent = this.currentChallenge.title;
    }

    if (challengeTextEl) {
      challengeTextEl.textContent = this.currentChallenge.challengeText;
    }
  }

  private setThemeColour(colour: number) {
    if (!isNaN(colour)) {
      document.body.style.setProperty(
        '--theme-hue',
        `${colour}`,
      );
      this.themeColour = colour;
    }
  }

  private startTimer() {
    const challenge = document.querySelector('article');
    challenge?.classList.add('show');
    console.log('start');

    if (this.cycleThemeTimeout) {
      clearInterval(this.cycleThemeTimeout);
      this.cycleThemeTimeout = undefined;
    }

    this.cycleThemeTimeout = setInterval(() => {
      this.setThemeColour(
        this.themeColour ? this.themeColour + (1 % 255) : 260,
      );
    }, 250);
  }
}
