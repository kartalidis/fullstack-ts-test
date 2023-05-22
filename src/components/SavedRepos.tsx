import ReposList, { ListType } from "./ReposList";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const SavedRepos: React.FC = () => {
  const { deleteRepos } = useActions();
  const { saved } = useTypedSelector((state) => state.saved);

  const onDelete = () => {
    deleteRepos(saved);
  };

  return <div>
    <ReposList data={saved} source={ListType.SavedList} />
    <button onClick={onDelete}>Delete</button>
  </div>
}

export default SavedRepos;