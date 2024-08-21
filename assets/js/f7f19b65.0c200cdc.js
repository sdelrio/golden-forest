"use strict";(self.webpackChunkgolden_forest_website=self.webpackChunkgolden_forest_website||[]).push([[3067],{42858:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var o=a(87462),i=(a(67294),a(3905));a(61839);const n={},s="FFMpeg",r={unversionedId:"Multimedia/ffmpeg",id:"Multimedia/ffmpeg",title:"FFMpeg",description:"DTS -> ac3",source:"@site/docs/Multimedia/ffmpeg.md",sourceDirName:"Multimedia",slug:"/Multimedia/ffmpeg",permalink:"/docs/Multimedia/ffmpeg",draft:!1,editUrl:"https://github.com/sdelrio/golden-forest/edit/master/docs/Multimedia/ffmpeg.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Darktable",permalink:"/docs/Multimedia/darktable"},next:{title:"MakeMKV",permalink:"/docs/Multimedia/makemkv"}},l={},p=[{value:"DTS -&gt; ac3",id:"dts---ac3",level:2},{value:"Get one audio track",id:"get-one-audio-track",level:3},{value:"Convert all audio tracks to ac3 stereo and remove third one",id:"convert-all-audio-tracks-to-ac3-stereo-and-remove-third-one",level:3},{value:"Use negative mapping to exclude specific stream(s):",id:"use-negative-mapping-to-exclude-specific-streams",level:3},{value:"ffmpeg opts",id:"ffmpeg-opts",level:2},{value:"Subtitle options",id:"subtitle-options",level:2},{value:"References",id:"references",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ffmpeg"},"FFMpeg"),(0,i.kt)("h2",{id:"dts---ac3"},"DTS -> ac3"),(0,i.kt)("h3",{id:"get-one-audio-track"},"Get one audio track"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nice -15 ffmpeg -i $1 -y -vcodec copy -copyts -acodec ac3 -ab 192k \\\n-vbsf h264_mp4toannexb -sn -f matroska $2\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linuxadictos.com/como-convertir-el-audio-de-un-mkv-de-formato-dts-ac3.html"},"https://www.linuxadictos.com/como-convertir-el-audio-de-un-mkv-de-formato-dts-ac3.html"))),(0,i.kt)("h3",{id:"convert-all-audio-tracks-to-ac3-stereo-and-remove-third-one"},"Convert all audio tracks to ac3 stereo and remove third one"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nice -15 ffmpeg -i $1 -map 0 -y -vcodec copy -copyts -acodec ac3 -ab 192k \\\n-ac 2 -map -0:a:2  \\\n-vbsf h264_mp4toannexb -sn -f matroska $2\n")),(0,i.kt)("h3",{id:"use-negative-mapping-to-exclude-specific-streams"},"Use negative mapping to exclude specific stream(s):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ffmpeg -i input -map 0 -map -0:a:1 -c copy output\n")),(0,i.kt)("h2",{id:"ffmpeg-opts"},"ffmpeg opts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://superuser.com/questions/550710/how-do-i-translate-handbrakecli-options-to-ffmpeg-options"},"https://superuser.com/questions/550710/how-do-i-translate-handbrakecli-options-to-ffmpeg-options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sites.google.com/site/linuxencoding/x264-ffmpeg-mapping"},"https://sites.google.com/site/linuxencoding/x264-ffmpeg-mapping"))),(0,i.kt)("h2",{id:"subtitle-options"},"Subtitle options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikibooks.org/wiki/FFMPEG_An_Intermediate_Guide/subtitle_options"},"https://en.wikibooks.org/wiki/FFMPEG_An_Intermediate_Guide/subtitle_options"))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://trac.ffmpeg.org/wiki/Map"},"Homepage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linuxadictos.com/como-convertir-el-audio-de-un-mkv-de-formato-dts-ac3.html"},"Convert MKV from DTS to AC3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://superuser.com/questions/550710/how-do-i-translate-handbrakecli-options-to-ffmpeg-options"},"Translate HandbrakeCLI options to FFmpeg options"))))}c.isMDXComponent=!0}}]);