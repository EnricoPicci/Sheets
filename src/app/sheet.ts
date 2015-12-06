export class Sheet { 
	public title: string;
	public longTitle: string;
	public imageUrl: string;
	public description: string;

	public constructor(inTitle: string, inLongTitle: string, inImageUrl: string) {
		this.title = inTitle;
		this.longTitle = inLongTitle;
		this.imageUrl = inImageUrl;
	}

	public setDescription(inDescription: string) {
		this.description = inDescription;
	}

}