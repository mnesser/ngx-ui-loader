/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUiLoaderComponent } from './ngx-ui-loader.component';
import { NgxUiLoaderBlurredDirective } from './ngx-ui-loader-blurred.directive';
import { NGX_UI_LOADER_CONFIG_TOKEN } from './ngx-ui-loader-config.token';
export class NgxUiLoaderModule {
    /**
     * forRoot
     * @param {?} ngxUiLoaderConfig
     * @return {?} A module with its provider dependencies
     */
    static forRoot(ngxUiLoaderConfig) {
        return {
            ngModule: NgxUiLoaderModule,
            providers: [
                {
                    provide: NGX_UI_LOADER_CONFIG_TOKEN,
                    useValue: ngxUiLoaderConfig
                }
            ]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdWktbG9hZGVyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbmd4LXVpLWxvYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQWdCMUUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBTzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQW9DO1FBQ2pELE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsMEJBQTBCO29CQUNuQyxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTlCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtvQkFDcEIsMkJBQTJCO2lCQUM1QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asb0JBQW9CO29CQUNwQiwyQkFBMkI7aUJBQzVCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTmd4VWlMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL25neC11aS1sb2FkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4VWlMb2FkZXJCbHVycmVkRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWJsdXJyZWQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTkdYX1VJX0xPQURFUl9DT05GSUdfVE9LRU4gfSBmcm9tICcuL25neC11aS1sb2FkZXItY29uZmlnLnRva2VuJztcclxuaW1wb3J0IHsgTmd4VWlMb2FkZXJDb25maWcgfSBmcm9tICcuL25neC11aS1sb2FkZXItY29uZmlnJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZ3hVaUxvYWRlckNvbXBvbmVudCxcclxuICAgIE5neFVpTG9hZGVyQmx1cnJlZERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE5neFVpTG9hZGVyQ29tcG9uZW50LFxyXG4gICAgTmd4VWlMb2FkZXJCbHVycmVkRGlyZWN0aXZlLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFVpTG9hZGVyTW9kdWxlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogZm9yUm9vdFxyXG4gICAqIEBwYXJhbSBuZ3hVaUxvYWRlckNvbmZpZ1xyXG4gICAqIEByZXR1cm5zIEEgbW9kdWxlIHdpdGggaXRzIHByb3ZpZGVyIGRlcGVuZGVuY2llc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBmb3JSb290KG5neFVpTG9hZGVyQ29uZmlnOiBOZ3hVaUxvYWRlckNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neFVpTG9hZGVyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBOR1hfVUlfTE9BREVSX0NPTkZJR19UT0tFTixcclxuICAgICAgICAgIHVzZVZhbHVlOiBuZ3hVaUxvYWRlckNvbmZpZ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19