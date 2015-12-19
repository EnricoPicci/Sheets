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
    return SheetFactory;
})();
exports.SheetFactory = SheetFactory;
//# sourceMappingURL=SheetFactory.js.map