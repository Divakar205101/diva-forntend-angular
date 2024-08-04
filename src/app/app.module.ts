import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { MenuComponent } from './menu/menu.component';
import { SecurityModule } from './security/security/security.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth/auth.module';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { MyInterceptorInterceptor } from './shared/my-interceptor.interceptor';
import { AdminComponent } from './admin/admin.component';
import { BodyComponent } from './body/body.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    MenuComponent,
    BodyComponent,
    DashBoardComponent,
    AdminComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    SecurityModule,
    HttpClientModule,
    AuthModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: MyInterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
