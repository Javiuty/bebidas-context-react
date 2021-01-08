import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { nombre, categoria } = busqueda;

  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar, setError } = useContext(
    RecetasContext
  );

  // fn para leer los contenidos
  const obtenerDatosReceta = (e) => {
    guardarBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };

  // Handling form
  const handlingForm = (e) => {
    e.preventDefault();

    if (categoria === "") {
      setError(true);
      return;
    }

    setError(false);
    buscarRecetas(busqueda);
    guardarConsultar(true);
  };

  return (
    <form className="col-12" onSubmit={handlingForm}>
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosReceta}
          >
            <option value="">-- Selecciona Categoría --</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
