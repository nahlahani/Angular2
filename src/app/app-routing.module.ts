import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UsersDetailComponent} from './users-detail/users-detail.component';

const routes: Routes = [
    // For Each Route, We Specify The Path and a Refernce to the Component
    {path: 'home', component: HomePageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'users', component: UsersPageComponent,
     children: [{path: ':id', component: UsersDetailComponent}]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
export const routingComponents = [HomePageComponent, UsersPageComponent, AboutPageComponent, UsersDetailComponent]
