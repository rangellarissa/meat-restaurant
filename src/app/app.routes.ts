import {Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { InputComponent } from './shared/input/input.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
           {path: '', redirectTo: 'menu', pathMatch: 'full'},
           {path: 'menu', component: MenuComponent}, 
           {path: 'reviews', component: ReviewsComponent}, 
        ]},
    {path: 'order', loadChildren: './order/order.module#OrderModule'}, 
    {path: 'order-summary', component: OrderSummaryComponent}, 
    {path: 'input', component: InputComponent}, 
    {path: '**', component: NotFoundComponent}, 
]