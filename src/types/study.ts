import type { Interests } from './common';

export interface StudyContent {
	description: string;
	endDate: string;
	interests: Interests;
	maxCapacity: number;
	tag: string;
	title: string;
}
