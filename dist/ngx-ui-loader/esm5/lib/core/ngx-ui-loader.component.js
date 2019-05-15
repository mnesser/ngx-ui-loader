/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxUiLoaderService } from './ngx-ui-loader.service';
import { filter } from 'rxjs/operators';
import { POSITION, PB_DIRECTION, SPINNER } from './ngx-ui-loader.enums';
import { SPINNER_CONFIG } from './ngx-ui-loader.contants';
import { coerceNumber } from './coercion';
var NgxUiLoaderComponent = /** @class */ (function () {
    /**
     * Constructor
     * @param domSanitizer
     * @param ngxService
     */
    function NgxUiLoaderComponent(domSanitizer, changeDetectorRef, ngxService) {
        this.domSanitizer = domSanitizer;
        this.changeDetectorRef = changeDetectorRef;
        this.ngxService = ngxService;
        this.initialized = false;
        this.defaultConfig = this.ngxService.getDefaultConfig();
        this.bgsColor = this.defaultConfig.bgsColor;
        this.bgsOpacity = this.defaultConfig.bgsOpacity;
        this.bgsPosition = this.defaultConfig.bgsPosition;
        this.bgsSize = this.defaultConfig.bgsSize;
        this.bgsType = this.defaultConfig.bgsType;
        this.fgsColor = this.defaultConfig.fgsColor;
        this.fgsPosition = this.defaultConfig.fgsPosition;
        this.fgsSize = this.defaultConfig.fgsSize;
        this.fgsType = this.defaultConfig.fgsType;
        this.gap = this.defaultConfig.gap;
        this.loaderId = this.defaultConfig.masterLoaderId;
        this.logoPosition = this.defaultConfig.logoPosition;
        this.logoSize = this.defaultConfig.logoSize;
        this.logoUrl = this.defaultConfig.logoUrl;
        this.overlayBorderRadius = this.defaultConfig.overlayBorderRadius;
        this.overlayColor = this.defaultConfig.overlayColor;
        this.pbColor = this.defaultConfig.pbColor;
        this.pbDirection = this.defaultConfig.pbDirection;
        this.pbThickness = this.defaultConfig.pbThickness;
        this.hasProgressBar = this.defaultConfig.hasProgressBar;
        this.text = this.defaultConfig.text;
        this.textColor = this.defaultConfig.textColor;
        this.textPosition = this.defaultConfig.textPosition;
    }
    /**
     * On init event
     */
    /**
     * On init event
     * @return {?}
     */
    NgxUiLoaderComponent.prototype.ngOnInit = /**
     * On init event
     * @return {?}
     */
    function () {
        var _this = this;
        this.initializeSpinners();
        this.ngxService.initLoaderData(this.loaderId);
        this.determinePositions();
        this.bgsPosition = (/** @type {?} */ (this.validate('bgsPosition', this.bgsPosition, POSITION, this.defaultConfig.bgsPosition)));
        this.trustedLogoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.logoUrl);
        this.pbDirection = (/** @type {?} */ (this.validate('pbDirection', this.pbDirection, PB_DIRECTION, this.defaultConfig.pbDirection)));
        this.showForegroundWatcher = this.ngxService.showForeground$
            .pipe(filter((/**
         * @param {?} showEvent
         * @return {?}
         */
        function (showEvent) { return _this.loaderId === showEvent.loaderId; })))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.showForeground = data.isShow;
            _this.changeDetectorRef.markForCheck();
        }));
        this.showBackgroundWatcher = this.ngxService.showBackground$
            .pipe(filter((/**
         * @param {?} showEvent
         * @return {?}
         */
        function (showEvent) { return _this.loaderId === showEvent.loaderId; })))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.showBackground = data.isShow;
            _this.changeDetectorRef.markForCheck();
        }));
        this.foregroundClosingWatcher = this.ngxService.foregroundClosing$
            .pipe(filter((/**
         * @param {?} showEvent
         * @return {?}
         */
        function (showEvent) { return _this.loaderId === showEvent.loaderId; })))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.foregroundClosing = data.isShow;
            _this.changeDetectorRef.markForCheck();
        }));
        this.backgroundClosingWatcher = this.ngxService.backgroundClosing$
            .pipe(filter((/**
         * @param {?} showEvent
         * @return {?}
         */
        function (showEvent) { return _this.loaderId === showEvent.loaderId; })))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.backgroundClosing = data.isShow;
            _this.changeDetectorRef.markForCheck();
        }));
        this.initialized = true;
    };
    /**
     * On changes event
     * @param changes
     */
    /**
     * On changes event
     * @param {?} changes
     * @return {?}
     */
    NgxUiLoaderComponent.prototype.ngOnChanges = /**
     * On changes event
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.initialized) {
            return;
        }
        /** @type {?} */
        var bgsTypeChange = changes.bgsType;
        /** @type {?} */
        var bgsPositionChange = changes.bgsPosition;
        /** @type {?} */
        var fgsTypeChange = changes.fgsType;
        /** @type {?} */
        var loaderIdChange = changes.loaderId;
        /** @type {?} */
        var logoUrlChange = changes.logoUrl;
        /** @type {?} */
        var pbDirectionChange = changes.pbDirection;
        if (fgsTypeChange || bgsTypeChange) {
            this.initializeSpinners();
        }
        if (loaderIdChange) {
            this.ngxService.updateLoaderId(loaderIdChange.previousValue, this.loaderId);
        }
        this.determinePositions();
        if (bgsPositionChange) {
            this.bgsPosition = (/** @type {?} */ (this.validate('bgsPosition', this.bgsPosition, POSITION, this.defaultConfig.bgsPosition)));
        }
        if (logoUrlChange) {
            this.trustedLogoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.logoUrl);
        }
        if (pbDirectionChange) {
            this.pbDirection = (/** @type {?} */ (this.validate('pbDirection', this.pbDirection, PB_DIRECTION, this.defaultConfig.pbDirection)));
        }
    };
    /**
     * Initialize spinners
     */
    /**
     * Initialize spinners
     * @private
     * @return {?}
     */
    NgxUiLoaderComponent.prototype.initializeSpinners = /**
     * Initialize spinners
     * @private
     * @return {?}
     */
    function () {
        this.fgsType = (/** @type {?} */ (this.validate('fgsType', this.fgsType, SPINNER, this.defaultConfig.fgsType)));
        this.bgsType = (/** @type {?} */ (this.validate('bgsType', this.bgsType, SPINNER, this.defaultConfig.bgsType)));
        this.fgDivs = Array(SPINNER_CONFIG[this.fgsType].divs).fill(1);
        this.fgSpinnerClass = SPINNER_CONFIG[this.fgsType].class;
        this.bgDivs = Array(SPINNER_CONFIG[this.bgsType].divs).fill(1);
        this.bgSpinnerClass = SPINNER_CONFIG[this.bgsType].class;
    };
    /**
     * Determine the positions of spinner, logo and text
     */
    /**
     * Determine the positions of spinner, logo and text
     * @private
     * @return {?}
     */
    NgxUiLoaderComponent.prototype.determinePositions = /**
     * Determine the positions of spinner, logo and text
     * @private
     * @return {?}
     */
    function () {
        this.fgsPosition = (/** @type {?} */ (this.validate('fgsPosition', this.fgsPosition, POSITION, this.defaultConfig.fgsPosition)));
        this.logoPosition = (/** @type {?} */ (this.validate('logoPosition', this.logoPosition, POSITION, this.defaultConfig.logoPosition)));
        this.textPosition = (/** @type {?} */ (this.validate('textPosition', this.textPosition, POSITION, this.defaultConfig.textPosition)));
        this.gap = coerceNumber(this.gap, this.defaultConfig.gap);
        this.logoTop = 'initial';
        this.spinnerTop = 'initial';
        this.textTop = 'initial';
        /** @type {?} */
        var textSize = 24;
        if (this.logoPosition.startsWith('center')) {
            this.logoTop = '50%';
        }
        else if (this.logoPosition.startsWith('top')) {
            this.logoTop = '30px';
        }
        if (this.fgsPosition.startsWith('center')) {
            this.spinnerTop = '50%';
        }
        else if (this.fgsPosition.startsWith('top')) {
            this.spinnerTop = '30px';
        }
        if (this.textPosition.startsWith('center')) {
            this.textTop = '50%';
        }
        else if (this.textPosition.startsWith('top')) {
            this.textTop = '30px';
        }
        if (this.fgsPosition === POSITION.centerCenter) {
            if (this.logoUrl && this.logoPosition === POSITION.centerCenter) {
                if (this.text && this.textPosition === POSITION.centerCenter) { // logo, spinner and text
                    this.logoTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% - " + this.fgsSize / 2 + "px - " + textSize / 2 + "px - " + this.gap + "px)");
                    this.spinnerTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% + " + this.logoSize / 2 + "px - " + textSize / 2 + "px)");
                    this.textTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% + " + this.logoSize / 2 + "px + " + this.gap + "px + " + this.fgsSize / 2 + "px)");
                }
                else { // logo and spinner
                    this.logoTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% - " + this.fgsSize / 2 + "px - " + this.gap / 2 + "px)");
                    this.spinnerTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% + " + this.logoSize / 2 + "px + " + this.gap / 2 + "px)");
                }
            }
            else {
                if (this.text && this.textPosition === POSITION.centerCenter) { // spinner and text
                    this.spinnerTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% - " + textSize / 2 + "px - " + this.gap / 2 + "px)");
                    this.textTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% + " + this.fgsSize / 2 + "px + " + this.gap / 2 + "px)");
                }
            }
        }
        else {
            if (this.logoUrl && this.logoPosition === POSITION.centerCenter
                && this.text && this.textPosition === POSITION.centerCenter) { // logo and text
                this.logoTop = this.domSanitizer
                    .bypassSecurityTrustStyle("calc(50% - " + textSize / 2 + "px - " + this.gap / 2 + "px)");
                this.textTop = this.domSanitizer
                    .bypassSecurityTrustStyle("calc(50% + " + this.logoSize / 2 + "px + " + this.gap / 2 + "px)");
            }
        }
    };
    /**
     * @private
     * @param {?} inputName
     * @param {?} value
     * @param {?} validTypeObj
     * @param {?} fallbackValue
     * @return {?}
     */
    NgxUiLoaderComponent.prototype.validate = /**
     * @private
     * @param {?} inputName
     * @param {?} value
     * @param {?} validTypeObj
     * @param {?} fallbackValue
     * @return {?}
     */
    function (inputName, value, validTypeObj, fallbackValue) {
        if (Object.keys(validTypeObj).map((/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return validTypeObj[k]; })).findIndex((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v === value; })) === -1) {
            console.error("[ngx-ui-loader] - " + inputName + " (\"" + value + "\") is invalid. "
                + ("Default value \"" + fallbackValue + "\" is used."));
            return fallbackValue;
        }
        return value;
    };
    /**
     * On destroy event
     */
    /**
     * On destroy event
     * @return {?}
     */
    NgxUiLoaderComponent.prototype.ngOnDestroy = /**
     * On destroy event
     * @return {?}
     */
    function () {
        this.ngxService.destroyLoaderData(this.loaderId);
        if (this.showForegroundWatcher) {
            this.showForegroundWatcher.unsubscribe();
        }
        if (this.showBackgroundWatcher) {
            this.showBackgroundWatcher.unsubscribe();
        }
        if (this.foregroundClosingWatcher) {
            this.foregroundClosingWatcher.unsubscribe();
        }
        if (this.backgroundClosingWatcher) {
            this.backgroundClosingWatcher.unsubscribe();
        }
    };
    NgxUiLoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-ui-loader',
                    template: "<!-- Progress bar {{{ -->\r\n<div *ngIf=\"hasProgressBar\"\r\n  class=\"ngx-progress-bar\"\r\n  [class.ngx-position-absolute]=\"loaderId !== defaultConfig.masterLoaderId\"\r\n  [ngClass]=\"'ngx-progress-bar-' + pbDirection\"\r\n  [style.height.px]=\"pbThickness\"\r\n  [style.color]=\"pbColor\"\r\n  [class.loading-foreground]=\"showForeground\"\r\n  [class.foreground-closing]=\"foregroundClosing\"></div>\r\n<!-- Progress bar }}} -->\r\n\r\n<!-- Foreground container {{{ -->\r\n<div class=\"ngx-overlay\"\r\n  [class.ngx-position-absolute]=\"loaderId !== defaultConfig.masterLoaderId\"\r\n  [style.background-color]=\"overlayColor\"\r\n  [style.border-radius]=\"overlayBorderRadius\"\r\n  [class.loading-foreground]=\"showForeground\"\r\n  [class.foreground-closing]=\"foregroundClosing\">\r\n\r\n  <!-- Logo {{{ -->\r\n  <img *ngIf=\"logoUrl\" class=\"ngx-loading-logo\"\r\n    [ngClass]=\"logoPosition\" [src]=\"trustedLogoUrl\"\r\n    [style.width.px]=\"logoSize\" [style.height.px]=\"logoSize\"\r\n    [style.top]=\"logoTop\">\r\n  <!-- Logo }}} -->\r\n\r\n  <!-- Foreground spinner {{{ -->\r\n  <div class=\"ngx-foreground-spinner\"\r\n    [ngClass]=\"fgsPosition\" [style.color]=\"fgsColor\"\r\n    [style.width.px]=\"fgsSize\" [style.height.px]=\"fgsSize\"\r\n    [style.top]=\"spinnerTop\">\r\n    <div [class]=\"fgSpinnerClass\">\r\n      <div *ngFor=\"let div of fgDivs\"></div>\r\n    </div>\r\n  </div>\r\n  <!-- Foreground spinner }}} -->\r\n\r\n  <!-- Loading text {{{ -->\r\n  <div class=\"ngx-loading-text\"\r\n    [ngClass]=\"textPosition\"\r\n    [style.top]=\"textTop\"\r\n    [style.color]=\"textColor\">{{text}}</div>\r\n  <!-- Loading text }}} -->\r\n\r\n</div>\r\n<!-- Foreground container }}} -->\r\n\r\n<!-- Background spinner {{{ -->\r\n<div class=\"ngx-background-spinner\"\r\n  [class.ngx-position-absolute]=\"loaderId !== defaultConfig.masterLoaderId\"\r\n  [ngClass]=\"bgsPosition\"\r\n  [class.loading-background]=\"showBackground\"\r\n  [class.background-closing]=\"backgroundClosing\"\r\n  [style.width.px]=\"bgsSize\" [style.height.px]=\"bgsSize\"\r\n  [style.color]=\"bgsColor\" [style.opacity]=\"bgsOpacity\">\r\n  <div [class]=\"bgSpinnerClass\">\r\n    <div *ngFor=\"let div of bgDivs\"></div>\r\n  </div>\r\n</div>\r\n<!-- Background spinner }}} -->\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".ngx-progress-bar{position:fixed;top:0;left:0;width:100%;height:3px;z-index:99999!important;display:none;color:#00acc1;overflow:hidden}.ngx-progress-bar.foreground-closing,.ngx-progress-bar.loading-foreground{display:block}.ngx-progress-bar.foreground-closing{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-progress-bar::after,.ngx-progress-bar::before{background-color:currentColor;content:'';display:block;width:100%;height:100%;position:absolute;top:0}.ngx-progress-bar-ltr::before{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.ngx-progress-bar-ltr::after{-webkit-animation:20s ease-out progressBar-slide-ltr;animation:20s ease-out progressBar-slide-ltr;-webkit-transform:translate3d(-5%,0,0);transform:translate3d(-5%,0,0)}.ngx-progress-bar-rtl::before{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.ngx-progress-bar-rtl::after{-webkit-animation:20s ease-out progressBar-slide-rtl;animation:20s ease-out progressBar-slide-rtl;-webkit-transform:translate3d(5%,0,0);transform:translate3d(5%,0,0)}.foreground-closing.ngx-progress-bar-ltr::before{-webkit-animation:1s ease-out progressBar-slide-complete-ltr;animation:1s ease-out progressBar-slide-complete-ltr;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.foreground-closing.ngx-progress-bar-rtl::before{-webkit-animation:1s ease-out progressBar-slide-complete-rtl;animation:1s ease-out progressBar-slide-complete-rtl;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}@-webkit-keyframes progressBar-slide-ltr{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{-webkit-transform:translate3d(-5%,0,0);transform:translate3d(-5%,0,0)}}@keyframes progressBar-slide-ltr{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{-webkit-transform:translate3d(-5%,0,0);transform:translate3d(-5%,0,0)}}@-webkit-keyframes progressBar-slide-rtl{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{-webkit-transform:translate3d(5%,0,0);transform:translate3d(5%,0,0)}}@keyframes progressBar-slide-rtl{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{-webkit-transform:translate3d(5%,0,0);transform:translate3d(5%,0,0)}}@-webkit-keyframes progressBar-slide-complete-ltr{0%{-webkit-transform:translate3d(-75%,0,0);transform:translate3d(-75%,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes progressBar-slide-complete-ltr{0%{-webkit-transform:translate3d(-75%,0,0);transform:translate3d(-75%,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes progressBar-slide-complete-rtl{0%{-webkit-transform:translate3d(75%,0,0);transform:translate3d(75%,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes progressBar-slide-complete-rtl{0%{-webkit-transform:translate3d(75%,0,0);transform:translate3d(75%,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.ngx-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99998!important;background-color:rgba(40,40,40,.8);cursor:progress;display:none}.ngx-overlay.foreground-closing,.ngx-overlay.loading-foreground{display:block}.ngx-overlay.foreground-closing{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-overlay>.ngx-foreground-spinner{position:fixed;width:60px;height:60px;margin:0;color:#00acc1}.ngx-overlay>.ngx-loading-logo{position:fixed;margin:0;width:120px;height:120px}.ngx-overlay>.ngx-loading-text{position:fixed;margin:0;font-family:sans-serif;font-weight:400;font-size:1.2em;color:#fff}.ngx-background-spinner{position:fixed;z-index:99997!important;width:60px;height:60px;margin:0;color:#00acc1;opacity:.6;display:none}.ngx-background-spinner.background-closing,.ngx-background-spinner.loading-background{display:block}.ngx-background-spinner.background-closing{opacity:0!important;transition:opacity .7s ease-out}.ngx-position-absolute,.ngx-position-absolute>.ngx-foreground-spinner,.ngx-position-absolute>.ngx-loading-logo,.ngx-position-absolute>.ngx-loading-text{position:absolute!important}.ngx-position-absolute.ngx-progress-bar{z-index:99996!important}.ngx-position-absolute.ngx-overlay{z-index:99995!important}.ngx-position-absolute .sk-square-jelly-box>div:nth-child(1),.ngx-position-absolute.ngx-background-spinner{z-index:99994!important}.top-left{top:30px;left:30px}.top-center{top:30px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.top-right{top:30px;right:30px}.center-left{top:50%;left:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.center-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.center-right{top:50%;right:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.bottom-left{bottom:30px;left:30px}.bottom-center{bottom:30px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.bottom-right{bottom:30px;right:30px}.sk-ball-scale-multiple,.sk-ball-scale-multiple>div{position:relative;box-sizing:border-box}.sk-ball-scale-multiple{width:100%;height:100%;font-size:0}.sk-ball-scale-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;opacity:0;-webkit-animation:1s linear infinite ball-scale-multiple;animation:1s linear infinite ball-scale-multiple}.sk-ball-scale-multiple>div:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-ball-scale-multiple>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}.sk-ball-spin,.sk-ball-spin>div{position:relative;box-sizing:border-box}.sk-ball-spin{width:100%;height:100%;font-size:0}.sk-ball-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.sk-ball-spin>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.sk-ball-spin>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.sk-ball-spin>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.sk-ball-spin>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.sk-ball-spin>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.sk-ball-spin>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.sk-ball-spin>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.sk-ball-spin>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}@-webkit-keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.sk-ball-spin-clockwise,.sk-ball-spin-clockwise>div{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise{width:100%;height:100%;font-size:0}.sk-ball-spin-clockwise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.sk-ball-spin-clockwise>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.sk-ball-spin-clockwise>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.sk-ball-spin-clockwise>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.sk-ball-spin-clockwise>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-ball-spin-clockwise>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.sk-ball-spin-clockwise>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.sk-ball-spin-clockwise>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.sk-ball-spin-clockwise>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.sk-ball-spin-clockwise-fade-rotating,.sk-ball-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise-fade-rotating{font-size:0;width:100%;height:100%;-webkit-animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate}.sk-ball-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade-rotating;animation:1s linear infinite ball-spin-clockwise-fade-rotating}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.sk-ball-spin-fade-rotating,.sk-ball-spin-fade-rotating>div{position:relative;box-sizing:border-box}.sk-ball-spin-fade-rotating{width:100%;height:100%;font-size:0;-webkit-animation:6s linear infinite ball-spin-fade-rotate;animation:6s linear infinite ball-spin-fade-rotate}.sk-ball-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.sk-ball-spin-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.sk-ball-spin-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.sk-ball-spin-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.sk-ball-spin-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.sk-ball-spin-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.sk-ball-spin-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.sk-ball-spin-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.sk-ball-spin-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}@-webkit-keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}@keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}.sk-chasing-dots{margin:auto;width:100%;height:100%;position:absolute;text-align:center;-webkit-animation:2s linear infinite sk-chasingDots-rotate;animation:2s linear infinite sk-chasingDots-rotate}.sk-chasing-dots>div{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:currentColor;border-radius:100%;-webkit-animation:2s ease-in-out infinite sk-chasingDots-bounce;animation:2s ease-in-out infinite sk-chasingDots-bounce}.sk-chasing-dots>div:nth-child(2){top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-chasingDots-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes sk-chasingDots-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes sk-chasingDots-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-chasingDots-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.sk-circle{margin:auto;width:100%;height:100%;position:relative}.sk-circle>div{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle>div::before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circle-bounceDelay;animation:1.2s ease-in-out infinite both sk-circle-bounceDelay}.sk-circle>div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-circle>div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-circle>div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-circle>div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-circle>div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-circle>div:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-circle>div:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-circle>div:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-circle>div:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-circle>div:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-circle>div:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-circle>div:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-circle>div:nth-child(3)::before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-circle>div:nth-child(4)::before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-circle>div:nth-child(5)::before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-circle>div:nth-child(6)::before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-circle>div:nth-child(7)::before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-circle>div:nth-child(8)::before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-circle>div:nth-child(9)::before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-circle>div:nth-child(10)::before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-circle>div:nth-child(11)::before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-circle>div:nth-child(12)::before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circle-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-circle-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.sk-cube-grid{width:100%;height:100%;margin:auto}.sk-cube-grid>div{width:33%;height:33%;background-color:currentColor;float:left;-webkit-animation:1.3s ease-in-out infinite sk-cubeGrid-scaleDelay;animation:1.3s ease-in-out infinite sk-cubeGrid-scaleDelay}.sk-cube-grid>div:nth-child(1){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid>div:nth-child(2){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.sk-cube-grid>div:nth-child(4){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid>div:nth-child(5){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid>div:nth-child(6){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid>div:nth-child(7){-webkit-animation-delay:0s;animation-delay:0s}.sk-cube-grid>div:nth-child(8){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid>div:nth-child(9){-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes sk-cubeGrid-scaleDelay{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}@keyframes sk-cubeGrid-scaleDelay{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}.sk-double-bounce{width:100%;height:100%;position:relative;margin:auto}.sk-double-bounce>div{width:100%;height:100%;border-radius:50%;background-color:currentColor;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:2s ease-in-out infinite sk-doubleBounce-bounce;animation:2s ease-in-out infinite sk-doubleBounce-bounce}.sk-double-bounce>div:nth-child(2){-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-doubleBounce-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-doubleBounce-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.sk-fading-circle{margin:auto;width:100%;height:100%;position:relative}.sk-fading-circle>div{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle>div::before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-fadingCircle-FadeDelay;animation:1.2s ease-in-out infinite both sk-fadingCircle-FadeDelay}.sk-fading-circle>div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle>div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle>div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle>div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle>div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle>div:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle>div:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle>div:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle>div:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle>div:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle>div:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle>div:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle>div:nth-child(3)::before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle>div:nth-child(4)::before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle>div:nth-child(5)::before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle>div:nth-child(6)::before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle>div:nth-child(7)::before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle>div:nth-child(8)::before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle>div:nth-child(9)::before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle>div:nth-child(10)::before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle>div:nth-child(11)::before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle>div:nth-child(12)::before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-fadingCircle-FadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-fadingCircle-FadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}.sk-folding-cube{margin:auto;width:100%;height:100%;position:relative;-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.sk-folding-cube>div{float:left;width:50%;height:50%;position:relative;-webkit-transform:scale(1.1);transform:scale(1.1)}.sk-folding-cube>div::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;-webkit-animation:2.4s linear infinite both sk-foldingCube-angle;animation:2.4s linear infinite both sk-foldingCube-angle;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.sk-folding-cube>div:nth-child(2){-webkit-transform:scale(1.1) rotateZ(90deg);transform:scale(1.1) rotateZ(90deg)}.sk-folding-cube>div:nth-child(3){-webkit-transform:scale(1.1) rotateZ(270deg);transform:scale(1.1) rotateZ(270deg)}.sk-folding-cube>div:nth-child(4){-webkit-transform:scale(1.1) rotateZ(180deg);transform:scale(1.1) rotateZ(180deg)}.sk-folding-cube>div:nth-child(2)::before{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-folding-cube>div:nth-child(3)::before{-webkit-animation-delay:.9s;animation-delay:.9s}.sk-folding-cube>div:nth-child(4)::before{-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes sk-foldingCube-angle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes sk-foldingCube-angle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}.sk-pulse{width:100%;height:100%;margin:auto}.sk-pulse>div{width:100%;height:100%;background-color:currentColor;border-radius:100%;-webkit-animation:1s ease-in-out infinite sk-pulse-scaleOut;animation:1s ease-in-out infinite sk-pulse-scaleOut}@-webkit-keyframes sk-pulse-scaleOut{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes sk-pulse-scaleOut{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}.sk-rectangle-bounce{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce>div{background-color:currentColor;height:100%;width:10%;margin:0 5%;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-rectangleBounce-stretchDelay;animation:1.2s ease-in-out infinite sk-rectangleBounce-stretchDelay}.sk-rectangle-bounce>div:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rectangle-bounce>div:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rectangle-bounce>div:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce>div:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rectangleBounce-stretchDelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes sk-rectangleBounce-stretchDelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}.sk-rectangle-bounce-party,.sk-rectangle-bounce-party>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-party{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-party>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation-name:rectangle-bounce-party;animation-name:rectangle-bounce-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.sk-rectangle-bounce-party>div:nth-child(1){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.sk-rectangle-bounce-party>div:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-rectangle-bounce-party>div:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.sk-rectangle-bounce-party>div:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.sk-rectangle-bounce-party>div:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}@-webkit-keyframes rectangle-bounce-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}@keyframes rectangle-bounce-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}.sk-rectangle-bounce-pulse-out,.sk-rectangle-bounce-pulse-out>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation:.9s cubic-bezier(.85,.25,.37,.85) infinite rectangle-bounce-pulse-out;animation:.9s cubic-bezier(.85,.25,.37,.85) infinite rectangle-bounce-pulse-out}.sk-rectangle-bounce-pulse-out>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce-pulse-out>div:nth-child(2),.sk-rectangle-bounce-pulse-out>div:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-rectangle-bounce-pulse-out>div:nth-child(1),.sk-rectangle-bounce-pulse-out>div:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}@-webkit-keyframes rectangle-bounce-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.4);transform:scaley(.4)}}@keyframes rectangle-bounce-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.4);transform:scaley(.4)}}.sk-rectangle-bounce-pulse-out-rapid,.sk-rectangle-bounce-pulse-out-rapid>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out-rapid{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out-rapid>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation:.9s cubic-bezier(.11,.49,.38,.78) infinite rectangle-bounce-pulse-out-rapid;animation:.9s cubic-bezier(.11,.49,.38,.78) infinite rectangle-bounce-pulse-out-rapid}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(2),.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(1),.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}@-webkit-keyframes rectangle-bounce-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.4);transform:scaley(.4)}}@keyframes rectangle-bounce-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.4);transform:scaley(.4)}}.sk-rotating-plane{width:100%;height:100%;text-align:center;margin:auto}.sk-rotating-plane>div{width:100%;height:100%;background-color:currentColor;-webkit-animation:1.2s ease-in-out infinite sk-rotatePlane;animation:1.2s ease-in-out infinite sk-rotatePlane}@-webkit-keyframes sk-rotatePlane{0%{-webkit-transform:perspective(120px) rotateX(0) rotateY(0);transform:perspective(120px) rotateX(0) rotateY(0)}50%{-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0);transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}@keyframes sk-rotatePlane{0%{-webkit-transform:perspective(120px) rotateX(0) rotateY(0);transform:perspective(120px) rotateX(0) rotateY(0)}50%{-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0);transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}.sk-square-jelly-box,.sk-square-jelly-box>div{position:relative;box-sizing:border-box}.sk-square-jelly-box{width:100%;height:100%;font-size:0}.sk-square-jelly-box>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-square-jelly-box>div:nth-child(1),.sk-square-jelly-box>div:nth-child(2){position:absolute;left:0;width:100%}.sk-square-jelly-box>div:nth-child(1){top:-25%;z-index:99997;height:100%;border-radius:10%;-webkit-animation:.6s linear -.1s infinite square-jelly-box-animate;animation:.6s linear -.1s infinite square-jelly-box-animate}.sk-square-jelly-box>div:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:.6s linear -.1s infinite square-jelly-box-shadow;animation:.6s linear -.1s infinite square-jelly-box-shadow}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}@keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}.sk-square-loader,.sk-square-loader>div{position:relative;box-sizing:border-box}.sk-square-loader{font-size:0;width:100%;height:100%}.sk-square-loader>div{display:inline-block;float:none;border:3px solid currentColor;width:100%;height:100%;background:0 0;border-radius:0;-webkit-animation:2s infinite square-loader;animation:2s infinite square-loader}.sk-square-loader>div:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:2s ease-in infinite square-loader-inner;animation:2s ease-in infinite square-loader-inner}@-webkit-keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}@keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}.sk-three-bounce{margin:auto;width:100%;height:100%;text-align:center}.sk-three-bounce>div{margin-top:35%;width:30%;height:30%;background-color:currentColor;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-threeBounce-bounceDelay;animation:1.4s ease-in-out infinite both sk-threeBounce-bounceDelay}.bottom-center>.sk-three-bounce>div,.bottom-left>.sk-three-bounce>div,.bottom-right>.sk-three-bounce>div{margin-top:70%!important}.top-center>.sk-three-bounce>div,.top-left>.sk-three-bounce>div,.top-right>.sk-three-bounce>div{margin-top:0!important}.sk-three-bounce>div:nth-child(1){-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-three-bounce>div:nth-child(2){-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-threeBounce-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-threeBounce-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.sk-three-strings{width:100%;height:100%}.sk-three-strings>div{position:absolute;box-sizing:border-box;width:100%;height:100%;border-radius:50%}.sk-three-strings>div:nth-child(1){left:0;top:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateOne;animation:1s linear infinite sk-threeStrings-rotateOne;border-bottom:3px solid currentColor}.sk-three-strings>div:nth-child(2){right:0;top:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateTwo;animation:1s linear infinite sk-threeStrings-rotateTwo;border-right:3px solid currentColor}.sk-three-strings>div:nth-child(3){right:0;bottom:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateThree;animation:1s linear infinite sk-threeStrings-rotateThree;border-top:3px solid currentColor}@-webkit-keyframes sk-threeStrings-rotateOne{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0);transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateOne{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0);transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes sk-threeStrings-rotateTwo{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0);transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg);transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateTwo{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0);transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg);transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes sk-threeStrings-rotateThree{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0);transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateThree{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0);transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}.sk-wandering-cubes{margin:auto;width:100%;height:100%;position:relative;text-align:center}.sk-wandering-cubes>div{background-color:currentColor;width:25%;height:25%;position:absolute;top:0;left:0;-webkit-animation:1.8s ease-in-out infinite sk-wanderingCubes-cubeMove;animation:1.8s ease-in-out infinite sk-wanderingCubes-cubeMove}.sk-wandering-cubes>div:nth-child(2){-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes sk-wanderingCubes-cubeMove{25%{-webkit-transform:translateX(290%) rotate(-90deg) scale(.5);transform:translateX(290%) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(290%) translateY(290%) rotate(-179deg);transform:translateX(290%) translateY(290%) rotate(-179deg)}50.1%{-webkit-transform:translateX(290%) translateY(290%) rotate(-180deg);transform:translateX(290%) translateY(290%) rotate(-180deg)}75%{-webkit-transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5);transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes sk-wanderingCubes-cubeMove{25%{-webkit-transform:translateX(290%) rotate(-90deg) scale(.5);transform:translateX(290%) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(290%) translateY(290%) rotate(-179deg);transform:translateX(290%) translateY(290%) rotate(-179deg)}50.1%{-webkit-transform:translateX(290%) translateY(290%) rotate(-180deg);transform:translateX(290%) translateY(290%) rotate(-180deg)}75%{-webkit-transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5);transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    NgxUiLoaderComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: ChangeDetectorRef },
        { type: NgxUiLoaderService }
    ]; };
    NgxUiLoaderComponent.propDecorators = {
        bgsColor: [{ type: Input }],
        bgsOpacity: [{ type: Input }],
        bgsPosition: [{ type: Input }],
        bgsSize: [{ type: Input }],
        bgsType: [{ type: Input }],
        fgsColor: [{ type: Input }],
        fgsPosition: [{ type: Input }],
        fgsSize: [{ type: Input }],
        fgsType: [{ type: Input }],
        gap: [{ type: Input }],
        loaderId: [{ type: Input }],
        logoPosition: [{ type: Input }],
        logoSize: [{ type: Input }],
        logoUrl: [{ type: Input }],
        overlayBorderRadius: [{ type: Input }],
        overlayColor: [{ type: Input }],
        pbColor: [{ type: Input }],
        pbDirection: [{ type: Input }],
        pbThickness: [{ type: Input }],
        hasProgressBar: [{ type: Input }],
        text: [{ type: Input }],
        textColor: [{ type: Input }],
        textPosition: [{ type: Input }]
    };
    return NgxUiLoaderComponent;
}());
export { NgxUiLoaderComponent };
if (false) {
    /** @type {?} */
    NgxUiLoaderComponent.prototype.bgsColor;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.bgsOpacity;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.bgsPosition;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.bgsSize;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.bgsType;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.fgsColor;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.fgsPosition;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.fgsSize;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.fgsType;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.gap;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.loaderId;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.logoPosition;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.logoSize;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.logoUrl;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.overlayBorderRadius;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.overlayColor;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.pbColor;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.pbDirection;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.pbThickness;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.hasProgressBar;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.text;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.textColor;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.textPosition;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.fgDivs;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.fgSpinnerClass;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.bgDivs;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.bgSpinnerClass;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.showForeground;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.showBackground;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.foregroundClosing;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.backgroundClosing;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.trustedLogoUrl;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.logoTop;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.spinnerTop;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.textTop;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.showForegroundWatcher;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.showBackgroundWatcher;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.foregroundClosingWatcher;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.backgroundClosingWatcher;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.defaultConfig;
    /** @type {?} */
    NgxUiLoaderComponent.prototype.initialized;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderComponent.prototype.domSanitizer;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderComponent.prototype.ngxService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdWktbG9hZGVyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbmd4LXVpLWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUNaLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQThCLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXhDLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTFDO0lBc0RFOzs7O09BSUc7SUFDSCw4QkFDVSxZQUEwQixFQUMxQixpQkFBb0MsRUFDcEMsVUFBOEI7UUFGOUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQUV0QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDMUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ3hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3RELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx1Q0FBUTs7OztJQUFSO1FBQUEsaUJBdUNDO1FBdENDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFjLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUEsQ0FBQztRQUUxSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJGLElBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQWUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBQSxDQUFDO1FBRS9ILElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWU7YUFDekQsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFNBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxRQUFRLEVBQXBDLENBQW9DLEVBQUMsQ0FBQzthQUM1RSxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2IsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWU7YUFDekQsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFNBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxRQUFRLEVBQXBDLENBQW9DLEVBQUMsQ0FBQzthQUM1RSxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2IsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQjthQUMvRCxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsU0FBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLFFBQVEsRUFBcEMsQ0FBb0MsRUFBQyxDQUFDO2FBQzVFLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDYixLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNyQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0I7YUFDL0QsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFNBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxRQUFRLEVBQXBDLENBQW9DLEVBQUMsQ0FBQzthQUM1RSxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2IsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDckMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsMENBQVc7Ozs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPO1NBQ1I7O1lBRUssYUFBYSxHQUFpQixPQUFPLENBQUMsT0FBTzs7WUFDN0MsaUJBQWlCLEdBQWlCLE9BQU8sQ0FBQyxXQUFXOztZQUNyRCxhQUFhLEdBQWlCLE9BQU8sQ0FBQyxPQUFPOztZQUM3QyxjQUFjLEdBQWlCLE9BQU8sQ0FBQyxRQUFROztZQUMvQyxhQUFhLEdBQWlCLE9BQU8sQ0FBQyxPQUFPOztZQUM3QyxpQkFBaUIsR0FBaUIsT0FBTyxDQUFDLFdBQVc7UUFFM0QsSUFBSSxhQUFhLElBQUksYUFBYSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxjQUFjLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0U7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBQSxDQUFDO1NBQzNIO1FBRUQsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0RjtRQUVELElBQUksaUJBQWlCLEVBQUU7WUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBZSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFBLENBQUM7U0FDaEk7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNLLGlEQUFrQjs7Ozs7SUFBMUI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFhLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUEsQ0FBQztRQUN4RyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFhLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUEsQ0FBQztRQUV4RyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSyxpREFBa0I7Ozs7O0lBQTFCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBYyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFBLENBQUM7UUFDMUgsSUFBSSxDQUFDLFlBQVksR0FBRyxtQkFBYyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFBLENBQUM7UUFDOUgsSUFBSSxDQUFDLFlBQVksR0FBRyxtQkFBYyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFBLENBQUM7UUFDOUgsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDOztZQUNuQixRQUFRLEdBQUcsRUFBRTtRQUVuQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1NBQzFCO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLFlBQVksRUFBRTtZQUM5QyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUMsWUFBWSxFQUFFO2dCQUMvRCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUseUJBQXlCO29CQUN2RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZO3lCQUM3Qix3QkFBd0IsQ0FBQyxnQkFBYyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsYUFBUSxRQUFRLEdBQUcsQ0FBQyxhQUFRLElBQUksQ0FBQyxHQUFHLFFBQUssQ0FBQyxDQUFDO29CQUNyRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZO3lCQUNoQyx3QkFBd0IsQ0FBQyxnQkFBYyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsYUFBUSxRQUFRLEdBQUcsQ0FBQyxRQUFLLENBQUMsQ0FBQztvQkFDdEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWTt5QkFDN0Isd0JBQXdCLENBQUMsZ0JBQWMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLGFBQVEsSUFBSSxDQUFDLEdBQUcsYUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsUUFBSyxDQUFDLENBQUM7aUJBQzNHO3FCQUFNLEVBQUUsbUJBQW1CO29CQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZO3lCQUM3Qix3QkFBd0IsQ0FBQyxnQkFBYyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsYUFBUSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBSyxDQUFDLENBQUM7b0JBQ3JGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVk7eUJBQ2hDLHdCQUF3QixDQUFDLGdCQUFjLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxhQUFRLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFLLENBQUMsQ0FBQztpQkFDdkY7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsbUJBQW1CO29CQUNqRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZO3lCQUNoQyx3QkFBd0IsQ0FBQyxnQkFBYyxRQUFRLEdBQUcsQ0FBQyxhQUFRLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFLLENBQUMsQ0FBQztvQkFDakYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWTt5QkFDN0Isd0JBQXdCLENBQUMsZ0JBQWMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLGFBQVEsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQUssQ0FBQyxDQUFDO2lCQUN0RjthQUNGO1NBQ0Y7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFFBQVEsQ0FBQyxZQUFZO21CQUMxRCxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFFLGdCQUFnQjtnQkFDL0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWTtxQkFDN0Isd0JBQXdCLENBQUMsZ0JBQWMsUUFBUSxHQUFHLENBQUMsYUFBUSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBSyxDQUFDLENBQUM7Z0JBQ2pGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVk7cUJBQzdCLHdCQUF3QixDQUFDLGdCQUFjLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxhQUFRLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFLLENBQUMsQ0FBQzthQUN2RjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7Ozs7O0lBRU8sdUNBQVE7Ozs7Ozs7O0lBQWhCLFVBQWlCLFNBQWlCLEVBQUUsS0FBYSxFQUFFLFlBQWdCLEVBQUUsYUFBcUI7UUFDeEYsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBZixDQUFlLEVBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssS0FBSyxFQUFYLENBQVcsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzFGLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXFCLFNBQVMsWUFBTSxLQUFLLHFCQUFpQjttQkFDcEUscUJBQWtCLGFBQWEsZ0JBQVksQ0FBQSxDQUFDLENBQUM7WUFDakQsT0FBTyxhQUFhLENBQUM7U0FDdEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwwQ0FBVzs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Z0JBeFJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsa3dFQUE2QztvQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFqQlEsWUFBWTtnQkFEaUIsaUJBQWlCO2dCQUU5QyxrQkFBa0I7OzsyQkFtQnhCLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSztzQ0FDTCxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7aUNBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7K0JBQ0wsS0FBSzs7SUEyUFIsMkJBQUM7Q0FBQSxBQXpSRCxJQXlSQztTQW5SWSxvQkFBb0I7OztJQUUvQix3Q0FBMEI7O0lBQzFCLDBDQUE0Qjs7SUFDNUIsMkNBQW1DOztJQUNuQyx1Q0FBeUI7O0lBQ3pCLHVDQUE4Qjs7SUFDOUIsd0NBQTBCOztJQUMxQiwyQ0FBbUM7O0lBQ25DLHVDQUF5Qjs7SUFDekIsdUNBQThCOztJQUM5QixtQ0FBcUI7O0lBQ3JCLHdDQUEwQjs7SUFDMUIsNENBQW9DOztJQUNwQyx3Q0FBMEI7O0lBQzFCLHVDQUF5Qjs7SUFDekIsbURBQXFDOztJQUNyQyw0Q0FBOEI7O0lBQzlCLHVDQUF5Qjs7SUFDekIsMkNBQW9DOztJQUNwQywyQ0FBNkI7O0lBQzdCLDhDQUFpQzs7SUFDakMsb0NBQXNCOztJQUN0Qix5Q0FBMkI7O0lBQzNCLDRDQUFvQzs7SUFFcEMsc0NBQWlCOztJQUNqQiw4Q0FBdUI7O0lBQ3ZCLHNDQUFpQjs7SUFDakIsOENBQXVCOztJQUN2Qiw4Q0FBd0I7O0lBQ3hCLDhDQUF3Qjs7SUFDeEIsaURBQTJCOztJQUMzQixpREFBMkI7O0lBRTNCLDhDQUFnQzs7SUFDaEMsdUNBQW1COztJQUNuQiwwQ0FBc0I7O0lBQ3RCLHVDQUFtQjs7SUFFbkIscURBQW9DOztJQUNwQyxxREFBb0M7O0lBQ3BDLHdEQUF1Qzs7SUFDdkMsd0RBQXVDOztJQUV2Qyw2Q0FBaUM7O0lBQ2pDLDJDQUFxQjs7Ozs7SUFRbkIsNENBQWtDOzs7OztJQUNsQyxpREFBNEM7Ozs7O0lBQzVDLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsXHJcbiAgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmwsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBOZ3hVaUxvYWRlclNlcnZpY2UgfSBmcm9tICcuL25neC11aS1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOZ3hVaUxvYWRlckNvbmZpZyB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci1jb25maWcnO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb25UeXBlLCBQb3NpdGlvblR5cGUsIFNwaW5uZXJUeXBlIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLnR5cGVzJztcclxuaW1wb3J0IHsgUE9TSVRJT04sIFBCX0RJUkVDVElPTiwgU1BJTk5FUiB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci5lbnVtcyc7XHJcbmltcG9ydCB7IFNQSU5ORVJfQ09ORklHIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLmNvbnRhbnRzJztcclxuaW1wb3J0IHsgU2hvd0V2ZW50IH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLmludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBjb2VyY2VOdW1iZXIgfSBmcm9tICcuL2NvZXJjaW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LXVpLWxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25neC11aS1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25neC11aS1sb2FkZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4VWlMb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgYmdzQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBiZ3NPcGFjaXR5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgYmdzUG9zaXRpb246IFBvc2l0aW9uVHlwZTtcclxuICBASW5wdXQoKSBiZ3NTaXplOiBudW1iZXI7XHJcbiAgQElucHV0KCkgYmdzVHlwZTogU3Bpbm5lclR5cGU7XHJcbiAgQElucHV0KCkgZmdzQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBmZ3NQb3NpdGlvbjogUG9zaXRpb25UeXBlO1xyXG4gIEBJbnB1dCgpIGZnc1NpemU6IG51bWJlcjtcclxuICBASW5wdXQoKSBmZ3NUeXBlOiBTcGlubmVyVHlwZTtcclxuICBASW5wdXQoKSBnYXA6IG51bWJlcjtcclxuICBASW5wdXQoKSBsb2FkZXJJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxvZ29Qb3NpdGlvbjogUG9zaXRpb25UeXBlO1xyXG4gIEBJbnB1dCgpIGxvZ29TaXplOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbG9nb1VybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlCb3JkZXJSYWRpdXM6IHN0cmluZztcclxuICBASW5wdXQoKSBvdmVybGF5Q29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBwYkNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGJEaXJlY3Rpb246IERpcmVjdGlvblR5cGU7XHJcbiAgQElucHV0KCkgcGJUaGlja25lc3M6IG51bWJlcjtcclxuICBASW5wdXQoKSBoYXNQcm9ncmVzc0JhcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGV4dFBvc2l0aW9uOiBQb3NpdGlvblR5cGU7XHJcblxyXG4gIGZnRGl2czogbnVtYmVyW107XHJcbiAgZmdTcGlubmVyQ2xhc3M6IHN0cmluZztcclxuICBiZ0RpdnM6IG51bWJlcltdO1xyXG4gIGJnU3Bpbm5lckNsYXNzOiBzdHJpbmc7XHJcbiAgc2hvd0ZvcmVncm91bmQ6IGJvb2xlYW47XHJcbiAgc2hvd0JhY2tncm91bmQ6IGJvb2xlYW47XHJcbiAgZm9yZWdyb3VuZENsb3Npbmc6IGJvb2xlYW47XHJcbiAgYmFja2dyb3VuZENsb3Npbmc6IGJvb2xlYW47XHJcblxyXG4gIHRydXN0ZWRMb2dvVXJsOiBTYWZlUmVzb3VyY2VVcmw7XHJcbiAgbG9nb1RvcDogU2FmZVN0eWxlO1xyXG4gIHNwaW5uZXJUb3A6IFNhZmVTdHlsZTtcclxuICB0ZXh0VG9wOiBTYWZlU3R5bGU7XHJcblxyXG4gIHNob3dGb3JlZ3JvdW5kV2F0Y2hlcjogU3Vic2NyaXB0aW9uO1xyXG4gIHNob3dCYWNrZ3JvdW5kV2F0Y2hlcjogU3Vic2NyaXB0aW9uO1xyXG4gIGZvcmVncm91bmRDbG9zaW5nV2F0Y2hlcjogU3Vic2NyaXB0aW9uO1xyXG4gIGJhY2tncm91bmRDbG9zaW5nV2F0Y2hlcjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBkZWZhdWx0Q29uZmlnOiBOZ3hVaUxvYWRlckNvbmZpZztcclxuICBpbml0aWFsaXplZDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0gZG9tU2FuaXRpemVyXHJcbiAgICogQHBhcmFtIG5neFNlcnZpY2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbmd4U2VydmljZTogTmd4VWlMb2FkZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kZWZhdWx0Q29uZmlnID0gdGhpcy5uZ3hTZXJ2aWNlLmdldERlZmF1bHRDb25maWcoKTtcclxuXHJcbiAgICB0aGlzLmJnc0NvbG9yID0gdGhpcy5kZWZhdWx0Q29uZmlnLmJnc0NvbG9yO1xyXG4gICAgdGhpcy5iZ3NPcGFjaXR5ID0gdGhpcy5kZWZhdWx0Q29uZmlnLmJnc09wYWNpdHk7XHJcbiAgICB0aGlzLmJnc1Bvc2l0aW9uID0gdGhpcy5kZWZhdWx0Q29uZmlnLmJnc1Bvc2l0aW9uO1xyXG4gICAgdGhpcy5iZ3NTaXplID0gdGhpcy5kZWZhdWx0Q29uZmlnLmJnc1NpemU7XHJcbiAgICB0aGlzLmJnc1R5cGUgPSB0aGlzLmRlZmF1bHRDb25maWcuYmdzVHlwZTtcclxuICAgIHRoaXMuZmdzQ29sb3IgPSB0aGlzLmRlZmF1bHRDb25maWcuZmdzQ29sb3I7XHJcbiAgICB0aGlzLmZnc1Bvc2l0aW9uID0gdGhpcy5kZWZhdWx0Q29uZmlnLmZnc1Bvc2l0aW9uO1xyXG4gICAgdGhpcy5mZ3NTaXplID0gdGhpcy5kZWZhdWx0Q29uZmlnLmZnc1NpemU7XHJcbiAgICB0aGlzLmZnc1R5cGUgPSB0aGlzLmRlZmF1bHRDb25maWcuZmdzVHlwZTtcclxuICAgIHRoaXMuZ2FwID0gdGhpcy5kZWZhdWx0Q29uZmlnLmdhcDtcclxuICAgIHRoaXMubG9hZGVySWQgPSB0aGlzLmRlZmF1bHRDb25maWcubWFzdGVyTG9hZGVySWQ7XHJcbiAgICB0aGlzLmxvZ29Qb3NpdGlvbiA9IHRoaXMuZGVmYXVsdENvbmZpZy5sb2dvUG9zaXRpb247XHJcbiAgICB0aGlzLmxvZ29TaXplID0gdGhpcy5kZWZhdWx0Q29uZmlnLmxvZ29TaXplO1xyXG4gICAgdGhpcy5sb2dvVXJsID0gdGhpcy5kZWZhdWx0Q29uZmlnLmxvZ29Vcmw7XHJcbiAgICB0aGlzLm92ZXJsYXlCb3JkZXJSYWRpdXMgPSB0aGlzLmRlZmF1bHRDb25maWcub3ZlcmxheUJvcmRlclJhZGl1cztcclxuICAgIHRoaXMub3ZlcmxheUNvbG9yID0gdGhpcy5kZWZhdWx0Q29uZmlnLm92ZXJsYXlDb2xvcjtcclxuICAgIHRoaXMucGJDb2xvciA9IHRoaXMuZGVmYXVsdENvbmZpZy5wYkNvbG9yO1xyXG4gICAgdGhpcy5wYkRpcmVjdGlvbiA9IHRoaXMuZGVmYXVsdENvbmZpZy5wYkRpcmVjdGlvbjtcclxuICAgIHRoaXMucGJUaGlja25lc3MgPSB0aGlzLmRlZmF1bHRDb25maWcucGJUaGlja25lc3M7XHJcbiAgICB0aGlzLmhhc1Byb2dyZXNzQmFyID0gdGhpcy5kZWZhdWx0Q29uZmlnLmhhc1Byb2dyZXNzQmFyO1xyXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5kZWZhdWx0Q29uZmlnLnRleHQ7XHJcbiAgICB0aGlzLnRleHRDb2xvciA9IHRoaXMuZGVmYXVsdENvbmZpZy50ZXh0Q29sb3I7XHJcbiAgICB0aGlzLnRleHRQb3NpdGlvbiA9IHRoaXMuZGVmYXVsdENvbmZpZy50ZXh0UG9zaXRpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPbiBpbml0IGV2ZW50XHJcbiAgICovXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVTcGlubmVycygpO1xyXG4gICAgdGhpcy5uZ3hTZXJ2aWNlLmluaXRMb2FkZXJEYXRhKHRoaXMubG9hZGVySWQpO1xyXG4gICAgdGhpcy5kZXRlcm1pbmVQb3NpdGlvbnMoKTtcclxuXHJcbiAgICB0aGlzLmJnc1Bvc2l0aW9uID0gPFBvc2l0aW9uVHlwZT50aGlzLnZhbGlkYXRlKCdiZ3NQb3NpdGlvbicsIHRoaXMuYmdzUG9zaXRpb24sIFBPU0lUSU9OLCB0aGlzLmRlZmF1bHRDb25maWcuYmdzUG9zaXRpb24pO1xyXG5cclxuICAgIHRoaXMudHJ1c3RlZExvZ29VcmwgPSB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodGhpcy5sb2dvVXJsKTtcclxuXHJcbiAgICB0aGlzLnBiRGlyZWN0aW9uID0gPERpcmVjdGlvblR5cGU+dGhpcy52YWxpZGF0ZSgncGJEaXJlY3Rpb24nLCB0aGlzLnBiRGlyZWN0aW9uLCBQQl9ESVJFQ1RJT04sIHRoaXMuZGVmYXVsdENvbmZpZy5wYkRpcmVjdGlvbik7XHJcblxyXG4gICAgdGhpcy5zaG93Rm9yZWdyb3VuZFdhdGNoZXIgPSB0aGlzLm5neFNlcnZpY2Uuc2hvd0ZvcmVncm91bmQkXHJcbiAgICAgIC5waXBlKGZpbHRlcigoc2hvd0V2ZW50OiBTaG93RXZlbnQpID0+IHRoaXMubG9hZGVySWQgPT09IHNob3dFdmVudC5sb2FkZXJJZCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9yZWdyb3VuZCA9IGRhdGEuaXNTaG93O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2hvd0JhY2tncm91bmRXYXRjaGVyID0gdGhpcy5uZ3hTZXJ2aWNlLnNob3dCYWNrZ3JvdW5kJFxyXG4gICAgICAucGlwZShmaWx0ZXIoKHNob3dFdmVudDogU2hvd0V2ZW50KSA9PiB0aGlzLmxvYWRlcklkID09PSBzaG93RXZlbnQubG9hZGVySWQpKVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvd0JhY2tncm91bmQgPSBkYXRhLmlzU2hvdztcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmZvcmVncm91bmRDbG9zaW5nV2F0Y2hlciA9IHRoaXMubmd4U2VydmljZS5mb3JlZ3JvdW5kQ2xvc2luZyRcclxuICAgICAgLnBpcGUoZmlsdGVyKChzaG93RXZlbnQ6IFNob3dFdmVudCkgPT4gdGhpcy5sb2FkZXJJZCA9PT0gc2hvd0V2ZW50LmxvYWRlcklkKSlcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICB0aGlzLmZvcmVncm91bmRDbG9zaW5nID0gZGF0YS5pc1Nob3c7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ2xvc2luZ1dhdGNoZXIgPSB0aGlzLm5neFNlcnZpY2UuYmFja2dyb3VuZENsb3NpbmckXHJcbiAgICAgIC5waXBlKGZpbHRlcigoc2hvd0V2ZW50OiBTaG93RXZlbnQpID0+IHRoaXMubG9hZGVySWQgPT09IHNob3dFdmVudC5sb2FkZXJJZCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2xvc2luZyA9IGRhdGEuaXNTaG93O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPbiBjaGFuZ2VzIGV2ZW50XHJcbiAgICogQHBhcmFtIGNoYW5nZXNcclxuICAgKi9cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJnc1R5cGVDaGFuZ2U6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXMuYmdzVHlwZTtcclxuICAgIGNvbnN0IGJnc1Bvc2l0aW9uQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzLmJnc1Bvc2l0aW9uO1xyXG4gICAgY29uc3QgZmdzVHlwZUNoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlcy5mZ3NUeXBlO1xyXG4gICAgY29uc3QgbG9hZGVySWRDaGFuZ2U6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXMubG9hZGVySWQ7XHJcbiAgICBjb25zdCBsb2dvVXJsQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzLmxvZ29Vcmw7XHJcbiAgICBjb25zdCBwYkRpcmVjdGlvbkNoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlcy5wYkRpcmVjdGlvbjtcclxuXHJcbiAgICBpZiAoZmdzVHlwZUNoYW5nZSB8fCBiZ3NUeXBlQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVNwaW5uZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvYWRlcklkQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMubmd4U2VydmljZS51cGRhdGVMb2FkZXJJZChsb2FkZXJJZENoYW5nZS5wcmV2aW91c1ZhbHVlLCB0aGlzLmxvYWRlcklkKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRldGVybWluZVBvc2l0aW9ucygpO1xyXG5cclxuICAgIGlmIChiZ3NQb3NpdGlvbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLmJnc1Bvc2l0aW9uID0gPFBvc2l0aW9uVHlwZT50aGlzLnZhbGlkYXRlKCdiZ3NQb3NpdGlvbicsIHRoaXMuYmdzUG9zaXRpb24sIFBPU0lUSU9OLCB0aGlzLmRlZmF1bHRDb25maWcuYmdzUG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2dvVXJsQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMudHJ1c3RlZExvZ29VcmwgPSB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodGhpcy5sb2dvVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGJEaXJlY3Rpb25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wYkRpcmVjdGlvbiA9IDxEaXJlY3Rpb25UeXBlPnRoaXMudmFsaWRhdGUoJ3BiRGlyZWN0aW9uJywgdGhpcy5wYkRpcmVjdGlvbiwgUEJfRElSRUNUSU9OLCB0aGlzLmRlZmF1bHRDb25maWcucGJEaXJlY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBzcGlubmVyc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVNwaW5uZXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mZ3NUeXBlID0gPFNwaW5uZXJUeXBlPnRoaXMudmFsaWRhdGUoJ2Znc1R5cGUnLCB0aGlzLmZnc1R5cGUsIFNQSU5ORVIsIHRoaXMuZGVmYXVsdENvbmZpZy5mZ3NUeXBlKTtcclxuICAgIHRoaXMuYmdzVHlwZSA9IDxTcGlubmVyVHlwZT50aGlzLnZhbGlkYXRlKCdiZ3NUeXBlJywgdGhpcy5iZ3NUeXBlLCBTUElOTkVSLCB0aGlzLmRlZmF1bHRDb25maWcuYmdzVHlwZSk7XHJcblxyXG4gICAgdGhpcy5mZ0RpdnMgPSBBcnJheShTUElOTkVSX0NPTkZJR1t0aGlzLmZnc1R5cGVdLmRpdnMpLmZpbGwoMSk7XHJcbiAgICB0aGlzLmZnU3Bpbm5lckNsYXNzID0gU1BJTk5FUl9DT05GSUdbdGhpcy5mZ3NUeXBlXS5jbGFzcztcclxuICAgIHRoaXMuYmdEaXZzID0gQXJyYXkoU1BJTk5FUl9DT05GSUdbdGhpcy5iZ3NUeXBlXS5kaXZzKS5maWxsKDEpO1xyXG4gICAgdGhpcy5iZ1NwaW5uZXJDbGFzcyA9IFNQSU5ORVJfQ09ORklHW3RoaXMuYmdzVHlwZV0uY2xhc3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgdGhlIHBvc2l0aW9ucyBvZiBzcGlubmVyLCBsb2dvIGFuZCB0ZXh0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBkZXRlcm1pbmVQb3NpdGlvbnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZnc1Bvc2l0aW9uID0gPFBvc2l0aW9uVHlwZT50aGlzLnZhbGlkYXRlKCdmZ3NQb3NpdGlvbicsIHRoaXMuZmdzUG9zaXRpb24sIFBPU0lUSU9OLCB0aGlzLmRlZmF1bHRDb25maWcuZmdzUG9zaXRpb24pO1xyXG4gICAgdGhpcy5sb2dvUG9zaXRpb24gPSA8UG9zaXRpb25UeXBlPnRoaXMudmFsaWRhdGUoJ2xvZ29Qb3NpdGlvbicsIHRoaXMubG9nb1Bvc2l0aW9uLCBQT1NJVElPTiwgdGhpcy5kZWZhdWx0Q29uZmlnLmxvZ29Qb3NpdGlvbik7XHJcbiAgICB0aGlzLnRleHRQb3NpdGlvbiA9IDxQb3NpdGlvblR5cGU+dGhpcy52YWxpZGF0ZSgndGV4dFBvc2l0aW9uJywgdGhpcy50ZXh0UG9zaXRpb24sIFBPU0lUSU9OLCB0aGlzLmRlZmF1bHRDb25maWcudGV4dFBvc2l0aW9uKTtcclxuICAgIHRoaXMuZ2FwID0gY29lcmNlTnVtYmVyKHRoaXMuZ2FwLCB0aGlzLmRlZmF1bHRDb25maWcuZ2FwKTtcclxuXHJcbiAgICB0aGlzLmxvZ29Ub3AgPSAnaW5pdGlhbCc7XHJcbiAgICB0aGlzLnNwaW5uZXJUb3AgPSAnaW5pdGlhbCc7XHJcbiAgICB0aGlzLnRleHRUb3AgPSAnaW5pdGlhbCc7XHJcbiAgICBjb25zdCB0ZXh0U2l6ZSA9IDI0O1xyXG5cclxuICAgIGlmICh0aGlzLmxvZ29Qb3NpdGlvbi5zdGFydHNXaXRoKCdjZW50ZXInKSkge1xyXG4gICAgICB0aGlzLmxvZ29Ub3AgPSAnNTAlJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5sb2dvUG9zaXRpb24uc3RhcnRzV2l0aCgndG9wJykpIHtcclxuICAgICAgdGhpcy5sb2dvVG9wID0gJzMwcHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZnc1Bvc2l0aW9uLnN0YXJ0c1dpdGgoJ2NlbnRlcicpKSB7XHJcbiAgICAgIHRoaXMuc3Bpbm5lclRvcCA9ICc1MCUnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZnc1Bvc2l0aW9uLnN0YXJ0c1dpdGgoJ3RvcCcpKSB7XHJcbiAgICAgIHRoaXMuc3Bpbm5lclRvcCA9ICczMHB4JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy50ZXh0UG9zaXRpb24uc3RhcnRzV2l0aCgnY2VudGVyJykpIHtcclxuICAgICAgdGhpcy50ZXh0VG9wID0gJzUwJSc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudGV4dFBvc2l0aW9uLnN0YXJ0c1dpdGgoJ3RvcCcpKSB7XHJcbiAgICAgIHRoaXMudGV4dFRvcCA9ICczMHB4JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5mZ3NQb3NpdGlvbiA9PT0gUE9TSVRJT04uY2VudGVyQ2VudGVyKSB7XHJcbiAgICAgIGlmICh0aGlzLmxvZ29VcmwgJiYgdGhpcy5sb2dvUG9zaXRpb24gPT09IFBPU0lUSU9OLmNlbnRlckNlbnRlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnRleHQgJiYgdGhpcy50ZXh0UG9zaXRpb24gPT09IFBPU0lUSU9OLmNlbnRlckNlbnRlcikgeyAvLyBsb2dvLCBzcGlubmVyIGFuZCB0ZXh0XHJcbiAgICAgICAgICB0aGlzLmxvZ29Ub3AgPSB0aGlzLmRvbVNhbml0aXplclxyXG4gICAgICAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBjYWxjKDUwJSAtICR7dGhpcy5mZ3NTaXplIC8gMn1weCAtICR7dGV4dFNpemUgLyAyfXB4IC0gJHt0aGlzLmdhcH1weClgKTtcclxuICAgICAgICAgIHRoaXMuc3Bpbm5lclRvcCA9IHRoaXMuZG9tU2FuaXRpemVyXHJcbiAgICAgICAgICAgIC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYGNhbGMoNTAlICsgJHt0aGlzLmxvZ29TaXplIC8gMn1weCAtICR7dGV4dFNpemUgLyAyfXB4KWApO1xyXG4gICAgICAgICAgdGhpcy50ZXh0VG9wID0gdGhpcy5kb21TYW5pdGl6ZXJcclxuICAgICAgICAgICAgLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgY2FsYyg1MCUgKyAke3RoaXMubG9nb1NpemUgLyAyfXB4ICsgJHt0aGlzLmdhcH1weCArICR7dGhpcy5mZ3NTaXplIC8gMn1weClgKTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBsb2dvIGFuZCBzcGlubmVyXHJcbiAgICAgICAgICB0aGlzLmxvZ29Ub3AgPSB0aGlzLmRvbVNhbml0aXplclxyXG4gICAgICAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBjYWxjKDUwJSAtICR7dGhpcy5mZ3NTaXplIC8gMn1weCAtICR7dGhpcy5nYXAgLyAyfXB4KWApO1xyXG4gICAgICAgICAgdGhpcy5zcGlubmVyVG9wID0gdGhpcy5kb21TYW5pdGl6ZXJcclxuICAgICAgICAgICAgLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgY2FsYyg1MCUgKyAke3RoaXMubG9nb1NpemUgLyAyfXB4ICsgJHt0aGlzLmdhcCAvIDJ9cHgpYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLnRleHQgJiYgdGhpcy50ZXh0UG9zaXRpb24gPT09IFBPU0lUSU9OLmNlbnRlckNlbnRlcikgeyAvLyBzcGlubmVyIGFuZCB0ZXh0XHJcbiAgICAgICAgICB0aGlzLnNwaW5uZXJUb3AgPSB0aGlzLmRvbVNhbml0aXplclxyXG4gICAgICAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBjYWxjKDUwJSAtICR7dGV4dFNpemUgLyAyfXB4IC0gJHt0aGlzLmdhcCAvIDJ9cHgpYCk7XHJcbiAgICAgICAgICB0aGlzLnRleHRUb3AgPSB0aGlzLmRvbVNhbml0aXplclxyXG4gICAgICAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBjYWxjKDUwJSArICR7dGhpcy5mZ3NTaXplIC8gMn1weCArICR7dGhpcy5nYXAgLyAyfXB4KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubG9nb1VybCAmJiB0aGlzLmxvZ29Qb3NpdGlvbiA9PT0gUE9TSVRJT04uY2VudGVyQ2VudGVyXHJcbiAgICAgICAgJiYgdGhpcy50ZXh0ICYmIHRoaXMudGV4dFBvc2l0aW9uID09PSBQT1NJVElPTi5jZW50ZXJDZW50ZXIpIHsgLy8gbG9nbyBhbmQgdGV4dFxyXG4gICAgICAgIHRoaXMubG9nb1RvcCA9IHRoaXMuZG9tU2FuaXRpemVyXHJcbiAgICAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBjYWxjKDUwJSAtICR7dGV4dFNpemUgLyAyfXB4IC0gJHt0aGlzLmdhcCAvIDJ9cHgpYCk7XHJcbiAgICAgICAgdGhpcy50ZXh0VG9wID0gdGhpcy5kb21TYW5pdGl6ZXJcclxuICAgICAgICAgIC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYGNhbGMoNTAlICsgJHt0aGlzLmxvZ29TaXplIC8gMn1weCArICR7dGhpcy5nYXAgLyAyfXB4KWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbGlkYXRlKGlucHV0TmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCB2YWxpZFR5cGVPYmo6IHt9LCBmYWxsYmFja1ZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHZhbGlkVHlwZU9iaikubWFwKGsgPT4gdmFsaWRUeXBlT2JqW2tdKS5maW5kSW5kZXgodiA9PiB2ID09PSB2YWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFtuZ3gtdWktbG9hZGVyXSAtICR7aW5wdXROYW1lfSAoXCIke3ZhbHVlfVwiKSBpcyBpbnZhbGlkLiBgXHJcbiAgICAgICAgKyBgRGVmYXVsdCB2YWx1ZSBcIiR7ZmFsbGJhY2tWYWx1ZX1cIiBpcyB1c2VkLmApO1xyXG4gICAgICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9uIGRlc3Ryb3kgZXZlbnRcclxuICAgKi9cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubmd4U2VydmljZS5kZXN0cm95TG9hZGVyRGF0YSh0aGlzLmxvYWRlcklkKTtcclxuICAgIGlmICh0aGlzLnNob3dGb3JlZ3JvdW5kV2F0Y2hlcikge1xyXG4gICAgICB0aGlzLnNob3dGb3JlZ3JvdW5kV2F0Y2hlci51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hvd0JhY2tncm91bmRXYXRjaGVyKSB7XHJcbiAgICAgIHRoaXMuc2hvd0JhY2tncm91bmRXYXRjaGVyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb3JlZ3JvdW5kQ2xvc2luZ1dhdGNoZXIpIHtcclxuICAgICAgdGhpcy5mb3JlZ3JvdW5kQ2xvc2luZ1dhdGNoZXIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJhY2tncm91bmRDbG9zaW5nV2F0Y2hlcikge1xyXG4gICAgICB0aGlzLmJhY2tncm91bmRDbG9zaW5nV2F0Y2hlci51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=