import "./Notas.css";
import Header from "../components/Header";

const Notas = () => {
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
              <tr>
                <td className="id-cell">Nota Id</td>
                <td className="profesor-id">Profesor Id</td>
                <td className="estudiante-id">Estdudiante Id</td>
                <td className="materia-name">Materia</td>
                <td>
                  <span className="tipo-evaluacion">Tipo evaluacion</span>
                </td>
                <td>
                  <span className="valor-nota">Valor Nota</span>
                </td>
                <td className="fecha">Fecha nota</td>
                <td className="observaciones">Observaciones</td>
                <td>
                  <div className="acciones">
                    <button className="btn-editar" title="Editar">
                      <span>✏️</span>
                    </button>
                    <button className="btn-eliminar" title="Eliminar">
                      <span>🗑️</span>
                    </button>
                  </div>
                </td>
              </tr>
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
