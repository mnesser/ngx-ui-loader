/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxUiLoaderHttpInterceptor } from './ngx-ui-loader-http.interceptor';
import { NGX_UI_LOADER_HTTP_CONFIG_TOKEN } from './ngx-ui-loader-http-config.token';
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
        { type: NgModule, args: [{
                    providers: [
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: NgxUiLoaderHttpInterceptor,
                            multi: true
                        }
                    ],
                },] }
    ];
    /** @nocollapse */
    NgxUiLoaderHttpModule.ctorParameters = function () { return [
        { type: NgxUiLoaderHttpModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return NgxUiLoaderHttpModule;
}());
export { NgxUiLoaderHttpModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci1odHRwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC11aS1sb2FkZXIvIiwic291cmNlcyI6WyJsaWIvaHR0cC9uZ3gtdWktbG9hZGVyLWh0dHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXBGO0lBV0U7OztPQUdHO0lBQ0gsK0JBQW9DLFlBQW1DO1FBQ3JFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0hBQWdILENBQUMsQ0FBQztTQUNuSTtJQUNILENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7SUFDSSw2QkFBTzs7Ozs7SUFBZCxVQUFlLFVBQWlDO1FBQzlDLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsK0JBQStCO29CQUN4QyxRQUFRLEVBQUUsVUFBVTtpQkFDckI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFwQ0YsUUFBUSxTQUFDO29CQUNSLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsMEJBQTBCOzRCQUNwQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7OztnQkFPbUQscUJBQXFCLHVCQUExRCxRQUFRLFlBQUksUUFBUTs7SUFzQm5DLDRCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0E1QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IE5neFVpTG9hZGVySHR0cEludGVyY2VwdG9yIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWh0dHAuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBOZ3hVaUxvYWRlckh0dHBDb25maWcgfSBmcm9tICcuL25neC11aS1sb2FkZXItaHR0cC1jb25maWcnO1xyXG5pbXBvcnQgeyBOR1hfVUlfTE9BREVSX0hUVFBfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWh0dHAtY29uZmlnLnRva2VuJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VDbGFzczogTmd4VWlMb2FkZXJIdHRwSW50ZXJjZXB0b3IsXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFVpTG9hZGVySHR0cE1vZHVsZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHBhcmVudE1vZHVsZSBvcHRpb25hbFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogTmd4VWlMb2FkZXJIdHRwTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignW25neC11aS1sb2FkZXJdIC0gTmd4VWlMb2FkZXJIdHRwTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJdCBzaG91bGQgYmUgaW1wb3J0ZWQgaW4gdGhlIHJvb3QgYEFwcE1vZHVsZWAgb25seSEnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZvclJvb3RcclxuICAgKiBAcGFyYW0gaHR0cENvbmZpZyBDb25maWd1cmF0aW9uXHJcbiAgICogQHJldHVybnMgQSBtb2R1bGUgd2l0aCBpdHMgcHJvdmlkZXIgZGVwZW5kZW5jaWVzXHJcbiAgICovXHJcbiAgc3RhdGljIGZvclJvb3QoaHR0cENvbmZpZzogTmd4VWlMb2FkZXJIdHRwQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmd4VWlMb2FkZXJIdHRwTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBOR1hfVUlfTE9BREVSX0hUVFBfQ09ORklHX1RPS0VOLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IGh0dHBDb25maWdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==