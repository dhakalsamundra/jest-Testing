Feature: Form Validation

    I want to submit the Form data.

    Scenario: Submit the Form
        Given I open the form page in the browser
        When  I type the input
            | fullName | email | availability | flexiable |
            | Samundra | abcd@gmail.com | 10-15 | true |
        And I click on the Register Button
        Then Window alert will be shown
    
    Scenario: Validation error of email format
        Given I open the form page in the browser
        When  I type the input
            | fullName | email | availability | flexiable |
            | Samundra | abc   | 10-15        | true      |
        And I click on the Register Button
        Then error on email validation

    Scenario: RegEx error of Availability Input
        Given I open the form page in the browser
        When  I type the  availability input
            | fullName | email          | availability | flexiable |
            | Samundra | abcd@gmail.com | abc          | true      |
        And I click on the Register Button
        Then error on Availability RegEx

     Scenario: FullName mandatory Field!
        Given I open the form page in the browser
        When Input the field expect fullName
            | email          | availability | flexiable |
            | abcd@gmail.com | abc          | true      |
        And I click on the Register Button
        Then error on Mandatory field

    Scenario: Max length for FullName
        Given I open the form page in the browser
        When  I input more than maxumim character length in fullName
            | fullName                                                                                                                                      | email | availability | flexiable |
            | fafadfsadfsdafdfsadfgsadhjfsdbcjhbdashfjbsadhfjsadhfbcbjasdhfbdjsahfjsadhfkjsadhfsagfhsdgfkhsjadbfkjhsdabfghdsagfdshjafbklasdjfhbasdklfsadhgf | abcd@gmail.com | 10-15 | true |
        And I click on the Register Button
        Then error on FullName maximum length
