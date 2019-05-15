/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { NgxUiLoaderService } from '../core/ngx-ui-loader.service';
import { NGX_UI_LOADER_HTTP_CONFIG_TOKEN } from './ngx-ui-loader-http-config.token';
import { HTTP_LOADER_ID } from './ngx-ui-loader-http.constants';
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
            this.defaultConfig = tslib_1.__assign({}, this.defaultConfig, config);
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
        return next.handle(req).pipe(finalize((/**
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
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxUiLoaderHttpInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_UI_LOADER_HTTP_CONFIG_TOKEN,] }] },
        { type: NgxUiLoaderService }
    ]; };
    return NgxUiLoaderHttpInterceptor;
}());
export { NgxUiLoaderHttpInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderHttpInterceptor.prototype.count;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderHttpInterceptor.prototype.defaultConfig;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderHttpInterceptor.prototype.exclude;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderHttpInterceptor.prototype.excludeRegexp;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderHttpInterceptor.prototype.ngxUiLoaderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci1odHRwLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXVpLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9odHRwL25neC11aS1sb2FkZXItaHR0cC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFcEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWhFO0lBUUU7Ozs7T0FJRztJQUNILG9DQUFpRSxNQUE2QixFQUNwRixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUU5QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUc7WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGNBQWM7WUFDbkUsY0FBYyxFQUFFLEtBQUs7U0FDdEIsQ0FBQztRQUVGLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztnQkFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsRUFBQyxDQUFDO2FBQzdEO1lBQ0QsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO2dCQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENB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WSwwQkFBMEI7Ozs7OztJQUVyQywyQ0FBc0I7Ozs7O0lBQ3RCLG1EQUE2Qzs7Ozs7SUFDN0MsNkNBQTBCOzs7OztJQUMxQixtREFBZ0M7Ozs7O0lBUTlCLHdEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yLCBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5neFVpTG9hZGVyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvbmd4LXVpLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTkdYX1VJX0xPQURFUl9IVFRQX0NPTkZJR19UT0tFTiB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci1odHRwLWNvbmZpZy50b2tlbic7XHJcbmltcG9ydCB7IE5neFVpTG9hZGVySHR0cENvbmZpZyB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci1odHRwLWNvbmZpZyc7XHJcbmltcG9ydCB7IEhUVFBfTE9BREVSX0lEIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWh0dHAuY29uc3RhbnRzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5neFVpTG9hZGVySHR0cEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgcHJpdmF0ZSBjb3VudDogbnVtYmVyO1xyXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZzogTmd4VWlMb2FkZXJIdHRwQ29uZmlnO1xyXG4gIHByaXZhdGUgZXhjbHVkZTogc3RyaW5nW107XHJcbiAgcHJpdmF0ZSBleGNsdWRlUmVnZXhwOiBSZWdFeHBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICogQHBhcmFtIG5neFVpTG9hZGVyU2VydmljZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTkdYX1VJX0xPQURFUl9IVFRQX0NPTkZJR19UT0tFTikgY29uZmlnOiBOZ3hVaUxvYWRlckh0dHBDb25maWcsXHJcbiAgICBwcml2YXRlIG5neFVpTG9hZGVyU2VydmljZTogTmd4VWlMb2FkZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICB0aGlzLmRlZmF1bHRDb25maWcgPSB7XHJcbiAgICAgIGxvYWRlcklkOiB0aGlzLm5neFVpTG9hZGVyU2VydmljZS5nZXREZWZhdWx0Q29uZmlnKCkubWFzdGVyTG9hZGVySWQsXHJcbiAgICAgIHNob3dGb3JlZ3JvdW5kOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgIGlmIChjb25maWcuZXhjbHVkZSkge1xyXG4gICAgICAgIHRoaXMuZXhjbHVkZSA9IGNvbmZpZy5leGNsdWRlLm1hcCh1cmwgPT4gdXJsLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb25maWcuZXhjbHVkZVJlZ2V4cCkge1xyXG4gICAgICAgIHRoaXMuZXhjbHVkZVJlZ2V4cCA9IGNvbmZpZy5leGNsdWRlUmVnZXhwLm1hcChyZWdleHAgPT4gbmV3IFJlZ0V4cChyZWdleHAsICdpJykpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGVmYXVsdENvbmZpZyA9IHsgLi4udGhpcy5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWcgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgaWYgKHRoaXMuaXNJZ25vcmVkKHJlcS51cmwpKSB7XHJcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY291bnQrKztcclxuICAgIGlmICh0aGlzLmRlZmF1bHRDb25maWcuc2hvd0ZvcmVncm91bmQpIHtcclxuICAgICAgaWYgKCF0aGlzLm5neFVpTG9hZGVyU2VydmljZS5oYXNGb3JlZ3JvdW5kKHRoaXMuZGVmYXVsdENvbmZpZy5sb2FkZXJJZCwgSFRUUF9MT0FERVJfSUQpKSB7XHJcbiAgICAgICAgdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2Uuc3RhcnRMb2FkZXIodGhpcy5kZWZhdWx0Q29uZmlnLmxvYWRlcklkLCBIVFRQX0xPQURFUl9JRCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2UuaGFzQmFja2dyb3VuZCh0aGlzLmRlZmF1bHRDb25maWcubG9hZGVySWQsIEhUVFBfTE9BREVSX0lEKSkge1xyXG4gICAgICAgIHRoaXMubmd4VWlMb2FkZXJTZXJ2aWNlLnN0YXJ0QmFja2dyb3VuZExvYWRlcih0aGlzLmRlZmF1bHRDb25maWcubG9hZGVySWQsIEhUVFBfTE9BREVSX0lEKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnBpcGUoZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvdW50LS07XHJcbiAgICAgIGlmICh0aGlzLmNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdENvbmZpZy5zaG93Rm9yZWdyb3VuZCkge1xyXG4gICAgICAgICAgdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2Uuc3RvcExvYWRlcih0aGlzLmRlZmF1bHRDb25maWcubG9hZGVySWQsIEhUVFBfTE9BREVSX0lEKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2Uuc3RvcEJhY2tncm91bmRMb2FkZXIodGhpcy5kZWZhdWx0Q29uZmlnLmxvYWRlcklkLCBIVFRQX0xPQURFUl9JRCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzSWdub3JlZCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuZXhjbHVkZSkge1xyXG4gICAgICAvLyBkbyBub3Qgc2hvdyB0aGUgbG9hZGVyIGZvciBhcGkgdXJscyBpbiB0aGUgYGV4Y2x1ZGVgIGxpc3RcclxuICAgICAgaWYgKHRoaXMuZXhjbHVkZS5maW5kSW5kZXgoc3RyID0+IHVybC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoc3RyKSkgIT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5leGNsdWRlUmVnZXhwKSB7XHJcbiAgICAgIC8vIGRvIG5vdCBzaG93IHRoZSBsb2FkZXIgZm9yIGFwaSB1cmxzIHdoaWNoIG1hdGNoZXMgcmVnZXhwcyBpbiB0aGUgYGV4Y2x1ZGVSZWdleHBgIGxpc3RcclxuICAgICAgaWYgKHRoaXMuZXhjbHVkZVJlZ2V4cC5maW5kSW5kZXgocmVnZXhwID0+IHJlZ2V4cC50ZXN0KHVybCkpICE9PSAtMSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=