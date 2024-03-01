import { urlParam } from "./nav.js"

export const metaTags = (desc,keys) => {
  const cp = urlParam('page')
  const brand = 'ATOMY KESON | '
  const t = brand + cp
  $('title').text(t)
  $('meta[name="description"]').attr('content',`${brand + desc}`)
  $('meta[name="keywords"]').attr('content',keys)
}