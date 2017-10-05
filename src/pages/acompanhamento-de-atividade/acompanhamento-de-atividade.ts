import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestaoMultiplaEscolhaPage } from '../questao-multipla-escolha/questao-multipla-escolha';

@Component({
  selector: 'page-acompanhamento-de-atividade',
  templateUrl: 'acompanhamento-de-atividade.html'
})
export class AcompanhamentoDeAtividadePage {

  constructor(public navCtrl: NavController) {
  }
  goToQuestaoMultiplaEscolha(params){
    if (!params) params = {};
    this.navCtrl.push(QuestaoMultiplaEscolhaPage);
  }
}
