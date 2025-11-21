# Continous Deployment

CD sometimes stand for Continous Delivery or Continous Deployment.

Continuous Delivery is an extension of CI since it enables automation to deploy all the code changes to an environment (dev, qa, stage, prod, etc) after the changes have been merged. The artifact may be built as part of CI or as part of this process since the source of truth (your repository) is reliable given your CI process. In simple terms, this means that there is an automated release process on top of the automated testing process and that developers can deploy their changes at any time by simply clicking a button or at the completion of CI.

Continuous Deployment takes the process one step further than continuous delivery. Here, all changes that pass the verification steps at each stage in the pipeline are released to production. This process is completely automated and only a failed verification step will prevent pushing the changes to production. The main baisc difference with Continous Delivery is it doesn't requiere any confirmmation do deploy de code, all is done automatically once all tests are green.

## CDF

CD Foundation is an open source community improving the world's ability to deliver software with security and speed.

The Continuous Delivery Foundation (CDF) serves as the vendor-neutral home of many of the fastest-growing projects for continuous delivery.

* [CDF Homepage](https://cd.foundation/)

