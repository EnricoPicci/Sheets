import {Sheet} from '../app/Sheet';
import {SheetService} from '../app/SheetService';

export class SheetFactory1 implements SheetService {
	getSheet(inId: string) {
		var title = inId + ' SHEET1';
		var longTitle = 'I am the SHEET1 ' + inId;
		var urlString = '../images/' + inId;
		var sheet: Sheet;
		sheet = new Sheet(title, longTitle, urlString);
		return sheet;
	}

	getSomeSheets(inFromPosition: number, inMaxNumebrOfSheets: number) {
		var sheets: Sheet[] = new Array<Sheet>();
		for (var i = 3; i < 0; i--) {
			sheets[i] = this.getSheet('sheet' + i);
		}
		return sheets;
	}
}