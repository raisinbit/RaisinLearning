import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestaoMultiplaEscolhaBAKPage } from '../questao-multipla-escolha-bak/questao-multipla-escolha-bak';

@Component({
  selector: 'page-atividades',
  templateUrl: 'atividades.html'
})
export class AtividadesPage {

  constructor(public navCtrl: NavController) {
  }
  goToQuestaoMultiplaEscolhaBAK(params){
    if (!params) params = {};
    this.navCtrl.push(QuestaoMultiplaEscolhaBAKPage);
  }
}
