import game from "./jugadas";

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


