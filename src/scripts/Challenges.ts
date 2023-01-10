const Challenges: ChallengeModel[] = [
  {
    title: 'Feeling hungry?',
    challengeText: 'With help from your grown-up, build some food (but don\'t eat it)!',
    length: [0, 45, 0],
    date: '2023-01-14'
  },
  {
    title: 'Going travelling...',
    challengeText: 'With help from your grown-up, build somewhere that you would like to visit... even if it hasn\'t been discovered yet!',
    length: [0, 45, 0],
    date: '2023-02-11'
  },
  {
    title: 'Creeping and Crawling',
    challengeText: 'With help from your grown-up, build a bug! It could be an insect, a spider, or something from your imagination!',
    length: [0, 45, 0],
    date: '2023-03-11'
  },
]

export default Challenges;

export type ChallengeModel = {
  title: string;
  challengeText: string;
  length: number[];
  date: string
}