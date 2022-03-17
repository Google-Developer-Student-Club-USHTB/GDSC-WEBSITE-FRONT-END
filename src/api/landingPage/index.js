/**
 * In this file we are defining the services of the landing page of our websites
 * the services are functions that will in the future commnicate with the backend of the app
 * but now we are using a local db a file that contains our data
 */
import * as data from "../../data/index";

/* This function will return the data of about gdsc section */
export const getDataAboutGdsc = () => {
  return data.aboutGdSc;
};

/* This function will return the data of about gdsc usthb section */
export const getDataAboutGdscUsthb = () => {
  return data.aboutGdscUsthb;
};

/* This function will return the data of fields of work section */
export const getDataFieldsOfWork = () => {
  return data.fieldsOfWork;
};

/*This function will return the data of the events section */
export const getDataEvents = () => {
  return data.events;
};

/* This function will return the data of member of the month section */
export const getDataMembers = () => {
  return data.membersOfTheMonth;
};

/* This function will return the data of our projects section */
export const getDataProjects = () => {
  return data.projects;
};

/* This function will return the data of the QandA section */
export const getDataQuestions = () => {
  return data.questions;
};
