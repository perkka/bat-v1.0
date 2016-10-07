/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './training';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '../../services/request';
import * as import11 from '../../global/global';
import * as import12 from 'ionic-angular/components/alert/alert';
import * as import13 from 'ionic-angular/navigation/view-controller';
import * as import14 from '@angular/core/src/metadata/view';
import * as import15 from '@angular/core/src/linker/component_factory';
import * as import16 from 'ionic-angular/components/toolbar/toolbar';
import * as import17 from 'ionic-angular/components/navbar/navbar';
import * as import18 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import19 from 'ionic-angular/components/content/content';
import * as import20 from 'ionic-angular/components/grid/grid';
import * as import21 from 'ionic-angular/components/card/card';
import * as import22 from 'ionic-angular/components/list/list';
import * as import23 from '@angular/common/src/directives/ng_for';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import27 from 'ionic-angular/components/app/app';
import * as import28 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import29 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import30 from 'ionic-angular/util/keyboard';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from 'ionic-angular/components/tabs/tabs';
import * as import33 from 'ionic-angular/gestures/gesture-controller';
import * as import34 from '@angular/core/src/linker/template_ref';
import * as import35 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import36 from 'ionic-angular/components/item/item';
import * as import37 from '@angular/core/src/linker/query_list';
import * as import38 from 'ionic-angular/components/label/label';
import * as import39 from 'ionic-angular/components/toggle/toggle';
import * as import40 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import41 from 'ionic-angular/util/form';
import * as import42 from '../../node_modules/ionic-angular/components/toggle/toggle.ngfactory';
import * as import43 from '@angular/forms/src/directives/control_value_accessor';
var renderType_TrainingPage_Host:import0.RenderComponentType = (null as any);
class _View_TrainingPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TrainingPage_0_4:import3.TrainingPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TrainingPage_Host0,renderType_TrainingPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_TrainingPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TrainingPage_0_4 = new import3.TrainingPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.NavParams),this.parentInjector.get(import10.Request),this.parentInjector.get(import11.Global),this.parentInjector.get(import12.AlertController),this.parentInjector.get(import13.ViewController));
    this._appEl_0.initComponent(this._TrainingPage_0_4,[],compView_0);
    compView_0.create(this._TrainingPage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.TrainingPage) && (0 === requestNodeIndex))) { return this._TrainingPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_TrainingPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_TrainingPage_Host === (null as any))) { (renderType_TrainingPage_Host = viewUtils.createRenderComponentType('',0,import14.ViewEncapsulation.None,[],{})); }
  return new _View_TrainingPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const TrainingPageNgFactory:import15.ComponentFactory<import3.TrainingPage> = new import15.ComponentFactory<import3.TrainingPage>('ng-component',viewFactory_TrainingPage_Host0,import3.TrainingPage);
const styles_TrainingPage:any[] = [];
var renderType_TrainingPage:import0.RenderComponentType = (null as any);
class _View_TrainingPage0 extends import1.AppView<import3.TrainingPage> {
  _el_0:any;
  _Header_0_3:import16.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import17.Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _ToolbarTitle_4_4:import18.ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _Content_9_4:import19.Content;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _Row_13_3:import20.Row;
  _text_14:any;
  _el_15:any;
  _Col_15_3:import20.Col;
  _text_16:any;
  _el_17:any;
  _Card_17_3:import21.Card;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _el_29:any;
  _text_30:any;
  _text_31:any;
  _el_32:any;
  _List_32_3:import22.List;
  _text_33:any;
  _anchor_34:any;
  /*private*/ _appEl_34:import2.AppElement;
  _TemplateRef_34_5:any;
  _NgFor_34_6:import23.NgFor;
  _text_35:any;
  _text_36:any;
  _text_37:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TrainingPage0,renderType_TrainingPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import16.Header(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import13.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import26.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import17.Navbar(this.parentInjector.get(import27.App),this.parentInjector.get(import13.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,[],compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    var compView_4:any = import28.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import18.ToolbarTitle(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import16.Toolbar,(null as any)),this._Navbar_2_4);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4,[],compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n      Training\n    ',(null as any));
    compView_4.create(this._ToolbarTitle_4_4,[[].concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      [],
      [],
      [],
      [].concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','training');
    this._appEl_9 = new import2.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import29.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import19.Content(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import27.App),this.parentInjector.get(import30.Keyboard),this.parentInjector.get(import31.NgZone),this.parentInjector.get(import13.ViewController,(null as any)),this.parentInjector.get(import32.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4,[],compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','exSquare');
    this._text_12 = this.renderer.createText(this._el_11,'\n       ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'ion-row',(null as any));
    this._Row_13_3 = new import20.Row();
    this._text_14 = this.renderer.createText(this._el_13,'\n            ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_13,'ion-col',(null as any));
    this._Col_15_3 = new import20.Col();
    this._text_16 = this.renderer.createText(this._el_15,'\n                ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_15,'ion-card',(null as any));
    this._Card_17_3 = new import21.Card(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_17),this.renderer);
    this._text_18 = this.renderer.createText(this._el_17,'\n                   \n                      ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_17,'div',(null as any));
    this.renderer.setElementAttribute(this._el_19,'class','card-title');
    this._text_20 = this.renderer.createText(this._el_19,'',(null as any));
    this._text_21 = this.renderer.createText(this._el_17,'\n                      ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_17,'div',(null as any));
    this.renderer.setElementAttribute(this._el_22,'class','card-title');
    this._text_23 = this.renderer.createText(this._el_22,'',(null as any));
    this._text_24 = this.renderer.createText(this._el_17,'\n\n                  ',(null as any));
    this._text_25 = this.renderer.createText(this._el_15,'\n            ',(null as any));
    this._text_26 = this.renderer.createText(this._el_13,' \n          \n                    \n                \n        ',(null as any));
    this._text_27 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_11,'video',(null as any));
    this.renderer.setElementAttribute(this._el_28,'autoplay','autoplay');
    this.renderer.setElementAttribute(this._el_28,'class','videoPlayer');
    this.renderer.setElementAttribute(this._el_28,'controls','controls');
    this.renderer.setElementAttribute(this._el_28,'loop','');
    this.renderer.setElementAttribute(this._el_28,'preload','metadata');
    this.renderer.setElementAttribute(this._el_28,'webkit-playsinline','webkit-playsinline');
    this.renderer.setElementAttribute(this._el_28,'width','380');
    this._el_29 = this.renderer.createElement(this._el_28,'source',(null as any));
    this.renderer.setElementAttribute(this._el_29,'src','http://192.168.1.2:4000/video/stream/b5834b0d-5581-4f3e-b92c-ab6876a2947d');
    this.renderer.setElementAttribute(this._el_29,'type','video/mp4');
    this._text_30 = this.renderer.createText(this._el_11,'\n  ',(null as any));
    this._text_31 = this.renderer.createText((null as any),'\n',(null as any));
    this._el_32 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_32_3 = new import22.List(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_32),this.renderer,this.parentInjector.get(import33.GestureController));
    this._text_33 = this.renderer.createText(this._el_32,'\n         ',(null as any));
    this._anchor_34 = this.renderer.createTemplateAnchor(this._el_32,(null as any));
    this._appEl_34 = new import2.AppElement(34,32,this,this._anchor_34);
    this._TemplateRef_34_5 = new import34.TemplateRef_(this._appEl_34,viewFactory_TrainingPage1);
    this._NgFor_34_6 = new import23.NgFor(this._appEl_34.vcRef,this._TemplateRef_34_5,this.parentInjector.get(import35.IterableDiffers),this.ref);
    this._text_35 = this.renderer.createText(this._el_32,'\n\n',(null as any));
    this._text_36 = this.renderer.createText((null as any),'     \n\n\n\n\n',(null as any));
    compView_9.create(this._Content_9_4,[
      [],
      [].concat([
        this._text_10,
        this._el_11,
        this._text_31,
        this._el_32,
        this._text_36
      ]
      ),
      []
    ]
    ,(null as any));
    this._text_37 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._text_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._el_29,
      this._text_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._anchor_34,
      this._text_35,
      this._text_36,
      this._text_37
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4; }
    if (((token === import17.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4; }
    if (((token === import16.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3; }
    if (((token === import21.Card) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._Card_17_3; }
    if (((token === import20.Col) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 25)))) { return this._Col_15_3; }
    if (((token === import20.Row) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._Row_13_3; }
    if (((token === import34.TemplateRef) && (34 === requestNodeIndex))) { return this._TemplateRef_34_5; }
    if (((token === import23.NgFor) && (34 === requestNodeIndex))) { return this._NgFor_34_6; }
    if (((token === import22.List) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 35)))) { return this._List_32_3; }
    if (((token === import19.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 36)))) { return this._Content_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_9_4.ngOnInit(); }
    changes = (null as any);
    const currVal_5:any = this.context.exercises;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgFor_34_6.ngForOf = currVal_5;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_5,currVal_5);
      this._expr_5 = currVal_5;
    }
    if ((changes !== (null as any))) { this._NgFor_34_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_34_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Navbar_2_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_9_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,' ',this.context.currentExercise.Name,'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_20,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import4.interpolate(1,' ',this.context.currentExercise.Description,'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_23,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_9_4.ngOnDestroy();
  }
}
export function viewFactory_TrainingPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.TrainingPage> {
  if ((renderType_TrainingPage === (null as any))) { (renderType_TrainingPage = viewUtils.createRenderComponentType('/Users/Perkka/booster/.tmp/pages/training/training.html',0,import14.ViewEncapsulation.None,styles_TrainingPage,{})); }
  return new _View_TrainingPage0(viewUtils,parentInjector,declarationEl);
}
class _View_TrainingPage1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Item_0_4:import36.Item;
  _ItemContent_0_5:import36.ItemContent;
  _query_Label_0_0:import37.QueryList<any>;
  _query_Button_0_1:import37.QueryList<any>;
  _query_Icon_0_2:import37.QueryList<any>;
  _text_1:any;
  _el_2:any;
  _Label_2_3:import38.Label;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import2.AppElement;
  _Toggle_5_4:import39.Toggle;
  __NG_VALUE_ACCESSOR_5_5:any[];
  _text_6:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TrainingPage1,renderType_TrainingPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  get _NG_VALUE_ACCESSOR_5_5():any[] {
    if ((this.__NG_VALUE_ACCESSOR_5_5 == (null as any))) { (this.__NG_VALUE_ACCESSOR_5_5 = [this._Toggle_5_4]); }
    return this.__NG_VALUE_ACCESSOR_5_5;
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','item item-block');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import40.viewFactory_Item0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Item_0_4 = new import36.Item(this.parent.parentInjector.get(import41.Form),this.parent.parentInjector.get(import24.Config),new import25.ElementRef(this._el_0),this.renderer);
    this._ItemContent_0_5 = new import36.ItemContent();
    this._query_Label_0_0 = new import37.QueryList<any>();
    this._query_Button_0_1 = new import37.QueryList<any>();
    this._query_Icon_0_2 = new import37.QueryList<any>();
    this._appEl_0.initComponent(this._Item_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n              \n                \n                ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-label',(null as any));
    this._Label_2_3 = new import38.Label(this.parent.parentInjector.get(import24.Config),new import25.ElementRef(this._el_2),this.renderer,(null as any),(null as any),(null as any),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText((null as any),'\n                ',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'ion-toggle',(null as any));
    this.renderer.setElementAttribute(this._el_5,'checked','true');
    this.renderer.setElementAttribute(this._el_5,'value','danger');
    this._appEl_5 = new import2.AppElement(5,0,this,this._el_5);
    var compView_5:any = import42.viewFactory_Toggle0(this.viewUtils,this.injector(5),this._appEl_5);
    this._Toggle_5_4 = new import39.Toggle(this.parent.parentInjector.get(import41.Form),this.parent.parentInjector.get(import24.Config),new import25.ElementRef(this._el_5),this.renderer,this._Item_0_4);
    this._appEl_5.initComponent(this._Toggle_5_4,[],compView_5);
    compView_5.create(this._Toggle_5_4,[],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n             \n\n          ',(null as any));
    this._query_Label_0_0.reset([this._Label_2_3]);
    this._Item_0_4.contentLabel = this._query_Label_0_0.first;
    compView_0.create(this._Item_0_4,[
      [],
      [].concat([this._el_2]),
      [].concat([
        this._text_1,
        this._text_4,
        this._text_6
      ]
      ),
      [],
      [].concat([this._el_5])
    ]
    ,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import38.Label) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._Label_2_3; }
    if (((token === import39.Toggle) && (5 === requestNodeIndex))) { return this._Toggle_5_4; }
    if (((token === import43.NG_VALUE_ACCESSOR) && (5 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_5_5; }
    if (((token === import36.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Item_0_4; }
    if (((token === import36.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._ItemContent_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = 'true';
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._Toggle_5_4.checked = currVal_2;
      this._expr_2 = currVal_2;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_0_1.dirty) {
        this._query_Button_0_1.reset([]);
        this._Item_0_4._buttons = this._query_Button_0_1;
        this._query_Button_0_1.notifyOnChanges();
      }
      if (this._query_Icon_0_2.dirty) {
        this._query_Icon_0_2.reset([]);
        this._Item_0_4._icons = this._query_Icon_0_2;
        this._query_Icon_0_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Toggle_5_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_0_4.ngAfterContentInit(); }
    }
    const currVal_1:any = import4.interpolate(1,'',this.context.$implicit.Name,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_3,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_3:any = this._Toggle_5_4._disabled;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_5,'toggle-disabled',currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Toggle_5_4.ngOnDestroy();
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.nextExer(this.context.index)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_TrainingPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_TrainingPage1(viewUtils,parentInjector,declarationEl);
}