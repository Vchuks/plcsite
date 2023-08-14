import PropTypes from "prop-types" 

const Logo = ({src, alt, className}) => {
  return (
    <img src={src} alt={alt} className={className}/>
  )
}

Logo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}
export default Logo
