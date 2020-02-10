import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSecComponent } from './components/main-sec/main-sec.component';
import { HealthTipsComponent } from './components/pages/health/health-tips/health-tips.component';
import { FirstAidComponent } from './components/pages/firstAid/first-aid/first-aid.component';
import { FormsModule } from '@angular/forms';
import { ChatModule } from './chat/chat.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SymptompComponent } from './components/pages/symptomp/symptomp.component';
import { AboutComponent } from './components/pages/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    MainSecComponent,
    HealthTipsComponent,
    FirstAidComponent,
    NavBarComponent,
    FooterComponent,
    SymptompComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
