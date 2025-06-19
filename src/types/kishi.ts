import type { Affiliation } from "../enum/Affiliation";
import type { PlayingStyle } from "../enum/PlayingStyle";
import type { ResultFromKishi } from "./resultFromKishi";

export interface Kishi {
    id: number;
    kishiNumber: number;
    nameKana: string;
    nameRome: string;
    imageUrl: string;
    birthDate: string;
    debutDate: string;
    birthPlace: string;
    master: string;
    ryuohsen: string;
    junisen: string;
    danni: string;
    title?: string[];
    affiliation?: Affiliation;
    playingStyle?: PlayingStyle;
    resultsFromKishi?: ResultFromKishi[];
}