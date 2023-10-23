import "./Card.css"
import { useState, useEffect } from 'react'

export default function CardUserEffect(props) {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log(resourceType)
    
    fetch('https://jsonplaceholder.typicode.com/'+ resourceType)
      .then(response => response.json())
      .then(json => console.log(json))

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

