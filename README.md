# message-parser
We've built a new communication protocol that sends messages with a restricted syntax. We need to write a function which determines whether a given message is syntactically valid or not. Here are the rules:

There are 15 valid characters in the protocol: the lower-case characters 'a' through 'j' and the uppercase characters 'Z', 'M', 'K', 'P', and 'Q'.
Every lower-case character in isolation is a valid message, e.g., 'a' is a valid message.
If σ is a valid message then so is Zσ.
If σ and τ are valid messages then so are Mστ, Kστ, Pστ, and Qστ.
Write a function in the language of your choosing (out of: Python, PHP, JavaScript, Java, C/C++) to check whether messages are valid.

The input consists of a series of potential messages separated by whitespace and containing only the 15 characters above.

The output consists of one line per potential messages, followed by VALID if the message is valid and INVALID if it is invalid.

Example output:
Qa INVALID
Zj VALID
MZca VALID
Khfa INVALID
