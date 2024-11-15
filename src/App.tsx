import { useEffect } from "react";
import { apiSearcher } from "./api/searcher/apiSearcher";


function App() {
  const { getMovies } = apiSearcher();

  const fetchMovies = async () => {
    try {
      const movies = await getMovies({ query: "America" });
      console.log(movies);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {  
      fetchMovies(); 
  }, []);

  return <div></div>;
}

export default App;
