import { useParams } from 'react-router-dom'
import { dummyArticles } from '../data/articles'
import type { Article } from '../types/article'

export default function Article() {
  const { id } = useParams<{ id: string }>()
  const article: Article | undefined = dummyArticles.find(
    (a) => String(a.id) === id
  )
  if (!article) {
    return <div className="p-8 text-gray-500">記事が見つかりません</div>
  }

  const categories: string[] = ["棋士・棋戦", "勉強", "雑学", "エンタメ"]

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
        <main className="py-5">
          <div className="mx-auto mt-2 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2 lg:col-start-1">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2 id="applicant-information-title" className="text-lg/6 font-medium text-gray-900">
                      {article.title}
                    </h2>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <img
                          alt=""
                          src={article.imageUrl}
                          className="text-center"
                        />
                        <dd className="mt-10 text-sm text-gray-900">
                          {article.content}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>
            </div>

            <section aria-labelledby="timeline-title" className="lg:col-span-1 lg:col-start-3">
              <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                  カテゴリ一覧
                </h2>
                {/* Activity Feed */}
                <div className="mt-6 flow-root">
                <ul role="list" className="-mb-8">
                {categories.map((category) => (
                  <li key={category}>
                    <div className="relative pb-8">
                      <div className="relative flex items-center space-x-3">
                            <p className="text-sm font-medium text-gray-900">{category}</p>
                      </div>
                    </div>
                  </li>
                ))}
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
