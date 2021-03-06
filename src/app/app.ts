import {bootstrap, Component, FORM_DIRECTIVES, 
		CORE_DIRECTIVES, provide} from 'angular2/angular2';

import {SheetService} from '../app/SheetService';
import {SheetFactory} from '../app/SheetFactory';
import {SheetFactory1} from '../app/SheetFactory1';
import {SheetCmp} from '../app/SheetCmp';
import {Sheet} from '../app/Sheet';
import {CollectionOfSheetsCmp} from '../app/CollectionOfSheetsCmp';
import {SheetSearchCmp} from '../app/SheetSearchCmp';


@Component({
    selector: 'my-app',
	providers: [CollectionOfSheetsCmp],
    templateUrl: '../src/templates/app.html',
    styleUrls: ['../src/styles/app.css'],
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, CollectionOfSheetsCmp, SheetCmp, SheetSearchCmp]
})
class AppComponent { 
	public title: string = 'Sheets';
	public firstSheet: Sheet;
	public sheets: Sheet[];
	sheetService: SheetService;

	constructor(inSheetService: SheetFactory) {
		this.sheetService = inSheetService;
		this.firstSheet = inSheetService.getSheet('sheet1.jpg');
		this.sheets = inSheetService.getSomeSheets(0, 16);
	}

	getSheets() {
		return this.sheets;
	}

	load() {
		this.sheets = this.sheetService.getSomeSheets(4, 7)
		console.log(this.sheets[1].longTitle);
	}

	updateSheets(searchResult: Sheet[]) {
		console.log(searchResult);
		this.sheets = searchResult;
	}
}


bootstrap(AppComponent, [provide(SheetFactory, {useClass: SheetFactory})]);
//bootstrap(AppComponent, [SheetFactory]);