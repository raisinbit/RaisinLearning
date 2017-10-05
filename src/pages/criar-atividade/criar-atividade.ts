import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CriarMultiplaEscolhaPage } from '../criar-multipla-escolha/criar-multipla-escolha';
import { CriarTextoPage } from '../criar-texto/criar-texto';
import { CriarDocumentoPage } from '../criar-documento/criar-documento';
import { CriarEnquetePage } from '../criar-enquete/criar-enquete';
import { CriarVerdadeiroFalsoPage } from '../criar-verdadeiro-falso/criar-verdadeiro-falso';

@Component({
  selector: 'page-criar-atividade',
  templateUrl: 'criar-atividade.html'
})
export class CriarAtividadePage {

  constructor(public navCtrl: NavController) {
  }
  goToCriarMultiplaEscolha(params){
    if (!params) params = {};
    this.navCtrl.push(CriarMultiplaEscolhaPage);
  }goToCriarTexto(params){
    if (!params) params = {};
    this.navCtrl.push(CriarTextoPage);
  }goToCriarDocumento(params){
    if (!params) params = {};
    this.navCtrl.push(CriarDocumentoPage);
  }goToCriarEnquete(params){
    if (!params) params = {};
    this.navCtrl.push(CriarEnquetePage);
  }goToCriarVerdadeiroFalso(params){
    if (!params) params = {};
    this.navCtrl.push(CriarVerdadeiroFalsoPage);
  }
}
