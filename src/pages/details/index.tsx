import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { Container } from "./styles";
import styles from './details.module.css'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../firbase";

const DetailsMovie = () => {
  const { id } = useParams()
  const [filme, setFilme] = useState<any>({})
  const [sidebar, setSidebar] = useState(false)
  const imgPath = 'https://image.tmdb.org/t/p/w500'
  const [movie, setMovie] = React.useState({});
  const db = getFirestore(firebaseApp)

  const filmeCollectionRef = collection(db, 'filmes')

  const truncate = (str: any, n: any) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  const getFilmes = async () => {
    const data = await getDocs(filmeCollectionRef)
    const [comp] = data.docs.map((doc) => ({ ...doc.data(), id: id })) 
    console.log(comp.id, id)
    setFilme(comp)
  }
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b0a703dee6c190fd1b338d53ba60b802&language=pt-BR`)
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, overview, release_date } = data
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${imgPath}${poster_path}`,
          releaseDate: release_date
        }
        if(data.status_code) getFilmes()
        setFilme(movie)
      })

  }, [id])

  const showSiderbar = () => setSidebar(!sidebar)
  return (
    <main >
      <div onClick={showSiderbar} style={{ cursor: 'pointer', position:'absolute' }}><FaBars color='#d05d1b' size={40} /></div>
      {sidebar && <Sidebar active={setSidebar} />}
      <Container>
     <img src={filme?.image || filme?.imageUrl} height={650} alt="" />

      </Container>
      <div className={styles.bannercontainer}>
      <div className={styles.bannercontent}>
        <h2 ><span style={{fontSize: '90px', color: '#d05d1b',  fontWeight: 900, fontFamily: 'sans-serif'}}>C</span> show</h2>
        <h1 className={styles.bannertitle}>
          {filme?.title }
        </h1>
        <div className={styles.bannerbuttonscontainer}>
          <button className={styles.bannerbutton}>Assistir</button>
          <button className={styles.bannerbutton}>Minha Lista</button>
        </div>
        <div className={styles.bannerdescription}>
          <h2>{truncate(filme.sinopse || filme.description, 150)}</h2>
        </div>
        {/* adicionadoo por */}
      </div>
      </div>
  
    </main >
  )
}

export default DetailsMovie