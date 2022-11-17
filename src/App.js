import logo from "./logo.svg";
import "./App.css";
function Titulo() {
  return <h3>Primer aplicativo React</h3>;
}
function Cabecera() {
  return <header>
    <Titulo></Titulo>
  </header>;
}
function Cuerpo() {
  return <div>Hola Mundo</div>;
}
function Pie() {
  return <footer>Informacion / Direccion / telefono</footer>;
}
function App() {
  return (
    <div>
      <Cabecera />
      <Cuerpo />
      <Cuerpo />
      <Cuerpo />
      <Pie />
    </div>
  );
}

export default App;
