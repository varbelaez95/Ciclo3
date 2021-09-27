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
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={borderCollie} alt="Border Collie" />
              </div>
              <span className="breedTitle">Border Collie</span>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={rhodesiano} alt="Rhodesiano" />
              </div>
              <span className="breedTitle">Rhodesiano</span>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
