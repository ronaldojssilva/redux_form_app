import InitForm from "../components/InitForm";

//Container
function App() {
  return (
    <div className="col">
        <p>
          <div className="card">
            <div className="card-header"> 
              Card Header
            </div>
            <div className="card-body">
               <div className="card-title">My First Redux Form</div>
                <InitForm/>
            </div>
            <div className="card-footer">
              <p>Card Footer</p>
            </div>
          </div>
        </p>
    </div>
  );
}

export default App;
