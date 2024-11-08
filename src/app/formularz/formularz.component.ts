import { Plec } from './../dane';
import { Component, inject } from '@angular/core';
import { Dane } from '../dane';
import {FormsModule} from '@angular/forms';
import { DaneCzlowiekaService } from '../dane-czlowieka.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularz',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formularz.component.html',
  styleUrl: './formularz.component.css'
})
export class FormularzComponent {
  daneCzlowiek:Dane = new Dane('','',0,'',Plec.P,null,'');
  daneService: DaneCzlowiekaService = inject(DaneCzlowiekaService);
  czyZaznaczKobieta:boolean = false;
  czyZaznaczonyMez:boolean = false;
  czyMalpa: boolean = false;

  aktualizujPlec() { 
    if (this.czyZaznaczonyMez) { 
      this.daneCzlowiek.plec = Plec.M; 
    } 
    else if (this.czyZaznaczKobieta) { 
      this.daneCzlowiek.plec = Plec.K; 
    }
    else{
      this.daneCzlowiek.plec = Plec.P;
    }
    
  }
  
  zapisz(){
    this.daneService.saveDataCzlowiek(this.daneCzlowiek);
  }
}
