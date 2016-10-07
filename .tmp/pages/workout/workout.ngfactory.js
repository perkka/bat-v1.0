/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './workout';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '../../services/request';
import * as import11 from '../../global/global';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from 'ionic-angular/components/toolbar/toolbar';
import * as import15 from 'ionic-angular/components/navbar/navbar';
import * as import16 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import17 from 'ionic-angular/components/content/content';
import * as import18 from 'ionic-angular/config/config';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from 'ionic-angular/navigation/view-controller';
import * as import21 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import22 from 'ionic-angular/components/app/app';
import * as import23 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from 'ionic-angular/components/tabs/tabs';
var renderType_WorkoutPage_Host = null;
var _View_WorkoutPage_Host0 = (function (_super) {
    __extends(_View_WorkoutPage_Host0, _super);
    function _View_WorkoutPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_WorkoutPage_Host0, renderType_WorkoutPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_WorkoutPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_WorkoutPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._WorkoutPage_0_4 = new import3.WorkoutPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams), this.parentInjector.get(import10.Request), this.parentInjector.get(import11.Global));
        this._appEl_0.initComponent(this._WorkoutPage_0_4, [], compView_0);
        compView_0.create(this._WorkoutPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_WorkoutPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.WorkoutPage) && (0 === requestNodeIndex))) {
            return this._WorkoutPage_0_4;
        }
        return notFoundResult;
    };
    return _View_WorkoutPage_Host0;
}(import1.AppView));
function viewFactory_WorkoutPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_WorkoutPage_Host === null)) {
        (renderType_WorkoutPage_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_WorkoutPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var WorkoutPageNgFactory = new import13.ComponentFactory('ng-component', viewFactory_WorkoutPage_Host0, import3.WorkoutPage);
var styles_WorkoutPage = [];
var renderType_WorkoutPage = null;
var _View_WorkoutPage0 = (function (_super) {
    __extends(_View_WorkoutPage0, _super);
    function _View_WorkoutPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_WorkoutPage0, renderType_WorkoutPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_WorkoutPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import14.Header(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import20.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import21.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import15.Navbar(this.parentInjector.get(import22.App), this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import23.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import16.ToolbarTitle(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import14.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      Workout\n    ', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import24.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import17.Content(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import22.App), this.parentInjector.get(import25.Keyboard), this.parentInjector.get(import26.NgZone), this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import27.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n        \n', null);
        this._el_11 = this.renderer.createElement(null, 'button', null);
        this._text_12 = this.renderer.createText(this._el_11, 'Click for Exer', null);
        this._text_13 = this.renderer.createText(null, '\n         \n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_13
            ]),
            []
        ], null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        this.init([], [
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
            this._text_13,
            this._text_14
        ], [disposable_0], []);
        return null;
    };
    _View_WorkoutPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import15.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import14.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import17.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_WorkoutPage0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_WorkoutPage0.prototype.destroyInternal = function () {
        this._Content_9_4.ngOnDestroy();
    };
    _View_WorkoutPage0.prototype._handle_click_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context._Training() !== false);
        return (true && pd_0);
    };
    return _View_WorkoutPage0;
}(import1.AppView));
export function viewFactory_WorkoutPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_WorkoutPage === null)) {
        (renderType_WorkoutPage = viewUtils.createRenderComponentType('/Users/Perkka/booster/.tmp/pages/workout/workout.html', 0, import12.ViewEncapsulation.None, styles_WorkoutPage, {}));
    }
    return new _View_WorkoutPage0(viewUtils, parentInjector, declarationEl);
}
