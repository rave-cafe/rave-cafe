import PATHS from 'constants/paths'
import getPersons from 'domains/person/api/getPersons'
import Link from 'next/link'
import { Fragment } from 'react'

async function PersonsPage() {
  const persons = await getPersons()
  return persons.map((person) => (
    <Link key={person._id} href={`${PATHS.PERSON}/${person.slug}`}>
      {person.name}
    </Link>
  ))
}

export default PersonsPage
