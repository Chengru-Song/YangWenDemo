import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular';
import { MajorsComponent } from './components/majors/majors.component';

@NgModule({
  imports: [IonicModule],
  declarations: [MajorsComponent],
  exports: [MajorsComponent]
})

export class ComponentsModule {}