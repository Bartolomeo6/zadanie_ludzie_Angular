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
  daneCzlowiek:Dane = new Dane('','',0,'',Plec.P,0,'');
  daneService: DaneCzlowiekaService = inject(DaneCzlowiekaService);

  zapisz(){
    this.daneService.saveDataCzlowiek(this.daneCzlowiek);
    this.daneCzlowiek = new Dane('','',0,'',Plec.P,0,'');
  }
}
