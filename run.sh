#!/bin/bash

# Default command
CMD="node app.js --version"
CMD2="node app.js --bump"
CMD3="node app.js --output"


# Check if arguments are provided
if [ "$#" -ne 0 ]; then
    CMD="node app.js $@"
fi

# Execute the command
exec $CMD
exec $CMD2
exec $CMD3
