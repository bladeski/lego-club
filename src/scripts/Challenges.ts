const Challenges: ChallengeModel[] = [
  {
    title: 'January 2023',
    challengeText: 'This is a challenge',
    length: [0, 45, 0],
    date: '2023-01-05'
  }
]

export default Challenges;

export type ChallengeModel = {
  title: string;
  challengeText: string;
  length: number[];
  date: string
}