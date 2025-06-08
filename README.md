# Work in Progress

I thinke it might be done?
Please take a look and let me know if you see anything wrong!

## Where is everything?
[Left Half PCB](https://github.com/jusdisgi/TooManyKeys/blob/main/toomanykeys_left.kicad_pcb)
[Right Half PCB](https://github.com/jusdisgi/TooManyKeys/blob/main/toomanykeys_right.kicad_pcb)

[Left Half Schematic](https://github.com/jusdisgi/TooManyKeys/blob/main/toomanykeys_left.kicad_sch)
[Right Half Schematic](https://github.com/jusdisgi/TooManyKeys/blob/main/toomanykeys_right.kicad_sch)

[Ergogen Config](https://github.com/jusdisgi/TooManyKeys/blob/main/config.yaml)

## What's the status?
I think it is finished. Please let me know what I've done horribly wronng.

The schematic is complete now, but still not quite properly tied to the PCB. I can update the schematic from the PCB but if I try to update the PCB from the schematic stuff breaks.

That said, DRC runs clean, except for some known issues with the roller encoder which I intend to ignore. The roller is my adaptation of Kumamuk's [CKW12](https://github.com/kumamuk-git/CKW12/tree/main) which has pads right up to the edge cut, but that's by design.

## What this thing is supposed to be
Well it has Too Many Keys, see? Basically it's the next revision of [BiggieSplays](https://github.com/jusdisgi/biggie-splays), an ergonomic, column-staggered split keyboard with just a bit of splay and lots of bells and whistles. Some of the notable features:
1. Per-key LEDs, using WS2812B-2020
2. Kailh PG1316S ultra-low profile switches
3. The aforementioned roller encoder
4. LCD screen
5. A totally absurd battery to run all of this stuff...5Ahr!!

