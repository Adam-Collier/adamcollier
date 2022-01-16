import LRU from 'lru-cache'

const createLruCache = () => {
  // doing anything other than any was a pain
  const newCache = new LRU<string, { value: any }>({
    max: 1000,
    maxAge: 1000 * 60 * 60, // 1 hour
  })

  return newCache
}
declare global {
  // This preserves the LRU cache during development
  // eslint-disable-next-line
  var lruCache: LRU<string, { value: any }> | undefined
}

const lruCache = (global.lruCache = global.lruCache
  ? global.lruCache
  : createLruCache())

export { lruCache }
