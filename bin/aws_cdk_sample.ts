#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { AwsCdkSampleStack } from '../lib/aws_cdk_sample-stack';

const app = new cdk.App();
new AwsCdkSampleStack(app, 'AwsCdkSampleStack');