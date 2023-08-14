import { Link } from "react-router-dom";
import PropTypes from "prop-types" 

const TextLink = ({className,body,to}) => {
    
  return (
    <Link className={className} to={to}>{body}</Link>
  )
}

TextLink.propTypes = {
    className:PropTypes.string.isRequired,
    body:PropTypes.string.isRequired,
    to:PropTypes.string.isRequired
};
export default TextLink
