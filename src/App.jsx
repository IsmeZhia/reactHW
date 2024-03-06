import FlowbiteFooter from "./components/FlowbiteFooter";
import MenuCard from "./components/MenuCard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div>
      <h1 className="text-center text-5xl my-8 text-sky-400">Cake List</h1>
      <div className="flex justify-center"> 
        <div className="grid grid-cols-4 gap-6">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          
        </div>
      </div>
      </div>
      

      <FlowbiteFooter />
    </>
  );
}

export default App;
