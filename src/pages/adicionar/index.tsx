import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar";
import SidebarItem from "../../components/sidebarItem";
import { firebaseApp, storage } from "../firbase";
import { Container, FormAd } from "./style";

const Form = () => {
  const [sidebar, setSidebar] = useState(false)
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [descrition, setDescrition] = useState("")
  const [stars, setStars] = useState('')
  const [img, setImg] = useState("")
  const [filmes, setFilmes] = useState([])
  const [progress, setProgress] = useState(0)
  const imgPath = 'https://image.tmdb.org/t/p/w500'
  const db = getFirestore(firebaseApp)
  const filmeCollectionRef = collection(db, 'filmes')

  const handleUpload = (event: any) => {
    console.log(event)
    const file = event.target.value
    console.log(file)
    if (!file) return
    const storageRef = ref(storage, `image/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on('state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes)
        setProgress(progress)
      },
      erro => {
        alert(erro)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL);
          submitFilme()
          console.log(downloadURL)
        });
      }
    )
  }
  console.log(img)

  const submitFilme = async () => {
    console.log({ author, title, descrition})
    const filme = await addDoc(filmeCollectionRef, { author, title, descrition, stars, img})

    // console.log(filme)
  }

  const showSiderbar = () => setSidebar(!sidebar)
  return (
    <main>
      <div onClick={showSiderbar} style={{ cursor: 'pointer' }}><FaBars color='#d05d1b;' size={40} /></div>
      {sidebar && <Sidebar active={setSidebar} />}
      <Container>
        <FormAd onSubmit={submitFilme}>
          <label htmlFor="autor"><input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} name="autor" /></label>
          <label htmlFor="titulo"><input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} name="titulo" /></label>
          <label htmlFor="descricao"><textarea name="descricao" placeholder="Descrição" value={descrition} onChange={(e) => setDescrition(e.target.value)} /></label>
          <label htmlFor="avaliacao"><input type="number" placeholder="Avaliação" value={stars} onChange={(e) => setStars(e.target.value)} name="stars" /></label>
          <input type="file" name="img" onChange={(e) => handleUpload(e)} placeholder="Selecione uma imagem" id="" />
          <div>
            <button type="submit">Postar</button>
            <Link to="/"><button>Cancelar</button></Link>
          </div>
          {!img && <p>{progress}%</p>}
        {img && <img src={img} alt="Imagem" height={200} />}
        </FormAd>
      </Container>
    </main>
  )
}

export default Form