import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SipCalculatorComponent } from './sip-calculator/sip-calculator.component';
import { HeaderComponent } from './header/header.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SipCalculatorComponent,
    HeaderComponent,
    LoanCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
