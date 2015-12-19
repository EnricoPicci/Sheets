import {bootstrap, Component, FORM_DIRECTIVES, 
		CORE_DIRECTIVES, Input} from 'angular2/angular2';

import {SheetSearchCriteria} from '../app/SheetSearchCriteria';
import {SheetService} from '../app/SheetService';
import {SheetFactory} from '../app/SheetFactory';

@Component({
    selector: 'sheetSearchCmp',
	providers: [],
    template: `
    	<div id="freeSearchHeader">
			<h3>Search</h3>
		</div>
		<div id="freeSearchBody">
			<input type="text" name="query" id="query" placeholder="Company, ticker, or keyword" autocomplete="off">
            <a id="querySubmit"></a>
		</div>
		<div id="narrowResultHeader">
			<h3>Refine Selection</h3>
			<div id="general">
				<div class="sectionHeader">General</div>
				<div class="sectionBody">
					<ul *ng-for="#criterium of sheetSearchCriteria.getGeneralDomain()">
						<li>
							<input value={{criterium}} type="checkbox">
							<label for="featured">{{criterium}}</label>
						</li>
					</ul>
				</div>
			</div>
			<div id="valueBased">
				<div class="sectionHeader">Value based</div>
				<div class="sectionBody">
					<ul *ng-for="#criterium of sheetSearchCriteria.getValueBasedDomain()">
						<li>
							<input value={{criterium}} type="checkbox">
							<label for="featured">{{criterium}}</label>
						</li>
					</ul>
				</div>
			</div>
			<div id="sectors">
				<div class="sectionHeader">Sectors</div>
				<div class="sectionBody">
					<ul *ng-for="#criterium of sheetSearchCriteria.getSectorsDomain()">
						<li>
							<input value={{criterium}} type="checkbox">
							<label for="featured">{{criterium}}</label>
						</li>
					</ul>
				</div>
			</div>
		</div>
		`,
	styleUrls: ['../src/styles/sheetSearch.css'],
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class SheetSearchCmp { 
	sheetSearchCriteria: SheetSearchCriteria;

	constructor(inSheetService: SheetFactory) {
		this.sheetSearchCriteria = new SheetSearchCriteria(inSheetService);
	}


}

