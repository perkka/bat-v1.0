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
import * as import3 from './profile';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../services/request';
import * as import10 from '../../global/global';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from 'ionic-angular/components/toolbar/toolbar';
import * as import14 from 'ionic-angular/components/navbar/navbar';
import * as import15 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import16 from 'ionic-angular/components/content/content';
import * as import17 from '@angular/common/src/directives/ng_for';
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
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import30 from 'ionic-angular/components/item/item';
import * as import31 from '@angular/core/src/linker/query_list';
import * as import32 from 'ionic-angular/components/icon/icon';
import * as import33 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import34 from 'ionic-angular/util/form';
import * as import35 from '@angular/core/src/security';
var renderType_ProfilePage_Host = null;
var _View_ProfilePage_Host0 = (function (_super) {
    __extends(_View_ProfilePage_Host0, _super);
    function _View_ProfilePage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProfilePage_Host0, renderType_ProfilePage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProfilePage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ProfilePage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ProfilePage_0_4 = new import3.ProfilePage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.Request), this.parentInjector.get(import10.Global));
        this._appEl_0.initComponent(this._ProfilePage_0_4, [], compView_0);
        compView_0.create(this._ProfilePage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ProfilePage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ProfilePage) && (0 === requestNodeIndex))) {
            return this._ProfilePage_0_4;
        }
        return notFoundResult;
    };
    return _View_ProfilePage_Host0;
}(import1.AppView));
function viewFactory_ProfilePage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ProfilePage_Host === null)) {
        (renderType_ProfilePage_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_ProfilePage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ProfilePageNgFactory = new import12.ComponentFactory('ng-component', viewFactory_ProfilePage_Host0, import3.ProfilePage);
var styles_ProfilePage = [];
var renderType_ProfilePage = null;
var _View_ProfilePage0 = (function (_super) {
    __extends(_View_ProfilePage0, _super);
    function _View_ProfilePage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProfilePage0, renderType_ProfilePage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProfilePage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import13.Header(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import20.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import21.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import14.Navbar(this.parentInjector.get(import22.App), this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import23.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import15.ToolbarTitle(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import13.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      Profile\n    ', null);
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
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n\n\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'profile');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import24.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import16.Content(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import22.App), this.parentInjector.get(import25.Keyboard), this.parentInjector.get(import26.NgZone), this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import27.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n\n\n\n  ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_11 = new import2.AppElement(11, 9, this, this._anchor_11);
        this._TemplateRef_11_5 = new import28.TemplateRef_(this._appEl_11, viewFactory_ProfilePage1);
        this._NgFor_11_6 = new import17.NgFor(this._appEl_11.vcRef, this._TemplateRef_11_5, this.parentInjector.get(import29.IterableDiffers), this.ref);
        this._text_12 = this.renderer.createText(null, '\n\n\n    ', null);
        this._el_13 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'color');
        this._text_14 = this.renderer.createText(this._el_13, '\n      ', null);
        this._el_15 = this.renderer.createElement(this._el_13, 'h5', null);
        this._text_16 = this.renderer.createText(this._el_15, '\n        Mina Coacher\n      ', null);
        this._text_17 = this.renderer.createText(this._el_13, '\n        ', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._appEl_18 = new import2.AppElement(18, 13, this, this._anchor_18);
        this._TemplateRef_18_5 = new import28.TemplateRef_(this._appEl_18, viewFactory_ProfilePage2);
        this._NgFor_18_6 = new import17.NgFor(this._appEl_18.vcRef, this._TemplateRef_18_5, this.parentInjector.get(import29.IterableDiffers), this.ref);
        this._text_19 = this.renderer.createText(this._el_13, '\n    ', null);
        this._text_20 = this.renderer.createText(null, '\n\n\n    \n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._appEl_11,
                this._text_12,
                this._el_13,
                this._text_20
            ]),
            []
        ], null);
        this._text_21 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
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
            this._anchor_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._anchor_18,
            this._text_19,
            this._text_20,
            this._text_21
        ], [], []);
        return null;
    };
    _View_ProfilePage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import14.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import13.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import28.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import17.NgFor) && (11 === requestNodeIndex))) {
            return this._NgFor_11_6;
        }
        if (((token === import28.TemplateRef) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === import17.NgFor) && (18 === requestNodeIndex))) {
            return this._NgFor_18_6;
        }
        if (((token === import16.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ProfilePage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changes = null;
        var currVal_3 = this.context.AllUsers;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgFor_11_6.ngForOf = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._NgFor_11_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_11_6.ngDoCheck();
        }
        changes = null;
        var currVal_4 = this.context.Coaches;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgFor_18_6.ngForOf = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._NgFor_18_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_18_6.ngDoCheck();
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
    _View_ProfilePage0.prototype.destroyInternal = function () {
        this._Content_9_4.ngOnDestroy();
    };
    return _View_ProfilePage0;
}(import1.AppView));
export function viewFactory_ProfilePage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ProfilePage === null)) {
        (renderType_ProfilePage = viewUtils.createRenderComponentType('/Users/Perkka/booster/.tmp/pages/profile/profile.html', 0, import11.ViewEncapsulation.None, styles_ProfilePage, {}));
    }
    return new _View_ProfilePage0(viewUtils, parentInjector, declarationEl);
}
var _View_ProfilePage1 = (function (_super) {
    __extends(_View_ProfilePage1, _super);
    function _View_ProfilePage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProfilePage1, renderType_ProfilePage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProfilePage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'color');
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'img', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'top_pic');
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'img', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'profile_pic');
        this._text_6 = this.renderer.createText(this._el_0, '\n  \n        ', null);
        this._el_7 = this.renderer.createElement(this._el_0, 'h5', null);
        this._text_8 = this.renderer.createText(this._el_7, '\n          Information\n        ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n\n      ', null);
        this._el_10 = this.renderer.createElement(this._el_0, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'color item item-block');
        this._appEl_10 = new import2.AppElement(10, 0, this, this._el_10);
        var compView_10 = import33.viewFactory_Item0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Item_10_4 = new import30.Item(this.parent.parentInjector.get(import34.Form), this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_10), this.renderer);
        this._ItemContent_10_5 = new import30.ItemContent();
        this._query_Label_10_0 = new import31.QueryList();
        this._query_Button_10_1 = new import31.QueryList();
        this._query_Icon_10_2 = new import31.QueryList();
        this._appEl_10.initComponent(this._Item_10_4, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n        ', null);
        this._el_12 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_12, 'item-left', '');
        this.renderer.setElementAttribute(this._el_12, 'large', '');
        this.renderer.setElementAttribute(this._el_12, 'name', 'body');
        this.renderer.setElementAttribute(this._el_12, 'role', 'img');
        this._Icon_12_3 = new import32.Icon(this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_12), this.renderer);
        this._text_13 = this.renderer.createText(null, '\n        ', null);
        this._el_14 = this.renderer.createElement(null, 'h2', null);
        this._text_15 = this.renderer.createText(this._el_14, '', null);
        this._text_16 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_10_0.reset([]);
        this._Item_10_4.contentLabel = this._query_Label_10_0.first;
        compView_10.create(this._Item_10_4, [
            [].concat([this._el_12]),
            [],
            [].concat([
                this._text_11,
                this._text_13,
                this._el_14,
                this._text_16
            ]),
            [],
            []
        ], null);
        this._text_17 = this.renderer.createText(this._el_0, '\n\n      ', null);
        this._el_18 = this.renderer.createElement(this._el_0, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'color item item-block');
        this._appEl_18 = new import2.AppElement(18, 0, this, this._el_18);
        var compView_18 = import33.viewFactory_Item0(this.viewUtils, this.injector(18), this._appEl_18);
        this._Item_18_4 = new import30.Item(this.parent.parentInjector.get(import34.Form), this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_18), this.renderer);
        this._ItemContent_18_5 = new import30.ItemContent();
        this._query_Label_18_0 = new import31.QueryList();
        this._query_Button_18_1 = new import31.QueryList();
        this._query_Icon_18_2 = new import31.QueryList();
        this._appEl_18.initComponent(this._Item_18_4, [], compView_18);
        this._text_19 = this.renderer.createText(null, '\n        ', null);
        this._el_20 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_20, 'item-left', '');
        this.renderer.setElementAttribute(this._el_20, 'large', '');
        this.renderer.setElementAttribute(this._el_20, 'name', 'clock');
        this.renderer.setElementAttribute(this._el_20, 'role', 'img');
        this._Icon_20_3 = new import32.Icon(this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_20), this.renderer);
        this._text_21 = this.renderer.createText(null, '\n        ', null);
        this._el_22 = this.renderer.createElement(null, 'span', null);
        this.renderer.setElementAttribute(this._el_22, 'item-left', '');
        this._text_23 = this.renderer.createText(this._el_22, 'Antal träningstimmar:', null);
        this._text_24 = this.renderer.createText(null, '\n        ', null);
        this._el_25 = this.renderer.createElement(null, 'span', null);
        this.renderer.setElementAttribute(this._el_25, 'item-left', '');
        this._text_26 = this.renderer.createText(this._el_25, '', null);
        this._text_27 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_18_0.reset([]);
        this._Item_18_4.contentLabel = this._query_Label_18_0.first;
        compView_18.create(this._Item_18_4, [
            [].concat([
                this._el_20,
                this._el_22,
                this._el_25
            ]),
            [],
            [].concat([
                this._text_19,
                this._text_21,
                this._text_24,
                this._text_27
            ]),
            [],
            []
        ], null);
        this._text_28 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_18, 'tap', this.eventHandler(this._handle_tap_18_0.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28
        ], [disposable_0], []);
        return null;
    };
    _View_ProfilePage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import32.Icon) && (12 === requestNodeIndex))) {
            return this._Icon_12_3;
        }
        if (((token === import30.Item) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Item_10_4;
        }
        if (((token === import30.ItemContent) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._ItemContent_10_5;
        }
        if (((token === import32.Icon) && (20 === requestNodeIndex))) {
            return this._Icon_20_3;
        }
        if (((token === import30.Item) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Item_18_4;
        }
        if (((token === import30.ItemContent) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._ItemContent_18_5;
        }
        return notFoundResult;
    };
    _View_ProfilePage1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = 'body';
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._Icon_12_3.name = currVal_2;
            this._expr_2 = currVal_2;
        }
        var currVal_6 = 'clock';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Icon_20_3.name = currVal_6;
            this._expr_6 = currVal_6;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_10_1.dirty) {
                this._query_Button_10_1.reset([]);
                this._Item_10_4._buttons = this._query_Button_10_1;
                this._query_Button_10_1.notifyOnChanges();
            }
            if (this._query_Icon_10_2.dirty) {
                this._query_Icon_10_2.reset([this._Icon_12_3]);
                this._Item_10_4._icons = this._query_Icon_10_2;
                this._query_Icon_10_2.notifyOnChanges();
            }
            if (this._query_Button_18_1.dirty) {
                this._query_Button_18_1.reset([]);
                this._Item_18_4._buttons = this._query_Button_18_1;
                this._query_Button_18_1.notifyOnChanges();
            }
            if (this._query_Icon_18_2.dirty) {
                this._query_Icon_18_2.reset([this._Icon_20_3]);
                this._Item_18_4._icons = this._query_Icon_18_2;
                this._query_Icon_18_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_10_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_18_4.ngAfterContentInit();
            }
        }
        var currVal_0 = import4.interpolate(1, '', this.context.$implicit.CoverImg, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import35.SecurityContext.URL, currVal_0));
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.ProfileImg, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_5, 'src', this.viewUtils.sanitizer.sanitize(import35.SecurityContext.URL, currVal_1));
            this._expr_1 = currVal_1;
        }
        var currVal_3 = this._Icon_12_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_12, 'hide', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '', this.context.$implicit.Name, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_15, currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_7 = this._Icon_20_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_20, 'hide', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = import4.interpolate(1, '(', this.parent.context.tap, ' h)');
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_26, currVal_8);
            this._expr_8 = currVal_8;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ProfilePage1.prototype.destroyInternal = function () {
        this._Icon_12_3.ngOnDestroy();
        this._Icon_20_3.ngOnDestroy();
    };
    _View_ProfilePage1.prototype._handle_tap_18_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.tapEvent($event) !== false);
        return (true && pd_0);
    };
    return _View_ProfilePage1;
}(import1.AppView));
function viewFactory_ProfilePage1(viewUtils, parentInjector, declarationEl) {
    return new _View_ProfilePage1(viewUtils, parentInjector, declarationEl);
}
var _View_ProfilePage2 = (function (_super) {
    __extends(_View_ProfilePage2, _super);
    function _View_ProfilePage2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProfilePage2, renderType_ProfilePage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProfilePage2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '     \n          ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'item item-block');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import33.viewFactory_Item0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Item_2_4 = new import30.Item(this.parent.parentInjector.get(import34.Form), this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_2), this.renderer);
        this._ItemContent_2_5 = new import30.ItemContent();
        this._query_Label_2_0 = new import31.QueryList();
        this._query_Button_2_1 = new import31.QueryList();
        this._query_Icon_2_2 = new import31.QueryList();
        this._appEl_2.initComponent(this._Item_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n            ', null);
        this._el_4 = this.renderer.createElement(null, 'img', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'coach_pic');
        this._text_5 = this.renderer.createText(null, '', null);
        this._query_Label_2_0.reset([]);
        this._Item_2_4.contentLabel = this._query_Label_2_0.first;
        compView_2.create(this._Item_2_4, [
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_5
            ]),
            [],
            []
        ], null);
        this._text_6 = this.renderer.createText(this._el_0, '\n        ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ], [], []);
        return null;
    };
    _View_ProfilePage2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import30.Item) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._Item_2_4;
        }
        if (((token === import30.ItemContent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ItemContent_2_5;
        }
        return notFoundResult;
    };
    _View_ProfilePage2.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_2_1.dirty) {
                this._query_Button_2_1.reset([]);
                this._Item_2_4._buttons = this._query_Button_2_1;
                this._query_Button_2_1.notifyOnChanges();
            }
            if (this._query_Icon_2_2.dirty) {
                this._query_Icon_2_2.reset([]);
                this._Item_2_4._icons = this._query_Icon_2_2;
                this._query_Icon_2_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_2_4.ngAfterContentInit();
            }
        }
        var currVal_0 = import4.interpolate(1, '', this.context.$implicit.Img, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_4, 'src', this.viewUtils.sanitizer.sanitize(import35.SecurityContext.URL, currVal_0));
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '\n            ', this.context.$implicit.Name, '\n          ');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_5, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProfilePage2;
}(import1.AppView));
function viewFactory_ProfilePage2(viewUtils, parentInjector, declarationEl) {
    return new _View_ProfilePage2(viewUtils, parentInjector, declarationEl);
}
