import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguagePickerComponent } from './language-picker.component';
import { LoginComponent } from './login.component';
import { DeficiencyAppComponent } from './deficiency-update/deficiency-app.component';
import { DeficiencyViewComponent } from './deficiency-update/view/deficiency-view.component';
import { NavbarComponent } from './shared/navbar.component';
import { JumbotronComponent } from './shared/jumbotron.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LanguagePickerComponent,
    LoginComponent,
    DeficiencyAppComponent,
    DeficiencyViewComponent,
    NavbarComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
