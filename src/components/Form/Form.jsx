import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ handleSearch, input, setInput }) => {
 
  return (
    <form className='search_form' >
      <label htmlFor='searchInput'>Clima en:</label><br/>
      <input className='search_input' id="searchInput" type="text" name="searchInput" value={input} placeholder="search the waether in..." onChange={(e) => setInput(e.target.value)}/>
      <input className='search_btn' type="submit" name="searchBtn" value="Search" onClick={handleSearch}/>
    </form>
  )
};

Form.propTypes  = {
  handleSearch: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func,
}

export default Form;