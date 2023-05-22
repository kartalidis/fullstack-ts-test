import { useActions } from '../hooks/useActions';
import { RepoItem } from '../state/reducers/reposReducers';
import { ListType } from './ReposList';

interface Props {
  repo: RepoItem,
  data: RepoItem[]
  source: ListType
}

const ReposListItem: React.FC<Props> = ({ repo, data, source }) => {
  const { toggleResultSelection, toggleSavedSelection } = useActions();

  const handleChange = () => {
    if (source === ListType.ResultList) {
      toggleResultSelection(repo.data.name, data)
    } else {
      toggleSavedSelection(repo.data.name, data)
    }
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={repo.selected}
        onChange={handleChange}
      />{' '}
      {repo.data.name}
    </label>
  );
};

export default ReposListItem;
