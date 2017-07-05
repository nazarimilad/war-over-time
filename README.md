# War over time
## Demo
![Demo](https://media.giphy.com/media/Co7w7lNdpBuZW/giphy.gif)
## Prerequisites
* Perl
* LWP Perl module
* PhantomJS
* Imagemagick
* ffmpeg
## Installation and usage
1. Clone the repository          : `git clone https://github.com/nazarimilad/war-over-time`
2. move to the repository        : `cd war-over-time`
3. run the script		         : `perl fetch_and_render.pl`
4. convert the gif to a MP4 video:

  4.1 convert the gif to a serie of PNG files      : `convert gifs/result.gif gifs/gif%05d.png`
  4.2 convert the serie of PNG files to a MP4 video: `ffmpeg -r 7 -i gifs/gif%05d.png -y -an video.mp4`
## Positions
* Syria: `lat = 34.8000; lng = 40.0000; zoom = 8 ;`
* Raqqa: `lat = 36.1000; lng = 39.2000; zoom = 10;`
* Mosul: `lat = 36.3500; lng = 43.2050; zoom = 13;`
## Contributing
1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes       : `git commit -am 'Add some feature'`
4. Push to the branch        : `git push origin my-new-feature`
5. Submit a pull request
## Note
I made an extra script named `datastructure.pl` in the repository, which produces an complex datastructure of multi polygon coordinate data of the different groups. It can be used to make geographical and statistical calculations.