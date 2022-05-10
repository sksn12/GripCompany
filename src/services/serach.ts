import axios from 'axios'

export const InquireSerachData = async (serachValue: string | undefined, pageNum: number) => {
  try {
    console.log(process.env.REACT_APP_API_KEY)

    const success = await axios({
      method: 'get',
      params: {
        apikey: process.env.REACT_APP_API_KEY,
        s: serachValue,
        page: pageNum,
      },
      url: `http://www.omdbapi.com/`,
    })
    return success
  } catch (err) {
    return 'error'
  }
}

// https://www.omdbapi.com/?apikey=92e32667&s=iron%20man&page=1
