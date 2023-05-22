import { RepoItem } from "../state/reducers/reposReducers";
import ReposListItem from "./ReposListItem";

interface Props {
  data: RepoItem[],
  source: ListType
}

export enum ListType {
  ResultList = 'result',
  SavedList = 'saved',
}

const ReposList: React.FC<Props> = ({ data, source }) => {
  return <div>
    { data.map((pckg) => <ul>
      <ReposListItem repo={pckg} data={data} source={source}/>
    </ul>)}
  </div>
}

export default ReposList;