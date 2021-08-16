Feature: The SwagLabs Website

  Scenario Outline: As a user, I can be able to place oder

    Given I am on the login page
    When I login with <username> and <password>
    Then click on add card in product
    Then click on hopping_cart_container
    Then click on checkout button
    Then enter personal details <firstname> and <lastname> and <postalcode> 
    Then click on continue
    Then click on finish button


    Examples:
      | username     | password              | firstname    | lastname      | postalcode |
      | standard_user| secret_sauce          | Arti         | kumari        |   12345    |       
      
      
