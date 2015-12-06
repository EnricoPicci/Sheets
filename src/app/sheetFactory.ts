import {Sheet} from '../app/Sheet';
import {SheetService} from '../app/SheetService';

export class SheetFactory implements SheetService {
	getSheet(inId: string) {
		var title = inId + ' SHEET';
		var longTitle = 'I am the SHEET ' + inId;
		var urlString = '../images/' + inId;
		var sheet: Sheet;
		sheet = new Sheet(title, longTitle, urlString);
		return sheet;
	}
}