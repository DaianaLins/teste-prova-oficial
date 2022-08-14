import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { Container } from "./styles";

const DetailsMovie = () => {
  const { id } = useParams()
  const [filme, setFilme] = useState<any>({})
  const [sidebar, setSidebar] = useState(false)
  const imgPath = 'https://image.tmdb.org/t/p/w500'

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
        setFilme(movie)
      })
  }, [id])

  console.log(filme.image)
  const showSiderbar = () => setSidebar(!sidebar)
  return (
    <main>
      <div onClick={showSiderbar} style={{ cursor: 'pointer' }}><FaBars color='#d05d1b;' /></div>
      {sidebar && <Sidebar active={setSidebar} />}
      <Container>
        <img src={filme.image} alt="" />
        <h1>{filme.title}</h1>
        <span>{filme.sinopse}</span>
        </Container>
    </main >
  )
}

export default DetailsMovie