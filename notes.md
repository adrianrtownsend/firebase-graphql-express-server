# Students
* Auth Rules

* Queries
- By Student ID
- By OwnerUID
- By Username
- By Student Name

* Filters
- Status

* Mutations
- C
- R
- U
- D | On delete - supported student actions should check for student status

* Subscriptions
- Student props updated
  > classes
  > grades

# Teachers
* Auth Rules

* Queries
- By Teacher ID
- By OwnerUID
- By Username
- By Teacher Name
- By Class

* Filters

* Mutations
- C
- R
- U
- D | On delete - run supported actions for class (class should have separate triggers for assignemnts when done)

* Subscriptions

# Classes
* Auth Rules

* Queries
- By Teacher
- By ID
- By Code
- By Subject

* Filters
- By Subject
- By Status

* Mutations
- C
- R
- U
- D

* Subscriptions
- Teacher of class updated
- Student of class updated
- Status (act on itself and then any related items)

  # Assignments
  * Auth Rules

  * Queries
  - By ID
  - By Code
  - By Class
  - By Teacher of Class

  * Filters
  - By Status

  * Mutations
  - C
  - R
  - U
  - D

  * Subscriptions
  - Class updated
  - Notify class of students of class of change

  # Students
  * Auth Rules

  * Queries
  - By Class
  - By StudentID
  - By Name

  * Filters
  - Code
  - Percent
  - Score

  * Mutations
  - C
  - R
  - U
  - D

  * Subscriptions
  - Status updated
  - Class updated
  - Teacher of class updated
  - Student of self updated
  - Grade updated
  - Assignment updated


# --------------------------------
