import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DogbreedApiService } from './services/dogbreed-api.service';
import { SearchbreedComponent } from './components/searchbreed/searchbreed.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes:Routes=[
  { path:'', component:HomeComponent},
  { path:'searchbreed', component:SearchbreedComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    SearchbreedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DogbreedApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
