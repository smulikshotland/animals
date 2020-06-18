import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GiraffesComponent } from './comps/giraffes/giraffes.component';
import { ElephantsComponent } from './comps/elephants/elephants.component';
import { CatsComponent } from './comps/cats/cats.component';
import { LiGiraffComponent } from './comps/giraffes/li-giraff/li-giraff.component';
import { DescriptionGiraffComponent } from './comps/giraffes/description-giraff/description-giraff.component';
import { TextGiraffComponent } from './comps/giraffes/text-giraff/text-giraff.component';
import { LiElephantsComponent } from './comps/elephants/li-elephants/li-elephants.component';
import { DescriptionElephantsComponent } from './comps/elephants/description-elephants/description-elephants.component';
import { TextElephantsComponent } from './comps/elephants/text-elephants/text-elephants.component';
import { LiCatsComponent } from './comps/cats/li-cats/li-cats.component';
import { DescriptionCatsComponent } from './comps/cats/description-cats/description-cats.component';
import { TextCatsComponent } from './comps/cats/text-cats/text-cats.component';

@NgModule({
  declarations: [
    AppComponent,
    GiraffesComponent,
    ElephantsComponent,
    CatsComponent,
    LiGiraffComponent,
    DescriptionGiraffComponent,
    TextGiraffComponent,
    LiElephantsComponent,
    DescriptionElephantsComponent,
    TextElephantsComponent,
    LiCatsComponent,
    DescriptionCatsComponent,
    TextCatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
