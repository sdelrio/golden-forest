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

check:  ## Docusaurus MDX checker (usefull on MDX version migrations)
	@npx docusaurus-mdx-checker

.PHONY: build
build: ## Build page
	@DOCUSAURUS_IGNORE_SSG_WARNINGS=true yarn build

# Algolia doesn't mantain this scraper anymore
algolia:  ## Generate algolia index
	@if [ -f $$HOME/.algoliaenv ]; then \
		docker run --rm -it --env-file=$$HOME/.algoliaenv \
		  -e "CONFIG=$$(cat $$(pwd)/.algolia.docsearch.json| jq -r tostring)" \
		  algolia/docsearch-scraper:latest -v;\
	else \
		echo "[Error] Missing ~/.algoliaenv";\
		echo "[Info] File format:";\
		echo "APPLICATION_ID=1234567UVW";\
		echo "API_KEY=0123456789abcdef0123456789abcdef";\
	fi

# algolia docsearch fork:
# https://github.com/typesense/typesense-docsearch-scraper
typesense:
	@if [ -f $$HOME/.algoliaenv ]; then \
		docker run --rm -it --env-file=$$HOME/.algoliaenv \
		  -e "CONFIG=$$(cat $$(pwd)/.typesense.docsearch.json| jq -r tostring)" \
		  typesense/docsearch-scraper:latest -v;\
	else \
		echo "[Error] Missing ~/.algoliaenv";\
		echo "[Info] File format:";\
		echo "APPLICATION_ID=1234567UVW";\
		echo "API_KEY=0123456789abcdef0123456789abcdef";\
	fi

list-chars: ## List and summarize Fantasy Grounds character XML files
	@printf "%-20s | %-30s | %-20s | %-3s | %-20s\n" "File" "Character Name" "Race" "Lvl" "Class"
	@printf "%-20s | %-30s | %-20s | %-3s | %-20s\n" "--------------------" "------------------------------" "--------------------" "---" "--------------------"
	@for f in static/fg/chars/*.xml; do \
		name=$$(grep -E "^		<name type=\"string\">" "$$f" | sed 's/.*<name type="string">\(.*\)<\/name>.*/\1/' | head -n 1); \
		race=$$(grep -E "^		<race type=\"string\">" "$$f" | sed 's/.*<race type="string">\(.*\)<\/race>.*/\1/' | head -n 1); \
		level=$$(grep -E "^		<level type=\"number\">" "$$f" | sed 's/.*<level type="number">\(.*\)<\/level>.*/\1/' | head -n 1); \
		classes=$$(sed -n '/<classes>/,/<\/classes>/p' "$$f" | grep "<name type=\"string\">" | sed 's/.*<name type="string">\(.*\)<\/name>.*/\1/' | tr '\n' '/' | sed 's/\/$$//'); \
		if [ -z "$$name" ]; then \
			name=$$(grep -E "<name type=\"string\">" "$$f" | head -n 1 | sed 's/.*<name type="string">\(.*\)<\/name>.*/\1/'); \
		fi; \
		if [ -z "$$race" ]; then \
			race=$$(grep -E "<race type=\"string\">" "$$f" | head -n 1 | sed 's/.*<race type="string">\(.*\)<\/race>.*/\1/'); \
		fi; \
		filename=$$(basename "$$f"); \
		printf "%-20s | %-30s | %-20s | %-3s | %-20s\n" "$$filename" "$$name" "$$race" "$$level" "$$classes"; \
	done

test: ## Test web performance with unlighthouse
	npx unlighthouse --site https://www.lorien.cloud
