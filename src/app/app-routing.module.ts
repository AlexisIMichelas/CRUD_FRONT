import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ArticlesShowComponent } from './components/articles-show/articles-show.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminGuard } from './auth/admin.guard';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'; // Importer le composant ForgotPassword
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserManagementComponent } from './components/user-management/user-management.component';// Importer le composant ResetPassword

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'articles/:id', component: ArticleDetailsComponent },
  { path: 'add', component: AddArticleComponent },
  { path: 'show', component: ArticlesShowComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '404', component: NotFoundComponent }, // Route 404 pour toutes les routes non trouvées
  { path: '405', component: ForbiddenComponent }, // Route 405 pour l'accès interdit
  { path: 'forgot-password', component: ForgotPasswordComponent }, // Route pour la demande de réinitialisation
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'users', component: UserManagementComponent, canActivate: [AdminGuard] }, // Route pour la réinitialisation du mot de passe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
