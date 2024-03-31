import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestRxjsOpertorsComponent } from './test-rxjs-opertors/test-rxjs-opertors.component';
import { PipeWithDatePipe } from './PipeExamples/pipe-with-date.pipe';
import { HighlightEleDirective } from './DirectivesExample/highlight-ele.directive';
import { ChildFirstComponent } from './ChildComponent/child-first/child-first.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cardReducer } from './Store/user.reducers';
import { DisplayActionUserComponent } from './NgRxStaeExp/display-action-user/display-action-user.component';
import { ActionUserComponent } from './NgRxStaeExp/action-user/action-user.component'; 
import { AgGridExampleComponent } from './AG-Grid/ag-grid-example/ag-grid-example.component';
import { AgGridAngular } from 'ag-grid-angular';
 


@NgModule({
  declarations: [
    AppComponent,
    TestRxjsOpertorsComponent,
    PipeWithDatePipe,
    HighlightEleDirective,
    ChildFirstComponent,
    ActionUserComponent,
    DisplayActionUserComponent,    
    AgGridExampleComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridAngular,
    StoreModule.forRoot({'cardCount':cardReducer}, {}),
    EffectsModule.forRoot([]),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
