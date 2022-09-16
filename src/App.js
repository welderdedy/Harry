import {useState} from "react"
import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import welder from  "./img/tyrionn.jpg"
const Img = styled.img`
  border:solid;
  width:100px;
  height:200px;
  object-fit:cover;

`
const B1 = styled.body`
width:100%;
height:100%;

`

const Dedy = styled.ul`

display:flex;
  flex-wrap:wrap;
  position:relative;
  top:10px;
  left:550px;
  list-style:none;
  padding:20px,20px,20px,20px;
`
const S1 = styled.section`
position:relative; 
left:1100px;
top:10px; 
`
const M2 = styled.img`
border-radius:20px;
 
`

export default function App() {
  let Api = `http://hp-api.herokuapp.com/api/characters`;

  const [personagem, setPersonagem] = useState([]);

  useEffect(() => {
    axios.get(Api).then((response) => {
      console.log(response.data.slice(0, 24));
      setPersonagem(response.data.slice(0, 24));
    });
  }, [Api]);

  return (
    
    <B1>
    <div>
    
      <Dedy>
        {personagem.map((item) => (
          <li>
            
            <Img src={item.image} alt={item.name} />
           
          </li>
        ))}{" "}
      </Dedy>
      </div>
      <main>
      <S1>
      <M2 src={welder}  />
      </S1>
      </main>
      </B1>
    
  );
}
