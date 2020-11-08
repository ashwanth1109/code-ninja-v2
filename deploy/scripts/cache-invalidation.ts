import { CreateInvalidationRequest } from "aws-sdk/clients/cloudfront";

process.env.AWS_SDK_LOAD_CONFIG = "true";
process.env.AWS_PROFILE = "default";

import { CloudFront } from "aws-sdk";

const cloudfront = new CloudFront();

(async () => {
  const distributions = await cloudfront.listDistributions().promise();
  const findCNDistribution = distributions.DistributionList?.Items?.find(
    (item) => item?.Aliases?.Items?.includes("code-ninja.xyz")
  );

  if (!findCNDistribution?.Id) {
    console.error("No distribution found");
  }

  const params: CreateInvalidationRequest = {
    DistributionId: findCNDistribution?.Id || "",
    InvalidationBatch: {
      CallerReference: new Date().toISOString(),
      Paths: {
        Quantity: 1,
        /**
         * https://github.com/ashwanth1109/code-ninja-v2/issues/5
         * TODO: Identify / experiment to understand if we need to invalidate everything to reflect changes
         * Also explore bucket versioned objects to see how cache invalidation plays out
         * Is only 'index.html' sufficient to invalidate everything necessary
         * check the next time this is run
         */
        Items: ["index.html"],
      },
    },
  };

  await cloudfront.createInvalidation(params).promise();
})();
