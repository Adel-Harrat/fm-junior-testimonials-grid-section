import "./App.css";
import Card from "./components/Card";

import { data } from "./data";

function App() {
  return (
    <div className="min-h-screen bg-tw-light-grayish-blue overflow-auto lg:grid lg:place-items-center">
      <main className="mx-6 my-20 lg:my-0 grid grid-cols-1 gap-8 lg:grid-cols-4 lg:max-w-6xl lg:gap-6">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
}

export default App;
