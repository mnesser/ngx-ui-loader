/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NgxUiLoaderService } from './ngx-ui-loader.service';
import { coerceNumber } from './coercion';
import { WAITING_FOR_OVERLAY_DISAPPEAR } from './ngx-ui-loader.contants';
export class NgxUiLoaderBlurredDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} ngxUiLoaderService
     */
    constructor(elementRef, renderer, ngxUiLoaderService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.blurNumber = this.ngxUiLoaderService.getDefaultConfig().blur;
        this.loaderId = this.ngxUiLoaderService.getDefaultConfig().masterLoaderId;
    }
    /**
     * @return {?}
     */
    get blur() {
        return this.blurNumber;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set blur(value) {
        this.blurNumber = coerceNumber(value, this.ngxUiLoaderService.getDefaultConfig().blur);
    }
    /**
     * On Init event
     * @return {?}
     */
    ngOnInit() {
        this.showForegroundWatcher = this.ngxUiLoaderService.showForeground$
            .pipe(filter((/**
         * @param {?} showEvent
         * @return {?}
         */
        (showEvent) => this.loaderId === showEvent.loaderId)))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data.isShow) {
                /** @type {?} */
                const filterValue = `blur(${this.blurNumber}px)`;
                this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-filter', filterValue);
                this.renderer.setStyle(this.elementRef.nativeElement, 'filter', filterValue);
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    if (!this.ngxUiLoaderService.hasForeground(data.loaderId)) {
                        this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-filter', 'none');
                        this.renderer.setStyle(this.elementRef.nativeElement, 'filter', 'none');
                    }
                }), WAITING_FOR_OVERLAY_DISAPPEAR);
            }
        }));
    }
    /**
     * On destroy event
     * @return {?}
     */
    ngOnDestroy() {
        if (this.showForegroundWatcher) {
            this.showForegroundWatcher.unsubscribe();
        }
    }
}
NgxUiLoaderBlurredDirective.decorators = [
    { type: Directive, args: [{ selector: '[ngxUiLoaderBlurred]' },] }
];
/** @nocollapse */
NgxUiLoaderBlurredDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgxUiLoaderService }
];
NgxUiLoaderBlurredDirective.propDecorators = {
    blur: [{ type: Input }],
    loaderId: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci1ibHVycmVkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC11aS1sb2FkZXIvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZ3gtdWktbG9hZGVyLWJsdXJyZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTNGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTFDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3pFLE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQWlCdEMsWUFDVSxVQUFzQixFQUN0QixRQUFtQixFQUNuQixrQkFBc0M7UUFGdEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFFOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDNUUsQ0FBQzs7OztJQXBCRCxJQUNJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7OztJQWtCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlO2FBQ2pFLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxRQUFRLEVBQUMsQ0FBQzthQUM1RSxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFOztzQkFDVCxXQUFXLEdBQUcsUUFBUSxJQUFJLENBQUMsVUFBVSxLQUFLO2dCQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDckYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzlFO2lCQUFNO2dCQUNMLFVBQVU7OztnQkFBQyxHQUFHLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDaEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUN6RTtnQkFDSCxDQUFDLEdBQUUsNkJBQTZCLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFLRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTs7OztZQVQzQixVQUFVO1lBQW9CLFNBQVM7WUFJbEQsa0JBQWtCOzs7bUJBVXhCLEtBQUs7dUJBU0wsS0FBSzs7Ozs7OztJQVhOLGlEQUEyQjs7SUFXM0IsK0NBQTBCOztJQUUxQiw0REFBb0M7Ozs7O0lBR2xDLGlEQUE4Qjs7Ozs7SUFDOUIsK0NBQTJCOzs7OztJQUMzQix5REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOZ3hVaUxvYWRlclNlcnZpY2UgfSBmcm9tICcuL25neC11aS1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IGNvZXJjZU51bWJlciB9IGZyb20gJy4vY29lcmNpb24nO1xyXG5pbXBvcnQgeyBTaG93RXZlbnQgfSBmcm9tICcuL25neC11aS1sb2FkZXIuaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFdBSVRJTkdfRk9SX09WRVJMQVlfRElTQVBQRUFSIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLmNvbnRhbnRzJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZ3hVaUxvYWRlckJsdXJyZWRdJyB9KVxyXG5leHBvcnQgY2xhc3MgTmd4VWlMb2FkZXJCbHVycmVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIGJsdXJOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgYmx1cigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYmx1ck51bWJlcjtcclxuICB9XHJcblxyXG4gIHNldCBibHVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYmx1ck51bWJlciA9IGNvZXJjZU51bWJlcih2YWx1ZSwgdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2UuZ2V0RGVmYXVsdENvbmZpZygpLmJsdXIpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgbG9hZGVySWQ6IHN0cmluZztcclxuXHJcbiAgc2hvd0ZvcmVncm91bmRXYXRjaGVyOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBuZ3hVaUxvYWRlclNlcnZpY2U6IE5neFVpTG9hZGVyU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5ibHVyTnVtYmVyID0gdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2UuZ2V0RGVmYXVsdENvbmZpZygpLmJsdXI7XHJcbiAgICB0aGlzLmxvYWRlcklkID0gdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2UuZ2V0RGVmYXVsdENvbmZpZygpLm1hc3RlckxvYWRlcklkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT24gSW5pdCBldmVudFxyXG4gICAqL1xyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zaG93Rm9yZWdyb3VuZFdhdGNoZXIgPSB0aGlzLm5neFVpTG9hZGVyU2VydmljZS5zaG93Rm9yZWdyb3VuZCRcclxuICAgICAgLnBpcGUoZmlsdGVyKChzaG93RXZlbnQ6IFNob3dFdmVudCkgPT4gdGhpcy5sb2FkZXJJZCA9PT0gc2hvd0V2ZW50LmxvYWRlcklkKSlcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5pc1Nob3cpIHtcclxuICAgICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gYGJsdXIoJHt0aGlzLmJsdXJOdW1iZXJ9cHgpYDtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICctd2Via2l0LWZpbHRlcicsIGZpbHRlclZhbHVlKTtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdmaWx0ZXInLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubmd4VWlMb2FkZXJTZXJ2aWNlLmhhc0ZvcmVncm91bmQoZGF0YS5sb2FkZXJJZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnLXdlYmtpdC1maWx0ZXInLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdmaWx0ZXInLCAnbm9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCBXQUlUSU5HX0ZPUl9PVkVSTEFZX0RJU0FQUEVBUik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9uIGRlc3Ryb3kgZXZlbnRcclxuICAgKi9cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLnNob3dGb3JlZ3JvdW5kV2F0Y2hlcikge1xyXG4gICAgICB0aGlzLnNob3dGb3JlZ3JvdW5kV2F0Y2hlci51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=