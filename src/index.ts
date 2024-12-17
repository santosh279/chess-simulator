function main() {
    const args = process.argv.slice(2);
    if(args.length !== 2) {
        console.log('Usage: npm start <piece> <position>');
        console.log('Example: npm start King D5');
        process.exit(1);
    }

    const [piece, position] = args;

    try {
        
    } catch (error) {
        console.error('Error:', (error as Error).message);
        process.exit(1);
    }
}

main();