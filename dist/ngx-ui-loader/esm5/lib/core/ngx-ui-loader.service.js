/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CLOSING_TIME, DEFAULT_TASK_ID, DEFAULT_CONFIG, WAITING_FOR_OVERLAY_DISAPPEAR } from './ngx-ui-loader.contants';
import { NGX_UI_LOADER_CONFIG_TOKEN } from './ngx-ui-loader-config.token';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-ui-loader-config.token";
var NgxUiLoaderService = /** @class */ (function () {
    /**
     * Constructor
     * @param config
     */
    function NgxUiLoaderService(config) {
        this.config = config;
        this.defaultConfig = tslib_1.__assign({}, DEFAULT_CONFIG);
        if (this.config) {
            if (this.config.threshold && this.config.threshold <= 0) {
                this.config.threshold = DEFAULT_CONFIG.threshold;
            }
            this.defaultConfig = tslib_1.__assign({}, this.defaultConfig, this.config);
        }
        this.loaders = {};
        this.showForeground = new BehaviorSubject({ loaderId: '', isShow: false });
        this.showForeground$ = this.showForeground.asObservable();
        this.showBackground = new BehaviorSubject({ loaderId: '', isShow: false });
        this.showBackground$ = this.showBackground.asObservable();
        this.fgClosing = new BehaviorSubject({ loaderId: '', isShow: false });
        this.foregroundClosing$ = this.fgClosing.asObservable();
        this.bgClosing = new BehaviorSubject({ loaderId: '', isShow: false });
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
                background: tslib_1.__assign({}, this.loaders[loaderId].background),
                foreground: tslib_1.__assign({}, this.loaders[loaderId].foreground),
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
        return tslib_1.__assign({}, this.defaultConfig);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxUiLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_UI_LOADER_CONFIG_TOKEN,] }] }
    ]; };
    /** @nocollapse */ NgxUiLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function NgxUiLoaderService_Factory() { return new NgxUiLoaderService(i0.inject(i1.NGX_UI_LOADER_CONFIG_TOKEN, 8)); }, token: NgxUiLoaderService, providedIn: "root" });
    return NgxUiLoaderService;
}());
export { NgxUiLoaderService };
if (false) {
    /**
     * For internal use only. It may be changed in the future.
     * \@docs-private
     * @type {?}
     */
    NgxUiLoaderService.prototype.backgroundClosing$;
    /**
     * For internal use only. It may be changed in the future.
     * \@docs-private
     * @type {?}
     */
    NgxUiLoaderService.prototype.foregroundClosing$;
    /**
     * For internal use only. It may be changed in the future.
     * \@docs-private
     * @type {?}
     */
    NgxUiLoaderService.prototype.showBackground$;
    /**
     * For internal use only. It may be changed in the future.
     * \@docs-private
     * @type {?}
     */
    NgxUiLoaderService.prototype.showForeground$;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderService.prototype.bgClosing;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderService.prototype.defaultConfig;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderService.prototype.fgClosing;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderService.prototype.loaders;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderService.prototype.showBackground;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderService.prototype.showForeground;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXVpLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25neC11aS1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFJMUU7SUF1Q0U7OztPQUdHO0lBQ0gsNEJBQW9FLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBRTNGLElBQUksQ0FBQyxhQUFhLHdCQUFRLGNBQWMsQ0FBRSxDQUFDO1FBRTNDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxDQUFDLGFBQWEsd0JBQVEsSUFBSSxDQUFDLGFBQWEsRUFBSyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7U0FDaEU7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZUFBZSxDQUFZLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUks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QSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDLEdBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Z0JBNWNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0RBeUNjLFFBQVEsWUFBSSxNQUFNLFNBQUMsMEJBQTBCOzs7NkJBbkQ1RDtDQXFkQyxBQTdjRCxJQTZjQztTQTFjWSxrQkFBa0I7Ozs7Ozs7SUFRN0IsZ0RBQTBDOzs7Ozs7SUFNMUMsZ0RBQTBDOzs7Ozs7SUFNMUMsNkNBQXVDOzs7Ozs7SUFNdkMsNkNBQXVDOzs7OztJQUd2Qyx1Q0FBOEM7Ozs7O0lBQzlDLDJDQUF5Qzs7Ozs7SUFDekMsdUNBQThDOzs7OztJQUM5QyxxQ0FBeUI7Ozs7O0lBQ3pCLDRDQUFtRDs7Ozs7SUFDbkQsNENBQW1EOzs7OztJQU12QyxvQ0FBaUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQ0xPU0lOR19USU1FLCBERUZBVUxUX1RBU0tfSUQsIERFRkFVTFRfQ09ORklHLCBXQUlUSU5HX0ZPUl9PVkVSTEFZX0RJU0FQUEVBUiB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci5jb250YW50cyc7XHJcbmltcG9ydCB7IE5HWF9VSV9MT0FERVJfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWNvbmZpZy50b2tlbic7XHJcbmltcG9ydCB7IE5neFVpTG9hZGVyQ29uZmlnIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWNvbmZpZyc7XHJcbmltcG9ydCB7IExvYWRlcnMsIExvYWRlciwgU2hvd0V2ZW50LCBUYXNrIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLmludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4VWlMb2FkZXJTZXJ2aWNlIHtcclxuXHJcbiAgLy8gUHVibGljIHByb3BlcnRpZXNcclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGludGVybmFsIHVzZSBvbmx5LiBJdCBtYXkgYmUgY2hhbmdlZCBpbiB0aGUgZnV0dXJlLlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBiYWNrZ3JvdW5kQ2xvc2luZyQ6IE9ic2VydmFibGU8U2hvd0V2ZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGludGVybmFsIHVzZSBvbmx5LiBJdCBtYXkgYmUgY2hhbmdlZCBpbiB0aGUgZnV0dXJlLlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBmb3JlZ3JvdW5kQ2xvc2luZyQ6IE9ic2VydmFibGU8U2hvd0V2ZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGludGVybmFsIHVzZSBvbmx5LiBJdCBtYXkgYmUgY2hhbmdlZCBpbiB0aGUgZnV0dXJlLlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBzaG93QmFja2dyb3VuZCQ6IE9ic2VydmFibGU8U2hvd0V2ZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGludGVybmFsIHVzZSBvbmx5LiBJdCBtYXkgYmUgY2hhbmdlZCBpbiB0aGUgZnV0dXJlLlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBzaG93Rm9yZWdyb3VuZCQ6IE9ic2VydmFibGU8U2hvd0V2ZW50PjtcclxuXHJcbiAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXHJcbiAgcHJpdmF0ZSBiZ0Nsb3Npbmc6IEJlaGF2aW9yU3ViamVjdDxTaG93RXZlbnQ+O1xyXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZzogTmd4VWlMb2FkZXJDb25maWc7XHJcbiAgcHJpdmF0ZSBmZ0Nsb3Npbmc6IEJlaGF2aW9yU3ViamVjdDxTaG93RXZlbnQ+O1xyXG4gIHByaXZhdGUgbG9hZGVyczogTG9hZGVycztcclxuICBwcml2YXRlIHNob3dCYWNrZ3JvdW5kOiBCZWhhdmlvclN1YmplY3Q8U2hvd0V2ZW50PjtcclxuICBwcml2YXRlIHNob3dGb3JlZ3JvdW5kOiBCZWhhdmlvclN1YmplY3Q8U2hvd0V2ZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOR1hfVUlfTE9BREVSX0NPTkZJR19UT0tFTikgcHJpdmF0ZSBjb25maWc6IE5neFVpTG9hZGVyQ29uZmlnKSB7XHJcblxyXG4gICAgdGhpcy5kZWZhdWx0Q29uZmlnID0geyAuLi5ERUZBVUxUX0NPTkZJRyB9O1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICBpZiAodGhpcy5jb25maWcudGhyZXNob2xkICYmIHRoaXMuY29uZmlnLnRocmVzaG9sZCA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcudGhyZXNob2xkID0gREVGQVVMVF9DT05GSUcudGhyZXNob2xkO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGVmYXVsdENvbmZpZyA9IHsgLi4udGhpcy5kZWZhdWx0Q29uZmlnLCAuLi50aGlzLmNvbmZpZyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9hZGVycyA9IHt9O1xyXG4gICAgdGhpcy5zaG93Rm9yZWdyb3VuZCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2hvd0V2ZW50Pih7IGxvYWRlcklkOiAnJywgaXNTaG93OiBmYWxzZSB9KTtcclxuICAgIHRoaXMuc2hvd0ZvcmVncm91bmQkID0gdGhpcy5zaG93Rm9yZWdyb3VuZC5hc09ic2VydmFibGUoKTtcclxuICAgIHRoaXMuc2hvd0JhY2tncm91bmQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNob3dFdmVudD4oeyBsb2FkZXJJZDogJycsIGlzU2hvdzogZmFsc2UgfSk7XHJcbiAgICB0aGlzLnNob3dCYWNrZ3JvdW5kJCA9IHRoaXMuc2hvd0JhY2tncm91bmQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB0aGlzLmZnQ2xvc2luZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2hvd0V2ZW50Pih7IGxvYWRlcklkOiAnJywgaXNTaG93OiBmYWxzZSB9KTtcclxuICAgIHRoaXMuZm9yZWdyb3VuZENsb3NpbmckID0gdGhpcy5mZ0Nsb3NpbmcuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB0aGlzLmJnQ2xvc2luZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2hvd0V2ZW50Pih7IGxvYWRlcklkOiAnJywgaXNTaG93OiBmYWxzZSB9KTtcclxuICAgIHRoaXMuYmFja2dyb3VuZENsb3NpbmckID0gdGhpcy5iZ0Nsb3NpbmcuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuIEl0IG1heSBiZSBjaGFuZ2VkIGluIHRoZSBmdXR1cmUuXHJcbiAgICogQGRvY3MtcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGluaXRMb2FkZXJEYXRhKGxvYWRlcklkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCBpc01hc3RlciA9IGZhbHNlO1xyXG4gICAgaWYgKGxvYWRlcklkID09PSB0aGlzLmRlZmF1bHRDb25maWcubWFzdGVyTG9hZGVySWQpIHtcclxuICAgICAgdGhpcy50aHJvd0Vycm9ySWZNYXN0ZXJMb2FkZXJFeGlzdHModHJ1ZSk7XHJcbiAgICAgIGlzTWFzdGVyID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7IC8vIG5vdCBtYXN0ZXIgbG9hZGVyXHJcbiAgICAgIHRoaXMudGhyb3dFcnJvcklmTG9hZGVyRXhpc3RzKGxvYWRlcklkLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxvYWRlcnNbbG9hZGVySWRdKSB7XHJcbiAgICAgIHRoaXMubG9hZGVyc1tsb2FkZXJJZF0uaXNCb3VuZCA9IHRydWU7XHJcbiAgICAgIHRoaXMubG9hZGVyc1tsb2FkZXJJZF0uaXNNYXN0ZXIgPSBpc01hc3RlcjtcclxuICAgICAgLy8gZW1pdCBzaG93RXZlbnQgYWZ0ZXIgZGF0YSBsb2FkZXIgaXMgYm91bmRcclxuICAgICAgaWYgKHRoaXMuaGFzRm9yZWdyb3VuZChsb2FkZXJJZCkpIHtcclxuICAgICAgICB0aGlzLnNob3dGb3JlZ3JvdW5kLm5leHQoeyBsb2FkZXJJZCwgaXNTaG93OiB0cnVlIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0JhY2tncm91bmQobG9hZGVySWQpKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dCYWNrZ3JvdW5kLm5leHQoeyBsb2FkZXJJZCwgaXNTaG93OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jcmVhdGVMb2FkZXJEYXRhKGxvYWRlcklkLCBpc01hc3RlciwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuIEl0IG1heSBiZSBjaGFuZ2VkIGluIHRoZSBmdXR1cmUuXHJcbiAgICogQGRvY3MtcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHVwZGF0ZUxvYWRlcklkKGxvYWRlcklkOiBzdHJpbmcsIG5ld0xvYWRlcklkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudGhyb3dFcnJvcklmTG9hZGVyTm90RXhpc3QobG9hZGVySWQpO1xyXG4gICAgaWYgKHRoaXMubG9hZGVyc1tsb2FkZXJJZF0ubG9hZGVySWQgPT09IHRoaXMuZGVmYXVsdENvbmZpZy5tYXN0ZXJMb2FkZXJJZCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYFtuZ3gtdWktbG9hZGVyXSAtIENhbm5vdCBjaGFuZ2UgbG9hZGVySWQgb2YgbWFzdGVyIGxvYWRlci4gVGhlIGN1cnJlbnQgYCArXHJcbiAgICAgICAgYG1hc3RlcidzIGxvYWRlcklkIGlzIFwiJHt0aGlzLmRlZmF1bHRDb25maWcubWFzdGVyTG9hZGVySWR9XCIuIElmIHlvdSByZWFsbHkgd2FudCB0byBgICtcclxuICAgICAgICBgY2hhbmdlIGl0LCBwbGVhc2UgdXNlIE5neFVpTG9hZGVyTW9kdWxlLmZvclJvb3QoKSBtZXRob2QuYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChuZXdMb2FkZXJJZCAhPT0gbG9hZGVySWQpIHtcclxuICAgICAgdGhpcy50aHJvd0Vycm9ySWZMb2FkZXJFeGlzdHMobmV3TG9hZGVySWQsIHRydWUpO1xyXG4gICAgICB0aGlzLmxvYWRlcnNbbmV3TG9hZGVySWRdID0ge1xyXG4gICAgICAgIGxvYWRlcklkOiBuZXdMb2FkZXJJZCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB7IC4uLnRoaXMubG9hZGVyc1tsb2FkZXJJZF0uYmFja2dyb3VuZCB9LFxyXG4gICAgICAgIGZvcmVncm91bmQ6IHsgLi4udGhpcy5sb2FkZXJzW2xvYWRlcklkXS5mb3JlZ3JvdW5kIH0sXHJcbiAgICAgICAgaXNNYXN0ZXI6IGZhbHNlLFxyXG4gICAgICAgIGlzQm91bmQ6IHRoaXMubG9hZGVyc1tsb2FkZXJJZF0uaXNCb3VuZFxyXG4gICAgICB9O1xyXG4gICAgICBkZWxldGUgdGhpcy5sb2FkZXJzW2xvYWRlcklkXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBpbnRlcm5hbCB1c2Ugb25seS4gSXQgbWF5IGJlIGNoYW5nZWQgaW4gdGhlIGZ1dHVyZS5cclxuICAgKiBAZG9jcy1wcml2YXRlXHJcbiAgICovXHJcbiAgZGVzdHJveUxvYWRlckRhdGEobG9hZGVySWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zdG9wTG9hZGVyQWxsKGxvYWRlcklkKTtcclxuICAgIGRlbGV0ZSB0aGlzLmxvYWRlcnNbbG9hZGVySWRdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGRlZmF1bHQgbG9hZGVyIGNvbmZpZ3VyYXRpb25cclxuICAgKiBAcmV0dXJucyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAgICovXHJcbiAgZ2V0RGVmYXVsdENvbmZpZygpOiBOZ3hVaUxvYWRlckNvbmZpZyB7XHJcbiAgICByZXR1cm4geyAuLi50aGlzLmRlZmF1bHRDb25maWcgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhbGwgdGhlIGxvYWRlcnNcclxuICAgKi9cclxuICBnZXRMb2FkZXJzKCk6IExvYWRlcnMge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5sb2FkZXJzKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgZGF0YSBvZiBhIHNwZWNpZmllZCBsb2FkZXIuIElmIGxvYWRlcklkIGlzIG5vdCBwcm92aWRlZCwgaXQgd2lsbCByZXR1cm4gZGF0YSBvZiBtYXN0ZXIgbG9hZGVyKGlmIGV4aXN0ZWQpXHJcbiAgICovXHJcbiAgZ2V0TG9hZGVyKGxvYWRlcklkPzogc3RyaW5nKTogTG9hZGVyIHtcclxuICAgIGlmIChsb2FkZXJJZCkge1xyXG4gICAgICB0aGlzLnRocm93RXJyb3JJZkxvYWRlck5vdEV4aXN0KGxvYWRlcklkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGhyb3dFcnJvcklmTWFzdGVyTG9hZGVyTm90RXhpc3QoKTtcclxuICAgICAgbG9hZGVySWQgPSB0aGlzLmRlZmF1bHRDb25maWcubWFzdGVyTG9hZGVySWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmxvYWRlcnNbbG9hZGVySWRdKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZ2V0TG9hZGVyKCkgb3IgZ2V0TG9hZGVycygpIGluc3RlYWQuIFRoaXMgd2lsbCBiZSByZW1vdmVkIGluIHRoZSB2ZXJzaW9uIDgueC54XHJcbiAgICogUmV0dXJuIHN0YXR1cyBvZiBtYXN0ZXIgbG9hZGVyXHJcbiAgICovXHJcbiAgZ2V0U3RhdHVzKCk6IHsgd2FpdGluZ0JhY2tncm91bmQ6IFRhc2ssIHdhaXRpbmdGb3JlZ3JvdW5kOiBUYXNrIH0ge1xyXG4gICAgdGhpcy50aHJvd0Vycm9ySWZNYXN0ZXJMb2FkZXJOb3RFeGlzdCgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2FpdGluZ0JhY2tncm91bmQ6IHRoaXMubG9hZGVyc1t0aGlzLmRlZmF1bHRDb25maWcubWFzdGVyTG9hZGVySWRdLmJhY2tncm91bmQsXHJcbiAgICAgIHdhaXRpbmdGb3JlZ3JvdW5kOiB0aGlzLmxvYWRlcnNbdGhpcy5kZWZhdWx0Q29uZmlnLm1hc3RlckxvYWRlcklkXS5mb3JlZ3JvdW5kXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgcXVldWUgaGFzIGEgd2FpdGluZyBmb3JlZ3JvdW5kIGxvYWRlciB3aXRoIHRoZSBnaXZlbiBgdGFza0lkYC5cclxuICAgKiBJZiBubyBgdGFza0lkYCBzcGVjaWZpZWQsIGl0IHdpbGwgY2hlY2sgd2hldGhlciB0aGUgcXVldWUgaGFzIGFueSB3YWl0aW5nIGZvcmVncm91bmQgbG9hZGVyLlxyXG4gICAqIEBwYXJhbSBsb2FkZXJJZCB0aGUgbG9hZGVyIElkXHJcbiAgICogQHBhcmFtIHRhc2tJZCB0aGUgb3B0aW9uYWwgdGFzayBJZFxyXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cclxuICAgKi9cclxuICBoYXNGb3JlZ3JvdW5kKGxvYWRlcklkOiBzdHJpbmcsIHRhc2tJZD86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMubG9hZGVyc1tsb2FkZXJJZF0pIHtcclxuICAgICAgaWYgKHRhc2tJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlcnNbbG9hZGVySWRdLmZvcmVncm91bmRbdGFza0lkXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5sb2FkZXJzW2xvYWRlcklkXS5mb3JlZ3JvdW5kKS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgcXVldWUgaGFzIGEgd2FpdGluZyBiYWNrZ3JvdW5kIGxvYWRlciB3aXRoIHRoZSBnaXZlbiBgdGFza0lkYC5cclxuICAgKiBJZiBubyBgdGFza0lkYCBzcGVjaWZpZWQsIGl0IHdpbGwgY2hlY2sgd2hldGhlciB0aGUgcXVldWUgaGFzIGFueSB3YWl0aW5nIGJhY2tncm91bmQgbG9hZGVyLlxyXG4gICAqIEBwYXJhbSBsb2FkZXJJZCB0aGUgbG9hZGVyIElkXHJcbiAgICogQHBhcmFtIHRhc2tJZCB0aGUgb3B0aW9uYWwgdGFzayBJZFxyXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cclxuICAgKi9cclxuICBoYXNCYWNrZ3JvdW5kKGxvYWRlcklkOiBzdHJpbmcsIHRhc2tJZD86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMubG9hZGVyc1tsb2FkZXJJZF0pIHtcclxuICAgICAgaWYgKHRhc2tJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlcnNbbG9hZGVySWRdLmJhY2tncm91bmRbdGFza0lkXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5sb2FkZXJzW2xvYWRlcklkXS5iYWNrZ3JvdW5kKS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgdGhlIGZvcmVncm91bmQgbG9hZGluZyBvZiBsb2FkZXIgaGF2aW5nIGBsb2FkZXJJZGAgd2l0aCBhIHNwZWNpZmllZCBgdGFza0lkYC5cclxuICAgKiBUaGUgbG9hZGluZyBpcyBvbmx5IGNsb3NlZCBvZmYgd2hlbiBhbGwgdGFza0lkcyBvZiB0aGF0IGxvYWRlciBhcmUgY2FsbGVkIHdpdGggc3RvcExvYWRlcigpIG1ldGhvZC5cclxuICAgKiBAcGFyYW0gbG9hZGVySWQgdGhlIGxvYWRlciBJZFxyXG4gICAqIEBwYXJhbSB0YXNrSWQgdGhlIG9wdGlvbmFsIHRhc2sgSWQgb2YgdGhlIGxvYWRpbmcuIHRhc2tJZCBpcyBzZXQgdG8gJ2RlZmF1bHQnIGJ5IGRlZmF1bHQuXHJcbiAgICovXHJcbiAgc3RhcnRMb2FkZXIobG9hZGVySWQ6IHN0cmluZywgdGFza0lkOiBzdHJpbmcgPSBERUZBVUxUX1RBU0tfSUQpOiB2b2lkIHtcclxuICAgIHRoaXMuY3JlYXRlTG9hZGVyRGF0YShsb2FkZXJJZCwgdW5kZWZpbmVkLCBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZm9yZWdyb3VuZFJ1bm5pbmcgPSB0aGlzLmhhc0ZvcmVncm91bmQobG9hZGVySWQpO1xyXG4gICAgdGhpcy5sb2FkZXJzW2xvYWRlcklkXS5mb3JlZ3JvdW5kW3Rhc2tJZF0gPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGlmICghdGhpcy5sb2FkZXJzW2xvYWRlcklkXS5pc0JvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWZvcmVncm91bmRSdW5uaW5nKSB7XHJcbiAgICAgIGlmICh0aGlzLmhhc0JhY2tncm91bmQobG9hZGVySWQpKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2xvc2VvdXQobG9hZGVySWQpO1xyXG4gICAgICAgIHRoaXMuc2hvd0JhY2tncm91bmQubmV4dCh7IGxvYWRlcklkLCBpc1Nob3c6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd0ZvcmVncm91bmQubmV4dCh7IGxvYWRlcklkLCBpc1Nob3c6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCB0aGUgZm9yZWdyb3VuZCBsb2FkaW5nIG9mIG1hc3RlciBsb2FkZXIgd2l0aCBhIHNwZWNpZmllZCBgdGFza0lkYC5cclxuICAgKiBUaGUgbG9hZGluZyBpcyBvbmx5IGNsb3NlZCBvZmYgd2hlbiBhbGwgdGFza0lkcyBvZiB0aGF0IGxvYWRlciBhcmUgY2FsbGVkIHdpdGggc3RvcCgpIG1ldGhvZC5cclxuICAgKiBOT1RFOiBSZWFsbHkgdGhpcyBmdW5jdGlvbiBqdXN0IHdyYXBzIHN0YXJ0TG9hZGVyKCkgZnVuY3Rpb25cclxuICAgKiBAcGFyYW0gdGFza0lkIHRoZSBvcHRpb25hbCB0YXNrIElkIG9mIHRoZSBsb2FkaW5nLiB0YXNrSWQgaXMgc2V0IHRvICdkZWZhdWx0JyBieSBkZWZhdWx0LlxyXG4gICAqL1xyXG4gIHN0YXJ0KHRhc2tJZDogc3RyaW5nID0gREVGQVVMVF9UQVNLX0lEKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXJ0TG9hZGVyKHRoaXMuZGVmYXVsdENvbmZpZy5tYXN0ZXJMb2FkZXJJZCwgdGFza0lkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSBiYWNrZ3JvdW5kIGxvYWRpbmcgb2YgbG9hZGVyIGhhdmluZyBgbG9hZGVySWRgIHdpdGggYSBzcGVjaWZpZWQgYHRhc2tJZGAuXHJcbiAgICogVGhlIGxvYWRpbmcgaXMgb25seSBjbG9zZWQgb2ZmIHdoZW4gYWxsIHRhc2tJZHMgb2YgdGhhdCBsb2FkZXIgYXJlIGNhbGxlZCB3aXRoIHN0b3BMb2FkZXJCYWNrZ3JvdW5kKCkgbWV0aG9kLlxyXG4gICAqIEBwYXJhbSBsb2FkZXJJZCB0aGUgbG9hZGVyIElkXHJcbiAgICogQHBhcmFtIHRhc2tJZCB0aGUgb3B0aW9uYWwgdGFzayBJZCBvZiB0aGUgbG9hZGluZy4gdGFza0lkIGlzIHNldCB0byAnZGVmYXVsdCcgYnkgZGVmYXVsdC5cclxuICAgKi9cclxuICBzdGFydEJhY2tncm91bmRMb2FkZXIobG9hZGVySWQ6IHN0cmluZywgdGFza0lkOiBzdHJpbmcgPSBERUZBVUxUX1RBU0tfSUQpOiB2b2lkIHtcclxuICAgIHRoaXMuY3JlYXRlTG9hZGVyRGF0YShsb2FkZXJJZCwgdW5kZWZpbmVkLCBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5sb2FkZXJzW2xvYWRlcklkXS5iYWNrZ3JvdW5kW3Rhc2tJZF0gPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGlmICghdGhpcy5sb2FkZXJzW2xvYWRlcklkXS5pc0JvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaGFzRm9yZWdyb3VuZChsb2FkZXJJZCkpIHtcclxuICAgICAgdGhpcy5zaG93QmFja2dyb3VuZC5uZXh0KHsgbG9hZGVySWQsIGlzU2hvdzogdHJ1ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSBiYWNrZ3JvdW5kIGxvYWRpbmcgb2YgbWFzdGVyIGxvYWRlciB3aXRoIGEgc3BlY2lmaWVkIGB0YXNrSWRgLlxyXG4gICAqIFRoZSBsb2FkaW5nIGlzIG9ubHkgY2xvc2VkIG9mZiB3aGVuIGFsbCB0YXNrSWRzIG9mIHRoYXQgbG9hZGVyIGFyZSBjYWxsZWQgd2l0aCBzdG9wQmFja2dyb3VuZCgpIG1ldGhvZC5cclxuICAgKiBOT1RFOiBSZWFsbHkgdGhpcyBmdW5jdGlvbiBqdXN0IHdyYXBzIHN0YXJ0QmFja2dyb3VuZExvYWRlcigpIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHRhc2tJZCB0aGUgb3B0aW9uYWwgdGFzayBJZCBvZiB0aGUgbG9hZGluZy4gdGFza0lkIGlzIHNldCB0byAnZGVmYXVsdCcgYnkgZGVmYXVsdC5cclxuICAgKi9cclxuICBzdGFydEJhY2tncm91bmQodGFza0lkOiBzdHJpbmcgPSBERUZBVUxUX1RBU0tfSUQpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhcnRCYWNrZ3JvdW5kTG9hZGVyKHRoaXMuZGVmYXVsdENvbmZpZy5tYXN0ZXJMb2FkZXJJZCwgdGFza0lkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgYSBmb3JlZ3JvdW5kIGxvYWRpbmcgb2YgbG9hZGVyIGhhdmluZyBgbG9hZGVySWRgIHdpdGggc3BlY2lmaWMgYHRhc2tJZGBcclxuICAgKiBAcGFyYW0gbG9hZGVySWQgdGhlIGxvYWRlciBJZFxyXG4gICAqIEBwYXJhbSB0YXNrSWQgdGhlIG9wdGlvbmFsIHRhc2sgSWQgdG8gc3RvcC4gSWYgbm90IHByb3ZpZGVkLCAnZGVmYXVsdCcgaXMgdXNlZC5cclxuICAgKiBAcmV0dXJucyBPYmplY3RcclxuICAgKi9cclxuICBzdG9wTG9hZGVyKGxvYWRlcklkOiBzdHJpbmcsIHRhc2tJZDogc3RyaW5nID0gREVGQVVMVF9UQVNLX0lEKTogdm9pZCB7XHJcbiAgICB0aGlzLnRocm93RXJyb3JJZkxvYWRlck5vdEV4aXN0KGxvYWRlcklkKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgbG9hZGVyIGRhdGEge3t7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgaWYgKHRoaXMuaGFzRm9yZWdyb3VuZChsb2FkZXJJZCwgdGFza0lkKSkge1xyXG4gICAgICBpZiAodGhpcy5sb2FkZXJzW2xvYWRlcklkXS5mb3JlZ3JvdW5kW3Rhc2tJZF0gKyB0aGlzLmRlZmF1bHRDb25maWcudGhyZXNob2xkID4gbm93KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN0b3BMb2FkZXIobG9hZGVySWQsIHRhc2tJZCk7XHJcbiAgICAgICAgfSwgdGhpcy5sb2FkZXJzW2xvYWRlcklkXS5mb3JlZ3JvdW5kW3Rhc2tJZF0gKyB0aGlzLmRlZmF1bHRDb25maWcudGhyZXNob2xkIC0gbm93KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZGVsZXRlIHRoaXMubG9hZGVyc1tsb2FkZXJJZF0uZm9yZWdyb3VuZFt0YXNrSWRdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gfX19XHJcblxyXG4gICAgLy8gRW1pdCBTaG93RXZlbnRzIHRvIHVwZGF0ZSB2aWV3IHt7e1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvcmVncm91bmQobG9hZGVySWQpKSB7XHJcbiAgICAgIHRoaXMuZm9yZWdyb3VuZENsb3Nlb3V0KGxvYWRlcklkKTtcclxuICAgICAgdGhpcy5zaG93Rm9yZWdyb3VuZC5uZXh0KHsgbG9hZGVySWQsIGlzU2hvdzogZmFsc2UgfSk7XHJcbiAgICAgIGlmICh0aGlzLmhhc0JhY2tncm91bmQobG9hZGVySWQpKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5oYXNCYWNrZ3JvdW5kKGxvYWRlcklkKSkgeyAvLyBzdGlsbCBoYXZlIGJhY2tncm91bmQgdGFza3NcclxuICAgICAgICAgICAgdGhpcy5zaG93QmFja2dyb3VuZC5uZXh0KHsgbG9hZGVySWQsIGlzU2hvdzogdHJ1ZSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBXQUlUSU5HX0ZPUl9PVkVSTEFZX0RJU0FQUEVBUik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIH19fVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBhIGZvcmVncm91bmQgbG9hZGluZyBvZiBtYXN0ZXIgbG9hZGVyIHdpdGggc3BlY2lmaWMgYHRhc2tJZGBcclxuICAgKiBAcGFyYW0gdGFza0lkIHRoZSBvcHRpb25hbCB0YXNrIElkIHRvIHN0b3AuIElmIG5vdCBwcm92aWRlZCwgJ2RlZmF1bHQnIGlzIHVzZWQuXHJcbiAgICogQHJldHVybnMgT2JqZWN0XHJcbiAgICovXHJcbiAgc3RvcCh0YXNrSWQ6IHN0cmluZyA9IERFRkFVTFRfVEFTS19JRCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdG9wTG9hZGVyKHRoaXMuZGVmYXVsdENvbmZpZy5tYXN0ZXJMb2FkZXJJZCwgdGFza0lkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgYSBiYWNrZ3JvdW5kIGxvYWRpbmcgb2YgbG9hZGVyIGhhdmluZyBgbG9hZGVySWRgIHdpdGggc3BlY2lmaWMgYHRhc2tJZGBcclxuICAgKiBAcGFyYW0gbG9hZGVySWQgdGhlIGxvYWRlciBJZFxyXG4gICAqIEBwYXJhbSB0YXNrSWQgdGhlIG9wdGlvbmFsIHRhc2sgSWQgdG8gc3RvcC4gSWYgbm90IHByb3ZpZGVkLCAnZGVmYXVsdCcgaXMgdXNlZC5cclxuICAgKiBAcmV0dXJucyBPYmplY3RcclxuICAgKi9cclxuICBzdG9wQmFja2dyb3VuZExvYWRlcihsb2FkZXJJZDogc3RyaW5nLCB0YXNrSWQ6IHN0cmluZyA9IERFRkFVTFRfVEFTS19JRCk6IHZvaWQge1xyXG4gICAgdGhpcy50aHJvd0Vycm9ySWZMb2FkZXJOb3RFeGlzdChsb2FkZXJJZCk7XHJcblxyXG4gICAgLy8gVXBkYXRlIGxvYWRlciBkYXRhIHt7e1xyXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgIGlmICh0aGlzLmhhc0JhY2tncm91bmQobG9hZGVySWQsIHRhc2tJZCkpIHtcclxuICAgICAgaWYgKHRoaXMubG9hZGVyc1tsb2FkZXJJZF0uYmFja2dyb3VuZFt0YXNrSWRdICsgdGhpcy5kZWZhdWx0Q29uZmlnLnRocmVzaG9sZCA+IG5vdykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdG9wQmFja2dyb3VuZExvYWRlcihsb2FkZXJJZCwgdGFza0lkKTtcclxuICAgICAgICB9LCB0aGlzLmxvYWRlcnNbbG9hZGVySWRdLmJhY2tncm91bmRbdGFza0lkXSArIHRoaXMuZGVmYXVsdENvbmZpZy50aHJlc2hvbGQgLSBub3cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBkZWxldGUgdGhpcy5sb2FkZXJzW2xvYWRlcklkXS5iYWNrZ3JvdW5kW3Rhc2tJZF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyB9fX1cclxuXHJcbiAgICAvLyBFbWl0IFNob3dFdmVudHMgdG8gdXBkYXRlIHZpZXcge3t7XHJcbiAgICBpZiAoIXRoaXMuaGFzRm9yZWdyb3VuZChsb2FkZXJJZCkgJiYgIXRoaXMuaGFzQmFja2dyb3VuZChsb2FkZXJJZCkpIHtcclxuICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2xvc2VvdXQobG9hZGVySWQpO1xyXG4gICAgICB0aGlzLnNob3dCYWNrZ3JvdW5kLm5leHQoeyBsb2FkZXJJZCwgaXNTaG93OiBmYWxzZSB9KTtcclxuICAgIH1cclxuICAgIC8vIH19fVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBhIGJhY2tncm91bmQgbG9hZGluZyBvZiBtYXN0ZXIgbG9hZGVyIHdpdGggc3BlY2lmaWMgdGFza0lkXHJcbiAgICogQHBhcmFtIHRhc2tJZCB0aGUgb3B0aW9uYWwgdGFzayBJZCB0byBzdG9wLiBJZiBub3QgcHJvdmlkZWQsICdkZWZhdWx0JyBpcyB1c2VkLlxyXG4gICAqIEByZXR1cm5zIE9iamVjdFxyXG4gICAqL1xyXG4gIHN0b3BCYWNrZ3JvdW5kKHRhc2tJZDogc3RyaW5nID0gREVGQVVMVF9UQVNLX0lEKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3BCYWNrZ3JvdW5kTG9hZGVyKHRoaXMuZGVmYXVsdENvbmZpZy5tYXN0ZXJMb2FkZXJJZCwgdGFza0lkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgYWxsIHRoZSBiYWNrZ3JvdW5kIGFuZCBmb3JlZ3JvdW5kIGxvYWRpbmdzIG9mIGxvYWRlciBoYXZpbmcgYGxvYWRlcklkYFxyXG4gICAqIEBwYXJhbSBsb2FkZXJJZCB0aGUgbG9hZGVyIElkXHJcbiAgICovXHJcbiAgc3RvcExvYWRlckFsbChsb2FkZXJJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnRocm93RXJyb3JJZkxvYWRlck5vdEV4aXN0KGxvYWRlcklkKTtcclxuXHJcbiAgICBpZiAodGhpcy5oYXNGb3JlZ3JvdW5kKGxvYWRlcklkKSkge1xyXG4gICAgICB0aGlzLmZvcmVncm91bmRDbG9zZW91dChsb2FkZXJJZCk7XHJcbiAgICAgIHRoaXMuc2hvd0ZvcmVncm91bmQubmV4dCh7IGxvYWRlcklkLCBpc1Nob3c6IGZhbHNlIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmhhc0JhY2tncm91bmQobG9hZGVySWQpKSB7XHJcbiAgICAgIHRoaXMuYmFja2dyb3VuZENsb3Nlb3V0KGxvYWRlcklkKTtcclxuICAgICAgdGhpcy5zaG93QmFja2dyb3VuZC5uZXh0KHsgbG9hZGVySWQsIGlzU2hvdzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvYWRlcnNbbG9hZGVySWRdLmZvcmVncm91bmQgPSB7fTtcclxuICAgIHRoaXMubG9hZGVyc1tsb2FkZXJJZF0uYmFja2dyb3VuZCA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBhbGwgdGhlIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgbG9hZGluZ3Mgb2YgbWFzdGVyIGxvYWRlclxyXG4gICAqL1xyXG4gIHN0b3BBbGwoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3BMb2FkZXJBbGwodGhpcy5kZWZhdWx0Q29uZmlnLm1hc3RlckxvYWRlcklkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBsb2FkZXIgZGF0YSBpZiBpdCBkb2VzIG5vdCBleGlzdFxyXG4gICAqIEBwYXJhbSBsb2FkZXJJZFxyXG4gICAqIEBwYXJhbSBpc01hc3RlclxyXG4gICAqIEBwYXJhbSBpc0JvdW5kXHJcbiAgICogQGRvY3MtcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgY3JlYXRlTG9hZGVyRGF0YShsb2FkZXJJZDogc3RyaW5nLCBpc01hc3RlcjogYm9vbGVhbiwgaXNCb3VuZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmxvYWRlcnNbbG9hZGVySWRdKSB7XHJcbiAgICAgIHRoaXMubG9hZGVyc1tsb2FkZXJJZF0gPSB7XHJcbiAgICAgICAgbG9hZGVySWQsXHJcbiAgICAgICAgZm9yZWdyb3VuZDoge30sXHJcbiAgICAgICAgYmFja2dyb3VuZDoge30sXHJcbiAgICAgICAgaXNNYXN0ZXIsXHJcbiAgICAgICAgaXNCb3VuZFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhyb3cgZXJyb3IgaWYgdGhlIGxvYWRlcklkIGRvZXMgbm90IGV4aXN0LlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHRocm93RXJyb3JJZkxvYWRlck5vdEV4aXN0KGxvYWRlcklkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5sb2FkZXJzW2xvYWRlcklkXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtuZ3gtdWktbG9hZGVyXSAtIGxvYWRlcklkIFwiJHtsb2FkZXJJZH1cIiBkb2VzIG5vdCBleGlzdC5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRocm93IGVycm9yIGlmIHRoZSBsb2FkZXJJZCBoYXMgYWxyZWFkeSBleGlzdGVkLlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHRocm93RXJyb3JJZkxvYWRlckV4aXN0cyhsb2FkZXJJZDogc3RyaW5nLCB1c2VJc0JvdW5kUHJvcD86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxvYWRlcnNbbG9hZGVySWRdICYmICh0aGlzLmxvYWRlcnNbbG9hZGVySWRdLmlzQm91bmQgJiYgdXNlSXNCb3VuZFByb3ApKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW25neC11aS1sb2FkZXJdIC0gbG9hZGVySWQgXCIke2xvYWRlcklkfVwiIGlzIGR1cGxpY2F0ZWQuIFBsZWFzZSBjaG9vc2UgYW5vdGhlciBvbmUhYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaHJvdyBlcnJvciBpZiB0aGUgbWFzdGVyIGxvYWRlciBoYXMgYWxyZWFkeSBleGlzdGVkLlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHRocm93RXJyb3JJZk1hc3RlckxvYWRlckV4aXN0cyh1c2VJc0JvdW5kUHJvcD86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxvYWRlcnNbdGhpcy5kZWZhdWx0Q29uZmlnLm1hc3RlckxvYWRlcklkXSAmJiAodGhpcy5sb2FkZXJzW3RoaXMuZGVmYXVsdENvbmZpZy5tYXN0ZXJMb2FkZXJJZF0uaXNCb3VuZCAmJiB1c2VJc0JvdW5kUHJvcCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbbmd4LXVpLWxvYWRlcl0gLSBUaGUgbWFzdGVyIGxvYWRlciBoYXMgYWxyZWFkeSBleGlzdGVkLiBgXHJcbiAgICAgICAgKyBgVGhlIGFwcCBzaG91bGQgaGF2ZSBvbmx5IG9uZSBtYXN0ZXIgbG9hZGVyIGFuZCBpdCBzaG91bGQgYmUgcGxhY2VkIGluIHRoZSByb290IGFwcCB0ZW1wbGF0ZWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhyb3cgZXJyb3IgaWYgdGhlIG1hc3RlciBsb2FkZXIgZG9lcyBub3QgZXhpc3QuXHJcbiAgICogQGRvY3MtcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgdGhyb3dFcnJvcklmTWFzdGVyTG9hZGVyTm90RXhpc3QoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubG9hZGVyc1t0aGlzLmRlZmF1bHRDb25maWcubWFzdGVyTG9hZGVySWRdKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW25neC11aS1sb2FkZXJdIC0gVGhlIG1hc3RlciBsb2FkZXIgZG9lcyBub3QgZXhpc3QuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYW5hZ2UgdG8gY2xvc2UgZm9yZWdyb3VuZCBsb2FkaW5nXHJcbiAgICogQHBhcmFtIGxvYWRlcklkIHRoZSBsb2FkZXIgaWRcclxuICAgKi9cclxuICBwcml2YXRlIGZvcmVncm91bmRDbG9zZW91dChsb2FkZXJJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmZnQ2xvc2luZy5uZXh0KHsgbG9hZGVySWQsIGlzU2hvdzogdHJ1ZSB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmZnQ2xvc2luZy5uZXh0KHsgbG9hZGVySWQsIGlzU2hvdzogZmFsc2UgfSk7XHJcbiAgICB9LCBDTE9TSU5HX1RJTUUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFuYWdlIHRvIGNsb3NlIGJhY2tncm91bmQgbG9hZGluZ1xyXG4gICAqIEBwYXJhbSBsb2FkZXJJZCB0aGUgbG9hZGVyIGlkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBiYWNrZ3JvdW5kQ2xvc2VvdXQobG9hZGVySWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5iZ0Nsb3NpbmcubmV4dCh7IGxvYWRlcklkLCBpc1Nob3c6IHRydWUgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5iZ0Nsb3NpbmcubmV4dCh7IGxvYWRlcklkLCBpc1Nob3c6IGZhbHNlIH0pO1xyXG4gICAgfSwgQ0xPU0lOR19USU1FKTtcclxuICB9XHJcbn1cclxuIl19