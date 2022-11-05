# Algolia

## Manual

### Running the crawl

* <https://docsearch.algolia.com/docs/legacy/run-your-own/#run-the-crawl-from-the-docker-image>

```bash
docker run -it --env-file=$HOME/.algoliaenv -e "CONFIG=$(cat $(pwd)/.docsearch.json| jq -r tostring)" algolia/docsearch-scraper -v
```

The env file `.algoliaenv` will have this foromat:

```
APPLICATION_ID=YOUR_APP_ID
API_KEY=YOUR_API_KEY
```


### Docsearch config 

Config files
* <https://docsearch.algolia.com/docs/legacy/config-file>

Sample:

* <https://github.com/algolia/docsearch-configs/blob/master/configs/docusaurus-2.json>

