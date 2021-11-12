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
	@npx docusaurus start


upgrade:	## Docusaurus upgrade version
	@yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest

deploy:	## Deploy to github pages
	@GIT_USER=$(USER) USE_SSH=true yarn deploy

