import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguagePickerComponent } from './language-picker.component';
import { LoginComponent } from './login.component';
import { DeficiencyAppComponent } from './deficiency-update/deficiency-app.component';
import { DeficiencyViewComponent } from './deficiency-update/view/deficiency-view.component';


const routes: Routes = [
  { path: '', component: LanguagePickerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dut', component: DeficiencyAppComponent },
  { path: 'dut/view', component: DeficiencyViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
