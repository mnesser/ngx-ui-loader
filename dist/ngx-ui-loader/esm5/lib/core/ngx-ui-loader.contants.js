/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { POSITION, PB_DIRECTION, SPINNER } from './ngx-ui-loader.enums';
/**
 * The default value of task id
 * @type {?}
 */
export var DEFAULT_TASK_ID = 'default';
/**
 * The default value of loader id
 * @type {?}
 */
export var DEFAULT_MASTER_LOADER_ID = 'master';
/** @type {?} */
export var CLOSING_TIME = 501;
/** @type {?} */
export var WAITING_FOR_OVERLAY_DISAPPEAR = 200;
/**
 * The configuration of spinners
 * @type {?}
 */
export var SPINNER_CONFIG = {
    'ball-scale-multiple': {
        divs: 3,
        class: 'sk-ball-scale-multiple'
    },
    'ball-spin': {
        divs: 8,
        class: 'sk-ball-spin'
    },
    'ball-spin-clockwise': {
        divs: 8,
        class: 'sk-ball-spin-clockwise'
    },
    'ball-spin-clockwise-fade-rotating': {
        divs: 8,
        class: 'sk-ball-spin-clockwise-fade-rotating'
    },
    'ball-spin-fade-rotating': {
        divs: 8,
        class: 'sk-ball-spin-fade-rotating'
    },
    'chasing-dots': {
        divs: 2,
        class: 'sk-chasing-dots'
    },
    'circle': {
        divs: 12,
        class: 'sk-circle'
    },
    'cube-grid': {
        divs: 9,
        class: 'sk-cube-grid'
    },
    'double-bounce': {
        divs: 2,
        class: 'sk-double-bounce'
    },
    'fading-circle': {
        divs: 12,
        class: 'sk-fading-circle'
    },
    'folding-cube': {
        divs: 4,
        class: 'sk-folding-cube'
    },
    'pulse': {
        divs: 1,
        class: 'sk-pulse'
    },
    'rectangle-bounce': {
        divs: 5,
        class: 'sk-rectangle-bounce'
    },
    'rectangle-bounce-party': {
        divs: 5,
        class: 'sk-rectangle-bounce-party'
    },
    'rectangle-bounce-pulse-out': {
        divs: 5,
        class: 'sk-rectangle-bounce-pulse-out'
    },
    'rectangle-bounce-pulse-out-rapid': {
        divs: 5,
        class: 'sk-rectangle-bounce-pulse-out-rapid'
    },
    'rotating-plane': {
        divs: 1,
        class: 'sk-rotating-plane'
    },
    'square-jelly-box': {
        divs: 2,
        class: 'sk-square-jelly-box'
    },
    'square-loader': {
        divs: 1,
        class: 'sk-square-loader'
    },
    'three-bounce': {
        divs: 3,
        class: 'sk-three-bounce'
    },
    'three-strings': {
        divs: 3,
        class: 'sk-three-strings'
    },
    'wandering-cubes': {
        divs: 2,
        class: 'sk-wandering-cubes'
    },
};
/**
 * The default configuration of ngx-ui-loader
 * @type {?}
 */
export var DEFAULT_CONFIG = {
    bgsColor: '#00ACC1',
    bgsOpacity: 0.5,
    bgsPosition: POSITION.bottomRight,
    bgsSize: 60,
    bgsType: SPINNER.ballSpinClockwise,
    blur: 5,
    fgsColor: '#00ACC1',
    fgsPosition: POSITION.centerCenter,
    fgsSize: 60,
    fgsType: SPINNER.ballSpinClockwise,
    gap: 24,
    logoPosition: POSITION.centerCenter,
    logoSize: 120,
    logoUrl: '',
    masterLoaderId: DEFAULT_MASTER_LOADER_ID,
    overlayBorderRadius: '0',
    overlayColor: 'rgba(40, 40, 40, 0.8)',
    pbColor: '#00ACC1',
    pbDirection: PB_DIRECTION.leftToRight,
    pbThickness: 3,
    hasProgressBar: true,
    text: '',
    textColor: '#FFFFFF',
    textPosition: POSITION.centerCenter,
    threshold: 500
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci5jb250YW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC11aS1sb2FkZXIvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZ3gtdWktbG9hZGVyLmNvbnRhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFLeEUsTUFBTSxLQUFPLGVBQWUsR0FBRyxTQUFTOzs7OztBQUt4QyxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsUUFBUTs7QUFFaEQsTUFBTSxLQUFPLFlBQVksR0FBRyxHQUFHOztBQUUvQixNQUFNLEtBQU8sNkJBQTZCLEdBQUcsR0FBRzs7Ozs7QUFLaEQsTUFBTSxLQUFPLGNBQWMsR0FBRztJQUM1QixxQkFBcUIsRUFBRTtRQUNyQixJQUFJLEVBQUUsQ0FBQztRQUNQLEtBQUssRUFBRSx3QkFBd0I7S0FDaEM7SUFDRCxXQUFXLEVBQUU7UUFDWCxJQUFJLEVBQUUsQ0FBQztRQUNQLEtBQUssRUFBRSxjQUFjO0tBQ3RCO0lBQ0QscUJBQXFCLEVBQUU7UUFDckIsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsd0JBQXdCO0tBQ2hDO0lBQ0QsbUNBQW1DLEVBQUU7UUFDbkMsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsc0NBQXNDO0tBQzlDO0lBQ0QseUJBQXlCLEVBQUU7UUFDekIsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsNEJBQTRCO0tBQ3BDO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsaUJBQWlCO0tBQ3pCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsV0FBVztLQUNuQjtJQUNELFdBQVcsRUFBRTtRQUNYLElBQUksRUFBRSxDQUFDO1FBQ1AsS0FBSyxFQUFFLGNBQWM7S0FDdEI7SUFDRCxlQUFlLEVBQUU7UUFDZixJQUFJLEVBQUUsQ0FBQztRQUNQLEtBQUssRUFBRSxrQkFBa0I7S0FDMUI7SUFDRCxlQUFlLEVBQUU7UUFDZixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxrQkFBa0I7S0FDMUI7SUFDRCxjQUFjLEVBQUU7UUFDZCxJQUFJLEVBQUUsQ0FBQztRQUNQLEtBQUssRUFBRSxpQkFBaUI7S0FDekI7SUFDRCxPQUFPLEVBQUc7UUFDUixJQUFJLEVBQUUsQ0FBQztRQUNQLEtBQUssRUFBRSxVQUFVO0tBQ2xCO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDbEIsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUscUJBQXFCO0tBQzdCO0lBQ0Qsd0JBQXdCLEVBQUU7UUFDeEIsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsMkJBQTJCO0tBQ25DO0lBQ0QsNEJBQTRCLEVBQUU7UUFDNUIsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsK0JBQStCO0tBQ3ZDO0lBQ0Qsa0NBQWtDLEVBQUU7UUFDbEMsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUscUNBQXFDO0tBQzdDO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsbUJBQW1CO0tBQzNCO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDbEIsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUscUJBQXFCO0tBQzdCO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsa0JBQWtCO0tBQzFCO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsaUJBQWlCO0tBQ3pCO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsa0JBQWtCO0tBQzFCO0lBQ0QsaUJBQWlCLEVBQUU7UUFDakIsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsb0JBQW9CO0tBQzVCO0NBQ0Y7Ozs7O0FBS0QsTUFBTSxLQUFPLGNBQWMsR0FBc0I7SUFDL0MsUUFBUSxFQUFFLFNBQVM7SUFDbkIsVUFBVSxFQUFFLEdBQUc7SUFDZixXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVc7SUFDakMsT0FBTyxFQUFFLEVBQUU7SUFDWCxPQUFPLEVBQUUsT0FBTyxDQUFDLGlCQUFpQjtJQUNsQyxJQUFJLEVBQUUsQ0FBQztJQUNQLFFBQVEsRUFBRSxTQUFTO0lBQ25CLFdBQVcsRUFBRSxRQUFRLENBQUMsWUFBWTtJQUNsQyxPQUFPLEVBQUUsRUFBRTtJQUNYLE9BQU8sRUFBRSxPQUFPLENBQUMsaUJBQWlCO0lBQ2xDLEdBQUcsRUFBRSxFQUFFO0lBQ1AsWUFBWSxFQUFFLFFBQVEsQ0FBQyxZQUFZO0lBQ25DLFFBQVEsRUFBRSxHQUFHO0lBQ2IsT0FBTyxFQUFFLEVBQUU7SUFDWCxjQUFjLEVBQUUsd0JBQXdCO0lBQ3hDLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsWUFBWSxFQUFFLHVCQUF1QjtJQUNyQyxPQUFPLEVBQUUsU0FBUztJQUNsQixXQUFXLEVBQUUsWUFBWSxDQUFDLFdBQVc7SUFDckMsV0FBVyxFQUFFLENBQUM7SUFDZCxjQUFjLEVBQUUsSUFBSTtJQUNwQixJQUFJLEVBQUUsRUFBRTtJQUNSLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFlBQVksRUFBRSxRQUFRLENBQUMsWUFBWTtJQUNuQyxTQUFTLEVBQUUsR0FBRztDQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmd4VWlMb2FkZXJDb25maWcgfSBmcm9tICcuL25neC11aS1sb2FkZXItY29uZmlnJztcclxuaW1wb3J0IHsgUE9TSVRJT04sIFBCX0RJUkVDVElPTiwgU1BJTk5FUiB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci5lbnVtcyc7XHJcblxyXG4vKipcclxuICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGFzayBpZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVEFTS19JRCA9ICdkZWZhdWx0JztcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiBsb2FkZXIgaWRcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BU1RFUl9MT0FERVJfSUQgPSAnbWFzdGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBDTE9TSU5HX1RJTUUgPSA1MDE7XHJcblxyXG5leHBvcnQgY29uc3QgV0FJVElOR19GT1JfT1ZFUkxBWV9ESVNBUFBFQVIgPSAyMDA7XHJcblxyXG4vKipcclxuICogVGhlIGNvbmZpZ3VyYXRpb24gb2Ygc3Bpbm5lcnNcclxuICovXHJcbmV4cG9ydCBjb25zdCBTUElOTkVSX0NPTkZJRyA9IHtcclxuICAnYmFsbC1zY2FsZS1tdWx0aXBsZSc6IHtcclxuICAgIGRpdnM6IDMsXHJcbiAgICBjbGFzczogJ3NrLWJhbGwtc2NhbGUtbXVsdGlwbGUnXHJcbiAgfSxcclxuICAnYmFsbC1zcGluJzoge1xyXG4gICAgZGl2czogOCxcclxuICAgIGNsYXNzOiAnc2stYmFsbC1zcGluJ1xyXG4gIH0sXHJcbiAgJ2JhbGwtc3Bpbi1jbG9ja3dpc2UnOiB7XHJcbiAgICBkaXZzOiA4LFxyXG4gICAgY2xhc3M6ICdzay1iYWxsLXNwaW4tY2xvY2t3aXNlJ1xyXG4gIH0sXHJcbiAgJ2JhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZyc6IHtcclxuICAgIGRpdnM6IDgsXHJcbiAgICBjbGFzczogJ3NrLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZydcclxuICB9LFxyXG4gICdiYWxsLXNwaW4tZmFkZS1yb3RhdGluZyc6IHtcclxuICAgIGRpdnM6IDgsXHJcbiAgICBjbGFzczogJ3NrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nJ1xyXG4gIH0sXHJcbiAgJ2NoYXNpbmctZG90cyc6IHtcclxuICAgIGRpdnM6IDIsXHJcbiAgICBjbGFzczogJ3NrLWNoYXNpbmctZG90cydcclxuICB9LFxyXG4gICdjaXJjbGUnOiB7XHJcbiAgICBkaXZzOiAxMixcclxuICAgIGNsYXNzOiAnc2stY2lyY2xlJ1xyXG4gIH0sXHJcbiAgJ2N1YmUtZ3JpZCc6IHtcclxuICAgIGRpdnM6IDksXHJcbiAgICBjbGFzczogJ3NrLWN1YmUtZ3JpZCdcclxuICB9LFxyXG4gICdkb3VibGUtYm91bmNlJzoge1xyXG4gICAgZGl2czogMixcclxuICAgIGNsYXNzOiAnc2stZG91YmxlLWJvdW5jZSdcclxuICB9LFxyXG4gICdmYWRpbmctY2lyY2xlJzoge1xyXG4gICAgZGl2czogMTIsXHJcbiAgICBjbGFzczogJ3NrLWZhZGluZy1jaXJjbGUnXHJcbiAgfSxcclxuICAnZm9sZGluZy1jdWJlJzoge1xyXG4gICAgZGl2czogNCxcclxuICAgIGNsYXNzOiAnc2stZm9sZGluZy1jdWJlJ1xyXG4gIH0sXHJcbiAgJ3B1bHNlJzogIHtcclxuICAgIGRpdnM6IDEsXHJcbiAgICBjbGFzczogJ3NrLXB1bHNlJ1xyXG4gIH0sXHJcbiAgJ3JlY3RhbmdsZS1ib3VuY2UnOiB7XHJcbiAgICBkaXZzOiA1LFxyXG4gICAgY2xhc3M6ICdzay1yZWN0YW5nbGUtYm91bmNlJ1xyXG4gIH0sXHJcbiAgJ3JlY3RhbmdsZS1ib3VuY2UtcGFydHknOiB7XHJcbiAgICBkaXZzOiA1LFxyXG4gICAgY2xhc3M6ICdzay1yZWN0YW5nbGUtYm91bmNlLXBhcnR5J1xyXG4gIH0sXHJcbiAgJ3JlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0Jzoge1xyXG4gICAgZGl2czogNSxcclxuICAgIGNsYXNzOiAnc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQnXHJcbiAgfSxcclxuICAncmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQtcmFwaWQnOiB7XHJcbiAgICBkaXZzOiA1LFxyXG4gICAgY2xhc3M6ICdzay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dC1yYXBpZCdcclxuICB9LFxyXG4gICdyb3RhdGluZy1wbGFuZSc6IHtcclxuICAgIGRpdnM6IDEsXHJcbiAgICBjbGFzczogJ3NrLXJvdGF0aW5nLXBsYW5lJ1xyXG4gIH0sXHJcbiAgJ3NxdWFyZS1qZWxseS1ib3gnOiB7XHJcbiAgICBkaXZzOiAyLFxyXG4gICAgY2xhc3M6ICdzay1zcXVhcmUtamVsbHktYm94J1xyXG4gIH0sXHJcbiAgJ3NxdWFyZS1sb2FkZXInOiB7XHJcbiAgICBkaXZzOiAxLFxyXG4gICAgY2xhc3M6ICdzay1zcXVhcmUtbG9hZGVyJ1xyXG4gIH0sXHJcbiAgJ3RocmVlLWJvdW5jZSc6IHtcclxuICAgIGRpdnM6IDMsXHJcbiAgICBjbGFzczogJ3NrLXRocmVlLWJvdW5jZSdcclxuICB9LFxyXG4gICd0aHJlZS1zdHJpbmdzJzoge1xyXG4gICAgZGl2czogMyxcclxuICAgIGNsYXNzOiAnc2stdGhyZWUtc3RyaW5ncydcclxuICB9LFxyXG4gICd3YW5kZXJpbmctY3ViZXMnOiB7XHJcbiAgICBkaXZzOiAyLFxyXG4gICAgY2xhc3M6ICdzay13YW5kZXJpbmctY3ViZXMnXHJcbiAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIG9mIG5neC11aS1sb2FkZXJcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTkZJRzogTmd4VWlMb2FkZXJDb25maWcgPSB7XHJcbiAgYmdzQ29sb3I6ICcjMDBBQ0MxJyxcclxuICBiZ3NPcGFjaXR5OiAwLjUsXHJcbiAgYmdzUG9zaXRpb246IFBPU0lUSU9OLmJvdHRvbVJpZ2h0LFxyXG4gIGJnc1NpemU6IDYwLFxyXG4gIGJnc1R5cGU6IFNQSU5ORVIuYmFsbFNwaW5DbG9ja3dpc2UsXHJcbiAgYmx1cjogNSxcclxuICBmZ3NDb2xvcjogJyMwMEFDQzEnLFxyXG4gIGZnc1Bvc2l0aW9uOiBQT1NJVElPTi5jZW50ZXJDZW50ZXIsXHJcbiAgZmdzU2l6ZTogNjAsXHJcbiAgZmdzVHlwZTogU1BJTk5FUi5iYWxsU3BpbkNsb2Nrd2lzZSxcclxuICBnYXA6IDI0LFxyXG4gIGxvZ29Qb3NpdGlvbjogUE9TSVRJT04uY2VudGVyQ2VudGVyLFxyXG4gIGxvZ29TaXplOiAxMjAsXHJcbiAgbG9nb1VybDogJycsXHJcbiAgbWFzdGVyTG9hZGVySWQ6IERFRkFVTFRfTUFTVEVSX0xPQURFUl9JRCxcclxuICBvdmVybGF5Qm9yZGVyUmFkaXVzOiAnMCcsXHJcbiAgb3ZlcmxheUNvbG9yOiAncmdiYSg0MCwgNDAsIDQwLCAwLjgpJyxcclxuICBwYkNvbG9yOiAnIzAwQUNDMScsXHJcbiAgcGJEaXJlY3Rpb246IFBCX0RJUkVDVElPTi5sZWZ0VG9SaWdodCxcclxuICBwYlRoaWNrbmVzczogMyxcclxuICBoYXNQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICB0ZXh0OiAnJyxcclxuICB0ZXh0Q29sb3I6ICcjRkZGRkZGJyxcclxuICB0ZXh0UG9zaXRpb246IFBPU0lUSU9OLmNlbnRlckNlbnRlcixcclxuICB0aHJlc2hvbGQ6IDUwMFxyXG59O1xyXG4iXX0=