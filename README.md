
# Context Reducer
The task is to create a react based application which uses the concept of `useContext` `useState` for building an application to implement the following application.


The Application should support following features.
- <b>Login Button</b> : When the user clicks the login button it should show the following text "Current user:rohan, isAuthenticated: Yes".  
- <b>Signout button</b> :  When the user clicks the signout button it should show the following text "Current user:, isAuthenticated: No".
- <b>Input box</b> : The user must be able to enter data in the input box.
- <b>Add button</b> : On clicking on this button user can add the data entered in the input box to a list.
- <b>Remove button</b> : On clicking on this button user can delete the particular item.
- <b>Clear button</b> : On clicking on this button user can delete all the elements from the list.

###  Instructions

- id for Login button should be `login-btn` and the element that shows the text "Current user:rohan, isAuthenticated: Yes" should have id as `current-user`
- id for Signout button should be `signout` and the element.
- id for input box should be `shopping-input` and the item added to list should have dynamic id as `item-{name_of_the_item_added_to_list}`.
- id for remove button of every item should have dynamic id as id=`remove-{name_of_the_item_added_to_list}`.
- id for clear list button should be `clear-list`

Below is a representation of how your webpage should look like.

![image](https://user-images.githubusercontent.com/78348500/217309737-375620ac-1ea2-4d2f-9cf0-510321cf4fb5.png)
