import { dummyPickedUpGames } from "../data/games";
import { DateUtils } from "../utils/DateUtils";
import { ResultStatusIcon } from "../componets/ResultStatusIcon";
import { ResultStatus } from "../enum/ResultStatus";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { dummyArticles } from "../data/articles";

export default function Home() {
    return (
        <main className="py-10">
        <div className="mx-auto max-w-4xl px-4">
        {/* Slider */}
        <div data-hs-carousel='{
            "loadingClasses": "opacity-0",
            "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"
            }' className="relative">
            <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                <div className="hs-carousel-slide">
                <div className="flex justify-center h-full bg-gray-100 p-6">
                    <span className="self-center text-4xl text-gray-800 transition duration-700">First slide</span>
                </div>
                </div>
                <div className="hs-carousel-slide">
                <div className="flex justify-center h-full bg-gray-200 p-6">
                    <span className="self-center text-4xl text-gray-800 transition duration-700">Second slide</span>
                </div>
                </div>
                <div className="hs-carousel-slide">
                <div className="flex justify-center h-full bg-gray-300 p-6">
                    <span className="self-center text-4xl text-gray-800 transition duration-700">Third slide</span>
                </div>
                </div>
            </div>
            </div>

            <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 start-2 inline-flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 -translate-y-1/2 focus:outline-hidden">
            <span className="text-2xl" aria-hidden="true">
                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"></path>
                </svg>
            </span>
            <span className="sr-only">Previous</span>
            </button>
            <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 end-2 inline-flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 -translate-y-1/2 focus:outline-hidden">
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
                </svg>
            </span>
            </button>

            <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
        </div>
        {/* End Slider */}
        </div>

        <div className="border-b border-gray-200 pb-5 mt-10">
        <h3 className="text-base font-semibold text-gray-900">注目の対局</h3>
        </div>

        <div className="mt-6">
            <div className="flex item-center text-center mt-4 mb-4 mr-4 px-4 justify-end space-x-4">
                <div className="flex space-x-2">
                    {ResultStatusIcon(ResultStatus.WIN)}
                    <span className="size-1.5 text-xs text-gray-500">勝</span>
                </div>
                <div className="flex space-x-2">
                    {ResultStatusIcon(ResultStatus.DEFEATE)}
                    <span className="size-1.5 text-xs text-gray-500">負</span>
                </div>
                <div className="flex space-x-2">
                    {ResultStatusIcon(ResultStatus.TBD)}
                    <span className="size-1.5 text-xs text-gray-500">未</span>
                </div>
            </div>
        <ul
        role="list"
        className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
        >
        {dummyPickedUpGames.map((game) => (
            <li className="grid grid-cols-13 items-center px-4 py-5 hover:bg-gray-50 sm:px-6">
            <div className="col-span-2 text-gray-500 text-sm">{game.gameName}</div>
            {/* 先手 */}
            <div className="col-span-3 flex items-center gap-x-4 justify-center">
                <img
                alt=""
                src={`https://www.shogi.or.jp/images/player/pro/${game.senteNumber}.jpg`}
                className="size-11 object-cover rounded-full bg-gray-50"
                />
                <div className="flex">
                <p className="text-sm font-semibold text-gray-900">
                    <a href={`/kishiList/${game.senteNumber}`} className="hover:underline">
                    {game.senteName}
                    </a>
                </p>
                </div>
            </div>

            <div className="col-span-1 flex items-center gap-x-1.5">
                {ResultStatusIcon(game.senteResult)}
            </div>

            {/* vs */}
            <div className="col-span-1 text-sm text-center font-medium text-gray-500">vs</div>

            <div className="col-span-1 mt-1 flex items-center gap-x-1.5 justify-end">
                {ResultStatusIcon(game.goteResult)}
            </div>

            {/* 後手 */}
            <div className="col-span-3 flex items-center gap-x-4 justify-center">
                <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">
                        <a href={`/kishiList/${game.goteNumber}`} className="hover:underline">
                        {game.goteName}
                        </a>
                    </p>
                </div>
                <img
                    alt=""
                    src={`https://www.shogi.or.jp/images/player/pro/${game.goteNumber}.jpg`}
                    className="size-11 object-cover rounded-full bg-gray-50"
                />
            </div>
            
            <div className="col-span-2 text-right text-sm text-gray-500">{DateUtils.formatJapaneseDateWithWeekday(game.date)}</div>
            </li>

        ))}
        </ul>
        </div>

        <div className="border-b border-gray-200 pb-5 mt-10">
        <h3 className="text-base font-semibold text-gray-900">記事一覧</h3>
        </div>

        <div className="mt-6">
        <ul
        role="list"
        className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
        >
        {dummyArticles.map((article) => (
            <li key={article.id} className="relative flex items-center justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6">
                <div className="flex min-w-0 gap-x-4 items-center">
                    <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">
                        <a href="#">
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {article.title}
                        </a>
                    </p>
                    </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                    <div className="flex items-center gap-x-2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className="text-xs/5 text-gray-500">
                        {DateUtils.formatShortDateTime(article.createdDate)}
                        </span>
                    </div>
                    <ChevronRightIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                </div>
            </li>
        ))}
        </ul>
        </div>

        </main>
    );
  }
  