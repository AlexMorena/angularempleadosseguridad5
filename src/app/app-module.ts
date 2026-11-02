import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { ImagenesComponent } from './components/imagenes-component/imagenes-component';
import { AuthGuard } from './guards/auth-guard';
import { provideHttpClient } from '@angular/common/http';
import { ServiceAuth } from './services/service-auth';
import { ServiceEmpleado } from './services/service-empleado';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    SubordinadosComponent,
    ImagenesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthGuard,provideBrowserGlobalErrorListeners(),provideHttpClient(), ServiceAuth, ServiceEmpleado],
  bootstrap: [App],
})
export class AppModule {}
