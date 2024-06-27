import Main from "./components/Main";
import Forms from "./components/Forms";

function App() {
  return (
    <>
    <div className="flex flex-col lg:flex-row">
  <div className="w-full lg:w-3/5">
    <Main />
  </div>
  <div className="w-full lg:w-2/5 mt-4 lg:mt-0">
     <Forms/>
  </div>
</div>

    </>
  );
}

export default App;
