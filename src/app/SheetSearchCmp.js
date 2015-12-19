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
var SheetSearchCriteria_1 = require('../app/SheetSearchCriteria');
var SheetFactory_1 = require('../app/SheetFactory');
var SheetSearchCmp = (function () {
    function SheetSearchCmp(inSheetService) {
        this.sheetSearchCriteria = new SheetSearchCriteria_1.SheetSearchCriteria(inSheetService);
    }
    SheetSearchCmp = __decorate([
        angular2_1.Component({
            selector: 'sheetSearchCmp',
            providers: [],
            template: "\n    \t<div id=\"freeSearchHeader\">\n\t\t\t<h3>Search</h3>\n\t\t</div>\n\t\t<div id=\"freeSearchBody\">\n\t\t\t<input type=\"text\" name=\"query\" id=\"query\" placeholder=\"Company, ticker, or keyword\" autocomplete=\"off\">\n            <a id=\"querySubmit\"></a>\n\t\t</div>\n\t\t<div id=\"narrowResultHeader\">\n\t\t\t<h3>Refine Selection</h3>\n\t\t\t<div id=\"general\">\n\t\t\t\t<div class=\"sectionHeader\">General</div>\n\t\t\t\t<div class=\"sectionBody\">\n\t\t\t\t\t<ul *ng-for=\"#criterium of sheetSearchCriteria.getGeneralDomain()\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input value={{criterium}} type=\"checkbox\">\n\t\t\t\t\t\t\t<label for=\"featured\">{{criterium}}</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"valueBased\">\n\t\t\t\t<div class=\"sectionHeader\">Value based</div>\n\t\t\t\t<div class=\"sectionBody\">\n\t\t\t\t\t<ul *ng-for=\"#criterium of sheetSearchCriteria.getValueBasedDomain()\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input value={{criterium}} type=\"checkbox\">\n\t\t\t\t\t\t\t<label for=\"featured\">{{criterium}}</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"sectors\">\n\t\t\t\t<div class=\"sectionHeader\">Sectors</div>\n\t\t\t\t<div class=\"sectionBody\">\n\t\t\t\t\t<ul *ng-for=\"#criterium of sheetSearchCriteria.getSectorsDomain()\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input value={{criterium}} type=\"checkbox\">\n\t\t\t\t\t\t\t<label for=\"featured\">{{criterium}}</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t",
            styleUrls: ['../src/styles/sheetSearch.css'],
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [SheetFactory_1.SheetFactory])
    ], SheetSearchCmp);
    return SheetSearchCmp;
})();
exports.SheetSearchCmp = SheetSearchCmp;
//# sourceMappingURL=SheetSearchCmp.js.map