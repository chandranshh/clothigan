import Navbar from "../../components/Navbar/Navbar";
import Body from "../../components/body/Body";

function Frontpage() {
  return (
    <div className="bg-gray-200 h-screen w-screen font-sans">
      <div>
        <Navbar />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default Frontpage;
