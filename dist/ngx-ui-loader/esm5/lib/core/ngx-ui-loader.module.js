/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUiLoaderComponent } from './ngx-ui-loader.component';
import { NgxUiLoaderBlurredDirective } from './ngx-ui-loader-blurred.directive';
import { NGX_UI_LOADER_CONFIG_TOKEN } from './ngx-ui-loader-config.token';
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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
export { NgxUiLoaderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdWktbG9hZGVyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbmd4LXVpLWxvYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcxRTtJQUFBO0lBK0JBLENBQUM7SUFoQkM7Ozs7T0FJRzs7Ozs7O0lBQ0kseUJBQU87Ozs7O0lBQWQsVUFBZSxpQkFBb0M7UUFDakQsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSwwQkFBMEI7b0JBQ25DLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBOUJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQiwyQkFBMkI7cUJBQzVCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLDJCQUEyQjtxQkFDNUI7aUJBQ0Y7O0lBbUJELHdCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0FsQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE5neFVpTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neFVpTG9hZGVyQmx1cnJlZERpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci1ibHVycmVkLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5HWF9VSV9MT0FERVJfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWNvbmZpZy50b2tlbic7XHJcbmltcG9ydCB7IE5neFVpTG9hZGVyQ29uZmlnIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWNvbmZpZyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmd4VWlMb2FkZXJDb21wb25lbnQsXHJcbiAgICBOZ3hVaUxvYWRlckJsdXJyZWREaXJlY3RpdmUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZ3hVaUxvYWRlckNvbXBvbmVudCxcclxuICAgIE5neFVpTG9hZGVyQmx1cnJlZERpcmVjdGl2ZSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hVaUxvYWRlck1vZHVsZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIGZvclJvb3RcclxuICAgKiBAcGFyYW0gbmd4VWlMb2FkZXJDb25maWdcclxuICAgKiBAcmV0dXJucyBBIG1vZHVsZSB3aXRoIGl0cyBwcm92aWRlciBkZXBlbmRlbmNpZXNcclxuICAgKi9cclxuICBzdGF0aWMgZm9yUm9vdChuZ3hVaUxvYWRlckNvbmZpZzogTmd4VWlMb2FkZXJDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hVaUxvYWRlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYX1VJX0xPQURFUl9DT05GSUdfVE9LRU4sXHJcbiAgICAgICAgICB1c2VWYWx1ZTogbmd4VWlMb2FkZXJDb25maWdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==