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
		var sheets: Sheet[] = new Array<Sheet>();;
		for (var i = 0; i < inMaxNumebrOfSheets; i++) {
			var ii = i+1;
			sheets[i] = this.getSheet('sheet' + ii);
		}
		return sheets;
	}
}