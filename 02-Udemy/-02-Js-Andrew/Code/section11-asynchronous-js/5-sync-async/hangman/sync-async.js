//differences between Synchronoss and asynchronous execution.

//When we execute something synchronously, we start some sort of task like fetching a puzzle, and then we have to wait for it to finish before we move on to the next thing.

//When we execute something asynchronously, we can start some task, then we can actually get other work done before the task completes.

// So with the asynchronous approach, we're able to start a process and continue running other code.Eventually, the thing that we run completes We get our data back and we run the callback function.This allows us to keep running other code while we're waiting 100 milliseconds or whatever the time

// synchronous execution.We actually have to wait all 100 milliseconds, even if something else that runs later on isn't related to this data at all.

// So we can see that nothing's printing in the console and I'm clicking the checkbox and it's not actually accepting my changes.Now, after things print, after these synchronous request completes, I am able to check that checkbox.

//for the entire time the request was happening, the entire browser was locked up.

//This is something we want to avoid.
//Instead, we want to stick to asynchronous code, which allows us to do other things while we're waiting or our long running tasks like HTTP requests to complete.

// You might also see people refer to this as blocking and non blocking.

// synchronous -->This would be blocking it because it blocks other code from running before something finishes.

// asynchronous -->This would be non blocking because you can run other code
