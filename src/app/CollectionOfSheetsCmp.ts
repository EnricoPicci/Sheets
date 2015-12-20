import {bootstrap, Component, FORM_DIRECTIVES, 
		CORE_DIRECTIVES, Input} from 'angular2/angular2';

import {Sheet} from '../app/Sheet';
import {SheetService} from '../app/SheetService';
import {SheetFactory} from '../app/SheetFactory';
import {SheetFactory1} from '../app/SheetFactory1';

@Component({
    selector: 'collection-of-sheets-cmp',
	providers: [],
    templateUrl: '../src/templates/collectionOfSheets.html',
	styleUrls: ['../src/styles/table.css'],
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class CollectionOfSheetsCmp { 
	@Input() sheets: Sheet[];
	sheetService: SheetService;

	/*constructor(inSheetService: SheetFactory) {
		this.sheetService = inSheetService;
		this.sheets = inSheetService.getSomeSheets(0, 8);
	}*/


}

