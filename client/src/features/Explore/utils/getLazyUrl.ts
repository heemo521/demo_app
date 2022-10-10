export function getLazyUrl(cloudinaryUrl: string, url: string): string | null {
  const FILE_NAME_REGEX = /([\w-]+)(\.\w+)+(?!.*(\w+)(\.\w+)+)/g
  const IMAGE_NAME = url.match(FILE_NAME_REGEX)
  if (IMAGE_NAME) {
    return cloudinaryUrl + IMAGE_NAME
  }
  return null
}
