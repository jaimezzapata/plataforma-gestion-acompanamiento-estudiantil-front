import "./Notas.css";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { endPoints } from "../api/apiSistemaGestion";

const Notas = () => {
  const [notas, setNotas] = useState([]);
  function getNotas() {
    fetch(endPoints.notas)
      .then((response) => response.json())
      .then((data) => setNotas(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getNotas();
  }, []);

  function eliminarNota(id) {
    fetch(endPoints.notas + "/" + id, {
      method: "DELETE",
    })
      .then((reponse) => reponse.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    getNotas();
  }

  return (
    <div className="notas-container">
      <Header />
      <div className="notas-content">
        <div className="notas-header">
          <h2>Listado de Notas</h2>
          <p>Gestión y seguimiento de calificaciones estudiantiles</p>
        </div>

        <div className="tabla-wrapper">
          <table className="tabla-notas">
            <thead>
              <tr>
                <th>ID</th>
                <th>Profesor ID</th>
                <th>Estudiante ID</th>
                <th>Materia</th>
                <th>Tipo Evaluación</th>
                <th>Valor</th>
                <th>Fecha</th>
                <th>Observaciones</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {notas.map((nota) => (
                <tr>
                  <td className="id-cell">{nota.id}</td>
                  <td className="profesor-id">{nota.profesor_id}</td>
                  <td className="estudiante-id">{nota.estudiante_id}</td>
                  <td className="materia-name">{nota.materia}</td>
                  <td>
                    <span className="tipo-evaluacion">
                      {nota.tipo_evaluacion}
                    </span>
                  </td>
                  <td>
                    <span className="valor-nota">{nota.valor}</span>
                  </td>
                  <td className="fecha">{nota.fecha}</td>
                  <td className="observaciones">{nota.observaciones}</td>
                  <td>
                    <div className="acciones">
                      <button className="btn-editar" title="Editar">
                        <span>✏️</span>
                      </button>
                      <button
                        onClick={() => eliminarNota(nota.id)}
                        className="btn-eliminar"
                        title="Eliminar"
                      >
                        <span>🗑️</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="tabla-footer">
          <div className="resumen">
            <span>Total de registros: </span>
          </div>
          <button className="btn-agregar">+ Agregar Nueva Nota</button>
        </div>
      </div>
    </div>
  );
};

export default Notas;
