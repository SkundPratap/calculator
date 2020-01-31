import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { ToastrModule } from 'ngx-toastr';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { GridViewComponent } from './grid-view/grid-view.component';  
import { FormsModule } from '@angular/forms';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { MatSliderModule } from '@angular/material/slider';
@NgModule({  
  declarations: [  
    AppComponent,  
    GridViewComponent,  
  ],  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    FormsModule ,
    MatSliderModule,
    BrowserAnimationsModule,  
    ToastrModule.forRoot()  
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  