source './env.sh'

clear

echo '$ bun run src/index.js'

bun wiptest src/
bun run src/index.js
