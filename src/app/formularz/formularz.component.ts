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
  nazwaCzlo: string = "";
  emailCz: string = "";
  ocenaCz: number = 0;
  zawodCz: string = "";
  plecCz: Plec = Plec.P;
  wiekCz: number = 0;
  zainteresowaniaCz: string = "";

  daneCzlowiek:Dane = new Dane(this.nazwaCzlo, this.emailCz, this.ocenaCz, this.zawodCz, this.plecCz, this.wiekCz, this.zainteresowaniaCz);
  daneService: DaneCzlowiekaService = inject(DaneCzlowiekaService);

  zapisz(){
    this.daneService.saveDataCzlowiek(this.daneCzlowiek);
    this.daneCzlowiek = new Dane('','',0,'',Plec.P,0,'');
  }
}
