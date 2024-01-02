import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { QuestionsCloud } from "../components/QuestionsCloud";
import Theme from "../components/Theme";
import styles from "./SurveyCloud.module.css";

export default function SurveyCloud() {
  const survey = new Model(QuestionsCloud);
  survey.applyTheme(Theme);

  return (
    <div className={styles.container}>
      <Survey model={survey} />
    </div>
  );
}
