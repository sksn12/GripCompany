import axios from 'axios'

export const InquireSearchData = async (searchValue: string | undefined, pageNum: number) => {
  try {
    const { data } = await axios({
      method: 'get',
      params: {
        apikey: process.env.REACT_APP_API_KEY,
        s: searchValue,
        page: pageNum,
      },
      url: `http://www.omdbapi.com/`,
    })
    return data
  } catch (err) {
    return 'error'
  }
}
