import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CriarAtividadePage } from '../pages/criar-atividade/criar-atividade';
import { AcompanharAtividadesPage } from '../pages/acompanhar-atividades/acompanhar-atividades';
import { EventosPage } from '../pages/eventos/eventos';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { AtividadesPage } from '../pages/atividades/atividades';
import { EstatSticasPage } from '../pages/estat-sticas/estat-sticas';
import { CriarMultiplaEscolhaPage } from '../pages/criar-multipla-escolha/criar-multipla-escolha';
import { CriarVerdadeiroFalsoPage } from '../pages/criar-verdadeiro-falso/criar-verdadeiro-falso';
import { CriarEnquetePage } from '../pages/criar-enquete/criar-enquete';
import { CriarTextoPage } from '../pages/criar-texto/criar-texto';
import { CriarDocumentoPage } from '../pages/criar-documento/criar-documento';
import { AcessoPage } from '../pages/acesso/acesso';
import { RegistrarSePage } from '../pages/registrar-se/registrar-se';
import { AcompanhamentoDeAtividadePage } from '../pages/acompanhamento-de-atividade/acompanhamento-de-atividade';
import { QuestaoMultiplaEscolhaPage } from '../pages/questao-multipla-escolha/questao-multipla-escolha';
import { QuestaoMultiplaEscolhaBAKPage } from '../pages/questao-multipla-escolha-bak/questao-multipla-escolha-bak';
import { ConfigurarPage } from '../pages/configurar/configurar';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { SobrePage } from '../pages/sobre/sobre';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CriarAtividadePage,
    AcompanharAtividadesPage,
    EventosPage,
    TabsControllerPage,
    AtividadesPage,
    EstatSticasPage,
    CriarMultiplaEscolhaPage,
    CriarVerdadeiroFalsoPage,
    CriarEnquetePage,
    CriarTextoPage,
    CriarDocumentoPage,
    AcessoPage,
    RegistrarSePage,
    AcompanhamentoDeAtividadePage,
    QuestaoMultiplaEscolhaPage,
    QuestaoMultiplaEscolhaBAKPage,
    ConfigurarPage,
    AjudaPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CriarAtividadePage,
    AcompanharAtividadesPage,
    EventosPage,
    TabsControllerPage,
    AtividadesPage,
    EstatSticasPage,
    CriarMultiplaEscolhaPage,
    CriarVerdadeiroFalsoPage,
    CriarEnquetePage,
    CriarTextoPage,
    CriarDocumentoPage,
    AcessoPage,
    RegistrarSePage,
    AcompanhamentoDeAtividadePage,
    QuestaoMultiplaEscolhaPage,
    QuestaoMultiplaEscolhaBAKPage,
    ConfigurarPage,
    AjudaPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}