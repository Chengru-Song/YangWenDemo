import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'information', loadChildren: './pages/information/information.module#InformationPageModule' },  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'computer', loadChildren: './pages/computer/computer.module#ComputerPageModule' },
  { path: 'dial-number', loadChildren: './pages/tab2/dial-number/dial-number.module#DialNumberPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
