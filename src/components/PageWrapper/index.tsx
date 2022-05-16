import React from "react";

import {Footer} from "../homepage/Footer";
import HeighlinerHeader from "../Header/HeighlinerHeader";
import HeighlinerHeaderBg from "../Header/HeighlinerHeaderBg";
import HeighlinerHeaderTitle from "../Header/HeighlinerHeaderTitle";

import styles from "./index.module.css";

let tableMaskStyle = {
  "background": `linear-gradient(90deg, rgba(234, 227, 236, 0.3) 1px, transparent 0),
                 linear-gradient(rgba(234, 227, 236, 0.3) 1px, transparent 0)`,
  "backgroundSize": `30px 30px`,
  "backgroundColor": `#fff`,
}

interface Props {
  children?: React.ReactElement | React.ReactElement[],
  title?: string,
  tableMask?: boolean
}

export default function PageWrapper({children, title, tableMask}: Props): JSX.Element {
  return (
    <div className={styles.pageWrapper} style={tableMask && tableMaskStyle}>
      <HeighlinerHeaderBg>
        <HeighlinerHeader/>
        {
          title && <HeighlinerHeaderTitle title={title}/>
        }
      </HeighlinerHeaderBg>
      {children}
      <Footer/>
    </div>
  );
}
