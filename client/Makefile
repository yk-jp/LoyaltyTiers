run:
	docker-compose -f docker-compose.yml up

# delete image
delete-i-client:
	docker rmi loyaltytiers-client

# delete image forcefully
delete-if-client:
	docker rmi -f loyaltytiers-client

# delete container
delete-c-client:
	docker rm loyaltytiers-client

delete-all:
	$(MAKE) delete-c-client ; $(MAKE) delete-i-client