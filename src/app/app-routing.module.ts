import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { DemoComponent} from './demo/demo.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './guardian/admin.guard';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'products',
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
    },
    {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module').then( m => m.ContactModule)
    },
    {
      path: 'order',
      loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
    }
  ]
},
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
{
  path: 'admin',
  canActivate: [AdminGuard],
  loadChildren: () => import('@admin/admin.module').then(m => m.AdminModule)
},
{
  path: 'demo',
  component: DemoComponent
},
{
  path: '**',
  loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
