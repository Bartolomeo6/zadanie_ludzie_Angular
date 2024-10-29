export class Dane {
  constructor(
    public nazwa: string,
    public email: string,
    public ocena: number,
    public zawod: string,
    public plec: Plec,
    public wiek: number,
    public zainteresowania: string
  )
  {}
}

export enum Plec{
  M = "Mężczyzna",
  K = "Kobieta",
  P = ""
}



