import React, { useState } from "react";

import MediaMatrix from "@site/src/components/MediaMatrix";

import styles from "./index.module.scss";
import Title from "../Title";

interface Field {
  val?: string;
  errorMsg?: string;
}

function getResetField(): Field {
  return {
    val: "",
    errorMsg: "",
  };
}

interface Fields {
  fullname: Field;
  organization: Field;
  role: Field;
  email: Field;
  message: Field;
}

const CloudflareWorker = "https://invoke-sendgrid-worker.heighliner.workers.dev/";

export default function (): React.ReactElement {
  const [fullname, setFullname] = useState<Field>({ val: "" });
  const [organization, setOrganization] = useState<Field>({ val: "" });
  const [role, setRole] = useState<Field>({ val: "" });
  const [email, setEmail] = useState<Field>({ val: "" });
  const [message, setMessage] = useState<Field>({ val: "" });

  const [submitting, setSubmitting] = useState<boolean>(false);

  async function handleSubmit(event) {
    event.preventDefault();

    // Validate the field
    const checkedFields = fieldValidator({
      fullname,
      organization,
      role,
      email,
      message,
    });
    setFullname(checkedFields.fullname);
    setOrganization(checkedFields.organization);
    setRole(checkedFields.role);
    setEmail(checkedFields.email);
    setMessage(checkedFields.message);

    const isExistError = Object.values(checkedFields).some(
      ({ errorMsg }) => errorMsg.length > 0
    );
    if (isExistError) return;

    setSubmitting(true);

    var formdata = new FormData();
    formdata.append("fullname", fullname.val);
    formdata.append("email", email.val);
    formdata.append("message", message.val);
    formdata.append("organization", organization.val);
    formdata.append("role", role.val);

    const res = await fetch(CloudflareWorker, {
      body: formdata,
      method: "POST",
    })
      .then(() => {
        alert("Email Has Successfully Sent!");
        // setFullname(getResetField());
        // setEmail(getResetField());
        // setMessage(getResetField());
        // setOrganization(getResetField());
        // setRole(getResetField());
      })
      .catch((error) => {
        console.error(error);
        alert("Network Error.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Stay in touch</h1>

        <label htmlFor="fullname">
          Full name
          {/* <span>*</span> */}
        </label>
        <input
          type="text"
          value={fullname.val}
          onChange={(e) => {
            setFullname({ ...fullname, val: e.target.value });
          }}
          name="fullname"
          placeholder="Please enter your full name."
        />
        <p className={styles.errorMsg}>{fullname.errorMsg}</p>

        <label htmlFor="email">
          Email
          {/* <span>*</span> */}
        </label>
        <input
          type="email"
          name="email"
          value={email.val}
          onChange={(e) => {
            setEmail({ ...email, val: e.target.value });
          }}
          placeholder="Please enter your email. (For instance, example@gmail.com) "
        />
        <p className={styles.errorMsg}>{email.errorMsg}</p>

        <label htmlFor="organization">
          Organization (company or school)
          {/* <span>*</span> */}
        </label>
        <input
          type="text"
          value={organization.val}
          onChange={(e) => {
            setOrganization({ ...organization, val: e.target.value });
          }}
          name="organization"
          placeholder="Please enter your compony or school. (For instance, Heighliner, Inc.)"
        />
        <p className={styles.errorMsg}>{organization.errorMsg}</p>

        <label htmlFor="role">
          Your role
          {/* <span>*</span> */}
        </label>
        <input
          type="text"
          value={role.val}
          onChange={(e) => {
            setRole({ ...role, val: e.target.value });
          }}
          name="role"
          placeholder="Please enter your role. (For instance, Go developer)"
        />
        <p className={styles.errorMsg}>{role.errorMsg}</p>

        <label htmlFor="message">
          Message
          {/* <span>*</span> */}
        </label>
        <textarea
          rows={4}
          name="message"
          value={message.val}
          onChange={(e) => {
            setMessage({ ...message, val: e.target.value });
          }}
          placeholder="Please enter your message."
        ></textarea>
        <p className={styles.errorMsg}>{message.errorMsg}</p>

        <button type="submit" className={styles.send} disabled={submitting}>
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

function fieldValidator({
  fullname,
  organization,
  role,
  email,
  message,
}: Fields): Fields {
  // Reset the errorMsg to empty in each field
  const checkedFields: Fields = {
    fullname: { ...fullname, errorMsg: "" },
    organization: { ...organization, errorMsg: "" },
    role: { ...role, errorMsg: "" },
    email: { ...email, errorMsg: "" },
    message: { ...message, errorMsg: "" },
  };

  if (fullname.val.length <= 0) {
    checkedFields.fullname.errorMsg = "Your full name can't be empty.";
  }

  if (organization.val.length <= 0) {
    checkedFields.organization.errorMsg = "Your organization can't be empty.";
  }

  if (role.val.length <= 0) {
    checkedFields.role.errorMsg = "Your role can't be empty.";
  }

  if (message.val.length <= 0) {
    checkedFields.message.errorMsg = "The message can't be empty.";
  }

  const emailRule =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.val.length <= 0) {
    checkedFields.email.errorMsg = "Your email can't be empty.";
  } else if (!email.val.toLowerCase().match(emailRule)) {
    checkedFields.email.errorMsg = "The email you input is invalid.";
  }

  return checkedFields;
}
