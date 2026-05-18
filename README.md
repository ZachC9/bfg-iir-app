# BFGs IIR react site

# TODO:
* Set up Laptop (DONE)
* Find new framework (NO)
* Deploy the site for development/showoff purposes (DONE)
* Create it
* Hook it up to Google Firebase

# Pages
* Canada map with national company logos imposed on top
    * The only existing react library of a Canada map is 5 years old, and does not work anymore. I will have to make my own.
* Each province map with provincial logos imposed
* Login page
* New relationship page

# Backend
* Company items
    * Name
    * Board
    * Location
    * List of relationship items
* Relationship items
    * Array of Companies
    * Type
        * Financial
        * Scientific
        * Administrative
    * Description
    * Dollar amount (if financial)
        * Company which gets the money
    * Projects shared (if Scientific or administrative)