export interface Article {
    id: number;
    title: string;
    imageUrl?: string;
    content: string;
    isPickedUp: boolean;
    createdDate: string;
}