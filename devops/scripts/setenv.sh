# *********************************************************************************
# Description: Builds a docker image for this node app
# Author:      Joe Rice
# Created:     10/14/2016
#
# Notes:
#    Uses the Dockerfile in this same git repo
# *********************************************************************************

export SCRIPTS_DIR="$(cd "$(dirname "$0")" && pwd)"
export APP_CODE_DIR=$SCRIPTS_DIR/../../application/web-static

export MACHINE_NAME_SITE=minecat-sites

export NAMESPACE=jarch
export IMAGE_NAME=app-mcat-static-web
export CONTAINER_NAME=mcat-static-web

export ECR_REPO=193862077204.dkr.ecr.us-east-1.amazonaws.com/jarch

export SITE_IMAGE_NAME_LOCAL=$NAMESPACE/$IMAGE_NAME
export SITE_IMAGE_NAME_REPO=$ECR_REPO:$IMAGE_NAME