import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { InitCesiumComponent } from './pages/init-cesium/init-cesium.component';
import { AddEntityComponent } from './pages/add-entity/add-entity.component';
import { AddGltfComponent } from './pages/add-gltf/add-gltf.component';
import { Tiles3dComponent } from './pages/tiles3d/tiles3d.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CameraComponent } from './pages/camera/camera.component'
@NgModule({
  imports: [WelcomeRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzButtonModule,
],
  declarations: [WelcomeComponent, InitCesiumComponent, AddEntityComponent, AddGltfComponent, Tiles3dComponent, CameraComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }