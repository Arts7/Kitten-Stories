import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RacineComponent } from './racine/racine.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { ROUTES } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    RacineComponent,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
