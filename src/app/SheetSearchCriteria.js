var SheetSearchCriteria = (function () {
    function SheetSearchCriteria(inSheetService) {
        this.sheetService = inSheetService;
    }
    SheetSearchCriteria.prototype.getGeneralDomain = function () {
        if (SheetSearchCriteria.generalDomain == null) {
            SheetSearchCriteria.generalDomain = this.sheetService.getGeneralSearchCriteriaDomain();
        }
        return SheetSearchCriteria.generalDomain;
    };
    SheetSearchCriteria.prototype.getValueBasedDomain = function () {
        if (SheetSearchCriteria.valueBasedDomain == null) {
            SheetSearchCriteria.valueBasedDomain = this.sheetService.getValueBasedSearchCriteriaDomain();
        }
        return SheetSearchCriteria.valueBasedDomain;
    };
    SheetSearchCriteria.prototype.getSectorsDomain = function () {
        if (SheetSearchCriteria.sectorsDomain == null) {
            SheetSearchCriteria.sectorsDomain = this.sheetService.getSectorsSearchCriteriaDomain();
        }
        return SheetSearchCriteria.sectorsDomain;
    };
    return SheetSearchCriteria;
})();
exports.SheetSearchCriteria = SheetSearchCriteria;
//# sourceMappingURL=SheetSearchCriteria.js.map