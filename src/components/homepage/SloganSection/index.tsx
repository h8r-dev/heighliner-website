/**
 * Slogan section of homepage
 */

import React, { useState } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import siteConfig from "@generated/docusaurus.config";

import qs from 'qs'

import { Video } from "@site/src/components/Video";

import styles from "./index.module.scss";
import AutoDownCounter from "./AutoDownCounter";
import HeighlinerHeader from "../../Header/HeighlinerHeader";

export function SloganSection(): React.ReactElement {

  function openVsocde() {
    const parameters: any = {
      kubeconfig: `
        apiVersion: v1
        clusters:
        - cluster:
            certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyTlRjMk9ESTJPVGd3SGhjTk1qSXdOekV6TURNeU5EVTRXaGNOTXpJd056RXdNRE15TkRVNApXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyTlRjMk9ESTJPVGd3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFTR05uOFl0cDV3V20rV1dvbjI1UlFLWEh1M0pkTUhpM0E3RjNhQXZKZDgKVXRtR0pReEVKWTZkVXQ1eE5oTi8vWThSakNuMlNIUUs4c2hURzZNOXc0VWJvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVU9pUlVsVEgzYXFvZElObXgydDlwCkhiZHdkZTR3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQU5rUVQxNzFQMEYvYjhCT2trQ2hFN1JrOE93Z3NyZmUKc1J4dXJickhHSXVTQWlCQkh3VXVuYjRVQkFCMDBzSlJDRExDWTMrSkZpbStYVEZZZXlsM01YZzZQQT09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K
            server: https://192.168.0.71:6443
          name: default
        contexts:
        - context:
            cluster: default
            user: default
          name: default
        current-context: default
        kind: Config
        preferences: {}
        users:
        - name: default
          user:
            client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrVENDQVRlZ0F3SUJBZ0lJVkxWTEMvRlRGUE13Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOalUzTmpneU5qazRNQjRYRFRJeU1EY3hNekF6TWpRMU9Gb1hEVEl6TURjeApNekF6TWpRMU9Gb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJDdEFNUWxDai9lMklsbEIKNk8yeGJOdGtSZ3dqcHVxZzhITmVzYWtuYkhIbXo5NEM5dmU3b1FnUXZHYTI2K3pxU05lb0kySzlvSWlHL1lOMApBdW9WNHZtalNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCUjhJQmR5NUtnczFDNnA1S2wyb1RVQ0ZpeHBUekFLQmdncWhrak9QUVFEQWdOSUFEQkYKQWlFQXJ0U3RFcTlMNHF1V2xSMzRiRmgvOEZyQzR1UHZaR1hHbDlMTlhtMHBIeG9DSUFmS2FEajB5MENoVEl1TgpwSGFFZkFmQTRQTWJtSU41cTZOZlA4cTg3VTI0Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJlRENDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyTlRjMk9ESTJPVGd3SGhjTk1qSXdOekV6TURNeU5EVTRXaGNOTXpJd056RXdNRE15TkRVNApXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyTlRjMk9ESTJPVGd3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFSb0VFcHkvZk0xT3J2aXUzUFp0Y0V1Z1lRbXltcDZwNWtJd09UK05ZcjQKQ1pVODNzVmFPZ0xUSWo2by9xbnJHb0QyY2oybzRYZkpHcEpNKzJzMkttamZvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVWZDQVhjdVNvTE5RdXFlU3BkcUUxCkFoWXNhVTh3Q2dZSUtvWkl6ajBFQXdJRFNRQXdSZ0loQUlBMnpHZU9uRkFFR0NiQ0ZNNXA1R0tkbTVidFBUa2sKdjluZ0NZaHp2Um1qQWlFQTZjTzBVQ0Z0QWxZMDFBTG0wb1QvbktLem5LcDdEb2oyZm9sM0s3SFpFNm89Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K
            client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUdTL0NGL1ZEZjAweS93elhCUzRoNlpNNUhuVHpCMkh3aDRndlZCVENZbjBvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFSzBBeENVS1A5N1lpV1VIbzdiRnMyMlJHRENPbTZxRHdjMTZ4cVNkc2NlYlAzZ0wyOTd1aApDQkM4WnJicjdPcEkxNmdqWXIyZ2lJYjlnM1FDNmhYaStRPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo=
                    `,
      namespace: 'dev',
      application: 'ide-extension-gin-next-app',
      workload: 'ide-extension-gin-next-app-ide-extension-gin-next-app-backend',
      workload_type: 'Deployment',
      action: 'run'
    }

    const qsString = qs.stringify(parameters)
    window.open(`vscode://forkmain.forkmain?${qsString}`)
  }

  function stopLocalDevelop() {
    const parameters: any = {
      kubeconfig: `
        apiVersion: v1
        clusters:
        - cluster:
            certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyTlRjMk9ESTJPVGd3SGhjTk1qSXdOekV6TURNeU5EVTRXaGNOTXpJd056RXdNRE15TkRVNApXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyTlRjMk9ESTJPVGd3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFTR05uOFl0cDV3V20rV1dvbjI1UlFLWEh1M0pkTUhpM0E3RjNhQXZKZDgKVXRtR0pReEVKWTZkVXQ1eE5oTi8vWThSakNuMlNIUUs4c2hURzZNOXc0VWJvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVU9pUlVsVEgzYXFvZElObXgydDlwCkhiZHdkZTR3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQU5rUVQxNzFQMEYvYjhCT2trQ2hFN1JrOE93Z3NyZmUKc1J4dXJickhHSXVTQWlCQkh3VXVuYjRVQkFCMDBzSlJDRExDWTMrSkZpbStYVEZZZXlsM01YZzZQQT09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K
            server: https://192.168.0.71:6443
          name: default
        contexts:
        - context:
            cluster: default
            user: default
          name: default
        current-context: default
        kind: Config
        preferences: {}
        users:
        - name: default
          user:
            client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrVENDQVRlZ0F3SUJBZ0lJVkxWTEMvRlRGUE13Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOalUzTmpneU5qazRNQjRYRFRJeU1EY3hNekF6TWpRMU9Gb1hEVEl6TURjeApNekF6TWpRMU9Gb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJDdEFNUWxDai9lMklsbEIKNk8yeGJOdGtSZ3dqcHVxZzhITmVzYWtuYkhIbXo5NEM5dmU3b1FnUXZHYTI2K3pxU05lb0kySzlvSWlHL1lOMApBdW9WNHZtalNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCUjhJQmR5NUtnczFDNnA1S2wyb1RVQ0ZpeHBUekFLQmdncWhrak9QUVFEQWdOSUFEQkYKQWlFQXJ0U3RFcTlMNHF1V2xSMzRiRmgvOEZyQzR1UHZaR1hHbDlMTlhtMHBIeG9DSUFmS2FEajB5MENoVEl1TgpwSGFFZkFmQTRQTWJtSU41cTZOZlA4cTg3VTI0Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJlRENDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyTlRjMk9ESTJPVGd3SGhjTk1qSXdOekV6TURNeU5EVTRXaGNOTXpJd056RXdNRE15TkRVNApXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyTlRjMk9ESTJPVGd3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFSb0VFcHkvZk0xT3J2aXUzUFp0Y0V1Z1lRbXltcDZwNWtJd09UK05ZcjQKQ1pVODNzVmFPZ0xUSWo2by9xbnJHb0QyY2oybzRYZkpHcEpNKzJzMkttamZvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVWZDQVhjdVNvTE5RdXFlU3BkcUUxCkFoWXNhVTh3Q2dZSUtvWkl6ajBFQXdJRFNRQXdSZ0loQUlBMnpHZU9uRkFFR0NiQ0ZNNXA1R0tkbTVidFBUa2sKdjluZ0NZaHp2Um1qQWlFQTZjTzBVQ0Z0QWxZMDFBTG0wb1QvbktLem5LcDdEb2oyZm9sM0s3SFpFNm89Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K
            client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUdTL0NGL1ZEZjAweS93elhCUzRoNlpNNUhuVHpCMkh3aDRndlZCVENZbjBvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFSzBBeENVS1A5N1lpV1VIbzdiRnMyMlJHRENPbTZxRHdjMTZ4cVNkc2NlYlAzZ0wyOTd1aApDQkM4WnJicjdPcEkxNmdqWXIyZ2lJYjlnM1FDNmhYaStRPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo=
                    `,
      namespace: 'dev',
      application: 'ide-extension-gin-next-app',
      workload: 'ide-extension-gin-next-app-ide-extension-gin-next-app-backend',
      workload_type: 'Deployment',
      action: 'stop'
    }

    const qsString = qs.stringify(parameters)
    window.open(`vscode://forkmain.forkmain?${qsString}`)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundMask} />
      <div className={styles.container}>
        <div className="slogan-section container">
          <div className={styles.verticallyFullOfScreen}>
            <HeighlinerHeader />
          </div>
          <div className={styles.contentWrap}>
            <main className={styles.wrap}>
              <div className={styles.sloganTextWrap}>
                <h1>
                  <AutoDownCounter
                    startPoint={3000}
                    endPoint={0}
                    interval={1}
                    minuend={5}
                  />{" "}
                </h1>
                <h1>
                  Application Stack
                </h1>
                <h1>On Any Cloud</h1>
              </div>
              <button
                onClick={openVsocde}
                className={clsx("button button--lg", styles.openvscode)}
              >
                Open DevSpace in VSCode
              </button>
              <button
                onClick={stopLocalDevelop}
                className={clsx("button button--lg", styles.openvscode)}
                style={{ marginLeft: 50, borderColor: 'red', color: 'red' }}
              >
                Stop Local Develop in VSCode
              </button>
              <div className={styles.actionsGroup}>
                <Link
                  className={clsx("button button--lg", styles.requestAccess)}
                  to={siteConfig.customFields.newsletterUrl as string}
                >
                  Heighliner Newsletter
                </Link>
                <Link
                  className={clsx("button button--lg button--secondary", styles.quickstart)}
                  to={siteConfig.customFields.quickStartUrl as string}
                >
                  Quickstart
                </Link>
              </div>
            </main>
            <div className={styles.video}>
              <Video
                poster="/img/video/white-border@3x.webp"
                src="https://dl.h8r.io/Heighliner-Introduction-English.mp4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
