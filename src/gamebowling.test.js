

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
  rollmany(n,pins){
   for(let i=0;i<n;i++){
      this.roll(pins)
    }

  }
}
