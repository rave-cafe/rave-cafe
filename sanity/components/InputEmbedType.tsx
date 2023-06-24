import { Stack, TextInput, TextInputProps } from '@sanity/ui'
import { useCallback, useEffect } from 'react'
import { set, StringInputProps, unset, useFormValue } from 'sanity'
import getDomainFromUrl from 'utils/getDomainFromUrl'

export default function InputEmbedType(
  props: StringInputProps & TextInputProps
) {
  const { onChange, value = '', elementProps } = props

  const url = useFormValue(['url']) as string | undefined

  useEffect(() => {
    // clear this input when `url` input changes
    onChange(unset())
  }, [onChange, url])

  let domain: string | undefined
  if (url) {
    domain = getDomainFromUrl(url).split('.')[0]
  }

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
