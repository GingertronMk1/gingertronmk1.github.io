#!/bin/bash

if uname | grep -q Darwin; then             # Macs and Linux work differently sometimes
  chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
else                                        # Whereas...
  chrome="chromium-browser"
fi


for i in {1..13}
do
  "$chrome" --headless\
    --disable-gpu\
    --screenshot=$i.png\
    --window-size=1024,7680\
    --default-background-color=0\
    https://gingertronmk1.github.io/risky_texts/$i
done

