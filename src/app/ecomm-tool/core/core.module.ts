import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TopNavigationComponent],
  exports: [
    TopNavigationComponent
  ]
})
export class CoreModule { }
