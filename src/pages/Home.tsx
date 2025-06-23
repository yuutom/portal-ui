import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { dummyPickedUpGames } from "../data/games";
import { Link } from "react-router-dom";
import { ResultStatus } from "../enum/ResultStatus";

const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      role: 'Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
      lastSeen: null,
    },
    {
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
      lastSeen: null,
    },
  ]

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
        <ul
        role="list"
        className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
        >
        {dummyPickedUpGames.map((game) => (
            <li key={game.id} className="relative flex justify-around gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6">
            <div className="flex min-w-0 gap-x-4">
                <img alt="" src={"https://www.shogi.or.jp/images/player/pro/" + game.senteNumber + ".jpg"} className="size-11 object-cover rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                <a href={`/kishiList/${game.senteNumber}`} className="hover:underline">
                  {game.senteName}
                </a>
              </p>
              {game.senteResult == ResultStatus.DEFEATE ? (
                    <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="size-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs/5 text-gray-500">勝</p>
                    </div>
                ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-rose-500/20 p-1">
                        <div className="size-1.5 rounded-full bg-rose-500" />
                    </div>
                    <p className="text-xs/5 text-gray-500">負</p>
                    </div>
                )}
                </div>
            </div>

            <div>vs</div>

            <div className="flex min-w-0 gap-x-4">
                <img alt="" src={"https://www.shogi.or.jp/images/player/pro/" + game.goteNumber + ".jpg"} className="size-11 object-cover rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                <a href={`/kishiList/${game.goteNumber}`} className="hover:underline">
                  {game.goteName}
                </a>
              </p>
              {game.goteResult == ResultStatus.DEFEATE ? (
                    <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="size-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs/5 text-gray-500">勝</p>
                    </div>
                ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-rose-500/20 p-1">
                        <div className="size-1.5 rounded-full bg-rose-500" />
                    </div>
                    <p className="text-xs/5 text-gray-500">負</p>
                    </div>
                )}
                </div>
            </div>
            </li>
        ))}
        </ul>
        </div>

        <div className="border-b border-gray-200 pb-5 mt-10">
        <h3 className="text-base font-semibold text-gray-900">記事一覧</h3>
        </div>


        </main>
    );
  }
  