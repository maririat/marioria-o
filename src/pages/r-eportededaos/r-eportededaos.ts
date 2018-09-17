import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RIESGOELECTRICOPage } from '../r-iesgoelectrico/r-iesgoelectrico';
import { RIESGOPORTAPASPage } from '../r-iesgoportapas/r-iesgoportapas';
import { RIESGOPORARBOLESPage } from '../r-iesgoporarboles/r-iesgoporarboles';
import { MapasPage } from '../mapas/mapas';

@Component({
  selector: 'page-r-eportededaos',
  templateUrl: 'r-eportededaos.html'
})
export class REPORTEDEDAOSPage {

  constructor(public navCtrl: NavController) {
  }
  goToRIESGOELECTRICO(params){
    if (!params) params = {};
    this.navCtrl.push(RIESGOELECTRICOPage);
  }goToRIESGOPORTAPAS(params){
    if (!params) params = {};
    this.navCtrl.push(RIESGOPORTAPASPage);
  }goToRIESGOPORARBOLES(params){
    if (!params) params = {};
    this.navCtrl.push(RIESGOPORARBOLESPage);
  }goToMapas(params){
    if (!params) params = {};
    this.navCtrl.push(MapasPage);
  }
}
