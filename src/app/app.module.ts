import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventosPage } from '../pages/eventos/eventos';
import { QuestionRiosPage } from '../pages/question-rios/question-rios';
import { EstatSticaPage } from '../pages/estat-stica/estat-stica';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { QuestionRioPage } from '../pages/question-rio/question-rio';
import { EventoPage } from '../pages/evento/evento';
import { CriarMLtiplaEscolhaPage } from '../pages/criar-mltipla-escolha/criar-mltipla-escolha';
import { EnquetePage } from '../pages/enquete/enquete';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    EventosPage,
    QuestionRiosPage,
    EstatSticaPage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    QuestionRioPage,
    EventoPage,
    CriarMLtiplaEscolhaPage,
    EnquetePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventosPage,
    QuestionRiosPage,
    EstatSticaPage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    QuestionRioPage,
    EventoPage,
    CriarMLtiplaEscolhaPage,
    EnquetePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}