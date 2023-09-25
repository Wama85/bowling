class game{
  constructor(){
    this.score=0;
    this.rolls=[];
    this.currentRoll=0;
  }
  roll(pins){
    this.score +=pins;
    this.rolls.push(pins);
  }
 

  getScore() {
    let totalScore = 0;
    let frameIndex = 0;
  
    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[frameIndex] === 10) {
        // Strike
        totalScore += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
        frameIndex += 1;
      } else if (this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10) {
        // Spare
        totalScore += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      } else {
        // Normal frame
        totalScore += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
  
    return totalScore;
  }
 
  rollmany(n,pins){
   for(let i=0;i<n;i++){
      this.roll(pins)
    }

  }
  rollSpare() {
    this.roll(5);
    this.roll(5);
  }
}

export default game;