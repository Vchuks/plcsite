import PropTypes from "prop-types" 

const Text = ({className, body, ...rest}) => {
  return (
    <p className={className} {...rest}>{body}</p>
  )
}
Text.propTypes = {
    body: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}
export default Text
