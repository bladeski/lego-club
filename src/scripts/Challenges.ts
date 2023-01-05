const Challenges: ChallengeModel[] = [

]

export default Challenges;

export type ChallengeModel = {
  title: string;
  challengeText: string;
  length: number[];
  date: string
}