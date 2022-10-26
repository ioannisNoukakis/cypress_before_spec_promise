to reproduce:

    npm run cy

then select "end to end"
then run the "fooBar" test
then check the node logs that start with "---->"

You'll see that the promise that completes after 10 seconds completes after the test.