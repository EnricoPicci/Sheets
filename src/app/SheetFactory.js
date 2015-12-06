var Sheet_1 = require('../app/Sheet');
var SheetFactory = (function () {
    function SheetFactory() {
    }
    SheetFactory.prototype.getSheet = function (inId) {
        var title = inId + ' SHEET';
        var longTitle = 'I am the SHEET ' + inId;
        var urlString = '../images/' + inId;
        var sheet;
        sheet = new Sheet_1.Sheet(title, longTitle, urlString);
        return sheet;
    };
    return SheetFactory;
})();
exports.SheetFactory = SheetFactory;
//# sourceMappingURL=SheetFactory.js.map