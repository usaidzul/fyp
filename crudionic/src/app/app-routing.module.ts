import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  //{ path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  //{ path: 'addcustomer', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  //{ path: 'addcustomer/:id/:name/:desc', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  //{ path: 'showcustomer/:id/:name/:desc', loadChildren: './showcustomer/showcustomer.module#ShowcustomerPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'car', loadChildren: './car/car.module#CarPageModule' },
  { path: 'addcar', loadChildren: './addcar/addcar.module#AddcarPageModule' },
  { path: 'addcar/:id/:noPlate/:model', loadChildren: './addcar/addcar.module#AddcarPageModule' },
  { path: 'showcar/:id/:noPlate/:model', loadChildren: './showcar/showcar.module#ShowcarPageModule' },
  { path: 'engine', loadChildren: './engine/engine.module#EnginePageModule' },
  { path: 'addengine', loadChildren: './addengine/addengine.module#AddenginePageModule' },
  { path: 'showengine', loadChildren: './showengine/showengine.module#ShowenginePageModule' },
  //{ path: 'booking', loadChildren: './booking/booking.module#BookingPageModule' },
  //{ path: 'addbooking', loadChildren: './addbooking/addbooking.module#AddbookingPageModule' },
  //{ path: 'showbooking', loadChildren: './showbooking/showbooking.module#ShowbookingPageModule' },
  { path: 'service', loadChildren: './service/service.module#ServicePageModule' },
  { path: 'showservice/:id/:type', loadChildren: './showservice/showservice.module#ShowservicePageModule' },
  { path: 'addservice', loadChildren: './addservice/addservice.module#AddservicePageModule' },
  { path: 'addservice/:id/:type', loadChildren: './addservice/addservice.module#AddservicePageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
