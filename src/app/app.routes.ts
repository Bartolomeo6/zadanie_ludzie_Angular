import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FormularzComponent } from './formularz/formularz.component';
import { CzlowiekComponent } from './czlowiek/czlowiek.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path:"", component:AppComponent},
  {path: "formularz", component:FormularzComponent},
  {path: "czlowiek", component:CzlowiekComponent}
];
