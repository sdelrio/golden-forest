# Inspec.io

[Chef Inspec](https://www.chef.io/products/chef-inspec) provides a language for describing security and compliance rules that can be shared between software engineers, operations, and security engineers.

Compliance, security, and other policy requirements become automated tests that can be run against traditional servers, containers, and cloud APIs, ensuring enforced consistent standards in every managed environment, at every stage of development.

## Generate JUnit.xml

```bash
set +x
cd /packer
export machinename=win10-updated

vboxmanage import "./output-${machinename}/${machinename}.ovf" --vsys 0 --unit 4 --ignore
vboxmanage list vms
# vboxmanage modifyvm "${machinename}" --natpf1 "winrm,tcp,,5985,,5985"
vboxmanage showvminfo "${machinename}"
vboxmanage startvm "${machinename}" --type headless
sleep 5
vboxmanage list runningvms
export RC=0

inspec exec test/${machinename} -t winrm://mywindowsuser@localhost -p 5985 --password 'soporte' || inspec exec test/${machinename} -t winrm://mywindowsuser@localhost -p 5985 --password 'mywindowspassword' --format=junit > test/report-${machinename}.xml || RC=1
chmod g+w test/report-${machinename}.xml

vboxmanage controlvm "${machinename}" poweroff
vboxmanage unregistervm "${machinename}" -delete

cd -
cp /packer/test/report-${machinename}.xml .

exit $RC
```

## Articles

* [InSpec - Inspect Your Infrastructure](https://blog.ragnarson.com/2017-03-13-inspec-inspect-your-infrastructure/)
* [https://community.chef.io/tools/chef-inspec](https://community.chef.io/tools/chef-inspec)

