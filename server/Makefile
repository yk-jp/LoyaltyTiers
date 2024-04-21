run:
	docker-compose -f docker-compose.yml up

# delete image
delete-i-server:
	docker rmi loyaltytiers-server

# delete image forcefully
delete-if-server:
	docker rmi -f loyaltytiers-server

# delete container
delete-ic-postgres:
	docker rm loyaltytiers-postgres

delete-all-server:
	$(MAKE) delete-if-server ; $(MAKE) delete-ic-postgres