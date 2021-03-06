APP_BUNDLE_ID=com.dylanschroder.wutdo

## General

# Run this first to run the project locally
initial-setup:
	yarn install
	${MAKE} setup-ios
	# TODO: create an android make set commands

# This will run the daemon (you can stop a daemon by doing CTRL + C)
run:
	yarn start

lint-fix:
	yarn lint-fix

lint:
	yarn lint

test:
	${MAKE} lint-fix
	yarn test

test-watch:
	${MAKE} lint-fix
	yarn test-watch

## Mac only commands:
## Other neat commands: https://medium.com/xcblog/simctl-control-ios-simulators-from-command-line-78b9006a20dc
setup-ios:
	( cd ios/ ; pod install )
	${MAKE} build-ios

run-ios:
	${MAKE} start-simulator
	${MAKE} run

# This recompiles the project. Use this if you made any environment changes.
build-ios:
	yarn ios

list-ios-devices:
	xcrun simctl list

open-app:
	xcrun simctl launch booted ${APP_BUNDLE_ID}

start-simulator:
	open -a Simulator --args -CurrentDeviceUDID booted
	${MAKE} open-app