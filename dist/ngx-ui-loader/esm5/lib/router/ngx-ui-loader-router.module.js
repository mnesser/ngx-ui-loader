/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Inject, Optional, SkipSelf } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NgxUiLoaderService } from '../core/ngx-ui-loader.service';
import { NGX_UI_LOADER_ROUTER_CONFIG_TOKEN } from './ngx-ui-loader-router-config.token';
import { ROUTER_LOADER_ID } from './ngx-ui-loader-router.constants';
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
            defaultConfig = tslib_1.__assign({}, defaultConfig, config);
        }
        router.events
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationStart) {
                if (defaultConfig.showForeground) {
                    ngxUiLoaderService.startLoader(defaultConfig.loaderId, ROUTER_LOADER_ID);
                }
                else {
                    ngxUiLoaderService.startBackgroundLoader(defaultConfig.loaderId, ROUTER_LOADER_ID);
                }
            }
            if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
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
        { type: NgModule, args: [{},] }
    ];
    /** @nocollapse */
    NgxUiLoaderRouterModule.ctorParameters = function () { return [
        { type: NgxUiLoaderRouterModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_UI_LOADER_ROUTER_CONFIG_TOKEN,] }] },
        { type: Router },
        { type: NgxUiLoaderService }
    ]; };
    return NgxUiLoaderRouterModule;
}());
export { NgxUiLoaderRouterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci1yb3V0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXVpLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9yb3V0ZXIvbmd4LXVpLWxvYWRlci1yb3V0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXBFO0lBb0JFOzs7Ozs7O09BT0c7SUFDSCxpQ0FDMEIsWUFBcUMsRUFDTixNQUErQixFQUN0RixNQUFjLEVBQ2Qsa0JBQXNDO1FBRXRDLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0hBQWtILENBQUMsQ0FBQztTQUNySTs7WUFFRyxhQUFhLEdBQTRCO1lBQzNDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGNBQWM7WUFDOUQsY0FBYyxFQUFFLElBQUk7U0FDckI7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLGFBQWEsd0JBQVEsYUFBYSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1NBQ2pEO1FBRUQsTUFBTSxDQUFDLE1BQU07YUFDVixTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2QsSUFBSSxLQUFLLFlBQVksZUFBZSxFQUFFO2dCQUNwQyxJQUFJLGFBQWEsQ0FBQyxjQUFjLEVBQUU7b0JBQ2hDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7aUJBQzFFO3FCQUFNO29CQUNMLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztpQkFDcEY7YUFDRjtZQUVELElBQUksS0FBSyxZQUFZLGFBQWEsSUFBSSxLQUFLLFlBQVksZ0JBQWdCLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtnQkFDM0csSUFBSSxhQUFhLENBQUMsY0FBYyxFQUFFO29CQUNoQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUN6RTtxQkFBTTtvQkFDTCxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7aUJBQ25GO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUE5REQ7Ozs7T0FJRzs7Ozs7O0lBQ0ksK0JBQU87Ozs7O0lBQWQsVUFBZSxZQUFxQztRQUNsRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlDQUFpQztvQkFDMUMsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbEJGLFFBQVEsU0FBQyxFQUFFOzs7O2dCQTZCOEIsdUJBQXVCLHVCQUE1RCxRQUFRLFlBQUksUUFBUTtnREFDcEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQ0FBaUM7Z0JBckNtQixNQUFNO2dCQUV6RSxrQkFBa0I7O0lBdUUzQiw4QkFBQztDQUFBLEFBbEVELElBa0VDO1NBakVZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ2FuY2VsLCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uRXJyb3IsIE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IE5neFVpTG9hZGVyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvbmd4LXVpLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmd4VWlMb2FkZXJSb3V0ZXJDb25maWcgfSBmcm9tICcuL25neC11aS1sb2FkZXItcm91dGVyLWNvbmZpZyc7XHJcbmltcG9ydCB7IE5HWF9VSV9MT0FERVJfUk9VVEVSX0NPTkZJR19UT0tFTiB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci1yb3V0ZXItY29uZmlnLnRva2VuJztcclxuaW1wb3J0IHsgUk9VVEVSX0xPQURFUl9JRCB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci1yb3V0ZXIuY29uc3RhbnRzJztcclxuXHJcbkBOZ01vZHVsZSh7fSlcclxuZXhwb3J0IGNsYXNzIE5neFVpTG9hZGVyUm91dGVyTW9kdWxlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogZm9yUm9vdFxyXG4gICAqIEBwYXJhbSByb3V0ZXJDb25maWcgQ29uZmlndXJhdGlvblxyXG4gICAqIEByZXR1cm5zIEEgbW9kdWxlIHdpdGggaXRzIHByb3ZpZGVyIGRlcGVuZGVuY2llc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBmb3JSb290KHJvdXRlckNvbmZpZzogTmd4VWlMb2FkZXJSb3V0ZXJDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hVaUxvYWRlclJvdXRlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYX1VJX0xPQURFUl9ST1VURVJfQ09ORklHX1RPS0VOLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IHJvdXRlckNvbmZpZ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcGFyZW50TW9kdWxlXHJcbiAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAqIEBwYXJhbSByb3V0ZXJcclxuICAgKiBAcGFyYW0gbmd4VWlMb2FkZXJTZXJ2aWNlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IE5neFVpTG9hZGVyUm91dGVyTW9kdWxlLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOR1hfVUlfTE9BREVSX1JPVVRFUl9DT05GSUdfVE9LRU4pIGNvbmZpZzogTmd4VWlMb2FkZXJSb3V0ZXJDb25maWcsXHJcbiAgICByb3V0ZXI6IFJvdXRlcixcclxuICAgIG5neFVpTG9hZGVyU2VydmljZTogTmd4VWlMb2FkZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tuZ3gtdWktbG9hZGVyXSAtIE5neFVpTG9hZGVyUm91dGVyTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJdCBzaG91bGQgYmUgaW1wb3J0ZWQgaW4gdGhlIHJvb3QgYEFwcE1vZHVsZWAgb25seSEnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGVmYXVsdENvbmZpZzogTmd4VWlMb2FkZXJSb3V0ZXJDb25maWcgPSB7XHJcbiAgICAgIGxvYWRlcklkOiBuZ3hVaUxvYWRlclNlcnZpY2UuZ2V0RGVmYXVsdENvbmZpZygpLm1hc3RlckxvYWRlcklkLFxyXG4gICAgICBzaG93Rm9yZWdyb3VuZDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgIGRlZmF1bHRDb25maWcgPSB7IC4uLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlci5ldmVudHNcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XHJcbiAgICAgICAgICBpZiAoZGVmYXVsdENvbmZpZy5zaG93Rm9yZWdyb3VuZCkge1xyXG4gICAgICAgICAgICBuZ3hVaUxvYWRlclNlcnZpY2Uuc3RhcnRMb2FkZXIoZGVmYXVsdENvbmZpZy5sb2FkZXJJZCwgUk9VVEVSX0xPQURFUl9JRCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZ3hVaUxvYWRlclNlcnZpY2Uuc3RhcnRCYWNrZ3JvdW5kTG9hZGVyKGRlZmF1bHRDb25maWcubG9hZGVySWQsIFJPVVRFUl9MT0FERVJfSUQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCB8fCBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWwgfHwgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IpIHtcclxuICAgICAgICAgIGlmIChkZWZhdWx0Q29uZmlnLnNob3dGb3JlZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIG5neFVpTG9hZGVyU2VydmljZS5zdG9wTG9hZGVyKGRlZmF1bHRDb25maWcubG9hZGVySWQsIFJPVVRFUl9MT0FERVJfSUQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmd4VWlMb2FkZXJTZXJ2aWNlLnN0b3BCYWNrZ3JvdW5kTG9hZGVyKGRlZmF1bHRDb25maWcubG9hZGVySWQsIFJPVVRFUl9MT0FERVJfSUQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==