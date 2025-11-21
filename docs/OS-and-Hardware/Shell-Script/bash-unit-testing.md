# Unit testing

## Sample script

```bash
#!/bin/bash

AMOUNT=$(ls crashdump | wc -l)

if [[ AMOUNT -ge 3 ]]; then
  mail -s “Alert: Too many files: $AMOUNT” alerts@toomanycrashes.com
fi
```

## Dockerfile runtime

```Dockerfile
FROM debian:stretch-slim

RUN mkdir /script
COPY script.sh /script/script.sh
RUN chmod +x /script/script.sh

ENTRYPOINT [ "/script/script.sh" ]
```

* Build image
```bash
docker build -t scriptimage:latest .
```

## Test script

```bash
#!/bin/bash

shopt -s expand_aliases

# Execute before all tests
alias mail="echo 'alert send' > output;false"
echo 'Test results for our image/script' > results.txt
count=0

# test 1 (less than or equal)
# Execute before test 1
alias ls="echo -e 'file1\nfile2'"
echo 'No output' > output

# Run script
. /script/script.sh

# Check result (assert)
((count=count+1))
if [[ $(< output) == 'alert send' ]]; then
  echo "$count. FAIL: Alert mail send while less than three files" >> results.txt
else
  echo "$count. PASS: Alert mail not send" >> results.txt
fi

# Prepare test 2 (greater than or equal)
alias ls="echo -e 'file1\nfile2\nfile3\nfile4'"
echo 'No output' > output

# Run script
. /script/script.sh

# Check result (assert)
((count=count+1))
if [[ $(< output) == 'alert send' ]]; then
  echo "$count. PASS: Alert mail send" >> results.txt
else
  echo "$count. FAIL: Did not send Alert mail" >> results.txt
fi

# After all
unalias ls
unalias mail

# Display test results
cat results.txt

# Return exit 1 if FAIL found
if grep -q "FAIL" results.txt; then
  echo "exiting with exit 1"
  exit 1
fi

```

## Dockerfile.test

```Dockerfile
FROM scriptimage:latest

COPY test.sh /script/test.sh
RUN chmod +x /script/test.sh

ENTRYPOINT [ "/script/test.sh" ]
```
* Build & run test image

```bash
docker build -t unittest:latest -f Dockerfile.test .
docker run unittest:latest
```


## References

* [Unit testing bash scripts the cloud-native way](https://www.flowfactor.be/unit-testing-bash-scripts-the-cloud-native-way/)

