run:
	docker-compose -f docker-compose.yml up

# delete image
delete-i-server:
	docker rmi loyaltytiers-server

# delete image forcefully
delete-if-server:
	docker rmi -f loyaltytiers-server

delete-c-server:
	docker rm loyaltytiers-server

# delete container
delete-c-postgres:
	docker rm loyaltytiers-postgres

delete-all-server:
	$(MAKE) delete-c-server ; $(MAKE) delete-if-server ; $(MAKE) delete-c-postgres