/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NgxUiLoaderService } from './ngx-ui-loader.service';
import { coerceNumber } from './coercion';
import { WAITING_FOR_OVERLAY_DISAPPEAR } from './ngx-ui-loader.contants';
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
            .pipe(filter((/**
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
        { type: Directive, args: [{ selector: '[ngxUiLoaderBlurred]' },] }
    ];
    /** @nocollapse */
    NgxUiLoaderBlurredDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgxUiLoaderService }
    ]; };
    NgxUiLoaderBlurredDirective.propDecorators = {
        blur: [{ type: Input }],
        loaderId: [{ type: Input }]
    };
    return NgxUiLoaderBlurredDirective;
}());
export { NgxUiLoaderBlurredDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderBlurredDirective.prototype.blurNumber;
    /** @type {?} */
    NgxUiLoaderBlurredDirective.prototype.loaderId;
    /** @type {?} */
    NgxUiLoaderBlurredDirective.prototype.showForegroundWatcher;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderBlurredDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderBlurredDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NgxUiLoaderBlurredDirective.prototype.ngxUiLoaderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci1ibHVycmVkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC11aS1sb2FkZXIvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZ3gtdWktbG9hZGVyLWJsdXJyZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTNGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTFDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpFO0lBa0JFLHFDQUNVLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLGtCQUFzQztRQUZ0QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUU5QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQztRQUNsRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGNBQWMsQ0FBQztJQUM1RSxDQUFDO0lBcEJELHNCQUNJLDZDQUFJOzs7O1FBRFI7WUFFRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFFRCxVQUFTLEtBQWE7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pGLENBQUM7OztPQUpBO0lBbUJEOztPQUVHOzs7OztJQUNILDhDQUFROzs7O0lBQVI7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlO2FBQ2pFLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsUUFBUSxFQUFwQyxDQUFvQyxFQUFDLENBQUM7YUFDNUUsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTs7b0JBQ1QsV0FBVyxHQUFHLFVBQVEsS0FBSSxDQUFDLFVBQVUsUUFBSztnQkFDaEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ3JGLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUM5RTtpQkFBTTtnQkFDTCxVQUFVOzs7Z0JBQUM7b0JBQ1QsSUFBSSxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDaEYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUN6RTtnQkFDSCxDQUFDLEdBQUUsNkJBQTZCLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGlEQUFXOzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUM7SUFDSCxDQUFDOztnQkF4REYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFOzs7O2dCQVQzQixVQUFVO2dCQUFvQixTQUFTO2dCQUlsRCxrQkFBa0I7Ozt1QkFVeEIsS0FBSzsyQkFTTCxLQUFLOztJQTJDUixrQ0FBQztDQUFBLEFBekRELElBeURDO1NBeERZLDJCQUEyQjs7Ozs7O0lBRXRDLGlEQUEyQjs7SUFXM0IsK0NBQTBCOztJQUUxQiw0REFBb0M7Ozs7O0lBR2xDLGlEQUE4Qjs7Ozs7SUFDOUIsK0NBQTJCOzs7OztJQUMzQix5REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOZ3hVaUxvYWRlclNlcnZpY2UgfSBmcm9tICcuL25neC11aS1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IGNvZXJjZU51bWJlciB9IGZyb20gJy4vY29lcmNpb24nO1xyXG5pbXBvcnQgeyBTaG93RXZlbnQgfSBmcm9tICcuL25neC11aS1sb2FkZXIuaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFdBSVRJTkdfRk9SX09WRVJMQVlfRElTQVBQRUFSIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLmNvbnRhbnRzJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZ3hVaUxvYWRlckJsdXJyZWRdJyB9KVxyXG5leHBvcnQgY2xhc3MgTmd4VWlMb2FkZXJCbHVycmVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIGJsdXJOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgYmx1cigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYmx1ck51bWJlcjtcclxuICB9XHJcblxyXG4gIHNldCBibHVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYmx1ck51bWJlciA9IGNvZXJjZU51bWJlcih2YWx1ZSwgdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2UuZ2V0RGVmYXVsdENvbmZpZygpLmJsdXIpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgbG9hZGVySWQ6IHN0cmluZztcclxuXHJcbiAgc2hvd0ZvcmVncm91bmRXYXRjaGVyOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBuZ3hVaUxvYWRlclNlcnZpY2U6IE5neFVpTG9hZGVyU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5ibHVyTnVtYmVyID0gdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2UuZ2V0RGVmYXVsdENvbmZpZygpLmJsdXI7XHJcbiAgICB0aGlzLmxvYWRlcklkID0gdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2UuZ2V0RGVmYXVsdENvbmZpZygpLm1hc3RlckxvYWRlcklkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT24gSW5pdCBldmVudFxyXG4gICAqL1xyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zaG93Rm9yZWdyb3VuZFdhdGNoZXIgPSB0aGlzLm5neFVpTG9hZGVyU2VydmljZS5zaG93Rm9yZWdyb3VuZCRcclxuICAgICAgLnBpcGUoZmlsdGVyKChzaG93RXZlbnQ6IFNob3dFdmVudCkgPT4gdGhpcy5sb2FkZXJJZCA9PT0gc2hvd0V2ZW50LmxvYWRlcklkKSlcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5pc1Nob3cpIHtcclxuICAgICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gYGJsdXIoJHt0aGlzLmJsdXJOdW1iZXJ9cHgpYDtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICctd2Via2l0LWZpbHRlcicsIGZpbHRlclZhbHVlKTtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdmaWx0ZXInLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubmd4VWlMb2FkZXJTZXJ2aWNlLmhhc0ZvcmVncm91bmQoZGF0YS5sb2FkZXJJZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnLXdlYmtpdC1maWx0ZXInLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdmaWx0ZXInLCAnbm9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCBXQUlUSU5HX0ZPUl9PVkVSTEFZX0RJU0FQUEVBUik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9uIGRlc3Ryb3kgZXZlbnRcclxuICAgKi9cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLnNob3dGb3JlZ3JvdW5kV2F0Y2hlcikge1xyXG4gICAgICB0aGlzLnNob3dGb3JlZ3JvdW5kV2F0Y2hlci51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=