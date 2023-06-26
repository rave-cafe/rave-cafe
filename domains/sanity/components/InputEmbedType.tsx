import { Stack, TextInput, TextInputProps } from '@sanity/ui'
import { useCallback, useEffect } from 'react'
import { set, StringInputProps, unset, useFormValue } from 'sanity'

import getDomainFromUrl from '../utils/getDomainFromUrl'

export default function InputEmbedType(
  props: StringInputProps & TextInputProps
) {
  const { onChange, value = '', elementProps } = props

  const pathBase = props.path.filter((pathSegment) => pathSegment !== 'type')
  const url = useFormValue([...pathBase, 'url']) as string | undefined

  let domain: string | undefined
  if (url) {
    domain = getDomainFromUrl(url).split('.')[0]
  }

  useEffect(() => {
    // clear this input when `url` input changes
    if (!url) {
      onChange(unset())
    } else {
      onChange(domain ? set(domain) : set(value))
    }
  }, [domain, onChange, url, value])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(domain ? set(domain) : set(event.target.value))
    },

    [domain, onChange]
  )

  return (
    <Stack space={3}>
      <TextInput
        {...elementProps}
        onChange={handleChange}
        onFocus={handleChange}
        value={value}
        disabled={value === domain}
      />
    </Stack>
  )
}
