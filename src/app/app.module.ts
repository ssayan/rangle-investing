import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockItemComponent } from './components/stock-item/stock-item.component';
import { StockSummaryComponent } from './components/stock-summary/stock-summary.component';

const routes: Routes = [
  { path: '', redirectTo: 'my-stocks', pathMatch: 'full' },
  { path: 'my-stocks', component: StockListComponent },
  { path: 'stock-item/:stockSymbol', component: StockItemComponent },         // purchased stock
  { path: 'stock-summary/:stockSymbol', component: StockSummaryComponent },   // generic info
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockItemComponent,
    StockSummaryComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot(routes)
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
