#Successfully created "id0".
#Inside that directory, you can run several commands:
#
#  yarn start
#    Starts the development server.
#
#  yarn build
#    Bundles your website into static files for production.
#
#  yarn serve
#    Serves the built website locally.
#
#  yarn deploy
#    Publishes the website to GitHub pages.
#
#We recommend that you begin by typing:
#
#  cd id0
#  yarn start



.DEFAULT: help
help:	## Show this help menu.
	@echo "Usage: make [TARGET ...]"
	@echo ""
	@egrep -h "#[#]" $(MAKEFILE_LIST) | sed -e 's/\\$$//' | awk 'BEGIN {FS = "[:=].*?#[#] "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo ""


start:	## Docusaurus start develop server
	@if [ ! -d node_modules ]; then \
		yarn install; \
	fi;
	@npx docusaurus start


upgrade:	## Docusaurus upgrade version
	@yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest

upgrade-browserlist: ## Why you should do it regularly: https://github.com/browserslist/update-db#readme
	@npx update-browserslist-db@latest

upgrade-all:  ## Upgrade all yarn.lock dependencies
	@yarn upgrade

deploy:	## Deploy to github pages
	@GIT_USER=$(USER) USE_SSH=true yarn deploy


clean:  ## Clean node cache, build directoryo and .docusuarus
	@rm -rf node_modules .docusaurus build

.PHONY: build
build: ## Build page
	@yarn build

algolia:  ## Generate algolia index
	@if [ -f $$HOME/.algoliaenv ]; then \
		docker run --rm -it --env-file=$$HOME/.algoliaenv \
		  -e "CONFIG=$$(cat $$(pwd)/.docsearch.json| jq -r tostring)" \
		  algolia/docsearch-scraper -v;\
	else \
		echo "[Error] Missing ~/.algoliaenv";\
		echo "[Info] File format:";\
		echo "APPLICATION_ID=1234567UVW";\
		echo "API_KEY=0123456789abcdef0123456789abcdef";\
	fi

