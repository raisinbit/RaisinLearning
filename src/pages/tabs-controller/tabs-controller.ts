import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CriarAtividadePage } from '../criar-atividade/criar-atividade';
import { AcompanharAtividadesPage } from '../acompanhar-atividades/acompanhar-atividades';
import { EventosPage } from '../eventos/eventos';
import { AtividadesPage } from '../atividades/atividades';
import { EstatSticasPage } from '../estat-sticas/estat-sticas';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = CriarAtividadePage;
  tab2Root: any = AcompanharAtividadesPage;
  tab3Root: any = EventosPage;
  tab4Root: any = AtividadesPage;
  tab5Root: any = EstatSticasPage;
  constructor(public navCtrl: NavController) {
  }
  
}
