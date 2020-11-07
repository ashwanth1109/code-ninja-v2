import { Bucket, RedirectProtocol } from "@aws-cdk/aws-s3";
import { BucketDeployment, Source } from "@aws-cdk/aws-s3-deployment";
import { Construct, RemovalPolicy, Stack, StackProps } from "@aws-cdk/core";

export class DeployStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucketName = "code-ninja.xyz";
    const destinationBucket = new Bucket(this, bucketName, {
      bucketName,
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
    });

    const subDomainBucketName = "www.code-ninja.xyz";
    new Bucket(this, subDomainBucketName, {
      bucketName: subDomainBucketName,
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteRedirect: {
        hostName: bucketName,
        protocol: RedirectProtocol.HTTP,
      },
    });

    new BucketDeployment(this, "DeployCodeNinja", {
      destinationBucket,
      sources: [Source.asset("../frontend/build")],
    });
  }
}
