import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { SignupComponent } from './signup/signup.component';
import { SipCalculatorComponent } from './sip-calculator/sip-calculator.component'

const routes: Routes = [
  {path: '',component: SipCalculatorComponent},
  {path: 'sipcalculator',component: SipCalculatorComponent},
  {path: 'loancalculator',component: LoanCalculatorComponent},
  {path: 'aboutus',component: AboutUsComponent},
  {path: 'signup',component: SignupComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
