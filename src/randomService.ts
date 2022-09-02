// export function getAvg(scores: number[]) {
//   return getTotalScore(scores) / scores.length;
// }

// export function getTotalScore(scores: number[]) {
//   return scores.reduce((score, count) => score + count);
// }
require('dotenv').config();

export function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log("Api Base:", process.env.API_BASE);