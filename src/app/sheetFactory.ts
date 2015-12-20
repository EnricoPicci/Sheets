import {Sheet} from '../app/Sheet';
import {SheetService} from '../app/SheetService';

export class SheetFactory implements SheetService {
	getSheet(inId: string) {
		var title = inId + ' SHEET';
		var longTitle = 'I am the SHEET ' + inId;
		var urlString = '../images/' + inId + '.jpg';
		var sheet: Sheet;
		sheet = new Sheet(title, longTitle, urlString);
		return sheet;
	}

	getSomeSheets(inFromPosition: number, inMaxNumebrOfSheets: number) {
		var sheets: Sheet[] = new Array<Sheet>();
		var ii = inFromPosition;
		for (var i = 0; i < (inMaxNumebrOfSheets - inFromPosition); i++) {
			ii = ii+1;
			sheets[i] = this.getSheet('sheet' + ii);
			sheets[i].general = 'New';
			sheets[i].valueBased = 'Social';
			sheets[i].sector = 'Retail';
		}
		return sheets;
	}

	fetchSheets(searchString: string, generalTags: string[], valueBasedTags: string[], sectorsTags: string[]) {
		var ret: Array<Sheet> = new Array<Sheet>();
		var sheets: Sheet[] = this.getSomeSheets(0, 8);
		var tempArr : { [key:string]:Sheet; } = { };
		for (var i= 0; i < sheets.length; i++) {
			for (var j= 0; j < generalTags.length; j++) {
				if (sheets[i].general === generalTags[j]) {
					tempArr[sheets[i].title] = sheets[i];
				}
			}
		}
		for (var i= 0; i < sheets.length; i++) {
			for (var j= 0; j < valueBasedTags.length; j++) {
				if (sheets[i].valueBased === valueBasedTags[j]) {
					tempArr[sheets[i].title] = sheets[i];
				}
			}
		}
		for (var i= 0; i < sheets.length; i++) {
			for (var j= 0; j < sectorsTags.length; j++) {
				if (sheets[i].sector === sectorsTags[j]) {
					tempArr[sheets[i].title] = sheets[i];
				}
			}
		}
		var i: number = 0;
		for (var key in tempArr) {
			console.log(tempArr[key]);
			ret[i] = tempArr[key];
			i++;
		}
		return ret;
	}

	getGeneralSearchCriteriaDomain() {
		var ret: string[] = new Array<string>();
		ret[0] = 'New';
		ret[1] = 'Popular';
		ret[2] = 'Brands u know';
		return ret;
	};
	getValueBasedSearchCriteriaDomain() {
		var ret: string[] = new Array<string>();
		ret[0] = 'Green';
		ret[1] = 'Social';
		ret[2] = 'Political';
		ret[3] = 'Current';
		return ret;
	};
	getSectorsSearchCriteriaDomain() {
		var ret: string[] = new Array<string>();
		ret[0] = 'Energy';
		ret[1] = 'Health';
		ret[2] = 'FS';
		ret[3] = 'Real  Estate';
		ret[4] = 'Retail';
		return ret;
	};

}