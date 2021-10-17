
# Primitive Obsession
## Object-Oriented Programming - Design Anti-Patterns

</br>

<img src="/assets/posts/primitive-obsession/hero.jpg" width = "650px">

</br>

## What is it?

</br>

The primitive obsession antipattern refers to the tendency to use primitive types to represent other abstractions.

</br>

## Case Study: Deck of Cards 

</br>

Let’s try to represent a deck of cards with some code. How do we go about doing this? Well for starters, a deck is just a collection of 52 cards that can be ordered by rank and suit. We could easily say that a single integer between 0-51 somehow represents a card, according to some ruling. 

</br>

For example, Clubs have numbers 0-12, Hearts are 13-25, and so on.

</br>

There are three major drawbacks to using an implementation like above:
  * The representation of a card does not map to the corresponding domain concept. 
    * For more easily understandable code, generally representations of values should be tied to the concept that they represent 
    * (e.g. using an int implies an integer. An int does not imply a “Card”).
  * The representation of a card is coupled to its implementation.
    * If the design decision to represent a card as an integer ever changes, perhaps to a string, we’d have to search for every single place an integer is used and change it to a string.
  * Variable Corruption
    * In Java, an integer can take 2^32 distinct values. As we’re only using 52 values, the remaining 2^32-52 values are seemingly useless. Although Java is being used here as an example, some of these restrictions are present in other OOP languages as well.

</br>

Clearly using primitive types to represent our domain concept is a big no-no. Thankfully, enumerated types come to the rescue.

</br>

### Enumerated Types

</br>

The use of enumerated types over say, integers, provides the benefit of increased compile-time checking and less room for errors(possibly from passing in invalid constants), and you document which values are legal to use.

</br>

Below we have an example of an enumerated type that represents the Rank and Suit of a Card class written in Java.

</br>

~~~java
enum Suit { CLUBS, DIAMONDS, SPADES, HEARTS };
enum Rank { ACE, TWO, ... , QUEEN, KING }

class Card {
  Suit aSuit;
  Rank aRank;
}
~~~

Although this may be a rather simple solution, it is worth noting that in software design it is often times (if not always) a best practice to prioritize readablility and cleanliness over more clever (and possibly more convoluted) code.