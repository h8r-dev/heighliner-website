import React, { useState } from "react";

import MediaMatrix from "@site/src/components/MediaMatrix";

import styles from "./index.module.scss";
import Title from "../Title";

interface Field {
  val?: string;
  isError?: boolean;
  errorMsg?: string;
}

function getResetField(): Field {
  return {
    val: "",
    isError: false,
    errorMsg: "",
  };
}

interface Fields {
  fullname: Field;
  email: Field;
  subject: Field;
  message: Field;
}

const LafyunFunction = "https://fsvikn.lafyun.com/SendGrid";

export default function (): React.ReactElement {
  const [fullname, setFullname] = useState<Field>({ val: "" });
  const [email, setEmail] = useState<Field>({ val: "" });
  const [subject, setSubject] = useState<Field>({ val: "" });
  const [message, setMessage] = useState<Field>({ val: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    // Validate the field
    const fields = fieldValidator({ fullname, email, subject, message });
    setFullname(fields.fullname);
    setEmail(fields.email);
    setSubject(fields.subject);

    let existError = false;
    Object.values(fields).map(({ isError }) => {
      if (isError) {
        existError = true;
        return;
      }
    });
    if (existError) return;

    var formdata = new FormData();
    formdata.append("fullname", fullname.val);
    formdata.append("email", email.val);
    formdata.append("subject", subject.val);
    formdata.append("message", message.val);

    const res = await fetch(LafyunFunction, {
      body: formdata,
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      alert(error);
    } else {
      alert("Email has successfully sent!");
      setFullname(getResetField());
      setEmail(getResetField());
      setSubject(getResetField());
      setMessage(getResetField());
    }
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Stay in touch</h1>

        <label htmlFor="fullname">
          Full name<span>*</span>
        </label>
        <input
          type="text"
          value={fullname.val}
          onChange={(e) => {
            setFullname(Object.assign({}, fullname, { val: e.target.value }));
          }}
          name="fullname"
          placeholder="Please enter your full name."
        />
        <p className={styles.errorMsg}>{fullname.errorMsg}</p>

        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={email.val}
          onChange={(e) => {
            setEmail(Object.assign({}, email, { val: e.target.value }));
          }}
          placeholder="Please enter your email."
        />
        <p className={styles.errorMsg}>{email.errorMsg}</p>

        <label htmlFor="subject">
          Subject<span>*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={subject.val}
          onChange={(e) => {
            setSubject(Object.assign({}, subject, { val: e.target.value }));
          }}
          placeholder="Please enter your subject."
        />
        <p className={styles.errorMsg}>{subject.errorMsg}</p>

        <label htmlFor="message">Message</label>
        <textarea
          rows={4}
          name="message"
          value={message.val}
          onChange={(e) => {
            setMessage(Object.assign({}, message, { val: e.target.value }));
          }}
          placeholder="Please enter your message."
        ></textarea>

        <button type="submit" className={styles.send}>
          send
        </button>
      </form>
      <div className={styles.contactUs}>
        <Title />
        <MediaMatrix />
      </div>
    </div>
  );
}

function fieldValidator({ fullname, email, subject, message }: Fields): Fields {
  const initialField: Field = {
    isError: false,
    errorMsg: "",
  };
  const fields: Fields = {
    fullname: Object.assign({}, fullname, initialField),
    email: Object.assign({}, email, initialField),
    subject: Object.assign({}, subject, initialField),
    message: Object.assign({}, message, initialField),
  };

  if (fullname.val.length <= 0) {
    fields.fullname.isError = true;
    fields.fullname.errorMsg = "You full name can't be empty.";
  }

  const emailRule =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.val.length <= 0) {
    fields.email.isError = true;
    fields.email.errorMsg = "You email can't be empty.";
  } else if (!email.val.toLowerCase().match(emailRule)) {
    fields.email.isError = true;
    fields.email.errorMsg = "You enter email did't meet the require.";
  }

  if (subject.val.length <= 0) {
    fields.subject.isError = true;
    fields.subject.errorMsg = "You subject can't be empty.";
  }

  return fields;
}
