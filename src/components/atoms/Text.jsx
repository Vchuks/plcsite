import PropTypes from "prop-types" 

const Text = ({className, body}) => {
  return (
    <p className={className}>{body}</p>
  )
}
Text.propTypes = {
    body: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}
export default Text
