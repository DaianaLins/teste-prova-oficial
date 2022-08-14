import { getFirestore, collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar";
import SidebarItem from "../../components/sidebarItem";
import { firebaseApp } from "../firbase";
import { Container, FormAd } from "./style";

const Form = () =>{
  const [sidebar, setSidebar] = useState(false)
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [descrition, setDescrition] = useState("")
  const [img, setImg] = useState("")
  const [filmes, setFilmes] = useState([])
  const imgPath = 'https://image.tmdb.org/t/p/w500'
  const db = getFirestore(firebaseApp)
  const filmeCollectionRef = collection(db, 'filmes')

  const submitFilme = async () => {
    console.log({ author, title, descrition })
    const filme = await addDoc(filmeCollectionRef, { author, title, descrition, img })

    console.log({ filme })
  }

  const showSiderbar = () => setSidebar(!sidebar)
  return(
    <main>
      <div onClick={showSiderbar} style={{cursor:'pointer'}}><FaBars color='#d05d1b;' /></div>
      {sidebar && <Sidebar active={setSidebar}  />}
    <Container>
    <FormAd>
        <label htmlFor="autor"><input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} name="autor" /></label>
        <label htmlFor="titulo"><input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} name="titulo" /></label>
        <label htmlFor="descricao"><textarea name="descricao" placeholder="Descrição" value={descrition} onChange={(e) => setDescrition(e.target.value)} /></label>
        <input type="file"  name="img" value={img} placeholder="Selecione uma imagem" onChange={(e) => setImg(e.target.value)} id="" />
        <div>
          <button onClick={submitFilme}>Postar</button>
          <Link to="/"><button>Cancelar</button></Link>
        </div>
      </FormAd>
    </Container>
    </main>
  )
}

export default Form