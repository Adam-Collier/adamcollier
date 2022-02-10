const headers = {
  Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const get = async (key: string) => {
  try {
    const response = await fetch(
      `${process.env.UPSTASH_REDIS_REST_URL}/get/${key}`,
      {
        headers,
      },
    )

    const { result } = await response.json()

    return JSON.parse(result)
  } catch (error) {
    console.log(error)
  }
}

const has = async (key: string) => {
  try {
    const response = await fetch(
      `${process.env.UPSTASH_REDIS_REST_URL}/exists/${key}`,
      {
        headers,
      },
    )
    const { result } = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

const set = async (key: string, val: any) => {
  try {
    await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/set/${key}`, {
      headers,
      body: JSON.stringify(val),
      method: 'POST',
    })
  } catch (error) {
    console.log(error)
  }
}

const del = async (key: string) => {
  try {
    await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/del/${key}`, {
      headers,
    })
  } catch (error) {
    console.log(error)
  }
}

export const cache = { get, set, del, has }
