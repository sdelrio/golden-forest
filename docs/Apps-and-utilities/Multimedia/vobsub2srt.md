# VobSub2SRT

Converts VobSub subtitles (.idx/.srt format) into .srt subtitles.

## Install

```bash
sudo add-apt-repository ppa:ruediger-c-plusplus/vobsub2srt
sudo apt-get update
sudo apt-get install vobsub2srt
```


* [GitHub](https://github.com/ruediger/VobSub2SRT)
* [deb packages](http://www.deb-multimedia.org/)
  ```
  wget http://www.deb-multimedia.org/pool/main/d/deb-multimedia-keyring/deb-multimedia-keyring_2016.8.1_all.deb
  sudo dpkg -i deb-multimedia-keyring_2016.8.1_all.deb
  ```

## Sample usage

```bash
docker run --rm -v $(pwd):/mnt -ti tvddataset/base bash
cd /mnt
apt-get install tesseract-ocr-spa
apt-get install tesseract-ocr-eng
apt-get install tesseract-ocr-fra

vobsub2srt --lang en --verbose output.eng_4
vobsub2srt --lang es --verbose output.spa_6
vobsub2srt --lang es --verbose output.spa_14

```
