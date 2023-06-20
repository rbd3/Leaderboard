export default class Leaderboard {
  constructor() {
    this.scores = {
      id: "",
      names: "",
      score: "",
    };
  }

  add(names, score) {
    this.id = this.scores.lenght + 1;
    this.names = names;
    this.score = score;
  }
}