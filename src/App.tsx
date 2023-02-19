import { FilterContext } from './Contexts';
import MainPage from './Layouts/MainPage';

const App = () => {
  return (
    <div className="App flex justify-center items-center bg-pink-100">
      <FilterContext>
        <MainPage />
      </FilterContext>
    </div>
  );
};

export default App;
