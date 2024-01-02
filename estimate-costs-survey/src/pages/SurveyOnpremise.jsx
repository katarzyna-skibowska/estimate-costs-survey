import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { QuestionsOnpremise } from "../components/QuestionsOnpremise";
import Theme from "../components/Theme";
import styles from "./SurveyCloud.module.css";

export default function SurveyOnpremise() {
  const survey = new Model(QuestionsOnpremise);
  survey.applyTheme(Theme);

  return (
    <div className={styles.container}>
      <Survey model={survey} />
    </div>
  );
}
