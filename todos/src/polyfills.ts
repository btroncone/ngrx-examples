// Polyfills
import 'es6-shim';
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)
import 'es6-promise';
import 'rxjs/rx';
import 'es7-reflect-metadata';
import 'zone.js/dist/zone-microtask';

if ('production' === process.env.ENV) {
    // Production

    // In production Reflect with es7-reflect-metadata/reflect-metadata is added

    // Zone.js
    require('zone.js/dist/zone-microtask.min');

    // RxJS
    // In production manually include the operators you use
    require('rxjs/add/operator/map');
    require('rxjs/add/operator/mergeMap');

} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}