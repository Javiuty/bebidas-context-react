import React, { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import Receta from "./Receta";

const ListaRecetas = () => {
  // extraer las recetas
  const { recetas, error } = useContext(RecetasContext);

  return (
    <div className="row mt-5">
      {!error ? (
        recetas.map((receta) => <Receta key={receta.idDrink} receta={receta} />)
      ) : (
        <p className="alert alert-primary full-width text-center">
          Seleccione al menos la categoria
        </p>
      )}
    </div>
  );
};

export default ListaRecetas;
