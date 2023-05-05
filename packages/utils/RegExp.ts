const size =
  /^\d+(\.\d+)?((px)?|(rem)?|(%)?|(em)?|(ex)?|(cm)?|(mm)?|(in)?|(pt)?|(pc)?|(ch)?|(vh)?|(vw)?|(vmin)?|(vmax)?)$/
export function isSize(value: string) {
  return size.test(value)
}
const hexColors = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
export function isColor(value: string) {
  return hexColors.test(value)
}
