import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { NotesServiceService } from './notes-service.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule], 
  providers: [NotesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
