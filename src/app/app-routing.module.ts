import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatDialogComponent } from '../app/chat/chat-dialog/chat-dialog.component';
import { MainSecComponent } from './components/main-sec/main-sec.component'
import { FirstAidComponent } from './components/pages/firstAid/first-aid/first-aid.component';
import { HealthTipsComponent } from './components/pages/health/health-tips/health-tips.component';
import { SymptompComponent } from './components/pages/symptomp/symptomp.component';
import { AboutComponent } from './components/pages/about/about.component';


const routes: Routes = [
  {path: 'drstrange', component: ChatDialogComponent},
  {path: 'firstaid', component: FirstAidComponent},
  {path: 'healthtips', component: HealthTipsComponent},
  {path: 'symptomtips', component: SymptompComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: MainSecComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
