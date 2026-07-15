import { useEffect, useState } from 'react'


function App() {
  const [hello, setHello] = useState("")
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/hello/');
      const data = await response.json();
      console.log(data);
      setHello(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

  return (
    <>
      <h1>{hello}</h1>
    </>
  )
}

export default App
