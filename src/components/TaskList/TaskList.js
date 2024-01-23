import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';
import { statusFilters } from '../../redux/constants';
import { useSelector } from 'react-redux';
import { getStatusFilter } from '../../redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const statusFilter = useSelector(getStatusFilter);
  const visebleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visebleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
