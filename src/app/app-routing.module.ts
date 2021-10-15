import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';

const routes: Routes = [
    { path: '', redirectTo: 'cards', pathMatch: 'full' },
    { path: 'cards', component: CardlistComponent },
    { path: 'details/:accountBid', component: CarddetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }