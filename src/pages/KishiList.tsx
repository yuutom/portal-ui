import KishiInfo from '../componets/KishiInfo'
import { dummyKishi } from '../data/kishis'

export default function KishiList() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {dummyKishi.map((kishi) => (
        <KishiInfo kishi={kishi} />
      ))}
    </ul>
  )
}
