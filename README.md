# 10 Object-oriented Programming: SVG Logo Maker

### By Dan McKay

## Overview
This is an assignment for BootCamp Spot, week 10, as part of their Full Stack Coding Bootcamp as offered via UC Berkeley continuing education. It is a simple logo creator in the svg format using Node JS command prompts entered by user in a coding terminal.

* It prompts the user initially for up to three digits for a logo.
* Next it prompts for a text color, first asking the user if they want to select from a list or use a hexadecimal code.
* If the hexadecimal color is entered incorrectly, the program will ask the user to try again.
* Next it prompts for a shape (circle, square, triangle, hexagon, inverted triangle).
* It also prompts for a background color.
* Finally it prompts for a choice of one of several fonts.
* When the logo is generated, a confirmation is printed on a command line and a logo.svg file is generated in an /outputs file.

## [Video Demo](https://drive.google.com/file/d/13D3CvYbtPKXo9MtM9rkjdtgvrE0PG2MW/view)

This is still a work in progress but core functionality is complete.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters

WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square

WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`

AND the output text "Generated logo.svg" is printed in the command line

WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```


(C) Dan McKay 2023
