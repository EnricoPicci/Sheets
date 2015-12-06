import {bootstrap, Component, FORM_DIRECTIVES, 
		CORE_DIRECTIVES} from 'angular2/angular2';

import {SheetService} from '../app/SheetService';
import {SheetFactory} from '../app/SheetFactory';
import {SheetCmp} from '../app/SheetCmp';
import {Sheet} from '../app/Sheet';


@Component({
    selector: 'my-app',
	providers: [],
    template: `
		<h1>{{title}}</h1>
		<sheetc [sheet]="firstSheet"></sheetc>
		`,
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, SheetCmp]
})
class AppComponent { 
	public title: string = 'Sheets';
	public firstSheet: Sheet;

	constructor() {
		var factory: SheetFactory;
		factory = new SheetFactory();
		this.firstSheet = factory.getSheet('sheet1.jpg');
	}
}

bootstrap(AppComponent, []);