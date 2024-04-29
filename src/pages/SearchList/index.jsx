import styles from './SearchList.module.scss';
import { useSearchParams } from 'react-router-dom';

export default function SearchList() {

  const [params, setParams] = useSearchParams();

  const search = params.get('q') ?? "";

  return (
    <div className={styles.container}>
      {search}
    </div>
  )
}
