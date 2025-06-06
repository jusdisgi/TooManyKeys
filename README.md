# Work in Progress

I just finished a draft of all the routing and such. It is very ugly, but I have clear ideas of how I will do better next time, which is more or less right now.

## Where is everything?
The current draft [PCB file](https://github.com/jusdisgi/TooManyKeys/blob/main/TooManyKeys.kicad_pcb)
The main PCB [schematic](https://github.com/jusdisgi/TooManyKeys/blob/main/TooManyKeys.kicad_sch)
The [ergogen config](https://github.com/jusdisgi/TooManyKeys/blob/main/config.yaml)

The schematic has a 6-pin connector on it that is sort of fake. It just represents [BOOSTIER](https://github.com/jusdisgi/boostier), my DC-DC voltage conversion (boost) circuit and logic level shifter.
One of the drawbacks to using ergogen for the keyboard design is it doesn't make schematics. So when I had something complex enough I felt I reaally needed to build it from a schematic I did it outside the ergogen process and brought it in. I recognize this probably isnt the best conceivable way to do this. I will continue to try to improve my workflow.

In any case the [schematic](https://github.com/jusdisgi/boostier/blob/main/boostier.kicad_sch) and [PCB](https://github.com/jusdisgi/boostier/blob/main/boostier.kicad_pcb) for the voltage booster / logic level shifter is in that project.

## What's the status?
I think it is ugly but mostly finished. I think I have the design done, the components determined and validated, and possibly even a PCB that would work if I shipped it to production.

But I don't think it's quite ready for that. First I intend to:
1. Push back the power switch from the board edge (DRC complains it is 0.025mm too close!)
2. Redo the routing.
3. Collect some feedback and hopefully find further areas for improvement

I do have some DRC errors that I will not be fixing...the footprint for my adaptation of Kumamuk's [CKW12](https://github.com/kumamuk-git/CKW12/tree/main) roller encoder has pads right up to the edge cut, but that's by design.

## What this thing is supposed to be
Well it has Too Many Keys, see? Basically it's the next revision of [BiggieSplays](https://github.com/jusdisgi/biggie-splays), an ergonomic, column-staggered split keyboard with just a bit of splay and lots of bells and whistles. Some of the notable features:
1. Per-key LEDs, using WS2812B-2020
2. Kailh PG1316S ultra-low profile switches
3. The aforementioned roller encoder
4. LCD screen
5. A totally absurd battery to run all of this stuff...5Ahr!!

