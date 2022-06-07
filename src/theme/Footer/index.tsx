/**
 * Replace native footer.
 */
import React from 'react';

import { Footer as HomePageFooter } from "@site/src/components/homepage/Footer";

function Footer() {
  return (
    <HomePageFooter />
  );
}

export default React.memo(Footer);
