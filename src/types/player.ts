import type { Affiliation } from "../enum/Affiliation";
import type { JunisenClass } from "../enum/JunisenClass";
import type { PlayerCategory } from "../enum/PlayerCategory";
import type { PlayingStyle } from "../enum/PlayingStyle";
import type { RyuohsenClass } from "../enum/RyuohsenClass";
import type { KishiRecord } from "./kishiRecord";
import type { ResultFromKishi } from "./resultFromKishi";

export interface Player {
    id: number;
    kishiNumber: number;
    nameKana: string;
    nameRome: string;
    imageUrl: string;
    birthDate: string;
    debutDate: string;
    birthPlace: string;
    master: string;
    ryuohsen: RyuohsenClass;
    junisen: JunisenClass;
    danni: string;
    title?: string[];
    affiliation?: Affiliation;
    playingStyle?: PlayingStyle;
    resultsFromKishi?: ResultFromKishi[];
    record?: KishiRecord;
    playerCategory: PlayerCategory;
    isActive: boolean;
}