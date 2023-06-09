import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionerComponent } from './components/conversioner/conversioner.component';

const routes: Routes = [
  { path: 'convert', component: ConversionerComponent },
  { path: '**', redirectTo: 'convert' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
