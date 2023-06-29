import { TGetStaticContentResponse } from '../api/getStaticContent'

type TStaticContent = {} & TGetStaticContentResponse

export default function StaticContent({ ...content }: TStaticContent) {
  return (
    <div>
      <h1>{content.title}</h1>
      {content.body?.map((bio) =>
        bio.children.map((el) => <span key={el._key}>{el.text}</span>)
      )}
    </div>
  )
}
