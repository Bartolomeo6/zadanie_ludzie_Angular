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
    this.daneCzlowieka.push(daneCzlo);
  }

  constructor() { }
}
