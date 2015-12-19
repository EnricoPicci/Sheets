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
var SheetCmp_1 = require('../app/SheetCmp');
var CollectionOfSheetsCmp_1 = require('../app/CollectionOfSheetsCmp');
var SheetSearchCmp_1 = require('../app/SheetSearchCmp');
var AppComponent = (function () {
    //collectionOfSheetsCmp: CollectionOfSheetsCmp;
    //public collectionOfSheets: CollectionOfSheets;
    function AppComponent(inSheetService) {
        this.title = 'Sheets';
        this.sheetService = inSheetService;
        this.firstSheet = inSheetService.getSheet('sheet1.jpg');
        this.sheets = inSheetService.getSomeSheets(0, 5);
        //this.collectionOfSheetsCmp = inCollectionOfSheetsCmp;
        //this.collectionOfSheets = new CollectionOfSheets();
        //this.collectionOfSheets.sheets = this.sheets;
    }
    AppComponent.prototype.getSheets = function () {
        return this.sheets;
    };
    AppComponent.prototype.load = function () {
        this.sheets = this.sheetService.getSomeSheets(4, 7);
        //this.collectionOfSheetsCmp.collectionOfSheets = this.sheets;
        console.log(this.sheets[1].longTitle);
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            providers: [CollectionOfSheetsCmp_1.CollectionOfSheetsCmp],
            templateUrl: '../src/templates/app.html',
            styleUrls: ['../src/styles/app.css'],
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, CollectionOfSheetsCmp_1.CollectionOfSheetsCmp, SheetCmp_1.SheetCmp, SheetSearchCmp_1.SheetSearchCmp]
        }), 
        __metadata('design:paramtypes', [SheetFactory_1.SheetFactory])
    ], AppComponent);
    return AppComponent;
})();
//bootstrap(AppComponent, [provide(SheetFactory, {useClass: SheetFactory})]);
angular2_1.bootstrap(AppComponent, [SheetFactory_1.SheetFactory]);
//# sourceMappingURL=app.js.map