import {bootstrap, Component, FORM_DIRECTIVES, 
		CORE_DIRECTIVES, Input} from 'angular2/angular2';

import {Sheet} from '../app/Sheet';

@Component({
    selector: 'sheetCmp',
	providers: [],
    template: `
    	<div>
			<h1>{{sheet.title}}</h1>
			<h2>{{sheet.longTitle}}</h2>
			<image src= {{sheet.imageUrl}}></image>
		</div>
		`,
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class SheetCmp { 
	@Input() sheet: Sheet;

	constructor() {
	}


}

