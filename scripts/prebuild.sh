#! /usr/bin/env bash

echo 'Prebuild stage:\n'
echo 'Generate Build Info.'

INPUT_FILE_PATH="./plugins/ConsoleBuildInfo.mjs"
OUTPUT_FILE_PATE="./plugins/ConsoleBuildInfo.bak.mjs"

COMMIT_HASH=$(git rev-parse --short HEAD)
BUILD_TIME=$(date)

BUILD_TIME_IN_UTC=$(TZ=UTC date)
BUILD_TIME_IN_ASIA_SHANGHAI=$(TZ=Asia/Shanghai date)
BUILD_TIME_IN_NEW_YORK=$(TZ=America/New_York date)
BUILD_TIME_IN_LOG_ANGELES=$(TZ=America/Los_Angeles date)


sed -e "s/COMMIT_HASH/\"$COMMIT_HASH\"/" \
    -e "s/BUILD_TIME_IN_UTC/\"$BUILD_TIME_IN_UTC\"/" \
    -e "s/BUILD_TIME_IN_ASIA_SHANGHAI/\"$BUILD_TIME_IN_ASIA_SHANGHAI\"/" \
    -e "s/BUILD_TIME_IN_NEW_YORK/\"$BUILD_TIME_IN_NEW_YORK\"/" \
    -e "s/BUILD_TIME_IN_LOG_ANGELES/\"$BUILD_TIME_IN_LOG_ANGELES\"/" \
  $INPUT_FILE_PATH >$OUTPUT_FILE_PATE
