#!/bin/bash

gulp clean
gulp build
aws s3 sync dist/ s3://breakingbao.com/
