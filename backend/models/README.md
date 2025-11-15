# Mongodb

## Models
1. Movie
2. Review

## Schemas
- Movie
  - title (string)
  - director
    - name (string)
    - phoneNo (string)
  - year (number)
- Review
  - movie (Movie Schema)
  - rating (number)
  - review (string)


## Relationships

##### Embedded Model
    Adding another object inside the object.
##### Reference Model
    Adding another object by saving its schema and key as reference
