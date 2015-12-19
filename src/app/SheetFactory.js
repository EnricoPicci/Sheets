var Sheet_1 = require('../app/Sheet');
var SheetFactory = (function () {
    function SheetFactory() {
    }
    SheetFactory.prototype.getSheet = function (inId) {
        var title = inId + ' SHEET';
        var longTitle = 'I am the SHEET ' + inId;
        var urlString = '../images/' + inId + '.jpg';
        var sheet;
        sheet = new Sheet_1.Sheet(title, longTitle, urlString);
        return sheet;
    };
    SheetFactory.prototype.getSomeSheets = function (inFromPosition, inMaxNumebrOfSheets) {
        var sheets = new Array();
        var ii = inFromPosition;
        for (var i = 0; i < (inMaxNumebrOfSheets - inFromPosition); i++) {
            ii = ii + 1;
            sheets[i] = this.getSheet('sheet' + ii);
        }
        return sheets;
    };
    SheetFactory.prototype.getGeneralSearchCriteriaDomain = function () {
        var ret = new Array();
        ret[0] = 'New';
        ret[1] = 'Popular';
        ret[2] = 'Brands u know';
        return ret;
    };
    ;
    SheetFactory.prototype.getValueBasedSearchCriteriaDomain = function () {
        var ret = new Array();
        ret[0] = 'Green';
        ret[1] = 'Social';
        ret[2] = 'Political';
        ret[3] = 'Current';
        return ret;
    };
    ;
    SheetFactory.prototype.getSectorsSearchCriteriaDomain = function () {
        var ret = new Array();
        ret[0] = 'Energy';
        ret[1] = 'Health';
        ret[2] = 'FS';
        ret[3] = 'Real  Estate';
        ret[4] = 'Retail';
        return ret;
    };
    ;
    return SheetFactory;
})();
exports.SheetFactory = SheetFactory;
//# sourceMappingURL=SheetFactory.js.map