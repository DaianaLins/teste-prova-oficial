import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { Container } from "./styles";
import styles from './details.module.css'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../firbase";
import { BsPerson } from 'react-icons/bs'

const DetailsMovie = () => {
  const { id } = useParams()
  const [filme, setFilme] = useState<any>({})
  const [sidebar, setSidebar] = useState(false)
  const imgPath = 'https://image.tmdb.org/t/p/w500'
  const db = getFirestore(firebaseApp)

  const filmeCollectionRef = collection(db, 'filmes')

  const truncate = (str: any, n: any) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  const getFilmes = async () => {
    const data = await getDocs(filmeCollectionRef)
    const comp = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    comp.map((idN) => {
      if (idN.id == id) setFilme(idN)
    })
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
        if (data.status_code) getFilmes()
        setFilme(movie)
      })

  }, [id])

  const showSiderbar = () => setSidebar(!sidebar)
  return (
    <main >
      <div onClick={showSiderbar} style={{ cursor: 'pointer', position: 'absolute' }}><FaBars color='#d05d1b' size={40} /></div>
      {sidebar && <Sidebar active={setSidebar} />}
      <Container>
        {filme.image ? (<img src={filme?.image} alt="" />) :
          (<img src={filme?.imageUrl} alt="" style={{ margin: 0, marginTop: '50px', marginLeft: '240px' }} height={530} />)
        }

      </Container>
      <div className={styles.bannercontainer}>
        <div className={styles.bannercontent}>
          <h2 ><span style={{ fontSize: '90px', color: '#d05d1b', fontWeight: 900, fontFamily: 'sans-serif' }}>C</span> show</h2>
          <h1 className={styles.bannertitle}>
            {filme?.title}
          </h1>
          <br />
          <div className={styles.bannerbuttonscontainer}>
            <a href={`https://www.youtube.com/results?search_query=${filme?.title}`}><button className={styles.bannerbutton} >Assistir trailer</button></a>
            <a href={`https://www.themoviedb.org/search?language=pt-BR&query=${filme?.title}`}><button className={styles.bannerbutton}>Mais informações</button></a>
          </div>
          <div className={styles.bannerdescription}>
            <h2>{truncate(filme.sinopse || filme.description, 150)}</h2>
            <br />
            {filme.author ? (<p><BsPerson /> Autor: {filme.author}</p>) : (null)}
          </div>
        </div>
      </div>

    </main >
  )
}

export default DetailsMovie