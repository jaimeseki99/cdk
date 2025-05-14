#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { HelloCdkStack } from '../lib/hello-cdk-stack';

const app = new cdk.App();
new HelloCdkStack(app, 'HelloCdkStack', {
 
   env: { account: '266735833191', region: 'eu-south-2' },

  
});