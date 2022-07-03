import "./App.css";

function App() {
  const Tombol = (props) => {
    return (
      <button style={{ margin:'10px',background:'pink' }}
        onClick={() => alert(`Anda telah mengklik tombol (${props.nama})!`)}
      >
        {props.nama}
      </button>
    );
  };
  return (
    <div className="App" style={{ marginTop: "100px",display:'flex',justifyContent:'center' }}>
      <div>
        <Tombol nama="Jamil" />
        <Tombol nama="Hamdi" />
      </div>
      <div>
        <Tombol nama="Parkhan" />
        <Tombol nama="Abror" />
      </div>
    </div>
  );
}

export default App;
