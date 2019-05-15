/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, Optional } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { NgxUiLoaderService } from '../core/ngx-ui-loader.service';
import { NGX_UI_LOADER_HTTP_CONFIG_TOKEN } from './ngx-ui-loader-http-config.token';
import { HTTP_LOADER_ID } from './ngx-ui-loader-http.constants';
export class NgxUiLoaderHttpInterceptor {
    /**
     * Constructor
     * @param {?} config
     * @param {?} ngxUiLoaderService
     */
    constructor(config, ngxUiLoaderService) {
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
                url => url.toLowerCase()));
            }
            if (config.excludeRegexp) {
                this.excludeRegexp = config.excludeRegexp.map((/**
                 * @param {?} regexp
                 * @return {?}
                 */
                regexp => new RegExp(regexp, 'i')));
            }
            this.defaultConfig = Object.assign({}, this.defaultConfig, config);
        }
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
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
        () => {
            this.count--;
            if (this.count === 0) {
                if (this.defaultConfig.showForeground) {
                    this.ngxUiLoaderService.stopLoader(this.defaultConfig.loaderId, HTTP_LOADER_ID);
                }
                else {
                    this.ngxUiLoaderService.stopBackgroundLoader(this.defaultConfig.loaderId, HTTP_LOADER_ID);
                }
            }
        })));
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    isIgnored(url) {
        if (this.exclude) {
            // do not show the loader for api urls in the `exclude` list
            if (this.exclude.findIndex((/**
             * @param {?} str
             * @return {?}
             */
            str => url.toLowerCase().startsWith(str))) !== -1) {
                return true;
            }
        }
        if (this.excludeRegexp) {
            // do not show the loader for api urls which matches regexps in the `excludeRegexp` list
            if (this.excludeRegexp.findIndex((/**
             * @param {?} regexp
             * @return {?}
             */
            regexp => regexp.test(url))) !== -1) {
                return true;
            }
        }
        return false;
    }
}
NgxUiLoaderHttpInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxUiLoaderHttpInterceptor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_UI_LOADER_HTTP_CONFIG_TOKEN,] }] },
    { type: NgxUiLoaderService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci1odHRwLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXVpLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9odHRwL25neC11aS1sb2FkZXItaHR0cC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVwRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHaEUsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBWXJDLFlBQWlFLE1BQTZCLEVBQ3BGLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBRTlDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUMsY0FBYztZQUNuRSxjQUFjLEVBQUUsS0FBSztTQUN0QixDQUFDO1FBRUYsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O2dCQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFDLENBQUM7YUFDN0Q7WUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxH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bnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IsIEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTmd4VWlMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9uZ3gtdWktbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOR1hfVUlfTE9BREVSX0hUVFBfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWh0dHAtY29uZmlnLnRva2VuJztcclxuaW1wb3J0IHsgTmd4VWlMb2FkZXJIdHRwQ29uZmlnIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWh0dHAtY29uZmlnJztcclxuaW1wb3J0IHsgSFRUUF9MT0FERVJfSUQgfSBmcm9tICcuL25neC11aS1sb2FkZXItaHR0cC5jb25zdGFudHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmd4VWlMb2FkZXJIdHRwSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICBwcml2YXRlIGNvdW50OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBOZ3hVaUxvYWRlckh0dHBDb25maWc7XHJcbiAgcHJpdmF0ZSBleGNsdWRlOiBzdHJpbmdbXTtcclxuICBwcml2YXRlIGV4Y2x1ZGVSZWdleHA6IFJlZ0V4cFtdO1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqIEBwYXJhbSBjb25maWdcclxuICAgKiBAcGFyYW0gbmd4VWlMb2FkZXJTZXJ2aWNlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOR1hfVUlfTE9BREVSX0hUVFBfQ09ORklHX1RPS0VOKSBjb25maWc6IE5neFVpTG9hZGVySHR0cENvbmZpZyxcclxuICAgIHByaXZhdGUgbmd4VWlMb2FkZXJTZXJ2aWNlOiBOZ3hVaUxvYWRlclNlcnZpY2UpIHtcclxuXHJcbiAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgIHRoaXMuZGVmYXVsdENvbmZpZyA9IHtcclxuICAgICAgbG9hZGVySWQ6IHRoaXMubmd4VWlMb2FkZXJTZXJ2aWNlLmdldERlZmF1bHRDb25maWcoKS5tYXN0ZXJMb2FkZXJJZCxcclxuICAgICAgc2hvd0ZvcmVncm91bmQ6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgaWYgKGNvbmZpZy5leGNsdWRlKSB7XHJcbiAgICAgICAgdGhpcy5leGNsdWRlID0gY29uZmlnLmV4Y2x1ZGUubWFwKHVybCA9PiB1cmwudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbmZpZy5leGNsdWRlUmVnZXhwKSB7XHJcbiAgICAgICAgdGhpcy5leGNsdWRlUmVnZXhwID0gY29uZmlnLmV4Y2x1ZGVSZWdleHAubWFwKHJlZ2V4cCA9PiBuZXcgUmVnRXhwKHJlZ2V4cCwgJ2knKSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kZWZhdWx0Q29uZmlnID0geyAuLi50aGlzLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICBpZiAodGhpcy5pc0lnbm9yZWQocmVxLnVybCkpIHtcclxuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb3VudCsrO1xyXG4gICAgaWYgKHRoaXMuZGVmYXVsdENvbmZpZy5zaG93Rm9yZWdyb3VuZCkge1xyXG4gICAgICBpZiAoIXRoaXMubmd4VWlMb2FkZXJTZXJ2aWNlLmhhc0ZvcmVncm91bmQodGhpcy5kZWZhdWx0Q29uZmlnLmxvYWRlcklkLCBIVFRQX0xPQURFUl9JRCkpIHtcclxuICAgICAgICB0aGlzLm5neFVpTG9hZGVyU2VydmljZS5zdGFydExvYWRlcih0aGlzLmRlZmF1bHRDb25maWcubG9hZGVySWQsIEhUVFBfTE9BREVSX0lEKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLm5neFVpTG9hZGVyU2VydmljZS5oYXNCYWNrZ3JvdW5kKHRoaXMuZGVmYXVsdENvbmZpZy5sb2FkZXJJZCwgSFRUUF9MT0FERVJfSUQpKSB7XHJcbiAgICAgICAgdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2Uuc3RhcnRCYWNrZ3JvdW5kTG9hZGVyKHRoaXMuZGVmYXVsdENvbmZpZy5sb2FkZXJJZCwgSFRUUF9MT0FERVJfSUQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZShmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY291bnQtLTtcclxuICAgICAgaWYgKHRoaXMuY291bnQgPT09IDApIHtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0Q29uZmlnLnNob3dGb3JlZ3JvdW5kKSB7XHJcbiAgICAgICAgICB0aGlzLm5neFVpTG9hZGVyU2VydmljZS5zdG9wTG9hZGVyKHRoaXMuZGVmYXVsdENvbmZpZy5sb2FkZXJJZCwgSFRUUF9MT0FERVJfSUQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm5neFVpTG9hZGVyU2VydmljZS5zdG9wQmFja2dyb3VuZExvYWRlcih0aGlzLmRlZmF1bHRDb25maWcubG9hZGVySWQsIEhUVFBfTE9BREVSX0lEKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNJZ25vcmVkKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5leGNsdWRlKSB7XHJcbiAgICAgIC8vIGRvIG5vdCBzaG93IHRoZSBsb2FkZXIgZm9yIGFwaSB1cmxzIGluIHRoZSBgZXhjbHVkZWAgbGlzdFxyXG4gICAgICBpZiAodGhpcy5leGNsdWRlLmZpbmRJbmRleChzdHIgPT4gdXJsLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChzdHIpKSAhPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmV4Y2x1ZGVSZWdleHApIHtcclxuICAgICAgLy8gZG8gbm90IHNob3cgdGhlIGxvYWRlciBmb3IgYXBpIHVybHMgd2hpY2ggbWF0Y2hlcyByZWdleHBzIGluIHRoZSBgZXhjbHVkZVJlZ2V4cGAgbGlzdFxyXG4gICAgICBpZiAodGhpcy5leGNsdWRlUmVnZXhwLmZpbmRJbmRleChyZWdleHAgPT4gcmVnZXhwLnRlc3QodXJsKSkgIT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==