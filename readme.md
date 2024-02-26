Example to run app.js 
- docker run -p 3001:3000 -d azuredocker:latest --version -> return version from config.json
- docker run -p 3001:3000 -d azuredocker:latest --bump -> increment the version
- docker run -p 3001:3000 -d azuredocker:latest --output 'new.txt' -> write version into new file

Example to run calculator.js
- can change value inside config.json
- run 'node calculator.js'