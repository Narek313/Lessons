// ___________________________Heap______________________________

// Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.

//______________________Event Loop__________________________________

// The event loop got its name because of how it's usually implemented, which usually resembles:

// while (queue.waitForMessage()) {
//     queue.processNextMessage()
//   }

// queue.waitForMessage() waits synchronously for a message to arrive (if one is not already available and waiting to be handled).

//________________________________________________________________

const s = new Date().getSeconds();
console.log(s)

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500)

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}