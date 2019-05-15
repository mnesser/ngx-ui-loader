(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-ui-loader/fesm5/ngx-ui-loader.js":
/*!***************************************************!*\
  !*** ./dist/ngx-ui-loader/fesm5/ngx-ui-loader.js ***!
  \***************************************************/
/*! exports provided: NgxUiLoaderService, NgxUiLoaderModule, SPINNER, POSITION, PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule, ɵc, ɵa, ɵb, ɵf, ɵe, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiLoaderService", function() { return NgxUiLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiLoaderModule", function() { return NgxUiLoaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER", function() { return SPINNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSITION", function() { return POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PB_DIRECTION", function() { return PB_DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiLoaderRouterModule", function() { return NgxUiLoaderRouterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiLoaderHttpModule", function() { return NgxUiLoaderHttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgxUiLoaderBlurredDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NGX_UI_LOADER_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgxUiLoaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NGX_UI_LOADER_HTTP_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgxUiLoaderHttpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NGX_UI_LOADER_ROUTER_CONFIG_TOKEN; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var SPINNER = {
    ballScaleMultiple: 'ball-scale-multiple',
    ballSpin: 'ball-spin',
    ballSpinClockwise: 'ball-spin-clockwise',
    ballSpinClockwiseFadeRotating: 'ball-spin-clockwise-fade-rotating',
    ballSpinFadeRotating: 'ball-spin-fade-rotating',
    chasingDots: 'chasing-dots',
    circle: 'circle',
    cubeGrid: 'cube-grid',
    doubleBounce: 'double-bounce',
    fadingCircle: 'fading-circle',
    foldingCube: 'folding-cube',
    pulse: 'pulse',
    rectangleBounce: 'rectangle-bounce',
    rectangleBounceParty: 'rectangle-bounce-party',
    rectangleBouncePulseOut: 'rectangle-bounce-pulse-out',
    rectangleBouncePulseOutRapid: 'rectangle-bounce-pulse-out-rapid',
    rotatingPlane: 'rotating-plane',
    squareJellyBox: 'square-jelly-box',
    squareLoader: 'square-loader',
    threeBounce: 'three-bounce',
    threeStrings: 'three-strings',
    wanderingCubes: 'wandering-cubes',
};
/** @enum {string} */
var POSITION = {
    bottomCenter: 'bottom-center',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right',
    centerCenter: 'center-center',
    centerLeft: 'center-left',
    centerRight: 'center-right',
    topCenter: 'top-center',
    topLeft: 'top-left',
    topRight: 'top-right',
};
/** @enum {string} */
var PB_DIRECTION = {
    leftToRight: 'ltr',
    rightToLeft: 'rtl',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The default value of task id
 * @type {?}
 */
var DEFAULT_TASK_ID = 'default';
/**
 * The default value of loader id
 * @type {?}
 */
var DEFAULT_MASTER_LOADER_ID = 'master';
/** @type {?} */
var CLOSING_TIME = 501;
/** @type {?} */
var WAITING_FOR_OVERLAY_DISAPPEAR = 200;
/**
 * The configuration of spinners
 * @type {?}
 */
var SPINNER_CONFIG = {
    'ball-scale-multiple': {
        divs: 3,
        class: 'sk-ball-scale-multiple'
    },
    'ball-spin': {
        divs: 8,
        class: 'sk-ball-spin'
    },
    'ball-spin-clockwise': {
        divs: 8,
        class: 'sk-ball-spin-clockwise'
    },
    'ball-spin-clockwise-fade-rotating': {
        divs: 8,
        class: 'sk-ball-spin-clockwise-fade-rotating'
    },
    'ball-spin-fade-rotating': {
        divs: 8,
        class: 'sk-ball-spin-fade-rotating'
    },
    'chasing-dots': {
        divs: 2,
        class: 'sk-chasing-dots'
    },
    'circle': {
        divs: 12,
        class: 'sk-circle'
    },
    'cube-grid': {
        divs: 9,
        class: 'sk-cube-grid'
    },
    'double-bounce': {
        divs: 2,
        class: 'sk-double-bounce'
    },
    'fading-circle': {
        divs: 12,
        class: 'sk-fading-circle'
    },
    'folding-cube': {
        divs: 4,
        class: 'sk-folding-cube'
    },
    'pulse': {
        divs: 1,
        class: 'sk-pulse'
    },
    'rectangle-bounce': {
        divs: 5,
        class: 'sk-rectangle-bounce'
    },
    'rectangle-bounce-party': {
        divs: 5,
        class: 'sk-rectangle-bounce-party'
    },
    'rectangle-bounce-pulse-out': {
        divs: 5,
        class: 'sk-rectangle-bounce-pulse-out'
    },
    'rectangle-bounce-pulse-out-rapid': {
        divs: 5,
        class: 'sk-rectangle-bounce-pulse-out-rapid'
    },
    'rotating-plane': {
        divs: 1,
        class: 'sk-rotating-plane'
    },
    'square-jelly-box': {
        divs: 2,
        class: 'sk-square-jelly-box'
    },
    'square-loader': {
        divs: 1,
        class: 'sk-square-loader'
    },
    'three-bounce': {
        divs: 3,
        class: 'sk-three-bounce'
    },
    'three-strings': {
        divs: 3,
        class: 'sk-three-strings'
    },
    'wandering-cubes': {
        divs: 2,
        class: 'sk-wandering-cubes'
    },
};
/**
 * The default configuration of ngx-ui-loader
 * @type {?}
 */
var DEFAULT_CONFIG = {
    bgsColor: '#00ACC1',
    bgsOpacity: 0.5,
    bgsPosition: POSITION.bottomRight,
    bgsSize: 60,
    bgsType: SPINNER.ballSpinClockwise,
    blur: 5,
    fgsColor: '#00ACC1',
    fgsPosition: POSITION.centerCenter,
    fgsSize: 60,
    fgsType: SPINNER.ballSpinClockwise,
    gap: 24,
    logoPosition: POSITION.centerCenter,
    logoSize: 120,
    logoUrl: '',
    masterLoaderId: DEFAULT_MASTER_LOADER_ID,
    overlayBorderRadius: '0',
    overlayColor: 'rgba(40, 40, 40, 0.8)',
    pbColor: '#00ACC1',
    pbDirection: PB_DIRECTION.leftToRight,
    pbThickness: 3,
    hasProgressBar: true,
    text: '',
    textColor: '#FFFFFF',
    textPosition: POSITION.centerCenter,
    threshold: 500
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token for ngx-ui-loader configuration
 * @type {?}
 */
var NGX_UI_LOADER_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('ngxUiLoaderCustom.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxUiLoaderService = /** @class */ (function () {
    /**
     * Constructor
     * @param config
     */
    function NgxUiLoaderService(config) {
        this.config = config;
        this.defaultConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({}, DEFAULT_CONFIG);
        if (this.config) {
            if (this.config.threshold && this.config.threshold <= 0) {
                this.config.threshold = DEFAULT_CONFIG.threshold;
            }
            this.defaultConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({}, this.defaultConfig, this.config);
        }
        this.loaders = {};
        this.showForeground = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({ loaderId: '', isShow: false });
        this.showForeground$ = this.showForeground.asObservable();
        this.showBackground = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({ loaderId: '', isShow: false });
        this.showBackground$ = this.showBackground.asObservable();
        this.fgClosing = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({ loaderId: '', isShow: false });
        this.foregroundClosing$ = this.fgClosing.asObservable();
        this.bgClosing = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({ loaderId: '', isShow: false });
        this.backgroundClosing$ = this.bgClosing.asObservable();
    }
    /**
     * For internal use only. It may be changed in the future.
     * @docs-private
     */
    /**
     * For internal use only. It may be changed in the future.
     * \@docs-private
     * @param {?} loaderId
     * @return {?}
     */
    NgxUiLoaderService.prototype.initLoaderData = /**
     * For internal use only. It may be changed in the future.
     * \@docs-private
     * @param {?} loaderId
     * @return {?}
     */
    function (loaderId) {
        /** @type {?} */
        var isMaster = false;
        if (loaderId === this.defaultConfig.masterLoaderId) {
            this.throwErrorIfMasterLoaderExists(true);
            isMaster = true;
        }
        else { // not master loader
            this.throwErrorIfLoaderExists(loaderId, true);
        }
        if (this.loaders[loaderId]) {
            this.loaders[loaderId].isBound = true;
            this.loaders[loaderId].isMaster = isMaster;
            // emit showEvent after data loader is bound
            if (this.hasForeground(loaderId)) {
                this.showForeground.next({ loaderId: loaderId, isShow: true });
            }
            else {
                if (this.hasBackground(loaderId)) {
                    this.showBackground.next({ loaderId: loaderId, isShow: true });
                }
            }
        }
        else {
            this.createLoaderData(loaderId, isMaster, true);
        }
    };
    /**
     * For internal use only. It may be changed in the future.
     * @docs-private
     */
    /**
     * For internal use only. It may be changed in the future.
     * \@docs-private
     * @param {?} loaderId
     * @param {?} newLoaderId
     * @return {?}
     */
    NgxUiLoaderService.prototype.updateLoaderId = /**
     * For internal use only. It may be changed in the future.
     * \@docs-private
     * @param {?} loaderId
     * @param {?} newLoaderId
     * @return {?}
     */
    function (loaderId, newLoaderId) {
        this.throwErrorIfLoaderNotExist(loaderId);
        if (this.loaders[loaderId].loaderId === this.defaultConfig.masterLoaderId) {
            console.warn("[ngx-ui-loader] - Cannot change loaderId of master loader. The current " +
                ("master's loaderId is \"" + this.defaultConfig.masterLoaderId + "\". If you really want to ") +
                "change it, please use NgxUiLoaderModule.forRoot() method.");
            return;
        }
        if (newLoaderId !== loaderId) {
            this.throwErrorIfLoaderExists(newLoaderId, true);
            this.loaders[newLoaderId] = {
                loaderId: newLoaderId,
                background: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({}, this.loaders[loaderId].background),
                foreground: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({}, this.loaders[loaderId].foreground),
                isMaster: false,
                isBound: this.loaders[loaderId].isBound
            };
            delete this.loaders[loaderId];
        }
    };
    /**
     * For internal use only. It may be changed in the future.
     * @docs-private
     */
    /**
     * For internal use only. It may be changed in the future.
     * \@docs-private
     * @param {?} loaderId
     * @return {?}
     */
    NgxUiLoaderService.prototype.destroyLoaderData = /**
     * For internal use only. It may be changed in the future.
     * \@docs-private
     * @param {?} loaderId
     * @return {?}
     */
    function (loaderId) {
        this.stopLoaderAll(loaderId);
        delete this.loaders[loaderId];
    };
    /**
     * Get default loader configuration
     * @returns default configuration object
     */
    /**
     * Get default loader configuration
     * @return {?} default configuration object
     */
    NgxUiLoaderService.prototype.getDefaultConfig = /**
     * Get default loader configuration
     * @return {?} default configuration object
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({}, this.defaultConfig);
    };
    /**
     * Get all the loaders
     */
    /**
     * Get all the loaders
     * @return {?}
     */
    NgxUiLoaderService.prototype.getLoaders = /**
     * Get all the loaders
     * @return {?}
     */
    function () {
        return JSON.parse(JSON.stringify(this.loaders));
    };
    /**
     * Get data of a specified loader. If loaderId is not provided, it will return data of master loader(if existed)
     */
    /**
     * Get data of a specified loader. If loaderId is not provided, it will return data of master loader(if existed)
     * @param {?=} loaderId
     * @return {?}
     */
    NgxUiLoaderService.prototype.getLoader = /**
     * Get data of a specified loader. If loaderId is not provided, it will return data of master loader(if existed)
     * @param {?=} loaderId
     * @return {?}
     */
    function (loaderId) {
        if (loaderId) {
            this.throwErrorIfLoaderNotExist(loaderId);
        }
        else {
            this.throwErrorIfMasterLoaderNotExist();
            loaderId = this.defaultConfig.masterLoaderId;
        }
        return JSON.parse(JSON.stringify(this.loaders[loaderId]));
    };
    /**
     * @deprecated use getLoader() or getLoaders() instead. This will be removed in the version 8.x.x
     * Return status of master loader
     */
    /**
     * @deprecated use getLoader() or getLoaders() instead. This will be removed in the version 8.x.x
     * Return status of master loader
     * @return {?}
     */
    NgxUiLoaderService.prototype.getStatus = /**
     * @deprecated use getLoader() or getLoaders() instead. This will be removed in the version 8.x.x
     * Return status of master loader
     * @return {?}
     */
    function () {
        this.throwErrorIfMasterLoaderNotExist();
        return {
            waitingBackground: this.loaders[this.defaultConfig.masterLoaderId].background,
            waitingForeground: this.loaders[this.defaultConfig.masterLoaderId].foreground
        };
    };
    /**
     * Check whether the queue has a waiting foreground loader with the given `taskId`.
     * If no `taskId` specified, it will check whether the queue has any waiting foreground loader.
     * @param loaderId the loader Id
     * @param taskId the optional task Id
     * @returns boolean
     */
    /**
     * Check whether the queue has a waiting foreground loader with the given `taskId`.
     * If no `taskId` specified, it will check whether the queue has any waiting foreground loader.
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id
     * @return {?} boolean
     */
    NgxUiLoaderService.prototype.hasForeground = /**
     * Check whether the queue has a waiting foreground loader with the given `taskId`.
     * If no `taskId` specified, it will check whether the queue has any waiting foreground loader.
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id
     * @return {?} boolean
     */
    function (loaderId, taskId) {
        if (this.loaders[loaderId]) {
            if (taskId) {
                return this.loaders[loaderId].foreground[taskId] ? true : false;
            }
            return Object.keys(this.loaders[loaderId].foreground).length > 0;
        }
        return false;
    };
    /**
     * Check whether the queue has a waiting background loader with the given `taskId`.
     * If no `taskId` specified, it will check whether the queue has any waiting background loader.
     * @param loaderId the loader Id
     * @param taskId the optional task Id
     * @returns boolean
     */
    /**
     * Check whether the queue has a waiting background loader with the given `taskId`.
     * If no `taskId` specified, it will check whether the queue has any waiting background loader.
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id
     * @return {?} boolean
     */
    NgxUiLoaderService.prototype.hasBackground = /**
     * Check whether the queue has a waiting background loader with the given `taskId`.
     * If no `taskId` specified, it will check whether the queue has any waiting background loader.
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id
     * @return {?} boolean
     */
    function (loaderId, taskId) {
        if (this.loaders[loaderId]) {
            if (taskId) {
                return this.loaders[loaderId].background[taskId] ? true : false;
            }
            return Object.keys(this.loaders[loaderId].background).length > 0;
        }
        return false;
    };
    /**
     * Start the foreground loading of loader having `loaderId` with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stopLoader() method.
     * @param loaderId the loader Id
     * @param taskId the optional task Id of the loading. taskId is set to 'default' by default.
     */
    /**
     * Start the foreground loading of loader having `loaderId` with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stopLoader() method.
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
     * @return {?}
     */
    NgxUiLoaderService.prototype.startLoader = /**
     * Start the foreground loading of loader having `loaderId` with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stopLoader() method.
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
     * @return {?}
     */
    function (loaderId, taskId) {
        if (taskId === void 0) { taskId = DEFAULT_TASK_ID; }
        this.createLoaderData(loaderId, undefined, false);
        /** @type {?} */
        var foregroundRunning = this.hasForeground(loaderId);
        this.loaders[loaderId].foreground[taskId] = Date.now();
        if (!this.loaders[loaderId].isBound) {
            return;
        }
        if (!foregroundRunning) {
            if (this.hasBackground(loaderId)) {
                this.backgroundCloseout(loaderId);
                this.showBackground.next({ loaderId: loaderId, isShow: false });
            }
            this.showForeground.next({ loaderId: loaderId, isShow: true });
        }
    };
    /**
     * Start the foreground loading of master loader with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stop() method.
     * NOTE: Really this function just wraps startLoader() function
     * @param taskId the optional task Id of the loading. taskId is set to 'default' by default.
     */
    /**
     * Start the foreground loading of master loader with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stop() method.
     * NOTE: Really this function just wraps startLoader() function
     * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
     * @return {?}
     */
    NgxUiLoaderService.prototype.start = /**
     * Start the foreground loading of master loader with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stop() method.
     * NOTE: Really this function just wraps startLoader() function
     * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
     * @return {?}
     */
    function (taskId) {
        if (taskId === void 0) { taskId = DEFAULT_TASK_ID; }
        this.startLoader(this.defaultConfig.masterLoaderId, taskId);
    };
    /**
     * Start the background loading of loader having `loaderId` with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stopLoaderBackground() method.
     * @param loaderId the loader Id
     * @param taskId the optional task Id of the loading. taskId is set to 'default' by default.
     */
    /**
     * Start the background loading of loader having `loaderId` with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stopLoaderBackground() method.
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
     * @return {?}
     */
    NgxUiLoaderService.prototype.startBackgroundLoader = /**
     * Start the background loading of loader having `loaderId` with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stopLoaderBackground() method.
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
     * @return {?}
     */
    function (loaderId, taskId) {
        if (taskId === void 0) { taskId = DEFAULT_TASK_ID; }
        this.createLoaderData(loaderId, undefined, false);
        this.loaders[loaderId].background[taskId] = Date.now();
        if (!this.loaders[loaderId].isBound) {
            return;
        }
        if (!this.hasForeground(loaderId)) {
            this.showBackground.next({ loaderId: loaderId, isShow: true });
        }
    };
    /**
     * Start the background loading of master loader with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stopBackground() method.
     * NOTE: Really this function just wraps startBackgroundLoader() function
     * @param taskId the optional task Id of the loading. taskId is set to 'default' by default.
     */
    /**
     * Start the background loading of master loader with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stopBackground() method.
     * NOTE: Really this function just wraps startBackgroundLoader() function
     * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
     * @return {?}
     */
    NgxUiLoaderService.prototype.startBackground = /**
     * Start the background loading of master loader with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stopBackground() method.
     * NOTE: Really this function just wraps startBackgroundLoader() function
     * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
     * @return {?}
     */
    function (taskId) {
        if (taskId === void 0) { taskId = DEFAULT_TASK_ID; }
        this.startBackgroundLoader(this.defaultConfig.masterLoaderId, taskId);
    };
    /**
     * Stop a foreground loading of loader having `loaderId` with specific `taskId`
     * @param loaderId the loader Id
     * @param taskId the optional task Id to stop. If not provided, 'default' is used.
     * @returns Object
     */
    /**
     * Stop a foreground loading of loader having `loaderId` with specific `taskId`
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    NgxUiLoaderService.prototype.stopLoader = /**
     * Stop a foreground loading of loader having `loaderId` with specific `taskId`
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    function (loaderId, taskId) {
        var _this = this;
        if (taskId === void 0) { taskId = DEFAULT_TASK_ID; }
        this.throwErrorIfLoaderNotExist(loaderId);
        // Update loader data {{{
        /** @type {?} */
        var now = Date.now();
        if (this.hasForeground(loaderId, taskId)) {
            if (this.loaders[loaderId].foreground[taskId] + this.defaultConfig.threshold > now) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.stopLoader(loaderId, taskId);
                }), this.loaders[loaderId].foreground[taskId] + this.defaultConfig.threshold - now);
                return;
            }
            delete this.loaders[loaderId].foreground[taskId];
        }
        else {
            return;
        }
        // }}}
        // Emit ShowEvents to update view {{{
        if (!this.hasForeground(loaderId)) {
            this.foregroundCloseout(loaderId);
            this.showForeground.next({ loaderId: loaderId, isShow: false });
            if (this.hasBackground(loaderId)) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (_this.hasBackground(loaderId)) { // still have background tasks
                        _this.showBackground.next({ loaderId: loaderId, isShow: true });
                    }
                }), WAITING_FOR_OVERLAY_DISAPPEAR);
            }
        }
        // }}}
    };
    /**
     * Stop a foreground loading of master loader with specific `taskId`
     * @param taskId the optional task Id to stop. If not provided, 'default' is used.
     * @returns Object
     */
    /**
     * Stop a foreground loading of master loader with specific `taskId`
     * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    NgxUiLoaderService.prototype.stop = /**
     * Stop a foreground loading of master loader with specific `taskId`
     * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    function (taskId) {
        if (taskId === void 0) { taskId = DEFAULT_TASK_ID; }
        this.stopLoader(this.defaultConfig.masterLoaderId, taskId);
    };
    /**
     * Stop a background loading of loader having `loaderId` with specific `taskId`
     * @param loaderId the loader Id
     * @param taskId the optional task Id to stop. If not provided, 'default' is used.
     * @returns Object
     */
    /**
     * Stop a background loading of loader having `loaderId` with specific `taskId`
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    NgxUiLoaderService.prototype.stopBackgroundLoader = /**
     * Stop a background loading of loader having `loaderId` with specific `taskId`
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    function (loaderId, taskId) {
        var _this = this;
        if (taskId === void 0) { taskId = DEFAULT_TASK_ID; }
        this.throwErrorIfLoaderNotExist(loaderId);
        // Update loader data {{{
        /** @type {?} */
        var now = Date.now();
        if (this.hasBackground(loaderId, taskId)) {
            if (this.loaders[loaderId].background[taskId] + this.defaultConfig.threshold > now) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.stopBackgroundLoader(loaderId, taskId);
                }), this.loaders[loaderId].background[taskId] + this.defaultConfig.threshold - now);
                return;
            }
            delete this.loaders[loaderId].background[taskId];
        }
        else {
            return;
        }
        // }}}
        // Emit ShowEvents to update view {{{
        if (!this.hasForeground(loaderId) && !this.hasBackground(loaderId)) {
            this.backgroundCloseout(loaderId);
            this.showBackground.next({ loaderId: loaderId, isShow: false });
        }
        // }}}
    };
    /**
     * Stop a background loading of master loader with specific taskId
     * @param taskId the optional task Id to stop. If not provided, 'default' is used.
     * @returns Object
     */
    /**
     * Stop a background loading of master loader with specific taskId
     * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    NgxUiLoaderService.prototype.stopBackground = /**
     * Stop a background loading of master loader with specific taskId
     * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    function (taskId) {
        if (taskId === void 0) { taskId = DEFAULT_TASK_ID; }
        this.stopBackgroundLoader(this.defaultConfig.masterLoaderId, taskId);
    };
    /**
     * Stop all the background and foreground loadings of loader having `loaderId`
     * @param loaderId the loader Id
     */
    /**
     * Stop all the background and foreground loadings of loader having `loaderId`
     * @param {?} loaderId the loader Id
     * @return {?}
     */
    NgxUiLoaderService.prototype.stopLoaderAll = /**
     * Stop all the background and foreground loadings of loader having `loaderId`
     * @param {?} loaderId the loader Id
     * @return {?}
     */
    function (loaderId) {
        this.throwErrorIfLoaderNotExist(loaderId);
        if (this.hasForeground(loaderId)) {
            this.foregroundCloseout(loaderId);
            this.showForeground.next({ loaderId: loaderId, isShow: false });
        }
        else if (this.hasBackground(loaderId)) {
            this.backgroundCloseout(loaderId);
            this.showBackground.next({ loaderId: loaderId, isShow: false });
        }
        this.loaders[loaderId].foreground = {};
        this.loaders[loaderId].background = {};
    };
    /**
     * Stop all the background and foreground loadings of master loader
     */
    /**
     * Stop all the background and foreground loadings of master loader
     * @return {?}
     */
    NgxUiLoaderService.prototype.stopAll = /**
     * Stop all the background and foreground loadings of master loader
     * @return {?}
     */
    function () {
        this.stopLoaderAll(this.defaultConfig.masterLoaderId);
    };
    /**
     * Create loader data if it does not exist
     * @param loaderId
     * @param isMaster
     * @param isBound
     * @docs-private
     */
    /**
     * Create loader data if it does not exist
     * \@docs-private
     * @private
     * @param {?} loaderId
     * @param {?} isMaster
     * @param {?} isBound
     * @return {?}
     */
    NgxUiLoaderService.prototype.createLoaderData = /**
     * Create loader data if it does not exist
     * \@docs-private
     * @private
     * @param {?} loaderId
     * @param {?} isMaster
     * @param {?} isBound
     * @return {?}
     */
    function (loaderId, isMaster, isBound) {
        if (!this.loaders[loaderId]) {
            this.loaders[loaderId] = {
                loaderId: loaderId,
                foreground: {},
                background: {},
                isMaster: isMaster,
                isBound: isBound
            };
        }
    };
    /**
     * Throw error if the loaderId does not exist.
     * @docs-private
     */
    /**
     * Throw error if the loaderId does not exist.
     * \@docs-private
     * @private
     * @param {?} loaderId
     * @return {?}
     */
    NgxUiLoaderService.prototype.throwErrorIfLoaderNotExist = /**
     * Throw error if the loaderId does not exist.
     * \@docs-private
     * @private
     * @param {?} loaderId
     * @return {?}
     */
    function (loaderId) {
        if (!this.loaders[loaderId]) {
            throw new Error("[ngx-ui-loader] - loaderId \"" + loaderId + "\" does not exist.");
        }
    };
    /**
     * Throw error if the loaderId has already existed.
     * @docs-private
     */
    /**
     * Throw error if the loaderId has already existed.
     * \@docs-private
     * @private
     * @param {?} loaderId
     * @param {?=} useIsBoundProp
     * @return {?}
     */
    NgxUiLoaderService.prototype.throwErrorIfLoaderExists = /**
     * Throw error if the loaderId has already existed.
     * \@docs-private
     * @private
     * @param {?} loaderId
     * @param {?=} useIsBoundProp
     * @return {?}
     */
    function (loaderId, useIsBoundProp) {
        if (this.loaders[loaderId] && (this.loaders[loaderId].isBound && useIsBoundProp)) {
            throw new Error("[ngx-ui-loader] - loaderId \"" + loaderId + "\" is duplicated. Please choose another one!");
        }
    };
    /**
     * Throw error if the master loader has already existed.
     * @docs-private
     */
    /**
     * Throw error if the master loader has already existed.
     * \@docs-private
     * @private
     * @param {?=} useIsBoundProp
     * @return {?}
     */
    NgxUiLoaderService.prototype.throwErrorIfMasterLoaderExists = /**
     * Throw error if the master loader has already existed.
     * \@docs-private
     * @private
     * @param {?=} useIsBoundProp
     * @return {?}
     */
    function (useIsBoundProp) {
        if (this.loaders[this.defaultConfig.masterLoaderId] && (this.loaders[this.defaultConfig.masterLoaderId].isBound && useIsBoundProp)) {
            throw new Error("[ngx-ui-loader] - The master loader has already existed. "
                + "The app should have only one master loader and it should be placed in the root app template");
        }
    };
    /**
     * Throw error if the master loader does not exist.
     * @docs-private
     */
    /**
     * Throw error if the master loader does not exist.
     * \@docs-private
     * @private
     * @return {?}
     */
    NgxUiLoaderService.prototype.throwErrorIfMasterLoaderNotExist = /**
     * Throw error if the master loader does not exist.
     * \@docs-private
     * @private
     * @return {?}
     */
    function () {
        if (!this.loaders[this.defaultConfig.masterLoaderId]) {
            throw new Error("[ngx-ui-loader] - The master loader does not exist.");
        }
    };
    /**
     * Manage to close foreground loading
     * @param loaderId the loader id
     */
    /**
     * Manage to close foreground loading
     * @private
     * @param {?} loaderId the loader id
     * @return {?}
     */
    NgxUiLoaderService.prototype.foregroundCloseout = /**
     * Manage to close foreground loading
     * @private
     * @param {?} loaderId the loader id
     * @return {?}
     */
    function (loaderId) {
        var _this = this;
        this.fgClosing.next({ loaderId: loaderId, isShow: true });
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.fgClosing.next({ loaderId: loaderId, isShow: false });
        }), CLOSING_TIME);
    };
    /**
     * Manage to close background loading
     * @param loaderId the loader id
     */
    /**
     * Manage to close background loading
     * @private
     * @param {?} loaderId the loader id
     * @return {?}
     */
    NgxUiLoaderService.prototype.backgroundCloseout = /**
     * Manage to close background loading
     * @private
     * @param {?} loaderId the loader id
     * @return {?}
     */
    function (loaderId) {
        var _this = this;
        this.bgClosing.next({ loaderId: loaderId, isShow: true });
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.bgClosing.next({ loaderId: loaderId, isShow: false });
        }), CLOSING_TIME);
    };
    NgxUiLoaderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxUiLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [NGX_UI_LOADER_CONFIG_TOKEN,] }] }
    ]; };
    /** @nocollapse */ NgxUiLoaderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["defineInjectable"])({ factory: function NgxUiLoaderService_Factory() { return new NgxUiLoaderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"])(NGX_UI_LOADER_CONFIG_TOKEN, 8)); }, token: NgxUiLoaderService, providedIn: "root" });
    return NgxUiLoaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerce a value (string) to a number
 * @param {?} value
 * @param {?} fallbackValue
 * @return {?}
 */
function coerceNumber(value, fallbackValue) {
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'ngx-ui-loader',
                    template: "<!-- Progress bar {{{ -->\r\n<div *ngIf=\"hasProgressBar\"\r\n  class=\"ngx-progress-bar\"\r\n  [class.ngx-position-absolute]=\"loaderId !== defaultConfig.masterLoaderId\"\r\n  [ngClass]=\"'ngx-progress-bar-' + pbDirection\"\r\n  [style.height.px]=\"pbThickness\"\r\n  [style.color]=\"pbColor\"\r\n  [class.loading-foreground]=\"showForeground\"\r\n  [class.foreground-closing]=\"foregroundClosing\"></div>\r\n<!-- Progress bar }}} -->\r\n\r\n<!-- Foreground container {{{ -->\r\n<div class=\"ngx-overlay\"\r\n  [class.ngx-position-absolute]=\"loaderId !== defaultConfig.masterLoaderId\"\r\n  [style.background-color]=\"overlayColor\"\r\n  [style.border-radius]=\"overlayBorderRadius\"\r\n  [class.loading-foreground]=\"showForeground\"\r\n  [class.foreground-closing]=\"foregroundClosing\">\r\n\r\n  <!-- Logo {{{ -->\r\n  <img *ngIf=\"logoUrl\" class=\"ngx-loading-logo\"\r\n    [ngClass]=\"logoPosition\" [src]=\"trustedLogoUrl\"\r\n    [style.width.px]=\"logoSize\" [style.height.px]=\"logoSize\"\r\n    [style.top]=\"logoTop\">\r\n  <!-- Logo }}} -->\r\n\r\n  <!-- Foreground spinner {{{ -->\r\n  <div class=\"ngx-foreground-spinner\"\r\n    [ngClass]=\"fgsPosition\" [style.color]=\"fgsColor\"\r\n    [style.width.px]=\"fgsSize\" [style.height.px]=\"fgsSize\"\r\n    [style.top]=\"spinnerTop\">\r\n    <div [class]=\"fgSpinnerClass\">\r\n      <div *ngFor=\"let div of fgDivs\"></div>\r\n    </div>\r\n  </div>\r\n  <!-- Foreground spinner }}} -->\r\n\r\n  <!-- Loading text {{{ -->\r\n  <div class=\"ngx-loading-text\"\r\n    [ngClass]=\"textPosition\"\r\n    [style.top]=\"textTop\"\r\n    [style.color]=\"textColor\">{{text}}</div>\r\n  <!-- Loading text }}} -->\r\n\r\n</div>\r\n<!-- Foreground container }}} -->\r\n\r\n<!-- Background spinner {{{ -->\r\n<div class=\"ngx-background-spinner\"\r\n  [class.ngx-position-absolute]=\"loaderId !== defaultConfig.masterLoaderId\"\r\n  [ngClass]=\"bgsPosition\"\r\n  [class.loading-background]=\"showBackground\"\r\n  [class.background-closing]=\"backgroundClosing\"\r\n  [style.width.px]=\"bgsSize\" [style.height.px]=\"bgsSize\"\r\n  [style.color]=\"bgsColor\" [style.opacity]=\"bgsOpacity\">\r\n  <div [class]=\"bgSpinnerClass\">\r\n    <div *ngFor=\"let div of bgDivs\"></div>\r\n  </div>\r\n</div>\r\n<!-- Background spinner }}} -->\r\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
                    styles: [".ngx-progress-bar{position:fixed;top:0;left:0;width:100%;height:3px;z-index:99999!important;display:none;color:#00acc1;overflow:hidden}.ngx-progress-bar.foreground-closing,.ngx-progress-bar.loading-foreground{display:block}.ngx-progress-bar.foreground-closing{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-progress-bar::after,.ngx-progress-bar::before{background-color:currentColor;content:'';display:block;width:100%;height:100%;position:absolute;top:0}.ngx-progress-bar-ltr::before{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.ngx-progress-bar-ltr::after{-webkit-animation:20s ease-out progressBar-slide-ltr;animation:20s ease-out progressBar-slide-ltr;-webkit-transform:translate3d(-5%,0,0);transform:translate3d(-5%,0,0)}.ngx-progress-bar-rtl::before{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.ngx-progress-bar-rtl::after{-webkit-animation:20s ease-out progressBar-slide-rtl;animation:20s ease-out progressBar-slide-rtl;-webkit-transform:translate3d(5%,0,0);transform:translate3d(5%,0,0)}.foreground-closing.ngx-progress-bar-ltr::before{-webkit-animation:1s ease-out progressBar-slide-complete-ltr;animation:1s ease-out progressBar-slide-complete-ltr;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.foreground-closing.ngx-progress-bar-rtl::before{-webkit-animation:1s ease-out progressBar-slide-complete-rtl;animation:1s ease-out progressBar-slide-complete-rtl;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}@-webkit-keyframes progressBar-slide-ltr{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{-webkit-transform:translate3d(-5%,0,0);transform:translate3d(-5%,0,0)}}@keyframes progressBar-slide-ltr{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{-webkit-transform:translate3d(-5%,0,0);transform:translate3d(-5%,0,0)}}@-webkit-keyframes progressBar-slide-rtl{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{-webkit-transform:translate3d(5%,0,0);transform:translate3d(5%,0,0)}}@keyframes progressBar-slide-rtl{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{-webkit-transform:translate3d(5%,0,0);transform:translate3d(5%,0,0)}}@-webkit-keyframes progressBar-slide-complete-ltr{0%{-webkit-transform:translate3d(-75%,0,0);transform:translate3d(-75%,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes progressBar-slide-complete-ltr{0%{-webkit-transform:translate3d(-75%,0,0);transform:translate3d(-75%,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes progressBar-slide-complete-rtl{0%{-webkit-transform:translate3d(75%,0,0);transform:translate3d(75%,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes progressBar-slide-complete-rtl{0%{-webkit-transform:translate3d(75%,0,0);transform:translate3d(75%,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.ngx-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99998!important;background-color:rgba(40,40,40,.8);cursor:progress;display:none}.ngx-overlay.foreground-closing,.ngx-overlay.loading-foreground{display:block}.ngx-overlay.foreground-closing{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-overlay>.ngx-foreground-spinner{position:fixed;width:60px;height:60px;margin:0;color:#00acc1}.ngx-overlay>.ngx-loading-logo{position:fixed;margin:0;width:120px;height:120px}.ngx-overlay>.ngx-loading-text{position:fixed;margin:0;font-family:sans-serif;font-weight:400;font-size:1.2em;color:#fff}.ngx-background-spinner{position:fixed;z-index:99997!important;width:60px;height:60px;margin:0;color:#00acc1;opacity:.6;display:none}.ngx-background-spinner.background-closing,.ngx-background-spinner.loading-background{display:block}.ngx-background-spinner.background-closing{opacity:0!important;transition:opacity .7s ease-out}.ngx-position-absolute,.ngx-position-absolute>.ngx-foreground-spinner,.ngx-position-absolute>.ngx-loading-logo,.ngx-position-absolute>.ngx-loading-text{position:absolute!important}.ngx-position-absolute.ngx-progress-bar{z-index:99996!important}.ngx-position-absolute.ngx-overlay{z-index:99995!important}.ngx-position-absolute .sk-square-jelly-box>div:nth-child(1),.ngx-position-absolute.ngx-background-spinner{z-index:99994!important}.top-left{top:30px;left:30px}.top-center{top:30px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.top-right{top:30px;right:30px}.center-left{top:50%;left:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.center-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.center-right{top:50%;right:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.bottom-left{bottom:30px;left:30px}.bottom-center{bottom:30px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.bottom-right{bottom:30px;right:30px}.sk-ball-scale-multiple,.sk-ball-scale-multiple>div{position:relative;box-sizing:border-box}.sk-ball-scale-multiple{width:100%;height:100%;font-size:0}.sk-ball-scale-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;opacity:0;-webkit-animation:1s linear infinite ball-scale-multiple;animation:1s linear infinite ball-scale-multiple}.sk-ball-scale-multiple>div:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-ball-scale-multiple>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}.sk-ball-spin,.sk-ball-spin>div{position:relative;box-sizing:border-box}.sk-ball-spin{width:100%;height:100%;font-size:0}.sk-ball-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.sk-ball-spin>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.sk-ball-spin>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.sk-ball-spin>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.sk-ball-spin>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.sk-ball-spin>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.sk-ball-spin>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.sk-ball-spin>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.sk-ball-spin>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}@-webkit-keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.sk-ball-spin-clockwise,.sk-ball-spin-clockwise>div{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise{width:100%;height:100%;font-size:0}.sk-ball-spin-clockwise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.sk-ball-spin-clockwise>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.sk-ball-spin-clockwise>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.sk-ball-spin-clockwise>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.sk-ball-spin-clockwise>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-ball-spin-clockwise>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.sk-ball-spin-clockwise>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.sk-ball-spin-clockwise>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.sk-ball-spin-clockwise>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.sk-ball-spin-clockwise-fade-rotating,.sk-ball-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise-fade-rotating{font-size:0;width:100%;height:100%;-webkit-animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate}.sk-ball-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade-rotating;animation:1s linear infinite ball-spin-clockwise-fade-rotating}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.sk-ball-spin-fade-rotating,.sk-ball-spin-fade-rotating>div{position:relative;box-sizing:border-box}.sk-ball-spin-fade-rotating{width:100%;height:100%;font-size:0;-webkit-animation:6s linear infinite ball-spin-fade-rotate;animation:6s linear infinite ball-spin-fade-rotate}.sk-ball-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.sk-ball-spin-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.sk-ball-spin-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.sk-ball-spin-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.sk-ball-spin-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.sk-ball-spin-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.sk-ball-spin-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.sk-ball-spin-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.sk-ball-spin-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}@-webkit-keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}@keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}.sk-chasing-dots{margin:auto;width:100%;height:100%;position:absolute;text-align:center;-webkit-animation:2s linear infinite sk-chasingDots-rotate;animation:2s linear infinite sk-chasingDots-rotate}.sk-chasing-dots>div{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:currentColor;border-radius:100%;-webkit-animation:2s ease-in-out infinite sk-chasingDots-bounce;animation:2s ease-in-out infinite sk-chasingDots-bounce}.sk-chasing-dots>div:nth-child(2){top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-chasingDots-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes sk-chasingDots-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes sk-chasingDots-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-chasingDots-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.sk-circle{margin:auto;width:100%;height:100%;position:relative}.sk-circle>div{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle>div::before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circle-bounceDelay;animation:1.2s ease-in-out infinite both sk-circle-bounceDelay}.sk-circle>div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-circle>div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-circle>div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-circle>div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-circle>div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-circle>div:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-circle>div:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-circle>div:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-circle>div:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-circle>div:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-circle>div:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-circle>div:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-circle>div:nth-child(3)::before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-circle>div:nth-child(4)::before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-circle>div:nth-child(5)::before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-circle>div:nth-child(6)::before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-circle>div:nth-child(7)::before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-circle>div:nth-child(8)::before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-circle>div:nth-child(9)::before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-circle>div:nth-child(10)::before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-circle>div:nth-child(11)::before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-circle>div:nth-child(12)::before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circle-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-circle-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.sk-cube-grid{width:100%;height:100%;margin:auto}.sk-cube-grid>div{width:33%;height:33%;background-color:currentColor;float:left;-webkit-animation:1.3s ease-in-out infinite sk-cubeGrid-scaleDelay;animation:1.3s ease-in-out infinite sk-cubeGrid-scaleDelay}.sk-cube-grid>div:nth-child(1){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid>div:nth-child(2){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.sk-cube-grid>div:nth-child(4){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid>div:nth-child(5){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid>div:nth-child(6){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid>div:nth-child(7){-webkit-animation-delay:0s;animation-delay:0s}.sk-cube-grid>div:nth-child(8){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid>div:nth-child(9){-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes sk-cubeGrid-scaleDelay{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}@keyframes sk-cubeGrid-scaleDelay{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}.sk-double-bounce{width:100%;height:100%;position:relative;margin:auto}.sk-double-bounce>div{width:100%;height:100%;border-radius:50%;background-color:currentColor;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:2s ease-in-out infinite sk-doubleBounce-bounce;animation:2s ease-in-out infinite sk-doubleBounce-bounce}.sk-double-bounce>div:nth-child(2){-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-doubleBounce-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-doubleBounce-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.sk-fading-circle{margin:auto;width:100%;height:100%;position:relative}.sk-fading-circle>div{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle>div::before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-fadingCircle-FadeDelay;animation:1.2s ease-in-out infinite both sk-fadingCircle-FadeDelay}.sk-fading-circle>div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle>div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle>div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle>div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle>div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle>div:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle>div:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle>div:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle>div:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle>div:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle>div:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle>div:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle>div:nth-child(3)::before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle>div:nth-child(4)::before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle>div:nth-child(5)::before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle>div:nth-child(6)::before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle>div:nth-child(7)::before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle>div:nth-child(8)::before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle>div:nth-child(9)::before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle>div:nth-child(10)::before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle>div:nth-child(11)::before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle>div:nth-child(12)::before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-fadingCircle-FadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-fadingCircle-FadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}.sk-folding-cube{margin:auto;width:100%;height:100%;position:relative;-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.sk-folding-cube>div{float:left;width:50%;height:50%;position:relative;-webkit-transform:scale(1.1);transform:scale(1.1)}.sk-folding-cube>div::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;-webkit-animation:2.4s linear infinite both sk-foldingCube-angle;animation:2.4s linear infinite both sk-foldingCube-angle;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.sk-folding-cube>div:nth-child(2){-webkit-transform:scale(1.1) rotateZ(90deg);transform:scale(1.1) rotateZ(90deg)}.sk-folding-cube>div:nth-child(3){-webkit-transform:scale(1.1) rotateZ(270deg);transform:scale(1.1) rotateZ(270deg)}.sk-folding-cube>div:nth-child(4){-webkit-transform:scale(1.1) rotateZ(180deg);transform:scale(1.1) rotateZ(180deg)}.sk-folding-cube>div:nth-child(2)::before{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-folding-cube>div:nth-child(3)::before{-webkit-animation-delay:.9s;animation-delay:.9s}.sk-folding-cube>div:nth-child(4)::before{-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes sk-foldingCube-angle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes sk-foldingCube-angle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}.sk-pulse{width:100%;height:100%;margin:auto}.sk-pulse>div{width:100%;height:100%;background-color:currentColor;border-radius:100%;-webkit-animation:1s ease-in-out infinite sk-pulse-scaleOut;animation:1s ease-in-out infinite sk-pulse-scaleOut}@-webkit-keyframes sk-pulse-scaleOut{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes sk-pulse-scaleOut{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}.sk-rectangle-bounce{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce>div{background-color:currentColor;height:100%;width:10%;margin:0 5%;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-rectangleBounce-stretchDelay;animation:1.2s ease-in-out infinite sk-rectangleBounce-stretchDelay}.sk-rectangle-bounce>div:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rectangle-bounce>div:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rectangle-bounce>div:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce>div:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rectangleBounce-stretchDelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes sk-rectangleBounce-stretchDelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}.sk-rectangle-bounce-party,.sk-rectangle-bounce-party>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-party{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-party>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation-name:rectangle-bounce-party;animation-name:rectangle-bounce-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.sk-rectangle-bounce-party>div:nth-child(1){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.sk-rectangle-bounce-party>div:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-rectangle-bounce-party>div:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.sk-rectangle-bounce-party>div:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.sk-rectangle-bounce-party>div:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}@-webkit-keyframes rectangle-bounce-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}@keyframes rectangle-bounce-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}.sk-rectangle-bounce-pulse-out,.sk-rectangle-bounce-pulse-out>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation:.9s cubic-bezier(.85,.25,.37,.85) infinite rectangle-bounce-pulse-out;animation:.9s cubic-bezier(.85,.25,.37,.85) infinite rectangle-bounce-pulse-out}.sk-rectangle-bounce-pulse-out>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce-pulse-out>div:nth-child(2),.sk-rectangle-bounce-pulse-out>div:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-rectangle-bounce-pulse-out>div:nth-child(1),.sk-rectangle-bounce-pulse-out>div:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}@-webkit-keyframes rectangle-bounce-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.4);transform:scaley(.4)}}@keyframes rectangle-bounce-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.4);transform:scaley(.4)}}.sk-rectangle-bounce-pulse-out-rapid,.sk-rectangle-bounce-pulse-out-rapid>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out-rapid{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out-rapid>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation:.9s cubic-bezier(.11,.49,.38,.78) infinite rectangle-bounce-pulse-out-rapid;animation:.9s cubic-bezier(.11,.49,.38,.78) infinite rectangle-bounce-pulse-out-rapid}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(2),.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(1),.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}@-webkit-keyframes rectangle-bounce-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.4);transform:scaley(.4)}}@keyframes rectangle-bounce-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.4);transform:scaley(.4)}}.sk-rotating-plane{width:100%;height:100%;text-align:center;margin:auto}.sk-rotating-plane>div{width:100%;height:100%;background-color:currentColor;-webkit-animation:1.2s ease-in-out infinite sk-rotatePlane;animation:1.2s ease-in-out infinite sk-rotatePlane}@-webkit-keyframes sk-rotatePlane{0%{-webkit-transform:perspective(120px) rotateX(0) rotateY(0);transform:perspective(120px) rotateX(0) rotateY(0)}50%{-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0);transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}@keyframes sk-rotatePlane{0%{-webkit-transform:perspective(120px) rotateX(0) rotateY(0);transform:perspective(120px) rotateX(0) rotateY(0)}50%{-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0);transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}.sk-square-jelly-box,.sk-square-jelly-box>div{position:relative;box-sizing:border-box}.sk-square-jelly-box{width:100%;height:100%;font-size:0}.sk-square-jelly-box>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-square-jelly-box>div:nth-child(1),.sk-square-jelly-box>div:nth-child(2){position:absolute;left:0;width:100%}.sk-square-jelly-box>div:nth-child(1){top:-25%;z-index:99997;height:100%;border-radius:10%;-webkit-animation:.6s linear -.1s infinite square-jelly-box-animate;animation:.6s linear -.1s infinite square-jelly-box-animate}.sk-square-jelly-box>div:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:.6s linear -.1s infinite square-jelly-box-shadow;animation:.6s linear -.1s infinite square-jelly-box-shadow}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}@keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}.sk-square-loader,.sk-square-loader>div{position:relative;box-sizing:border-box}.sk-square-loader{font-size:0;width:100%;height:100%}.sk-square-loader>div{display:inline-block;float:none;border:3px solid currentColor;width:100%;height:100%;background:0 0;border-radius:0;-webkit-animation:2s infinite square-loader;animation:2s infinite square-loader}.sk-square-loader>div:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:2s ease-in infinite square-loader-inner;animation:2s ease-in infinite square-loader-inner}@-webkit-keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}@keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}.sk-three-bounce{margin:auto;width:100%;height:100%;text-align:center}.sk-three-bounce>div{margin-top:35%;width:30%;height:30%;background-color:currentColor;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-threeBounce-bounceDelay;animation:1.4s ease-in-out infinite both sk-threeBounce-bounceDelay}.bottom-center>.sk-three-bounce>div,.bottom-left>.sk-three-bounce>div,.bottom-right>.sk-three-bounce>div{margin-top:70%!important}.top-center>.sk-three-bounce>div,.top-left>.sk-three-bounce>div,.top-right>.sk-three-bounce>div{margin-top:0!important}.sk-three-bounce>div:nth-child(1){-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-three-bounce>div:nth-child(2){-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-threeBounce-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-threeBounce-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.sk-three-strings{width:100%;height:100%}.sk-three-strings>div{position:absolute;box-sizing:border-box;width:100%;height:100%;border-radius:50%}.sk-three-strings>div:nth-child(1){left:0;top:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateOne;animation:1s linear infinite sk-threeStrings-rotateOne;border-bottom:3px solid currentColor}.sk-three-strings>div:nth-child(2){right:0;top:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateTwo;animation:1s linear infinite sk-threeStrings-rotateTwo;border-right:3px solid currentColor}.sk-three-strings>div:nth-child(3){right:0;bottom:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateThree;animation:1s linear infinite sk-threeStrings-rotateThree;border-top:3px solid currentColor}@-webkit-keyframes sk-threeStrings-rotateOne{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0);transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateOne{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0);transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes sk-threeStrings-rotateTwo{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0);transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg);transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateTwo{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0);transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg);transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes sk-threeStrings-rotateThree{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0);transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateThree{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0);transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}.sk-wandering-cubes{margin:auto;width:100%;height:100%;position:relative;text-align:center}.sk-wandering-cubes>div{background-color:currentColor;width:25%;height:25%;position:absolute;top:0;left:0;-webkit-animation:1.8s ease-in-out infinite sk-wanderingCubes-cubeMove;animation:1.8s ease-in-out infinite sk-wanderingCubes-cubeMove}.sk-wandering-cubes>div:nth-child(2){-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes sk-wanderingCubes-cubeMove{25%{-webkit-transform:translateX(290%) rotate(-90deg) scale(.5);transform:translateX(290%) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(290%) translateY(290%) rotate(-179deg);transform:translateX(290%) translateY(290%) rotate(-179deg)}50.1%{-webkit-transform:translateX(290%) translateY(290%) rotate(-180deg);transform:translateX(290%) translateY(290%) rotate(-180deg)}75%{-webkit-transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5);transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes sk-wanderingCubes-cubeMove{25%{-webkit-transform:translateX(290%) rotate(-90deg) scale(.5);transform:translateX(290%) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(290%) translateY(290%) rotate(-179deg);transform:translateX(290%) translateY(290%) rotate(-179deg)}50.1%{-webkit-transform:translateX(290%) translateY(290%) rotate(-180deg);transform:translateX(290%) translateY(290%) rotate(-180deg)}75%{-webkit-transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5);transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    NgxUiLoaderComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"] },
        { type: NgxUiLoaderService }
    ]; };
    NgxUiLoaderComponent.propDecorators = {
        bgsColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        bgsOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        bgsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        bgsSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        bgsType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        fgsColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        fgsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        fgsSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        fgsType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        gap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        loaderId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        logoPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        logoSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        logoUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        overlayBorderRadius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        overlayColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        pbColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        pbDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        pbThickness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        hasProgressBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        textColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        textPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
    };
    return NgxUiLoaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxUiLoaderBlurredDirective = /** @class */ (function () {
    function NgxUiLoaderBlurredDirective(elementRef, renderer, ngxUiLoaderService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.blurNumber = this.ngxUiLoaderService.getDefaultConfig().blur;
        this.loaderId = this.ngxUiLoaderService.getDefaultConfig().masterLoaderId;
    }
    Object.defineProperty(NgxUiLoaderBlurredDirective.prototype, "blur", {
        get: /**
         * @return {?}
         */
        function () {
            return this.blurNumber;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.blurNumber = coerceNumber(value, this.ngxUiLoaderService.getDefaultConfig().blur);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * On Init event
     */
    /**
     * On Init event
     * @return {?}
     */
    NgxUiLoaderBlurredDirective.prototype.ngOnInit = /**
     * On Init event
     * @return {?}
     */
    function () {
        var _this = this;
        this.showForegroundWatcher = this.ngxUiLoaderService.showForeground$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
         * @param {?} showEvent
         * @return {?}
         */
        function (showEvent) { return _this.loaderId === showEvent.loaderId; })))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data.isShow) {
                /** @type {?} */
                var filterValue = "blur(" + _this.blurNumber + "px)";
                _this.renderer.setStyle(_this.elementRef.nativeElement, '-webkit-filter', filterValue);
                _this.renderer.setStyle(_this.elementRef.nativeElement, 'filter', filterValue);
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (!_this.ngxUiLoaderService.hasForeground(data.loaderId)) {
                        _this.renderer.setStyle(_this.elementRef.nativeElement, '-webkit-filter', 'none');
                        _this.renderer.setStyle(_this.elementRef.nativeElement, 'filter', 'none');
                    }
                }), WAITING_FOR_OVERLAY_DISAPPEAR);
            }
        }));
    };
    /**
     * On destroy event
     */
    /**
     * On destroy event
     * @return {?}
     */
    NgxUiLoaderBlurredDirective.prototype.ngOnDestroy = /**
     * On destroy event
     * @return {?}
     */
    function () {
        if (this.showForegroundWatcher) {
            this.showForegroundWatcher.unsubscribe();
        }
    };
    NgxUiLoaderBlurredDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"], args: [{ selector: '[ngxUiLoaderBlurred]' },] }
    ];
    /** @nocollapse */
    NgxUiLoaderBlurredDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"] },
        { type: NgxUiLoaderService }
    ]; };
    NgxUiLoaderBlurredDirective.propDecorators = {
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        loaderId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
    };
    return NgxUiLoaderBlurredDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxUiLoaderModule = /** @class */ (function () {
    function NgxUiLoaderModule() {
    }
    /**
     * forRoot
     * @param ngxUiLoaderConfig
     * @returns A module with its provider dependencies
     */
    /**
     * forRoot
     * @param {?} ngxUiLoaderConfig
     * @return {?} A module with its provider dependencies
     */
    NgxUiLoaderModule.forRoot = /**
     * forRoot
     * @param {?} ngxUiLoaderConfig
     * @return {?} A module with its provider dependencies
     */
    function (ngxUiLoaderConfig) {
        return {
            ngModule: NgxUiLoaderModule,
            providers: [
                {
                    provide: NGX_UI_LOADER_CONFIG_TOKEN,
                    useValue: ngxUiLoaderConfig
                }
            ]
        };
    };
    NgxUiLoaderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ],
                    declarations: [
                        NgxUiLoaderComponent,
                        NgxUiLoaderBlurredDirective,
                    ],
                    exports: [
                        NgxUiLoaderComponent,
                        NgxUiLoaderBlurredDirective,
                    ]
                },] }
    ];
    return NgxUiLoaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token for ngx-ui-loader-router configuration
 * @type {?}
 */
var NGX_UI_LOADER_ROUTER_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('ngxUiLoaderRouterCustom.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Router loader id
 * @type {?}
 */
var ROUTER_LOADER_ID = '$_router_loader';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxUiLoaderRouterModule = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param parentModule
     * @param config
     * @param router
     * @param ngxUiLoaderService
     */
    function NgxUiLoaderRouterModule(parentModule, config, router, ngxUiLoaderService) {
        if (parentModule) {
            throw new Error('[ngx-ui-loader] - NgxUiLoaderRouterModule is already loaded. It should be imported in the root `AppModule` only!');
        }
        /** @type {?} */
        var defaultConfig = {
            loaderId: ngxUiLoaderService.getDefaultConfig().masterLoaderId,
            showForeground: true
        };
        if (config) {
            defaultConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({}, defaultConfig, config);
        }
        router.events
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (defaultConfig.showForeground) {
                    ngxUiLoaderService.startLoader(defaultConfig.loaderId, ROUTER_LOADER_ID);
                }
                else {
                    ngxUiLoaderService.startBackgroundLoader(defaultConfig.loaderId, ROUTER_LOADER_ID);
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                if (defaultConfig.showForeground) {
                    ngxUiLoaderService.stopLoader(defaultConfig.loaderId, ROUTER_LOADER_ID);
                }
                else {
                    ngxUiLoaderService.stopBackgroundLoader(defaultConfig.loaderId, ROUTER_LOADER_ID);
                }
            }
        }));
    }
    /**
     * forRoot
     * @param routerConfig Configuration
     * @returns A module with its provider dependencies
     */
    /**
     * forRoot
     * @param {?} routerConfig Configuration
     * @return {?} A module with its provider dependencies
     */
    NgxUiLoaderRouterModule.forRoot = /**
     * forRoot
     * @param {?} routerConfig Configuration
     * @return {?} A module with its provider dependencies
     */
    function (routerConfig) {
        return {
            ngModule: NgxUiLoaderRouterModule,
            providers: [
                {
                    provide: NGX_UI_LOADER_ROUTER_CONFIG_TOKEN,
                    useValue: routerConfig
                }
            ]
        };
    };
    NgxUiLoaderRouterModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"], args: [{},] }
    ];
    /** @nocollapse */
    NgxUiLoaderRouterModule.ctorParameters = function () { return [
        { type: NgxUiLoaderRouterModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [NGX_UI_LOADER_ROUTER_CONFIG_TOKEN,] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: NgxUiLoaderService }
    ]; };
    return NgxUiLoaderRouterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token for ngx-ui-loader-http configuration
 * @type {?}
 */
var NGX_UI_LOADER_HTTP_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('ngxUiLoaderHttpCustom.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Http loader id
 * @type {?}
 */
var HTTP_LOADER_ID = '$_http-loader';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxUiLoaderHttpInterceptor = /** @class */ (function () {
    /**
     * Constructor
     * @param config
     * @param ngxUiLoaderService
     */
    function NgxUiLoaderHttpInterceptor(config, ngxUiLoaderService) {
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.count = 0;
        this.defaultConfig = {
            loaderId: this.ngxUiLoaderService.getDefaultConfig().masterLoaderId,
            showForeground: false
        };
        if (config) {
            if (config.exclude) {
                this.exclude = config.exclude.map((/**
                 * @param {?} url
                 * @return {?}
                 */
                function (url) { return url.toLowerCase(); }));
            }
            if (config.excludeRegexp) {
                this.excludeRegexp = config.excludeRegexp.map((/**
                 * @param {?} regexp
                 * @return {?}
                 */
                function (regexp) { return new RegExp(regexp, 'i'); }));
            }
            this.defaultConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({}, this.defaultConfig, config);
        }
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    NgxUiLoaderHttpInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var _this = this;
        if (this.isIgnored(req.url)) {
            return next.handle(req);
        }
        this.count++;
        if (this.defaultConfig.showForeground) {
            if (!this.ngxUiLoaderService.hasForeground(this.defaultConfig.loaderId, HTTP_LOADER_ID)) {
                this.ngxUiLoaderService.startLoader(this.defaultConfig.loaderId, HTTP_LOADER_ID);
            }
        }
        else {
            if (!this.ngxUiLoaderService.hasBackground(this.defaultConfig.loaderId, HTTP_LOADER_ID)) {
                this.ngxUiLoaderService.startBackgroundLoader(this.defaultConfig.loaderId, HTTP_LOADER_ID);
            }
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])((/**
         * @return {?}
         */
        function () {
            _this.count--;
            if (_this.count === 0) {
                if (_this.defaultConfig.showForeground) {
                    _this.ngxUiLoaderService.stopLoader(_this.defaultConfig.loaderId, HTTP_LOADER_ID);
                }
                else {
                    _this.ngxUiLoaderService.stopBackgroundLoader(_this.defaultConfig.loaderId, HTTP_LOADER_ID);
                }
            }
        })));
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    NgxUiLoaderHttpInterceptor.prototype.isIgnored = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (this.exclude) {
            // do not show the loader for api urls in the `exclude` list
            if (this.exclude.findIndex((/**
             * @param {?} str
             * @return {?}
             */
            function (str) { return url.toLowerCase().startsWith(str); })) !== -1) {
                return true;
            }
        }
        if (this.excludeRegexp) {
            // do not show the loader for api urls which matches regexps in the `excludeRegexp` list
            if (this.excludeRegexp.findIndex((/**
             * @param {?} regexp
             * @return {?}
             */
            function (regexp) { return regexp.test(url); })) !== -1) {
                return true;
            }
        }
        return false;
    };
    NgxUiLoaderHttpInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"] }
    ];
    /** @nocollapse */
    NgxUiLoaderHttpInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [NGX_UI_LOADER_HTTP_CONFIG_TOKEN,] }] },
        { type: NgxUiLoaderService }
    ]; };
    return NgxUiLoaderHttpInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxUiLoaderHttpModule = /** @class */ (function () {
    /**
     * Constructor
     * @param parentModule optional
     */
    function NgxUiLoaderHttpModule(parentModule) {
        if (parentModule) {
            throw new Error('[ngx-ui-loader] - NgxUiLoaderHttpModule is already loaded. It should be imported in the root `AppModule` only!');
        }
    }
    /**
     * forRoot
     * @param httpConfig Configuration
     * @returns A module with its provider dependencies
     */
    /**
     * forRoot
     * @param {?} httpConfig Configuration
     * @return {?} A module with its provider dependencies
     */
    NgxUiLoaderHttpModule.forRoot = /**
     * forRoot
     * @param {?} httpConfig Configuration
     * @return {?} A module with its provider dependencies
     */
    function (httpConfig) {
        return {
            ngModule: NgxUiLoaderHttpModule,
            providers: [
                {
                    provide: NGX_UI_LOADER_HTTP_CONFIG_TOKEN,
                    useValue: httpConfig
                }
            ]
        };
    };
    NgxUiLoaderHttpModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"], args: [{
                    providers: [
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                            useClass: NgxUiLoaderHttpInterceptor,
                            multi: true
                        }
                    ],
                },] }
    ];
    /** @nocollapse */
    NgxUiLoaderHttpModule.ctorParameters = function () { return [
        { type: NgxUiLoaderHttpModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"] }] }
    ]; };
    return NgxUiLoaderHttpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-ui-loader.js.map

/***/ }),

/***/ "./projects/ngx-ui-loader/src/lib/core/ngx-ui-loader.component.scss":
/*!**************************************************************************!*\
  !*** ./projects/ngx-ui-loader/src/lib/core/ngx-ui-loader.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-progress-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  z-index: 99999 !important;\n  display: none;\n  color: #00ACC1;\n  overflow: hidden; }\n  .ngx-progress-bar.loading-foreground, .ngx-progress-bar.foreground-closing {\n    display: block; }\n  .ngx-progress-bar.foreground-closing {\n    opacity: 0 !important;\n    transition: opacity 0.5s ease-out 0.5s; }\n  .ngx-progress-bar::before, .ngx-progress-bar::after {\n    background-color: currentColor;\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0; }\n  .ngx-progress-bar-ltr::before {\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0); }\n  .ngx-progress-bar-ltr::after {\n  -webkit-animation: progressBar-slide-ltr 20s ease-out 0s 1 normal;\n          animation: progressBar-slide-ltr 20s ease-out 0s 1 normal;\n  -webkit-transform: translate3d(-5%, 0, 0);\n          transform: translate3d(-5%, 0, 0); }\n  .ngx-progress-bar-rtl::before {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0); }\n  .ngx-progress-bar-rtl::after {\n  -webkit-animation: progressBar-slide-rtl 20s ease-out 0s 1 normal;\n          animation: progressBar-slide-rtl 20s ease-out 0s 1 normal;\n  -webkit-transform: translate3d(5%, 0, 0);\n          transform: translate3d(5%, 0, 0); }\n  .foreground-closing.ngx-progress-bar-ltr::before {\n  -webkit-animation: progressBar-slide-complete-ltr 1s ease-out 0s 1;\n          animation: progressBar-slide-complete-ltr 1s ease-out 0s 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n  .foreground-closing.ngx-progress-bar-rtl::before {\n  -webkit-animation: progressBar-slide-complete-rtl 1s ease-out 0s 1;\n          animation: progressBar-slide-complete-rtl 1s ease-out 0s 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n  @-webkit-keyframes progressBar-slide-ltr {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  to {\n    -webkit-transform: translate3d(-5%, 0, 0);\n            transform: translate3d(-5%, 0, 0); } }\n  @keyframes progressBar-slide-ltr {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  to {\n    -webkit-transform: translate3d(-5%, 0, 0);\n            transform: translate3d(-5%, 0, 0); } }\n  @-webkit-keyframes progressBar-slide-rtl {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  to {\n    -webkit-transform: translate3d(5%, 0, 0);\n            transform: translate3d(5%, 0, 0); } }\n  @keyframes progressBar-slide-rtl {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  to {\n    -webkit-transform: translate3d(5%, 0, 0);\n            transform: translate3d(5%, 0, 0); } }\n  @-webkit-keyframes progressBar-slide-complete-ltr {\n  0% {\n    -webkit-transform: translate3d(-75%, 0, 0);\n            transform: translate3d(-75%, 0, 0); }\n  50% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n  @keyframes progressBar-slide-complete-ltr {\n  0% {\n    -webkit-transform: translate3d(-75%, 0, 0);\n            transform: translate3d(-75%, 0, 0); }\n  50% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n  @-webkit-keyframes progressBar-slide-complete-rtl {\n  0% {\n    -webkit-transform: translate3d(75%, 0, 0);\n            transform: translate3d(75%, 0, 0); }\n  50% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n  @keyframes progressBar-slide-complete-rtl {\n  0% {\n    -webkit-transform: translate3d(75%, 0, 0);\n            transform: translate3d(75%, 0, 0); }\n  50% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n  .ngx-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99998 !important;\n  background-color: rgba(40, 40, 40, 0.8);\n  cursor: progress;\n  display: none; }\n  .ngx-overlay.loading-foreground, .ngx-overlay.foreground-closing {\n    display: block; }\n  .ngx-overlay.foreground-closing {\n    opacity: 0 !important;\n    transition: opacity 0.5s ease-out 0.5s; }\n  .ngx-overlay > .ngx-foreground-spinner {\n    position: fixed;\n    width: 60px;\n    height: 60px;\n    margin: 0;\n    color: #00ACC1; }\n  .ngx-overlay > .ngx-loading-logo {\n    position: fixed;\n    margin: 0;\n    width: 120px;\n    height: 120px; }\n  .ngx-overlay > .ngx-loading-text {\n    position: fixed;\n    margin: 0;\n    font-family: sans-serif;\n    font-weight: 400;\n    font-size: 1.2em;\n    color: #FFFFFF; }\n  .ngx-background-spinner {\n  position: fixed;\n  z-index: 99997 !important;\n  width: 60px;\n  height: 60px;\n  margin: 0;\n  color: #00ACC1;\n  opacity: 0.6;\n  display: none; }\n  .ngx-background-spinner.loading-background, .ngx-background-spinner.background-closing {\n    display: block; }\n  .ngx-background-spinner.background-closing {\n    opacity: 0 !important;\n    transition: opacity 0.7s ease-out; }\n  .ngx-position-absolute {\n  position: absolute !important; }\n  .ngx-position-absolute > .ngx-foreground-spinner,\n  .ngx-position-absolute > .ngx-loading-logo,\n  .ngx-position-absolute > .ngx-loading-text {\n    position: absolute !important; }\n  .ngx-position-absolute.ngx-progress-bar {\n    z-index: 99996 !important; }\n  .ngx-position-absolute.ngx-overlay {\n    z-index: 99995 !important; }\n  .ngx-position-absolute.ngx-background-spinner {\n    z-index: 99994 !important; }\n  .ngx-position-absolute .sk-square-jelly-box > div:nth-child(1) {\n    z-index: 99994 !important; }\n  .top-left {\n  top: 30px;\n  left: 30px; }\n  .top-center {\n  top: 30px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n  .top-right {\n  top: 30px;\n  right: 30px; }\n  .center-left {\n  top: 50%;\n  left: 30px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  .center-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n  .center-right {\n  top: 50%;\n  right: 30px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  .bottom-left {\n  bottom: 30px;\n  left: 30px; }\n  .bottom-center {\n  bottom: 30px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n  .bottom-right {\n  bottom: 30px;\n  right: 30px; }\n  .sk-ball-scale-multiple,\n.sk-ball-scale-multiple > div {\n  position: relative;\n  box-sizing: border-box; }\n  .sk-ball-scale-multiple {\n  width: 100%;\n  height: 100%;\n  font-size: 0; }\n  .sk-ball-scale-multiple > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n  .sk-ball-scale-multiple > div {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  opacity: 0;\n  -webkit-animation: ball-scale-multiple 1s 0s linear infinite;\n          animation: ball-scale-multiple 1s 0s linear infinite; }\n  .sk-ball-scale-multiple > div:nth-child(2) {\n  -webkit-animation-delay: .2s;\n          animation-delay: .2s; }\n  .sk-ball-scale-multiple > div:nth-child(3) {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s; }\n  @-webkit-keyframes ball-scale-multiple {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  5% {\n    opacity: .75; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @keyframes ball-scale-multiple {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  5% {\n    opacity: .75; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  .sk-ball-spin,\n.sk-ball-spin > div {\n  position: relative;\n  box-sizing: border-box; }\n  .sk-ball-spin {\n  width: 100%;\n  height: 100%;\n  font-size: 0; }\n  .sk-ball-spin > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n  .sk-ball-spin > div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 25%;\n  height: 25%;\n  margin-top: -12.5%;\n  margin-left: -12.5%;\n  border-radius: 100%;\n  -webkit-animation: ball-spin-clockwise 1s infinite ease-in-out;\n          animation: ball-spin-clockwise 1s infinite ease-in-out; }\n  .sk-ball-spin > div:nth-child(1) {\n  top: 5%;\n  left: 50%;\n  -webkit-animation-delay: -1.125s;\n          animation-delay: -1.125s; }\n  .sk-ball-spin > div:nth-child(2) {\n  top: 18.1801948466%;\n  left: 81.8198051534%;\n  -webkit-animation-delay: -1.25s;\n          animation-delay: -1.25s; }\n  .sk-ball-spin > div:nth-child(3) {\n  top: 50%;\n  left: 95%;\n  -webkit-animation-delay: -1.375s;\n          animation-delay: -1.375s; }\n  .sk-ball-spin > div:nth-child(4) {\n  top: 81.8198051534%;\n  left: 81.8198051534%;\n  -webkit-animation-delay: -1.5s;\n          animation-delay: -1.5s; }\n  .sk-ball-spin > div:nth-child(5) {\n  top: 94.9999999966%;\n  left: 50.0000000005%;\n  -webkit-animation-delay: -1.625s;\n          animation-delay: -1.625s; }\n  .sk-ball-spin > div:nth-child(6) {\n  top: 81.8198046966%;\n  left: 18.1801949248%;\n  -webkit-animation-delay: -1.75s;\n          animation-delay: -1.75s; }\n  .sk-ball-spin > div:nth-child(7) {\n  top: 49.9999750815%;\n  left: 5.0000051215%;\n  -webkit-animation-delay: -1.875s;\n          animation-delay: -1.875s; }\n  .sk-ball-spin > div:nth-child(8) {\n  top: 18.179464974%;\n  left: 18.1803700518%;\n  -webkit-animation-delay: -2s;\n          animation-delay: -2s; }\n  @-webkit-keyframes ball-spin {\n  0%,\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  20% {\n    opacity: 1; }\n  80% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n  @keyframes ball-spin {\n  0%,\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  20% {\n    opacity: 1; }\n  80% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n  .sk-ball-spin-clockwise,\n.sk-ball-spin-clockwise > div {\n  position: relative;\n  box-sizing: border-box; }\n  .sk-ball-spin-clockwise {\n  width: 100%;\n  height: 100%;\n  font-size: 0; }\n  .sk-ball-spin-clockwise > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n  .sk-ball-spin-clockwise > div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 25%;\n  height: 25%;\n  margin-top: -12.5%;\n  margin-left: -12.5%;\n  border-radius: 100%;\n  -webkit-animation: ball-spin-clockwise 1s infinite ease-in-out;\n          animation: ball-spin-clockwise 1s infinite ease-in-out; }\n  .sk-ball-spin-clockwise > div:nth-child(1) {\n  top: 5%;\n  left: 50%;\n  -webkit-animation-delay: -.875s;\n          animation-delay: -.875s; }\n  .sk-ball-spin-clockwise > div:nth-child(2) {\n  top: 18.1801948466%;\n  left: 81.8198051534%;\n  -webkit-animation-delay: -.75s;\n          animation-delay: -.75s; }\n  .sk-ball-spin-clockwise > div:nth-child(3) {\n  top: 50%;\n  left: 95%;\n  -webkit-animation-delay: -.625s;\n          animation-delay: -.625s; }\n  .sk-ball-spin-clockwise > div:nth-child(4) {\n  top: 81.8198051534%;\n  left: 81.8198051534%;\n  -webkit-animation-delay: -.5s;\n          animation-delay: -.5s; }\n  .sk-ball-spin-clockwise > div:nth-child(5) {\n  top: 94.9999999966%;\n  left: 50.0000000005%;\n  -webkit-animation-delay: -.375s;\n          animation-delay: -.375s; }\n  .sk-ball-spin-clockwise > div:nth-child(6) {\n  top: 81.8198046966%;\n  left: 18.1801949248%;\n  -webkit-animation-delay: -.25s;\n          animation-delay: -.25s; }\n  .sk-ball-spin-clockwise > div:nth-child(7) {\n  top: 49.9999750815%;\n  left: 5.0000051215%;\n  -webkit-animation-delay: -.125s;\n          animation-delay: -.125s; }\n  .sk-ball-spin-clockwise > div:nth-child(8) {\n  top: 18.179464974%;\n  left: 18.1803700518%;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s; }\n  @-webkit-keyframes ball-spin-clockwise {\n  0%,\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  20% {\n    opacity: 1; }\n  80% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n  @keyframes ball-spin-clockwise {\n  0%,\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  20% {\n    opacity: 1; }\n  80% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n  .sk-ball-spin-clockwise-fade-rotating,\n.sk-ball-spin-clockwise-fade-rotating > div {\n  position: relative;\n  box-sizing: border-box; }\n  .sk-ball-spin-clockwise-fade-rotating {\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: ball-spin-clockwise-fade-rotating-rotate 6s infinite linear;\n          animation: ball-spin-clockwise-fade-rotating-rotate 6s infinite linear; }\n  .sk-ball-spin-clockwise-fade-rotating > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n  .sk-ball-spin-clockwise-fade-rotating > div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 25%;\n  height: 25%;\n  margin-top: -12.5%;\n  margin-left: -12.5%;\n  border-radius: 100%;\n  -webkit-animation: ball-spin-clockwise-fade-rotating 1s infinite linear;\n          animation: ball-spin-clockwise-fade-rotating 1s infinite linear; }\n  .sk-ball-spin-clockwise-fade-rotating > div:nth-child(1) {\n  top: 5%;\n  left: 50%;\n  -webkit-animation-delay: -.875s;\n          animation-delay: -.875s; }\n  .sk-ball-spin-clockwise-fade-rotating > div:nth-child(2) {\n  top: 18.1801948466%;\n  left: 81.8198051534%;\n  -webkit-animation-delay: -.75s;\n          animation-delay: -.75s; }\n  .sk-ball-spin-clockwise-fade-rotating > div:nth-child(3) {\n  top: 50%;\n  left: 95%;\n  -webkit-animation-delay: -.625s;\n          animation-delay: -.625s; }\n  .sk-ball-spin-clockwise-fade-rotating > div:nth-child(4) {\n  top: 81.8198051534%;\n  left: 81.8198051534%;\n  -webkit-animation-delay: -.5s;\n          animation-delay: -.5s; }\n  .sk-ball-spin-clockwise-fade-rotating > div:nth-child(5) {\n  top: 94.9999999966%;\n  left: 50.0000000005%;\n  -webkit-animation-delay: -.375s;\n          animation-delay: -.375s; }\n  .sk-ball-spin-clockwise-fade-rotating > div:nth-child(6) {\n  top: 81.8198046966%;\n  left: 18.1801949248%;\n  -webkit-animation-delay: -.25s;\n          animation-delay: -.25s; }\n  .sk-ball-spin-clockwise-fade-rotating > div:nth-child(7) {\n  top: 49.9999750815%;\n  left: 5.0000051215%;\n  -webkit-animation-delay: -.125s;\n          animation-delay: -.125s; }\n  .sk-ball-spin-clockwise-fade-rotating > div:nth-child(8) {\n  top: 18.179464974%;\n  left: 18.1803700518%;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s; }\n  @-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate {\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg); } }\n  @keyframes ball-spin-clockwise-fade-rotating-rotate {\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg); } }\n  @-webkit-keyframes ball-spin-clockwise-fade-rotating {\n  50% {\n    opacity: .25;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @keyframes ball-spin-clockwise-fade-rotating {\n  50% {\n    opacity: .25;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  .sk-ball-spin-fade-rotating,\n.sk-ball-spin-fade-rotating > div {\n  position: relative;\n  box-sizing: border-box; }\n  .sk-ball-spin-fade-rotating {\n  width: 100%;\n  height: 100%;\n  font-size: 0;\n  -webkit-animation: ball-spin-fade-rotate 6s infinite linear;\n          animation: ball-spin-fade-rotate 6s infinite linear; }\n  .sk-ball-spin-fade-rotating > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n  .sk-ball-spin-fade-rotating > div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 25%;\n  height: 25%;\n  margin-top: -12.5%;\n  margin-left: -12.5%;\n  border-radius: 100%;\n  -webkit-animation: ball-spin-fade 1s infinite linear;\n          animation: ball-spin-fade 1s infinite linear; }\n  .sk-ball-spin-fade-rotating > div:nth-child(1) {\n  top: 5%;\n  left: 50%;\n  -webkit-animation-delay: -1.125s;\n          animation-delay: -1.125s; }\n  .sk-ball-spin-fade-rotating > div:nth-child(2) {\n  top: 18.1801948466%;\n  left: 81.8198051534%;\n  -webkit-animation-delay: -1.25s;\n          animation-delay: -1.25s; }\n  .sk-ball-spin-fade-rotating > div:nth-child(3) {\n  top: 50%;\n  left: 95%;\n  -webkit-animation-delay: -1.375s;\n          animation-delay: -1.375s; }\n  .sk-ball-spin-fade-rotating > div:nth-child(4) {\n  top: 81.8198051534%;\n  left: 81.8198051534%;\n  -webkit-animation-delay: -1.5s;\n          animation-delay: -1.5s; }\n  .sk-ball-spin-fade-rotating > div:nth-child(5) {\n  top: 94.9999999966%;\n  left: 50.0000000005%;\n  -webkit-animation-delay: -1.625s;\n          animation-delay: -1.625s; }\n  .sk-ball-spin-fade-rotating > div:nth-child(6) {\n  top: 81.8198046966%;\n  left: 18.1801949248%;\n  -webkit-animation-delay: -1.75s;\n          animation-delay: -1.75s; }\n  .sk-ball-spin-fade-rotating > div:nth-child(7) {\n  top: 49.9999750815%;\n  left: 5.0000051215%;\n  -webkit-animation-delay: -1.875s;\n          animation-delay: -1.875s; }\n  .sk-ball-spin-fade-rotating > div:nth-child(8) {\n  top: 18.179464974%;\n  left: 18.1803700518%;\n  -webkit-animation-delay: -2s;\n          animation-delay: -2s; }\n  @-webkit-keyframes ball-spin-fade-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes ball-spin-fade-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @-webkit-keyframes ball-spin-fade {\n  0%,\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: .25;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n  @keyframes ball-spin-fade {\n  0%,\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: .25;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n  .sk-chasing-dots {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  text-align: center;\n  -webkit-animation: sk-chasingDots-rotate 2.0s infinite linear;\n          animation: sk-chasingDots-rotate 2.0s infinite linear; }\n  .sk-chasing-dots > div {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  background-color: currentColor;\n  border-radius: 100%;\n  -webkit-animation: sk-chasingDots-bounce 2.0s infinite ease-in-out;\n          animation: sk-chasingDots-bounce 2.0s infinite ease-in-out; }\n  .sk-chasing-dots > div:nth-child(2) {\n  top: auto;\n  bottom: 0;\n  -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s; }\n  @-webkit-keyframes sk-chasingDots-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes sk-chasingDots-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @-webkit-keyframes sk-chasingDots-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @keyframes sk-chasingDots-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  .sk-circle {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  position: relative; }\n  .sk-circle > div {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n  .sk-circle > div::before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: currentColor;\n  border-radius: 100%;\n  -webkit-animation: sk-circle-bounceDelay 1.2s infinite ease-in-out both;\n          animation: sk-circle-bounceDelay 1.2s infinite ease-in-out both; }\n  .sk-circle > div:nth-child(2) {\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg); }\n  .sk-circle > div:nth-child(3) {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg); }\n  .sk-circle > div:nth-child(4) {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n  .sk-circle > div:nth-child(5) {\n  -webkit-transform: rotate(120deg);\n          transform: rotate(120deg); }\n  .sk-circle > div:nth-child(6) {\n  -webkit-transform: rotate(150deg);\n          transform: rotate(150deg); }\n  .sk-circle > div:nth-child(7) {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n  .sk-circle > div:nth-child(8) {\n  -webkit-transform: rotate(210deg);\n          transform: rotate(210deg); }\n  .sk-circle > div:nth-child(9) {\n  -webkit-transform: rotate(240deg);\n          transform: rotate(240deg); }\n  .sk-circle > div:nth-child(10) {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n  .sk-circle > div:nth-child(11) {\n  -webkit-transform: rotate(300deg);\n          transform: rotate(300deg); }\n  .sk-circle > div:nth-child(12) {\n  -webkit-transform: rotate(330deg);\n          transform: rotate(330deg); }\n  .sk-circle > div:nth-child(2)::before {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n  .sk-circle > div:nth-child(3)::before {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n  .sk-circle > div:nth-child(4)::before {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n  .sk-circle > div:nth-child(5)::before {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n  .sk-circle > div:nth-child(6)::before {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s; }\n  .sk-circle > div:nth-child(7)::before {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s; }\n  .sk-circle > div:nth-child(8)::before {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n  .sk-circle > div:nth-child(9)::before {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s; }\n  .sk-circle > div:nth-child(10)::before {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s; }\n  .sk-circle > div:nth-child(11)::before {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s; }\n  .sk-circle > div:nth-child(12)::before {\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s; }\n  @-webkit-keyframes sk-circle-bounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @keyframes sk-circle-bounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  .sk-cube-grid {\n  width: 100%;\n  height: 100%;\n  margin: auto; }\n  .sk-cube-grid > div {\n  width: 33%;\n  height: 33%;\n  background-color: currentColor;\n  float: left;\n  -webkit-animation: sk-cubeGrid-scaleDelay 1.3s infinite ease-in-out;\n          animation: sk-cubeGrid-scaleDelay 1.3s infinite ease-in-out; }\n  .sk-cube-grid > div:nth-child(1) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s; }\n  .sk-cube-grid > div:nth-child(2) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s; }\n  .sk-cube-grid > div:nth-child(3) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s; }\n  .sk-cube-grid > div:nth-child(4) {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s; }\n  .sk-cube-grid > div:nth-child(5) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s; }\n  .sk-cube-grid > div:nth-child(6) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s; }\n  .sk-cube-grid > div:nth-child(7) {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s; }\n  .sk-cube-grid > div:nth-child(8) {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s; }\n  .sk-cube-grid > div:nth-child(9) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s; }\n  @-webkit-keyframes sk-cubeGrid-scaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1); }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1); } }\n  @keyframes sk-cubeGrid-scaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1); }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1); } }\n  .sk-double-bounce {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  margin: auto; }\n  .sk-double-bounce > div {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: currentColor;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-doubleBounce-bounce 2.0s infinite ease-in-out;\n          animation: sk-doubleBounce-bounce 2.0s infinite ease-in-out; }\n  .sk-double-bounce > div:nth-child(2) {\n  -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s; }\n  @-webkit-keyframes sk-doubleBounce-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @keyframes sk-doubleBounce-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  .sk-fading-circle {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  position: relative; }\n  .sk-fading-circle > div {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n  .sk-fading-circle > div::before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: currentColor;\n  border-radius: 100%;\n  -webkit-animation: sk-fadingCircle-FadeDelay 1.2s infinite ease-in-out both;\n          animation: sk-fadingCircle-FadeDelay 1.2s infinite ease-in-out both; }\n  .sk-fading-circle > div:nth-child(2) {\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg); }\n  .sk-fading-circle > div:nth-child(3) {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg); }\n  .sk-fading-circle > div:nth-child(4) {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n  .sk-fading-circle > div:nth-child(5) {\n  -webkit-transform: rotate(120deg);\n          transform: rotate(120deg); }\n  .sk-fading-circle > div:nth-child(6) {\n  -webkit-transform: rotate(150deg);\n          transform: rotate(150deg); }\n  .sk-fading-circle > div:nth-child(7) {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n  .sk-fading-circle > div:nth-child(8) {\n  -webkit-transform: rotate(210deg);\n          transform: rotate(210deg); }\n  .sk-fading-circle > div:nth-child(9) {\n  -webkit-transform: rotate(240deg);\n          transform: rotate(240deg); }\n  .sk-fading-circle > div:nth-child(10) {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n  .sk-fading-circle > div:nth-child(11) {\n  -webkit-transform: rotate(300deg);\n          transform: rotate(300deg); }\n  .sk-fading-circle > div:nth-child(12) {\n  -webkit-transform: rotate(330deg);\n          transform: rotate(330deg); }\n  .sk-fading-circle > div:nth-child(2)::before {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n  .sk-fading-circle > div:nth-child(3)::before {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n  .sk-fading-circle > div:nth-child(4)::before {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n  .sk-fading-circle > div:nth-child(5)::before {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n  .sk-fading-circle > div:nth-child(6)::before {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s; }\n  .sk-fading-circle > div:nth-child(7)::before {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s; }\n  .sk-fading-circle > div:nth-child(8)::before {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n  .sk-fading-circle > div:nth-child(9)::before {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s; }\n  .sk-fading-circle > div:nth-child(10)::before {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s; }\n  .sk-fading-circle > div:nth-child(11)::before {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s; }\n  .sk-fading-circle > div:nth-child(12)::before {\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s; }\n  @-webkit-keyframes sk-fadingCircle-FadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n  @keyframes sk-fadingCircle-FadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n  .sk-folding-cube {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-transform: rotateZ(45deg);\n          transform: rotateZ(45deg); }\n  .sk-folding-cube > div {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); }\n  .sk-folding-cube > div::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  -webkit-animation: sk-foldingCube-angle 2.4s infinite linear both;\n          animation: sk-foldingCube-angle 2.4s infinite linear both;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%; }\n  .sk-folding-cube > div:nth-child(2) {\n  -webkit-transform: scale(1.1) rotateZ(90deg);\n          transform: scale(1.1) rotateZ(90deg); }\n  .sk-folding-cube > div:nth-child(3) {\n  -webkit-transform: scale(1.1) rotateZ(270deg);\n          transform: scale(1.1) rotateZ(270deg); }\n  .sk-folding-cube > div:nth-child(4) {\n  -webkit-transform: scale(1.1) rotateZ(180deg);\n          transform: scale(1.1) rotateZ(180deg); }\n  .sk-folding-cube > div:nth-child(2)::before {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s; }\n  .sk-folding-cube > div:nth-child(3)::before {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s; }\n  .sk-folding-cube > div:nth-child(4)::before {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s; }\n  @-webkit-keyframes sk-foldingCube-angle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; }\n  25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; }\n  90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; } }\n  @keyframes sk-foldingCube-angle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; }\n  25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; }\n  90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; } }\n  .sk-pulse {\n  width: 100%;\n  height: 100%;\n  margin: auto; }\n  .sk-pulse > div {\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  border-radius: 100%;\n  -webkit-animation: sk-pulse-scaleOut 1.0s infinite ease-in-out;\n          animation: sk-pulse-scaleOut 1.0s infinite ease-in-out; }\n  @-webkit-keyframes sk-pulse-scaleOut {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n  @keyframes sk-pulse-scaleOut {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n  .sk-rectangle-bounce {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 0; }\n  .sk-rectangle-bounce > div {\n  background-color: currentColor;\n  height: 100%;\n  width: 10%;\n  margin: 0 5%;\n  display: inline-block;\n  -webkit-animation: sk-rectangleBounce-stretchDelay 1.2s infinite ease-in-out;\n          animation: sk-rectangleBounce-stretchDelay 1.2s infinite ease-in-out; }\n  .sk-rectangle-bounce > div:nth-child(2) {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n  .sk-rectangle-bounce > div:nth-child(3) {\n  -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s; }\n  .sk-rectangle-bounce > div:nth-child(4) {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n  .sk-rectangle-bounce > div:nth-child(5) {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n  @-webkit-keyframes sk-rectangleBounce-stretchDelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n            transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n  @keyframes sk-rectangleBounce-stretchDelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n            transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n  .sk-rectangle-bounce-party,\n.sk-rectangle-bounce-party > div {\n  position: relative;\n  box-sizing: border-box; }\n  .sk-rectangle-bounce-party {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 0; }\n  .sk-rectangle-bounce-party > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n  .sk-rectangle-bounce-party > div {\n  width: 10%;\n  height: 100%;\n  margin: 0 5%;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-radius: 0;\n  -webkit-animation-name: rectangle-bounce-party;\n          animation-name: rectangle-bounce-party;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n  .sk-rectangle-bounce-party > div:nth-child(1) {\n  -webkit-animation-duration: .43s;\n          animation-duration: .43s;\n  -webkit-animation-delay: -.23s;\n          animation-delay: -.23s; }\n  .sk-rectangle-bounce-party > div:nth-child(2) {\n  -webkit-animation-duration: .62s;\n          animation-duration: .62s;\n  -webkit-animation-delay: -.32s;\n          animation-delay: -.32s; }\n  .sk-rectangle-bounce-party > div:nth-child(3) {\n  -webkit-animation-duration: .43s;\n          animation-duration: .43s;\n  -webkit-animation-delay: -.44s;\n          animation-delay: -.44s; }\n  .sk-rectangle-bounce-party > div:nth-child(4) {\n  -webkit-animation-duration: .8s;\n          animation-duration: .8s;\n  -webkit-animation-delay: -.31s;\n          animation-delay: -.31s; }\n  .sk-rectangle-bounce-party > div:nth-child(5) {\n  -webkit-animation-duration: .74s;\n          animation-duration: .74s;\n  -webkit-animation-delay: -.24s;\n          animation-delay: -.24s; }\n  @-webkit-keyframes rectangle-bounce-party {\n  0% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  50% {\n    -webkit-transform: scaleY(0.4);\n            transform: scaleY(0.4); }\n  100% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n  @keyframes rectangle-bounce-party {\n  0% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  50% {\n    -webkit-transform: scaleY(0.4);\n            transform: scaleY(0.4); }\n  100% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n  .sk-rectangle-bounce-pulse-out,\n.sk-rectangle-bounce-pulse-out > div {\n  position: relative;\n  box-sizing: border-box; }\n  .sk-rectangle-bounce-pulse-out {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 0; }\n  .sk-rectangle-bounce-pulse-out > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n  .sk-rectangle-bounce-pulse-out > div {\n  width: 10%;\n  height: 100%;\n  margin: 0 5%;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-radius: 0;\n  -webkit-animation: rectangle-bounce-pulse-out 0.9s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);\n          animation: rectangle-bounce-pulse-out 0.9s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85); }\n  .sk-rectangle-bounce-pulse-out > div:nth-child(3) {\n  -webkit-animation-delay: -.9s;\n          animation-delay: -.9s; }\n  .sk-rectangle-bounce-pulse-out > div:nth-child(2),\n.sk-rectangle-bounce-pulse-out > div:nth-child(4) {\n  -webkit-animation-delay: -.7s;\n          animation-delay: -.7s; }\n  .sk-rectangle-bounce-pulse-out > div:nth-child(1),\n.sk-rectangle-bounce-pulse-out > div:nth-child(5) {\n  -webkit-animation-delay: -.5s;\n          animation-delay: -.5s; }\n  @-webkit-keyframes rectangle-bounce-pulse-out {\n  0% {\n    -webkit-transform: scaley(1);\n            transform: scaley(1); }\n  50% {\n    -webkit-transform: scaley(0.4);\n            transform: scaley(0.4); }\n  100% {\n    -webkit-transform: scaley(1);\n            transform: scaley(1); } }\n  @keyframes rectangle-bounce-pulse-out {\n  0% {\n    -webkit-transform: scaley(1);\n            transform: scaley(1); }\n  50% {\n    -webkit-transform: scaley(0.4);\n            transform: scaley(0.4); }\n  100% {\n    -webkit-transform: scaley(1);\n            transform: scaley(1); } }\n  .sk-rectangle-bounce-pulse-out-rapid,\n.sk-rectangle-bounce-pulse-out-rapid > div {\n  position: relative;\n  box-sizing: border-box; }\n  .sk-rectangle-bounce-pulse-out-rapid {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 0; }\n  .sk-rectangle-bounce-pulse-out-rapid > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n  .sk-rectangle-bounce-pulse-out-rapid > div {\n  width: 10%;\n  height: 100%;\n  margin: 0 5%;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-radius: 0;\n  -webkit-animation: rectangle-bounce-pulse-out-rapid 0.9s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);\n          animation: rectangle-bounce-pulse-out-rapid 0.9s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78); }\n  .sk-rectangle-bounce-pulse-out-rapid > div:nth-child(3) {\n  -webkit-animation-delay: -.9s;\n          animation-delay: -.9s; }\n  .sk-rectangle-bounce-pulse-out-rapid > div:nth-child(2),\n.sk-rectangle-bounce-pulse-out-rapid > div:nth-child(4) {\n  -webkit-animation-delay: -.65s;\n          animation-delay: -.65s; }\n  .sk-rectangle-bounce-pulse-out-rapid > div:nth-child(1),\n.sk-rectangle-bounce-pulse-out-rapid > div:nth-child(5) {\n  -webkit-animation-delay: -.4s;\n          animation-delay: -.4s; }\n  @-webkit-keyframes rectangle-bounce-pulse-out-rapid {\n  0% {\n    -webkit-transform: scaley(1);\n            transform: scaley(1); }\n  80% {\n    -webkit-transform: scaley(0.4);\n            transform: scaley(0.4); }\n  90% {\n    -webkit-transform: scaley(1);\n            transform: scaley(1); } }\n  @keyframes rectangle-bounce-pulse-out-rapid {\n  0% {\n    -webkit-transform: scaley(1);\n            transform: scaley(1); }\n  80% {\n    -webkit-transform: scaley(0.4);\n            transform: scaley(0.4); }\n  90% {\n    -webkit-transform: scaley(1);\n            transform: scaley(1); } }\n  .sk-rotating-plane {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  margin: auto; }\n  .sk-rotating-plane > div {\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  -webkit-animation: sk-rotatePlane 1.2s infinite ease-in-out;\n          animation: sk-rotatePlane 1.2s infinite ease-in-out; }\n  @-webkit-keyframes sk-rotatePlane {\n  0% {\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n            transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n  50% {\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }\n  100% {\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }\n  @keyframes sk-rotatePlane {\n  0% {\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n            transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n  50% {\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }\n  100% {\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }\n  .sk-square-jelly-box,\n.sk-square-jelly-box > div {\n  position: relative;\n  box-sizing: border-box; }\n  .sk-square-jelly-box {\n  width: 100%;\n  height: 100%;\n  font-size: 0; }\n  .sk-square-jelly-box > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n  .sk-square-jelly-box > div:nth-child(1),\n.sk-square-jelly-box > div:nth-child(2) {\n  position: absolute;\n  left: 0;\n  width: 100%; }\n  .sk-square-jelly-box > div:nth-child(1) {\n  top: -25%;\n  z-index: 99997;\n  height: 100%;\n  border-radius: 10%;\n  -webkit-animation: square-jelly-box-animate .6s -.1s linear infinite;\n          animation: square-jelly-box-animate .6s -.1s linear infinite; }\n  .sk-square-jelly-box > div:nth-child(2) {\n  bottom: -9%;\n  height: 10%;\n  background: #000;\n  border-radius: 50%;\n  opacity: .2;\n  -webkit-animation: square-jelly-box-shadow .6s -.1s linear infinite;\n          animation: square-jelly-box-shadow .6s -.1s linear infinite; }\n  @-webkit-keyframes square-jelly-box-animate {\n  17% {\n    border-bottom-right-radius: 10%; }\n  25% {\n    -webkit-transform: translateY(25%) rotate(22.5deg);\n            transform: translateY(25%) rotate(22.5deg); }\n  50% {\n    border-bottom-right-radius: 100%;\n    -webkit-transform: translateY(50%) scale(1, 0.9) rotate(45deg);\n            transform: translateY(50%) scale(1, 0.9) rotate(45deg); }\n  75% {\n    -webkit-transform: translateY(25%) rotate(67.5deg);\n            transform: translateY(25%) rotate(67.5deg); }\n  100% {\n    -webkit-transform: translateY(0) rotate(90deg);\n            transform: translateY(0) rotate(90deg); } }\n  @keyframes square-jelly-box-animate {\n  17% {\n    border-bottom-right-radius: 10%; }\n  25% {\n    -webkit-transform: translateY(25%) rotate(22.5deg);\n            transform: translateY(25%) rotate(22.5deg); }\n  50% {\n    border-bottom-right-radius: 100%;\n    -webkit-transform: translateY(50%) scale(1, 0.9) rotate(45deg);\n            transform: translateY(50%) scale(1, 0.9) rotate(45deg); }\n  75% {\n    -webkit-transform: translateY(25%) rotate(67.5deg);\n            transform: translateY(25%) rotate(67.5deg); }\n  100% {\n    -webkit-transform: translateY(0) rotate(90deg);\n            transform: translateY(0) rotate(90deg); } }\n  @-webkit-keyframes square-jelly-box-shadow {\n  50% {\n    -webkit-transform: scale(1.25, 1);\n            transform: scale(1.25, 1); } }\n  @keyframes square-jelly-box-shadow {\n  50% {\n    -webkit-transform: scale(1.25, 1);\n            transform: scale(1.25, 1); } }\n  .sk-square-loader,\n.sk-square-loader > div {\n  position: relative;\n  box-sizing: border-box; }\n  .sk-square-loader {\n  font-size: 0;\n  width: 100%;\n  height: 100%; }\n  .sk-square-loader > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n  .sk-square-loader > div {\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border-width: 3px;\n  border-radius: 0;\n  -webkit-animation: square-loader 2s infinite ease;\n          animation: square-loader 2s infinite ease; }\n  .sk-square-loader > div:after {\n  display: inline-block;\n  width: 100%;\n  vertical-align: top;\n  content: \"\";\n  background-color: currentColor;\n  -webkit-animation: square-loader-inner 2s infinite ease-in;\n          animation: square-loader-inner 2s infinite ease-in; }\n  @-webkit-keyframes square-loader {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  25% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  75% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes square-loader {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  25% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  75% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @-webkit-keyframes square-loader-inner {\n  0% {\n    height: 0; }\n  25% {\n    height: 0; }\n  50% {\n    height: 100%; }\n  75% {\n    height: 100%; }\n  100% {\n    height: 0; } }\n  @keyframes square-loader-inner {\n  0% {\n    height: 0; }\n  25% {\n    height: 0; }\n  50% {\n    height: 100%; }\n  75% {\n    height: 100%; }\n  100% {\n    height: 0; } }\n  .sk-three-bounce {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n  .sk-three-bounce > div {\n  margin-top: 35%;\n  width: 30%;\n  height: 30%;\n  background-color: currentColor;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-threeBounce-bounceDelay 1.4s infinite ease-in-out both;\n          animation: sk-threeBounce-bounceDelay 1.4s infinite ease-in-out both; }\n  .bottom-center > .sk-three-bounce > div,\n.bottom-left > .sk-three-bounce > div,\n.bottom-right > .sk-three-bounce > div {\n  margin-top: 70% !important; }\n  .top-center > .sk-three-bounce > div,\n.top-left > .sk-three-bounce > div,\n.top-right > .sk-three-bounce > div {\n  margin-top: 0 !important; }\n  .sk-three-bounce > div:nth-child(1) {\n  -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s; }\n  .sk-three-bounce > div:nth-child(2) {\n  -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s; }\n  @-webkit-keyframes sk-threeBounce-bounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @keyframes sk-threeBounce-bounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  .sk-three-strings {\n  width: 100%;\n  height: 100%; }\n  .sk-three-strings > div {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%; }\n  .sk-three-strings > div:nth-child(1) {\n  left: 0%;\n  top: 0%;\n  -webkit-animation: sk-threeStrings-rotateOne 1s linear infinite;\n          animation: sk-threeStrings-rotateOne 1s linear infinite;\n  border-bottom: 3px solid currentColor; }\n  .sk-three-strings > div:nth-child(2) {\n  right: 0%;\n  top: 0%;\n  -webkit-animation: sk-threeStrings-rotateTwo 1s linear infinite;\n          animation: sk-threeStrings-rotateTwo 1s linear infinite;\n  border-right: 3px solid currentColor; }\n  .sk-three-strings > div:nth-child(3) {\n  right: 0%;\n  bottom: 0%;\n  -webkit-animation: sk-threeStrings-rotateThree 1s linear infinite;\n          animation: sk-threeStrings-rotateThree 1s linear infinite;\n  border-top: 3px solid currentColor; }\n  @-webkit-keyframes sk-threeStrings-rotateOne {\n  0% {\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg); } }\n  @keyframes sk-threeStrings-rotateOne {\n  0% {\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg); } }\n  @-webkit-keyframes sk-threeStrings-rotateTwo {\n  0% {\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg); } }\n  @keyframes sk-threeStrings-rotateTwo {\n  0% {\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg); } }\n  @-webkit-keyframes sk-threeStrings-rotateThree {\n  0% {\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg); } }\n  @keyframes sk-threeStrings-rotateThree {\n  0% {\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg); } }\n  .sk-wandering-cubes {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  text-align: center; }\n  .sk-wandering-cubes > div {\n  background-color: currentColor;\n  width: 25%;\n  height: 25%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-wanderingCubes-cubeMove 1.8s infinite ease-in-out;\n          animation: sk-wanderingCubes-cubeMove 1.8s infinite ease-in-out; }\n  .sk-wandering-cubes > div:nth-child(2) {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n  @-webkit-keyframes sk-wanderingCubes-cubeMove {\n  25% {\n    -webkit-transform: translateX(290%) rotate(-90deg) scale(0.5);\n            transform: translateX(290%) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(290%) translateY(290%) rotate(-179deg);\n            transform: translateX(290%) translateY(290%) rotate(-179deg); }\n  50.1% {\n    -webkit-transform: translateX(290%) translateY(290%) rotate(-180deg);\n            transform: translateX(290%) translateY(290%) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(290%) rotate(-270deg) scale(0.5);\n            transform: translateX(0px) translateY(290%) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg); } }\n  @keyframes sk-wanderingCubes-cubeMove {\n  25% {\n    -webkit-transform: translateX(290%) rotate(-90deg) scale(0.5);\n            transform: translateX(290%) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(290%) translateY(290%) rotate(-179deg);\n            transform: translateX(290%) translateY(290%) rotate(-179deg); }\n  50.1% {\n    -webkit-transform: translateX(290%) translateY(290%) rotate(-180deg);\n            transform: translateX(290%) translateY(290%) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(290%) rotate(-270deg) scale(0.5);\n            transform: translateX(0px) translateY(290%) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC11aS1sb2FkZXIvc3JjL2xpYi9jb3JlL0M6XFxTb3VyY2VcXFByaXZhdFxcbmd4LXVpLWxvYWRlci9wcm9qZWN0c1xcbmd4LXVpLWxvYWRlclxcc3JjXFxsaWJcXGNvcmVcXG5neC11aS1sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FWZTtFQVdmLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsY0FkZTtFQWVmLGdCQUFnQixFQUFBO0VBVGxCO0lBWUksY0FBYyxFQUFBO0VBWmxCO0lBZ0JJLHFCQUFxQjtJQUNyQixzQ0FBc0MsRUFBQTtFQWpCMUM7SUFxQkksOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTSxFQUFBO0VBSVY7RUFFSSwyQ0FBbUM7VUFBbkMsbUNBQW1DLEVBQUE7RUFGdkM7RUFNSSxpRUFBeUQ7VUFBekQseURBQXlEO0VBQ3pELHlDQUFpQztVQUFqQyxpQ0FBaUMsRUFBQTtFQUlyQztFQUVJLDBDQUFrQztVQUFsQyxrQ0FBa0MsRUFBQTtFQUZ0QztFQU1JLGlFQUF5RDtVQUF6RCx5REFBeUQ7RUFDekQsd0NBQWdDO1VBQWhDLGdDQUFnQyxFQUFBO0VBSXBDO0VBQ0Usa0VBQTBEO1VBQTFELDBEQUEwRDtFQUMxRCx1Q0FBK0I7VUFBL0IsK0JBQStCLEVBQUE7RUFHakM7RUFDRSxrRUFBMEQ7VUFBMUQsMERBQTBEO0VBQzFELHVDQUErQjtVQUEvQiwrQkFBK0IsRUFBQTtFQUdqQztFQUNFO0lBQ0UsMkNBQW1DO1lBQW5DLG1DQUFtQyxFQUFBO0VBRXJDO0lBQ0UseUNBQWlDO1lBQWpDLGlDQUFpQyxFQUFBLEVBQUE7RUFMckM7RUFDRTtJQUNFLDJDQUFtQztZQUFuQyxtQ0FBbUMsRUFBQTtFQUVyQztJQUNFLHlDQUFpQztZQUFqQyxpQ0FBaUMsRUFBQSxFQUFBO0VBSXJDO0VBQ0U7SUFDRSwwQ0FBa0M7WUFBbEMsa0NBQWtDLEVBQUE7RUFFcEM7SUFDRSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUEsRUFBQTtFQUxwQztFQUNFO0lBQ0UsMENBQWtDO1lBQWxDLGtDQUFrQyxFQUFBO0VBRXBDO0lBQ0Usd0NBQWdDO1lBQWhDLGdDQUFnQyxFQUFBLEVBQUE7RUFJcEM7RUFDRTtJQUNFLDBDQUFrQztZQUFsQyxrQ0FBa0MsRUFBQTtFQUVwQztJQUNFLHVDQUErQjtZQUEvQiwrQkFBK0IsRUFBQSxFQUFBO0VBTG5DO0VBQ0U7SUFDRSwwQ0FBa0M7WUFBbEMsa0NBQWtDLEVBQUE7RUFFcEM7SUFDRSx1Q0FBK0I7WUFBL0IsK0JBQStCLEVBQUEsRUFBQTtFQUluQztFQUNFO0lBQ0UseUNBQWlDO1lBQWpDLGlDQUFpQyxFQUFBO0VBRW5DO0lBQ0UsdUNBQStCO1lBQS9CLCtCQUErQixFQUFBLEVBQUE7RUFMbkM7RUFDRTtJQUNFLHlDQUFpQztZQUFqQyxpQ0FBaUMsRUFBQTtFQUVuQztJQUNFLHVDQUErQjtZQUEvQiwrQkFBK0IsRUFBQSxFQUFBO0VBS25DO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUNBbEhrQztFQW1IbEMsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtFQVRmO0lBWUksY0FBYyxFQUFBO0VBWmxCO0lBZ0JJLHFCQUFxQjtJQUNyQixzQ0FBc0MsRUFBQTtFQWpCMUM7SUFxQkksZUFBZTtJQUNmLFdBN0hjO0lBOEhkLFlBOUhjO0lBK0hkLFNBQVM7SUFDVCxjQWpJa0IsRUFBQTtFQXdHdEI7SUE2QkksZUFBZTtJQUNmLFNBQVM7SUFDVCxZQTNJWTtJQTRJWixhQTVJWSxFQUFBO0VBNEdoQjtJQW9DSSxlQUFlO0lBQ2YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixnQkFwSnVCO0lBcUp2QixnQkF0SnVCO0lBdUp2QixjQXhKc0IsRUFBQTtFQTRKMUI7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBdkpnQjtFQXdKaEIsWUF4SmdCO0VBeUpoQixTQUFTO0VBQ1QsY0EzSm9CO0VBNEpwQixZQUFZO0VBQ1osYUFBYSxFQUFBO0VBUmY7SUFXSSxjQUFjLEVBQUE7RUFYbEI7SUFlSSxxQkFBcUI7SUFDckIsaUNBQWlDLEVBQUE7RUFJckM7RUFDRSw2QkFBNkIsRUFBQTtFQUQvQjs7O0lBTUksNkJBQTZCLEVBQUE7RUFOakM7SUFVSSx5QkFBeUIsRUFBQTtFQVY3QjtJQWNJLHlCQUF5QixFQUFBO0VBZDdCO0lBa0JJLHlCQUF5QixFQUFBO0VBbEI3QjtJQXNCSSx5QkFBeUIsRUFBQTtFQUs3QjtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7RUFHWjtFQUNFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBO0VBRzdCO0VBQ0UsU0FBUztFQUNULFdBQVcsRUFBQTtFQUdiO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7RUFHN0I7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTtFQUdsQztFQUNFLFFBQVE7RUFDUixXQUFXO0VBQ1gsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBO0VBRzdCO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBQTtFQUdaO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7RUFHN0I7RUFDRSxZQUFZO0VBQ1osV0FBVyxFQUFBO0VBTWI7O0VBRUUsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBO0VBR3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFHZDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLDRCQUE0QixFQUFBO0VBRzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDREQUFvRDtVQUFwRCxvREFBb0QsRUFBQTtFQUd0RDtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTtFQUd0QjtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTtFQUd0QjtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFlBQVksRUFBQTtFQUVkO0lBQ0UsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQSxFQUFBO0VBVnZCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7SUFDRSxVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBLEVBQUE7RUFNdkI7O0VBRUUsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBO0VBR3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFHZDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLDRCQUE0QixFQUFBO0VBRzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4REFBc0Q7VUFBdEQsc0RBQXNELEVBQUE7RUFHeEQ7RUFDRSxPQUFPO0VBQ1AsU0FBUztFQUNULGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtFQUcxQjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsK0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBR3pCO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBd0I7VUFBeEIsd0JBQXdCLEVBQUE7RUFHMUI7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0NBQXdCO1VBQXhCLHdCQUF3QixFQUFBO0VBRzFCO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiwrQkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7RUFHekI7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtFQUcxQjtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBO0VBR3RCO0VBQ0U7O0lBRUUsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQSxFQUFBO0VBWHZCO0VBQ0U7O0lBRUUsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQSxFQUFBO0VBTXZCOztFQUVFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWSxFQUFBO0VBR2Q7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qiw0QkFBNEIsRUFBQTtFQUc5QjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOERBQXNEO1VBQXRELHNEQUFzRCxFQUFBO0VBR3hEO0VBQ0UsT0FBTztFQUNQLFNBQVM7RUFDVCwrQkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7RUFHekI7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsK0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBR3pCO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7RUFHdkI7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLCtCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtFQUd6QjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0VBR3hCO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwrQkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7RUFHekI7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLDJCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtFQUdyQjtFQUNFOztJQUVFLFVBQVU7SUFDViwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVU7SUFDViwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUEsRUFBQTtFQVh2QjtFQUNFOztJQUVFLFVBQVU7SUFDViwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVU7SUFDViwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUEsRUFBQTtFQU12Qjs7RUFFRSxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7RUFHeEI7RUFDQSxZQUFZO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWiw4RUFBc0U7VUFBdEUsc0VBQXNFLEVBQUE7RUFHeEU7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qiw0QkFBNEIsRUFBQTtFQUc5QjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUVBQStEO1VBQS9ELCtEQUErRCxFQUFBO0VBR2pFO0VBQ0UsT0FBTztFQUNQLFNBQVM7RUFDVCwrQkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7RUFHekI7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsK0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBR3pCO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7RUFHdkI7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLCtCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtFQUd6QjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0VBR3hCO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwrQkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7RUFHekI7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLDJCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtFQUdyQjtFQUNFO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBLEVBQUE7RUFGOUI7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQSxFQUFBO0VBSTlCO0VBQ0U7SUFDRSxZQUFZO0lBQ1osNkJBQW9CO1lBQXBCLHFCQUFvQixFQUFBO0VBRXRCO0lBQ0UsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQSxFQUFBO0VBUHZCO0VBQ0U7SUFDRSxZQUFZO0lBQ1osNkJBQW9CO1lBQXBCLHFCQUFvQixFQUFBO0VBRXRCO0lBQ0UsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQSxFQUFBO0VBTXZCOztFQUVFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLDJEQUFtRDtVQUFuRCxtREFBbUQsRUFBQTtFQUdyRDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLDRCQUE0QixFQUFBO0VBRzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvREFBNEM7VUFBNUMsNENBQTRDLEVBQUE7RUFHOUM7RUFDRSxPQUFPO0VBQ1AsU0FBUztFQUNULGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtFQUcxQjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsK0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBR3pCO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBd0I7VUFBeEIsd0JBQXdCLEVBQUE7RUFHMUI7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0NBQXdCO1VBQXhCLHdCQUF3QixFQUFBO0VBRzFCO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiwrQkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7RUFHekI7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtFQUcxQjtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBO0VBR3RCO0VBQ0U7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTtFQUY3QjtFQUNFO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7RUFJN0I7RUFDRTs7SUFFRSxVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsWUFBWTtJQUNaLDZCQUFvQjtZQUFwQixxQkFBb0IsRUFBQSxFQUFBO0VBUnhCO0VBQ0U7O0lBRUUsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFlBQVk7SUFDWiw2QkFBb0I7WUFBcEIscUJBQW9CLEVBQUEsRUFBQTtFQU94QjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFFbEIsNkRBQXFEO1VBQXJELHFEQUFxRCxFQUFBO0VBR3ZEO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBRW5CLGtFQUEwRDtVQUExRCwwREFBMEQsRUFBQTtFQUc1RDtFQUNFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0VBR3hCO0VBQ0U7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTtFQUY3QjtFQUNFO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7RUFJN0I7RUFDRTtJQUNFLDJCQUFxQjtZQUFyQixtQkFBcUIsRUFBQTtFQUNyQjtJQUNBLDJCQUFxQjtZQUFyQixtQkFBcUIsRUFBQSxFQUFBO0VBSnpCO0VBQ0U7SUFDRSwyQkFBcUI7WUFBckIsbUJBQXFCLEVBQUE7RUFDckI7SUFDQSwyQkFBcUI7WUFBckIsbUJBQXFCLEVBQUEsRUFBQTtFQU16QjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU0sRUFBQTtFQUdSO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHVFQUErRDtVQUEvRCwrREFBK0QsRUFBQTtFQUdqRTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtFQUcxQjtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtFQUcxQjtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtFQUcxQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTtFQUd0QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBQ25CO0lBQ0EsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBLEVBQUE7RUFKdkI7RUFDRTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUNuQjtJQUNBLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQSxFQUFBO0VBTXZCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFHZDtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxtRUFBMkQ7VUFBM0QsMkRBQTJELEVBQUE7RUFFN0Q7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7RUFHdkI7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7RUFHdkI7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7RUFHdkI7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7RUFHdkI7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7RUFHdkI7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7RUFHdkI7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7RUFHckI7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7RUFHdkI7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7RUFHdkI7RUFDRTtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtFQUMzQjtJQUNBLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQSxFQUFBO0VBSi9CO0VBQ0U7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUFDM0I7SUFDQSxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUEsRUFBQTtFQU0vQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBRVosa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFFUCxtRUFBMkQ7VUFBM0QsMkRBQTJELEVBQUE7RUFHN0Q7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFHeEI7RUFDRTtJQUNFLDJCQUFxQjtZQUFyQixtQkFBcUIsRUFBQTtFQUNyQjtJQUNBLDJCQUFxQjtZQUFyQixtQkFBcUIsRUFBQSxFQUFBO0VBSnpCO0VBQ0U7SUFDRSwyQkFBcUI7WUFBckIsbUJBQXFCLEVBQUE7RUFDckI7SUFDQSwyQkFBcUI7WUFBckIsbUJBQXFCLEVBQUEsRUFBQTtFQU16QjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU0sRUFBQTtFQUdSO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDJFQUFtRTtVQUFuRSxtRUFBbUUsRUFBQTtFQUdyRTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtFQUcxQjtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtFQUcxQjtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtFQUcxQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUUzQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTtFQUd0QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUV4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTtFQUxkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0VBTWQ7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBO0VBRzNCO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDZCQUFxQjtVQUFyQixxQkFBcUIsRUFBQTtFQUd2QjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM1QixpRUFBeUQ7VUFBekQseURBQXlEO0VBQ3pELG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTtFQUcvQjtFQUNFLDRDQUFvQztVQUFwQyxvQ0FBb0MsRUFBQTtFQUd0QztFQUNFLDZDQUFxQztVQUFyQyxxQ0FBcUMsRUFBQTtFQUd2QztFQUNFLDZDQUFxQztVQUFyQyxxQ0FBcUMsRUFBQTtFQUd2QztFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUIsRUFBQTtFQUd2QjtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUIsRUFBQTtFQUd2QjtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUIsRUFBQTtFQUd2QjtFQUNFO0lBQ0Usc0RBQThDO1lBQTlDLDhDQUE4QztJQUM5QyxVQUFVLEVBQUE7RUFDVjtJQUNBLG1EQUEyQztZQUEzQywyQ0FBMkM7SUFDM0MsVUFBVSxFQUFBO0VBQ1Y7SUFDQSxxREFBNkM7WUFBN0MsNkNBQTZDO0lBQzdDLFVBQVUsRUFBQSxFQUFBO0VBVGQ7RUFDRTtJQUNFLHNEQUE4QztZQUE5Qyw4Q0FBOEM7SUFDOUMsVUFBVSxFQUFBO0VBQ1Y7SUFDQSxtREFBMkM7WUFBM0MsMkNBQTJDO0lBQzNDLFVBQVUsRUFBQTtFQUNWO0lBQ0EscURBQTZDO1lBQTdDLDZDQUE2QztJQUM3QyxVQUFVLEVBQUEsRUFBQTtFQU1kO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBRTlCLG1CQUFtQjtFQUNuQiw4REFBc0Q7VUFBdEQsc0RBQXNELEVBQUE7RUFHeEQ7RUFDRTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUNuQjtJQUNBLDJCQUFxQjtZQUFyQixtQkFBcUI7SUFDckIsVUFBVSxFQUFBLEVBQUE7RUFMZDtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBQ25CO0lBQ0EsMkJBQXFCO1lBQXJCLG1CQUFxQjtJQUNyQixVQUFVLEVBQUEsRUFBQTtFQU1kO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQUdkO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLHFCQUFxQjtFQUVyQiw0RUFBb0U7VUFBcEUsb0VBQW9FLEVBQUE7RUFHdEU7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFHeEI7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFHeEI7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFHeEI7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFHeEI7RUFDRTtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0IsRUFBQTtFQUNyQjtJQUNELDRCQUFzQjtZQUF0QixvQkFBc0IsRUFBQSxFQUFBO0VBSjFCO0VBQ0U7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUE7RUFDckI7SUFDRCw0QkFBc0I7WUFBdEIsb0JBQXNCLEVBQUEsRUFBQTtFQU0xQjs7RUFFRSxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7RUFHeEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0VBR2Q7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qiw0QkFBNEIsRUFBQTtFQUc5QjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDhDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMsMkNBQW1DO1VBQW5DLG1DQUFtQyxFQUFBO0VBR3JDO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFHeEI7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0VBR3hCO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFHeEI7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBO0VBRXRCO0lBQ0UsOEJBQXFCO1lBQXJCLHNCQUFxQixFQUFBO0VBRXZCO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBLEVBQUE7RUFSeEI7RUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0IsRUFBQTtFQUV0QjtJQUNFLDhCQUFxQjtZQUFyQixzQkFBcUIsRUFBQTtFQUV2QjtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0IsRUFBQSxFQUFBO0VBTXhCOztFQUVFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFHZDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLDRCQUE0QixFQUFBO0VBRzlCO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0dBQW1GO1VBQW5GLHdGQUFtRixFQUFBO0VBR3JGO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQixFQUFBO0VBR3ZCOztFQUVFLDZCQUFxQjtVQUFyQixxQkFBcUIsRUFBQTtFQUd2Qjs7RUFFRSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7RUFHdkI7RUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0IsRUFBQTtFQUV0QjtJQUNFLDhCQUFxQjtZQUFyQixzQkFBcUIsRUFBQTtFQUV2QjtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0IsRUFBQSxFQUFBO0VBUnhCO0VBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CLEVBQUE7RUFFdEI7SUFDRSw4QkFBcUI7WUFBckIsc0JBQXFCLEVBQUE7RUFFdkI7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CLEVBQUEsRUFBQTtFQU14Qjs7RUFFRSxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7RUFHeEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0VBR2Q7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qiw0QkFBNEIsRUFBQTtFQUc5QjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNHQUF5RjtVQUF6Riw4RkFBeUYsRUFBQTtFQUczRjtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUIsRUFBQTtFQUd2Qjs7RUFFRSw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFHeEI7O0VBRUUsNkJBQXFCO1VBQXJCLHFCQUFxQixFQUFBO0VBR3ZCO0VBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CLEVBQUE7RUFFdEI7SUFDRSw4QkFBcUI7WUFBckIsc0JBQXFCLEVBQUE7RUFFdkI7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CLEVBQUEsRUFBQTtFQVJ4QjtFQUNFO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBO0VBRXRCO0lBQ0UsOEJBQXFCO1lBQXJCLHNCQUFxQixFQUFBO0VBRXZCO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBLEVBQUE7RUFNeEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBRTlCLDJEQUFtRDtVQUFuRCxtREFBbUQsRUFBQTtFQUdyRDtFQUNFO0lBQ0UsaUVBQXlEO1lBQXpELHlEQUF5RCxFQUFBO0VBQ3pEO0lBQ0Esc0VBQThEO1lBQTlELDhEQUE4RCxFQUFBO0VBQzlEO0lBQ0EseUVBQWlFO1lBQWpFLGlFQUFpRSxFQUFBLEVBQUE7RUFOckU7RUFDRTtJQUNFLGlFQUF5RDtZQUF6RCx5REFBeUQsRUFBQTtFQUN6RDtJQUNBLHNFQUE4RDtZQUE5RCw4REFBOEQsRUFBQTtFQUM5RDtJQUNBLHlFQUFpRTtZQUFqRSxpRUFBaUUsRUFBQSxFQUFBO0VBTXJFOztFQUVFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWSxFQUFBO0VBR2Q7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qiw0QkFBNEIsRUFBQTtFQUc5Qjs7RUFFRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFdBQVcsRUFBQTtFQUdiO0VBQ0UsU0FBUztFQUNULGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9FQUE0RDtVQUE1RCw0REFBNEQsRUFBQTtFQUc5RDtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUVBQTJEO1VBQTNELDJEQUEyRCxFQUFBO0VBRzdEO0VBQ0U7SUFDRSwrQkFBK0IsRUFBQTtFQUVqQztJQUNFLGtEQUEwQztZQUExQywwQ0FBMEMsRUFBQTtFQUU1QztJQUNFLGdDQUFnQztJQUNoQyw4REFBcUQ7WUFBckQsc0RBQXFELEVBQUE7RUFFdkQ7SUFDRSxrREFBMEM7WUFBMUMsMENBQTBDLEVBQUE7RUFFNUM7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDLEVBQUEsRUFBQTtFQWYxQztFQUNFO0lBQ0UsK0JBQStCLEVBQUE7RUFFakM7SUFDRSxrREFBMEM7WUFBMUMsMENBQTBDLEVBQUE7RUFFNUM7SUFDRSxnQ0FBZ0M7SUFDaEMsOERBQXFEO1lBQXJELHNEQUFxRCxFQUFBO0VBRXZEO0lBQ0Usa0RBQTBDO1lBQTFDLDBDQUEwQyxFQUFBO0VBRTVDO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQyxFQUFBLEVBQUE7RUFJMUM7RUFDRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBO0VBRjdCO0VBQ0U7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTtFQU03Qjs7RUFFRSxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7RUFHeEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsNEJBQTRCLEVBQUE7RUFHOUI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlEQUF5QztVQUF6Qyx5Q0FBeUMsRUFBQTtFQUczQztFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsMERBQWtEO1VBQWxELGtEQUFrRCxFQUFBO0VBR3BEO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUE7RUFFM0I7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUE7RUFFM0I7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUE7RUFFM0I7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTtFQWQ3QjtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBO0VBRTNCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBO0VBRTNCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBO0VBRTNCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7RUFJN0I7RUFDRTtJQUNFLFNBQVMsRUFBQTtFQUVYO0lBQ0UsU0FBUyxFQUFBO0VBRVg7SUFDRSxZQUFZLEVBQUE7RUFFZDtJQUNFLFlBQVksRUFBQTtFQUVkO0lBQ0UsU0FBUyxFQUFBLEVBQUE7RUFkYjtFQUNFO0lBQ0UsU0FBUyxFQUFBO0VBRVg7SUFDRSxTQUFTLEVBQUE7RUFFWDtJQUNFLFlBQVksRUFBQTtFQUVkO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7SUFDRSxTQUFTLEVBQUEsRUFBQTtFQU1iO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7RUFHcEI7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCw4QkFBOEI7RUFFOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiw0RUFBb0U7VUFBcEUsb0VBQW9FLEVBQUE7RUFHdEU7OztFQUdFLDBCQUEwQixFQUFBO0VBRzVCOzs7RUFHRSx3QkFBd0IsRUFBQTtFQUcxQjtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtFQUd6QjtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtFQUd6QjtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBQ25CO0lBQ0EsMkJBQXFCO1lBQXJCLG1CQUFxQixFQUFBLEVBQUE7RUFKekI7RUFDRTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUNuQjtJQUNBLDJCQUFxQjtZQUFyQixtQkFBcUIsRUFBQSxFQUFBO0VBTXpCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsUUFBUTtFQUNSLE9BQU87RUFDUCwrREFBdUQ7VUFBdkQsdURBQXVEO0VBQ3ZELHFDQUFxQyxFQUFBO0VBR3ZDO0VBQ0UsU0FBUztFQUNULE9BQU87RUFDUCwrREFBdUQ7VUFBdkQsdURBQXVEO0VBQ3ZELG9DQUFvQyxFQUFBO0VBR3RDO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixpRUFBeUQ7VUFBekQseURBQXlEO0VBQ3pELGtDQUFrQyxFQUFBO0VBR3BDO0VBQ0U7SUFDRSwrREFBdUQ7WUFBdkQsdURBQXVELEVBQUE7RUFDdkQ7SUFDQSxpRUFBeUQ7WUFBekQseURBQXlELEVBQUEsRUFBQTtFQUo3RDtFQUNFO0lBQ0UsK0RBQXVEO1lBQXZELHVEQUF1RCxFQUFBO0VBQ3ZEO0lBQ0EsaUVBQXlEO1lBQXpELHlEQUF5RCxFQUFBLEVBQUE7RUFJN0Q7RUFDRTtJQUNFLDhEQUFzRDtZQUF0RCxzREFBc0QsRUFBQTtFQUN0RDtJQUNBLGdFQUF3RDtZQUF4RCx3REFBd0QsRUFBQSxFQUFBO0VBSjVEO0VBQ0U7SUFDRSw4REFBc0Q7WUFBdEQsc0RBQXNELEVBQUE7RUFDdEQ7SUFDQSxnRUFBd0Q7WUFBeEQsd0RBQXdELEVBQUEsRUFBQTtFQUk1RDtFQUNFO0lBQ0UsOERBQXNEO1lBQXRELHNEQUFzRCxFQUFBO0VBQ3REO0lBQ0EsZ0VBQXdEO1lBQXhELHdEQUF3RCxFQUFBLEVBQUE7RUFKNUQ7RUFDRTtJQUNFLDhEQUFzRDtZQUF0RCxzREFBc0QsRUFBQTtFQUN0RDtJQUNBLGdFQUF3RDtZQUF4RCx3REFBd0QsRUFBQSxFQUFBO0VBSzVEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBRVAsdUVBQStEO1VBQS9ELCtEQUErRCxFQUFBO0VBR2pFO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0VBR3hCO0VBQ0U7SUFDRSw2REFBcUQ7WUFBckQscURBQXFELEVBQUE7RUFDckQ7SUFDQSxvRUFBNEQ7WUFBNUQsNERBQTRELEVBQUE7RUFDNUQ7SUFDQSxvRUFBNEQ7WUFBNUQsNERBQTRELEVBQUE7RUFDNUQ7SUFDQSw4RUFBc0U7WUFBdEUsc0VBQXNFLEVBQUE7RUFDdEU7SUFDQSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUEsRUFBQTtFQVY5QjtFQUNFO0lBQ0UsNkRBQXFEO1lBQXJELHFEQUFxRCxFQUFBO0VBQ3JEO0lBQ0Esb0VBQTREO1lBQTVELDREQUE0RCxFQUFBO0VBQzVEO0lBQ0Esb0VBQTREO1lBQTVELDREQUE0RCxFQUFBO0VBQzVEO0lBQ0EsOEVBQXNFO1lBQXRFLHNFQUFzRSxFQUFBO0VBQ3RFO0lBQ0Esa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvbmd4LXVpLWxvYWRlci9zcmMvbGliL2NvcmUvbmd4LXVpLWxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsb2FkaW5nVGV4dENvbG9yOiAjRkZGRkZGO1xyXG4kbG9hZGluZ1RleHRGb250U2l6ZTogMS4yZW07XHJcbiRsb2FkaW5nVGV4dEZvbnRXZWlnaHQ6IDQwMDtcclxuJGxvZ29TaXplOiAxMjBweDtcclxuJG92ZXJsYXlDb2xvcjogcmdiYSg0MCwgNDAsIDQwLCAwLjgpO1xyXG4kcGJDb2xvcjogIzAwQUNDMTtcclxuJHBiVGhpY2tuZXNzOiAzcHg7XHJcbiRzcGlubmVyQ29sb3I6ICMwMEFDQzE7XHJcbiRzcGlubmVyU2l6ZTogNjBweDtcclxuXHJcbi8vIG5neC1wcm9ncmVzcy1iYXIge3t7XHJcbi5uZ3gtcHJvZ3Jlc3MtYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAkcGJUaGlja25lc3M7XHJcbiAgei1pbmRleDogOTk5OTkgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGNvbG9yOiAkcGJDb2xvcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmLmxvYWRpbmctZm9yZWdyb3VuZCwgJi5mb3JlZ3JvdW5kLWNsb3Npbmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmLmZvcmVncm91bmQtY2xvc2luZyB7XHJcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC41cztcclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm5neC1wcm9ncmVzcy1iYXItbHRyIHtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBhbmltYXRpb246IHByb2dyZXNzQmFyLXNsaWRlLWx0ciAyMHMgZWFzZS1vdXQgMHMgMSBub3JtYWw7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01JSwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG4ubmd4LXByb2dyZXNzLWJhci1ydGwge1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzc0Jhci1zbGlkZS1ydGwgMjBzIGVhc2Utb3V0IDBzIDEgbm9ybWFsO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1JSwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9yZWdyb3VuZC1jbG9zaW5nLm5neC1wcm9ncmVzcy1iYXItbHRyOjpiZWZvcmUgIHtcclxuICBhbmltYXRpb246IHByb2dyZXNzQmFyLXNsaWRlLWNvbXBsZXRlLWx0ciAxcyBlYXNlLW91dCAwcyAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5mb3JlZ3JvdW5kLWNsb3Npbmcubmd4LXByb2dyZXNzLWJhci1ydGw6OmJlZm9yZSAge1xyXG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3NCYXItc2xpZGUtY29tcGxldGUtcnRsIDFzIGVhc2Utb3V0IDBzIDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwcm9ncmVzc0Jhci1zbGlkZS1sdHIge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7IFxyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01JSwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHByb2dyZXNzQmFyLXNsaWRlLXJ0bCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUlLCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHJvZ3Jlc3NCYXItc2xpZGUtY29tcGxldGUtbHRyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC03NSUsIDAsIDApO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHJvZ3Jlc3NCYXItc2xpZGUtY29tcGxldGUtcnRsIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDc1JSwgMCwgMCk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG4vLyBuZ3gtcHJvZ3Jlc3MtYmFyIH19fVxyXG5cclxuLm5neC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTk4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG92ZXJsYXlDb2xvcjtcclxuICBjdXJzb3I6IHByb2dyZXNzO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICYubG9hZGluZy1mb3JlZ3JvdW5kLCAmLmZvcmVncm91bmQtY2xvc2luZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICYuZm9yZWdyb3VuZC1jbG9zaW5nIHtcclxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjVzO1xyXG4gIH1cclxuXHJcbiAgJiA+IC5uZ3gtZm9yZWdyb3VuZC1zcGlubmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAkc3Bpbm5lclNpemU7XHJcbiAgICBoZWlnaHQ6ICRzcGlubmVyU2l6ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAkc3Bpbm5lckNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJiA+IC5uZ3gtbG9hZGluZy1sb2dvIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAkbG9nb1NpemU7XHJcbiAgICBoZWlnaHQ6ICRsb2dvU2l6ZTtcclxuICB9XHJcblxyXG4gICYgPiAubmd4LWxvYWRpbmctdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAkbG9hZGluZ1RleHRGb250V2VpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAkbG9hZGluZ1RleHRGb250U2l6ZTtcclxuICAgIGNvbG9yOiAkbG9hZGluZ1RleHRDb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbi5uZ3gtYmFja2dyb3VuZC1zcGlubmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5OTcgIWltcG9ydGFudDtcclxuICB3aWR0aDogJHNwaW5uZXJTaXplO1xyXG4gIGhlaWdodDogJHNwaW5uZXJTaXplO1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogJHNwaW5uZXJDb2xvcjtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgJi5sb2FkaW5nLWJhY2tncm91bmQsICYuYmFja2dyb3VuZC1jbG9zaW5nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgJi5iYWNrZ3JvdW5kLWNsb3Npbmcge1xyXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjdzIGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLm5neC1wb3NpdGlvbi1hYnNvbHV0ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gICYgPiAubmd4LWZvcmVncm91bmQtc3Bpbm5lcixcclxuICAmID4gLm5neC1sb2FkaW5nLWxvZ28sXHJcbiAgJiA+IC5uZ3gtbG9hZGluZy10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJi5uZ3gtcHJvZ3Jlc3MtYmFyIHtcclxuICAgIHotaW5kZXg6IDk5OTk2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLm5neC1vdmVybGF5IHtcclxuICAgIHotaW5kZXg6IDk5OTk1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLm5neC1iYWNrZ3JvdW5kLXNwaW5uZXIge1xyXG4gICAgei1pbmRleDogOTk5OTQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICYgLnNrLXNxdWFyZS1qZWxseS1ib3ggPiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIHotaW5kZXg6IDk5OTk0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBVdGlsaXR5IGNsYXNzZXMge3t7XHJcbi50b3AtbGVmdCB7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi50b3AtY2VudGVyIHtcclxuICB0b3A6IDMwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuLnRvcC1yaWdodCB7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY2VudGVyLWxlZnQge1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uY2VudGVyLWNlbnRlciB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uY2VudGVyLXJpZ2h0IHtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMzBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5ib3R0b20tbGVmdCB7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5ib3R0b20tY2VudGVyIHtcclxuICBib3R0b206IDMwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuLmJvdHRvbS1yaWdodCB7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4vLyBVdGlsaXR5IGNsYXNzZXMgfX19XHJcblxyXG4vLyBzay1iYWxsLXNjYWxlLW11bHRpcGxlIHt7e1xyXG4uc2stYmFsbC1zY2FsZS1tdWx0aXBsZSxcclxuLnNrLWJhbGwtc2NhbGUtbXVsdGlwbGUgPiBkaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc2stYmFsbC1zY2FsZS1tdWx0aXBsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxufVxyXG5cclxuLnNrLWJhbGwtc2NhbGUtbXVsdGlwbGUgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgYm9yZGVyOiAwIHNvbGlkIGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnNrLWJhbGwtc2NhbGUtbXVsdGlwbGUgPiBkaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogYmFsbC1zY2FsZS1tdWx0aXBsZSAxcyAwcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNjYWxlLW11bHRpcGxlID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuMnM7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNjYWxlLW11bHRpcGxlID4gZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmFsbC1zY2FsZS1tdWx0aXBsZSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG4gIDUlIHtcclxuICAgIG9wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuLy8gc2stYmFsbC1zY2FsZS1tdWx0aXBsZSB9fX1cclxuXHJcbi8vIHNrLWJhbGwtc3BpbiB7e3tcclxuLnNrLWJhbGwtc3BpbixcclxuLnNrLWJhbGwtc3BpbiA+IGRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDA7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4gPiBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgYm9yZGVyOiAwIHNvbGlkIGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnNrLWJhbGwtc3BpbiA+IGRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMjUlO1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIG1hcmdpbi10b3A6IC0xMi41JTtcclxuICBtYXJnaW4tbGVmdDogLTEyLjUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYW5pbWF0aW9uOiBiYWxsLXNwaW4tY2xvY2t3aXNlIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2stYmFsbC1zcGluID4gZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgdG9wOiA1JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xMjVzO1xyXG59XHJcblxyXG4uc2stYmFsbC1zcGluID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgdG9wOiAxOC4xODAxOTQ4NDY2JTtcclxuICBsZWZ0OiA4MS44MTk4MDUxNTM0JTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0xLjI1cztcclxufVxyXG5cclxuLnNrLWJhbGwtc3BpbiA+IGRpdjpudGgtY2hpbGQoMykge1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDk1JTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0xLjM3NXM7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4gPiBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICB0b3A6IDgxLjgxOTgwNTE1MzQlO1xyXG4gIGxlZnQ6IDgxLjgxOTgwNTE1MzQlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuNXM7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4gPiBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICB0b3A6IDk0Ljk5OTk5OTk5NjYlO1xyXG4gIGxlZnQ6IDUwLjAwMDAwMDAwMDUlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuNjI1cztcclxufVxyXG5cclxuLnNrLWJhbGwtc3BpbiA+IGRpdjpudGgtY2hpbGQoNikge1xyXG4gIHRvcDogODEuODE5ODA0Njk2NiU7XHJcbiAgbGVmdDogMTguMTgwMTk0OTI0OCU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS43NXM7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4gPiBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICB0b3A6IDQ5Ljk5OTk3NTA4MTUlO1xyXG4gIGxlZnQ6IDUuMDAwMDA1MTIxNSU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS44NzVzO1xyXG59XHJcblxyXG4uc2stYmFsbC1zcGluID4gZGl2Om50aC1jaGlsZCg4KSB7XHJcbiAgdG9wOiAxOC4xNzk0NjQ5NzQlO1xyXG4gIGxlZnQ6IDE4LjE4MDM3MDA1MTglO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTJzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJhbGwtc3BpbiB7XHJcbiAgMCUsXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbn1cclxuLy8gc2stYmFsbC1zcGluIH19fVxyXG5cclxuLy8gc2stYmFsbC1zcGluLWNsb2Nrd2lzZSB7e3tcclxuLnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2UsXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlID4gZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDA7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlID4gZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xyXG4gIGJvcmRlcjogMCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlID4gZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgbWFyZ2luLXRvcDogLTEyLjUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTIuNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBhbmltYXRpb246IGJhbGwtc3Bpbi1jbG9ja3dpc2UgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlID4gZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgdG9wOiA1JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLjg3NXM7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgdG9wOiAxOC4xODAxOTQ4NDY2JTtcclxuICBsZWZ0OiA4MS44MTk4MDUxNTM0JTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0uNzVzO1xyXG59XHJcblxyXG4uc2stYmFsbC1zcGluLWNsb2Nrd2lzZSA+IGRpdjpudGgtY2hpbGQoMykge1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDk1JTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0uNjI1cztcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2UgPiBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICB0b3A6IDgxLjgxOTgwNTE1MzQlO1xyXG4gIGxlZnQ6IDgxLjgxOTgwNTE1MzQlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLS41cztcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2UgPiBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICB0b3A6IDk0Ljk5OTk5OTk5NjYlO1xyXG4gIGxlZnQ6IDUwLjAwMDAwMDAwMDUlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLS4zNzVzO1xyXG59XHJcblxyXG4uc2stYmFsbC1zcGluLWNsb2Nrd2lzZSA+IGRpdjpudGgtY2hpbGQoNikge1xyXG4gIHRvcDogODEuODE5ODA0Njk2NiU7XHJcbiAgbGVmdDogMTguMTgwMTk0OTI0OCU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLjI1cztcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2UgPiBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICB0b3A6IDQ5Ljk5OTk3NTA4MTUlO1xyXG4gIGxlZnQ6IDUuMDAwMDA1MTIxNSU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLjEyNXM7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlID4gZGl2Om50aC1jaGlsZCg4KSB7XHJcbiAgdG9wOiAxOC4xNzk0NjQ5NzQlO1xyXG4gIGxlZnQ6IDE4LjE4MDM3MDA1MTglO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmFsbC1zcGluLWNsb2Nrd2lzZSB7XHJcbiAgMCUsXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbn1cclxuLy8gc2stYmFsbC1zcGluLWNsb2Nrd2lzZSB9fX1cclxuXHJcbi8vIHNrLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZyB7e3tcclxuLnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZyxcclxuLnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZyA+IGRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcge1xyXG5mb250LXNpemU6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFuaW1hdGlvbjogYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLXJvdGF0ZSA2cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgYm9yZGVyOiAwIHNvbGlkIGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZyA+IGRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMjUlO1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIG1hcmdpbi10b3A6IC0xMi41JTtcclxuICBtYXJnaW4tbGVmdDogLTEyLjUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYW5pbWF0aW9uOiBiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcgMXMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4uc2stYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nID4gZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgdG9wOiA1JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLjg3NXM7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICB0b3A6IDE4LjE4MDE5NDg0NjYlO1xyXG4gIGxlZnQ6IDgxLjgxOTgwNTE1MzQlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLS43NXM7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcgPiBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA5NSU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLjYyNXM7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcgPiBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICB0b3A6IDgxLjgxOTgwNTE1MzQlO1xyXG4gIGxlZnQ6IDgxLjgxOTgwNTE1MzQlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLS41cztcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZyA+IGRpdjpudGgtY2hpbGQoNSkge1xyXG4gIHRvcDogOTQuOTk5OTk5OTk2NiU7XHJcbiAgbGVmdDogNTAuMDAwMDAwMDAwNSU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLjM3NXM7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcgPiBkaXY6bnRoLWNoaWxkKDYpIHtcclxuICB0b3A6IDgxLjgxOTgwNDY5NjYlO1xyXG4gIGxlZnQ6IDE4LjE4MDE5NDkyNDglO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLS4yNXM7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcgPiBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICB0b3A6IDQ5Ljk5OTk3NTA4MTUlO1xyXG4gIGxlZnQ6IDUuMDAwMDA1MTIxNSU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLjEyNXM7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcgPiBkaXY6bnRoLWNoaWxkKDgpIHtcclxuICB0b3A6IDE4LjE3OTQ2NDk3NCU7XHJcbiAgbGVmdDogMTguMTgwMzcwMDUxOCU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmctcm90YXRlIHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcge1xyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAuMjU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuLy8gc2stYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nIH19fVxyXG5cclxuLy8gc2stYmFsbC1zcGluLWZhZGUtcm90YXRpbmcge3t7XHJcbi5zay1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZyxcclxuLnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nID4gZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gIGFuaW1hdGlvbjogYmFsbC1zcGluLWZhZGUtcm90YXRlIDZzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nID4gZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xyXG4gIGJvcmRlcjogMCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZyA+IGRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMjUlO1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIG1hcmdpbi10b3A6IC0xMi41JTtcclxuICBtYXJnaW4tbGVmdDogLTEyLjUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYW5pbWF0aW9uOiBiYWxsLXNwaW4tZmFkZSAxcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5zay1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZyA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIHRvcDogNSU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMTI1cztcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgdG9wOiAxOC4xODAxOTQ4NDY2JTtcclxuICBsZWZ0OiA4MS44MTk4MDUxNTM0JTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0xLjI1cztcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nID4gZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogOTUlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMzc1cztcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nID4gZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgdG9wOiA4MS44MTk4MDUxNTM0JTtcclxuICBsZWZ0OiA4MS44MTk4MDUxNTM0JTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0xLjVzO1xyXG59XHJcblxyXG4uc2stYmFsbC1zcGluLWZhZGUtcm90YXRpbmcgPiBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICB0b3A6IDk0Ljk5OTk5OTk5NjYlO1xyXG4gIGxlZnQ6IDUwLjAwMDAwMDAwMDUlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuNjI1cztcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nID4gZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgdG9wOiA4MS44MTk4MDQ2OTY2JTtcclxuICBsZWZ0OiAxOC4xODAxOTQ5MjQ4JTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0xLjc1cztcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nID4gZGl2Om50aC1jaGlsZCg3KSB7XHJcbiAgdG9wOiA0OS45OTk5NzUwODE1JTtcclxuICBsZWZ0OiA1LjAwMDAwNTEyMTUlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuODc1cztcclxufVxyXG5cclxuLnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nID4gZGl2Om50aC1jaGlsZCg4KSB7XHJcbiAgdG9wOiAxOC4xNzk0NjQ5NzQlO1xyXG4gIGxlZnQ6IDE4LjE4MDM3MDA1MTglO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTJzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJhbGwtc3Bpbi1mYWRlLXJvdGF0ZSB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBiYWxsLXNwaW4tZmFkZSB7XHJcbiAgMCUsXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IC4yNTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjUpO1xyXG4gIH1cclxufVxyXG4vLyBzay1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZyB9fX1cclxuXHJcblxyXG4vLyBzay1jaGFzaW5nLWRvdHMge3t7XHJcbi5zay1jaGFzaW5nLWRvdHMge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICBhbmltYXRpb246IHNrLWNoYXNpbmdEb3RzLXJvdGF0ZSAyLjBzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuLnNrLWNoYXNpbmctZG90cyA+IGRpdiB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBcclxuICBhbmltYXRpb246IHNrLWNoYXNpbmdEb3RzLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2stY2hhc2luZy1kb3RzID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgdG9wOiBhdXRvO1xyXG4gIGJvdHRvbTogMDtcclxuICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG59XHJcbiAgXHJcbkBrZXlmcmFtZXMgc2stY2hhc2luZ0RvdHMtcm90YXRlIHtcclxuICAxMDAlIHsgXHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1jaGFzaW5nRG90cy1ib3VuY2Uge1xyXG4gIDAlLCAxMDAlIHsgXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgfSA1MCUgeyBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICB9XHJcbn1cclxuLy8gc2stY2hhc2luZy1kb3RzIH19fVxyXG5cclxuLy8gc2stY2lyY2xlIHt7e1xyXG4uc2stY2lyY2xlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTUlO1xyXG4gIGhlaWdodDogMTUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGFuaW1hdGlvbjogc2stY2lyY2xlLWJvdW5jZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoMykge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoNCkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoNSkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbn1cclxuXHJcbi5zay1jaXJjbGUgPiBkaXY6bnRoLWNoaWxkKDYpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG59XHJcblxyXG4uc2stY2lyY2xlID4gZGl2Om50aC1jaGlsZCg3KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoOCkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbn1cclxuXHJcbi5zay1jaXJjbGUgPiBkaXY6bnRoLWNoaWxkKDkpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG59XHJcblxyXG4uc2stY2lyY2xlID4gZGl2Om50aC1jaGlsZCgxMCkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbn1cclxuXHJcbi5zay1jaXJjbGUgPiBkaXY6bnRoLWNoaWxkKDExKSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoMTIpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG59XHJcblxyXG4uc2stY2lyY2xlID4gZGl2Om50aC1jaGlsZCgyKTo6YmVmb3JlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG59XHJcblxyXG4uc2stY2lyY2xlID4gZGl2Om50aC1jaGlsZCgzKTo6YmVmb3JlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0xcztcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoNCk6OmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoNSk6OmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoNik6OmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoNyk6OmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoOCk6OmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoOSk6OmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcclxufVxyXG5cclxuLnNrLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoMTApOjpiZWZvcmUge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbn1cclxuXHJcbi5zay1jaXJjbGUgPiBkaXY6bnRoLWNoaWxkKDExKTo6YmVmb3JlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjJzO1xyXG59XHJcblxyXG4uc2stY2lyY2xlID4gZGl2Om50aC1jaGlsZCgxMik6OmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1jaXJjbGUtYm91bmNlRGVsYXkge1xyXG4gIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9IDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG4vLyBzay1jaXJjbGUgfX19XHJcblxyXG4vLyBzay1jdWJlLWdyaWQge3t7XHJcbi5zay1jdWJlLWdyaWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5zay1jdWJlLWdyaWQgPiBkaXYge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgaGVpZ2h0OiAzMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGFuaW1hdGlvbjogc2stY3ViZUdyaWQtc2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0OyBcclxufSBcclxuLnNrLWN1YmUtZ3JpZCA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxufVxyXG5cclxuLnNrLWN1YmUtZ3JpZCA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcclxufVxyXG5cclxuLnNrLWN1YmUtZ3JpZCA+IGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxufVxyXG5cclxuLnNrLWN1YmUtZ3JpZCA+IGRpdjpudGgtY2hpbGQoNCkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxufVxyXG5cclxuLnNrLWN1YmUtZ3JpZCA+IGRpdjpudGgtY2hpbGQoNSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxufVxyXG5cclxuLnNrLWN1YmUtZ3JpZCA+IGRpdjpudGgtY2hpbGQoNikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcclxufVxyXG5cclxuLnNrLWN1YmUtZ3JpZCA+IGRpdjpudGgtY2hpbGQoNykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbn1cclxuXHJcbi5zay1jdWJlLWdyaWQgPiBkaXY6bnRoLWNoaWxkKDgpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbn1cclxuXHJcbi5zay1jdWJlLWdyaWQgPiBkaXY6bnRoLWNoaWxkKDkpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stY3ViZUdyaWQtc2NhbGVEZWxheSB7XHJcbiAgMCUsIDcwJSwgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgfSAzNSUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gIH0gXHJcbn1cclxuLy8gc2stY3ViZS1ncmlkIH19fVxyXG5cclxuLy8gc2stZG91YmxlLWJvdW5jZSB7e3tcclxuLnNrLWRvdWJsZS1ib3VuY2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnNrLWRvdWJsZS1ib3VuY2UgPiBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgXHJcbiAgYW5pbWF0aW9uOiBzay1kb3VibGVCb3VuY2UtYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zay1kb3VibGUtYm91bmNlID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1kb3VibGVCb3VuY2UtYm91bmNlIHtcclxuICAwJSwgMTAwJSB7IFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gIH0gNTAlIHsgXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgfVxyXG59XHJcbi8vIHNrLWRvdWJsZS1ib3VuY2UgfX19XHJcblxyXG4vLyBzay1mYWRpbmctY2lyY2xlIHt7e1xyXG4uc2stZmFkaW5nLWNpcmNsZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuICBcclxuLnNrLWZhZGluZy1jaXJjbGUgPiBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlID4gZGl2OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgaGVpZ2h0OiAxNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYW5pbWF0aW9uOiBzay1mYWRpbmdDaXJjbGUtRmFkZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlID4gZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoNCkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgPiBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG59XHJcbi5zay1mYWRpbmctY2lyY2xlID4gZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgPiBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoOCkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlID4gZGl2Om50aC1jaGlsZCg5KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgPiBkaXY6bnRoLWNoaWxkKDEwKSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgPiBkaXY6bnRoLWNoaWxkKDExKSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTsgXHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlID4gZGl2Om50aC1jaGlsZCgxMikge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7IFxyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoMik6OmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xczsgXHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlID4gZGl2Om50aC1jaGlsZCgzKTo6YmVmb3JlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0xczsgXHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlID4gZGl2Om50aC1jaGlsZCg0KTo6YmVmb3JlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjlzOyBcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgPiBkaXY6bnRoLWNoaWxkKDUpOjpiZWZvcmUge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IFxyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoNik6OmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC43czsgXHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlID4gZGl2Om50aC1jaGlsZCg3KTo6YmVmb3JlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjZzOyBcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgPiBkaXY6bnRoLWNoaWxkKDgpOjpiZWZvcmUge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7IFxyXG59XHJcbi5zay1mYWRpbmctY2lyY2xlID4gZGl2Om50aC1jaGlsZCg5KTo6YmVmb3JlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSA+IGRpdjpudGgtY2hpbGQoMTApOjpiZWZvcmUge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlID4gZGl2Om50aC1jaGlsZCgxMSk6OmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgPiBkaXY6bnRoLWNoaWxkKDEyKTo6YmVmb3JlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xyXG59XHJcbiAgXHJcbkBrZXlmcmFtZXMgc2stZmFkaW5nQ2lyY2xlLUZhZGVEZWxheSB7XHJcbiAgMCUsIDM5JSwgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9IFxyXG59XHJcbi8vIHNrLWZhZGluZy1jaXJjbGUgfX19XHJcblxyXG4vLyBzay1mb2xkaW5nLWN1YmUge3t7XHJcbi5zay1mb2xkaW5nLWN1YmUge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XHJcbn1cclxuXHJcbi5zay1mb2xkaW5nLWN1YmUgPiBkaXYge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgXHJcbn1cclxuXHJcbi5zay1mb2xkaW5nLWN1YmUgPiBkaXY6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICBhbmltYXRpb246IHNrLWZvbGRpbmdDdWJlLWFuZ2xlIDIuNHMgaW5maW5pdGUgbGluZWFyIGJvdGg7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbi5zay1mb2xkaW5nLWN1YmUgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWig5MGRlZyk7XHJcbn1cclxuXHJcbi5zay1mb2xkaW5nLWN1YmUgPiBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigyNzBkZWcpO1xyXG59XHJcblxyXG4uc2stZm9sZGluZy1jdWJlID4gZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooMTgwZGVnKTtcclxufVxyXG5cclxuLnNrLWZvbGRpbmctY3ViZSA+IGRpdjpudGgtY2hpbGQoMik6OmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG59XHJcblxyXG4uc2stZm9sZGluZy1jdWJlID4gZGl2Om50aC1jaGlsZCgzKTo6YmVmb3JlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOXM7XHJcbn1cclxuXHJcbi5zay1mb2xkaW5nLWN1YmUgPiBkaXY6bnRoLWNoaWxkKDQpOjpiZWZvcmUge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC42czsgXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stZm9sZGluZ0N1YmUtYW5nbGUge1xyXG4gIDAlLCAxMCUge1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7IFxyXG4gIH0gMjUlLCA3NSUge1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7IFxyXG4gIH0gOTAlLCAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7IFxyXG4gIH1cclxufVxyXG4vLyBzay1mb2xkaW5nLWN1YmUgfX19XHJcblxyXG4vLyBzay1wdWxzZSB7e3tcclxuLnNrLXB1bHNlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uc2stcHVsc2UgPiBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7ICBcclxuICBhbmltYXRpb246IHNrLXB1bHNlLXNjYWxlT3V0IDEuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuICBcclxuQGtleWZyYW1lcyBzay1wdWxzZS1zY2FsZU91dCB7XHJcbiAgMCUgeyBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfSAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbi8vIHNrLXB1bHNlIH19fVxyXG5cclxuLy8gc2stcmVjdGFuZ2xlLWJvdW5jZSB7e3tcclxuLnNrLXJlY3RhbmdsZS1ib3VuY2Uge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxufVxyXG5cclxuLnNrLXJlY3RhbmdsZS1ib3VuY2UgPiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIFxyXG4gIGFuaW1hdGlvbjogc2stcmVjdGFuZ2xlQm91bmNlLXN0cmV0Y2hEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZSA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbn1cclxuXHJcbi5zay1yZWN0YW5nbGUtYm91bmNlID4gZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxufVxyXG5cclxuLnNrLXJlY3RhbmdsZS1ib3VuY2UgPiBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZSA+IGRpdjpudGgtY2hpbGQoNSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stcmVjdGFuZ2xlQm91bmNlLXN0cmV0Y2hEZWxheSB7XHJcbiAgMCUsIDQwJSwgMTAwJSB7IFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICB9ICAyMCUgeyBcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMCk7XHJcbiAgfVxyXG59XHJcbi8vIHNrLXJlY3RhbmdsZS1ib3VuY2UgfX19XHJcblxyXG4vLyBzay1yZWN0YW5nbGUtYm91bmNlIHt7e1xyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eSxcclxuLnNrLXJlY3RhbmdsZS1ib3VuY2UtcGFydHkgPiBkaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwO1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eSA+IGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXI6IDAgc29saWQgY3VycmVudENvbG9yO1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eSA+IGRpdiB7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByZWN0YW5nbGUtYm91bmNlLXBhcnR5O1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eSA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjQzcztcclxuICBhbmltYXRpb24tZGVsYXk6IC0uMjNzO1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eSA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjYycztcclxuICBhbmltYXRpb24tZGVsYXk6IC0uMzJzO1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eSA+IGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjQzcztcclxuICBhbmltYXRpb24tZGVsYXk6IC0uNDRzO1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eSA+IGRpdjpudGgtY2hpbGQoNCkge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjhzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLS4zMXM7XHJcbn1cclxuXHJcbi5zay1yZWN0YW5nbGUtYm91bmNlLXBhcnR5ID4gZGl2Om50aC1jaGlsZCg1KSB7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNzRzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLS4yNHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSguNCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgfVxyXG59XHJcbi8vIHNrLXJlY3RhbmdsZS1ib3VuY2UtcGFydHkgfX19XHJcblxyXG4vLyBzay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dCB7e3tcclxuLnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0LFxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQgPiBkaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxufVxyXG5cclxuLnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0ID4gZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xyXG4gIGJvcmRlcjogMCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbn1cclxuXHJcbi5zay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dCA+IGRpdiB7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGFuaW1hdGlvbjogcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQgLjlzIGluZmluaXRlIGN1YmljLWJlemllciguODUsIC4yNSwgLjM3LCAuODUpO1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQgPiBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0uOXM7XHJcbn1cclxuXHJcbi5zay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dCA+IGRpdjpudGgtY2hpbGQoMiksXHJcbi5zay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dCA+IGRpdjpudGgtY2hpbGQoNCkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLS43cztcclxufVxyXG5cclxuLnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0ID4gZGl2Om50aC1jaGlsZCgxKSxcclxuLnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0ID4gZGl2Om50aC1jaGlsZCg1KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLjVzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgxKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGV5KC40KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgxKTtcclxuICB9XHJcbn1cclxuLy8gc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQge3t7XHJcblxyXG4vLyBzay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dC1yYXBpZCB7e3tcclxuLnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0LXJhcGlkLFxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQtcmFwaWQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxufVxyXG5cclxuLnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0LXJhcGlkID4gZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xyXG4gIGJvcmRlcjogMCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbn1cclxuXHJcbi5zay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dC1yYXBpZCA+IGRpdiB7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGFuaW1hdGlvbjogcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQtcmFwaWQgLjlzIGluZmluaXRlIGN1YmljLWJlemllciguMTEsIC40OSwgLjM4LCAuNzgpO1xyXG59XHJcblxyXG4uc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0uOXM7XHJcbn1cclxuXHJcbi5zay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoMiksXHJcbi5zay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoNCkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLS42NXM7XHJcbn1cclxuXHJcbi5zay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoMSksXHJcbi5zay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoNSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLS40cztcclxufVxyXG5cclxuQGtleWZyYW1lcyByZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dC1yYXBpZCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMSk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxleSguNCk7XHJcbiAgICB9XHJcbiAgOTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xyXG4gIH1cclxufVxyXG4vLyBzay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dC1yYXBpZCB9fX1cclxuXHJcbi8vIHNrLXJvdGF0aW5nLXBsYW5lIHt7e1xyXG4uc2stcm90YXRpbmctcGxhbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uc2stcm90YXRpbmctcGxhbmUgPiBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcblxyXG4gIGFuaW1hdGlvbjogc2stcm90YXRlUGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1yb3RhdGVQbGFuZSB7XHJcbiAgMCUgeyBcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcclxuICB9IDUwJSB7IFxyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgfSAxMDAlIHsgXHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcclxuICB9XHJcbn1cclxuLy8gc2stcm90YXRpbmctcGxhbmUgfX19XHJcblxyXG4vLyBzay1zcXVhcmUtamVsbHktYm94IHt7e1xyXG4uc2stc3F1YXJlLWplbGx5LWJveCxcclxuLnNrLXNxdWFyZS1qZWxseS1ib3ggPiBkaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc2stc3F1YXJlLWplbGx5LWJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxufVxyXG5cclxuLnNrLXNxdWFyZS1qZWxseS1ib3ggPiBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgYm9yZGVyOiAwIHNvbGlkIGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnNrLXNxdWFyZS1qZWxseS1ib3ggPiBkaXY6bnRoLWNoaWxkKDEpLFxyXG4uc2stc3F1YXJlLWplbGx5LWJveCA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2stc3F1YXJlLWplbGx5LWJveCA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIHRvcDogLTI1JTtcclxuICB6LWluZGV4OiA5OTk5NztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGFuaW1hdGlvbjogc3F1YXJlLWplbGx5LWJveC1hbmltYXRlIC42cyAtLjFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLnNrLXNxdWFyZS1qZWxseS1ib3ggPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBib3R0b206IC05JTtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvcGFjaXR5OiAuMjtcclxuICBhbmltYXRpb246IHNxdWFyZS1qZWxseS1ib3gtc2hhZG93IC42cyAtLjFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcXVhcmUtamVsbHktYm94LWFuaW1hdGUge1xyXG4gIDE3JSB7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAlO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1JSkgcm90YXRlKDIyLjVkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKSBzY2FsZSgxLCAuOSkgcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpIHJvdGF0ZSg2Ny41ZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDkwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3F1YXJlLWplbGx5LWJveC1zaGFkb3cge1xyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUsIDEpO1xyXG4gIH1cclxufVxyXG4vLyBzay1zcXVhcmUtamVsbHktYm94IH19fSBcclxuXHJcbi8vIHNrLXNxdWFyZS1sb2FkZXIge3t7XHJcbi5zay1zcXVhcmUtbG9hZGVyLFxyXG4uc2stc3F1YXJlLWxvYWRlciA+IGRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5zay1zcXVhcmUtbG9hZGVyIHtcclxuICBmb250LXNpemU6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2stc3F1YXJlLWxvYWRlciA+IGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXI6IDAgc29saWQgY3VycmVudENvbG9yO1xyXG59XHJcblxyXG4uc2stc3F1YXJlLWxvYWRlciA+IGRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYW5pbWF0aW9uOiBzcXVhcmUtbG9hZGVyIDJzIGluZmluaXRlIGVhc2U7XHJcbn1cclxuXHJcbi5zay1zcXVhcmUtbG9hZGVyID4gZGl2OmFmdGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBhbmltYXRpb246IHNxdWFyZS1sb2FkZXItaW5uZXIgMnMgaW5maW5pdGUgZWFzZS1pbjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcXVhcmUtbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcXVhcmUtbG9hZGVyLWlubmVyIHtcclxuICAwJSB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG4vLyBzay1zcXVhcmUtbG9hZGVyIH19fVxyXG5cclxuLy8gc2stdGhyZWUtYm91bmNlIHt7e1xyXG4uc2stdGhyZWUtYm91bmNlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4gIFxyXG4uc2stdGhyZWUtYm91bmNlID4gZGl2IHtcclxuICBtYXJnaW4tdG9wOiAzNSU7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFuaW1hdGlvbjogc2stdGhyZWVCb3VuY2UtYm91bmNlRGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG59XHJcblxyXG4uYm90dG9tLWNlbnRlciA+IC5zay10aHJlZS1ib3VuY2UgPiBkaXYsXHJcbi5ib3R0b20tbGVmdCA+IC5zay10aHJlZS1ib3VuY2UgPiBkaXYsXHJcbi5ib3R0b20tcmlnaHQgPiAuc2stdGhyZWUtYm91bmNlID4gZGl2IHtcclxuICBtYXJnaW4tdG9wOiA3MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvcC1jZW50ZXIgPiAuc2stdGhyZWUtYm91bmNlID4gZGl2LFxyXG4udG9wLWxlZnQgPiAuc2stdGhyZWUtYm91bmNlID4gZGl2LFxyXG4udG9wLXJpZ2h0ID4gLnNrLXRocmVlLWJvdW5jZSA+IGRpdiB7XHJcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcbiAgXHJcbi5zay10aHJlZS1ib3VuY2UgPiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxufVxyXG4gIFxyXG4uc2stdGhyZWUtYm91bmNlID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbn1cclxuICBcclxuQGtleWZyYW1lcyBzay10aHJlZUJvdW5jZS1ib3VuY2VEZWxheSB7XHJcbiAgMCUsIDgwJSwgMTAwJSB7IFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9IDQwJSB7IFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gIH1cclxufVxyXG4vLyBzay10aHJlZS1ib3VuY2UgfX19XHJcblxyXG4vLyBzay10aHJlZS1zdHJpbmdzXHJcbi5zay10aHJlZS1zdHJpbmdzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zay10aHJlZS1zdHJpbmdzID4gZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc2stdGhyZWUtc3RyaW5ncyA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHRvcDogMCU7XHJcbiAgYW5pbWF0aW9uOiBzay10aHJlZVN0cmluZ3Mtcm90YXRlT25lIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgY3VycmVudENvbG9yO1xyXG59XHJcblxyXG4uc2stdGhyZWUtc3RyaW5ncyA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gIHJpZ2h0OiAwJTtcclxuICB0b3A6IDAlO1xyXG4gIGFuaW1hdGlvbjogc2stdGhyZWVTdHJpbmdzLXJvdGF0ZVR3byAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgY3VycmVudENvbG9yO1xyXG59XHJcblxyXG4uc2stdGhyZWUtc3RyaW5ncyA+IGRpdjpudGgtY2hpbGQoMykge1xyXG4gIHJpZ2h0OiAwJTtcclxuICBib3R0b206IDAlO1xyXG4gIGFuaW1hdGlvbjogc2stdGhyZWVTdHJpbmdzLXJvdGF0ZVRocmVlIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgY3VycmVudENvbG9yO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNrLXRocmVlU3RyaW5ncy1yb3RhdGVPbmUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgfSAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stdGhyZWVTdHJpbmdzLXJvdGF0ZVR3byB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDUwZGVnKSByb3RhdGVZKDEwZGVnKSByb3RhdGVaKDBkZWcpO1xyXG4gIH0gMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoNTBkZWcpIHJvdGF0ZVkoMTBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stdGhyZWVTdHJpbmdzLXJvdGF0ZVRocmVlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMGRlZyk7XHJcbiAgfSAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gc2std2FuZGVyaW5nLWN1YmVzIHt7e1xyXG4uc2std2FuZGVyaW5nLWN1YmVzIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zay13YW5kZXJpbmctY3ViZXMgPiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICB3aWR0aDogMjUlO1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBcclxuICBhbmltYXRpb246IHNrLXdhbmRlcmluZ0N1YmVzLWN1YmVNb3ZlIDEuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuICBcclxuLnNrLXdhbmRlcmluZy1jdWJlcyA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2std2FuZGVyaW5nQ3ViZXMtY3ViZU1vdmUge1xyXG4gIDI1JSB7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI5MCUpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XHJcbiAgfSA1MCUgeyBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyOTAlKSB0cmFuc2xhdGVZKDI5MCUpIHJvdGF0ZSgtMTc5ZGVnKTtcclxuICB9IDUwLjElIHsgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjkwJSkgdHJhbnNsYXRlWSgyOTAlKSByb3RhdGUoLTE4MGRlZyk7XHJcbiAgfSA3NSUgeyBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMjkwJSkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSk7XHJcbiAgfSAxMDAlIHsgXHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcclxuICB9XHJcbn1cclxuLy8gc2std2FuZGVyaW5nLWN1YmVzIH19fVxyXG4iXX0= */"

/***/ }),

/***/ "./projects/ngx-ui-loader/src/lib/core/ngx-ui-loader.contants.ts":
/*!***********************************************************************!*\
  !*** ./projects/ngx-ui-loader/src/lib/core/ngx-ui-loader.contants.ts ***!
  \***********************************************************************/
/*! exports provided: DEFAULT_TASK_ID, DEFAULT_MASTER_LOADER_ID, CLOSING_TIME, WAITING_FOR_OVERLAY_DISAPPEAR, SPINNER_CONFIG, DEFAULT_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TASK_ID", function() { return DEFAULT_TASK_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MASTER_LOADER_ID", function() { return DEFAULT_MASTER_LOADER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSING_TIME", function() { return CLOSING_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WAITING_FOR_OVERLAY_DISAPPEAR", function() { return WAITING_FOR_OVERLAY_DISAPPEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER_CONFIG", function() { return SPINNER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function() { return DEFAULT_CONFIG; });
/* harmony import */ var _ngx_ui_loader_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-ui-loader.enums */ "./projects/ngx-ui-loader/src/lib/core/ngx-ui-loader.enums.ts");

/**
 * The default value of task id
 */
var DEFAULT_TASK_ID = 'default';
/**
 * The default value of loader id
 */
var DEFAULT_MASTER_LOADER_ID = 'master';
var CLOSING_TIME = 501;
var WAITING_FOR_OVERLAY_DISAPPEAR = 200;
/**
 * The configuration of spinners
 */
var SPINNER_CONFIG = {
    'ball-scale-multiple': {
        divs: 3,
        class: 'sk-ball-scale-multiple'
    },
    'ball-spin': {
        divs: 8,
        class: 'sk-ball-spin'
    },
    'ball-spin-clockwise': {
        divs: 8,
        class: 'sk-ball-spin-clockwise'
    },
    'ball-spin-clockwise-fade-rotating': {
        divs: 8,
        class: 'sk-ball-spin-clockwise-fade-rotating'
    },
    'ball-spin-fade-rotating': {
        divs: 8,
        class: 'sk-ball-spin-fade-rotating'
    },
    'chasing-dots': {
        divs: 2,
        class: 'sk-chasing-dots'
    },
    'circle': {
        divs: 12,
        class: 'sk-circle'
    },
    'cube-grid': {
        divs: 9,
        class: 'sk-cube-grid'
    },
    'double-bounce': {
        divs: 2,
        class: 'sk-double-bounce'
    },
    'fading-circle': {
        divs: 12,
        class: 'sk-fading-circle'
    },
    'folding-cube': {
        divs: 4,
        class: 'sk-folding-cube'
    },
    'pulse': {
        divs: 1,
        class: 'sk-pulse'
    },
    'rectangle-bounce': {
        divs: 5,
        class: 'sk-rectangle-bounce'
    },
    'rectangle-bounce-party': {
        divs: 5,
        class: 'sk-rectangle-bounce-party'
    },
    'rectangle-bounce-pulse-out': {
        divs: 5,
        class: 'sk-rectangle-bounce-pulse-out'
    },
    'rectangle-bounce-pulse-out-rapid': {
        divs: 5,
        class: 'sk-rectangle-bounce-pulse-out-rapid'
    },
    'rotating-plane': {
        divs: 1,
        class: 'sk-rotating-plane'
    },
    'square-jelly-box': {
        divs: 2,
        class: 'sk-square-jelly-box'
    },
    'square-loader': {
        divs: 1,
        class: 'sk-square-loader'
    },
    'three-bounce': {
        divs: 3,
        class: 'sk-three-bounce'
    },
    'three-strings': {
        divs: 3,
        class: 'sk-three-strings'
    },
    'wandering-cubes': {
        divs: 2,
        class: 'sk-wandering-cubes'
    },
};
/**
 * The default configuration of ngx-ui-loader
 */
var DEFAULT_CONFIG = {
    bgsColor: '#00ACC1',
    bgsOpacity: 0.5,
    bgsPosition: _ngx_ui_loader_enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].bottomRight,
    bgsSize: 60,
    bgsType: _ngx_ui_loader_enums__WEBPACK_IMPORTED_MODULE_0__["SPINNER"].ballSpinClockwise,
    blur: 5,
    fgsColor: '#00ACC1',
    fgsPosition: _ngx_ui_loader_enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].centerCenter,
    fgsSize: 60,
    fgsType: _ngx_ui_loader_enums__WEBPACK_IMPORTED_MODULE_0__["SPINNER"].ballSpinClockwise,
    gap: 24,
    logoPosition: _ngx_ui_loader_enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].centerCenter,
    logoSize: 120,
    logoUrl: '',
    masterLoaderId: DEFAULT_MASTER_LOADER_ID,
    overlayBorderRadius: '0',
    overlayColor: 'rgba(40, 40, 40, 0.8)',
    pbColor: '#00ACC1',
    pbDirection: _ngx_ui_loader_enums__WEBPACK_IMPORTED_MODULE_0__["PB_DIRECTION"].leftToRight,
    pbThickness: 3,
    hasProgressBar: true,
    text: '',
    textColor: '#FFFFFF',
    textPosition: _ngx_ui_loader_enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].centerCenter,
    threshold: 500
};


/***/ }),

/***/ "./projects/ngx-ui-loader/src/lib/core/ngx-ui-loader.enums.ts":
/*!********************************************************************!*\
  !*** ./projects/ngx-ui-loader/src/lib/core/ngx-ui-loader.enums.ts ***!
  \********************************************************************/
/*! exports provided: SPINNER, POSITION, PB_DIRECTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER", function() { return SPINNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSITION", function() { return POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PB_DIRECTION", function() { return PB_DIRECTION; });
/**
 * Available spinner types
 */
var SPINNER;
(function (SPINNER) {
    SPINNER["ballScaleMultiple"] = "ball-scale-multiple";
    SPINNER["ballSpin"] = "ball-spin";
    SPINNER["ballSpinClockwise"] = "ball-spin-clockwise";
    SPINNER["ballSpinClockwiseFadeRotating"] = "ball-spin-clockwise-fade-rotating";
    SPINNER["ballSpinFadeRotating"] = "ball-spin-fade-rotating";
    SPINNER["chasingDots"] = "chasing-dots";
    SPINNER["circle"] = "circle";
    SPINNER["cubeGrid"] = "cube-grid";
    SPINNER["doubleBounce"] = "double-bounce";
    SPINNER["fadingCircle"] = "fading-circle";
    SPINNER["foldingCube"] = "folding-cube";
    SPINNER["pulse"] = "pulse";
    SPINNER["rectangleBounce"] = "rectangle-bounce";
    SPINNER["rectangleBounceParty"] = "rectangle-bounce-party";
    SPINNER["rectangleBouncePulseOut"] = "rectangle-bounce-pulse-out";
    SPINNER["rectangleBouncePulseOutRapid"] = "rectangle-bounce-pulse-out-rapid";
    SPINNER["rotatingPlane"] = "rotating-plane";
    SPINNER["squareJellyBox"] = "square-jelly-box";
    SPINNER["squareLoader"] = "square-loader";
    SPINNER["threeBounce"] = "three-bounce";
    SPINNER["threeStrings"] = "three-strings";
    SPINNER["wanderingCubes"] = "wandering-cubes";
})(SPINNER || (SPINNER = {}));
/**
 * Available postions
 */
var POSITION;
(function (POSITION) {
    POSITION["bottomCenter"] = "bottom-center";
    POSITION["bottomLeft"] = "bottom-left";
    POSITION["bottomRight"] = "bottom-right";
    POSITION["centerCenter"] = "center-center";
    POSITION["centerLeft"] = "center-left";
    POSITION["centerRight"] = "center-right";
    POSITION["topCenter"] = "top-center";
    POSITION["topLeft"] = "top-left";
    POSITION["topRight"] = "top-right";
})(POSITION || (POSITION = {}));
/**
 * Progress bar directions
 */
var PB_DIRECTION;
(function (PB_DIRECTION) {
    PB_DIRECTION["leftToRight"] = "ltr";
    PB_DIRECTION["rightToLeft"] = "rtl";
})(PB_DIRECTION || (PB_DIRECTION = {}));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-ui-loader\r\n  [fgsColor]=\"demoService.config.fgsColor\"\r\n  [fgsPosition]=\"demoService.config.fgsPosition\"\r\n  [fgsSize]=\"demoService.config.fgsSize\"\r\n  [fgsType]=\"demoService.config.fgsType\"\r\n  [bgsColor]=\"demoService.config.bgsColor\"\r\n  [bgsOpacity]=\"demoService.config.bgsOpacity\"\r\n  [bgsPosition]=\"demoService.config.bgsPosition\"\r\n  [bgsSize]=\"demoService.config.bgsSize\"\r\n  [bgsType]=\"demoService.config.bgsType\"\r\n  [gap]=\"demoService.config.gap\"\r\n  [logoPosition]=\"demoService.config.logoPosition\"\r\n  [logoSize]=\"demoService.config.logoSize\"\r\n  [logoUrl]=\"demoService.config.logoUrl\"\r\n  [overlayColor]=\"demoService.config.overlayColor\"\r\n  [pbColor]=\"demoService.config.pbColor\"\r\n  [pbDirection]=\"demoService.config.pbDirection\"\r\n  [pbThickness]=\"demoService.config.pbThickness\"\r\n  [hasProgressBar]=\"demoService.config.hasProgressBar\"\r\n  [text]=\"demoService.config.text\"\r\n  [textColor]=\"demoService.config.textColor\"\r\n  [textPosition]=\"demoService.config.textPosition\"></ngx-ui-loader>\r\n\r\n<div ngxUiLoaderBlurred [blur]=\"demoService.config.blur\">\r\n  <mat-toolbar color=\"primary\">\r\n    <span>\r\n      <a mat-button href=\"https://www.npmjs.com/package/ngx-ui-loader\" target=\"_blank\">\r\n        <mat-icon fontIcon=\"mdi-angular\" fontSet=\"mdi\" class=\"mdi-24px\"></mat-icon>NGX-UI-LOADER\r\n      </a>\r\n    </span>\r\n    <span class=\"fill-space\"></span>\r\n    <span>\r\n      <a mat-button href=\"https://github.com/t-ho/ngx-ui-loader\" target=\"_blank\">\r\n        <mat-icon fontIcon=\"mdi-github-circle\" fontSet=\"mdi\" class=\"mdi-24px\"></mat-icon>Github\r\n      </a>\r\n    </span>\r\n  </mat-toolbar>\r\n\r\n  <h2>NGX-UI-LOADER</h2>\r\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" fxLayoutGap=\"8px\">\r\n    <a href=\"https://www.npmjs.com/package/ngx-ui-loader\" target=\"_blank\">\r\n      <img src=\"https://badge.fury.io/js/ngx-ui-loader.svg\" alt=\"NPM Version\" height=\"18\">\r\n    </a>\r\n    <a href=\"https://travis-ci.org/t-ho/ngx-ui-loader\" target=\"_blank\">\r\n      <img src=\"https://travis-ci.org/t-ho/ngx-ui-loader.svg?branch=master\" alt=\"Travis CI\" height=\"18\">\r\n    </a>\r\n    <a href=\"https://codecov.io/gh/t-ho/ngx-ui-loader\">\r\n      <img src=\"https://codecov.io/gh/t-ho/ngx-ui-loader/branch/master/graph/badge.svg\" alt=\"Code Coverage\" height=\"18\">\r\n    </a>\r\n    <a href=\"https://www.npmjs.com/package/ngx-ui-loader\" target=\"_blank\">\r\n      <img src=\"https://img.shields.io/npm/dt/ngx-ui-loader.svg\" alt=\"Total Download\" height=\"18\">\r\n    </a>\r\n    <a href=\"https://www.npmjs.com/package/ngx-ui-loader\" target=\"_blank\">\r\n      <img src=\"https://img.shields.io/npm/dw/ngx-ui-loader.svg\" alt=\"Downloads Per Week\" height=\"18\">\r\n    </a>\r\n    <a href=\"https://www.jsdelivr.com/package/npm/ngx-ui-loader\" target=\"_blank\">\r\n      <img src=\"https://data.jsdelivr.com/v1/package/npm/ngx-ui-loader/badge?style=rounded\" alt=\"jsDelivr\" height=\"18\">\r\n    </a>\r\n    <a href=\"https://www.npmjs.com/package/ngx-ui-loader\" target=\"_blank\">\r\n      <img src=\"https://img.shields.io/npm/l/ngx-ui-loader.svg\" alt=\"MIT License\" height=\"18\">\r\n    </a>\r\n  </div>\r\n  <h3>A fully customizable loader/spinner for angular 5 and beyond</h3>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-space {\n  flex: 1 1 auto; }\n\nh2, h3 {\n  font-family: Roboto, \"Heltical Neue\", sans-serif;\n  text-align: center;\n  margin-bottom: 10px; }\n\nh3 {\n  margin-top: 10px; }\n\nmat-slider {\n  width: 100%; }\n\n.place-holder {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 75%;\n  font-weight: 500;\n  font-style: normal; }\n\n.p-12 {\n  padding: 12px; }\n\n.mat-icon.mdi-24px {\n  line-height: 24px;\n  margin-right: 4px;\n  margin-bottom: 3px; }\n\n.config-info {\n  margin: 8px 16px 0 16px; }\n\n.config-info pre {\n    margin: 0;\n    overflow-x: auto; }\n\n.mat-elevation-z4 {\n  background-color: rgba(63, 81, 181, 0.3); }\n\n.mat-list-item code {\n  font-size: 75%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFNvdXJjZVxcUHJpdmF0XFxuZ3gtdWktbG9hZGVyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxpREFBaUQ7RUFDakQsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx1QkFBdUIsRUFBQTs7QUFEekI7SUFJSSxTQUFTO0lBQ1QsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0Usd0NBQXdDLEVBQUE7O0FBRzFDO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGwtc3BhY2Uge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5oMiwgaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdGljYWwgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxubWF0LXNsaWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wbGFjZS1ob2xkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxuICBmb250LXNpemU6IDc1JTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLnAtMTIge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvbi5tZGktMjRweCB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4uY29uZmlnLWluZm8ge1xyXG4gIG1hcmdpbjogOHB4IDE2cHggMCAxNnB4O1xyXG5cclxuICBwcmUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtZWxldmF0aW9uLXo0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjMpO1xyXG59XHJcblxyXG4ubWF0LWxpc3QtaXRlbSBjb2RlIHtcclxuICBmb250LXNpemU6IDc1JTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_ui_loader_demo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-ui-loader-demo.service */ "./src/app/ngx-ui-loader-demo.service.ts");



var AppComponent = /** @class */ (function () {
    /**
     * Constructor
     * @param demoService
     */
    function AppComponent(demoService) {
        this.demoService = demoService;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_ui_loader_demo_service__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderDemoService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ui-loader */ "./dist/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _spinner_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spinner-demo.component */ "./src/app/spinner-demo.component.ts");
/* harmony import */ var _multi_loader_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./multi-loader-demo.component */ "./src/app/multi-loader-demo.component.ts");
/* harmony import */ var _ngx_ui_loader_demo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ngx-ui-loader-demo.component */ "./src/app/ngx-ui-loader-demo.component.ts");
/* harmony import */ var _ngx_ui_loader_demo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ngx-ui-loader-demo.service */ "./src/app/ngx-ui-loader-demo.service.ts");
/* harmony import */ var _ngx_ui_loader_controller_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ngx-ui-loader-controller.component */ "./src/app/ngx-ui-loader-controller.component.ts");

















var ngxUiLoaderConfig = {
// bgsColor: '#OOACC1',
// bgsOpacity: 0.5,
// bgsPosition: POSITION.bottomCenter,
// bgsSize: 60,
// bgsType: SPINNER.rectangleBounce,
// fgsColor: '#00ACC1',
// fgsPosition: POSITION.centerCenter,
// fgsSize: 60,
// fgsType: SPINNER.chasingDots,
// logoUrl: 'assets/angular.png',
// pbColor: '#FF0000',
// pbDirection: PB_DIRECTION.leftToRight,
// pbThickness: 5,
// text: 'Welcome to ngx-ui-loader',
// textColor: '#FFFFFF',
// textPosition: POSITION.centerCenter
};
var routes = [
    {
        path: 'spinners',
        component: _spinner_demo_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerDemoComponent"]
    },
    {
        path: 'multiloader',
        component: _multi_loader_demo_component__WEBPACK_IMPORTED_MODULE_13__["MultiLoaderDemoComponent"]
    },
    {
        path: '',
        component: _ngx_ui_loader_demo_component__WEBPACK_IMPORTED_MODULE_14__["NgxUiLoaderDemoComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _spinner_demo_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerDemoComponent"],
                _multi_loader_demo_component__WEBPACK_IMPORTED_MODULE_13__["MultiLoaderDemoComponent"],
                _ngx_ui_loader_demo_component__WEBPACK_IMPORTED_MODULE_14__["NgxUiLoaderDemoComponent"],
                _ngx_ui_loader_controller_component__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderControllerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderRouterModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderHttpModule"],
            ],
            providers: [_ngx_ui_loader_demo_service__WEBPACK_IMPORTED_MODULE_15__["NgxUiLoaderDemoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/multi-loader-demo.component.html":
/*!**************************************************!*\
  !*** ./src/app/multi-loader-demo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" style=\"margin-top: 12px\">\r\n  <div fxFlex=\"100\" fxFlex.gt-xs=\"1200\" fxLayout=\"row wrap\" fxLayoutAlign=\"center start\">\r\n    <div fxFlex.xs=\"90\" fxFlex.sm=\"70\" fxFlex=\"40\" class=\"container mat-elevation-z4 master\">\r\n      <app-ngx-ui-loader-controller [loader]=\"masterLoader\"></app-ngx-ui-loader-controller>\r\n    </div>\r\n    <div *ngFor=\"let l of loaders\" fxFlex.xs=\"90\" fxFlex.sm=\"70\" fxFlex=\"40\" class=\"container mat-elevation-z4\">\r\n      <div fxFlex=\"100\" [loaderId]=\"l.loaderId\" ngxUiLoaderBlurred>\r\n        <app-ngx-ui-loader-controller [loader]=\"l\"></app-ngx-ui-loader-controller>\r\n      </div>\r\n      <ngx-ui-loader\r\n        [hasProgressBar]=\"l.hasProgressBar\"\r\n        [loaderId]=\"l.loaderId\"\r\n        [logoUrl]=\"l.logoUrl\"\r\n        [logoSize]=\"l.logoSize\"\r\n        [text]=\"l.text\"\r\n        [fgsType]=\"l.spinnerType\"\r\n        [bgsType]=\"l.spinnerType\"></ngx-ui-loader>\r\n    </div>\r\n  </div>\r\n  <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"center\" style=\"margin-top: 24px; margin-bottom: 24px\">\r\n    <a mat-raised-button color=\"primary\" [routerLink]=\"'/'\">Back</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/multi-loader-demo.component.scss":
/*!**************************************************!*\
  !*** ./src/app/multi-loader-demo.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2, h3 {\n  font-family: Roboto, \"Heltical Neue\", sans-serif;\n  text-align: center;\n  margin-bottom: 10px; }\n\n.container {\n  position: relative;\n  margin: 12px;\n  height: 300px; }\n\n.mat-elevation-z4 {\n  background-color: rgba(63, 81, 181, 0.3); }\n\n.mat-elevation-z4.master {\n    background-color: rgba(63, 81, 181, 0.6); }\n\nmat-slider {\n  width: 100%; }\n\nspan code {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 100%;\n  font-weight: 700;\n  font-style: normal; }\n\n.mat-list-item code {\n  font-size: 75%; }\n\n.info {\n  background-color: #e6e6e6;\n  height: 400px; }\n\n.info pre {\n    margin: 0;\n    overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFNvdXJjZVxcUHJpdmF0XFxuZ3gtdWktbG9hZGVyL3NyY1xcYXBwXFxtdWx0aS1sb2FkZXItZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFnRDtFQUNoRCxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSx3Q0FBd0MsRUFBQTs7QUFEMUM7SUFJSSx3Q0FBd0MsRUFBQTs7QUFJNUM7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWEsRUFBQTs7QUFGZjtJQUtJLFNBQVM7SUFDVCxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tdWx0aS1sb2FkZXItZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyLCBoMyB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx0aWNhbCBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDEycHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLm1hdC1lbGV2YXRpb24tejQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDgxLCAxODEsIDAuMyk7XHJcblxyXG4gICYubWFzdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDgxLCAxODEsIDAuNik7XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtc2xpZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuc3BhbiBjb2RlIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1pdGVtIGNvZGUge1xyXG4gIGZvbnQtc2l6ZTogNzUlO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG5cclxuICAmIHByZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/multi-loader-demo.component.ts":
/*!************************************************!*\
  !*** ./src/app/multi-loader-demo.component.ts ***!
  \************************************************/
/*! exports provided: MultiLoaderDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiLoaderDemoComponent", function() { return MultiLoaderDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./dist/ngx-ui-loader/fesm5/ngx-ui-loader.js");



var LOGO_URL = 'assets/angular.png';
var MultiLoaderDemoComponent = /** @class */ (function () {
    function MultiLoaderDemoComponent(ngxUiLoaderService) {
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.masterLoader = this.ngxUiLoaderService.getLoader();
        this.loaders = [
            {
                hasProgressBar: true,
                loaderId: 'loader-01',
                logoUrl: LOGO_URL,
                logoSize: 80,
                isMaster: false,
                spinnerType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["SPINNER"].ballScaleMultiple,
            },
            {
                hasProgressBar: false,
                loaderId: 'loader-02',
                isMaster: false,
                spinnerType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["SPINNER"].chasingDots,
                text: 'NO progress bar'
            },
            {
                hasProgressBar: true,
                loaderId: 'loader-03',
                isMaster: false,
                spinnerType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["SPINNER"].wanderingCubes,
            },
        ];
    }
    MultiLoaderDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-loader-demo',
            template: __webpack_require__(/*! ./multi-loader-demo.component.html */ "./src/app/multi-loader-demo.component.html"),
            styles: [__webpack_require__(/*! ./multi-loader-demo.component.scss */ "./src/app/multi-loader-demo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]])
    ], MultiLoaderDemoComponent);
    return MultiLoaderDemoComponent;
}());



/***/ }),

/***/ "./src/app/ngx-ui-loader-controller.component.html":
/*!*********************************************************!*\
  !*** ./src/app/ngx-ui-loader-controller.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <mat-list role=\"list\" fxFlex=\"100\" *ngIf=\"loader\">\r\n    <h3><code>loaderId = \"{{loader.loaderId}}\"</code> {{loader.isMaster ? '- (master loader)' : ''}}</h3>\r\n    <mat-list-item role=\"listitem\">\r\n      <mat-slide-toggle (change)=\"fgSlideChange($event.checked, 3000)\"\r\n          [(checked)]=\"foregroundStarted['default']\">\r\n        {{foregroundStarted['default'] ? 'stop' : 'start'}}{{loader.isMaster ? '()' : 'Loader(\"' + loader.loaderId +'\")'}} - 3 seconds\r\n      </mat-slide-toggle>\r\n    </mat-list-item>\r\n    <mat-list-item role=\"listitem\">\r\n      <mat-slide-toggle (change)=\"fgSlideChange($event.checked, 15000, 'task-01')\"\r\n          [(checked)]=\"foregroundStarted['task-01']\">\r\n        {{foregroundStarted['task-01'] ? 'stop' : 'start'}}{{loader.isMaster ? '(\"task-01\")' : 'Loader(\"' + loader.loaderId + '\", \"task-01\")'}} - 15 seconds\r\n      </mat-slide-toggle>\r\n    </mat-list-item>\r\n    <mat-list-item role=\"listitem\">\r\n      <mat-slide-toggle (change)=\"bgSlideChange($event.checked)\"\r\n          [(checked)]=\"backgroundStarted['default']\">\r\n        {{backgroundStarted['default'] ? 'stop' : 'start'}}Background{{loader.isMaster ? '()' : 'Loader(\"' + loader.loaderId + '\")'}}\r\n      </mat-slide-toggle>\r\n    </mat-list-item>\r\n    <mat-list-item role=\"listitem\">\r\n      <mat-slide-toggle (change)=\"bgSlideChange($event.checked, 'task-02')\"\r\n          [(checked)]=\"backgroundStarted['task-02']\">\r\n        {{backgroundStarted['task-02'] ? 'stop' : 'start'}}Background{{loader.isMaster ? '(\"task-02\")' : 'Loader(\"' + loader.loaderId + '\", \"task-02\")'}}\r\n      </mat-slide-toggle>\r\n    </mat-list-item>\r\n  <mat-list>\r\n"

/***/ }),

/***/ "./src/app/ngx-ui-loader-controller.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/ngx-ui-loader-controller.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2, h3 {\n  font-family: Roboto, \"Heltical Neue\", sans-serif;\n  text-align: center;\n  margin-bottom: 10px; }\n\n.mat-elevation-z4 {\n  background-color: rgba(63, 81, 181, 0.3); }\n\nmat-slider {\n  width: 100%; }\n\n.place-holder {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 75%;\n  font-weight: 500;\n  font-style: normal; }\n\n.mat-list-item code {\n  font-size: 75%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFNvdXJjZVxcUHJpdmF0XFxuZ3gtdWktbG9hZGVyL3NyY1xcYXBwXFxuZ3gtdWktbG9hZGVyLWNvbnRyb2xsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHdDQUF3QyxFQUFBOztBQUcxQztFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGlEQUFpRDtFQUNqRCwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uZ3gtdWktbG9hZGVyLWNvbnRyb2xsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiwgaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdGljYWwgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16NCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgODEsIDE4MSwgMC4zKTtcclxufVxyXG5cclxubWF0LXNsaWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wbGFjZS1ob2xkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxuICBmb250LXNpemU6IDc1JTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLm1hdC1saXN0LWl0ZW0gY29kZSB7XHJcbiAgZm9udC1zaXplOiA3NSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ngx-ui-loader-controller.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ngx-ui-loader-controller.component.ts ***!
  \*******************************************************/
/*! exports provided: NgxUiLoaderControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiLoaderControllerComponent", function() { return NgxUiLoaderControllerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./dist/ngx-ui-loader/fesm5/ngx-ui-loader.js");



var NgxUiLoaderControllerComponent = /** @class */ (function () {
    function NgxUiLoaderControllerComponent(ngxUiLoaderService) {
        this.ngxUiLoaderService = ngxUiLoaderService;
    }
    /**
     * On init
     */
    NgxUiLoaderControllerComponent.prototype.ngOnInit = function () {
        this.timers = [];
        this.foregroundStarted = {};
        this.backgroundStarted = {};
        if (this.loader.isMaster) {
            this.backgroundStarted = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.loader.background);
        }
    };
    NgxUiLoaderControllerComponent.prototype.fgSlideChange = function (checked, delay, taskId) {
        var _this = this;
        if (taskId === void 0) { taskId = 'default'; }
        if (checked) {
            this.ngxUiLoaderService.startLoader(this.loader.loaderId, taskId);
            this.foregroundStarted[taskId] = true;
            this.timers = this.timers.concat([setTimeout(function () {
                    _this.ngxUiLoaderService.stopLoader(_this.loader.loaderId, taskId);
                    _this.foregroundStarted[taskId] = false;
                }, delay)]);
        }
    };
    NgxUiLoaderControllerComponent.prototype.bgSlideChange = function (checked, taskId) {
        if (taskId === void 0) { taskId = 'default'; }
        if (checked) {
            this.ngxUiLoaderService.startBackgroundLoader(this.loader.loaderId, taskId);
            this.backgroundStarted[taskId] = true;
        }
        else {
            this.ngxUiLoaderService.stopBackgroundLoader(this.loader.loaderId, taskId);
            this.backgroundStarted[taskId] = false;
        }
    };
    NgxUiLoaderControllerComponent.prototype.ngOnDestroy = function () {
        this.timers.forEach(function (timer) { return clearTimeout(timer); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxUiLoaderControllerComponent.prototype, "loader", void 0);
    NgxUiLoaderControllerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngx-ui-loader-controller',
            template: __webpack_require__(/*! ./ngx-ui-loader-controller.component.html */ "./src/app/ngx-ui-loader-controller.component.html"),
            styles: [__webpack_require__(/*! ./ngx-ui-loader-controller.component.scss */ "./src/app/ngx-ui-loader-controller.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]])
    ], NgxUiLoaderControllerComponent);
    return NgxUiLoaderControllerComponent;
}());



/***/ }),

/***/ "./src/app/ngx-ui-loader-demo.component.html":
/*!***************************************************!*\
  !*** ./src/app/ngx-ui-loader-demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center\" style=\"margin: 12px 0\">\r\n  <div fxFlex=\"100\" fxFlex.lg=\"90\" fxFlex.gt-lg=\"70\" fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\r\n\r\n    <div fxFlex=\"100\" fxFlex.gt-md=\"36\" fxLayout=\"column\" fxLayout.sm=\"row\" fxLayout.md=\"row\" class=\"p-12\">\r\n      <div fxFlex.sm=\"50\" fxFlex.md=\"50\" class=\"mat-elevation-z4\">\r\n        <app-ngx-ui-loader-controller [loader]=\"loader\"></app-ngx-ui-loader-controller>\r\n      </div>\r\n      <div fxLayout=\"column\" fxFlex.sm=\"50\" fxFlex.md=\"50\" class=\"config-info\">\r\n        <span class=\"place-holder\">ngx-ui-loader-configuration = </span>\r\n        <pre><code>{{demoService.config | json}}</code></pre>\r\n      </div>\r\n    </div>\r\n    <!-- Foreground {{{-->\r\n    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"32\" fxLayout=\"column\" class=\"p-12\">\r\n      <mat-form-field>\r\n        <input [(colorPicker)]=\"demoService.config.fgsColor\" matInput placeholder=\"Foreground Spinner Color (fgsColor)\" [(ngModel)]=\"demoService.config.fgsColor\">\r\n        <mat-icon matSuffix [style.color]=\"demoService.config.fgsColor\" fontIcon=\"mdi-palette\" fontSet=\"mdi\"></mat-icon>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Foreground Spinner Type (fgsType)\" [(value)]=\"demoService.config.fgsType\">\r\n          <mat-option *ngFor=\"let type of spinnerTypes\" [value]=\"type\">\r\n            {{ type }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Foreground Spinner Position (fgsPosition)\" [(value)]=\"demoService.config.fgsPosition\">\r\n          <mat-option *ngFor=\"let position of positions\" [value]=\"position\">\r\n            {{ position }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div>\r\n        <span class=\"place-holder\">Foreground Spinner Size (fgsSize)</span>\r\n        <mat-slider max=\"150\" min=\"20\" step=\"10\" [thumbLabel]=\"true\" [(ngModel)]=\"demoService.config.fgsSize\"></mat-slider>\r\n      </div>\r\n\r\n      <div>\r\n        <span class=\"place-holder\">Blur the page while foreground loading (blur)</span>\r\n        <mat-slider max=\"15\" min=\"0\" step=\"1\" [thumbLabel]=\"true\" [(ngModel)]=\"demoService.config.blur\"></mat-slider>\r\n      </div>\r\n\r\n      <mat-form-field>\r\n        <input [(colorPicker)]=\"demoService.config.overlayColor\" cpOutputFormat=\"rgba\" matInput placeholder=\"Overlay Color (overlayColor)\" [(ngModel)]=\"demoService.config.overlayColor\">\r\n        <mat-icon matSuffix [style.color]=\"demoService.config.overlayColor\" fontIcon=\"mdi-palette\" fontSet=\"mdi\"></mat-icon>\r\n      </mat-form-field>\r\n\r\n      <div style=\"margin-top: 21px; margin-bottom: 20px\">\r\n        <mat-checkbox (change)=\"toggleProgressBar($event.checked)\" [checked]=\"demoService.config.hasProgressBar\">Has progress bar</mat-checkbox>\r\n      </div>\r\n\r\n      <mat-form-field *ngIf=\"demoService.config.hasProgressBar\">\r\n        <input [(colorPicker)]=\"demoService.config.pbColor\" matInput placeholder=\"Progress Bar Color (pbColor)\" [(ngModel)]=\"demoService.config.pbColor\">\r\n        <mat-icon matSuffix [style.color]=\"demoService.config.pbColor\" fontIcon=\"mdi-palette\" fontSet=\"mdi\"></mat-icon>\r\n      </mat-form-field>\r\n\r\n      <div style=\"margin-top: 21px; margin-bottom: 20px\">\r\n        <mat-checkbox (change)=\"addLogo($event.checked)\">Add logo</mat-checkbox>\r\n      </div>\r\n\r\n      <mat-form-field *ngIf=\"demoService.config.logoUrl\">\r\n        <mat-select placeholder=\"Logo Position (logoPosition)\" [(value)]=\"demoService.config.logoPosition\">\r\n          <mat-option *ngFor=\"let position of positions\" [value]=\"position\">\r\n            {{ position }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div *ngIf=\"demoService.config.logoUrl\">\r\n        <span class=\"place-holder\">Logo size (logoSize)</span>\r\n        <mat-slider max=\"200\" min=\"40\" step=\"10\" [thumbLabel]=\"true\" [(ngModel)]=\"demoService.config.logoSize\"></mat-slider>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Foreground }}}-->\r\n\r\n    <!-- Background {{{-->\r\n    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"32\" fxLayout=\"column\" class=\"p-12\">\r\n      <mat-form-field>\r\n        <input [(colorPicker)]=\"demoService.config.bgsColor\" matInput placeholder=\"Background Spinner Color (bgsColor)\" [(ngModel)]=\"demoService.config.bgsColor\">\r\n        <mat-icon matSuffix [style.color]=\"demoService.config.bgsColor\" fontIcon=\"mdi-palette\" fontSet=\"mdi\"></mat-icon>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Background Spinner Type (bgsType)\" [(value)]=\"demoService.config.bgsType\">\r\n          <mat-option *ngFor=\"let type of spinnerTypes\" [value]=\"type\">\r\n            {{ type }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Background Spinner Position (bgsPosition)\" [(value)]=\"demoService.config.bgsPosition\">\r\n          <mat-option *ngFor=\"let position of positions\" [value]=\"position\">\r\n            {{ position }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div>\r\n        <span class=\"place-holder\">Background Spinner Size (bgsSize)</span>\r\n        <mat-slider max=\"150\" min=\"20\" step=\"10\" [thumbLabel]=\"true\" [(ngModel)]=\"demoService.config.bgsSize\"></mat-slider>\r\n      </div>\r\n\r\n      <div>\r\n        <span class=\"place-holder\">Background Spinner Opacity (bgsOpacity)</span>\r\n        <mat-slider max=\"1\" min=\"0.1\" step=\"0.1\" [thumbLabel]=\"true\" [(ngModel)]=\"demoService.config.bgsOpacity\"></mat-slider>\r\n      </div>\r\n\r\n      <div>\r\n        <span class=\"place-holder\">Gap between logo, spinner and text (gap)</span>\r\n        <mat-slider max=\"150\" min=\"10\" step=\"1\" [thumbLabel]=\"true\" [(ngModel)]=\"demoService.config.gap\"></mat-slider>\r\n      </div>\r\n\r\n      <div *ngIf=\"demoService.config.hasProgressBar\">\r\n        <span class=\"place-holder\">Progress Bar Thickness (pbThickness)</span>\r\n        <mat-slider max=\"10\" min=\"1\" step=\"1\" [thumbLabel]=\"true\" [(ngModel)]=\"demoService.config.pbThickness\"></mat-slider>\r\n      </div>\r\n\r\n      <mat-form-field *ngIf=\"demoService.config.hasProgressBar\">\r\n        <mat-select placeholder=\"Progress Bar Direction (pbDirection)\" [(value)]=\"demoService.config.pbDirection\">\r\n          <mat-option *ngFor=\"let direction of directions\" [value]=\"direction\">\r\n            {{ direction }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Loading Text (text)\" [(ngModel)]=\"demoService.config.text\" autocomplete=\"off\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field *ngIf=\"demoService.config.text\">\r\n        <mat-select placeholder=\"Loading Text Position (textPosition)\" [(value)]=\"demoService.config.textPosition\">\r\n          <mat-option *ngFor=\"let position of positions\" [value]=\"position\">\r\n            {{ position }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field *ngIf=\"demoService.config.text\">\r\n        <input [(colorPicker)]=\"demoService.config.textColor\" matInput placeholder=\"Loading Text Color (textColor)\" [(ngModel)]=\"demoService.config.textColor\">\r\n        <mat-icon matSuffix [style.color]=\"demoService.config.textColor\" fontIcon=\"mdi-palette\" fontSet=\"mdi\"></mat-icon>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n    <!-- Background }}}-->\r\n    <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\r\n      <button mat-raised-button color=\"accent\" (click)=\"reset()\">Reset Configuration</button>\r\n      <a mat-raised-button color=\"primary\" [routerLink]=\"'/multiloader'\">Multiple Loaders</a>\r\n      <button mat-raised-button color=\"accent\" (click)=\"getDownloadStats()\" [disabled]=\"disabled\">Http request with loader</button>\r\n      <a mat-raised-button color=\"primary\" [routerLink]=\"'/spinners'\">Available Spinners</a>\r\n      <a mat-raised-button color=\"accent\" href=\"https://github.com/t-ho/ngx-ui-loader\" target=\"_blank\"><mat-icon fontIcon=\"mdi-star\" fontSet=\"mdi\" class=\"mdi-24px\"></mat-icon>Star on Github</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/ngx-ui-loader-demo.component.scss":
/*!***************************************************!*\
  !*** ./src/app/ngx-ui-loader-demo.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-space {\n  flex: 1 1 auto; }\n\nh2, h3 {\n  font-family: Roboto, \"Heltical Neue\", sans-serif;\n  text-align: center;\n  margin-bottom: 10px; }\n\nh3 {\n  margin-top: 10px; }\n\nmat-slider {\n  width: 100%; }\n\n.place-holder {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 75%;\n  font-weight: 500;\n  font-style: normal; }\n\n.p-12 {\n  padding: 12px; }\n\n.mat-icon.mdi-24px {\n  line-height: 24px;\n  margin-right: 4px;\n  margin-bottom: 3px; }\n\n.config-info {\n  margin: 8px 16px 0 16px; }\n\n.config-info pre {\n    margin: 0;\n    overflow-x: auto; }\n\n.mat-elevation-z4 {\n  background-color: rgba(63, 81, 181, 0.3); }\n\n.mat-list-item code {\n  font-size: 75%; }\n\n.downloads-chart {\n  width: 100%;\n  margin-top: 24px; }\n\n.mat-raised-button {\n  margin: 6px 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFNvdXJjZVxcUHJpdmF0XFxuZ3gtdWktbG9hZGVyL3NyY1xcYXBwXFxuZ3gtdWktbG9hZGVyLWRlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxpREFBaUQ7RUFDakQsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx1QkFBdUIsRUFBQTs7QUFEekI7SUFJSSxTQUFTO0lBQ1QsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0Usd0NBQXdDLEVBQUE7O0FBRzFDO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25neC11aS1sb2FkZXItZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXNwYWNlIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuaDIsIGgzIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHRpY2FsIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaDMge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1zbGlkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGxhY2UtaG9sZGVyIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbiAgZm9udC1zaXplOiA3NSU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5wLTEyIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4ubWF0LWljb24ubWRpLTI0cHgge1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLmNvbmZpZy1pbmZvIHtcclxuICBtYXJnaW46IDhweCAxNnB4IDAgMTZweDtcclxuXHJcbiAgJiBwcmUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtZWxldmF0aW9uLXo0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjMpO1xyXG59XHJcblxyXG4ubWF0LWxpc3QtaXRlbSBjb2RlIHtcclxuICBmb250LXNpemU6IDc1JTtcclxufVxyXG5cclxuLmRvd25sb2Fkcy1jaGFydCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICBtYXJnaW46IDZweCAxMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ngx-ui-loader-demo.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ngx-ui-loader-demo.component.ts ***!
  \*************************************************/
/*! exports provided: NgxUiLoaderDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiLoaderDemoComponent", function() { return NgxUiLoaderDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./dist/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var _ngx_ui_loader_demo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-ui-loader-demo.service */ "./src/app/ngx-ui-loader-demo.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var LOGO_URL = 'assets/angular.png';
var NgxUiLoaderDemoComponent = /** @class */ (function () {
    /**
     * Constructor
     * @param ngxUiLoaderService
     * @param demoService
     */
    function NgxUiLoaderDemoComponent(ngxUiLoaderService, demoService, http) {
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.demoService = demoService;
        this.http = http;
    }
    /**
     * On init
     */
    NgxUiLoaderDemoComponent.prototype.ngOnInit = function () {
        this.spinnerTypes = Object.keys(ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["SPINNER"]).map(function (key) { return ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["SPINNER"][key]; });
        this.positions = Object.keys(ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["POSITION"]).map(function (key) { return ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["POSITION"][key]; });
        this.directions = Object.keys(ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["PB_DIRECTION"]).map(function (key) { return ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["PB_DIRECTION"][key]; });
        this.disabled = false;
        this.loader = this.ngxUiLoaderService.getLoader();
    };
    /**
   * Add logo url
   * @param checked
   */
    NgxUiLoaderDemoComponent.prototype.addLogo = function (checked) {
        if (checked) {
            this.demoService.config.logoUrl = LOGO_URL;
        }
        else {
            this.demoService.config.logoUrl = '';
        }
    };
    /**
     * Toggle progress bar
     * @param checked
     */
    NgxUiLoaderDemoComponent.prototype.toggleProgressBar = function (checked) {
        this.demoService.config.hasProgressBar = checked;
    };
    /**
     * Reset the form
     */
    NgxUiLoaderDemoComponent.prototype.reset = function () {
        this.demoService.config = this.ngxUiLoaderService.getDefaultConfig();
    };
    NgxUiLoaderDemoComponent.prototype.getDownloadStats = function () {
        var _this = this;
        this.disabled = true;
        this.http.get("https://api.npmjs.org/downloads/range/last-month/ngx-ui-loader?t=" + Date.now()).subscribe(function (res) {
            console.log(res);
            _this.disabled = false;
        });
    };
    NgxUiLoaderDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngx-ui-loader-demo',
            template: __webpack_require__(/*! ./ngx-ui-loader-demo.component.html */ "./src/app/ngx-ui-loader-demo.component.html"),
            styles: [__webpack_require__(/*! ./ngx-ui-loader-demo.component.scss */ "./src/app/ngx-ui-loader-demo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"],
            _ngx_ui_loader_demo_service__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderDemoService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], NgxUiLoaderDemoComponent);
    return NgxUiLoaderDemoComponent;
}());



/***/ }),

/***/ "./src/app/ngx-ui-loader-demo.service.ts":
/*!***********************************************!*\
  !*** ./src/app/ngx-ui-loader-demo.service.ts ***!
  \***********************************************/
/*! exports provided: NgxUiLoaderDemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiLoaderDemoService", function() { return NgxUiLoaderDemoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./dist/ngx-ui-loader/fesm5/ngx-ui-loader.js");



var NgxUiLoaderDemoService = /** @class */ (function () {
    /**
     * Constructor
     * @param ngxUiLoaderService
     */
    function NgxUiLoaderDemoService(ngxUiLoaderService) {
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.config = this.ngxUiLoaderService.getDefaultConfig();
    }
    NgxUiLoaderDemoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]])
    ], NgxUiLoaderDemoService);
    return NgxUiLoaderDemoService;
}());



/***/ }),

/***/ "./src/app/spinner-demo.component.html":
/*!*********************************************!*\
  !*** ./src/app/spinner-demo.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" style=\"margin-top: 12px\">\r\n  <div fxFlex=\"100\" fxFlex.gt-xs=\"800px\" fxLayout=\"row wrap\" fxLayoutAlign=\"center start\">\r\n    <div *ngFor=\"let spinner of spinners\" fxFlex.xs=\"40\" class=\"container\" fxFlex=\"135px\">\r\n      <div class=\"ngx-foreground-spinner spinner-container\">\r\n        <div [class]=\"spinner.class\">\r\n          <div *ngFor=\"let div of spinner.divs\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"spinner-name\">\r\n        <span>{{spinner.name}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"center\" style=\"margin-top: 24px; margin-bottom: 24px\">\r\n    <a mat-raised-button color=\"primary\" [routerLink]=\"'/'\">Back</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/spinner-demo.component.scss":
/*!*********************************************!*\
  !*** ./src/app/spinner-demo.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  text-align: center;\n  margin: 6px 12px; }\n\n.spinner-container {\n  width: 60px;\n  height: 60px;\n  margin-top: 24px;\n  margin-bottom: 24px;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  display: block;\n  color: #00ACC1; }\n\n.spinner-name {\n  text-align: center; }\n\n.spinner-name span {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    color: rgba(0, 0, 0, 0.87);\n    font-size: 75%;\n    font-weight: 500;\n    font-style: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFNvdXJjZVxcUHJpdmF0XFxuZ3gtdWktbG9hZGVyL3NyY1xcYXBwXFxzcGlubmVyLWRlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7SUFJRSxpREFBaUQ7SUFDakQsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNnB4IDEycHg7XHJcbn1cclxuXHJcbi5zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzAwQUNDMTtcclxufVxyXG5cclxuLnNwaW5uZXItbmFtZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBzcGFuIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgZm9udC1zaXplOiA3NSU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/spinner-demo.component.ts":
/*!*******************************************!*\
  !*** ./src/app/spinner-demo.component.ts ***!
  \*******************************************/
/*! exports provided: SpinnerDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerDemoComponent", function() { return SpinnerDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_ngx_ui_loader_src_lib_core_ngx_ui_loader_contants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/ngx-ui-loader/src/lib/core/ngx-ui-loader.contants */ "./projects/ngx-ui-loader/src/lib/core/ngx-ui-loader.contants.ts");



var SpinnerDemoComponent = /** @class */ (function () {
    function SpinnerDemoComponent() {
    }
    /**
     * On init
     */
    SpinnerDemoComponent.prototype.ngOnInit = function () {
        this.spinners = Object.keys(_projects_ngx_ui_loader_src_lib_core_ngx_ui_loader_contants__WEBPACK_IMPORTED_MODULE_2__["SPINNER_CONFIG"]).map(function (key) {
            return {
                name: key,
                divs: Array(_projects_ngx_ui_loader_src_lib_core_ngx_ui_loader_contants__WEBPACK_IMPORTED_MODULE_2__["SPINNER_CONFIG"][key].divs).fill(1),
                class: _projects_ngx_ui_loader_src_lib_core_ngx_ui_loader_contants__WEBPACK_IMPORTED_MODULE_2__["SPINNER_CONFIG"][key].class
            };
        });
    };
    SpinnerDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner-demo',
            template: __webpack_require__(/*! ./spinner-demo.component.html */ "./src/app/spinner-demo.component.html"),
            styles: [__webpack_require__(/*! ../../projects/ngx-ui-loader/src/lib/core/ngx-ui-loader.component.scss */ "./projects/ngx-ui-loader/src/lib/core/ngx-ui-loader.component.scss"), __webpack_require__(/*! ./spinner-demo.component.scss */ "./src/app/spinner-demo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerDemoComponent);
    return SpinnerDemoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Source\Privat\ngx-ui-loader\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map