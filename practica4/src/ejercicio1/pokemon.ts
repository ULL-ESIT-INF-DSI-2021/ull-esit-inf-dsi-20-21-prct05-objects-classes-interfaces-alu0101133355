export class Pokemon {
    private BasicData = {
      AT: 0,
      DF: 0,
      VL: 0,
      HP: 0,
    }
    constructor(private name: string, private weight: number, private height: number, private PokType: string, BasicData: [number, number, number, number]) {
      this.BasicData.AT = BasicData[0];
      this.BasicData.DF = BasicData[1];
      this.BasicData.VL = BasicData[2];
      this.BasicData.HP = BasicData[3];
    }
  
    public get_Name() {
      return this.name;
    }
    public get_Weight() {
      return this.weight;
    }
    public get_Height() {
      return this.height;
    }
    public get_pokemon_Type() {
      return this.PokType;
    }
    public get_basic_data() {
      return this.BasicData;
    }
    public set_HP(hp: number) {
      this.BasicData.HP = hp;
    }
  }