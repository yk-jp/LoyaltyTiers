CLIENT_MAKE=cd client && $(MAKE)
SERVER_MAKE=cd server && $(MAKE)

run:
	docker-compose -f docker-compose.yml up

stop:
	docker-compose -f docker-compose.yml down

# delete image
delete-i-server:
	$(SERVER_MAKE) delete-i-server

# delete postgres container
delete-ic-postgres:
	$(SERVER_MAKE) delete-ic-postgres

delete-all-server:
	$(SERVER_MAKE) delete-all-server

# delete client data
delete-all-client:
	$(CLIENT_MAKE) delete-all

# delete-all
delete-all:
	$(MAKE) delete-all-server ; $(MAKE) delete-all-client