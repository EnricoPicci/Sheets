import {bootstrap, Component, FORM_DIRECTIVES, 
		CORE_DIRECTIVES, Input} from 'angular2/angular2';

import {Sheet} from '../app/Sheet';
import {SheetService} from '../app/SheetService';
import {SheetFactory} from '../app/SheetFactory';
import {SheetFactory1} from '../app/SheetFactory1';

@Component({
    selector: 'collection-of-sheets-cmp',
	providers: [],
    template: `
    		<a *ng-for="#sheet of sheets" class="floating-box gridCard" src="#">
	    		<div class="gridImageFrame">
	    			<div class="gradient"></div>
					<img height="230" width="230" src={{sheet.imageUrl}}>
					<div class="imageOverlay motifName">
	                    <span class="name motifLink">{{sheet.title}}</span>
	                    <span class="creatorName">Created By: Picci</span>
	                </div>
            		<!--div class="metrics">
	                    <div class="metricLabel">One Month Return</div>
	                    <div class="metricValue"><span class="percentageArrow large up"><span>13.8%</span></span></div>
            		</div>
					<p>{{sheet.title11}}</p>
					<p>{{sheet.longTitle}}</p-->
				</div>
				<div class="metrics">
	                <div class="metricLabel">One Month Return</div>
	                <div class="metricValue"><span class="percentageArrow large up"><span>13.8%</span></span></div>
            	</div>
    		</a>
		`,
	styleUrls: ['../src/styles/table.css'],
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class CollectionOfSheetsCmp { 
	//@Input() 
	public sheets: Sheet[];
	sheetService: SheetService;

	constructor(inSheetService: SheetFactory) {
		this.sheetService = inSheetService;
		this.sheets = inSheetService.getSomeSheets(0, 8);
		console.log(this.sheets[1].title)
	}


}

