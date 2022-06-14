/**
 * SendGrid form business logic
 */
import { simplifyDeepClone } from "@site/src/utils/Clone";
import { Reducer, useReducer } from "react";

export interface Field {
  val: string;
  errMsg?: string;
}

export enum FieldName {
  fullname = `fullname`,
  email = `email`,
  organization = `organization`,
  role = `role`,
  message = `message`,
}

export interface Form {
  [FieldName.fullname]: Field;
  [FieldName.email]: Field;
  [FieldName.organization]: Field;
  [FieldName.role]: Field;
  [FieldName.message]: Field;
}

export function getInitialForm() {
  const initialForm: Form = {
    [FieldName.fullname]: { val: "", errMsg: "" },
    [FieldName.email]: { val: "", errMsg: "" },
    [FieldName.organization]: { val: "", errMsg: "" },
    [FieldName.role]: { val: "", errMsg: "" },
    [FieldName.message]: { val: "", errMsg: "" },
  };
  return initialForm;
}

export enum FormChangeType {
  TextInput = `TextInput`,
  CheckAll = `CheckAll`,
}

export interface FormAction {
  type: FormChangeType;
  field?: string;
  payload?: string;
}

export function useFormReducer() {
  const initialForm = getInitialForm();

  const reducer: Reducer<Form, FormAction> = (preForm, action) => {
    const nextForm = simplifyDeepClone(preForm);
    switch (action.type) {
      case FormChangeType.TextInput:
        nextForm[action.field].val = action.payload;
        nextForm[action.field].errMsg = validator(action.field, action.payload);
        break;
      case FormChangeType.CheckAll:
        for (const [fieldName, { val }] of Object.entries(nextForm)) {
          nextForm[fieldName].errMsg = validator(fieldName, val);
        }
        break;
    }

    return nextForm;
  };

  return useReducer(reducer, initialForm);
}

function validator(fieldName: string, fieldVal: string): string {
  if (fieldName === FieldName.email) {
    const emailRule =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!fieldVal.toLowerCase().match(emailRule)) {
      return `The email you input is invalid.`;
    }
  }

  if (fieldVal.length <= 0) {
    return `Your ${fieldName} can't be empty.`;
  }

  return ``;
}
