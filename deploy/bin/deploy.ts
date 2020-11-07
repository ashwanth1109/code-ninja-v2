#!/usr/bin/env node
import "source-map-support/register";
import { App } from "@aws-cdk/core";
import { DeployStack } from "../lib/deploy-stack";

const app = new App();
new DeployStack(app, "code-ninja-deploy-stack");
