import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DaneCzlowiekaService } from '../dane-czlowieka.service';
import { Dane } from '../dane';

@Component({
  selector: 'app-czlowiek',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './czlowiek.component.html',
  styleUrl: './czlowiek.component.css'
})
export class CzlowiekComponent {
  listaLudzi: Dane[]=[];
  constructor(daneService: DaneCzlowiekaService){
    this.listaLudzi = daneService.getAllLudzie();
  }
}
