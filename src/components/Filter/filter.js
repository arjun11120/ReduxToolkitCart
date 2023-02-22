import React from 'react'
import { useDispatch } from 'react-redux'
import { productFilter } from '../../redux/features/selectSlice';

function Filter() {
  const dispatch = useDispatch();
  const setFilter = ((event) => {
    dispatch(productFilter(event))
  });
  return (
      <div className="select_filter m-4">
        {/* <select value={cat} onChange={filteringName}> */}
        <select defaultValue={""} onChange={(event) => setFilter(event.target.value)}>
          <option value="" selected>All</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>
  )
}

export default Filter
