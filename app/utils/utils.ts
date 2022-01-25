export const toSlug = (title: string) => title.toLowerCase().replace(/ /g, '-')

export const toReadableDate = (date: Date) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return new Date(date).toLocaleDateString('en-US', dateOptions)
}

const conjunctions = ['for', 'and', 'nor', 'but', 'or', 'yet', 'so']

const articles = ['a', 'an', 'the']

const prepositions = [
  'aboard',
  'about',
  'above',
  'across',
  'after',
  'against',
  'along',
  'amid',
  'among',
  'anti',
  'around',
  'as',
  'at',
  'before',
  'behind',
  'below',
  'beneath',
  'beside',
  'besides',
  'between',
  'beyond',
  'but',
  'by',
  'concerning',
  'considering',
  'despite',
  'down',
  'during',
  'except',
  'excepting',
  'excluding',
  'following',
  'for',
  'from',
  'in',
  'inside',
  'into',
  'like',
  'minus',
  'near',
  'of',
  'off',
  'on',
  'onto',
  'opposite',
  'over',
  'past',
  'per',
  'plus',
  'regarding',
  'round',
  'save',
  'since',
  'than',
  'through',
  'to',
  'toward',
  'towards',
  'under',
  'underneath',
  'unlike',
  'until',
  'up',
  'upon',
  'versus',
  'via',
  'with',
  'within',
  'without',
]

const lowers = new Set([...conjunctions, ...articles, ...prepositions])

export const toTitleCase = (slug: string) =>
  slug
    .split('-')
    .map((word) => {
      if (lowers.has(word)) {
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')

// solution taken from https://css-tricks.com/a-lightweight-masonry-solution/
export const positionGridItems = (
  grid: HTMLDivElement | null,
  numberOfColumns: number,
  setNumberOfColumns: (n: number) => void,
) => {
  if (grid && getComputedStyle(grid).gridTemplateRows !== 'masonry') {
    // we need to tell typescript here that we are switching the childNodes to an array of HTMLElements
    // then when we iterate it knows that .style is available
    const gridItems = [...grid.childNodes] as Array<HTMLElement>
    const rowGap = parseInt(window.getComputedStyle(grid).rowGap)

    // window.getComputedStyle(grid).gridTemplateColumns returns the rendered grid-template-columns values
    // e.g grid-template-columns: 200px 200px 200px 200px is rendered and we return 200px 200px 200px 200px
    // we then split by the spaces and get the length
    const computedNumberOfColumns = window
      .getComputedStyle(grid)
      .gridTemplateColumns.split(' ').length

    if (computedNumberOfColumns !== numberOfColumns) {
      setNumberOfColumns(computedNumberOfColumns)

      // revert to initial positioning, remove margin
      gridItems.forEach((item: HTMLElement) =>
        item.style.removeProperty('margin-top'),
      )

      if (computedNumberOfColumns > 1) {
        gridItems.slice(computedNumberOfColumns).forEach((item, index) => {
          const imgAboveBottomPosition =
            gridItems[index].getBoundingClientRect().bottom
          const topOfCurrentImage = item.getBoundingClientRect().top

          item.style.marginTop = `${
            imgAboveBottomPosition + rowGap - topOfCurrentImage
          }px`
        })
      }
    }
  }
}

export const metaAutofill = async (
  e: React.ChangeEvent<any>,
): Promise<void> => {
  let { value } = e.target as HTMLInputElement

  if (!value) return

  const response = await fetch('/admin/autofill/meta', {
    method: 'POST',
    body: JSON.stringify({
      url: value,
    }),
  })

  const data = await response.json()

  for (const property in data) {
    if (document.getElementById(property)) {
      let input = document.getElementById(property) as HTMLInputElement
      input.value = data[property]
    }
  }
}

export const faviconAutofill = async (
  e: React.ChangeEvent<any>,
): Promise<void> => {
  let { value } = e.target as HTMLInputElement

  if (!value) return

  const response = await fetch('/admin/autofill/favicon', {
    method: 'POST',
    body: JSON.stringify({
      url: value,
    }),
  })

  const data = await response.json()

  for (const property in data) {
    if (document.getElementById(property)) {
      let input = document.getElementById(property) as HTMLInputElement
      input.value = data[property]
    }
  }
}

export type Heading = {
  id: string
  title: string
  items?: Heading[]
}

export const getHeadings = (source: string) => {
  // Get each line individually, and filter out anything that
  // isn't a heading.
  const headingLines = source
    .split('\n')
    .filter((line) => line.match(/^###*\s/))

  // an array for creating our nested structure
  const headings: Heading[] = []

  let baseLevel: number
  // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'
  headingLines.forEach((line, index) => {
    const title = line.replace(/^###*\s/, '')
    // make lower case, remove any non alphanumeric characters (apart from spaces and dashes)
    // and then add dashes
    const id = title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 -]/gi, '')
      .replace(/ /g, '-')
    // I only care about h2 and h3.
    // If I wanted more levels, I'd need to count the
    // number of #s.
    const level = line.slice(0, 3) === '###' ? 3 : 2
    // the first heading becomes our base level
    // this will decide whether we nest or not
    if (index === 0) baseLevel = level
    // base our headings structure off of the first level obtained
    if (level === baseLevel) {
      headings.push({ id, title, items: [] })
    } else {
      headings[headings.length - 1].items?.push({ id, title })
    }
  })

  return headings
}
