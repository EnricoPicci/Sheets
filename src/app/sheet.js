var Sheet = (function () {
    function Sheet(inTitle, inLongTitle, inImageUrl, inOneMonthReturn) {
        this.title = inTitle;
        this.longTitle = inLongTitle;
        this.imageUrl = inImageUrl;
        this.oneMonthReturn = inOneMonthReturn;
    }
    Sheet.prototype.setDescription = function (inDescription) {
        this.description = inDescription;
    };
    return Sheet;
})();
exports.Sheet = Sheet;
//# sourceMappingURL=Sheet.js.map