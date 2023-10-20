import "./style/main.css";
import Api from "./Api";

function Home() {
  return (
    <div>
      <h2>Home Component</h2>
      <Api /> {/* Render the Api component to fetch and display data here */}
    </div>
  );
}
export default Home;
