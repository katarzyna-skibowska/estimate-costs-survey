import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { QuestionsCloud } from "../components/QuestionsCloud";
import Theme from "../components/Theme";
import styles from "./SurveyCloud.module.css";
import { set, push, ref as sRef } from "firebase/database";
import { database } from "../api/firebase";
import { useCallback } from "react";

export default function SurveyCloud() {
  const survey = new Model(QuestionsCloud);
  const alertResults = useCallback((sender) => {
    const results = sender.data;
    saveSurveyResults(results);
  }, []);

  survey.applyTheme(Theme);
  survey.onComplete.add((sender) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  survey.onComplete.add(alertResults);

  function saveSurveyResults(results) {
    const surveyRef = sRef(database, "surveyResults");
    const newSurveyRef = push(surveyRef); // Generate a new child location using a unique key

    const {
      ifHaveTelephony,
      whichTelephony,
      numberPhones,
      whichDevices,
      numberDeskphone,
      numberDect,
      numberSoftphone,
      numberVantage,
      whichFunctionalities,
      firstName,
      lastName,
      email,
      phone,
      total,
      systemPrice,
      phonesPrice,
    } = results;
    const createdOn = new Date().toISOString();

    const data = {
      created_on: createdOn,
      firstName,
      lastName,
      email,
      phone,
    };

    if (ifHaveTelephony) {
      data.ifHaveTelephony = ifHaveTelephony;
    }

    if (whichTelephony) {
      data.whichTelephony = whichTelephony;
    }

    if (numberPhones) {
      data.numberPhones = numberPhones;
    }
    if (whichDevices) {
      data.whichDevices = whichDevices;
    }
    if (numberDeskphone) {
      data.numberDeskphone = numberDeskphone;
    }
    if (numberDect) {
      data.numberDect = numberDect;
    }
    if (numberSoftphone) {
      data.numberSoftphone = numberSoftphone;
    }
    if (numberVantage) {
      data.numberVantage = numberVantage;
    }
    if (whichFunctionalities) {
      data.whichFunctionalities = whichFunctionalities;
    }
    if (total) {
      data.total = total;
    }
    if (systemPrice) {
      data.systemPrice = systemPrice;
    }
    if (phonesPrice) {
      data.phonesPrice = phonesPrice;
    }

    set(newSurveyRef, data);
  }

  return (
    <div className={styles.container}>
      <Survey model={survey} />
    </div>
  );
}
