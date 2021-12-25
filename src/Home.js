import "./App.css";
function Home() {
  function clc() {
    window.alert("oops server down...........");
  }
  return (
    <div className="heading">
      <h1>Welcome to Photo Gallery</h1>
      <h4>Here you will find a Awesome Photos</h4>
      <button onClick={clc}>Portfolio</button>
    </div>
  );
}
export default Home;
