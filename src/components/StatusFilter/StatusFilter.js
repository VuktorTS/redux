import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selectors';

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  return (
    <div className={css.wrapper}>
      <Button selected={statusFilters.all === filter}>All</Button>
      <Button selected={statusFilters.active === filter}>Active</Button>
      <Button selected={statusFilters.completed === filter}>Completed</Button>
    </div>
  );
};
