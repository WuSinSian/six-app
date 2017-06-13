import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { UpperPipe } from './upper.pipe';
import { FilterPipe } from './filter.pipe';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FooterComponent,
    UpperPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
