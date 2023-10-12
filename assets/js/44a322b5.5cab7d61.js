"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[4985],{2367:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(1839);const i={},l="Terraform",s={unversionedId:"DevOps/Infra as Code/terraform",id:"DevOps/Infra as Code/terraform",title:"Terraform",description:"Terraform is an infrastructure as code (IaC) tool that allows you to build, change, and version infrastructure safely and efficiently. This includes low-level components such as compute instances, storage, and networking, as well as high-level components such as DNS entries, SaaS features, etc. Terraform can manage both existing service providers and custom in-house solutions.",source:"@site/docs/DevOps/Infra as Code/terraform.md",sourceDirName:"DevOps/Infra as Code",slug:"/DevOps/Infra as Code/terraform",permalink:"/docs/DevOps/Infra as Code/terraform",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/DevOps/Infra as Code/terraform.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ansible",permalink:"/docs/DevOps/Infra as Code/ansible"},next:{title:"PaaS",permalink:"/docs/DevOps/PaaS"}},o={},p=[{value:"ENV vars in your code",id:"env-vars-in-your-code",level:2},{value:"Lifecycle",id:"lifecycle",level:2},{value:"Code Structure",id:"code-structure",level:2},{value:"Refactoring Terraform, The Right Way",id:"refactoring-terraform-the-right-way",level:3},{value:"Tier-3 Terrafor Live environment modules",id:"tier-3-terrafor-live-environment-modules",level:4},{value:"Tier-2 Terraform Service Modules",id:"tier-2-terraform-service-modules",level:4},{value:"Tier-1 Terraform Resources Modules",id:"tier-1-terraform-resources-modules",level:4},{value:"Isolation via File layout",id:"isolation-via-file-layout",level:3},{value:"References",id:"references",level:3},{value:"Terrafrom Up &amp; Running",id:"terrafrom-up--running",level:2},{value:"Samples",id:"samples",level:3},{value:"Automation tools",id:"automation-tools",level:2},{value:"Unit Test",id:"unit-test",level:3},{value:"References",id:"references-1",level:4},{value:"Atlantis",id:"atlantis",level:3},{value:"terraform-compilance",id:"terraform-compilance",level:3},{value:"Kubestack",id:"kubestack",level:3},{value:"Ansible",id:"ansible",level:2},{value:"Produce Ansible inventory",id:"produce-ansible-inventory",level:3},{value:"References",id:"references-2",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"terraform"},"Terraform"),(0,r.kt)("p",null,"Terraform is an infrastructure as code (IaC) tool that allows you to build, change, and version infrastructure safely and efficiently. This includes low-level components such as compute instances, storage, and networking, as well as high-level components such as DNS entries, SaaS features, etc. Terraform can manage both existing service providers and custom in-house solutions."),(0,r.kt)("h2",{id:"env-vars-in-your-code"},"ENV vars in your code"),(0,r.kt)("p",null,"Use prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"TF_VAR_")," in your definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ export TF_VAR_db_password="(YOUR_DB_PASSWD)"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vars.tf"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'(...)\nvariable "db_password" {\n  description = "the password for the database"\n  type        = string\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ terraform apply\n")),(0,r.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,r.kt)("p",null,"For Elastic scale (it willl create instances before deleting them):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"resource {\n  lifecycle {\n    create_before_destroy = ture\n  }\n}\n")),(0,r.kt)("h2",{id:"code-structure"},"Code Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/capital-one-tech/terraform-poka-yokes-writing-effective-scalable-dynamic-and-error-resistant-terraform-dcbd6a0ada6a"},"Writing Effective, Scalable, Dynamic, and Error-Resistant Terraform"))),(0,r.kt)("h3",{id:"refactoring-terraform-the-right-way"},(0,r.kt)("a",{parentName:"h3",href:"https://blog.doit-intl.com/refactor-terraform-into-modules-the-right-way-7bce4d57d66a"},"Refactoring Terraform, The Right Way")),(0,r.kt)("h4",{id:"tier-3-terrafor-live-environment-modules"},"Tier-3 Terrafor Live environment modules"),(0,r.kt)("p",null,"This is the top tier\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform-live-envs"),"is a folder containing modules implementing the infrastructure that is deployed"),(0,r.kt)("p",null,"These modules are usually built from the services modules but can also have resources modules mixed in"),(0,r.kt)("p",null,"Every module attribute is a hard-coded value representing the value that is deployed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"terraform-live-envs\n|--dev\n|    |-vpc\n|    |-mysql\n|    |-kubernetes\n|\n|--staging\n|    |-vpc\n|    |-mysql\n|    |-kubernetes\n|\n|--dev\n|    |-vpc\n|    |-mysql\n|    |-kubernetes\n|\n")),(0,r.kt)("h4",{id:"tier-2-terraform-service-modules"},"Tier-2 Terraform Service Modules"),(0,r.kt)("p",null,"Service (Infrastructure type)"),(0,r.kt)("p",null,"This is the middle tier\n",(0,r.kt)("inlineCode",{parentName:"p"},"terraform-services"),"is a folder containing modules combining resources modules together from the ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform-resources")," folder"),(0,r.kt)("p",null,"Each service module is a ",(0,r.kt)("em",{parentName:"p"},"generic service")," that can create multiple verisons based on the variables passed in"),(0,r.kt)("p",null,"Example: an SQL instance module can create postgreSQL or mySQL instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"terraform-services (generic modules)\n|    |-gke\n|    |-vpc\n|    |-sql\n|\n")),(0,r.kt)("h4",{id:"tier-1-terraform-resources-modules"},"Tier-1 Terraform Resources Modules"),(0,r.kt)("p",null,"Complex modules from smaller, simpler modules.\n",(0,r.kt)("inlineCode",{parentName:"p"},"terraform-resources"),"is a folder containing modules with a single reource to be created.\nThese resource modules are creating only one ting\nThese modules should have an ",(0,r.kt)("inlineCode",{parentName:"p"},"output.tf"),"file with outputs values providing information on the resource created."),(0,r.kt)("p",null,"This info can be used to create hard dependencies between modules (required by 2nd tier)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"terraform-resources\n|    |-vpc\n|    |-sql\n|      |-instance\n|      |-user\n|\n")),(0,r.kt)("h3",{id:"isolation-via-file-layout"},"Isolation via File layout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- live\n   |- stage\n   |   |- vpc\n   |   |- services\n   |   |     \\-services\n   |   |         \\- app1  --\x3e links to modules\n   |   \\- data-storage\n   |\n   |- prod\n   |   |- vpc\n   |   |- services\n   |   |    \\-services\n   |   |        \\- app1  --\x3e links to modules\n   |   \\- data-storage\n   |\n   |- mgmt\n   |\n   |- global\n   |   |- s3\n   |   \\- iam\n   |\n   |- modules\n   |   |- vpc\n   |   |- services\n   |   |    \\-services\n   |   |        \\- app1\n   |   |            |- main.tf\n   |   |            |- variables.tf\n   |   |            \\- outputs.tf\n   |   |\n   |   \\- data-storage\n   |\n   *\n")),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.slideshare.net/brikis98/lessons-learned-from-writing-over-300000-lines-of-infrastructure-code-120597849"},"Lessons learned from writing 3000.000 lines of IaC code"))),(0,r.kt)("h2",{id:"terrafrom-up--running"},"Terrafrom Up & Running"),(0,r.kt)("h3",{id:"samples"},"Samples"),(0,r.kt)("p",null,'Code samples for the book "Terraform: Up & Running" by Yevgeniy Brikman:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/brikis98/terraform-up-and-running-code"},"https://github.com/brikis98/terraform-up-and-running-code"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/brikis98/terraform-up-and-running-code/tree/master/code/terraform"},"https://github.com/brikis98/terraform-up-and-running-code/tree/master/code/terraform"))))),(0,r.kt)("h2",{id:"automation-tools"},"Automation tools"),(0,r.kt)("h3",{id:"unit-test"},"Unit Test"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.hashicorp.com/sentinel/"},"https://www.hashicorp.com/sentinel/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://terratest.gruntwork.io/"},"https://terratest.gruntwork.io/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://serverspec.org/"},"https://serverspec.org/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.pulumi.com/blog/testing-your-infrastructure-as-code-with-pulumi/"},"https://www.pulumi.com/blog/testing-your-infrastructure-as-code-with-pulumi/"))),(0,r.kt)("h4",{id:"references-1"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://speakerdeck.com/jen20/terraform-without-the-mess?slide=48"},"2020: Terraform Without the mess")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jen20/hashidays-nyc"},"2017: HashiDays New York 2017")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.contino.io/insights/top-3-terraform-testing-strategies-for-ultra-reliable-infrastructure-as-code"},"2017: Top 3 Terraform Testing Strategies for Ultra-Reliable Infrastructure-as-Code"))),(0,r.kt)("h3",{id:"atlantis"},"Atlantis"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.runatlantis.io/"},"Atlantis")," is a Terraform Pull Request Automation."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a Terrafrom Pull Request.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Atlantis automatically runs ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform plan")," and comments back on the pull request.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then, someone reviews the plan and approves the PR.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You comment ",(0,r.kt)("inlineCode",{parentName:"p"},"atlantis apply"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Atlantis runs ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply")," and comments back the pull request.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Merge the pull request."))),(0,r.kt)("h3",{id:"terraform-compilance"},"terraform-compilance"),(0,r.kt)("p",null,"Compilance as Code."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"terraform-compliance")," is a lightweight, security and compliance focused test framework against terraform to enable negative testing capability for your infrastructure-as-code."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://terraform-compliance.com/"},"Homepage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/terraform-compliance/cli"},"GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.slideshare.net/EmreErkunt/compliance-as-code-with-terraformcompliance"},"SlideShare presentation"))),(0,r.kt)("h3",{id:"kubestack"},"Kubestack"),(0,r.kt)("p",null,"Free and Open Source GitOps framework to codify your custom platform stack using Terraform."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.kubestack.com/"},"Homepage"))),(0,r.kt)("h2",{id:"ansible"},"Ansible"),(0,r.kt)("h3",{id:"produce-ansible-inventory"},"Produce Ansible inventory"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create instances.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instances.tf"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlc"},'### The bastionresource\n"aws_instance" "bastion" {\n  ami = var.ami\n  availability_zone = var.az\n  instance_type = "t2.micro"\n  key_name = var.ssh-key\n  vpc_security_group_ids = [aws_default_security_group.sg-public.id]\n  subnet_id = aws_subnet.public.id\n  tags = {\n    Name = "Bastion"\n    Projet = var.projet\n    Application = var.Application\n  }\n  volume_tags = {\n    Name = "Bastion"\n    Projet = var.projet\n    Application = var.Application\n  }\n  root_block_device {   volume_size = 8  }}\n\n  ### The Elastic IP for the Bastion\n  resource "aws_eip" "eip-bastion" {\n    vpc = true\n    instance = aws_instance.bastion.id\n    associate_with_private_ip = aws_instance.bastion.private_ip\n    tags = {\n      Name = "bastion"\n      Projet = var.projet\n      Application = var.Application\n    }\n  }\n\n  ### The private instances\n  resource "aws_instance" "i-private" {\n    ami = var.ami\n    availability_zone = var.az\n    instance_type = var.ec2_type\n    key_name = var.ssh-key\n    vpc_security_group_ids = [aws_security_group.sg-private.id]\n    subnet_id = aws_subnet.private.id\n    tags = {\n      Name = "i-private"\n      Projet = var.projet\n      Application = var.Application\n    }\n    volume_tags = {\n      Name = "i-private"\n      Projet = var.projet\n      Application = var.Application\n    }\n    root_block_device {\n      volume_size = 8\n    }\n    ebs_block_device {\n      device_name = "/dev/sdb"\n      volume_type = var.ebs_type\n      volume_size = 8\n    }\n    count = var.ec2_nb\n  }\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Output the information using resource type ",(0,r.kt)("inlineCode",{parentName:"li"},"local_file")," with a filename attribute set to ",(0,r.kt)("inlineCode",{parentName:"li"},"inventory"),". It's attribute ",(0,r.kt)("inlineCode",{parentName:"li"},"content")," is the return of the ",(0,r.kt)("inlineCode",{parentName:"li"},"templatefile")," function")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"outputs.tf"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'### The Ansible inventory file\nresource "local_file" "AnsibleInventory" {\n  content = templatefile("inventory.tmpl", {\n    bastion-dns = aws_eip.eip-bastion.public_dns,\n    bastion-ip = aws_eip.eip-bastion.public_ip,\n    bastion-id = aws_instance.bastion.id,\n    private-dns = aws_instance.i-private.*.private_dns,\n    private-ip = aws_instance.i-private.*.private_ip,\n    private-id = aws_instance.i-private.*.id\n  })\n  filename = "inventory"\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"The template.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[bastion]\n${bastion-dns} ansible_host=${bastion-ip} # ${bastion-id}\n[servers]\n%{ for index, dns in private-dns ~}\n${dns} ansible_host=${private-ip[index]} # ${private-id[index]}\n%{ endfor ~}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[bastion]\nec2-99-79-28-17.ca-central-1.compute.amazonaws.com ansible_host=99.79.28.17 # i-0d8c4197a22797\n\n[servers]\nip-10-1-2-114.ca-central-1.compute.internal ansible_host=10.1.2.114 # i-09752396073622ba6\nip-10-1-2-251.ca-central-1.compute.internal ansible_host=10.1.2.251 # i-0af7dddbe098fb1c9\nip-10-1-2-35.ca-central-1.compute.internal ansible_host=10.1.2.35 # i-0de0126836e547eba\nip-10-1-2-109.ca-central-1.compute.internal ansible_host=10.1.2.109 # i-060a362c0165ab3f2\nip-10-1-2-185.ca-central-1.compute.internal ansible_host=10.1.2.185 # i-07bd962925faafa3b\nip-10-1-2-93.ca-central-1.compute.internal ansible_host=10.1.2.93 # i-0fc357d17b62b1497\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Provisioner")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cat <<ENDL > playbook.yml\n---\n- hosts: all\nbecome: yes\nbecome_user: root\nbecome_method: sudo\ntasks:\n- name: Install nginx\napt:\nname: nginx\nstate: latest\n- name: Restart Nginx\nservice: name=nginx state=restarted\nbecome: yes\nENDL\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'provisioner "local-exec" {\n  command = "sleep 120; ansible-playbook -i \'${digitalocean_droplet.www-example.ipv4_address}\' playbook.yml"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkbynet.com/en/news/produce-an-ansible-inventory-with-terraform"},"https://www.linkbynet.com/en/news/produce-an-ansible-inventory-with-terraform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alexharv074.github.io/2019/11/23/adventures-in-the-terraform-dsl-part-x-templates.html#example-4-if-else-endif-example"},"https://alexharv074.github.io/2019/11/23/adventures-in-the-terraform-dsl-part-x-templates.html#example-4-if-else-endif-example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.splunk.com/en_us/blog/devops/writing-ansible-playbooks-for-new-terraform-servers.html"},"https://www.splunk.com/en_us/blog/devops/writing-ansible-playbooks-for-new-terraform-servers.html"))),(0,r.kt)("h2",{id:"references-2"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.terraform.io/intro"},"Homepage"))))}c.isMDXComponent=!0}}]);