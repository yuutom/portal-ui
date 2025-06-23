import { Affiliation } from "../enum/Affiliation";
import { GameCategory } from "../enum/GameCategory";
import { PlayingStyle } from "../enum/PlayingStyle";
import { ResultStatus } from "../enum/ResultStatus";
import type { Kishi } from "../types/kishi";

export const dummyKishi: Kishi[] = [
    {
        id: 1,
        kishiNumber: 324,
        nameKana: "伊藤匠",
        nameRome: "Takumi Ito",
        imageUrl: "https://www.shogi.or.jp/images/player/pro/324.jpg",
        birthDate: "2002-10-10",
        debutDate: "2020-10-01",
        birthPlace: "東京都世田谷区",
        master: "宮田利男八段",
        ryuohsen: "1組",
        junisen: "B級1組",
        danni: "八段",
        title: ["叡王"],
        affiliation: Affiliation.KANTOU,
        playingStyle: PlayingStyle.IBISHA,
        resultsFromKishi: [
            {
                gameName: "叡王戦 第5局",
                gameCategory: GameCategory.EIOH,
                oponentNumber: 307,
                oponentName: "藤井聡太",
                resultStatus: ResultStatus.DEFEATE,
                date: "2025-06-19"
            },
            {
                gameName: "王座戦 挑決トーナメント・千日手",
                gameCategory: GameCategory.OUZA,
                oponentNumber: 278,
                oponentName: "菅井竜也",
                resultStatus: ResultStatus.WIN,
                date: "2025-06-15"
            },
            {
                gameName: "叡王戦 第5局",
                gameCategory: GameCategory.EIOH,
                oponentNumber: 307,
                oponentName: "藤井聡太",
                resultStatus: ResultStatus.DEFEATE,
                date: "2025-06-24"
            },
            {
                gameName: "叡王戦 第5局",
                gameCategory: GameCategory.EIOH,
                oponentNumber: 307,
                oponentName: "藤井聡太",
                resultStatus: ResultStatus.DEFEATE,
                date: "2025-06-30"
            },
            {
                gameName: "叡王戦 第5局",
                gameCategory: GameCategory.EIOH,
                oponentNumber: 307,
                oponentName: "藤井聡太",
                resultStatus: ResultStatus.DEFEATE,
                date: "2025-06-24"
            },
        ],
        record: {wins: 5, loses: 3, total_ranking: 15, wins_ranking: 17, winning_rate_ranking: 10}
    },
    {
        id: 2,
        kishiNumber: 307,
        nameKana: "藤井聡太",
        nameRome: "Sota Fujii",
        imageUrl: "https://www.shogi.or.jp/images/player/pro/307.jpg",
        birthDate: "2002/07/19",
        debutDate: "2016-10-01",
        birthPlace: "愛知県瀬戸市",
        master: "杉本昌隆八段",
        ryuohsen: "竜王",
        junisen: "名人",
        danni: "九段",
        title: ["名人", "竜王", "王位", "王座", "棋聖", "棋王", "王将"],
        affiliation: Affiliation.KANSAI,
        playingStyle: PlayingStyle.IBISHA
    },
    {
        id: 3,
        kishiNumber: 278,
        nameKana: "菅井竜也",
        nameRome: "Tatsuya Sugai",
        imageUrl: "https://www.shogi.or.jp/images/player/pro/278.jpg",
        birthDate: "1992/04/17",
        debutDate: "2010-04-01",
        birthPlace: "岡山県岡山市",
        master: "井上慶太九段",
        ryuohsen: "1組",
        junisen: "B級1組",
        danni: "八段",
        affiliation: Affiliation.KANSAI,
        playingStyle: PlayingStyle.HURIBISHA
    },
]