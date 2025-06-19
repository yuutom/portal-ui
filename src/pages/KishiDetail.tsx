import {
  CheckIcon,
  HandThumbUpIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from '@heroicons/react/20/solid'
import { useParams } from 'react-router-dom'
import type { Kishi } from '../types/kishi'
import { dummyKishi } from '../data/kishis'
import { getStatusIconAndStyle } from '../enum/ResultStatus'

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}
const eventTypes = {
  applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
  advanced: { icon: HandThumbUpIcon, bgColorClass: 'bg-blue-500' },
  completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
}

const comments = [
  {
    id: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
  },
  {
    id: 2,
    name: 'Michael Foster',
    date: '4d ago',
    imageId: '1519244703995-f4e0f30006d5',
    body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function getCurrentAge(birthDate: string): number | null {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();

  const hasBirthdayPassedThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

  if (!hasBirthdayPassedThisYear) {
    age -= 1;
  }

  return age;
}

function getDebutAge(birthDate: string, debutDate: string): number | null {
  const birth = new Date(birthDate);
  const debut = new Date(debutDate);
  let age = debut.getFullYear() - birth.getFullYear();

  const hasBirthdayPassedThisYear =
    debut.getMonth() > birth.getMonth() ||
    (debut.getMonth() === birth.getMonth() && debut.getDate() >= birth.getDate());

  if (!hasBirthdayPassedThisYear) {
    age -= 1;
  }

  return age;
}


function formatJapaneseDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return '不正な日付';

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 0始まりなので+1
  const day = date.getDate();

  return `${year}年${month}月${day}日`;
}

function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // 月は0始まりなので +1
  const day = date.getDate();
  return `${month}/${day}`;
}

export default function Example() {
  const { kishiNumber } = useParams<{ kishiNumber: string }>()
  const kishi: Kishi | undefined = dummyKishi.find(
    (k) => String(k.kishiNumber) === kishiNumber
  )
  if (!kishi) {
    return <div className="p-8 text-gray-500">棋士が見つかりません</div>
  }
  const displayTitle: string[] =
  Array.isArray(kishi?.title) && kishi.title.length > 0
    ? kishi.title
    : [kishi?.danni ?? ''];

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <main className="py-10">
          {/* Page header */}
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <div className="shrink-0">
                <div className="relative">
                  <img
                    alt=""
                    src={kishi?.imageUrl}
                    className="h-40 w-auto rounded-full"
                  />
                  <span aria-hidden="true" className="absolute inset-0 rounded-full shadow-inner" />
                </div>
              </div>
              <div className="ml-4">
                <div className="flex items-center space-x-2">
                  <h1 className="text-4xl font-bold text-gray-900">{kishi?.nameKana}</h1>
                  <div className="ml-2 space-x-2">
                  {displayTitle.map((title) => (
                  <span className="inline-flex shrink-0 rounded-full bg-green-50 px-4.5 py-1.5 font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {title}
                  </span>
                  ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Disqualify
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Advance to offer
              </button>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2 lg:col-start-1">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2 id="applicant-information-title" className="text-lg/6 font-medium text-gray-900">
                      棋士情報
                    </h2>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">棋士番号</dt>
                        <dd className="mt-1 text-sm text-gray-900">{kishi?.kishiNumber}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">出身地</dt>
                        <dd className="mt-1 text-sm text-gray-900">{kishi?.birthPlace}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">段位</dt>
                        <dd className="mt-1 text-sm text-gray-900">{kishi.danni}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">師匠</dt>
                        <dd className="mt-1 text-sm text-gray-900">{kishi?.master}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">生年月日</dt>
                        <dd className="mt-1 text-sm text-gray-900">{formatJapaneseDate(kishi.birthDate)}（{getCurrentAge(kishi.birthDate)}歳）</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">デビュー年月日</dt>
                        <dd className="mt-1 text-sm text-gray-900">{formatJapaneseDate(kishi.debutDate)}（{getDebutAge(kishi.birthDate, kishi.debutDate)}歳）</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">所属</dt>
                        <dd className="mt-1 text-sm text-gray-900">{kishi.affiliation}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">棋風</dt>
                        <dd className="mt-1 text-sm text-gray-900">{kishi.playingStyle}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">順位戦</dt>
                        <dd className="mt-1 text-sm text-gray-900">{kishi?.junisen}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">竜王戦</dt>
                        <dd className="mt-1 text-sm text-gray-900">{kishi?.ryuohsen}</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">紹介</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                          Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                          proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>

              {/* Comments*/}
              <section aria-labelledby="notes-title">
                <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
                  <div className="divide-y divide-gray-200">
                    <div className="px-4 py-5 sm:px-6">
                      <h2 id="notes-title" className="text-lg font-medium text-gray-900">
                        棋士成績
                      </h2>
                    </div>
                    <div className="px-4 py-6 sm:px-6">
                      <ul role="list" className="space-y-8">
                        {comments.map((comment) => (
                          <li key={comment.id}>
                            <div className="flex space-x-3">
                              <div className="shrink-0">
                                <img
                                  alt=""
                                  src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                                  className="size-10 rounded-full"
                                />
                              </div>
                              <div>
                                <div className="text-sm">
                                  <a href="#" className="font-medium text-gray-900">
                                    {comment.name}
                                  </a>
                                </div>
                                <div className="mt-1 text-sm text-gray-700">
                                  <p>{comment.body}</p>
                                </div>
                                <div className="mt-2 space-x-2 text-sm">
                                  <span className="font-medium text-gray-500">{comment.date}</span>{' '}
                                  <span className="font-medium text-gray-500">&middot;</span>{' '}
                                  <button type="button" className="font-medium text-gray-900">
                                    Reply
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-6 sm:px-6">
                    <div className="flex space-x-3">
                      <div className="shrink-0">
                        <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <form action="#">
                          <div>
                            <label htmlFor="comment" className="sr-only">
                              About
                            </label>
                            <textarea
                              id="comment"
                              name="comment"
                              rows={3}
                              placeholder="Add a note"
                              className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6"
                              defaultValue={''}
                            />
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <a
                              href="#"
                              className="group inline-flex items-start space-x-2 text-sm text-gray-500 hover:text-gray-900"
                            >
                              <QuestionMarkCircleIcon
                                aria-hidden="true"
                                className="size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                              />
                              <span>Some HTML is okay.</span>
                            </a>
                            <button
                              type="submit"
                              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                              Comment
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* 対局結果タイムライン */}
            <section aria-labelledby="timeline-title" className="lg:col-span-1 lg:col-start-3">
              <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                  対局結果
                </h2>
                {/* Activity Feed */}
                <div className="mt-6 flow-root">
                <ul role="list" className="-mb-8">
                  {kishi.resultsFromKishi?.map((result) => {
                    const { icon: StatusIcon, bgColor } = getStatusIconAndStyle(result.resultStatus);

                    return (
                      <li key={result.gameName}>
                        <div className="relative pb-8">
                          <div className="relative flex items-center space-x-3">
                            <div>
                              <span
                                className={classNames(
                                  bgColor,
                                  'flex size-8 items-center justify-center rounded-full ring-8 ring-white',
                                )}
                              >
                                <StatusIcon aria-hidden="true" className="size-5 text-white" />
                              </span>
                            </div>
                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                              <div>
                                <p className="text-sm font-medium text-gray-900">{result.gameName}</p>
                                <p className="ml-4 text-xs text-gray-500">vs. {result.oponentName}</p>
                              </div>
                              <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                {formatShortDate(result.date)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
