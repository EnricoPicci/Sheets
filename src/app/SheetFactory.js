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
            sheets[i].general = 'New';
            sheets[i].valueBased = 'Social';
            sheets[i].sector = 'Retail';
        }
        return sheets;
    };
    SheetFactory.prototype.fetchSheets = function (searchString, generalTags, valueBasedTags, sectorsTags) {
        var ret = new Array();
        var sheets = this.getSomeSheets(0, 8);
        var tempArr = {};
        for (var i = 0; i < sheets.length; i++) {
            for (var j = 0; j < generalTags.length; j++) {
                if (sheets[i].general === generalTags[j]) {
                    tempArr[sheets[i].title] = sheets[i];
                }
            }
        }
        for (var i = 0; i < sheets.length; i++) {
            for (var j = 0; j < valueBasedTags.length; j++) {
                if (sheets[i].valueBased === valueBasedTags[j]) {
                    tempArr[sheets[i].title] = sheets[i];
                }
            }
        }
        for (var i = 0; i < sheets.length; i++) {
            for (var j = 0; j < sectorsTags.length; j++) {
                if (sheets[i].sector === sectorsTags[j]) {
                    tempArr[sheets[i].title] = sheets[i];
                }
            }
        }
        var i = 0;
        for (var key in tempArr) {
            console.log(tempArr[key]);
            ret[i] = tempArr[key];
            i++;
        }
        return ret;
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