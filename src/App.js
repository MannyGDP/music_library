import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

  const API_URL = 'https://itunes.apple.com/search?term='

    useEffect(() => {
      if (search){

        const fetchData = async () => {
          document.title = `${search} Music`
          const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
          const resDate = await response.json()
          if (resDate.results.length){
            setData(resData.results)
          } else {
          setMessage('Not Found')
          }
        }
        fetchData()
      }
    }, [search])

const handleSearch = (e, term) => {
e.preventDefault()
setSearch(term)
}

    return (
        <div>
            <SearchBar />
            {message}
            <Gallery />
        </div>
    )
}

export default App
