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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Sheets';
        var factory;
        factory = new SheetFactory_1.SheetFactory();
        this.firstSheet = factory.getSheet('sheet1.jpg');
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            providers: [],
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<sheetc [sheet]=\"firstSheet\"></sheetc>\n\t\t",
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, SheetCmp_1.SheetCmp]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, []);
//# sourceMappingURL=app.js.map