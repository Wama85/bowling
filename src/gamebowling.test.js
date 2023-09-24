

describe("JUEGO BOWLING", () => {
  it("Dato vacio", () => {
    const escore=new game;
    expect(escore.numero()).toEqual(0);
  });
});

class game{
  numero(){
    return 0
  }
}
