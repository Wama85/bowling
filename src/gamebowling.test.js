

describe("JUEGO BOWLING", () => {
  
  it("Dato vacio", () => {
    const escore=new game();
    escore.rollmany(20,0)
    expect(escore.getScore()).toEqual(0);
  });

  it("Para el numero 20", () => {
    const escore=new game();
    escore.rollmany(20,1)
    expect(escore.getScore()).toEqual(20);
  });
  it("Probar 17,0", () => {
    const escore=new game();
    escore.rollSpare();
     escore.roll(3);
    escore.rollmany(17,0)
    expect(escore.getScore()).toEqual(16);
  });
  it("Probar strike", () => {
    const escore=new game();
    escore.roll(10);
    escore.roll(3);
    escore.roll(4);
    escore.rollmany(16,0)
    expect(escore.getScore()).toEqual(24);
  });
  it("Juego perfecto", () => {
    const escore=new game();
    escore.rollmany(12,10)
    expect(escore.getScore()).toEqual(300);
  });


});

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
