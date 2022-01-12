export const toSlug = (title: string) => title.toLowerCase().replace(/ /g, '-')

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
