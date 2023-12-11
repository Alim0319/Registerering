// SurveyComponent.jsx
import PropTypes from "prop-types";
import { Survey } from "react-survey";

const SurveyComponent = ({ surveyJson, onComplete }) => {
  // console.log("Rendering SurveyComponent");
  return <Survey json={surveyJson} onComplete={onComplete} />;
};
SurveyComponent.propTypes = {
  surveyJson: PropTypes.object.isRequired, // Adjust the type accordingly
  onComplete: PropTypes.func.isRequired,
};
export default SurveyComponent;
