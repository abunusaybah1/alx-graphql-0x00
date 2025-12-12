# Task 1: Get a Paginated List of Characters

This task demonstrates how to query the Rick and Morty GraphQL API to fetch
a paginated list of characters using the `characters(page: Int)` field.

For each page (1, 2, 3, and 4), we request the following fields:

- id  
- name  
- status  
- image

Each query file contains the GraphQL query, and each output file contains the
JSON response from the GraphQL API.

Endpoint used:  
https://rickandmortyapi.com/graphql
