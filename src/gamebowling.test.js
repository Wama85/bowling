

describe("JUEGO BOWLING", () => {
  it("Dato vacio", () => {
    const escore=new game();
    expect(escore.getScore()).toEqual(0);
  });
  it("Para el numero 20", () => {
    const escore=new game();
    for(let i=0;i<20;i++){
      escore.roll(1);
    }
    expect(escore.getScore()).toEqual(20);
  });

});

class game{
  constructor(){
    this.score=0;
  }
  roll(pins){
    this.score +=pins;
    
  }
  getScore(){
    return this.score;
  }
}
