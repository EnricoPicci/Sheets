import {bootstrap, Component, FORM_DIRECTIVES, 
		CORE_DIRECTIVES, provide} from 'angular2/angular2';

import {SheetService} from '../app/SheetService';
import {SheetFactory} from '../app/SheetFactory';
import {SheetFactory1} from '../app/SheetFactory1';
import {SheetCmp} from '../app/SheetCmp';
import {Sheet} from '../app/Sheet';
import {CollectionOfSheetsCmp} from '../app/CollectionOfSheetsCmp';


@Component({
    selector: 'my-app',
	providers: [CollectionOfSheetsCmp],
    template: `
		<h1>{{title}}</h1>
		<collection-of-sheets-cmp></collection-of-sheets-cmp>
		<!--sheetCmp [sheet]="firstSheet"></sheetCmp-->
		<input type="button" value="Load" (click)="load()">
		`,
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, CollectionOfSheetsCmp, SheetCmp]
})
class AppComponent { 
	public title: string = 'Sheets';
	public firstSheet: Sheet;
	public sheets: Sheet[];
	sheetService: SheetService;
	//collectionOfSheetsCmp: CollectionOfSheetsCmp;
	//public collectionOfSheets: CollectionOfSheets;

	constructor(inSheetService: SheetFactory) {
		this.sheetService = inSheetService;
		this.firstSheet = inSheetService.getSheet('sheet1.jpg');
		this.sheets = inSheetService.getSomeSheets(0, 4);
		//this.collectionOfSheetsCmp = inCollectionOfSheetsCmp;
		//this.collectionOfSheets = new CollectionOfSheets();
		//this.collectionOfSheets.sheets = this.sheets;
	}

	getSheets() {
		return this.sheets;
	}

	load() {
		this.sheets = this.sheetService.getSomeSheets(0, 4)
		//this.collectionOfSheetsCmp.collectionOfSheets = this.sheets;
		console.log(this.sheets[1].longTitle);
	}
}


//bootstrap(AppComponent, [provide(SheetFactory, {useClass: SheetFactory})]);
bootstrap(AppComponent, [SheetFactory]);