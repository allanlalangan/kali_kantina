import contentful, { type EntryFieldTypes } from 'contentful';

export const contentfulClient = contentful.createClient({
	space: import.meta.env.CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.DEV
		? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
		: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
	host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export interface EntryImage {
	fields: {
		title: string;
		file: {
			fileName: string;
			contentType: string;
			details: {
				image: {
					width: number;
					height: number;
				};
				size: number;
			};
			url: string;
		};
		description: string;
	};
}

export interface MenuItem {
	contentTypeId: 'menuItem';
	fields: {
		name: EntryFieldTypes.Symbol;
		category: EntryFieldTypes.Symbol;
		description: EntryFieldTypes.Text;
		image: EntryFieldTypes.AssetLink;
	};
}

export interface Service {
	contentTypeId: 'service';
	fields: {
		name: EntryFieldTypes.Symbol;
		description: EntryFieldTypes.Text;
		image: EntryFieldTypes.AssetLink;
	};
}

export interface About {
	contentTypeId: 'about';
	fields: {
		name: EntryFieldTypes.Symbol;
		heroImage: EntryFieldTypes.AssetLink;
		title: EntryFieldTypes.Text;
		bio: EntryFieldTypes.Text;
		bioImage: EntryFieldTypes.AssetLink;
	};
}
