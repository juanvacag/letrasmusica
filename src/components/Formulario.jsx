import {useState} from 'react'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

  return (
    <form>
        <legend>Busca por Artista y Canción</legend>
        <div className="form-grid">
            <div>
                <label>Artista</label>
                <input
                    type="text"
                    name="artista"
                    placeholder="Nombre del Artista"
                    value={busqueda.artista}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>

            <div>
                <label>Canción</label>
                <input
                    type="text"
                    name="cancion"
                    placeholder="Titulo de la Canción"
                    value={busqueda.cancion}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>
            <input
                type="submit"
                value="Buscar"
            />
        </div>
    </form>
  )
}

export default Formulario