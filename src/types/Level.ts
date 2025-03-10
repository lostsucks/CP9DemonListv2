import { Record } from './Record'; 

export interface Level {
    id: string;
    name: string;
    position: number;
    creator: string;
    verifier: string;
    difficulty: string;
    videoUrl: string;
    creators?: string[];
    firstVictor?: string;
    records?: Record[];
}