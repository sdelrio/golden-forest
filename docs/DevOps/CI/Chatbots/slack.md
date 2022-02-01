# Slack

Slack is a proprietary business communication platform developed by American software company Slack Technologies and now owned by Salesforce. Slack offers many IRC-style features, including persistent chat rooms (channels) organized by topic, private groups, and direct messaging. 

## Notification cleaner script

* `cleanslack.sh`

```
#!/bin/bash

TOKEN=xoxp-1111111111111111111111
BEFORE_GROUP=20180101
BEFORE_CHANNEL=$BEFORE_GROUP
RATE=1

for group in slack-channel-1 slack-channel-2 slack-channel-3; do
  slack-cleaner --token $TOKEN --message --group $group --bot --before $BEFORE_GROUP --rate $RATE --perform
  sleep 1
done

for channel in general random; do
  slack-cleaner --token $TOKEN --message --channel $channel --bot --before $BEFORE_CHANNEL --rate $RATE --perform
  sleep 1
done
```

### References

* <https://stackoverflow.com/questions/32824336/slack-clean-all-messages-8k-in-a-channel>

