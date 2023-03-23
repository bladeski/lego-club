const Challenges: ChallengeModel[] = [
  {
    title: 'Feeling hungry?',
    challengeText:
      "With help from your grown-up, build some food (but don't eat it)!",
    duration: [0, 45, 0],
    date: '2023-01-14',
  },
  {
    title: 'It must be love!',
    challengeText:
      'Build something to do with love. It could be someone or something you love, or that makes you think of love!',
    duration: [0, 45, 0],
    date: '2023-02-11',
  },
  // {
  //   title: 'Going travelling...',
  //   challengeText: 'With help from your grown-up, build somewhere that you would like to visit... even if it hasn\'t been discovered yet!',
  //   duration: [0, 45, 0],
  //   date: '2023-02-11'
  // },
  {
    title: 'Creeping and Crawling',
    challengeText:
      'With help from your grown-up, build a bug! It could be an insect, a spider, or something from your imagination!',
    duration: [0, 45, 0],
    date: '2023-03-09',
  },
  {
    title: 'Happy Easter',
    challengeText:
      'It\'s not a joke... next weekend is Easter! Build something that makes you think of this special holiday!',
    duration: [0, 45, 0],
    date: '2023-04-01',
  },
  {
    title: 'Read All About It!',
    challengeText:
      'With help from your grown-up, build a scene from your favourite book, adding as much detail as you can!',
    duration: [0, 45, 0],
    date: '2023-04-29',
  },
];

export default Challenges;

export type ChallengeModel = {
  title: string;
  challengeText: string;
  duration?: number[];
  endTime?: string;
  date: string;
};
