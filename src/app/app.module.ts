import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgRedux,NgReduxModule, select } from 'ng2-redux';
// import { HTTP_PROVIDERS } from '@angular/http';
// import { middleware, enhancers } from '../store';
// import { Observable } from 'rxjs/Observable';

// import { IAppState,  rootReducer } from '../store';
import { HttpClientModule } from '@angular/common/http';
import {SharedService} from './shared.service'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ResultsListComponent } from './results-list/results-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    ResultsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // NgReduxModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  // constructor(
  //   ngRedux: NgRedux<IAppState>) {

  //   ngRedux.configureStore(rootReducer, {});
//  }
 }
