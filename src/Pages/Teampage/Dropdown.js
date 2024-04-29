import '../../Assets/css/dropdown.css'


const Dropdown = (props) => {

    const dropdownChangeHandler = (event) => {
      props.onFilterChange(event.target.value);
    };
  
    return (
      <>
        <div className="dropdown">
          <select className="dropSelect" onChange={dropdownChangeHandler} >
            <option value="0">Heads</option>
            <option value="1">Managing Members</option>
            <option value="2">Executive Members</option>
            <option value="3">Associate Members</option>
            <option value="4">Volunteers</option>
          </select>
        </div>
      </>
    );
  };
  
  export default Dropdown;  