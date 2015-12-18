var Sheet_1 = require('../app/Sheet');
var SheetFactory1 = (function () {
    function SheetFactory1() {
    }
    SheetFactory1.prototype.getSheet = function (inId) {
        var title = inId + ' SHEET1';
        var longTitle = 'I am the SHEET1 ' + inId;
        var urlString = '../images/' + inId;
        var sheet;
        sheet = new Sheet_1.Sheet(title, longTitle, urlString);
        return sheet;
    };
    SheetFactory1.prototype.getSomeSheets = function (inFromPosition, inMaxNumebrOfSheets) {
        var sheets = new Array();
        for (var i = 3; i < 0; i--) {
            sheets[i] = this.getSheet('sheet' + i);
        }
        return sheets;
    };
    return SheetFactory1;
})();
exports.SheetFactory1 = SheetFactory1;
//# sourceMappingURL=SheetFactory1.js.map