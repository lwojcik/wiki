# Atari BASIC

A flavor of BASIC, the interpreted programming language, included with many Atari computers. I used it on [Atari 65XE](../computers/atari-65xe.md). Not very performant compared to assembly. Touted as beginner-friendly. I can't verify this statement because I had no comparison as a teenager.

The name BASIC is an abbreviation for _Beginner's All-Purpose Symbolic Instruction Code_.

BASIC was present in many computers but BASIC programs from, say, Commodore 64 weren't compatible with Atari BASIC due to differences in the list of supported instructions. In other words, you could do some stuff on Atari and not on Commodore, but you could do some stuff on Commodore and not on Atari.

## Basics

- you know it's ready to use when you see the prompt READY on your screen
- syntax is checked and errors displayed as soon as you hit enter after completing the line
- any program written in BASIC is saved in RAM memory which is temporary. Hitting RESET erases it. To save the program you have to use a floppy disk or tape and `SAVE` command
- 'hello world' program, displaying hello world in an endless loop:

  ```BASIC
    10 PRINT "HELLO WORLD"
    20 GOTO 10
  ```

- you use numbers as line etiquettes and it's advised to increment them by 10 so that you have room to add extra lines in-between:

  ```BASIC
  10 PRINT "THIS IS MY PROGRAM"
  15 PRINT "OH! I NEED TO ADD THIS LINE!"
  20 PRINT "THIS IS STILL MY PROGRAM"
  ```

- if you put an instruction without the line etiquette BASIC will execute the instruction immediately and put the word READY to indicate it finished executing the instruction:

  ```BASIC
  PRINT 2+2
  4

  READY
  ```

- comments are expressed with `REM` command as follows. It makes it convenient to comment / uncomment lines at will:

  ```BASIC
    10 REM My program
  ```

- number variables are defined with `LET`:

  ```BASIC
  10 LET X = 10
  ```

- string variables must be defined with `DIM` together with the number of bytes needed to store the value:

  ```BASIC
    10 DIM SOMEVARIABLE$(10)
  ```

- define loop with `FOR / NEXT / STEP` construction:

  ```BASIC
  10 FOR I=1 TO 10 STEP 1
  20 PRINT I
  30 NEXT I
  ```

- define conditional instructions with `IF` command. I don't remember if `ELSE` was available too:

  ```BASIC
  IF X>0 THEN PRINT X
  ```

- chaining commands in a single line can be done with `:` character:

  ```BASIC
  10 FOR I=1 TO 10: NEXT I
  ```

- `GOTO` allows for jumping to a line marked by provided number:

  ```BASIC
    GOTO 200
  ```

- `GOSUB` and `RETURN` are used to create subroutines. `END` is used to end the program:

  ```BASIC
  10 PRINT "FIRST RUN"
  20 GOSUB 100
  30 PRINT "SECOND RUN"
  40 GOSUB 100
  50 PRINT "END OF PROGRAM"
  60 END
  100 PRINT "THIS IS A SUBROUTINE"
  110 RETURN
  ```

- `GRAPHICS` command can be used between one of available graphics modes:

  ```BASIC
    GRAPHICS 2
  ```

- `SOUND` can be used to make the computer produce sound. Parameters in order of appearance: which channel voice to use (0-3), pitch (0-255), distortion (2-14, even values), volume (0-15)

  ```BASIC
    SOUND 0,66,10,5
  ```

- `POKE` can be used to set the value of a selected memory location. Parameters: number of the location, value:

  ```BASIC
    POKE 710, 55
  ```

- `PEEK` can be used to check the value of a selected memory location:

  ```BASIC
    PRINT PEEK(710)
  ```

- `DATA` and `RESTORE` can be used but I never figured out how :)

## Interesting links

- [https://www.youtube.com/@8bitandmore](https://www.youtube.com/@8bitandmore) - YT channel focused on programming, upgrading, repairing and exploring Atari and Commodore 8-bit line of computers
- [https://www.atariarchives.org/basic/](https://www.atariarchives.org/basic/) - Atari Basic - A Self-Teaching Guide by Bob Albrecht, LeRoy Finkel, and Jerald R. Brown, published 1979
- [https://archive.org/details/ataribooks-atari-basic-tutorial/mode/2up](https://archive.org/details/ataribooks-atari-basic-tutorial/mode/2up) - Atari BASIC tutorial by Peck, Robert A; Moody, C. W
