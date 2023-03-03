# Code review

Code review is a process intended to ensure better software quality in which one or few people look at source code and share ideas for improvement.

It is a common practice in companies where teams of engineers work simultaneously on a single application.

## Why code review is a thing

- We are engineers. We are software developers. We are craftsmen
- Our company hires us to build software
  - And we're expected to do it in professional way to the best of our ability
- We build software that is less or more directly related to company's revenue
  - It is within our interest to help our company become or stay profitable for as long as possible
  - ...because we want paychecks. We have families to feed. Mortgages to pay. We work to provide to ourselves and our closed ones
  - And our company is more profitable if we build software that is reliable, resilient to errors, well designed and engineered
- ...but we are also HUMANS
  - we make mistakes
  - we have biases and personal preferences
  - we may not have full picture of the reality around us, especially in bigger projects
  - we are smart in our own unique ways
    - each person knows something the rest of the team doesn't
- software we build for our company doesn't belong to us
  - it functions as a solution to a specific business problem
  - if we develop particular piece of software, there's no guarantee we will maintain it
    - a different team may take that software over from us for further maintenance
    - we are obliged to build software according to existing company standards
    - and it is expected from us to create this kind of standards if they are non-existent
- our company expects us to follow proven industry standards

## Purposes of code review

- test the feature against current state of the project
- catch potential bugs or programming mistakes early
- improve code maintainability, readability and anything else automatic tools can't do for us
- ensure common conventions are used instead of reinventing the wheel
- trigger conversations around optimal ways of solving problems
- ensure code stays within limits of mental complexity so that it is easy to maintain in the future

## How to approach code review

- it's an egoless process. Not a competition. There's nothing personal about it
- it's much more difficult to read and maintain code than to write it
  - code review is meant to make this easy enough to alleviate any future pains 
- it's the easiest way to learn craft. You're being given solutions to common problems on a golden platter by other people who wish you the best
- it's a great way to discover new techniques and approaches you may not be aware
- it's good to have another pair of eyes in case we make mistakes
  - software engineering is a mentally taxing process
- it's an exercise of human cooperation
  - stay humble, be open to learn and get used to working with people around common goal

## How to do code review

Good companies should have their own standards of code review. If not, I try to follow the following framework.

- ensure the pull request follows agreed conventions about description, commit messages, etc.
  - e.g. contains a Jira number of the task in question and / or short description
- if my team uses the notion of Definiton of Done / Acceptance Criteria - check if task description states it clearly and the pull request meets it
- ensure feature branch is up-to-date against target branch and contains no conflicts  
- read the task description. Ensure I have understanding of the problem being solved
- clone the feature branch to my computer
- ensure I can launch the project
- read the code that was added
- read the code of the whole file / module / feature / anything that puts new code in relevant context
- ensure tests don't fail
- ensure new feature is present
- ensure new feature works as described in the task
- ensure new feature is sufficiently covered by unit tests
- ensure code meets common standards and uses proven patterns to solve problems
- ensure automatic linters don't complain about pieces of code
- ensure naming patterns are easy to recognize and follow some recognizable convention
- ensure names don't contain typo
- ensure potential errors are sufficiently handled
- ensure there's no code repetitions that could be abstracted away without obstructing understanding
- ensure relevant components are placed in places they belong to (e.g. constants, stubs, helpers, types) 
- ensure there's no accidental way for a human to fall off the happy path while using the feature

## Links

- https://www.youtube.com/watch?v=bLyl4VDNPyY
