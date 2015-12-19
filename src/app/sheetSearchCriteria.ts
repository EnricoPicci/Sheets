import {SheetService} from '../app/SheetService';
import {SheetFactory} from '../app/SheetFactory';

export class SheetSearchCriteria { 
	public freeSearchText: string;
	public general: string[];
	public valueBased: string[];
	public sectors: string[];
	
	static generalDomain: string[];
	static valueBasedDomain: string[];
	static sectorsDomain: string[];

	sheetService: SheetService;

	constructor(inSheetService: SheetFactory) {
		this.sheetService = inSheetService;
	}
	
	public getGeneralDomain() {
		if (SheetSearchCriteria.generalDomain == null) {
			SheetSearchCriteria.generalDomain = this.sheetService.getGeneralSearchCriteriaDomain();
		}
		return SheetSearchCriteria.generalDomain;
	}
	
	public getValueBasedDomain() {
		if (SheetSearchCriteria.valueBasedDomain == null) {
			SheetSearchCriteria.valueBasedDomain = this.sheetService.getValueBasedSearchCriteriaDomain();
		}
		return SheetSearchCriteria.valueBasedDomain;
	}
	
	public getSectorsDomain() {
		if (SheetSearchCriteria.sectorsDomain == null) {
			SheetSearchCriteria.sectorsDomain = this.sheetService.getSectorsSearchCriteriaDomain();
		}
		return SheetSearchCriteria.sectorsDomain;
	}

}