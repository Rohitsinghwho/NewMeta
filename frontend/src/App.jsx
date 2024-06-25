
import React,{useState,useEffect} from 'react'

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data'); // Uses the configured proxy
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);
  // console.log(data)

  return (
    <div>{data?.data}</div>
  )
}

export default App