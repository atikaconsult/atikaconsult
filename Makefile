.PHONY: serve
CWD=$(shell pwd)
JEKYLL_VERSION=3.7
serve:
	docker run \
		--rm \
		-it \
		-p "4000:4000" \
		-v "$(CWD):/srv/jekyll" \
		jekyll/jekyll:${JEKYLL_VERSION} \
		jekyll serve
