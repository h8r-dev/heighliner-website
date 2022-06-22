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
    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURKekNDQWcrZ0F3SUJBZ0lDQm5Vd0RRWUpLb1pJaHZjTkFRRUxCUUF3TXpFVk1CTUdBMVVFQ2hNTVJHbG4KYVhSaGJFOWpaV0Z1TVJvd0dBWURWUVFERXhGck9ITmhZWE1nUTJ4MWMzUmxjaUJEUVRBZUZ3MHlNakEyTVRVdwpOakl3TlRCYUZ3MDBNakEyTVRVd05qSXdOVEJhTURNeEZUQVRCZ05WQkFvVERFUnBaMmwwWVd4UFkyVmhiakVhCk1CZ0dBMVVFQXhNUmF6aHpZV0Z6SUVOc2RYTjBaWElnUTBFd2dnRWlNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUIKRHdBd2dnRUtBb0lCQVFEZ2pxSU9ncENkMkw2eDRod3NTRFdkTm45a0NJS2xkOEkwYTduRmtCV1o0eXgwajZOTgozYkIrUWx5Z3pwRWQvTi9IR3kvMm9mY252UmNPbk5DWklDSEdIaUF0Zy9meXd4NXF3Mis1cHAxcUNBaFk5cittCjEvTmhFVEdvQ1JOREExOXZEc3k5ak9VTXB1NjJNNGZidUl1ME9YQ0VXOUpUL1I4WVNQcERPSFNkNlRmWmhXRjcKZE5ObjFGZHdyYUdzR2RCVS82WXZpNTNKMmxnYk9XanFoT3ljR0xGekREbGRuUm1iSW9FWVRwSWxRZWducVlCaQphUDI3YlF2ZmU3T0YwQjdOcjEzNW03K2p6dnNlamxvOTdaSmJGNVBnbTl0akZhWE9MUThhc2VycmJvamNPZHpKClU3UkxsQnIycjhJanhJd1dFM3pTaitJOUtTdlg3NS9DeGVpVEFnTUJBQUdqUlRCRE1BNEdBMVVkRHdFQi93UUUKQXdJQmhqQVNCZ05WSFJNQkFmOEVDREFHQVFIL0FnRUFNQjBHQTFVZERnUVdCQlRqeGtVVjI2WkpJQ05GTjhDOQpKQTdvRDVPWGVUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FRRUFjdlJXZlVxdnVieFFnNitZQmRnU01Rd2Zxb0dYCmV2aEVSZEZVTGpJQzZKZWxJU3F4dTlCVzBhRDRPcUszR1dWdHAreUNSSmtEODJrWFBBRGIybGxOeXptWVRVQWIKbStMdVUramZOVTJmekU3cWRVN3VZYmZqdEJUUmlxbW1CdkIrVldFcDBtcVVTNzZIZ0RhMFBpZFBZZ0FhSTNHbwphd3hRU3VkVUQ0eWF0SndidjVJWjNEaUx6dGk2NjlyMHlvQlhLZTVpUlFlRndYTnRORUtPaHhtS08veGNrdjZvCnBLNXNhM2JKL1A0dFY3WXcvUi8xOWYxVy9FSUVSWjFKMTYrQ2hnclk3dEc1b1ZBMDFZdENXSWV6LzZJVlR3UWoKVkJaYXliNGFlcGhGVDZhUGI3bUhUaTU4aTJVSDdMNXBlNExZY3lxdzEzY3ExZjVCMUdlcFNKb1ZPQT09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K
    server: https://82ac73a9-d688-4a53-b5f1-dc5747bb96f1.k8s.ondigitalocean.com
  name: do-sfo3-chenyuan-k8s
- cluster:
    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUMvakNDQWVhZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJeU1EWXhOakF5TkRreU0xb1hEVE15TURZeE16QXlORGt5TTFvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTGpGCmhxekhUWVFybW5SNVkyYTlBRW9DTzBScHRrU1lzREluemwwZ2lWVS8rcGo3L2Z6QkUzclBDcWQvNlVWRTlCelYKVmJaV1pHNUpSNGdySTVtMmZJQjNJZE1UaWlIS05kdytpN1RFdXNsczZjNGlVM1lGUURZUFhreXpTVEx6TXg2NgpxNDFYV2E2bmlVYm1vbFlXUVNpVEhPbWVEUjVEcnpHWXdWTUpXbmhaT1UwSHQ5TldBWE1EVVRYWlM5T1JTZjZWClkrS0xwM1RVbjNLVURpNTJkY0c0RnZORGVvaGlWZ1N5Zm05ZFBpcjJKM0p6dkJYREdmY28vMG9WY2s1NWwxaE4KUHhJMndtRmlDMFQ4NS9IUEQ5RTFpM3ViZ2xFSUxkMnVXY1ZIYUJvY21nZVZZcllFZkFnMWpsYzNKVUYzZXNURgpxMjhTeEJRT1dDMWJLTjQ5THRVQ0F3RUFBYU5aTUZjd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0hRWURWUjBPQkJZRUZKdUtDc1EyOHRIZ1dGY1VISXVidU9qaEJ2bWhNQlVHQTFVZEVRUU8KTUF5Q0NtdDFZbVZ5Ym1WMFpYTXdEUVlKS29aSWh2Y05BUUVMQlFBRGdnRUJBRThlWVJMSndlcVpHZlpOVjl2NApyWFpteTVOWVpaMWUrTEtpTnhRNnVBYy9HL1lBRWxjUW5rQWNhU0I3N2doU2l4a0tYQXl6RTh1dUtPck55SHdTCjRsSHVXeDg4OWc2aDB4THgvY1pHYU1ndDhoVVYrKy9zK1Q1SFlvUStHVnF6UzloWkZ0NE56RGhUc0dYQzZBV1kKdGUxTkwzZTlvUlFGMlo4QVU3SnhrQXRvY1RoajQvSkRpSU05aWN5NFN6Y05tTUtyRS9JekpHS3c1YVBLWXUxOQpkN2xrQ1VYbHB2dnUzZW9pemxRWjBMdlRPMHc2bGZCb0tsZzk0MkVpZ3NzcGFRejZYOVNKdkJjUElvYUg4UUh6CjAwbklJdFBwS0JjVnN6ZUVOU3E0aVNrd2ZKaThzV2xSTHptVkZTM3VDU2lqcTFxem5ZSEQrczhwZEQySGIxOEoKZDFNPQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==
    server: https://127.0.0.1:64121
  name: kind-kind
contexts:
- context:
    cluster: do-sfo3-chenyuan-k8s
    user: do-sfo3-chenyuan-k8s-admin
  name: do-sfo3-chenyuan-k8s
- context:
    cluster: kind-kind
    user: kind-kind
  name: kind-kind
current-context: kind-kind
kind: Config
preferences: {}
users:
- name: do-sfo3-chenyuan-k8s-admin
  user:
    token: dop_v1_b80791c89329e4173ba4ba3beed716140786ab91bd3ba20af172759f1532370c
- name: kind-kind
  user:
    client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURJVENDQWdtZ0F3SUJBZ0lJQjVkdVBRT3J2SFV3RFFZSktvWklodmNOQVFFTEJRQXdGVEVUTUJFR0ExVUUKQXhNS2EzVmlaWEp1WlhSbGN6QWVGdzB5TWpBMk1UWXdNalE1TWpOYUZ3MHlNekEyTVRZd01qUTVNalJhTURReApGekFWQmdOVkJBb1REbk41YzNSbGJUcHRZWE4wWlhKek1Sa3dGd1lEVlFRREV4QnJkV0psY201bGRHVnpMV0ZrCmJXbHVNSUlCSWpBTkJna3Foa2lHOXcwQkFRRUZBQU9DQVE4QU1JSUJDZ0tDQVFFQTRrZldobjNEalYydjlIdnkKOHE1VXppYjhSUmljbXRkQWFSWDhNN2lIODhJUmpBckNiby9qRThya1JBK3ZIaVRDdDNPbnhkRnNSMmpobklhZgpYNmhxTmI4SHhyQzhPNStPdVhIUENoK3k1WVlyTlpvbDNYeWZmRWxvY2JaMjczQjJ1KysreExWOXRlM0JwNmdGCmh5Z2pRV1VJUGRnODJnbzNZMXFtZTdUSGE4Rno0dWlmempEMU4wZTJZOVBpRTNFcEdaY0hlRG1wS2pudE02a00KVVAvandXcW0yUEJ3TmpOQTc0ZGp2Rk1QQjRhcmdzRDJnSnVBbkpUNkh0aHVpYkFvSmpWOStvUFl6ckF6QTc0cwpINGxsbGV2eGhIOWF1Y3FsUG80MzJZOEpBdGc1VkZiaFR0ZUZHZFRNU1BER1JhbGN6ckQrbW9yaUpZeW41VFBTCnE5T3JMUUlEQVFBQm8xWXdWREFPQmdOVkhROEJBZjhFQkFNQ0JhQXdFd1lEVlIwbEJBd3dDZ1lJS3dZQkJRVUgKQXdJd0RBWURWUjBUQVFIL0JBSXdBREFmQmdOVkhTTUVHREFXZ0JTYmlnckVOdkxSNEZoWEZCeUxtN2pvNFFiNQpvVEFOQmdrcWhraUc5dzBCQVFzRkFBT0NBUUVBZEJSSTFPeHFUMnNCTGVBenhoMlY0YVA0S0gzNTRSQ0c4czF1CjlOVzRudGxQL3hQU1ZCUDlSNCtDQTdNOWJrMzRoc2JmVlFwc1g4MGIwQjhSZHQ0WmI5azVsK3drQ1JwMnMzSWYKZWw4WDRrOFZsNVcxRmVIWGpmWEc2VmtzeUNZQXdzcWlTNjlwbUsxZDVuckJVNVZHbTkwUkRzYjFjNUJKR1NjbApIeTRIWTVKcHJPOTduQXJjWHJCUC9EME5SNDBORXcxR0NoRmhHMUpUck8xeStqSVYra2RVMGNyanNEVTlTSzNNCmpXbXVHRFcrTWp1ZGlqd2pBMWhiUnpVeDdwZkNaYWRyZkxyVkFneTlMcnhKUXVrcGtLUTlvdWRxNEF5bXJmOFMKNWtPWXF5UkpzSGJudnEzU25qd0h5VDUxV1FEeHFvbUdTd3kvbm5nRzM3NC92VnFxYWc9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==
    client-key-data: LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb3dJQkFBS0NBUUVBNGtmV2huM0RqVjJ2OUh2eThxNVV6aWI4UlJpY210ZEFhUlg4TTdpSDg4SVJqQXJDCmJvL2pFOHJrUkErdkhpVEN0M09ueGRGc1IyamhuSWFmWDZocU5iOEh4ckM4TzUrT3VYSFBDaCt5NVlZck5ab2wKM1h5ZmZFbG9jYloyNzNCMnUrKyt4TFY5dGUzQnA2Z0ZoeWdqUVdVSVBkZzgyZ28zWTFxbWU3VEhhOEZ6NHVpZgp6akQxTjBlMlk5UGlFM0VwR1pjSGVEbXBLam50TTZrTVVQL2p3V3FtMlBCd05qTkE3NGRqdkZNUEI0YXJnc0QyCmdKdUFuSlQ2SHRodWliQW9KalY5K29QWXpyQXpBNzRzSDRsbGxldnhoSDlhdWNxbFBvNDMyWThKQXRnNVZGYmgKVHRlRkdkVE1TUERHUmFsY3pyRCttb3JpSll5bjVUUFNxOU9yTFFJREFRQUJBb0lCQURvZW00SkYwVEdCSzgyTwovSkxLcGl1aEpkQ1ZocnZhcDhlV0J3WTkwbVdRcGpNakhGZUxpNWFzMlQ2R0RNT2dTNGNWSkxXUm1jOHBxREVzCi9zaHlHSDJmaUY3SFRFSEFOTWQ2N09PN3lwWmJoTU9xeVNqL2RuTlU0NGU1aHdqdkNRQXlqdncxWlltUi9OaVUKTm45Rmx2Q1lBNnJtM0pKZ1oyT1VpQWhrSVlpU1Z3WGQ3SmtiU1dOT2MyUWNqT3NKWnh2ZlJMUGZwL1UxeXRxRQpQMTI5T2JMR1QyV3U1anpuanR5c0ppY0RaeE56MmNkVWtHTmlKSFpSeGcvMTMvRUUrUTBwbWltcWdmbyt2SzNwCnB5MVJGSThSdEpHVFFOYkUyTTBQeWhHNFZ2dWlraVFUcWp2UDYyZDQ0T1BoaDJTYTRPM3RIY3hPeHhyM0JZd04KRG11aXNlRUNnWUVBOW83TUlFN1F6QkZ4M1kzMkZmMEhJTTdoL3l1NzhQQWsyc1JJVlBVc0VqaExGTlR6MXlySgpPeXliNDZRd1A3U1V1NGRjeGNONjlsSEFycXYrZGtzd1hHTXlRVkV0L2tubXZKMUtLV2tQSE9BUklBUm1KSWQyCkNqZmxvUEwyOStsbkd3QWJTalV2UTlSYVpJSnV1aGtDenp3TUtGdkdZdGRkMHA4SlZlR3JrblVDZ1lFQTZ2SS8KU1pHWXllUENFTkxUWFNwQmk3OWRHdDJwejVMVGVsMEZHb3dEWmZ1cjZNTnNYVCt6LzdSOHRnenpFZVNCQ3hTTwpScHZuZnh0enUxNjNlcHhSN1VkVVZtUERSRmRkUmJsWkh3QWtjMkhpMnBOUEppTHFCSWJldm5NWXQ3aVdaYkQ5Cm5LeWtjeHBRR3hXQ0luZTIyUjF5MmdhTW1jMVNYZThld1RkVnJ0a0NnWUJtYW9TaU92c0NlWkNaM25sRlF2aXUKQ1NIWlUvcGFwL1kzSldlQ1d1RTJwRW1UMnExN1NGdVVpQUF0UEN1S211RlpVRzRaL0F4Y3V6TFZtNzQwdHlEYwpqNXYxZzlvZUVlYVZuS1NNdFFaQkVWWXJ2WWdNVG5TYTVBTXZxeDBwZDd1TGZLelpVMlJSd2FqV3JWTi9YQnBOCnFQekgydTk2YVVtZ3pzMGE3b1hOYlFLQmdRRFpDVEdYaDQxcUt5RHlJNStuZDhxWEN3ODZLenljQ1JtYzl1TXAKRStCcnpHS1JJajR2b2hKb2k5V000MGVENXQraVdiblkxbHF5MjZ3OGtaSFREU2JObDgvOEFpcTNMakYyb0hNSQpwVHdHN296K3Q0Z3RSYUdDendoalRMV3Z1akFNL3NRNWdHNWwrZys0QlZWeSs3NElzU0NROGUzZWdvS3RUYURPCmdveC9lUUtCZ0VacTZNOGhmOEVKQjhoKzB6OG1XbVZFeE8vN29OZ2dwemJ0czBDb2h1Wkl4VzJQR1ExS01PQlMKT0RlTU5SRFg2YVR4WGNTamtDczJSSVVOQWNuYmRsejVzOHZ0clJIa1B0ak5VTnl1eWdqUVJMRXVVUkNJYjZIWgp6OCtpNk9BYnJJUjBTS3VJU3oyTFdYREhqTVdiNGlYWjhtTEpZdk95MFovaE1wMU93by9QCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tCg==`,
      namespace: 'dev',

      application: 'helghliner-cloud',
      workload: 'heighliner-cloud-heighliner-cloud-frontend',
      workload_type: 'Deployment',
      action: 'run'
    }

    const qsString = qs.stringify(parameters)
    window.open(`vscode://nocalhost.nocalhost?${qsString}`)
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
