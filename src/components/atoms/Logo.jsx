import PropTypes from "prop-types" 

const Logo = ({src, alt, className, ...rest}) => {
  return (
    <img src={src} alt={alt} className={className} {...rest}/>
  )
}

Logo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}
export default Logo
