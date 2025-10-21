import "./Asistencia.css";
import Header from "../components/Header";

const Asistencia = () => {


  return (
    <div className="asistencia-container">
      <Header />
      <div className="asistencia-content">
        <div className="asistencia-header">
          <h2>Control de Asistencia</h2>
          <p>Gestión y seguimiento de asistencia estudiantil</p>
        </div>

        <div className="asistencia-main">
          <div className="asistencia-form-section">
            <div className="asistencia-form-container">
              <h3>Registrar Asistencia</h3>
              <form className="asistencia-form">
                <div className="form-group">
                  <label htmlFor="profesor">Profesor</label>
                  <select
                    id="profesor"
                    className="form-select"
                    required
                  >
                    <option value="">Seleccionar profesor</option>
                    <option value="1">Juan Pérez</option>
                    <option value="2">María González</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="estudiante">Estudiante</label>
                  <select
                    id="estudiante"
                    className="form-select"
                    required
                  >
                    <option value="">Seleccionar estudiante</option>
                    <option value="1">Ana García</option>
                    <option value="2">Luis Martínez</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="materia">Materia</label>
                  <select
                    id="materia"
                    className="form-select"
                    required
                  >
                    <option value="">Seleccionar materia</option>
                    <option value="matematicas">Matemáticas</option>
                    <option value="fisica">Física</option>
                    <option value="programacion">Programación</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="fecha">Fecha</label>
                  <input
                    type="date"
                    id="fecha"
                    className="form-input"
                    required
                    defaultValue="2025-10-20"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="estado">Estado</label>
                  <select id="estado" className="form-select" required>
                    <option value="">Seleccionar estado</option>
                    <option value="presente">Presente</option>
                    <option value="ausente">Ausente</option>
                    <option value="tardanza">Tardanza</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="observaciones">Observaciones</label>
                  <textarea
                    id="observaciones"
                    className="form-textarea"
                    rows="3"
                    placeholder="Ingrese observaciones adicionales..."
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="reset" className="btn-cancelar">
                    Limpiar
                  </button>
                  <button
                    type="button"
                    className="btn-guardar"
                  >
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="asistencia-table-section">
            <div className="tabla-header">
              <div className="resumen">
                <span>Total de registros: 0</span>
              </div>
            </div>
            <div className="tabla-wrapper">
              <table className="tabla-asistencia">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Profesor</th>
                    <th>Estudiante</th>
                    <th>Materia</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                    <th>Observaciones</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Id</td>
                    <td>Profesor Id</td>
                    <td>Estudiante Id</td>
                    <td>Materia</td>
                    <td>
                      <span className={`estado`}>Estado</span>
                    </td>
                    <td>Fecha</td>
                    <td>Observaciones</td>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asistencia;
