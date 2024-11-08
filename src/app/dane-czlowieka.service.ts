import { Injectable } from '@angular/core';
import { Dane } from './dane';

@Injectable({
  providedIn: 'root'
})
export class DaneCzlowiekaService {
  daneCzlowieka: Dane[] = [];

  getAllLudzie(){
    return this.daneCzlowieka;
  }

  saveDataCzlowiek(daneCzlo:Dane){
    if(!this.daneCzlowieka.includes(daneCzlo)){
      this.daneCzlowieka.push(daneCzlo);
      alert("Pomyślnie dodano nową osobę!");
    }
    else{
      alert("Ta osoba została już wcześniej dodana!");
    }
  }

  constructor() { }
}
