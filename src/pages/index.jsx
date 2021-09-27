import CardRazasPerros from "components/CardRazasPerros";
import borderCollie from 'media/borderCollie.jpg';
import rhodesiano from 'media/rhodesiano.jpg';
import logoperrito from 'media/logoperrito.png';

function Index(){
    return (
      <div>
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
              <CardRazasPerros
                nombreRaza="Border Collie"
                imagen={borderCollie}
              />
              <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesiano} />
            </ul>
          </section>
          <section></section>
        </main>
        <footer></footer>
      </div>
    );
}

export default Index;