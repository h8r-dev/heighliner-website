import React, { ChangeEvent, useEffect, useState } from "react";
import clsx from "clsx";
import MediaMatrix from "@site/src/components/MediaMatrix";

import styles from "./index.module.scss";
import Title from "../Title";
import { Field, FieldName, FormChangeType, useFormReducer } from "../../../hooks/sendgridForm";

const CloudflareWorker =
  "https://invoke-sendgrid-worker.heighliner.workers.dev/";

export default function (): React.ReactElement {
  const [form, formDispatch] = useFormReducer();
  const [submitting, setSubmitting] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  // Validate the field
  useEffect(() => {
    const isExistError = Object.values(form).some(
      ({val, errMsg }: Field) => !val || errMsg.length > 0
    );
    if (isExistError) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  }, [form]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    formDispatch({
      type: FormChangeType.TextInput,
      field: event.target.name,
      payload: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitting(true);

    // Join into a form data.
    var formData = new FormData();
    for (const fieldName of Object.values(FieldName)) {
      formData.append(fieldName, form[fieldName].val);
    }

    // Send the email
    const res = await fetch(CloudflareWorker, {
      body: formData,
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.error(error);
      alert(error);
    } else {
      alert("Email Has Successfully Sent!");
    }

    setSubmitting(false);
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Stay in touch</h1>

        <label htmlFor={FieldName.fullname}>Full name</label>
        <input
          type="text"
          value={form[FieldName.fullname].val}
          onChange={handleChange}
          name={FieldName.fullname}
          placeholder="Please enter your full name."
        />
        <p className={styles.errorMsg}>{form[FieldName.fullname].errMsg}</p>

        <label htmlFor={FieldName.email}>Email</label>
        <input
          type="email"
          name={FieldName.email}
          value={form[FieldName.email].val}
          onChange={handleChange}
          placeholder="Please enter your email. (For instance, example@gmail.com) "
        />
        <p className={styles.errorMsg}>{form[FieldName.email].errMsg}</p>

        <label htmlFor={FieldName.organization}>
          Organization (company or school)
        </label>
        <input
          type="text"
          value={form[FieldName.organization].val}
          onChange={handleChange}
          name={FieldName.organization}
          placeholder="Please enter your compony or school. (For instance, Heighliner, Inc.)"
        />
        <p className={styles.errorMsg}>{form[FieldName.organization].errMsg}</p>

        <label htmlFor={FieldName.role}>Your role</label>
        <input
          type="text"
          value={form[FieldName.role].val}
          onChange={handleChange}
          name={FieldName.role}
          placeholder="Please enter your role. (For instance, Go developer)"
        />
        <p className={styles.errorMsg}>{form[FieldName.role].errMsg}</p>

        <label htmlFor={FieldName.message}>Message</label>
        <textarea
          rows={4}
          name={FieldName.message}
          value={form[FieldName.message].val}
          onChange={handleChange}
          placeholder="Please enter your message."
        ></textarea>
        <p className={styles.errorMsg}>{form[FieldName.message].errMsg}</p>

        <button
          type="submit"
          className={clsx(styles.send, submitting && styles.sending)}
          disabled={submitting || !canSubmit}
        >
          {submitting ? "Sending" : "Send"}
        </button>
      </form>
      <div className={styles.contactUs}>
        <Title />
        <MediaMatrix />
      </div>
    </div>
  );
}
