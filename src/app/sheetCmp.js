var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Sheet_1 = require('../app/Sheet');
var SheetCmp = (function () {
    function SheetCmp() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Sheet_1.Sheet)
    ], SheetCmp.prototype, "sheet");
    SheetCmp = __decorate([
        angular2_1.Component({
            selector: 'sheetc',
            providers: [],
            template: "\n    \t<div>\n\t\t\t<h1>{{sheet.title}}</h1>\n\t\t\t<h2>{{sheet.longTitle}}</h2>\n\t\t\t<image src= {{sheet.imageUrl}}></image>\n\t\t</div>\n\t\t",
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], SheetCmp);
    return SheetCmp;
})();
exports.SheetCmp = SheetCmp;
//# sourceMappingURL=SheetCmp.js.map