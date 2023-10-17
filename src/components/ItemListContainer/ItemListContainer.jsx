import PropTypes from 'prop-types';


const ItemListContainer = ({greeting}) => {
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>Lista Catálogo</h1>
        <p>{greeting}</p>
      </div>
    );
  };
  ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired, // Cambia 'string' al tipo de dato adecuado
  };
  const containerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '5px',
    with:"250px", withh:"250px",
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };


export default  ItemListContainer