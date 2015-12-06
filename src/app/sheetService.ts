import {Sheet} from '../app/Sheet';

export interface SheetService {
	getSheet(inId: string) : Sheet;
}