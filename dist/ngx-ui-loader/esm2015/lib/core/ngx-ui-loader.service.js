/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CLOSING_TIME, DEFAULT_TASK_ID, DEFAULT_CONFIG, WAITING_FOR_OVERLAY_DISAPPEAR } from './ngx-ui-loader.contants';
import { NGX_UI_LOADER_CONFIG_TOKEN } from './ngx-ui-loader-config.token';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-ui-loader-config.token";
export class NgxUiLoaderService {
    /**
     * Constructor
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.defaultConfig = Object.assign({}, DEFAULT_CONFIG);
        if (this.config) {
            if (this.config.threshold && this.config.threshold <= 0) {
                this.config.threshold = DEFAULT_CONFIG.threshold;
            }
            this.defaultConfig = Object.assign({}, this.defaultConfig, this.config);
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
     * \@docs-private
     * @param {?} loaderId
     * @return {?}
     */
    initLoaderData(loaderId) {
        /** @type {?} */
        let isMaster = false;
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
                this.showForeground.next({ loaderId, isShow: true });
            }
            else {
                if (this.hasBackground(loaderId)) {
                    this.showBackground.next({ loaderId, isShow: true });
                }
            }
        }
        else {
            this.createLoaderData(loaderId, isMaster, true);
        }
    }
    /**
     * For internal use only. It may be changed in the future.
     * \@docs-private
     * @param {?} loaderId
     * @param {?} newLoaderId
     * @return {?}
     */
    updateLoaderId(loaderId, newLoaderId) {
        this.throwErrorIfLoaderNotExist(loaderId);
        if (this.loaders[loaderId].loaderId === this.defaultConfig.masterLoaderId) {
            console.warn(`[ngx-ui-loader] - Cannot change loaderId of master loader. The current ` +
                `master's loaderId is "${this.defaultConfig.masterLoaderId}". If you really want to ` +
                `change it, please use NgxUiLoaderModule.forRoot() method.`);
            return;
        }
        if (newLoaderId !== loaderId) {
            this.throwErrorIfLoaderExists(newLoaderId, true);
            this.loaders[newLoaderId] = {
                loaderId: newLoaderId,
                background: Object.assign({}, this.loaders[loaderId].background),
                foreground: Object.assign({}, this.loaders[loaderId].foreground),
                isMaster: false,
                isBound: this.loaders[loaderId].isBound
            };
            delete this.loaders[loaderId];
        }
    }
    /**
     * For internal use only. It may be changed in the future.
     * \@docs-private
     * @param {?} loaderId
     * @return {?}
     */
    destroyLoaderData(loaderId) {
        this.stopLoaderAll(loaderId);
        delete this.loaders[loaderId];
    }
    /**
     * Get default loader configuration
     * @return {?} default configuration object
     */
    getDefaultConfig() {
        return Object.assign({}, this.defaultConfig);
    }
    /**
     * Get all the loaders
     * @return {?}
     */
    getLoaders() {
        return JSON.parse(JSON.stringify(this.loaders));
    }
    /**
     * Get data of a specified loader. If loaderId is not provided, it will return data of master loader(if existed)
     * @param {?=} loaderId
     * @return {?}
     */
    getLoader(loaderId) {
        if (loaderId) {
            this.throwErrorIfLoaderNotExist(loaderId);
        }
        else {
            this.throwErrorIfMasterLoaderNotExist();
            loaderId = this.defaultConfig.masterLoaderId;
        }
        return JSON.parse(JSON.stringify(this.loaders[loaderId]));
    }
    /**
     * @deprecated use getLoader() or getLoaders() instead. This will be removed in the version 8.x.x
     * Return status of master loader
     * @return {?}
     */
    getStatus() {
        this.throwErrorIfMasterLoaderNotExist();
        return {
            waitingBackground: this.loaders[this.defaultConfig.masterLoaderId].background,
            waitingForeground: this.loaders[this.defaultConfig.masterLoaderId].foreground
        };
    }
    /**
     * Check whether the queue has a waiting foreground loader with the given `taskId`.
     * If no `taskId` specified, it will check whether the queue has any waiting foreground loader.
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id
     * @return {?} boolean
     */
    hasForeground(loaderId, taskId) {
        if (this.loaders[loaderId]) {
            if (taskId) {
                return this.loaders[loaderId].foreground[taskId] ? true : false;
            }
            return Object.keys(this.loaders[loaderId].foreground).length > 0;
        }
        return false;
    }
    /**
     * Check whether the queue has a waiting background loader with the given `taskId`.
     * If no `taskId` specified, it will check whether the queue has any waiting background loader.
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id
     * @return {?} boolean
     */
    hasBackground(loaderId, taskId) {
        if (this.loaders[loaderId]) {
            if (taskId) {
                return this.loaders[loaderId].background[taskId] ? true : false;
            }
            return Object.keys(this.loaders[loaderId].background).length > 0;
        }
        return false;
    }
    /**
     * Start the foreground loading of loader having `loaderId` with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stopLoader() method.
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
     * @return {?}
     */
    startLoader(loaderId, taskId = DEFAULT_TASK_ID) {
        this.createLoaderData(loaderId, undefined, false);
        /** @type {?} */
        const foregroundRunning = this.hasForeground(loaderId);
        this.loaders[loaderId].foreground[taskId] = Date.now();
        if (!this.loaders[loaderId].isBound) {
            return;
        }
        if (!foregroundRunning) {
            if (this.hasBackground(loaderId)) {
                this.backgroundCloseout(loaderId);
                this.showBackground.next({ loaderId, isShow: false });
            }
            this.showForeground.next({ loaderId, isShow: true });
        }
    }
    /**
     * Start the foreground loading of master loader with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stop() method.
     * NOTE: Really this function just wraps startLoader() function
     * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
     * @return {?}
     */
    start(taskId = DEFAULT_TASK_ID) {
        this.startLoader(this.defaultConfig.masterLoaderId, taskId);
    }
    /**
     * Start the background loading of loader having `loaderId` with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stopLoaderBackground() method.
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
     * @return {?}
     */
    startBackgroundLoader(loaderId, taskId = DEFAULT_TASK_ID) {
        this.createLoaderData(loaderId, undefined, false);
        this.loaders[loaderId].background[taskId] = Date.now();
        if (!this.loaders[loaderId].isBound) {
            return;
        }
        if (!this.hasForeground(loaderId)) {
            this.showBackground.next({ loaderId, isShow: true });
        }
    }
    /**
     * Start the background loading of master loader with a specified `taskId`.
     * The loading is only closed off when all taskIds of that loader are called with stopBackground() method.
     * NOTE: Really this function just wraps startBackgroundLoader() function
     * @param {?=} taskId the optional task Id of the loading. taskId is set to 'default' by default.
     * @return {?}
     */
    startBackground(taskId = DEFAULT_TASK_ID) {
        this.startBackgroundLoader(this.defaultConfig.masterLoaderId, taskId);
    }
    /**
     * Stop a foreground loading of loader having `loaderId` with specific `taskId`
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    stopLoader(loaderId, taskId = DEFAULT_TASK_ID) {
        this.throwErrorIfLoaderNotExist(loaderId);
        // Update loader data {{{
        /** @type {?} */
        const now = Date.now();
        if (this.hasForeground(loaderId, taskId)) {
            if (this.loaders[loaderId].foreground[taskId] + this.defaultConfig.threshold > now) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.stopLoader(loaderId, taskId);
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
            this.showForeground.next({ loaderId, isShow: false });
            if (this.hasBackground(loaderId)) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    if (this.hasBackground(loaderId)) { // still have background tasks
                        this.showBackground.next({ loaderId, isShow: true });
                    }
                }), WAITING_FOR_OVERLAY_DISAPPEAR);
            }
        }
        // }}}
    }
    /**
     * Stop a foreground loading of master loader with specific `taskId`
     * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    stop(taskId = DEFAULT_TASK_ID) {
        this.stopLoader(this.defaultConfig.masterLoaderId, taskId);
    }
    /**
     * Stop a background loading of loader having `loaderId` with specific `taskId`
     * @param {?} loaderId the loader Id
     * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    stopBackgroundLoader(loaderId, taskId = DEFAULT_TASK_ID) {
        this.throwErrorIfLoaderNotExist(loaderId);
        // Update loader data {{{
        /** @type {?} */
        const now = Date.now();
        if (this.hasBackground(loaderId, taskId)) {
            if (this.loaders[loaderId].background[taskId] + this.defaultConfig.threshold > now) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.stopBackgroundLoader(loaderId, taskId);
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
            this.showBackground.next({ loaderId, isShow: false });
        }
        // }}}
    }
    /**
     * Stop a background loading of master loader with specific taskId
     * @param {?=} taskId the optional task Id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    stopBackground(taskId = DEFAULT_TASK_ID) {
        this.stopBackgroundLoader(this.defaultConfig.masterLoaderId, taskId);
    }
    /**
     * Stop all the background and foreground loadings of loader having `loaderId`
     * @param {?} loaderId the loader Id
     * @return {?}
     */
    stopLoaderAll(loaderId) {
        this.throwErrorIfLoaderNotExist(loaderId);
        if (this.hasForeground(loaderId)) {
            this.foregroundCloseout(loaderId);
            this.showForeground.next({ loaderId, isShow: false });
        }
        else if (this.hasBackground(loaderId)) {
            this.backgroundCloseout(loaderId);
            this.showBackground.next({ loaderId, isShow: false });
        }
        this.loaders[loaderId].foreground = {};
        this.loaders[loaderId].background = {};
    }
    /**
     * Stop all the background and foreground loadings of master loader
     * @return {?}
     */
    stopAll() {
        this.stopLoaderAll(this.defaultConfig.masterLoaderId);
    }
    /**
     * Create loader data if it does not exist
     * \@docs-private
     * @private
     * @param {?} loaderId
     * @param {?} isMaster
     * @param {?} isBound
     * @return {?}
     */
    createLoaderData(loaderId, isMaster, isBound) {
        if (!this.loaders[loaderId]) {
            this.loaders[loaderId] = {
                loaderId,
                foreground: {},
                background: {},
                isMaster,
                isBound
            };
        }
    }
    /**
     * Throw error if the loaderId does not exist.
     * \@docs-private
     * @private
     * @param {?} loaderId
     * @return {?}
     */
    throwErrorIfLoaderNotExist(loaderId) {
        if (!this.loaders[loaderId]) {
            throw new Error(`[ngx-ui-loader] - loaderId "${loaderId}" does not exist.`);
        }
    }
    /**
     * Throw error if the loaderId has already existed.
     * \@docs-private
     * @private
     * @param {?} loaderId
     * @param {?=} useIsBoundProp
     * @return {?}
     */
    throwErrorIfLoaderExists(loaderId, useIsBoundProp) {
        if (this.loaders[loaderId] && (this.loaders[loaderId].isBound && useIsBoundProp)) {
            throw new Error(`[ngx-ui-loader] - loaderId "${loaderId}" is duplicated. Please choose another one!`);
        }
    }
    /**
     * Throw error if the master loader has already existed.
     * \@docs-private
     * @private
     * @param {?=} useIsBoundProp
     * @return {?}
     */
    throwErrorIfMasterLoaderExists(useIsBoundProp) {
        if (this.loaders[this.defaultConfig.masterLoaderId] && (this.loaders[this.defaultConfig.masterLoaderId].isBound && useIsBoundProp)) {
            throw new Error(`[ngx-ui-loader] - The master loader has already existed. `
                + `The app should have only one master loader and it should be placed in the root app template`);
        }
    }
    /**
     * Throw error if the master loader does not exist.
     * \@docs-private
     * @private
     * @return {?}
     */
    throwErrorIfMasterLoaderNotExist() {
        if (!this.loaders[this.defaultConfig.masterLoaderId]) {
            throw new Error(`[ngx-ui-loader] - The master loader does not exist.`);
        }
    }
    /**
     * Manage to close foreground loading
     * @private
     * @param {?} loaderId the loader id
     * @return {?}
     */
    foregroundCloseout(loaderId) {
        this.fgClosing.next({ loaderId, isShow: true });
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.fgClosing.next({ loaderId, isShow: false });
        }), CLOSING_TIME);
    }
    /**
     * Manage to close background loading
     * @private
     * @param {?} loaderId the loader id
     * @return {?}
     */
    backgroundCloseout(loaderId) {
        this.bgClosing.next({ loaderId, isShow: true });
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.bgClosing.next({ loaderId, isShow: false });
        }), CLOSING_TIME);
    }
}
NgxUiLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxUiLoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_UI_LOADER_CONFIG_TOKEN,] }] }
];
/** @nocollapse */ NgxUiLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function NgxUiLoaderService_Factory() { return new NgxUiLoaderService(i0.inject(i1.NGX_UI_LOADER_CONFIG_TOKEN, 8)); }, token: NgxUiLoaderService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXVpLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25neC11aS1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7OztBQU8xRSxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQXdDN0IsWUFBb0UsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFFM0YsSUFBSSxDQUFDLGFBQWEscUJBQVEsY0FBYyxDQUFFLENBQUM7UUFFM0MsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUM7YUFDbEQ7WUFDRCxJQUFJLENBQUMsYUFBYSxxQkFBUSxJQUFJLENBQUMsYUFBYSxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztTQUNoRTtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxlQUFlLENBQVksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxlQUFlLEdB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QUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoRCxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDLEdBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7O1lBNWNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs0Q0F5Q2MsUUFBUSxZQUFJLE1BQU0sU0FBQywwQkFBMEI7Ozs7Ozs7OztJQWhDMUQsZ0RBQTBDOzs7Ozs7SUFNMUMsZ0RBQTBDOzs7Ozs7SUFNMUMsNkNBQXVDOzs7Ozs7SUFNdkMsNkNBQXVDOzs7OztJQUd2Qyx1Q0FBOEM7Ozs7O0lBQzlDLDJDQUF5Qzs7Ozs7SUFDekMsdUNBQThDOzs7OztJQUM5QyxxQ0FBeUI7Ozs7O0lBQ3pCLDRDQUFtRDs7Ozs7SUFDbkQsNENBQW1EOzs7OztJQU12QyxvQ0FBaUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQ0xPU0lOR19USU1FLCBERUZBVUxUX1RBU0tfSUQsIERFRkFVTFRfQ09ORklHLCBXQUlUSU5HX0ZPUl9PVkVSTEFZX0RJU0FQUEVBUiB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci5jb250YW50cyc7XHJcbmltcG9ydCB7IE5HWF9VSV9MT0FERVJfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWNvbmZpZy50b2tlbic7XHJcbmltcG9ydCB7IE5neFVpTG9hZGVyQ29uZmlnIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWNvbmZpZyc7XHJcbmltcG9ydCB7IExvYWRlcnMsIExvYWRlciwgU2hvd0V2ZW50LCBUYXNrIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLmludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4VWlMb2FkZXJTZXJ2aWNlIHtcclxuXHJcbiAgLy8gUHVibGljIHByb3BlcnRpZXNcclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGludGVybmFsIHVzZSBvbmx5LiBJdCBtYXkgYmUgY2hhbmdlZCBpbiB0aGUgZnV0dXJlLlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBiYWNrZ3JvdW5kQ2xvc2luZyQ6IE9ic2VydmFibGU8U2hvd0V2ZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGludGVybmFsIHVzZSBvbmx5LiBJdCBtYXkgYmUgY2hhbmdlZCBpbiB0aGUgZnV0dXJlLlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBmb3JlZ3JvdW5kQ2xvc2luZyQ6IE9ic2VydmFibGU8U2hvd0V2ZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGludGVybmFsIHVzZSBvbmx5LiBJdCBtYXkgYmUgY2hhbmdlZCBpbiB0aGUgZnV0dXJlLlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBzaG93QmFja2dyb3VuZCQ6IE9ic2VydmFibGU8U2hvd0V2ZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGludGVybmFsIHVzZSBvbmx5LiBJdCBtYXkgYmUgY2hhbmdlZCBpbiB0aGUgZnV0dXJlLlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBzaG93Rm9yZWdyb3VuZCQ6IE9ic2VydmFibGU8U2hvd0V2ZW50PjtcclxuXHJcbiAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXHJcbiAgcHJpdmF0ZSBiZ0Nsb3Npbmc6IEJlaGF2aW9yU3ViamVjdDxTaG93RXZlbnQ+O1xyXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZzogTmd4VWlMb2FkZXJDb25maWc7XHJcbiAgcHJpdmF0ZSBmZ0Nsb3Npbmc6IEJlaGF2aW9yU3ViamVjdDxTaG93RXZlbnQ+O1xyXG4gIHByaXZhdGUgbG9hZGVyczogTG9hZGVycztcclxuICBwcml2YXRlIHNob3dCYWNrZ3JvdW5kOiBCZWhhdmlvclN1YmplY3Q8U2hvd0V2ZW50PjtcclxuICBwcml2YXRlIHNob3dGb3JlZ3JvdW5kOiBCZWhhdmlvclN1YmplY3Q8U2hvd0V2ZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOR1hfVUlfTE9BREVSX0NPTkZJR19UT0tFTikgcHJpdmF0ZSBjb25maWc6IE5neFVpTG9hZGVyQ29uZmlnKSB7XHJcblxyXG4gICAgdGhpcy5kZWZhdWx0Q29uZmlnID0geyAuLi5ERUZBVUxUX0NPTkZJRyB9O1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICBpZiAodGhpcy5jb25maWcudGhyZXNob2xkICYmIHRoaXMuY29uZmlnLnRocmVzaG9sZCA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcudGhyZXNob2xkID0gREVGQVVMVF9DT05GSUcudGhyZXNob2xkO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGVmYXVsdENvbmZpZyA9IHsgLi4udGhpcy5kZWZhdWx0Q29uZmlnLCAuLi50aGlzLmNvbmZpZyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9hZGVycyA9IHt9O1xyXG4gICAgdGhpcy5zaG93Rm9yZWdyb3VuZCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2hvd0V2ZW50Pih7IGxvYWRlcklkOiAnJywgaXNTaG93OiBmYWxzZSB9KTtcclxuICAgIHRoaXMuc2hvd0ZvcmVncm91bmQkID0gdGhpcy5zaG93Rm9yZWdyb3VuZC5hc09ic2VydmFibGUoKTtcclxuICAgIHRoaXMuc2hvd0JhY2tncm91bmQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNob3dFdmVudD4oeyBsb2FkZXJJZDogJycsIGlzU2hvdzogZmFsc2UgfSk7XHJcbiAgICB0aGlzLnNob3dCYWNrZ3JvdW5kJCA9IHRoaXMuc2hvd0JhY2tncm91bmQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB0aGlzLmZnQ2xvc2luZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2hvd0V2ZW50Pih7IGxvYWRlcklkOiAnJywgaXNTaG93OiBmYWxzZSB9KTtcclxuICAgIHRoaXMuZm9yZWdyb3VuZENsb3NpbmckID0gdGhpcy5mZ0Nsb3NpbmcuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB0aGlzLmJnQ2xvc2luZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2hvd0V2ZW50Pih7IGxvYWRlcklkOiAnJywgaXNTaG93OiBmYWxzZSB9KTtcclxuICAgIHRoaXMuYmFja2dyb3VuZENsb3NpbmckID0gdGhpcy5iZ0Nsb3NpbmcuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuIEl0IG1heSBiZSBjaGFuZ2VkIGluIHRoZSBmdXR1cmUuXHJcbiAgICogQGRvY3MtcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGluaXRMb2FkZXJEYXRhKGxvYWRlcklkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCBpc01hc3RlciA9IGZhbHNlO1xyXG4gICAgaWYgKGxvYWRlcklkID09PSB0aGlzLmRlZmF1bHRDb25maWcubWFzdGVyTG9hZGVySWQpIHtcclxuICAgICAgdGhpcy50aHJvd0Vycm9ySWZNYXN0ZXJMb2FkZXJFeGlzdHModHJ1ZSk7XHJcbiAgICAgIGlzTWFzdGVyID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7IC8vIG5vdCBtYXN0ZXIgbG9hZGVyXHJcbiAgICAgIHRoaXMudGhyb3dFcnJvcklmTG9hZGVyRXhpc3RzKGxvYWRlcklkLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxvYWRlcnNbbG9hZGVySWRdKSB7XHJcbiAgICAgIHRoaXMubG9hZGVyc1tsb2FkZXJJZF0uaXNCb3VuZCA9IHRydWU7XHJcbiAgICAgIHRoaXMubG9hZGVyc1tsb2FkZXJJZF0uaXNNYXN0ZXIgPSBpc01hc3RlcjtcclxuICAgICAgLy8gZW1pdCBzaG93RXZlbnQgYWZ0ZXIgZGF0YSBsb2FkZXIgaXMgYm91bmRcclxuICAgICAgaWYgKHRoaXMuaGFzRm9yZWdyb3VuZChsb2FkZXJJZCkpIHtcclxuICAgICAgICB0aGlzLnNob3dGb3JlZ3JvdW5kLm5leHQoeyBsb2FkZXJJZCwgaXNTaG93OiB0cnVlIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0JhY2tncm91bmQobG9hZGVySWQpKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dCYWNrZ3JvdW5kLm5leHQoeyBsb2FkZXJJZCwgaXNTaG93OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jcmVhdGVMb2FkZXJEYXRhKGxvYWRlcklkLCBpc01hc3RlciwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuIEl0IG1heSBiZSBjaGFuZ2VkIGluIHRoZSBmdXR1cmUuXHJcbiAgICogQGRvY3MtcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHVwZGF0ZUxvYWRlcklkKGxvYWRlcklkOiBzdHJpbmcsIG5ld0xvYWRlcklkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudGhyb3dFcnJvcklmTG9hZGVyTm90RXhpc3QobG9hZGVySWQpO1xyXG4gICAgaWYgKHRoaXMubG9hZGVyc1tsb2FkZXJJZF0ubG9hZGVySWQgPT09IHRoaXMuZGVmYXVsdENvbmZpZy5tYXN0ZXJMb2FkZXJJZCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYFtuZ3gtdWktbG9hZGVyXSAtIENhbm5vdCBjaGFuZ2UgbG9hZGVySWQgb2YgbWFzdGVyIGxvYWRlci4gVGhlIGN1cnJlbnQgYCArXHJcbiAgICAgICAgYG1hc3RlcidzIGxvYWRlcklkIGlzIFwiJHt0aGlzLmRlZmF1bHRDb25maWcubWFzdGVyTG9hZGVySWR9XCIuIElmIHlvdSByZWFsbHkgd2FudCB0byBgICtcclxuICAgICAgICBgY2hhbmdlIGl0LCBwbGVhc2UgdXNlIE5neFVpTG9hZGVyTW9kdWxlLmZvclJvb3QoKSBtZXRob2QuYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChuZXdMb2FkZXJJZCAhPT0gbG9hZGVySWQpIHtcclxuICAgICAgdGhpcy50aHJvd0Vycm9ySWZMb2FkZXJFeGlzdHMobmV3TG9hZGVySWQsIHRydWUpO1xyXG4gICAgICB0aGlzLmxvYWRlcnNbbmV3TG9hZGVySWRdID0ge1xyXG4gICAgICAgIGxvYWRlcklkOiBuZXdMb2FkZXJJZCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB7IC4uLnRoaXMubG9hZGVyc1tsb2FkZXJJZF0uYmFja2dyb3VuZCB9LFxyXG4gICAgICAgIGZvcmVncm91bmQ6IHsgLi4udGhpcy5sb2FkZXJzW2xvYWRlcklkXS5mb3JlZ3JvdW5kIH0sXHJcbiAgICAgICAgaXNNYXN0ZXI6IGZhbHNlLFxyXG4gICAgICAgIGlzQm91bmQ6IHRoaXMubG9hZGVyc1tsb2FkZXJJZF0uaXNCb3VuZFxyXG4gICAgICB9O1xyXG4gICAgICBkZWxldGUgdGhpcy5sb2FkZXJzW2xvYWRlcklkXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBpbnRlcm5hbCB1c2Ugb25seS4gSXQgbWF5IGJlIGNoYW5nZWQgaW4gdGhlIGZ1dHVyZS5cclxuICAgKiBAZG9jcy1wcml2YXRlXHJcbiAgICovXHJcbiAgZGVzdHJveUxvYWRlckRhdGEobG9hZGVySWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zdG9wTG9hZGVyQWxsKGxvYWRlcklkKTtcclxuICAgIGRlbGV0ZSB0aGlzLmxvYWRlcnNbbG9hZGVySWRdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGRlZmF1bHQgbG9hZGVyIGNvbmZpZ3VyYXRpb25cclxuICAgKiBAcmV0dXJucyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAgICovXHJcbiAgZ2V0RGVmYXVsdENvbmZpZygpOiBOZ3hVaUxvYWRlckNvbmZpZyB7XHJcbiAgICByZXR1cm4geyAuLi50aGlzLmRlZmF1bHRDb25maWcgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhbGwgdGhlIGxvYWRlcnNcclxuICAgKi9cclxuICBnZXRMb2FkZXJzKCk6IExvYWRlcnMge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5sb2FkZXJzKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgZGF0YSBvZiBhIHNwZWNpZmllZCBsb2FkZXIuIElmIGxvYWRlcklkIGlzIG5vdCBwcm92aWRlZCwgaXQgd2lsbCByZXR1cm4gZGF0YSBvZiBtYXN0ZXIgbG9hZGVyKGlmIGV4aXN0ZWQpXHJcbiAgICovXHJcbiAgZ2V0TG9hZGVyKGxvYWRlcklkPzogc3RyaW5nKTogTG9hZGVyIHtcclxuICAgIGlmIChsb2FkZXJJZCkge1xyXG4gICAgICB0aGlzLnRocm93RXJyb3JJZkxvYWRlck5vdEV4aXN0KGxvYWRlcklkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGhyb3dFcnJvcklmTWFzdGVyTG9hZGVyTm90RXhpc3QoKTtcclxuICAgICAgbG9hZGVySWQgPSB0aGlzLmRlZmF1bHRDb25maWcubWFzdGVyTG9hZGVySWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmxvYWRlcnNbbG9hZGVySWRdKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZ2V0TG9hZGVyKCkgb3IgZ2V0TG9hZGVycygpIGluc3RlYWQuIFRoaXMgd2lsbCBiZSByZW1vdmVkIGluIHRoZSB2ZXJzaW9uIDgueC54XHJcbiAgICogUmV0dXJuIHN0YXR1cyBvZiBtYXN0ZXIgbG9hZGVyXHJcbiAgICovXHJcbiAgZ2V0U3RhdHVzKCk6IHsgd2FpdGluZ0JhY2tncm91bmQ6IFRhc2ssIHdhaXRpbmdGb3JlZ3JvdW5kOiBUYXNrIH0ge1xyXG4gICAgdGhpcy50aHJvd0Vycm9ySWZNYXN0ZXJMb2FkZXJOb3RFeGlzdCgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2FpdGluZ0JhY2tncm91bmQ6IHRoaXMubG9hZGVyc1t0aGlzLmRlZmF1bHRDb25maWcubWFzdGVyTG9hZGVySWRdLmJhY2tncm91bmQsXHJcbiAgICAgIHdhaXRpbmdGb3JlZ3JvdW5kOiB0aGlzLmxvYWRlcnNbdGhpcy5kZWZhdWx0Q29uZmlnLm1hc3RlckxvYWRlcklkXS5mb3JlZ3JvdW5kXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgcXVldWUgaGFzIGEgd2FpdGluZyBmb3JlZ3JvdW5kIGxvYWRlciB3aXRoIHRoZSBnaXZlbiBgdGFza0lkYC5cclxuICAgKiBJZiBubyBgdGFza0lkYCBzcGVjaWZpZWQsIGl0IHdpbGwgY2hlY2sgd2hldGhlciB0aGUgcXVldWUgaGFzIGFueSB3YWl0aW5nIGZvcmVncm91bmQgbG9hZGVyLlxyXG4gICAqIEBwYXJhbSBsb2FkZXJJZCB0aGUgbG9hZGVyIElkXHJcbiAgICogQHBhcmFtIHRhc2tJZCB0aGUgb3B0aW9uYWwgdGFzayBJZFxyXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cclxuICAgKi9cclxuICBoYXNGb3JlZ3JvdW5kKGxvYWRlcklkOiBzdHJpbmcsIHRhc2tJZD86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMubG9hZGVyc1tsb2FkZXJJZF0pIHtcclxuICAgICAgaWYgKHRhc2tJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlcnNbbG9hZGVySWRdLmZvcmVncm91bmRbdGFza0lkXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5sb2FkZXJzW2xvYWRlcklkXS5mb3JlZ3JvdW5kKS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgcXVldWUgaGFzIGEgd2FpdGluZyBiYWNrZ3JvdW5kIGxvYWRlciB3aXRoIHRoZSBnaXZlbiBgdGFza0lkYC5cclxuICAgKiBJZiBubyBgdGFza0lkYCBzcGVjaWZpZWQsIGl0IHdpbGwgY2hlY2sgd2hldGhlciB0aGUgcXVldWUgaGFzIGFueSB3YWl0aW5nIGJhY2tncm91bmQgbG9hZGVyLlxyXG4gICAqIEBwYXJhbSBsb2FkZXJJZCB0aGUgbG9hZGVyIElkXHJcbiAgICogQHBhcmFtIHRhc2tJZCB0aGUgb3B0aW9uYWwgdGFzayBJZFxyXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cclxuICAgKi9cclxuICBoYXNCYWNrZ3JvdW5kKGxvYWRlcklkOiBzdHJpbmcsIHRhc2tJZD86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMubG9hZGVyc1tsb2FkZXJJZF0pIHtcclxuICAgICAgaWYgKHRhc2tJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlcnNbbG9hZGVySWRdLmJhY2tncm91bmRbdGFza0lkXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5sb2FkZXJzW2xvYWRlcklkXS5iYWNrZ3JvdW5kKS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgdGhlIGZvcmVncm91bmQgbG9hZGluZyBvZiBsb2FkZXIgaGF2aW5nIGBsb2FkZXJJZGAgd2l0aCBhIHNwZWNpZmllZCBgdGFza0lkYC5cclxuICAgKiBUaGUgbG9hZGluZyBpcyBvbmx5IGNsb3NlZCBvZmYgd2hlbiBhbGwgdGFza0lkcyBvZiB0aGF0IGxvYWRlciBhcmUgY2FsbGVkIHdpdGggc3RvcExvYWRlcigpIG1ldGhvZC5cclxuICAgKiBAcGFyYW0gbG9hZGVySWQgdGhlIGxvYWRlciBJZFxyXG4gICAqIEBwYXJhbSB0YXNrSWQgdGhlIG9wdGlvbmFsIHRhc2sgSWQgb2YgdGhlIGxvYWRpbmcuIHRhc2tJZCBpcyBzZXQgdG8gJ2RlZmF1bHQnIGJ5IGRlZmF1bHQuXHJcbiAgICovXHJcbiAgc3RhcnRMb2FkZXIobG9hZGVySWQ6IHN0cmluZywgdGFza0lkOiBzdHJpbmcgPSBERUZBVUxUX1RBU0tfSUQpOiB2b2lkIHtcclxuICAgIHRoaXMuY3JlYXRlTG9hZGVyRGF0YShsb2FkZXJJZCwgdW5kZWZpbmVkLCBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZm9yZWdyb3VuZFJ1bm5pbmcgPSB0aGlzLmhhc0ZvcmVncm91bmQobG9hZGVySWQpO1xyXG4gICAgdGhpcy5sb2FkZXJzW2xvYWRlcklkXS5mb3JlZ3JvdW5kW3Rhc2tJZF0gPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGlmICghdGhpcy5sb2FkZXJzW2xvYWRlcklkXS5pc0JvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWZvcmVncm91bmRSdW5uaW5nKSB7XHJcbiAgICAgIGlmICh0aGlzLmhhc0JhY2tncm91bmQobG9hZGVySWQpKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2xvc2VvdXQobG9hZGVySWQpO1xyXG4gICAgICAgIHRoaXMuc2hvd0JhY2tncm91bmQubmV4dCh7IGxvYWRlcklkLCBpc1Nob3c6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd0ZvcmVncm91bmQubmV4dCh7IGxvYWRlcklkLCBpc1Nob3c6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCB0aGUgZm9yZWdyb3VuZCBsb2FkaW5nIG9mIG1hc3RlciBsb2FkZXIgd2l0aCBhIHNwZWNpZmllZCBgdGFza0lkYC5cclxuICAgKiBUaGUgbG9hZGluZyBpcyBvbmx5IGNsb3NlZCBvZmYgd2hlbiBhbGwgdGFza0lkcyBvZiB0aGF0IGxvYWRlciBhcmUgY2FsbGVkIHdpdGggc3RvcCgpIG1ldGhvZC5cclxuICAgKiBOT1RFOiBSZWFsbHkgdGhpcyBmdW5jdGlvbiBqdXN0IHdyYXBzIHN0YXJ0TG9hZGVyKCkgZnVuY3Rpb25cclxuICAgKiBAcGFyYW0gdGFza0lkIHRoZSBvcHRpb25hbCB0YXNrIElkIG9mIHRoZSBsb2FkaW5nLiB0YXNrSWQgaXMgc2V0IHRvICdkZWZhdWx0JyBieSBkZWZhdWx0LlxyXG4gICAqL1xyXG4gIHN0YXJ0KHRhc2tJZDogc3RyaW5nID0gREVGQVVMVF9UQVNLX0lEKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXJ0TG9hZGVyKHRoaXMuZGVmYXVsdENvbmZpZy5tYXN0ZXJMb2FkZXJJZCwgdGFza0lkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSBiYWNrZ3JvdW5kIGxvYWRpbmcgb2YgbG9hZGVyIGhhdmluZyBgbG9hZGVySWRgIHdpdGggYSBzcGVjaWZpZWQgYHRhc2tJZGAuXHJcbiAgICogVGhlIGxvYWRpbmcgaXMgb25seSBjbG9zZWQgb2ZmIHdoZW4gYWxsIHRhc2tJZHMgb2YgdGhhdCBsb2FkZXIgYXJlIGNhbGxlZCB3aXRoIHN0b3BMb2FkZXJCYWNrZ3JvdW5kKCkgbWV0aG9kLlxyXG4gICAqIEBwYXJhbSBsb2FkZXJJZCB0aGUgbG9hZGVyIElkXHJcbiAgICogQHBhcmFtIHRhc2tJZCB0aGUgb3B0aW9uYWwgdGFzayBJZCBvZiB0aGUgbG9hZGluZy4gdGFza0lkIGlzIHNldCB0byAnZGVmYXVsdCcgYnkgZGVmYXVsdC5cclxuICAgKi9cclxuICBzdGFydEJhY2tncm91bmRMb2FkZXIobG9hZGVySWQ6IHN0cmluZywgdGFza0lkOiBzdHJpbmcgPSBERUZBVUxUX1RBU0tfSUQpOiB2b2lkIHtcclxuICAgIHRoaXMuY3JlYXRlTG9hZGVyRGF0YShsb2FkZXJJZCwgdW5kZWZpbmVkLCBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5sb2FkZXJzW2xvYWRlcklkXS5iYWNrZ3JvdW5kW3Rhc2tJZF0gPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGlmICghdGhpcy5sb2FkZXJzW2xvYWRlcklkXS5pc0JvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaGFzRm9yZWdyb3VuZChsb2FkZXJJZCkpIHtcclxuICAgICAgdGhpcy5zaG93QmFja2dyb3VuZC5uZXh0KHsgbG9hZGVySWQsIGlzU2hvdzogdHJ1ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSBiYWNrZ3JvdW5kIGxvYWRpbmcgb2YgbWFzdGVyIGxvYWRlciB3aXRoIGEgc3BlY2lmaWVkIGB0YXNrSWRgLlxyXG4gICAqIFRoZSBsb2FkaW5nIGlzIG9ubHkgY2xvc2VkIG9mZiB3aGVuIGFsbCB0YXNrSWRzIG9mIHRoYXQgbG9hZGVyIGFyZSBjYWxsZWQgd2l0aCBzdG9wQmFja2dyb3VuZCgpIG1ldGhvZC5cclxuICAgKiBOT1RFOiBSZWFsbHkgdGhpcyBmdW5jdGlvbiBqdXN0IHdyYXBzIHN0YXJ0QmFja2dyb3VuZExvYWRlcigpIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHRhc2tJZCB0aGUgb3B0aW9uYWwgdGFzayBJZCBvZiB0aGUgbG9hZGluZy4gdGFza0lkIGlzIHNldCB0byAnZGVmYXVsdCcgYnkgZGVmYXVsdC5cclxuICAgKi9cclxuICBzdGFydEJhY2tncm91bmQodGFza0lkOiBzdHJpbmcgPSBERUZBVUxUX1RBU0tfSUQpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhcnRCYWNrZ3JvdW5kTG9hZGVyKHRoaXMuZGVmYXVsdENvbmZpZy5tYXN0ZXJMb2FkZXJJZCwgdGFza0lkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgYSBmb3JlZ3JvdW5kIGxvYWRpbmcgb2YgbG9hZGVyIGhhdmluZyBgbG9hZGVySWRgIHdpdGggc3BlY2lmaWMgYHRhc2tJZGBcclxuICAgKiBAcGFyYW0gbG9hZGVySWQgdGhlIGxvYWRlciBJZFxyXG4gICAqIEBwYXJhbSB0YXNrSWQgdGhlIG9wdGlvbmFsIHRhc2sgSWQgdG8gc3RvcC4gSWYgbm90IHByb3ZpZGVkLCAnZGVmYXVsdCcgaXMgdXNlZC5cclxuICAgKiBAcmV0dXJucyBPYmplY3RcclxuICAgKi9cclxuICBzdG9wTG9hZGVyKGxvYWRlcklkOiBzdHJpbmcsIHRhc2tJZDogc3RyaW5nID0gREVGQVVMVF9UQVNLX0lEKTogdm9pZCB7XHJcbiAgICB0aGlzLnRocm93RXJyb3JJZkxvYWRlck5vdEV4aXN0KGxvYWRlcklkKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgbG9hZGVyIGRhdGEge3t7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgaWYgKHRoaXMuaGFzRm9yZWdyb3VuZChsb2FkZXJJZCwgdGFza0lkKSkge1xyXG4gICAgICBpZiAodGhpcy5sb2FkZXJzW2xvYWRlcklkXS5mb3JlZ3JvdW5kW3Rhc2tJZF0gKyB0aGlzLmRlZmF1bHRDb25maWcudGhyZXNob2xkID4gbm93KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN0b3BMb2FkZXIobG9hZGVySWQsIHRhc2tJZCk7XHJcbiAgICAgICAgfSwgdGhpcy5sb2FkZXJzW2xvYWRlcklkXS5mb3JlZ3JvdW5kW3Rhc2tJZF0gKyB0aGlzLmRlZmF1bHRDb25maWcudGhyZXNob2xkIC0gbm93KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZGVsZXRlIHRoaXMubG9hZGVyc1tsb2FkZXJJZF0uZm9yZWdyb3VuZFt0YXNrSWRdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gfX19XHJcblxyXG4gICAgLy8gRW1pdCBTaG93RXZlbnRzIHRvIHVwZGF0ZSB2aWV3IHt7e1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvcmVncm91bmQobG9hZGVySWQpKSB7XHJcbiAgICAgIHRoaXMuZm9yZWdyb3VuZENsb3Nlb3V0KGxvYWRlcklkKTtcclxuICAgICAgdGhpcy5zaG93Rm9yZWdyb3VuZC5uZXh0KHsgbG9hZGVySWQsIGlzU2hvdzogZmFsc2UgfSk7XHJcbiAgICAgIGlmICh0aGlzLmhhc0JhY2tncm91bmQobG9hZGVySWQpKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5oYXNCYWNrZ3JvdW5kKGxvYWRlcklkKSkgeyAvLyBzdGlsbCBoYXZlIGJhY2tncm91bmQgdGFza3NcclxuICAgICAgICAgICAgdGhpcy5zaG93QmFja2dyb3VuZC5uZXh0KHsgbG9hZGVySWQsIGlzU2hvdzogdHJ1ZSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBXQUlUSU5HX0ZPUl9PVkVSTEFZX0RJU0FQUEVBUik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIH19fVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBhIGZvcmVncm91bmQgbG9hZGluZyBvZiBtYXN0ZXIgbG9hZGVyIHdpdGggc3BlY2lmaWMgYHRhc2tJZGBcclxuICAgKiBAcGFyYW0gdGFza0lkIHRoZSBvcHRpb25hbCB0YXNrIElkIHRvIHN0b3AuIElmIG5vdCBwcm92aWRlZCwgJ2RlZmF1bHQnIGlzIHVzZWQuXHJcbiAgICogQHJldHVybnMgT2JqZWN0XHJcbiAgICovXHJcbiAgc3RvcCh0YXNrSWQ6IHN0cmluZyA9IERFRkFVTFRfVEFTS19JRCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdG9wTG9hZGVyKHRoaXMuZGVmYXVsdENvbmZpZy5tYXN0ZXJMb2FkZXJJZCwgdGFza0lkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgYSBiYWNrZ3JvdW5kIGxvYWRpbmcgb2YgbG9hZGVyIGhhdmluZyBgbG9hZGVySWRgIHdpdGggc3BlY2lmaWMgYHRhc2tJZGBcclxuICAgKiBAcGFyYW0gbG9hZGVySWQgdGhlIGxvYWRlciBJZFxyXG4gICAqIEBwYXJhbSB0YXNrSWQgdGhlIG9wdGlvbmFsIHRhc2sgSWQgdG8gc3RvcC4gSWYgbm90IHByb3ZpZGVkLCAnZGVmYXVsdCcgaXMgdXNlZC5cclxuICAgKiBAcmV0dXJucyBPYmplY3RcclxuICAgKi9cclxuICBzdG9wQmFja2dyb3VuZExvYWRlcihsb2FkZXJJZDogc3RyaW5nLCB0YXNrSWQ6IHN0cmluZyA9IERFRkFVTFRfVEFTS19JRCk6IHZvaWQge1xyXG4gICAgdGhpcy50aHJvd0Vycm9ySWZMb2FkZXJOb3RFeGlzdChsb2FkZXJJZCk7XHJcblxyXG4gICAgLy8gVXBkYXRlIGxvYWRlciBkYXRhIHt7e1xyXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgIGlmICh0aGlzLmhhc0JhY2tncm91bmQobG9hZGVySWQsIHRhc2tJZCkpIHtcclxuICAgICAgaWYgKHRoaXMubG9hZGVyc1tsb2FkZXJJZF0uYmFja2dyb3VuZFt0YXNrSWRdICsgdGhpcy5kZWZhdWx0Q29uZmlnLnRocmVzaG9sZCA+IG5vdykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdG9wQmFja2dyb3VuZExvYWRlcihsb2FkZXJJZCwgdGFza0lkKTtcclxuICAgICAgICB9LCB0aGlzLmxvYWRlcnNbbG9hZGVySWRdLmJhY2tncm91bmRbdGFza0lkXSArIHRoaXMuZGVmYXVsdENvbmZpZy50aHJlc2hvbGQgLSBub3cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBkZWxldGUgdGhpcy5sb2FkZXJzW2xvYWRlcklkXS5iYWNrZ3JvdW5kW3Rhc2tJZF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyB9fX1cclxuXHJcbiAgICAvLyBFbWl0IFNob3dFdmVudHMgdG8gdXBkYXRlIHZpZXcge3t7XHJcbiAgICBpZiAoIXRoaXMuaGFzRm9yZWdyb3VuZChsb2FkZXJJZCkgJiYgIXRoaXMuaGFzQmFja2dyb3VuZChsb2FkZXJJZCkpIHtcclxuICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2xvc2VvdXQobG9hZGVySWQpO1xyXG4gICAgICB0aGlzLnNob3dCYWNrZ3JvdW5kLm5leHQoeyBsb2FkZXJJZCwgaXNTaG93OiBmYWxzZSB9KTtcclxuICAgIH1cclxuICAgIC8vIH19fVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBhIGJhY2tncm91bmQgbG9hZGluZyBvZiBtYXN0ZXIgbG9hZGVyIHdpdGggc3BlY2lmaWMgdGFza0lkXHJcbiAgICogQHBhcmFtIHRhc2tJZCB0aGUgb3B0aW9uYWwgdGFzayBJZCB0byBzdG9wLiBJZiBub3QgcHJvdmlkZWQsICdkZWZhdWx0JyBpcyB1c2VkLlxyXG4gICAqIEByZXR1cm5zIE9iamVjdFxyXG4gICAqL1xyXG4gIHN0b3BCYWNrZ3JvdW5kKHRhc2tJZDogc3RyaW5nID0gREVGQVVMVF9UQVNLX0lEKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3BCYWNrZ3JvdW5kTG9hZGVyKHRoaXMuZGVmYXVsdENvbmZpZy5tYXN0ZXJMb2FkZXJJZCwgdGFza0lkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgYWxsIHRoZSBiYWNrZ3JvdW5kIGFuZCBmb3JlZ3JvdW5kIGxvYWRpbmdzIG9mIGxvYWRlciBoYXZpbmcgYGxvYWRlcklkYFxyXG4gICAqIEBwYXJhbSBsb2FkZXJJZCB0aGUgbG9hZGVyIElkXHJcbiAgICovXHJcbiAgc3RvcExvYWRlckFsbChsb2FkZXJJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnRocm93RXJyb3JJZkxvYWRlck5vdEV4aXN0KGxvYWRlcklkKTtcclxuXHJcbiAgICBpZiAodGhpcy5oYXNGb3JlZ3JvdW5kKGxvYWRlcklkKSkge1xyXG4gICAgICB0aGlzLmZvcmVncm91bmRDbG9zZW91dChsb2FkZXJJZCk7XHJcbiAgICAgIHRoaXMuc2hvd0ZvcmVncm91bmQubmV4dCh7IGxvYWRlcklkLCBpc1Nob3c6IGZhbHNlIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmhhc0JhY2tncm91bmQobG9hZGVySWQpKSB7XHJcbiAgICAgIHRoaXMuYmFja2dyb3VuZENsb3Nlb3V0KGxvYWRlcklkKTtcclxuICAgICAgdGhpcy5zaG93QmFja2dyb3VuZC5uZXh0KHsgbG9hZGVySWQsIGlzU2hvdzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvYWRlcnNbbG9hZGVySWRdLmZvcmVncm91bmQgPSB7fTtcclxuICAgIHRoaXMubG9hZGVyc1tsb2FkZXJJZF0uYmFja2dyb3VuZCA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBhbGwgdGhlIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgbG9hZGluZ3Mgb2YgbWFzdGVyIGxvYWRlclxyXG4gICAqL1xyXG4gIHN0b3BBbGwoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3BMb2FkZXJBbGwodGhpcy5kZWZhdWx0Q29uZmlnLm1hc3RlckxvYWRlcklkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBsb2FkZXIgZGF0YSBpZiBpdCBkb2VzIG5vdCBleGlzdFxyXG4gICAqIEBwYXJhbSBsb2FkZXJJZFxyXG4gICAqIEBwYXJhbSBpc01hc3RlclxyXG4gICAqIEBwYXJhbSBpc0JvdW5kXHJcbiAgICogQGRvY3MtcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgY3JlYXRlTG9hZGVyRGF0YShsb2FkZXJJZDogc3RyaW5nLCBpc01hc3RlcjogYm9vbGVhbiwgaXNCb3VuZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmxvYWRlcnNbbG9hZGVySWRdKSB7XHJcbiAgICAgIHRoaXMubG9hZGVyc1tsb2FkZXJJZF0gPSB7XHJcbiAgICAgICAgbG9hZGVySWQsXHJcbiAgICAgICAgZm9yZWdyb3VuZDoge30sXHJcbiAgICAgICAgYmFja2dyb3VuZDoge30sXHJcbiAgICAgICAgaXNNYXN0ZXIsXHJcbiAgICAgICAgaXNCb3VuZFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhyb3cgZXJyb3IgaWYgdGhlIGxvYWRlcklkIGRvZXMgbm90IGV4aXN0LlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHRocm93RXJyb3JJZkxvYWRlck5vdEV4aXN0KGxvYWRlcklkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5sb2FkZXJzW2xvYWRlcklkXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtuZ3gtdWktbG9hZGVyXSAtIGxvYWRlcklkIFwiJHtsb2FkZXJJZH1cIiBkb2VzIG5vdCBleGlzdC5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRocm93IGVycm9yIGlmIHRoZSBsb2FkZXJJZCBoYXMgYWxyZWFkeSBleGlzdGVkLlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHRocm93RXJyb3JJZkxvYWRlckV4aXN0cyhsb2FkZXJJZDogc3RyaW5nLCB1c2VJc0JvdW5kUHJvcD86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxvYWRlcnNbbG9hZGVySWRdICYmICh0aGlzLmxvYWRlcnNbbG9hZGVySWRdLmlzQm91bmQgJiYgdXNlSXNCb3VuZFByb3ApKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW25neC11aS1sb2FkZXJdIC0gbG9hZGVySWQgXCIke2xvYWRlcklkfVwiIGlzIGR1cGxpY2F0ZWQuIFBsZWFzZSBjaG9vc2UgYW5vdGhlciBvbmUhYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaHJvdyBlcnJvciBpZiB0aGUgbWFzdGVyIGxvYWRlciBoYXMgYWxyZWFkeSBleGlzdGVkLlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHRocm93RXJyb3JJZk1hc3RlckxvYWRlckV4aXN0cyh1c2VJc0JvdW5kUHJvcD86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxvYWRlcnNbdGhpcy5kZWZhdWx0Q29uZmlnLm1hc3RlckxvYWRlcklkXSAmJiAodGhpcy5sb2FkZXJzW3RoaXMuZGVmYXVsdENvbmZpZy5tYXN0ZXJMb2FkZXJJZF0uaXNCb3VuZCAmJiB1c2VJc0JvdW5kUHJvcCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbbmd4LXVpLWxvYWRlcl0gLSBUaGUgbWFzdGVyIGxvYWRlciBoYXMgYWxyZWFkeSBleGlzdGVkLiBgXHJcbiAgICAgICAgKyBgVGhlIGFwcCBzaG91bGQgaGF2ZSBvbmx5IG9uZSBtYXN0ZXIgbG9hZGVyIGFuZCBpdCBzaG91bGQgYmUgcGxhY2VkIGluIHRoZSByb290IGFwcCB0ZW1wbGF0ZWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhyb3cgZXJyb3IgaWYgdGhlIG1hc3RlciBsb2FkZXIgZG9lcyBub3QgZXhpc3QuXHJcbiAgICogQGRvY3MtcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgdGhyb3dFcnJvcklmTWFzdGVyTG9hZGVyTm90RXhpc3QoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubG9hZGVyc1t0aGlzLmRlZmF1bHRDb25maWcubWFzdGVyTG9hZGVySWRdKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW25neC11aS1sb2FkZXJdIC0gVGhlIG1hc3RlciBsb2FkZXIgZG9lcyBub3QgZXhpc3QuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYW5hZ2UgdG8gY2xvc2UgZm9yZWdyb3VuZCBsb2FkaW5nXHJcbiAgICogQHBhcmFtIGxvYWRlcklkIHRoZSBsb2FkZXIgaWRcclxuICAgKi9cclxuICBwcml2YXRlIGZvcmVncm91bmRDbG9zZW91dChsb2FkZXJJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmZnQ2xvc2luZy5uZXh0KHsgbG9hZGVySWQsIGlzU2hvdzogdHJ1ZSB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmZnQ2xvc2luZy5uZXh0KHsgbG9hZGVySWQsIGlzU2hvdzogZmFsc2UgfSk7XHJcbiAgICB9LCBDTE9TSU5HX1RJTUUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFuYWdlIHRvIGNsb3NlIGJhY2tncm91bmQgbG9hZGluZ1xyXG4gICAqIEBwYXJhbSBsb2FkZXJJZCB0aGUgbG9hZGVyIGlkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBiYWNrZ3JvdW5kQ2xvc2VvdXQobG9hZGVySWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5iZ0Nsb3NpbmcubmV4dCh7IGxvYWRlcklkLCBpc1Nob3c6IHRydWUgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5iZ0Nsb3NpbmcubmV4dCh7IGxvYWRlcklkLCBpc1Nob3c6IGZhbHNlIH0pO1xyXG4gICAgfSwgQ0xPU0lOR19USU1FKTtcclxuICB9XHJcbn1cclxuIl19