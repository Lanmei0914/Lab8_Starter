# Lab 8 - Starter
Partners: Chenfei Yan

Check Your Understanding
- 1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
  -  Within a Github action that runs whenever code is pushed. Because runs whenver code is pushed allows all team members to see the test results to ensure that everyone knows that the code uploaded by each person is credible and correct. If manually run them locally before pushing code then the team members will not be able to determine if the uploaded code is correct. Run them all after all development is completed then it is too late and it is hard to debug if problems are found.

- 2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
  - No

- 3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
  - No, because unit test can only test one function. So if we want test the "message" feature of a messaging application, their must be more than two function to accomplish "message" feature. Unit test is poor at test two function interact with each other.

- 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
  - Yes, because we can only use one function to output TRUE (no more than 80 char) or FALSE (more than 80 char) to accomplish "max message length" feature. So we can use unit test to test it.  