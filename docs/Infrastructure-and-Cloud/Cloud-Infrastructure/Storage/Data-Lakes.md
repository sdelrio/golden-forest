# Data Lakes: Open-Source & Self-Hosted 🌊

Data Lakes enable the massive storage of both structured and unstructured data. Implementing one in a "self-hosted" manner provides data sovereignty and a drastic reduction in costs compared to commercial solutions.

## Article Summary: "Open Source Data Lake on a Budget"

Based on the proposal by [Jott](https://medium.com/@jott2424/deploying-an-open-source-self-hosted-data-lake-on-a-budget-4aab2c89bc6b), the architecture is divided into modular layers:

1. **Storage Layer:** Uses **MinIO** as an object storage system compatible with the S3 API.

2. **Table Format Layer:** Implements **Apache Iceberg**, which allows files in the Data Lake to be treated like traditional SQL tables (with ACID transactions).

3. **Query Engine Layer:** Relies on **Trino** (formerly PrestoSQL) to execute distributed queries over the data stored in MinIO.

4. **Catalog:** Uses **Project Nessie** for data version control (similar to Git but for tables).

### Suggested Workflow:

* Data is ingested into MinIO.
* Trino uses the Nessie catalog to read Iceberg metadata.
* The end-user queries the data using standard SQL without worrying about the underlying file structure.

---

## ⚠️ Technical Critique: The MinIO Factor

While the article recommends MinIO for its ease of use and S3 compatibility, it is crucial to analyze its current situation:

### The Official Images Issue

MinIO has changed its distribution strategy. Currently, they have stopped clearly publishing Docker images tagged under purely Open Source licenses for all their versions, prioritizing their enterprise subscription model.

### Security and Support Risks

* **Unpatched Vulnerabilities:** By using "community" versions or third-party builds of MinIO, you run the risk of running software with known CVEs (Common Vulnerabilities and Exposures) that will not receive automatic security updates.
* **AGPLv3 Licensing:** MinIO uses the AGPLv3 license, which is very strict. For corporate environments, this can present legal compliance challenges that other alternatives do not have.

### Suggested Improvements and Alternatives

To improve this architecture and ensure long-term security, I would consider:

1. **SeaweedFS:** A very robust distributed Open Source alternative that handles small files better and is usually lighter than MinIO.
2. **Ceph (RGW):** If you already have a Proxmox cluster or dedicated servers, the Ceph S3 Gateway is the industry standard for persistent and secure object storage.
3. **Vulnerability Scanning Implementation:** If you decide to stick with MinIO, it is mandatory to integrate tools like **Trivy** or **Grype** into your deployment pipeline to audit the image before it reaches production.