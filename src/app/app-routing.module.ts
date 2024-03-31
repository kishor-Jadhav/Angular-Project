import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRxjsOpertorsComponent } from './test-rxjs-opertors/test-rxjs-opertors.component';
import { ChildFirstComponent } from './ChildComponent/child-first/child-first.component';
import { ActionUserComponent } from './NgRxStaeExp/action-user/action-user.component'; 
import { AgGridExampleComponent } from './AG-Grid/ag-grid-example/ag-grid-example.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  { 
    path: 'home', 
    component: TestRxjsOpertorsComponent,
    pathMatch:'full',
    children: [ // Define child routes here
      { path: 'child', component: ChildFirstComponent },
       
    ]
  },
  { 
    path: 'ngrxstate', 
    component: ActionUserComponent,
    pathMatch:'full',    
  },
  { 
    path: 'ag-grid', 
    component: AgGridExampleComponent,
    pathMatch:'full',    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
