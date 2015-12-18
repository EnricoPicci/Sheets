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
var SheetFactory_1 = require('../app/SheetFactory');
var CollectionOfSheetsCmp = (function () {
    function CollectionOfSheetsCmp(inSheetService) {
        this.sheetService = inSheetService;
        this.sheets = inSheetService.getSomeSheets(0, 8);
        console.log(this.sheets[1].title);
    }
    CollectionOfSheetsCmp = __decorate([
        angular2_1.Component({
            selector: 'collection-of-sheets-cmp',
            providers: [],
            template: "\n    \t\t<a *ng-for=\"#sheet of sheets\" class=\"floating-box gridCard\" src=\"#\">\n\t    \t\t<div class=\"gridImageFrame\">\n\t    \t\t\t<div class=\"gradient\"></div>\n\t\t\t\t\t<img height=\"230\" width=\"230\" src={{sheet.imageUrl}}>\n\t\t\t\t\t<div class=\"imageOverlay motifName\">\n\t                    <span class=\"name motifLink\">{{sheet.title}}</span>\n\t                    <span class=\"creatorName\">Created By: Picci</span>\n\t                </div>\n            \t\t<!--div class=\"metrics\">\n\t                    <div class=\"metricLabel\">One Month Return</div>\n\t                    <div class=\"metricValue\"><span class=\"percentageArrow large up\"><span>13.8%</span></span></div>\n            \t\t</div>\n\t\t\t\t\t<p>{{sheet.title11}}</p>\n\t\t\t\t\t<p>{{sheet.longTitle}}</p-->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"metrics\">\n\t                <div class=\"metricLabel\">One Month Return</div>\n\t                <div class=\"metricValue\"><span class=\"percentageArrow large up\"><span>13.8%</span></span></div>\n            \t</div>\n    \t\t</a>\n\t\t",
            styleUrls: ['../src/styles/table.css'],
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [SheetFactory_1.SheetFactory])
    ], CollectionOfSheetsCmp);
    return CollectionOfSheetsCmp;
})();
exports.CollectionOfSheetsCmp = CollectionOfSheetsCmp;
//# sourceMappingURL=CollectionOfSheetsCmp.js.map