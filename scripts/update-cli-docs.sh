#! /bin/bash

SOURCE_REPO=https://github.com/h8r-dev/heighliner.git
SOURCE_BRANCH=website-docs
SOURCE_DIR=website-docs
TARGET_DIR=docs/07-cli/hln/commands
HEIGHLINER_DIR=$(mktemp -d)

git clone -b $SOURCE_BRANCH $SOURCE_REPO $HEIGHLINER_DIR
rm $TARGET_DIR/*.md
cp $HEIGHLINER_DIR/$SOURCE_DIR/*.md $TARGET_DIR
rm -rf $HEIGHLINER_DIR

echo cli docs updated
