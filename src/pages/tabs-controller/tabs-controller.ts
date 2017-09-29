import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos';
import { QuestionRiosPage } from '../question-rios/question-rios';
import { EstatSticaPage } from '../estat-stica/estat-stica';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = EventosPage;
  tab2Root: any = QuestionRiosPage;
  tab3Root: any = EstatSticaPage;
  constructor(public navCtrl: NavController) {
  }
  
}
