import { useDispatch, useSelector } from "react-redux";
import { setFilter, getFilter } from '../../redux/slice';
import css from "../ContactFilter/ContactFilter.module.css"

export const ContactFilter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label className={css.descr}>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find contacts by name"
      />
    </label>)
}
;

