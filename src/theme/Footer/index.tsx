/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

import { Footer as HomePageFooter } from "@site/src/components/homepage/Footer";

function Footer() {
  return (
    <HomePageFooter />
  );
}

export default React.memo(Footer);
