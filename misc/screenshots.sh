#!/bin/bash

for i in {1..13}
do
  chromium-browser --headless\
    --disable-gpu\
    --screenshot=$i.png\
    --window-size=1024,7680\
    --default-background-color=0\
    https://gingertronmk1.github.io/risky_texts/$i
done

