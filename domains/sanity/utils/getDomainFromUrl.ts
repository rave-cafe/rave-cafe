export default function getDomainFromUrl(url: string) {
  let result
  let match

  if (
    (match = url.match(
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
    ))
  ) {
    result = match[1]
    if ((match = result.match(/^[^\.]+\.(.+\..+)$/))) {
      result = match[1]
    }
  }

  return result
}
