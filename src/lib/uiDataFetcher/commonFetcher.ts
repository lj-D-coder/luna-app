import useSWR from 'swr'

const fetcher = async (url: string) => {
  const response = await fetch(url,{ cache: "no-store" })
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.')
  }
  return response.json()
}

export function CommonFetcher(url: string) {
  const { data, error, mutate } = useSWR(url, fetcher)
  return { data, error, revalidate: mutate }
}
