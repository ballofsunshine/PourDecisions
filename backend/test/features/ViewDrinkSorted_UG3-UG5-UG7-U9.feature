Feature: View Drink Recipes

As a user or guest
I would like to view drink recipes
So that I can see the details of each cocktail

Background:
    Given the following accounts exist in the system:
        | username | password |
        | User1    | password1    |
        | User2    | password2    |
    Given the following drinks exist in the system:
		| name     | ratings |ingredients           	                   | author | status |
		| Fireball |  50     |Canadian whisky,sweetener,cinnamon flavouring| User1  | public |
		| Mojitos  |  100    |white rum, sugar,lime juice,soda water,mint  | User2  | private|
        | Mojitos  |  200    |white rum, sugar,lime juice,soda water,mint  | User2  | private|

Scenario: View Drink Recipes in alphabetical order (UG3)
	When the user "User1" with password "password1" is logged into their account
	And the user "User1" requests to view the drinks in alphabetical order
    Then the list of drinks is displayed in alphabetical order 

Scenario: View Drink Recipes by Newest (UG5)
	When the user "User1" with password "password1" is logged into their account
	And the user "User1" requests to view drinks by newest
    Then the list of drinks is displayed in order of their creation

Scenario: View Drink Recipes by descending ratings (UG7)
	When the user "User1" with password "password1" is logged into their account
	And the user "User1" requests to view drinks by their rating
    Then the list of drinks is displayed in descending order of their rating

# Scenario: View Drink Recipes by rating threshold (U9)
#     When the user "User1" requests to view drinks from a given rating
#     Then the list of drinks within the given range is displayed
