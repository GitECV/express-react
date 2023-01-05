
function App() {
  fetch('/api/3')
  .then((response) => response.json())
  .then((data) => console.log(data));
  return (
    <div className="App">
      <h1>Holaaaaa</h1>
    </div>
  );
}

export default App;
