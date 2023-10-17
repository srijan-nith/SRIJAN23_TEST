import '../../Assets/css/dropdown.css'


const Dropdown = (props) => {

    const dropdownChangeHandler = (event) => {
      props.onFilterChange(event.target.value);
    };
  
    return (
      <>
        <div className="dropdown">
          <select onChange={dropdownChangeHandler} >
            <option value="3">2023</option>
            <option value="2">2022</option>
            <option value="1">2021</option>
            <option value="0">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </>
    );
  };
  
  export default Dropdown;