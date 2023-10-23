import "./Card.css"
import { useState, useEffect } from 'react'

export default function CardUserEffectAsync(props) {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    const fetchResourceType = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/'+ resourceType);   
      const responseJSON = await response.json();      
      console.log(responseJSON);
    }
    fetchResourceType();
  }, [resourceType]);

  const changeResourceType = (resource) => {
    setResourceType(resource);
  };

  return (
    <div className="Card">
      <div className="Title"><h3>{props.titulo}</h3></div>
      <div className="Content">{props.texto}
        <p>{props.param1}</p>
        <div>
          <h3>{resourceType}</h3>
          <button onClick={() => changeResourceType("posts")} >Posts
          </button>
          <button onClick={() => changeResourceType("comments")} >Comentários
          </button>
        </div>
      </div>

    </div>
  )
}

