export class Sheet { 
	public title: string;
	public longTitle: string;
	public imageUrl: string;
	public description: string;

	// tags used as filter in search
	public general: string;
	public valueBased: string;
	public sector: string;

	public constructor(inTitle: string, inLongTitle: string, inImageUrl: string) {
		this.title = inTitle;
		this.longTitle = inLongTitle;
		this.imageUrl = inImageUrl;
	}

	public setDescription(inDescription: string) {
		this.description = inDescription;
	}

}