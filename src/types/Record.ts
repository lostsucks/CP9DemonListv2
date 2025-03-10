export interface Record {
    id: string;
    levelId: string;
    player: string;
    progress: number;
    videoUrl: string;
    date?: Date; 
    hertz?: number; 
    mobile?: boolean; 
    status?: 'approved' | 'rejected' | 'pending'; 
}