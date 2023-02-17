# Ryze Tello drone + AI, short experiment
Based on [nodetello](https://github.com/SovGVD/nodetello) and [face-api.js](https://github.com/justadudewhohacks/face-api.js/).

This repository was created to provide a demonstration for the article linked below. Please note that the software in this repository is currently in development and is provided "as is." Use caution when working with this software and always prioritize safety. Remember to remove props before testing.

Article: [here](https://medium.com/supercharges-mobile-product-guide/unleashing-the-potential-of-ai-for-teaching-drones-making-advanced-technologies-accessible-to-all-a75afa7240f7)

## Prerequisites

You must have ffmpeg installed on your system.

On a Mac, you can install ffmpeg using Homebrew:

```
brew install ffmpeg
```

For other operating systems, please visit the ffmpeg website at [ffmpeg.org](https://ffmpeg.org/download.html) for installation instructions.

## Starting the app

After installing the dependencies with `npm i`, start the app with `npm start`. This will start the Node.js app that connects to the drone and provides an API for the web client. The web client will be served at `localhost:8080`.

If you encounter the following error:
```
Error: ENOENT: no such file or directory, open './video/{timestamp}.video.h264'
```

Simply create a `video` folder in the root of the project.

## Convert video
Video feeds stored to `./video/TIMESTAMP.h264` and must be redecode, e.g. `ffmpeg -i TIMESTAMP.h264 -crf 20 video.mp4`

## Flight

### Keyboard
 - `Shift` + `Space` - Takeoff
 - `Space` - Land
 - `ArrowUp` and `ArrowDown` - Pitch (forward/backward)
 - `ArrowLeft` and `ArrowRight` - Roll (left/right)
 - `W` and `S` - Throttle (Up/Down)
 - `A` and `D` - Yaw (Rotate)

Speed is limited = 0.5
