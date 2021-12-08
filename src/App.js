function App() {
  return (
    <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => { console.log("I'm click") }} />
    </div>
  );
}

export default App;