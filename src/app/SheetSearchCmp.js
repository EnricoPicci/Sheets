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
        this.sheetsRetrieved = new angular2_1.EventEmitter();
        this.sheetSearchCriteria = new SheetSearchCriteria_1.SheetSearchCriteria(inSheetService);
    }
    SheetSearchCmp.prototype.onChange = function (selected, selection) {
        selection.selected = selected;
        var criteria;
        criteria = this.sheetSearchCriteria.getGeneralDomain();
        var generalTags = new Array();
        this.retrieveSelectedCriteria(criteria, generalTags);
        console.log('generalTags');
        console.log(generalTags);
        criteria = this.sheetSearchCriteria.getValueBasedDomain();
        var valueBasedTags = new Array();
        this.retrieveSelectedCriteria(criteria, valueBasedTags);
        console.log('valueBasedTags');
        console.log(valueBasedTags);
        criteria = this.sheetSearchCriteria.getSectorsDomain();
        var sectorsTags = new Array();
        this.retrieveSelectedCriteria(criteria, sectorsTags);
        console.log('sectorsTags');
        console.log(sectorsTags);
        var fact = new SheetFactory_1.SheetFactory();
        this.searchResult = fact.fetchSheets(null, generalTags, valueBasedTags, sectorsTags);
        this.sheetsRetrieved.next(this.searchResult);
    };
    SheetSearchCmp.prototype.retrieveSelectedCriteria = function (inCriteria, inTags) {
        for (var i = 0; i < inCriteria.length; i++) {
            if (inCriteria[i].selected) {
                inTags[i] = inCriteria[i].name;
            }
        }
    };
    SheetSearchCmp.prototype.onClick = function () {
        console.log('click');
    };
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], SheetSearchCmp.prototype, "sheetsRetrieved");
    SheetSearchCmp = __decorate([
        angular2_1.Component({
            selector: 'sheetSearchCmp',
            providers: [],
            templateUrl: '../src/templates/sheetSearch.html',
            styleUrls: ['../src/styles/sheetSearch.css'],
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [SheetFactory_1.SheetFactory])
    ], SheetSearchCmp);
    return SheetSearchCmp;
})();
exports.SheetSearchCmp = SheetSearchCmp;
//# sourceMappingURL=SheetSearchCmp.js.map