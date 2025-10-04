// remixDeployment.js
const fs = require('fs');

const inputFile = 'index.html';
const outputFile = 'index.remix.html';

console.log('Creating Remix deployment version...');

let html = fs.readFileSync(inputFile, 'utf8');

// Uncomment the Farcade SDK script line
html = html.replace(
    /<!-- Farcade SDK: Add this line when deploying to Farcade\/Remix -->\s*<!-- (<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/@farcade\/game-sdk@latest\/dist\/index\.min\.js"><\/script>) -->/,
    '$1'
);

// Ensure STARTING_LEVEL is set to 1 for production
html = html.replace(
    /const STARTING_LEVEL = \d+;/,
    'const STARTING_LEVEL = 1;'
);

fs.writeFileSync(outputFile, html);

console.log(`✓ Created ${outputFile} with Farcade SDK enabled`);
console.log('✓ STARTING_LEVEL set to 1 for production');
console.log('Ready to deploy to Remix/Farcade!');