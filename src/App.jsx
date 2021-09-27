import logo from './logo.svg';
import './styles/styles.css';
import borderCollie from './media/borderCollie.jpg';
import rhodesiano from './media/rhodesiano.jpg';
import logoperrito from './media/logoperrito.png';

function App() {
  return (
    <div className="App">
      <header>
        <ul class="navbar">
          <li>
            <img src={logoperrito} alt="imagenlogo" class="logo" />
          </li>
          <li>
            <button class="button mainButton">Nuevo Post</button>
          </li>
          <li>
            <button class="button secondaryButton">Login</button>
          </li>
          <li>
            <button class="button mainButton">Registro</button>
          </li>
          <li>
            <div class="buscar">
              <input placeholder="Buscar una raza" />
              <i class="fas fa-search button iconoBusqueda"></i>
            </div>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className="breedCardContainer">
            <CardRazasPerros nombreRaza='Border Collie' imagen={borderCollie}/>
            <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesiano}/>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

function CardRazasPerros({nombreRaza, imagen}){
  return (
    <li className="breedCard">
      <div className="contenedorImagen">
        <img src={imagen} alt={nombreRaza} />
      </div>
      <span className="breedTitle">{nombreRaza}</span>
    </li>
  );
}

export default App;
