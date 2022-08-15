import React, { useEffect, useState } from "react";
import { firebaseApp } from "../firbase";
import { Container, MovieList, Movie } from "./styles";
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import {AiOutlineStar} from 'react-icons/ai'
import { iFilmes } from "../../types/filmes/filmes";
import Nav from "../../components/nav";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";

// type moviesProps = {
// 	filmes: Array<iFilmes>
// }

const Home = () =>{
  // const {filmes} = props
  const [filmes, setFilmes] = useState<any[]>([]);
  const db = getFirestore(firebaseApp)
  const filmeCollectionRef = collection(db, 'filmes')
  const imgPath = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b0a703dee6c190fd1b338d53ba60b802&language=pt-BR`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setFilmes(data.results)
      })
  }, [])

  useEffect(() => {
    const getFilmes = async () => {
      const data = await getDocs(filmeCollectionRef)
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getFilmes()
  }, [])
  console.log(filmes)

  return (
    <Container>
      <Header />
      <h1>Próximos filmes</h1>
      <MovieList>
        {
          filmes.map((filme => {
            return (
              <Movie key={filme.id}>
                <Link to={`/details/${filme.id}`}><img src={`${imgPath}${filme.poster_path}`} alt="" /><img src="" alt="" /></Link>
                <span>{filme.title}</span>
                <span><AiOutlineStar/> {filme.vote_average}</span>
              </Movie>
            )
          })
          )}
      </MovieList>
    </Container>
  )
}

export default Home