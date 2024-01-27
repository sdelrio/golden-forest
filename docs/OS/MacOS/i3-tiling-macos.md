# I3 Tiling on osx

## Alternatives

### [Using i3-like Tiling Window Managers in MacOS with yabai](https://anuj-chandra.medium.com/using-i3-like-tiling-window-managers-in-macos-with-yabai-ebf0e002b992):

* [Veeer](https://veeer.io/) and [Tiles](https://freemacsoft.net/tiles/): Made for people who want basic window managemnt, but nowhere close to i3.
* [Amethyst](https://github.com/ianyh/Amethyst): Some features of i3, it lacks customizability, no option to bund apps to spaces.
* [yabai](https://github.com/koekeishiya/yabai): Based on bspwm.

### yabai + skhd

References:

* https://cbrgm.net/post/2021-05-5-setup-macos/#yabai--skhd-i3-replacement)
* https://www.josean.com/posts/yabai-setup
* <iframe width="560" height="315" src="https://www.youtube.com/embed/k94qImbFKWE?si=T1R5pj4wykehn-l0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


1. Install with brew

```
brew install koekeishiya/formulae/yabai
brew install koekeishiya/formulae/skhd
```

If get `Error: Frmula yabai has no implemented #plist or installed a locatable service file`
* https://github.com/koekeishiya/yabai/issues/1738


2. Config files: 

* Folders
```
mkdir -p ~/.config/yabai
mkdir -p ~/.config/skhd
```

* `~/.config/yabai/yabairc`

```
# default layout (can be bsp, stack or float) Binary Space Particioner
yabai -m config layout bsp

# New window spawns to the right if vertical split, or bottom if horizontal split
# when is vertically split it go right, when is horizontal it will go bottom
yabai -m config window_placement second_child

# Padding
# padding set to 12px
yabai -m config top_padding 0
yabai -m config bottom_padding 0
yabai -m config left_padding 2
yabai -m config right_padding 0
yabai -m config window_gap 2 # center mouse on window with focus

# mouse settings
yabai -m config mouse_follows_focus on


# modifier for clicking and dragging with mouse
yabai -m config mouse_modifier alt
# set modifier + left-click drag to move window
yabai -m config mouse_action1 move
# set modifier + right-click drag to resize window
yabai -m config mouse_action2 resize

# when window is dropped in center of another window, swap them (on edges it will split it)
yabai -m mouse_drop_action swap

# List of apps dont want yabai to manage:
# yabai -m query --windows | jq -r '.[].app'
yabai -m rule --add app="^System Settings$" manage=off
yabai -m rule --add app="^Ajustes del Sistema$" manage=off
yabai -m rule --add app="^Calculator$" manage=off
yabai -m rule --add app="^Calculadora$" manage=off
yabai -m rule --add app="^Karabiner-Elements$" manage=off
yabai -m rule --add app="^KeePassXC$" manage=off
```




* `~/.config/yabai/yabairc`
```
# change window focus within space
alt - j : yabai -m window --focus south
alt - k : yabai -m window --focus north
alt - h : yabai -m window --focus west
alt - l : yabai -m window --focus east

#change focus between external displays (left and right)
alt - s: yabai -m display --focus west
alt - g: yabai -m display --focus east

# rotate layout clockwise
shift + alt - r : yabai -m space --rotate 270

# flip along y-axis
shift + alt - y : yabai -m space --mirror y-axis

# flip along x-axis
shift + alt - x : yabai -m space --mirror x-axis

# toggle window float
shift + alt - t : yabai -m window --toggle float --grid 4:4:1:1:2:2


# Modify window size

# maximize a window
shift + alt - m : yabai -m window --toggle zoom-fullscreen

# balance out tree of windows (resize to occupy same area)
shift + alt - e : yabai -m space --balance


# swap windows
shift + alt - j : yabai -m window --swap south
shift + alt - k : yabai -m window --swap north
shift + alt - h : yabai -m window --swap west
shift + alt - l : yabai -m window --swap east


# move window and split
ctrl + alt - j : yabai -m window --warp south
ctrl + alt - k : yabai -m window --warp north
ctrl + alt - h : yabai -m window --warp west
ctrl + alt - l : yabai -m window --warp east

# move window to display left and right
shift + alt - s : yabai -m window --display west; yabai -m display --focus west;
shift + alt - g : yabai -m window --display east; yabai -m display --focus east;




#move window to prev and next space
shift + alt - p : yabai -m window --space prev;
shift + alt - n : yabai -m window --space next;

# move window to space #
shift + alt - 1 : yabai -m window --space 1;
shift + alt - 2 : yabai -m window --space 2;
shift + alt - 3 : yabai -m window --space 3;
shift + alt - 4 : yabai -m window --space 4;
shift + alt - 5 : yabai -m window --space 5;
shift + alt - 6 : yabai -m window --space 6;
shift + alt - 7 : yabai -m window --space 7;
shift + alt - 8 : yabai -m window --space 8;
shift + alt - 9 : yabai -m window --space 9;



# stop/start/restart yabai
ctrl + alt - q : yabai --stop-service 
ctrl + alt - s : yabai --start-service 
ctrl + alt - r : yabai --restart-service


# Apps
# open terminal, blazingly fast compared to iTerm/Hyper
alt - return : /Applications/kitty.app/Contents/MacOS/kitty --single-instance -d ~
alt - q : /Applications/kitty.app/Contents/MacOS/kitty -1 -d ~
```

3. Show desktop number in bar

* https://github.com/gechr/WhichSpace

```
brew install --cask whichspace
```

4. Start services

```
yabai --start-service
skhd --start-service
```

#### How to alwasy show thumbnails for desktop/fullscreen apps

* https://www.reddit.com/r/osx/comments/3owbrl/el_capitans_mission_control_how_to_always_show/


This is a quick and dirty "hack".

First, you'll need the app BetterTouchTool (http://www.bettertouchtool.net/). Install that, if you don't already have it.
1. In System Preferences, uncheck the Trackpad gesture for Mission Control. (http://i.imgur.com/XvEJf13.png)
2. In BetterTouchTool, go to the Trackpad tab, and select a Touchpad gesture you want to trigger Mission Control. I use a Four Finger Swipe Down, but it can be whatever you're comfortable with. (http://i.imgur.com/7NZxSFS.png)
3. Hit the Attach Additional Action, and you want to daisy chain these actions: Save Current Mouse Position, Delay Next Action (for .09 seconds), Move Mouse To X:50.00 Y:0.00, Restore Saved Mouse Position (http://i.imgur.com/GmEZPkT.png)

