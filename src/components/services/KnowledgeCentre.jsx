import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

export default function KnowledgeCentre() {
  // En este componente, cada vez que se llena un formulario se debe reenviar esa información al correo de los encargados y al usuario que hizo la solicitud con el fin de que haya constancia.
  return (
    <div className="kc">
      <h3 style={{ textAlign: "center" }}>Knowledge Centre</h3>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">ChromeBooks</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">iPads</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Salones y eventos</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane className="service-requests" eventKey="first">
                <h3>ChromeBooks</h3>
                <form action="">
                  <label htmlFor="">Nombre del estudiante</label>
                  <input type="text" />
                  <label htmlFor="">Curso</label>
                  <input type="text" placeholder="6A, 6C, etc." />
                  <div>
                    <input type="submit" value="Solicitar" />
                  </div>
                </form>
              </Tab.Pane>
              <Tab.Pane className="service-requests" eventKey="second">
                <h3>iPads</h3>
                <form action="">
                  <label htmlFor="">Nombre del estudiante</label>
                  <input type="text" />
                  <label htmlFor="">Curso</label>
                  <input type="text" placeholder="6A, 6C, etc." />
                  <div>
                    <input type="submit" value="Solicitar" />
                  </div>
                </form>
              </Tab.Pane>
              <Tab.Pane className="service-requests" eventKey="third">
                <h3>Salones y eventos</h3>
                <form action="">
                  <label htmlFor="">Nombre del evento</label>
                  <input type="text" />
                  <label htmlFor="">
                    Salón solicitado (Revisar disponibilidad primero)
                  </label>
                  <select name="" id="">
                    <option value="">
                      Sala de Lectura Primaria - 30 sillas - 10 mesas
                    </option>
                    <option value="">
                      Sala de Lectura Secundaria - 60 sillas - 30 mesas -
                      Proyector Sonido
                    </option>
                    <option value="">
                      MMR1 - 25 sillas - Smart TV - Sonido
                    </option>
                    <option value="">
                      MMR2 - 25 sillas - Proyector - Sonido
                    </option>
                    <option value="">
                      MMR1 & MMR2 - 50 sillas - Smart TV - Sonido
                    </option>
                    <option value="">
                      Film Room - 4 sillas - 1 mesa - Smart TV - Sonido
                    </option>
                    <option value="">
                      Computer Room - 25 iMacs - Smart TV - Sonido
                    </option>
                    <option value="">
                      Auditorio - 500 sillas - 2 Proyectores - Sonido
                    </option>
                  </select>
                  <label htmlFor="">
                    Apoyo de Sistemas (Sonido, proyección expositor)
                  </label>
                  <select name="" id="">
                    <option value="">No</option>
                    <option value="">Sí</option>
                  </select>
                  <label htmlFor="">
                    Apoyo de Admin. (Café, agua, distribución sillas, etc.)
                  </label>
                  <select name="" id="">
                    <option value="">No</option>
                    <option value="">Sí</option>
                  </select>
                  <label htmlFor="">Otras especificaciones y detalles</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    placeholder="Indique si necesita estación de café, organización de sillas, etc."
                  ></textarea>
                  <div>
                    <input type="submit" value="Solicitar" />
                  </div>
                </form>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
