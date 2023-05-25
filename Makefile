make: 
	npx @redocly/cli build-docs docs/api_reference/reference/iris.v1.0.0.yaml -o docs/_static/iris_api_reference_v1.0.0.html
	npx @redocly/cli build-docs docs/api_reference/reference/iris.v1.0.1.yaml -o docs/_static/iris_api_reference_v1.0.1.html
	npx @redocly/cli build-docs docs/api_reference/reference/iris.v1.0.2.yaml -o docs/_static/iris_api_reference_v1.0.2.html
	npx @redocly/cli build-docs docs/api_reference/reference/iris.v1.0.3.yaml -o docs/_static/iris_api_reference_v1.0.3.html
	npx @redocly/cli build-docs docs/api_reference/reference/iris.v2.0.0.yaml -o docs/_static/iris_api_reference_v2.0.0.html
	npx @redocly/cli build-docs docs/api_reference/reference/iris.v2.0.1.yaml -o docs/_static/iris_api_reference_v2.0.1.html
	mkdocs build
