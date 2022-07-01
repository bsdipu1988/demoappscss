import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SipCalculatorComponent } from './sip-calculator/sip-calculator.component';
import { HeaderComponent } from './header/header.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FinalCalculationComponent } from './final-calculation/final-calculation.component';
import { FooterComponent } from './footer/footer.component';
import { HearderThemeComponent } from './hearder-theme/hearder-theme.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SipCalculatorComponent,
    HeaderComponent,
    LoanCalculatorComponent,
    WrapperComponent,
    FinalCalculationComponent,
    FooterComponent,
    HearderThemeComponent,
    AboutUsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
