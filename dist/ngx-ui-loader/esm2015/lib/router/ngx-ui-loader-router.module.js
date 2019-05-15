/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Inject, Optional, SkipSelf } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NgxUiLoaderService } from '../core/ngx-ui-loader.service';
import { NGX_UI_LOADER_ROUTER_CONFIG_TOKEN } from './ngx-ui-loader-router-config.token';
import { ROUTER_LOADER_ID } from './ngx-ui-loader-router.constants';
export class NgxUiLoaderRouterModule {
    /**
     * Constructor
     *
     * @param {?} parentModule
     * @param {?} config
     * @param {?} router
     * @param {?} ngxUiLoaderService
     */
    constructor(parentModule, config, router, ngxUiLoaderService) {
        if (parentModule) {
            throw new Error('[ngx-ui-loader] - NgxUiLoaderRouterModule is already loaded. It should be imported in the root `AppModule` only!');
        }
        /** @type {?} */
        let defaultConfig = {
            loaderId: ngxUiLoaderService.getDefaultConfig().masterLoaderId,
            showForeground: true
        };
        if (config) {
            defaultConfig = Object.assign({}, defaultConfig, config);
        }
        router.events
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
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
     * @param {?} routerConfig Configuration
     * @return {?} A module with its provider dependencies
     */
    static forRoot(routerConfig) {
        return {
            ngModule: NgxUiLoaderRouterModule,
            providers: [
                {
                    provide: NGX_UI_LOADER_ROUTER_CONFIG_TOKEN,
                    useValue: routerConfig
                }
            ]
        };
    }
}
NgxUiLoaderRouterModule.decorators = [
    { type: NgModule, args: [{},] }
];
/** @nocollapse */
NgxUiLoaderRouterModule.ctorParameters = () => [
    { type: NgxUiLoaderRouterModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_UI_LOADER_ROUTER_CONFIG_TOKEN,] }] },
    { type: Router },
    { type: NgxUiLoaderService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci1yb3V0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXVpLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9yb3V0ZXIvbmd4LXVpLWxvYWRlci1yb3V0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFbkUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHcEUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7O0lBMkJsQyxZQUMwQixZQUFxQyxFQUNOLE1BQStCLEVBQ3RGLE1BQWMsRUFDZCxrQkFBc0M7UUFFdEMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrSEFBa0gsQ0FBQyxDQUFDO1NBQ3JJOztZQUVHLGFBQWEsR0FBNEI7WUFDM0MsUUFBUSxFQUFFLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUMsY0FBYztZQUM5RCxjQUFjLEVBQUUsSUFBSTtTQUNyQjtRQUVELElBQUksTUFBTSxFQUFFO1lBQ1YsYUFBYSxxQkFBUSxhQUFhLEVBQUssTUFBTSxDQUFFLENBQUM7U0FDakQ7UUFFRCxNQUFNLENBQUMsTUFBTTthQUNWLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLEtBQUssWUFBWSxlQUFlLEVBQUU7Z0JBQ3BDLElBQUksYUFBYSxDQUFDLGNBQWMsRUFBRTtvQkFDaEMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztpQkFDMUU7cUJBQU07b0JBQ0wsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNwRjthQUNGO1lBRUQsSUFBSSxLQUFLLFlBQVksYUFBYSxJQUFJLEtBQUssWUFBWSxnQkFBZ0IsSUFBSSxLQUFLLFlBQVksZUFBZSxFQUFFO2dCQUMzRyxJQUFJLGFBQWEsQ0FBQyxjQUFjLEVBQUU7b0JBQ2hDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7aUJBQ3pFO3FCQUFNO29CQUNMLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztpQkFDbkY7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBekRELE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBcUM7UUFDbEQsT0FBTztZQUNMLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQ0FBaUM7b0JBQzFDLFFBQVEsRUFBRSxZQUFZO2lCQUN2QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWxCRixRQUFRLFNBQUMsRUFBRTs7OztZQTZCOEIsdUJBQXVCLHVCQUE1RCxRQUFRLFlBQUksUUFBUTs0Q0FDcEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQ0FBaUM7WUFyQ21CLE1BQU07WUFFekUsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25DYW5jZWwsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciwgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgTmd4VWlMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9uZ3gtdWktbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ3hVaUxvYWRlclJvdXRlckNvbmZpZyB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci1yb3V0ZXItY29uZmlnJztcclxuaW1wb3J0IHsgTkdYX1VJX0xPQURFUl9ST1VURVJfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLXJvdXRlci1jb25maWcudG9rZW4nO1xyXG5pbXBvcnQgeyBST1VURVJfTE9BREVSX0lEIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLXJvdXRlci5jb25zdGFudHMnO1xyXG5cclxuQE5nTW9kdWxlKHt9KVxyXG5leHBvcnQgY2xhc3MgTmd4VWlMb2FkZXJSb3V0ZXJNb2R1bGUge1xyXG5cclxuICAvKipcclxuICAgKiBmb3JSb290XHJcbiAgICogQHBhcmFtIHJvdXRlckNvbmZpZyBDb25maWd1cmF0aW9uXHJcbiAgICogQHJldHVybnMgQSBtb2R1bGUgd2l0aCBpdHMgcHJvdmlkZXIgZGVwZW5kZW5jaWVzXHJcbiAgICovXHJcbiAgc3RhdGljIGZvclJvb3Qocm91dGVyQ29uZmlnOiBOZ3hVaUxvYWRlclJvdXRlckNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neFVpTG9hZGVyUm91dGVyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBOR1hfVUlfTE9BREVSX1JPVVRFUl9DT05GSUdfVE9LRU4sXHJcbiAgICAgICAgICB1c2VWYWx1ZTogcm91dGVyQ29uZmlnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSBwYXJlbnRNb2R1bGVcclxuICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICogQHBhcmFtIHJvdXRlclxyXG4gICAqIEBwYXJhbSBuZ3hVaUxvYWRlclNlcnZpY2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogTmd4VWlMb2FkZXJSb3V0ZXJNb2R1bGUsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5HWF9VSV9MT0FERVJfUk9VVEVSX0NPTkZJR19UT0tFTikgY29uZmlnOiBOZ3hVaUxvYWRlclJvdXRlckNvbmZpZyxcclxuICAgIHJvdXRlcjogUm91dGVyLFxyXG4gICAgbmd4VWlMb2FkZXJTZXJ2aWNlOiBOZ3hVaUxvYWRlclNlcnZpY2UpIHtcclxuXHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignW25neC11aS1sb2FkZXJdIC0gTmd4VWlMb2FkZXJSb3V0ZXJNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEl0IHNob3VsZCBiZSBpbXBvcnRlZCBpbiB0aGUgcm9vdCBgQXBwTW9kdWxlYCBvbmx5IScpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkZWZhdWx0Q29uZmlnOiBOZ3hVaUxvYWRlclJvdXRlckNvbmZpZyA9IHtcclxuICAgICAgbG9hZGVySWQ6IG5neFVpTG9hZGVyU2VydmljZS5nZXREZWZhdWx0Q29uZmlnKCkubWFzdGVyTG9hZGVySWQsXHJcbiAgICAgIHNob3dGb3JlZ3JvdW5kOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgZGVmYXVsdENvbmZpZyA9IHsgLi4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH07XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVyLmV2ZW50c1xyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcclxuICAgICAgICAgIGlmIChkZWZhdWx0Q29uZmlnLnNob3dGb3JlZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIG5neFVpTG9hZGVyU2VydmljZS5zdGFydExvYWRlcihkZWZhdWx0Q29uZmlnLmxvYWRlcklkLCBST1VURVJfTE9BREVSX0lEKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5neFVpTG9hZGVyU2VydmljZS5zdGFydEJhY2tncm91bmRMb2FkZXIoZGVmYXVsdENvbmZpZy5sb2FkZXJJZCwgUk9VVEVSX0xPQURFUl9JRCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbCB8fCBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcikge1xyXG4gICAgICAgICAgaWYgKGRlZmF1bHRDb25maWcuc2hvd0ZvcmVncm91bmQpIHtcclxuICAgICAgICAgICAgbmd4VWlMb2FkZXJTZXJ2aWNlLnN0b3BMb2FkZXIoZGVmYXVsdENvbmZpZy5sb2FkZXJJZCwgUk9VVEVSX0xPQURFUl9JRCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZ3hVaUxvYWRlclNlcnZpY2Uuc3RvcEJhY2tncm91bmRMb2FkZXIoZGVmYXVsdENvbmZpZy5sb2FkZXJJZCwgUk9VVEVSX0xPQURFUl9JRCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19