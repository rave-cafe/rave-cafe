import getPerson from 'domains/person/api/getPerson'
import getPersons from 'domains/person/api/getPersons'
import PersonProfile from 'domains/person/components/PersonProfile'
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
