import { useState } from "react";
import { useActions } from "../hooks/useActions";
import ReposList, { ListType } from "./ReposList";
import { useTypedSelector } from "../hooks/useTypedSelector";


const ReposSearch: React.FC = () => {
  const [term, setTerm] = useState('');

  const { searchRepos, saveRepos } = useActions();
  const {data, error, loading} = useTypedSelector((state) => state.repos);
  const { saved } = useTypedSelector((state) => state.saved);


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepos(term);
  };

  const onSave = () => {
    saveRepos(data, saved);
  };

  console.log(data);

  return <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
    {error && <h3>{error}</h3>}
    {loading && <h3>Loading</h3>}
    {!loading && !error && <ReposList data={data} source={ListType.ResultList} />}
    <button onClick={onSave}>Save</button>
  </div>
}

export default ReposSearch;