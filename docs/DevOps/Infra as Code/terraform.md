# Terraform

Terraform is an infrastructure as code (IaC) tool that allows you to build, change, and version infrastructure safely and efficiently. This includes low-level components such as compute instances, storage, and networking, as well as high-level components such as DNS entries, SaaS features, etc. Terraform can manage both existing service providers and custom in-house solutions.

## ENV vars in your code

Use prefix `TF_VAR_` in your definition:

```bash
$ export TF_VAR_db_password="(YOUR_DB_PASSWD)"
```

* `vars.tf`

```
(...)
variable "db_password" {
  description = "the password for the database"
  type        = string
}
```

```bash
$ terraform apply
```


## Lifecycle

For Elastic scale (it willl create instances before deleting them):

```
resource {
  lifecycle {
    create_before_destroy = ture
  }
}
```


## Code Structure

* [Writing Effective, Scalable, Dynamic, and Error-Resistant Terraform](https://medium.com/capital-one-tech/terraform-poka-yokes-writing-effective-scalable-dynamic-and-error-resistant-terraform-dcbd6a0ada6a)

### [Refactoring Terraform, The Right Way](https://blog.doit-intl.com/refactor-terraform-into-modules-the-right-way-7bce4d57d66a)

#### Tier-3 Terrafor Live environment modules
This is the top tier
The `terraform-live-envs`is a folder containing modules implementing the infrastructure that is deployed

These modules are usually built from the services modules but can also have resources modules mixed in

Every module attribute is a hard-coded value representing the value that is deployed

```
terraform-live-envs
|--dev
|    |-vpc
|    |-mysql
|    |-kubernetes
|
|--staging
|    |-vpc
|    |-mysql
|    |-kubernetes
|
|--dev
|    |-vpc
|    |-mysql
|    |-kubernetes
|
```

#### Tier-2 Terraform Service Modules
Service (Infrastructure type)

This is the middle tier
`terraform-services`is a folder containing modules combining resources modules together from the `terraform-resources` folder

Each service module is a *generic service* that can create multiple verisons based on the variables passed in

Example: an SQL instance module can create postgreSQL or mySQL instance

```
terraform-services (generic modules)
|    |-gke
|    |-vpc
|    |-sql
|
```

#### Tier-1 Terraform Resources Modules

Complex modules from smaller, simpler modules.
`terraform-resources`is a folder containing modules with a single reource to be created.
These resource modules are creating only one ting
These modules should have an `output.tf`file with outputs values providing information on the resource created.

This info can be used to create hard dependencies between modules (required by 2nd tier)

```
terraform-resources
|    |-vpc
|    |-sql
|      |-instance
|      |-user
|
```


### Isolation via File layout

```
- live
   |- stage
   |   |- vpc
   |   |- services
   |   |     \-services
   |   |         \- app1  --> links to modules
   |   \- data-storage
   |
   |- prod
   |   |- vpc
   |   |- services
   |   |    \-services
   |   |        \- app1  --> links to modules
   |   \- data-storage
   |
   |- mgmt
   |
   |- global
   |   |- s3
   |   \- iam
   |
   |- modules
   |   |- vpc
   |   |- services
   |   |    \-services
   |   |        \- app1
   |   |            |- main.tf
   |   |            |- variables.tf
   |   |            \- outputs.tf
   |   |
   |   \- data-storage
   |
   *
```

### References

* [Lessons learned from writing 3000.000 lines of IaC code](https://www.slideshare.net/brikis98/lessons-learned-from-writing-over-300000-lines-of-infrastructure-code-120597849)

## Terrafrom Up & Running

### Samples

Code samples for the book "Terraform: Up & Running" by Yevgeniy Brikman:

* <https://github.com/brikis98/terraform-up-and-running-code>
  * <https://github.com/brikis98/terraform-up-and-running-code/tree/master/code/terraform>

## Automation tools

### Unit Test

* https://www.hashicorp.com/sentinel/
* https://terratest.gruntwork.io/
* https://serverspec.org/
* https://www.pulumi.com/blog/testing-your-infrastructure-as-code-with-pulumi/

#### References

* [2020: Terraform Without the mess](https://speakerdeck.com/jen20/terraform-without-the-mess?slide=48)
* [2017: HashiDays New York 2017](https://github.com/jen20/hashidays-nyc)
* [2017: Top 3 Terraform Testing Strategies for Ultra-Reliable Infrastructure-as-Code](https://www.contino.io/insights/top-3-terraform-testing-strategies-for-ultra-reliable-infrastructure-as-code)

### Atlantis

[Atlantis](https://www.runatlantis.io/) is a Terraform Pull Request Automation.

1. Open a Terrafrom Pull Request.

2. Atlantis automatically runs `terraform plan` and comments back on the pull request.

3. Then, someone reviews the plan and approves the PR.

4. You comment `atlantis apply`

5. Atlantis runs `terraform apply` and comments back the pull request.

6. Merge the pull request.

### terraform-compilance

Compilance as Code.

`terraform-compliance` is a lightweight, security and compliance focused test framework against terraform to enable negative testing capability for your infrastructure-as-code.

* [Homepage](https://terraform-compliance.com/)
* [GitHub](https://github.com/terraform-compliance/cli)
* [SlideShare presentation](https://www.slideshare.net/EmreErkunt/compliance-as-code-with-terraformcompliance)

### Kubestack

Free and Open Source GitOps framework to codify your custom platform stack using Terraform.

* [Homepage](https://www.kubestack.com/)

## Ansible

### Produce Ansible inventory

1. Create instances.
* `instances.tf`

```hlc
### The bastionresource
"aws_instance" "bastion" {
  ami = var.ami
  availability_zone = var.az
  instance_type = "t2.micro"
  key_name = var.ssh-key
  vpc_security_group_ids = [aws_default_security_group.sg-public.id]
  subnet_id = aws_subnet.public.id
  tags = {
    Name = "Bastion"
    Projet = var.projet
    Application = var.Application
  }
  volume_tags = {
    Name = "Bastion"
    Projet = var.projet
    Application = var.Application
  }
  root_block_device {   volume_size = 8  }}

  ### The Elastic IP for the Bastion
  resource "aws_eip" "eip-bastion" {
    vpc = true
    instance = aws_instance.bastion.id
    associate_with_private_ip = aws_instance.bastion.private_ip
    tags = {
      Name = "bastion"
      Projet = var.projet
      Application = var.Application
    }
  }

  ### The private instances
  resource "aws_instance" "i-private" {
    ami = var.ami
    availability_zone = var.az
    instance_type = var.ec2_type
    key_name = var.ssh-key
    vpc_security_group_ids = [aws_security_group.sg-private.id]
    subnet_id = aws_subnet.private.id
    tags = {
      Name = "i-private"
      Projet = var.projet
      Application = var.Application
    }
    volume_tags = {
      Name = "i-private"
      Projet = var.projet
      Application = var.Application
    }
    root_block_device {
      volume_size = 8
    }
    ebs_block_device {
      device_name = "/dev/sdb"
      volume_type = var.ebs_type
      volume_size = 8
    }
    count = var.ec2_nb
  }
```

2. Output the information using resource type `local_file` with a filename attribute set to `inventory`. It's attribute `content` is the return of the `templatefile` function
* `outputs.tf`

```
### The Ansible inventory file
resource "local_file" "AnsibleInventory" {
  content = templatefile("inventory.tmpl", {
    bastion-dns = aws_eip.eip-bastion.public_dns,
    bastion-ip = aws_eip.eip-bastion.public_ip,
    bastion-id = aws_instance.bastion.id,
    private-dns = aws_instance.i-private.*.private_dns,
    private-ip = aws_instance.i-private.*.private_ip,
    private-id = aws_instance.i-private.*.id
  })
  filename = "inventory"
}
```

3. The template.

```
[bastion]
${bastion-dns} ansible_host=${bastion-ip} # ${bastion-id}
[servers]
%{ for index, dns in private-dns ~}
${dns} ansible_host=${private-ip[index]} # ${private-id[index]}
%{ endfor ~}
```

4. Result

```
[bastion]
ec2-99-79-28-17.ca-central-1.compute.amazonaws.com ansible_host=99.79.28.17 # i-0d8c4197a22797

[servers]
ip-10-1-2-114.ca-central-1.compute.internal ansible_host=10.1.2.114 # i-09752396073622ba6
ip-10-1-2-251.ca-central-1.compute.internal ansible_host=10.1.2.251 # i-0af7dddbe098fb1c9
ip-10-1-2-35.ca-central-1.compute.internal ansible_host=10.1.2.35 # i-0de0126836e547eba
ip-10-1-2-109.ca-central-1.compute.internal ansible_host=10.1.2.109 # i-060a362c0165ab3f2
ip-10-1-2-185.ca-central-1.compute.internal ansible_host=10.1.2.185 # i-07bd962925faafa3b
ip-10-1-2-93.ca-central-1.compute.internal ansible_host=10.1.2.93 # i-0fc357d17b62b1497
```

5. Provisioner

```
$ cat <<ENDL > playbook.yml
---
- hosts: all
become: yes
become_user: root
become_method: sudo
tasks:
- name: Install nginx
apt:
name: nginx
state: latest
- name: Restart Nginx
service: name=nginx state=restarted
become: yes
ENDL
```

```
provisioner "local-exec" {
  command = "sleep 120; ansible-playbook -i '${digitalocean_droplet.www-example.ipv4_address}' playbook.yml"
}
```

* <https://www.linkbynet.com/en/news/produce-an-ansible-inventory-with-terraform>
* <https://alexharv074.github.io/2019/11/23/adventures-in-the-terraform-dsl-part-x-templates.html#example-4-if-else-endif-example>
* <https://www.splunk.com/en_us/blog/devops/writing-ansible-playbooks-for-new-terraform-servers.html>

## References

* [Homepage](https://www.terraform.io/intro)

