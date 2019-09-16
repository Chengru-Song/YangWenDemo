import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { MajorsComponent } from '../components/majors/majors.component'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Tab2Page },
      { path: '', component: MajorsComponent}
    ])
  ],
  declarations: [Tab2Page, MajorsComponent],
  exports: [MajorsComponent]
})
export class Tab2PageModule {}
