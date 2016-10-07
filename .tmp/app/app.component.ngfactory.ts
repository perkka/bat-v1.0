/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '../services/request';
import * as import5 from '../global/global';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '@angular/http/src/http';
import * as import11 from 'ionic-angular/platform/platform';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from 'ionic-angular/components/nav/nav';
import * as import15 from '../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import16 from 'ionic-angular/navigation/view-controller';
import * as import17 from 'ionic-angular/navigation/nav-controller-base';
import * as import18 from 'ionic-angular/components/app/app';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from 'ionic-angular/util/keyboard';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from '@angular/core/src/linker/component_factory_resolver';
import * as import24 from 'ionic-angular/gestures/gesture-controller';
import * as import25 from 'ionic-angular/transitions/transition-controller';
import * as import26 from 'ionic-angular/navigation/deep-linker';
var renderType_MyApp_Host:import0.RenderComponentType = (null as any);
class _View_MyApp_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MyApp_0_4:import3.MyApp;
  __Request_0_5:import4.Request;
  __Global_0_6:import5.Global;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement) {
    super(_View_MyApp_Host0,renderType_MyApp_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  get _Request_0_5():import4.Request {
    if ((this.__Request_0_5 == (null as any))) { (this.__Request_0_5 = new import4.Request(this.parentInjector.get(import10.Http))); }
    return this.__Request_0_5;
  }
  get _Global_0_6():import5.Global {
    if ((this.__Global_0_6 == (null as any))) { (this.__Global_0_6 = new import5.Global()); }
    return this.__Global_0_6;
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MyApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MyApp_0_4 = new import3.MyApp(this.parentInjector.get(import11.Platform));
    this._appEl_0.initComponent(this._MyApp_0_4,[],compView_0);
    compView_0.create(this._MyApp_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.MyApp) && (0 === requestNodeIndex))) { return this._MyApp_0_4; }
    if (((token === import4.Request) && (0 === requestNodeIndex))) { return this._Request_0_5; }
    if (((token === import5.Global) && (0 === requestNodeIndex))) { return this._Global_0_6; }
    return notFoundResult;
  }
}
function viewFactory_MyApp_Host0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_MyApp_Host === (null as any))) { (renderType_MyApp_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_MyApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const MyAppNgFactory:import13.ComponentFactory<import3.MyApp> = new import13.ComponentFactory<import3.MyApp>('ng-component',viewFactory_MyApp_Host0,import3.MyApp);
const styles_MyApp:any[] = [];
var renderType_MyApp:import0.RenderComponentType = (null as any);
class _View_MyApp0 extends import1.AppView<import3.MyApp> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Nav_0_4:import14.Nav;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement) {
    super(_View_MyApp0,renderType_MyApp,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-nav',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import15.viewFactory_Nav0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Nav_0_4 = new import14.Nav(this.parentInjector.get(import16.ViewController,(null as any)),this.parentInjector.get(import17.NavControllerBase,(null as any)),this.parentInjector.get(import18.App),this.parentInjector.get(import19.Config),this.parentInjector.get(import20.Keyboard),new import21.ElementRef(this._el_0),this.parentInjector.get(import22.NgZone),this.renderer,this.parentInjector.get(import23.ComponentFactoryResolver),this.parentInjector.get(import24.GestureController),this.parentInjector.get(import25.TransitionController),this.parentInjector.get(import26.DeepLinker,(null as any)));
    this._appEl_0.initComponent(this._Nav_0_4,[],compView_0);
    compView_0.create(this._Nav_0_4,[],(null as any));
    this._expr_0 = import9.UNINITIALIZED;
    this.init([],[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.Nav) && (0 === requestNodeIndex))) { return this._Nav_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.tabsPage;
    if (import6.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Nav_0_4.root = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Nav_0_4.ngAfterViewInit(); } }
  }
}
export function viewFactory_MyApp0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement):import1.AppView<import3.MyApp> {
  if ((renderType_MyApp === (null as any))) { (renderType_MyApp = viewUtils.createRenderComponentType('/Users/Perkka/booster/.tmp/app/app.component.ts class MyApp - inline template',0,import12.ViewEncapsulation.None,styles_MyApp,{})); }
  return new _View_MyApp0(viewUtils,parentInjector,declarationEl);
}