import PropTypes from "prop-types";
import parse from "html-react-parser";

const ThreadBody = ({ htmlContent, maxLength }) => {
  const truncateText =
    htmlContent.length > maxLength
      ? `${htmlContent.slice(0, maxLength)}...`
      : htmlContent;

  return <div className="overflow-hidden">{parse(truncateText)}</div>;
};

ThreadBody.propTypes = {
  htmlContent: PropTypes.string,
  maxLength: PropTypes.number,
};

export default ThreadBody;
