import { getFirestore, collection, addDoc} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage";
import React, {  useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { firebaseApp } from "../firbase";
import { Container, FormAd } from "./style";

const Form = () => {
  const [sidebar, setSidebar] = useState(false)
  const [formData, setFormData] = useState<any>({
    author: '',
    title: '',
    description: '',
    stars: '',
    image: null,
  });
  const [progress, setProgress] = useState(0)
  const db = getFirestore(firebaseApp)
  const storage = getStorage(firebaseApp);
  const [teste, setTeste] = useState('')  
  
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: any) => {
    setFormData({ ...formData, image: e.target?.files[0]});
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
      alert("Por favor preencha todos os campos");
      return;
    }

    const storageRef = ref(
      storage,
      `images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        alert(err);
      },
      () => {
        setFormData({
          author: '',
          stars: '',
          title: "",
          description: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          setTeste(url)
          const articleRef = collection(db, "filmes");
          addDoc(articleRef, {
            title: formData.title,
            author: formData.author,
            stars: formData.stars,
            description: formData.description,
            imageUrl: url
          })
            .then(() => {
              setProgress(0);
              setTimeout( ()=>{
                alert('Filme adicionado com sucesso')
                window.location.href = '/teste-prova-oficial'
              },2500)
            })
            .catch((err) => {
              alert("Error ao adicionar filme");
            });
        });
      }
    );
  };

  const showSiderbar = () => setSidebar(!sidebar)
  return (
    <main>
      <div onClick={showSiderbar} style={{ cursor: 'pointer' }}><FaBars color='#d05d1b;' size={40} /></div>
      {sidebar && <Sidebar active={setSidebar} />}
      <Container>
          {teste && <img src={teste} alt="Imagem" height={200}  />}
        <FormAd >
          <label htmlFor="autor"><input type="text" placeholder="Autor"  onChange={(e) => handleChange(e)} name="author" /></label>
          <label htmlFor="titulo"><input type="text" placeholder="T??tulo"  onChange={(e) => handleChange(e)} name="title" /></label>
          <label htmlFor="descricao"><textarea name="description" placeholder="Descri????o" onChange={(e) => handleChange(e)}  /></label>
          <label htmlFor="avaliacao"><input type="number" placeholder="Avalia????o"  onChange={(e) => handleChange(e)} name="stars" /></label>
          <input type="file" accept="image/*" name="image" onChange={(e) => handleImageChange(e)} placeholder="Selecione uma imagem" id="" />
          <div>
            <button onClick={handlePublish}>Postar</button>
            <Link to="/"><button>Cancelar</button></Link>
          </div>
          <br/>
          {!formData.image && <p style={{paddingTop: '20px', paddingLeft: '30px'}}>{progress}%</p>}
          <br/>
        </FormAd>
      </Container>
    </main>
  )
}

export default Form