import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./user/user.module").then((m) => m.UserModule)
      },
      {
        path: 'comment',
        loadChildren: () => import("./comment/comment.module").then((m) => m.CommentModule),
      },
      {
        path: 'photo',
        loadChildren: () => import("./photo/photo.module").then((m) => m.PhotoModule),
      },
      {
        path: 'todo',
        loadChildren: () => import("./todo/todo.module").then((m) => m.TodoModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
