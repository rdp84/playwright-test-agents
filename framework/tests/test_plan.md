# Test Plan: User Login and Dashboard Interaction

## Application Overview
A single-page web application with two main features:
1. **Login Page**: Email and password login form
2. **Dashboard**: Interactive dashboard with modal and data loading capabilities

---

## Test Suite 1: Login Page Functionality

### Test Case 1.1: Successful Login with Valid Credentials
**Objective**: Verify that a user can successfully log in with valid email and password credentials

**Prerequisites**:
- User is on the login page
- Application is loaded

**Steps**:
1. Navigate to the application home page
2. Verify the login page title displays "Login"
3. Enter email address "testuser@example.com" in the Email field
4. Enter password "password123" in the Password field
5. Click the "Login" button

**Expected Result**:
- User is redirected to the Dashboard page
- Dashboard heading displays "Dashboard"
- Dashboard contains "Open Modal" and "Load Data" buttons

**Success Criteria**:
- Page title remains "Test App"
- Login form is replaced with dashboard content
- No error messages are displayed

---

### Test Case 1.2: Empty Email Field Validation
**Objective**: Verify that the login form requires an email address

**Prerequisites**:
- User is on the login page

**Steps**:
1. Navigate to the application home page
2. Leave the Email field empty
3. Enter password "password123" in the Password field
4. Click the "Login" button

**Expected Result**:
- Login form is NOT submitted
- User remains on the login page
- Browser displays HTML5 validation message for required email field

**Success Criteria**:
- Form submission is prevented by browser validation
- User can see the validation message

---

### Test Case 1.3: Empty Password Field Validation
**Objective**: Verify that the login form requires a password

**Prerequisites**:
- User is on the login page

**Steps**:
1. Navigate to the application home page
2. Enter email address "testuser@example.com" in the Email field
3. Leave the Password field empty
4. Click the "Login" button

**Expected Result**:
- Login form is NOT submitted
- User remains on the login page
- Browser displays HTML5 validation message for required password field

**Success Criteria**:
- Form submission is prevented by browser validation
- User can see the validation message

---

### Test Case 1.4: Both Fields Empty
**Objective**: Verify that the login form requires both email and password

**Prerequisites**:
- User is on the login page

**Steps**:
1. Navigate to the application home page
2. Leave both Email and Password fields empty
3. Click the "Login" button

**Expected Result**:
- Login form is NOT submitted
- User remains on the login page
- Browser displays validation message

**Success Criteria**:
- Form submission is prevented
- User can see validation messages

---

### Test Case 1.5: Invalid Email Format
**Objective**: Verify that the login form validates email format

**Prerequisites**:
- User is on the login page

**Steps**:
1. Navigate to the application home page
2. Enter "notanemail" (without @ symbol) in the Email field
3. Enter password "password123" in the Password field
4. Click the "Login" button

**Expected Result**:
- Login form is NOT submitted
- User remains on the login page
- Browser displays email format validation message

**Success Criteria**:
- Form validation prevents submission
- User can see the validation message

---

### Test Case 1.6: Special Characters in Email
**Objective**: Verify that the form accepts valid email formats with special characters

**Prerequisites**:
- User is on the login page

**Steps**:
1. Navigate to the application home page
2. Enter "user+test.name@sub.example.com" in the Email field
3. Enter password "validpassword" in the Password field
4. Click the "Login" button

**Expected Result**:
- Login form is submitted
- User is redirected to Dashboard page

**Success Criteria**:
- Valid email format is accepted
- User successfully logs in

---

### Test Case 1.7: Very Long Email Address
**Objective**: Verify that the form accepts long but valid email addresses

**Prerequisites**:
- User is on the login page

**Steps**:
1. Navigate to the application home page
2. Enter a very long but valid email "verylongemailaddress.testuser+123456789@subdomain.example.co.uk" in the Email field
3. Enter password "password123" in the Password field
4. Click the "Login" button

**Expected Result**:
- Login form is submitted successfully
- User is redirected to Dashboard page

**Success Criteria**:
- Long email address is accepted
- User successfully logs in

---

### Test Case 1.8: Very Long Password
**Objective**: Verify that the form accepts long passwords

**Prerequisites**:
- User is on the login page

**Steps**:
1. Navigate to the application home page
2. Enter email address "testuser@example.com" in the Email field
3. Enter a very long password "aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?" in the Password field
4. Click the "Login" button

**Expected Result**:
- Login form is submitted successfully
- User is redirected to Dashboard page

**Success Criteria**:
- Long password is accepted
- User successfully logs in

---

### Test Case 1.9: Password Field Masking
**Objective**: Verify that the password field masks input for security

**Prerequisites**:
- User is on the login page

**Steps**:
1. Navigate to the application home page
2. Click the Password field
3. Enter password "password123"
4. Observe the input field

**Expected Result**:
- Password characters are masked/hidden (shown as dots or asterisks)
- Actual password text is not visible on screen

**Success Criteria**:
- Password is masked in the input field
- Only dots or asterisks are displayed

---

### Test Case 1.10: Login Button is Clickable
**Objective**: Verify that the login button is accessible and clickable

**Prerequisites**:
- User is on the login page

**Steps**:
1. Navigate to the application home page
2. Locate the "Login" button
3. Verify the button is visible and enabled
4. Hover over the button to check for visual feedback

**Expected Result**:
- Login button is visible on the page
- Button is enabled and clickable
- Button may show hover effects

**Success Criteria**:
- Button is present and interactive
- User can click the button

---

## Test Suite 2: Dashboard Functionality

### Test Case 2.1: Dashboard Loads After Successful Login
**Objective**: Verify that the dashboard page loads successfully after login

**Prerequisites**:
- User has successfully logged in
- User is on the dashboard page

**Steps**:
1. Perform login with email "user@example.com" and password "password123"
2. Wait for page to load
3. Verify dashboard content is displayed

**Expected Result**:
- Dashboard page title remains "Test App"
- Dashboard heading displays "Dashboard"
- Page contains "Open Modal" button
- Page contains "Load Data" button

**Success Criteria**:
- All dashboard elements are visible
- No error messages are displayed

---

### Test Case 2.2: Open Modal Button Displays Modal
**Objective**: Verify that clicking "Open Modal" button displays a modal dialog

**Prerequisites**:
- User is logged in and viewing the dashboard

**Steps**:
1. Locate the "Open Modal" button on the dashboard
2. Click the "Open Modal" button
3. Verify a modal appears

**Expected Result**:
- A modal dialog appears on screen
- Modal displays the message "Hello from the modal!"
- Modal contains a "Close" button

**Success Criteria**:
- Modal is displayed
- Modal message is visible and correct
- Close button is present

---

### Test Case 2.3: Close Modal Button Closes Modal
**Objective**: Verify that clicking the "Close" button closes the modal

**Prerequisites**:
- User is on the dashboard
- Modal is currently displayed

**Steps**:
1. Click the "Open Modal" button to display the modal
2. Verify the modal is displayed
3. Click the "Close" button in the modal

**Expected Result**:
- Modal is removed from the page
- Dashboard content is visible again
- "Open Modal" and "Load Data" buttons are still present

**Success Criteria**:
- Modal is closed and no longer visible
- Dashboard is functional

---

### Test Case 2.4: Load Data Button Displays List Items
**Objective**: Verify that clicking "Load Data" displays a list of items after a loading period

**Prerequisites**:
- User is logged in and viewing the dashboard
- Modal is not displayed (or is closed)

**Steps**:
1. Locate the "Load Data" button on the dashboard
2. Click the "Load Data" button
3. Wait approximately 1-2 seconds for data to load
4. Verify a list appears below the buttons

**Expected Result**:
- A list appears on the page containing three items:
  - "Alpha"
  - "Beta"
  - "Gamma"
- List items are displayed as a bullet list or numbered list

**Success Criteria**:
- All three list items are visible
- List items contain the correct text

---

### Test Case 2.5: Load Data Shows Loading State
**Objective**: Verify that a loading indicator appears while data is being loaded

**Prerequisites**:
- User is logged in and viewing the dashboard

**Steps**:
1. Locate the "Load Data" button on the dashboard
2. Click the "Load Data" button
3. Immediately observe the list container area
4. Wait for the list to appear

**Expected Result**:
- A loading spinner appears briefly in the list container
- After 1-2 seconds, the spinner is replaced with the data list

**Success Criteria**:
- Loading indicator is displayed
- Data appears after the loading period

---

### Test Case 2.6: Multiple Modal Opens and Closes
**Objective**: Verify that the modal can be opened and closed multiple times

**Prerequisites**:
- User is logged in and viewing the dashboard

**Steps**:
1. Click "Open Modal" button
2. Verify modal displays
3. Click "Close" button
4. Verify modal is closed
5. Click "Open Modal" button again
6. Verify modal displays with correct content
7. Click "Close" button again

**Expected Result**:
- Modal opens and closes successfully on first attempt
- Modal opens and closes successfully on second attempt
- Each time the modal displays, it shows the correct message

**Success Criteria**:
- Modal can be opened and closed multiple times
- Modal content is correct each time

---

### Test Case 2.7: Load Data Can Be Called Multiple Times
**Objective**: Verify that the "Load Data" button can be clicked multiple times

**Prerequisites**:
- User is logged in and viewing the dashboard

**Steps**:
1. Click "Load Data" button
2. Wait for list to load
3. Verify list is displayed
4. Click "Load Data" button again
5. Wait for list to reload
6. Verify list is updated

**Expected Result**:
- First click loads the list successfully
- Second click resets the list container and reloads the list
- Both times, the same three items (Alpha, Beta, Gamma) are displayed

**Success Criteria**:
- Load Data function works multiple times
- List is correctly populated each time

---

### Test Case 2.8: Modal and Load Data Interaction
**Objective**: Verify that modal and load data features work independently

**Prerequisites**:
- User is logged in and viewing the dashboard

**Steps**:
1. Click "Open Modal" button
2. Verify modal is displayed
3. Click "Load Data" button (while modal is open)
4. Verify if modal is still visible or if it affects data loading
5. Close modal if still open
6. Verify list was loaded

**Expected Result**:
- Modal can be opened while loading data
- Load data button can be clicked while modal is open
- Both features work together without conflicts

**Success Criteria**:
- Both features are independently functional
- No errors occur when using both together

---

### Test Case 2.9: Dashboard Elements Layout
**Objective**: Verify that dashboard elements are properly positioned and visible

**Prerequisites**:
- User is logged in and viewing the dashboard

**Steps**:
1. View the dashboard page
2. Verify the "Dashboard" heading is at the top
3. Verify "Open Modal" and "Load Data" buttons are below the heading
4. Verify buttons are side-by-side or stacked appropriately
5. Verify list container is below the buttons

**Expected Result**:
- Dashboard heading is clearly visible at the top
- Buttons are accessible and properly spaced
- Layout is clean and organized
- All elements are visible without horizontal scrolling (on standard desktop)

**Success Criteria**:
- Layout is correct and professional
- All elements are accessible

---

### Test Case 2.10: List Items Have Correct Test IDs
**Objective**: Verify that each list item has the correct test identifier

**Prerequisites**:
- User is logged in and viewing the dashboard
- Data list has been loaded

**Steps**:
1. Click "Load Data" button
2. Wait for list to load
3. Verify each list item has the correct data-test-id attribute:
   - First item should have data-test-id="li-Alpha"
   - Second item should have data-test-id="li-Beta"
   - Third item should have data-test-id="li-Gamma"

**Expected Result**:
- Each list item is properly identified with the correct test ID
- Test IDs follow the pattern "li-{ItemName}"

**Success Criteria**:
- All test IDs are correctly assigned
- Test automation can target specific list items

---

## Test Suite 3: User Journey Integration Tests

### Test Case 3.1: Complete User Flow - Login and Explore Dashboard
**Objective**: Verify the complete user journey from login to dashboard interaction

**Prerequisites**:
- Application is loaded

**Steps**:
1. Load the application home page
2. Enter email "user@example.com"
3. Enter password "mypassword"
4. Click Login button
5. Verify dashboard is displayed
6. Click "Open Modal" button
7. Verify modal displays with message
8. Click "Close" button in modal
9. Click "Load Data" button
10. Wait for data to load
11. Verify list items are displayed

**Expected Result**:
- User successfully logs in
- Dashboard is displayed correctly
- Modal feature works
- Data loading feature works
- All elements respond as expected

**Success Criteria**:
- Complete user flow executes without errors
- All features are functional

---

### Test Case 3.2: Back Button Behavior After Login
**Objective**: Verify that browser back button behavior is appropriate after login

**Prerequisites**:
- User has successfully logged in and is on dashboard

**Steps**:
1. Successfully log in to the dashboard
2. Click the browser back button
3. Observe the page behavior

**Expected Result**:
- Browser back button either:
  - Returns to login page, or
  - Takes user back to previous page in history

**Success Criteria**:
- Browser back button behaves predictably
- No errors occur

---

### Test Case 3.3: Page Refresh on Dashboard
**Objective**: Verify that page refresh behavior on dashboard is handled appropriately

**Prerequisites**:
- User has successfully logged in and is on dashboard

**Steps**:
1. Successfully log in to the dashboard
2. Load some data by clicking "Load Data"
3. Refresh the page (F5 or Cmd+R)
4. Observe the page behavior

**Expected Result**:
- Page refreshes and displays the login page (session is reset)
- OR page displays the dashboard but without the loaded data

**Success Criteria**:
- Page refresh is handled appropriately
- Application remains functional

---

## Test Suite 4: Edge Cases and Error Scenarios

### Test Case 4.1: Login Form Reset Between Attempts
**Objective**: Verify that form fields are cleared or maintained appropriately between login attempts

**Prerequisites**:
- User is on the login page

**Steps**:
1. Enter email "testuser@example.com"
2. Enter password "wrongpassword"
3. Click Login button (form will submit since no validation prevents it)
4. User should now be on dashboard (this app doesn't validate credentials)

**Expected Result**:
- Form submits with any credentials
- User navigates to dashboard regardless of credentials entered

**Success Criteria**:
- Form behaves as designed (accepts any input)

---

### Test Case 4.2: Rapid Modal Open/Close
**Objective**: Verify that rapid modal interactions don't cause issues

**Prerequisites**:
- User is logged in and viewing the dashboard

**Steps**:
1. Click "Open Modal" button
2. Immediately click "Close" button before modal animation completes (if any)
3. Repeat 5 times rapidly

**Expected Result**:
- Each modal open and close action completes
- No broken state or orphaned modal elements
- Dashboard remains functional

**Success Criteria**:
- Rapid interactions don't break the application
- No memory leaks or visual glitches

---

### Test Case 4.3: Rapid Load Data Clicks
**Objective**: Verify that clicking "Load Data" multiple times rapidly doesn't cause issues

**Prerequisites**:
- User is logged in and viewing the dashboard

**Steps**:
1. Click "Load Data" button
2. Before data finishes loading, click "Load Data" button again
3. Verify the behavior

**Expected Result**:
- Either the first load is interrupted and a new load starts
- OR the previous load completes and then new load starts
- OR only one load operation is performed

**Success Criteria**:
- Application handles rapid clicks gracefully
- Data eventually displays correctly
- No errors occur

---

### Test Case 4.4: Modal While Data is Loading
**Objective**: Verify that opening modal doesn't interfere with ongoing data load

**Prerequisites**:
- User is logged in and viewing the dashboard

**Steps**:
1. Click "Load Data" button
2. While data is loading (within the 1 second delay), click "Open Modal"
3. Verify both operations proceed
4. Close modal
5. Verify data list is displayed

**Expected Result**:
- Modal opens successfully even while data is loading
- Data loading continues in background
- After modal is closed, data is visible

**Success Criteria**:
- Modal and data loading don't interfere
- Both features work simultaneously

---

### Test Case 4.5: Console Error Check
**Objective**: Verify that no console errors occur during normal usage

**Prerequisites**:
- Browser developer console is open
- User is testing the application

**Steps**:
1. Open browser developer console (F12)
2. Navigate through the application:
   - Log in
   - Open/close modal
   - Load data
   - Perform multiple interactions
3. Monitor the console for any errors

**Expected Result**:
- No JavaScript errors appear in console
- Console may contain informational messages or warnings, but no errors

**Success Criteria**:
- Application runs without errors
- No exceptions are thrown

---

## Test Suite 5: Accessibility Tests

### Test Case 5.1: Form Labels Accessibility
**Objective**: Verify that form labels are properly associated with input fields

**Prerequisites**:
- User is on the login page

**Steps**:
1. Using accessibility tools or browser inspection:
   - Verify Email field has associated label "Email"
   - Verify Password field has associated label "Password"
2. Tab through the form using keyboard
3. Verify each field is accessible via keyboard navigation

**Expected Result**:
- Labels are properly associated with input fields
- Screen readers can identify the fields
- Keyboard navigation works

**Success Criteria**:
- Form is accessible to users with disabilities
- Keyboard navigation is functional

---

### Test Case 5.2: Button Accessibility
**Objective**: Verify that all buttons are keyboard accessible

**Prerequisites**:
- User is on the login page

**Steps**:
1. Use Tab key to navigate to all buttons
2. Use Enter key to activate buttons
3. Verify each button can be accessed and activated

**Expected Result**:
- All buttons are reachable via keyboard Tab navigation
- All buttons can be activated with Enter key
- Focus indicator is visible

**Success Criteria**:
- Full keyboard navigation support
- All buttons are accessible

---

### Test Case 5.3: Page Title Clarity
**Objective**: Verify that the page title is descriptive and helpful

**Prerequisites**:
- Application is loaded

**Steps**:
1. Check the browser tab title
2. Verify it accurately describes the page content

**Expected Result**:
- Page title is "Test App"
- Title is consistent across pages
- Title is descriptive enough for users/screen readers

**Success Criteria**:
- Page title is clear and descriptive

---

## Notes for Test Execution

- **Browser Compatibility**: These tests should be run on the latest versions of Chrome/Chromium
- **Test Data**: The application accepts any credentials for login (no server validation)
- **Loading Time**: The "Load Data" feature has a simulated 1-second delay to mimic data fetching
- **Modal Styling**: Modal styling is defined in CSS (check style.css for visual requirements)
- **Test IDs**: All interactive elements use `data-test-id` attributes for reliable element selection

---

## Test Execution Summary Table

| Test Suite | Number of Tests | Coverage Area |
|---|---|---|
| Login Page Functionality | 10 | Form validation, input handling, edge cases |
| Dashboard Functionality | 10 | Button interactions, modal, data loading |
| User Journey Integration | 3 | Complete flows, navigation, page states |
| Edge Cases | 5 | Rapid interactions, concurrent operations |
| Accessibility | 3 | Keyboard navigation, labels, titles |
| **TOTAL** | **31** | **Comprehensive application coverage** |

---

## Assumptions

1. The application has no server-side authentication (credentials are not validated)
2. The application is running on `http://localhost:5173`
3. Browser JavaScript is enabled
4. No network latency beyond the simulated 1-second delay in data loading
5. The application uses modern browser APIs that work on Chrome/Chromium browsers
6. Modal, spinner, and list components render correctly with the provided CSS styling
