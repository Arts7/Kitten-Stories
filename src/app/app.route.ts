import { Routes } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';

const ROUTES: Routes = [
    { path: 'list-kitten', component: ListKittenComponent },
    { path: 'user-kitten', component: UserKittenComponent },
    { path: 'create-kitten', component: CreateKittenComponent }
];

export  { ROUTES };