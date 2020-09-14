build:
	docker build -t jfex .
run:
	docker-compose run --user $$(id -u) web sh
