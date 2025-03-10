import { Record } from './Record';

export interface Player {
    id: string;
    name: string;
    nationality?: string;
    socials?: {
        youtube?: string;
        twitch?: string;
        discord?: string;
        twitter?: string;
        [key: string]: string | undefined;
    };
    records?: Record[];
    verified?: string[];
    created?: string[];
    rankHistory?: {
        date: Date;
        rank: number;
    }[];
    active?: boolean;
    banned?: boolean;
}