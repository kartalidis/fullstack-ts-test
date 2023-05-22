import { Provider } from 'react-redux';
import { store } from '../state';
import ReposSearch from './ReposSearch';
import SavedRepos from './SavedRepos';

function App() {

  return (
    <Provider store={store}>
      <div>
        <h1>Search packages</h1>
        <ReposSearch />
        <h1>Saved packages</h1>
        <SavedRepos />
      </div>
    </Provider>
  );
}

export default App;
