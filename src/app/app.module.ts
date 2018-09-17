import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { REPORTEDEDAOSPage } from '../pages/r-eportededaos/r-eportededaos';
import { RIESGOELECTRICOPage } from '../pages/r-iesgoelectrico/r-iesgoelectrico';
import { RIESGOPORTAPASPage } from '../pages/r-iesgoportapas/r-iesgoportapas';
import { RIESGOPORARBOLESPage } from '../pages/r-iesgoporarboles/r-iesgoporarboles';
import { MapasPage } from '../pages/mapas/mapas';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    REPORTEDEDAOSPage,
    RIESGOELECTRICOPage,
    RIESGOPORTAPASPage,
    RIESGOPORARBOLESPage,
    MapasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    REPORTEDEDAOSPage,
    RIESGOELECTRICOPage,
    RIESGOPORTAPASPage,
    RIESGOPORARBOLESPage,
    MapasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}