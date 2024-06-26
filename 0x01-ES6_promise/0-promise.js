export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    const success = true; // Change this to false to test rejection

    if (success) {
      resolve('Success'); // Resolve with a success message
    } else {
      reject(new Error('Failed')); // Reject with an error message
    }
  });
}
