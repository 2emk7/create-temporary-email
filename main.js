// First, we require the 'uuid' module, which provides a function for generating random UUIDs
const { v4: uuidv4 } = require('uuid');

// Next, we define the function that will generate a temporary email address
function generateTempEmail() {
  // We generate a random UUID
  const uuid = uuidv4();

  // We use the UUID to create a temporary email address in the form of [UUID]@example.com
  const tempEmail = `${uuid}@example.com`;

  // Finally, we return the temporary email address
  return tempEmail;
}

// Now we can use the function to generate a temporary email address
const tempEmail = generateTempEmail();

console.log(`The temporary email address is: ${tempEmail}`);
