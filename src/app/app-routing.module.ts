import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { SipCalculatorComponent } from './sip-calculator/sip-calculator.component'

const routes: Routes = [
  {path: '',component: SipCalculatorComponent},
  {path: 'sipcalculator',component: SipCalculatorComponent},
  {path: 'loancalculator',component: LoanCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
