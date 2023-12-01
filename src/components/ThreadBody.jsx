import PropTypes from "prop-types";

const ThreadBody = ({ htmlContent, maxLength }) => {
  const text = htmlContent.replace(/<[^>]*>/g, "");
  const truncateText =
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <div
      className="overflow-hidden"
      dangerouslySetInnerHTML={{ __html: truncateText }}
    />
  );
};

ThreadBody.propTypes = {
  htmlContent: PropTypes.string,
  maxLength: PropTypes.number,
};

export default ThreadBody;
