import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZmpComponent } from './components/zmp/zmp.component';
import { PostZmpComponent } from './components/post-zmp/post-zmp.component';
import { UpdateZmpComponent } from './components/update-zmp/update-zmp.component';
import { MapComponent } from './components/map/map.component';


export const routes: Routes = [
  { path: '', component: ZmpComponent }, 
  { path: 'post-zmp', component: PostZmpComponent }, 
  { path: 'post-zmp', component: PostZmpComponent },
  { path: 'update-zmp/:id', component: UpdateZmpComponent }, 
  { path: 'map', component: MapComponent }, 
];
