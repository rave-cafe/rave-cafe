import { TGetPersonResponse } from 'api/person/getPerson'

type TPersonProfile = {} & TGetPersonResponse
function PersonProfile({ ...person }: TPersonProfile) {
  return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.location}</p>
      {person.bio?.map((bio) =>
        bio.children.map((el) => <span key={el._key}>{el.text}</span>)
      )}
    </div>
  )
}

export default PersonProfile
