import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcompanhamentoDeAtividadePage } from '../acompanhamento-de-atividade/acompanhamento-de-atividade';
import { QuestaoMultiplaEscolhaPage } from '../questao-multipla-escolha/questao-multipla-escolha';

@Component({
  selector: 'page-acompanhar-atividades',
  templateUrl: 'acompanhar-atividades.html'
})
export class AcompanharAtividadesPage {

  constructor(public navCtrl: NavController) {
  }
  goToAcompanhamentoDeAtividade(params){
    if (!params) params = {};
    this.navCtrl.push(AcompanhamentoDeAtividadePage);
  }goToQuestaoMultiplaEscolha(params){
    if (!params) params = {};
    this.navCtrl.push(QuestaoMultiplaEscolhaPage);
  }
}
