import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { Container } from "./styles";
import styles from './details.module.css'

const DetailsMovie = () => {
  const { id } = useParams()
  const [filme, setFilme] = useState<any>({})
  const [sidebar, setSidebar] = useState(false)
  const imgPath = 'https://image.tmdb.org/t/p/w500'
  const [movie, setMovie] = React.useState({});


  const truncate = (str: any, n: any) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b0a703dee6c190fd1b338d53ba60b802&language=pt-BR`)
      .then(response => response.json())
      .then(data => {
        console.log({data})
        const { title, poster_path, overview, release_date } = data
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${imgPath}${poster_path}`,
          releaseDate: release_date
        }
        setFilme(movie)
      })
  }, [id])

  console.log(filme)
  const showSiderbar = () => setSidebar(!sidebar)
  return (
    <main >
      <div onClick={showSiderbar} style={{ cursor: 'pointer', position:'absolute' }}><FaBars color='#d05d1b;' size={40} /></div>
      {sidebar && <Sidebar active={setSidebar} />}
      {/* linear-gradient( transparent, #010001) */}
      <Container>
     <img src={filme?.image} alt="" />

      </Container>
      <div className={styles.bannercontainer}>
      <div className={styles.bannercontent}>
        <h1 className={styles.bannertitle}>
          {filme?.title }
        </h1>
        <div className={styles.bannerbuttonscontainer}>
          <button className={styles.bannerbutton}>Assistir</button>
          <button className={styles.bannerbutton}>Minha Lista</button>
        </div>
        <div className={styles.bannerdescription}>
          <h2>{truncate(filme.sinopse, 150)}</h2>
        </div>
      </div>
      </div>
  
    </main >
  )
}

export default DetailsMovie