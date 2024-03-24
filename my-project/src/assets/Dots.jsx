import PropTypes from "prop-types";

function DotsSvg(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        className={props.color}
        viewBox="0 0 16 16"
      >
        {" "}
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />{" "}
      </svg>
    </>
  );
}

DotsSvg.propTypes = {
  color: PropTypes.string.isRequired,
};

export default DotsSvg;
