import terreno from './images/terreno.png';

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Propiedades en Valle de Guadalupe</h1>

      <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px" }}>
        <h2>Terreno en venta - El Alamo</h2>
        <p>Terreno de 1,000 m² con vista al valle.</p>
        <p><strong>Precio:</strong> $75,000 USD</p>
        <img src={terreno} alt="Terreno" style={{ width: "50%", height: "auto" }} />

      </div>

      <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px" }}>
        <h2>Casa en venta - Viñedos del Sol</h2>
        <p>Casa de 2 recámaras, 1 baño, cerca de bodegas y restaurantes.</p>
        <p><strong>Precio:</strong> $180,000 USD</p>
        <img src="https://via.placeholder.com/600x300" alt="Casa" style={{ width: "100%", height: "auto" }} />
      </div>
    </div>
  );
}

export default App;
