import { useEffect, useState} from 'react';
import { Joke } from "../Components/Joke/joke";

export const HomePage = () => {
  
  const [jokes, setJokes] = useState ([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/jokes");
      const data = await response.json();
      setJokes(data);
    };

    fetchData();
  }, []);
    
    return (
    <div className="homepage">
      <h1>Vtipy dne</h1>
    {}
    {jokes.map((joke) => (
      <Joke
      key={joke.id}
      userAvatar={joke.user.avatar}
      userName={joke.user.name}
      text={joke.text}
likes={Joke.likes}
dislikes={joke.dislikes}
/>
    ))}
      </div>
  );
};
