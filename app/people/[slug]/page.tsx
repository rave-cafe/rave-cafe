import getPerson from 'api/person/getPerson'
import getPersons from 'api/person/getPersons'
import PersonProfile from 'components/PersonProfile'
import { redirect } from 'next/navigation'

export async function generateStaticParams() {
  const persons = await getPersons()

  return persons.map((person) => ({
    slug: person.slug,
  }))
}

export default async function PersonPage({
  params,
}: {
  params: { slug: string }
}) {
  const person = await getPerson(params.slug)

  if (!person) {
    redirect(`../`)
  }

  return <PersonProfile {...person} />
}
