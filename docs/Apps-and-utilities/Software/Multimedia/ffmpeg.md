# FFMpeg

## DTS -> ac3

### Get one audio track

```bash
nice -15 ffmpeg -i $1 -y -vcodec copy -copyts -acodec ac3 -ab 192k \
-vbsf h264_mp4toannexb -sn -f matroska $2
```

- https://www.linuxadictos.com/como-convertir-el-audio-de-un-mkv-de-formato-dts-ac3.html

### Convert all audio tracks to ac3 stereo and remove third one

```bash
nice -15 ffmpeg -i $1 -map 0 -y -vcodec copy -copyts -acodec ac3 -ab 192k \
-ac 2 -map -0:a:2  \
-vbsf h264_mp4toannexb -sn -f matroska $2
```

### Use negative mapping to exclude specific stream(s):
```
ffmpeg -i input -map 0 -map -0:a:1 -c copy output
```

## ffmpeg opts

- https://superuser.com/questions/550710/how-do-i-translate-handbrakecli-options-to-ffmpeg-options
- https://sites.google.com/site/linuxencoding/x264-ffmpeg-mapping

## Subtitle options

- https://en.wikibooks.org/wiki/FFMPEG_An_Intermediate_Guide/subtitle_options

## References

* [Homepage](https://trac.ffmpeg.org/wiki/Map)
* [Convert MKV from DTS to AC3](https://www.linuxadictos.com/como-convertir-el-audio-de-un-mkv-de-formato-dts-ac3.html)
* [Translate HandbrakeCLI options to FFmpeg options](https://superuser.com/questions/550710/how-do-i-translate-handbrakecli-options-to-ffmpeg-options)

