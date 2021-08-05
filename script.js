(function(){
    var script = {
 "definitions": [{
 "class": "PlayList",
 "change": "this.showComponentsWhileMouseOver(this.container_330C9A85_14E3_C784_41B2_F7CE5473E1A9, [this.htmltext_330C0A86_14E3_C784_4188_A543FFE95407,this.component_33134A87_14E3_C784_41B3_8D223F0096FB,this.component_33135A87_14E3_C784_41B0_FFC23FAA1813], 2000)",
 "items": [
  "this.albumitem_330CCA84_14E3_C784_41AD_15E815DA2D3D"
 ],
 "id": "playList_31A369C2_14AC_45FC_4196_F43B520FF0F4"
},
{
 "label": "\u00c1lbum de Fotos WhatsApp Image 2021-08-04 at 22.27.59 (4)",
 "thumbnailUrl": "media/album_31424B9B_14A3_C58C_416B_53DC3DC56E15_t.png",
 "class": "PhotoAlbum",
 "id": "album_31424B9B_14A3_C58C_416B_53DC3DC56E15",
 "playList": "this.album_31424B9B_14A3_C58C_416B_53DC3DC56E15_AlbumPlayList"
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.57",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_4",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_4_t.jpg",
 "duration": 5000,
 "width": 1599,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_4.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 899
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_18098A78_136C_468C_4167_75A37DD8A1AA_camera",
   "media": "this.panorama_18098A78_136C_468C_4167_75A37DD8A1AA",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PlayList",
 "change": "this.showComponentsWhileMouseOver(this.container_33088A7B_14E3_C68C_41B1_C74FE7ACE545, [this.htmltext_330EDA7C_14E3_C684_41A1_687754393348,this.component_330DAA83_14E3_C67C_41B1_606A359E896E,this.component_330DBA83_14E3_C67C_414E_48CAF554A7EB], 2000)",
 "items": [
  "this.albumitem_33091A79_14E3_C68C_41B3_795EA14B91D9"
 ],
 "id": "playList_3653E3B7_14A4_4584_41A9_2B1DEC698677"
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628"
  }
 ],
 "id": "playList_33686AC3_14E3_C7FC_419F_F2FB1F862511"
},
{
 "closeButtonIconWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 0,
 "id": "window_37F6FFEF_14A4_DD84_4197_C43BE621EB85",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "bodyPaddingTop": 0,
 "modal": true,
 "headerVerticalAlign": "middle",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "",
 "minWidth": 20,
 "shadow": true,
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "closeButtonPressedIconLineWidth": 3,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [],
 "verticalAlign": "middle",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "footerBackgroundOpacity": 0,
 "footerHeight": 5,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "headerPaddingRight": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "shadowVerticalLength": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.container_330C9A85_14E3_C784_41B2_F7CE5473E1A9"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconHeight": 20,
 "shadowColor": "#000000",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "headerPaddingBottom": 5,
 "closeButtonIconColor": "#B2B2B2",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "class": "Window",
 "shadowHorizontalLength": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "closeButtonRollOverBackgroundColor": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "closeButtonIconLineWidth": 2,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [],
 "data": {
  "name": "Window88271"
 }
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.28.08",
 "id": "album_31424B9B_14A3_C58C_416B_53DC3DC56E15_2",
 "thumbnailUrl": "media/album_31424B9B_14A3_C58C_416B_53DC3DC56E15_2_t.jpg",
 "duration": 5000,
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_31424B9B_14A3_C58C_416B_53DC3DC56E15_2.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1356
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722",
   "camera": "this.panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_camera"
  }
 ],
 "id": "playList_336A7AC0_14E3_C7FC_41AD_61D847FD742A"
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_31424B9B_14A3_C58C_416B_53DC3DC56E15"
  }
 ],
 "id": "playList_33682AC3_14E3_C7FC_418F_4D2EF8791516"
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3",
   "camera": "this.panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_camera"
  }
 ],
 "id": "playList_3309CA78_14E3_C68C_4151_9BEE7D8C7560"
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.57",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_4",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_4_t.jpg",
 "duration": 5000,
 "width": 1599,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_4.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 899
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.58",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_8",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_8_t.jpg",
 "duration": 5000,
 "width": 1599,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_8.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 899
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.25,
  "pitch": 0
 },
 "id": "camera_33A8BBF6_14E3_C584_4195_D594F907C21A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.58 (3)",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_7",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_7_t.jpg",
 "duration": 5000,
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_7.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1080
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 9,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -23.3,
  "hfov": 134,
  "pitch": 34.38
 },
 "automaticRotationSpeed": 63,
 "id": "panorama_18098A78_136C_468C_4167_75A37DD8A1AA_camera",
 "manualRotationSpeed": 438,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -22.09,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.91,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.58",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_8",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_8_t.jpg",
 "duration": 5000,
 "width": 1599,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_8.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 899
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 101.25,
  "pitch": 0
 },
 "id": "camera_33B67C27_14E3_C284_41AD_381D05500D18",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.58 (3)",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_7",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_7_t.jpg",
 "duration": 5000,
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_7.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1080
},
{
 "label": "\u00c1lbum de Fotos WhatsApp Image 2021-08-04 at 22.26.24 (1)",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_t.png",
 "class": "PhotoAlbum",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628",
 "playList": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_AlbumPlayList"
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.59 (1)",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_9",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_9_t.jpg",
 "duration": 5000,
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_9.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1080
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.26.24",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_2",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_2_t.jpg",
 "duration": 5000,
 "width": 1600,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_2.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 900
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.59 (1)",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_9",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_9_t.jpg",
 "duration": 5000,
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_9.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1080
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.30.48",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_11",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_11_t.jpg",
 "duration": 5000,
 "width": 1600,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_11.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 900
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.59 (4)",
 "id": "album_31424B9B_14A3_C58C_416B_53DC3DC56E15_0",
 "thumbnailUrl": "media/album_31424B9B_14A3_C58C_416B_53DC3DC56E15_0_t.jpg",
 "duration": 5000,
 "width": 1159,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_31424B9B_14A3_C58C_416B_53DC3DC56E15_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1449
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.84,
  "pitch": 0
 },
 "id": "camera_3388CC98_14E3_C38C_4181_666834ED7654",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.58 (1)",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_5",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_5_t.jpg",
 "duration": 5000,
 "width": 1599,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_5.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 899
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.30.48",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_11",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_11_t.jpg",
 "duration": 5000,
 "width": 1600,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_11.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 900
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_046CD8FD_13AC_4384_41A1_92BB19427772",
   "camera": "this.panorama_046CD8FD_13AC_4384_41A1_92BB19427772_camera"
  }
 ],
 "id": "playList_336BBAB9_14E3_C78C_41A0_1F45F25AF682"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_18098A78_136C_468C_4167_75A37DD8A1AA",
   "camera": "this.panorama_18098A78_136C_468C_4167_75A37DD8A1AA_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.02,
  "pitch": 0
 },
 "id": "camera_335AEB82_14E3_C67C_419C_8D36BDFEA431",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "closeButtonIconWidth": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 0,
 "id": "window_37737FC7_14A4_5D84_4180_E8716368A12B",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "bodyPaddingTop": 0,
 "modal": true,
 "headerVerticalAlign": "middle",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "",
 "minWidth": 20,
 "shadow": true,
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "closeButtonPressedIconLineWidth": 3,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [],
 "verticalAlign": "middle",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "footerBackgroundOpacity": 0,
 "footerHeight": 5,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "headerPaddingRight": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "shadowVerticalLength": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.container_33088A7B_14E3_C68C_41B1_C74FE7ACE545"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconHeight": 20,
 "shadowColor": "#000000",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "headerPaddingBottom": 5,
 "closeButtonIconColor": "#B2B2B2",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "class": "Window",
 "shadowHorizontalLength": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "headerPaddingTop": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "closeButtonRollOverBackgroundColor": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "closeButtonIconLineWidth": 2,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [],
 "data": {
  "name": "Window83709"
 }
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.59 (2)",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_10",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_10_t.jpg",
 "duration": 5000,
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_10.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1080
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -167.73,
  "pitch": 0
 },
 "id": "camera_334C3B4E_14E3_C684_41A6_FF7867B4726A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_046CD8FD_13AC_4384_41A1_92BB19427772_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -79.57,
  "pitch": 0
 },
 "id": "camera_33969CD4_14E3_C384_4169_78E784840B2C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -173.05,
   "backwardYaw": 12.27,
   "distance": 1,
   "panorama": "this.panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -87.75,
   "backwardYaw": 97.98,
   "distance": 1,
   "panorama": "this.panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722"
  }
 ],
 "vfov": 180,
 "id": "panorama_046CD8FD_13AC_4384_41A1_92BB19427772",
 "thumbnailUrl": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_t.jpg",
 "hfovMin": "135%",
 "label": "IMG_7121",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_t.jpg"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_0EA588CB_13A4_C38C_411B_B88AF8796C90",
  "this.overlay_0E865BF0_13A4_459C_41A1_C5F3EA915495"
 ],
 "hfovMax": 130
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC",
   "camera": "this.panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_camera"
  }
 ],
 "id": "playList_336B3ABA_14E3_C78C_41B0_384B55E28758"
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.59 (2)",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_10",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_10_t.jpg",
 "duration": 5000,
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_10.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1080
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.58 (1)",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_5",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_5_t.jpg",
 "duration": 5000,
 "width": 1599,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_5.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 899
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 100.43,
   "backwardYaw": -78.75,
   "distance": 1,
   "panorama": "this.panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 4.3,
   "backwardYaw": -171,
   "distance": 1,
   "panorama": "this.panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722"
  }
 ],
 "vfov": 180,
 "id": "panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC",
 "thumbnailUrl": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_t.jpg",
 "hfovMin": "135%",
 "label": "IMG_7120",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_t.jpg"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_0E61F16B_139C_C28C_41AA_70ACA9D85095",
  "this.overlay_0EDA54C2_139C_43FC_41B3_4C0D43FD003B"
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9,
  "pitch": 0
 },
 "id": "camera_33BCBC61_14E3_C2BC_41B2_2B1E44BEA774",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.57 (1)",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_3",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_3_t.jpg",
 "duration": 5000,
 "width": 1599,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_3.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 899
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerPhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.95,
  "pitch": 0
 },
 "id": "camera_33F96D77_14E3_C284_41B4_209FBE191174",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_0D40A744_1365_CE84_41B0_717510A66BC9.mp3",
  "oggUrl": "media/audio_0D40A744_1365_CE84_41B0_717510A66BC9.ogg"
 },
 "autoplay": true,
 "id": "audio_0D40A744_1365_CE84_41B0_717510A66BC9",
 "data": {
  "label": "Fundo Musical - A Casa \u00e9 Sua - Casa Worship Guitar + Piano_160k (mp3cut.net)"
 }
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.26.24",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_2",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_2_t.jpg",
 "duration": 5000,
 "width": 1600,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_2.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 900
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.58 (2)",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_6",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_6_t.jpg",
 "duration": 5000,
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_6.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1080
},
{
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.57 (1)",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_3",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_3_t.jpg",
 "duration": 5000,
 "width": 1599,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_3.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 899
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.26.24 (1)",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_0",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_0_t.jpg",
 "duration": 5000,
 "width": 1512,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1512
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.26.24 (1)",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_0",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_0_t.jpg",
 "duration": 5000,
 "width": 1512,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1512
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -78.75,
   "backwardYaw": 100.43,
   "distance": 1,
   "panorama": "this.panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -160.16,
   "backwardYaw": -12.76,
   "distance": 1,
   "panorama": "this.panorama_18098A78_136C_468C_4167_75A37DD8A1AA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 12.27,
   "backwardYaw": -173.05,
   "distance": 1,
   "panorama": "this.panorama_046CD8FD_13AC_4384_41A1_92BB19427772"
  }
 ],
 "vfov": 180,
 "id": "panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3",
 "thumbnailUrl": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_t.jpg",
 "hfovMin": "135%",
 "label": "IMG_7122",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_t.jpg"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_0EEADE5F_139C_5E84_41A2_05E65B5A0D86",
  "this.overlay_0F65A80B_139C_428C_4183_E5F0D4DD0209",
  "this.overlay_0E14CE9A_139C_FF8C_4181_C3B98039AB48"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -12.76,
   "backwardYaw": -160.16,
   "distance": 1,
   "panorama": "this.panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3"
  }
 ],
 "audios": [
  "this.audio_0D40A744_1365_CE84_41B0_717510A66BC9"
 ],
 "id": "panorama_18098A78_136C_468C_4167_75A37DD8A1AA",
 "vfov": 180,
 "label": "IMG_7126",
 "thumbnailUrl": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_t.jpg"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_0F9A5E42_13E4_7EFD_41B2_D1ED7247574E"
 ],
 "hfovMax": 150
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.27.58 (2)",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_6",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_6_t.jpg",
 "duration": 5000,
 "width": 1080,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_6.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1080
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -171,
   "backwardYaw": 4.3,
   "distance": 1,
   "panorama": "this.panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 97.98,
   "backwardYaw": -87.75,
   "distance": 1,
   "panorama": "this.panorama_046CD8FD_13AC_4384_41A1_92BB19427772"
  }
 ],
 "vfov": 180,
 "id": "panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722",
 "thumbnailUrl": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_t.jpg",
 "hfovMin": "135%",
 "label": "IMG_7123",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_t.jpg"
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_0E317FF7_13A7_DD84_419C_07D653948C4B",
  "this.overlay_0E123ABF_13A4_C784_4196_51F20C041C1A"
 ],
 "hfovMax": 130
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.28.00",
 "id": "album_31424B9B_14A3_C58C_416B_53DC3DC56E15_1",
 "thumbnailUrl": "media/album_31424B9B_14A3_C58C_416B_53DC3DC56E15_1_t.jpg",
 "duration": 5000,
 "width": 960,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_31424B9B_14A3_C58C_416B_53DC3DC56E15_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1280
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.7,
  "pitch": 0
 },
 "id": "camera_33A22BB9_14E3_C58C_41A4_18431703E071",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.26.24 (2)",
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_1",
 "thumbnailUrl": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_1_t.jpg",
 "duration": 5000,
 "width": 1512,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_37C3CA95_14A4_4784_41AE_B59A212FF628_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1512
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 9,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.24,
  "hfov": 134,
  "pitch": 0
 },
 "automaticRotationSpeed": 63,
 "id": "camera_33E14D0B_14E3_C28C_419C_299577EB664B",
 "manualRotationSpeed": 438,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -23.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 34.38,
    "yawSpeed": 212.67,
    "easing": "cubic_in_out",
    "pitchSpeed": 106.34
   },
   {
    "targetYaw": -22.09,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.91,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "label": "\u00c1lbum de Fotos WhatsApp Image 2021-08-04 at 22.26.24 (1)",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_t.png",
 "class": "PhotoAlbum",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83",
 "playList": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_AlbumPlayList"
},
{
 "label": "WhatsApp Image 2021-08-04 at 22.26.24 (2)",
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_1",
 "thumbnailUrl": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_1_t.jpg",
 "duration": 5000,
 "width": 1512,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_337F126B_1363_C68C_41B0_A45DB01D8A83_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1512
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_33688AC2_14E3_C7FC_41A5_B037BA3B7BF0, 0)",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83",
   "player": "this.MapViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_33688AC2_14E3_C7FC_41A5_B037BA3B7BF0"
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "toolTipOpacity": 0.5,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 140,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "top": 34,
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 641,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "top": "0%",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 58,
 "mode": "toggle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "maxWidth": 58,
 "maxHeight": 58,
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 58,
 "mode": "toggle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "maxWidth": 58,
 "maxHeight": 58,
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_31424B9B_14A3_C58C_416B_53DC3DC56E15_AlbumPlayList, this.htmltext_330C0A86_14E3_C784_4188_A543FFE95407, this.albumitem_330CCA84_14E3_C784_41AD_15E815DA2D3D); this.loopAlbum(this.playList_31A369C2_14AC_45FC_4196_F43B520FF0F4, 0)",
 "media": "this.album_31424B9B_14A3_C58C_416B_53DC3DC56E15",
 "player": "this.viewer_uid330D1A84_14E3_C784_4195_5A9975757B96PhotoAlbumPlayer",
 "id": "albumitem_330CCA84_14E3_C784_41AD_15E815DA2D3D"
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.63",
     "zoomFactor": 1.04,
     "y": "0.70"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_to_height",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_31424B9B_14A3_C58C_416B_53DC3DC56E15_0"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.70",
     "zoomFactor": 1.04,
     "y": "0.62"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_to_height",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_31424B9B_14A3_C58C_416B_53DC3DC56E15_1"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.32",
     "zoomFactor": 1.01,
     "y": "0.58"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_to_height",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_31424B9B_14A3_C58C_416B_53DC3DC56E15_2"
  }
 ],
 "id": "album_31424B9B_14A3_C58C_416B_53DC3DC56E15_AlbumPlayList"
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "right": 10,
 "width": "14.22%",
 "minHeight": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "top": "20%",
 "bottom": "20%",
 "paddingLeft": 0,
 "borderSize": 0,
 "mode": "push",
 "minWidth": 50,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "maxWidth": 60,
 "maxHeight": 60,
 "propagateClick": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "width": "14.22%",
 "minHeight": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "top": "20%",
 "bottom": "20%",
 "paddingLeft": 0,
 "borderSize": 0,
 "mode": "push",
 "minWidth": 50,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "maxWidth": 60,
 "maxHeight": 60,
 "propagateClick": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_AlbumPlayList, this.htmltext_330EDA7C_14E3_C684_41A1_687754393348, this.albumitem_33091A79_14E3_C68C_41B3_795EA14B91D9); this.loopAlbum(this.playList_3653E3B7_14A4_4584_41A9_2B1DEC698677, 0)",
 "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628",
 "player": "this.viewer_uid33093A79_14E3_C68C_419B_1BBD50516788PhotoAlbumPlayer",
 "id": "albumitem_33091A79_14E3_C68C_41B3_795EA14B91D9"
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Container94474"
 },
 "children": [
  "this.viewer_uid330D1A84_14E3_C784_4195_5A9975757B96",
  {
   "backgroundColorRatios": [],
   "data": {
    "name": "Container94475"
   },
   "children": [
    "this.htmltext_330C0A86_14E3_C784_4188_A543FFE95407"
   ],
   "left": 0,
   "scrollBarOpacity": 0.5,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "right": 0,
   "minHeight": 20,
   "backgroundColorDirection": "vertical",
   "paddingRight": 0,
   "class": "Container",
   "borderSize": 0,
   "paddingLeft": 0,
   "backgroundColor": [],
   "bottom": 0,
   "contentOpaque": true,
   "minWidth": 20,
   "height": "30%",
   "horizontalAlign": "left",
   "shadow": false,
   "scrollBarMargin": 2,
   "layout": "vertical",
   "paddingBottom": 0,
   "backgroundOpacity": 0.3,
   "gap": 10,
   "borderRadius": 0,
   "verticalAlign": "bottom",
   "paddingTop": 0,
   "scrollBarWidth": 7,
   "propagateClick": false,
   "overflow": "scroll"
  },
  "this.component_33134A87_14E3_C784_41B3_8D223F0096FB",
  "this.component_33135A87_14E3_C784_41B0_FFC23FAA1813"
 ],
 "id": "container_330C9A85_14E3_C784_41B2_F7CE5473E1A9",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 20,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.34",
     "zoomFactor": 1.01,
     "y": "0.42"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_0"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.74",
     "zoomFactor": 1.01,
     "y": "0.59"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_1"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.41",
     "zoomFactor": 1.1,
     "y": "0.66"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_2"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.59",
     "zoomFactor": 1.1,
     "y": "0.36"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_3"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.74",
     "zoomFactor": 1.1,
     "y": "0.51"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_4"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.34",
     "zoomFactor": 1.1,
     "y": "0.62"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_5"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.56",
     "zoomFactor": 1.1,
     "y": "0.28"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_6"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.55",
     "zoomFactor": 1.1,
     "y": "0.70"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_7"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.42",
     "zoomFactor": 1.1,
     "y": "0.46"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_8"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.41",
     "zoomFactor": 1.1,
     "y": "0.68"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_9"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.67",
     "zoomFactor": 1.1,
     "y": "0.35"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_10"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.65",
     "zoomFactor": 1.1,
     "y": "0.29"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_11"
  }
 ],
 "id": "album_37C3CA95_14A4_4784_41AE_B59A212FF628_AlbumPlayList"
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Container94468"
 },
 "children": [
  "this.viewer_uid33093A79_14E3_C68C_419B_1BBD50516788",
  {
   "backgroundColorRatios": [],
   "data": {
    "name": "Container94469"
   },
   "children": [
    "this.htmltext_330EDA7C_14E3_C684_41A1_687754393348"
   ],
   "left": 0,
   "scrollBarOpacity": 0.5,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "right": 0,
   "minHeight": 20,
   "backgroundColorDirection": "vertical",
   "paddingRight": 0,
   "class": "Container",
   "borderSize": 0,
   "paddingLeft": 0,
   "backgroundColor": [],
   "bottom": 0,
   "contentOpaque": true,
   "minWidth": 20,
   "height": "30%",
   "horizontalAlign": "left",
   "shadow": false,
   "scrollBarMargin": 2,
   "layout": "vertical",
   "paddingBottom": 0,
   "backgroundOpacity": 0.3,
   "gap": 10,
   "borderRadius": 0,
   "verticalAlign": "bottom",
   "paddingTop": 0,
   "scrollBarWidth": 7,
   "propagateClick": false,
   "overflow": "scroll"
  },
  "this.component_330DAA83_14E3_C67C_41B1_606A359E896E",
  "this.component_330DBA83_14E3_C67C_414E_48CAF554A7EB"
 ],
 "id": "container_33088A7B_14E3_C68C_41B1_C74FE7ACE545",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 20,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722, this.camera_335AEB82_14E3_C67C_419C_8D36BDFEA431); this.setMediaBehaviour(this.playList_336A7AC0_14E3_C7FC_41AD_61D847FD742A, 0, this.panorama_046CD8FD_13AC_4384_41A1_92BB19427772)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0EC5DC61_13A4_42BC_419E_1BE9E0701DCC",
   "pitch": -48.68,
   "yaw": -87.75,
   "hfov": 14.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0EA588CB_13A4_C38C_411B_B88AF8796C90",
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.75,
   "hfov": 14.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -48.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3, this.camera_334C3B4E_14E3_C684_41A6_FF7867B4726A); this.setMediaBehaviour(this.playList_3309CA78_14E3_C68C_4151_9BEE7D8C7560, 0, this.panorama_046CD8FD_13AC_4384_41A1_92BB19427772)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0EC42C61_13A4_42BC_41A9_474DD0857BC6",
   "pitch": -41.32,
   "yaw": -173.05,
   "hfov": 12.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E865BF0_13A4_459C_41A1_C5F3EA915495",
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.05,
   "hfov": 12.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -41.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722, this.camera_33BCBC61_14E3_C2BC_41B2_2B1E44BEA774); this.setMediaBehaviour(this.playList_336A7AC0_14E3_C7FC_41AD_61D847FD742A, 0, this.panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0EC54C60_13A4_42BC_41B1_EEE31D5110D0",
   "pitch": -40.91,
   "yaw": 4.3,
   "hfov": 17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E61F16B_139C_C28C_41AA_70ACA9D85095",
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.3,
   "hfov": 17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -40.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3, this.camera_33B67C27_14E3_C284_41AD_381D05500D18); this.setMediaBehaviour(this.playList_3309CA78_14E3_C68C_4151_9BEE7D8C7560, 0, this.panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0EC59C61_13A4_42BC_4192_F53C3B6BCC48",
   "pitch": -49.91,
   "yaw": 100.43,
   "hfov": 14.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0EDA54C2_139C_43FC_41B3_4C0D43FD003B",
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.43,
   "hfov": 14.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -49.91
  }
 ]
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 1,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "minWidth": 1,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "height": "99.975%",
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 58,
 "mode": "push",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "verticalAlign": "middle",
 "maxWidth": 58,
 "maxHeight": 58,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 58,
 "mode": "toggle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "maxWidth": 58,
 "maxHeight": 58,
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 58,
 "mode": "toggle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "maxWidth": 58,
 "maxHeight": 58,
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_046CD8FD_13AC_4384_41A1_92BB19427772, this.camera_33F96D77_14E3_C284_41B4_209FBE191174); this.setMediaBehaviour(this.playList_336BBAB9_14E3_C78C_41A0_1F45F25AF682, 0, this.panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0D011E1E_139D_BE84_41B3_075E2A7163C7",
   "pitch": -37.43,
   "yaw": 12.27,
   "hfov": 14.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0EEADE5F_139C_5E84_41A2_05E65B5A0D86",
 "data": {
  "label": "Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.27,
   "hfov": 14.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -37.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC, this.camera_33969CD4_14E3_C384_4169_78E784840B2C); this.setMediaBehaviour(this.playList_336B3ABA_14E3_C78C_41B0_384B55E28758, 0, this.panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0EC52C60_13A4_42BC_41B0_416968ADCD7A",
   "pitch": -51.55,
   "yaw": -78.75,
   "hfov": 13.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0F65A80B_139C_428C_4183_E5F0D4DD0209",
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.75,
   "hfov": 13.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -51.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18098A78_136C_468C_4167_75A37DD8A1AA, this.camera_33E14D0B_14E3_C28C_419C_299577EB664B); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0EC56C60_13A4_42BC_419F_F69595C025B6",
   "pitch": -34.36,
   "yaw": -160.16,
   "hfov": 18.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E14CE9A_139C_FF8C_4181_C3B98039AB48",
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.16,
   "hfov": 18.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -34.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3, this.camera_3388CC98_14E3_C38C_4181_666834ED7654); this.setMediaBehaviour(this.playList_3309CA78_14E3_C68C_4151_9BEE7D8C7560, 0, this.panorama_18098A78_136C_468C_4167_75A37DD8A1AA)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0E40D6B5_13E4_4F84_4196_EA5B3B7D5E09",
   "pitch": -6.55,
   "yaw": -12.76,
   "hfov": 14.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0F9A5E42_13E4_7EFD_41B2_D1ED7247574E",
 "data": {
  "label": "Arrow 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.76,
   "hfov": 14.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -6.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_046CD8FD_13AC_4384_41A1_92BB19427772, this.camera_33A8BBF6_14E3_C584_4195_D594F907C21A); this.setMediaBehaviour(this.playList_336BBAB9_14E3_C78C_41A0_1F45F25AF682, 0, this.panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0EC40C61_13A4_42BC_418C_D16B146FF336",
   "pitch": -46.23,
   "yaw": 97.98,
   "hfov": 15.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E317FF7_13A7_DD84_419C_07D653948C4B",
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.98,
   "hfov": 15.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -46.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC, this.camera_33A22BB9_14E3_C58C_41A4_18431703E071); this.setMediaBehaviour(this.playList_336B3ABA_14E3_C78C_41B0_384B55E28758, 0, this.panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0EC45C62_13A4_42BC_419F_F14AA301564D",
   "pitch": -42.14,
   "yaw": -171,
   "hfov": 11.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E123ABF_13A4_C784_4196_51F20C041C1A",
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171,
   "hfov": 11.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -42.14
  }
 ]
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.30",
     "zoomFactor": 1.1,
     "y": "0.72"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "none",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_0"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.54",
     "zoomFactor": 1.1,
     "y": "0.70"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "none",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_1"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.51",
     "zoomFactor": 1.1,
     "y": "0.37"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "none",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_2"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.53",
     "zoomFactor": 1.1,
     "y": "0.62"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "none",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_3"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.55",
     "zoomFactor": 1.1,
     "y": "0.52"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "none",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_4"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.39",
     "zoomFactor": 1.1,
     "y": "0.72"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "none",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_5"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.64",
     "zoomFactor": 1.1,
     "y": "0.45"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "none",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_6"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.59",
     "zoomFactor": 1.1,
     "y": "0.69"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "none",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_7"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.62",
     "zoomFactor": 1.1,
     "y": "0.58"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "none",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_8"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.73",
     "zoomFactor": 1.1,
     "y": "0.40"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "none",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_9"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.45",
     "zoomFactor": 1.1,
     "y": "0.34"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "none",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_10"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.28",
     "zoomFactor": 1.1,
     "y": "0.38"
    },
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "none",
    "duration": 5000
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_337F126B_1363_C68C_41B0_A45DB01D8A83_11"
  }
 ],
 "id": "album_337F126B_1363_C68C_41B0_A45DB01D8A83_AlbumPlayList"
},
{
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 366,
 "scrollBarColor": "#000000",
 "data": {
  "name": "white block"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": 78,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": 2,
 "shadow": true,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "layout": "absolute",
 "gap": 10,
 "shadowSpread": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 366,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue block"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": 46,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": 86,
 "shadow": true,
 "contentOpaque": false,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "layout": "absolute",
 "gap": 10,
 "shadowSpread": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.01
 ],
 "shadowVerticalLength": 0
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "width": 391,
 "minHeight": 1,
 "text": "LOREM IPSUM",
 "fontColor": "#000000",
 "paddingRight": 0,
 "class": "Label",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 75,
 "minWidth": 1,
 "top": 0,
 "shadow": false,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "paddingTop": 0,
 "fontStyle": "italic",
 "verticalAlign": "top",
 "fontSize": 61,
 "propagateClick": true,
 "fontWeight": "bold"
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 2"
 },
 "textShadowHorizontalLength": 0,
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "width": 385,
 "textShadowVerticalLength": 0,
 "minHeight": 1,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "fontColor": "#FFFFFF",
 "textShadowOpacity": 1,
 "paddingRight": 0,
 "class": "Label",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 44,
 "minWidth": 1,
 "top": 90,
 "shadow": false,
 "textShadowColor": "#000000",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "paddingTop": 0,
 "fontStyle": "italic",
 "verticalAlign": "top",
 "fontSize": 28,
 "propagateClick": true,
 "fontWeight": "normal"
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 110,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "top": "0%",
 "shadow": false,
 "horizontalAlign": "center",
 "layout": "horizontal",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "height": "85.959%",
 "shadow": false,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 3,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "width": 330,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "top": "0%",
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "minWidth": 1,
 "top": "10%",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "horizontalAlign": "left",
 "shadow": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "gap": 10,
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "paddingRight": 20,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "minWidth": 1,
 "top": "10%",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "horizontalAlign": "center",
 "shadow": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "layout": "absolute",
 "gap": 10,
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "minWidth": 1,
 "top": "10%",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "horizontalAlign": "left",
 "shadow": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "gap": 10,
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "paddingRight": 20,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "minWidth": 1,
 "top": "10%",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "horizontalAlign": "center",
 "shadow": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "layout": "absolute",
 "gap": 10,
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "minWidth": 1,
 "top": "10%",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "horizontalAlign": "center",
 "shadow": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "layout": "vertical",
 "gap": 10,
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "minWidth": 1,
 "top": "10%",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "horizontalAlign": "left",
 "shadow": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "gap": 10,
 "shadowOpacity": 0.3,
 "shadowSpread": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "paddingRight": 20,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.viewer_uid330D1A84_14E3_C784_4195_5A9975757B96",
 "id": "viewer_uid330D1A84_14E3_C784_4195_5A9975757B96PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.viewer_uid33093A79_14E3_C68C_419B_1BBD50516788",
 "id": "viewer_uid33093A79_14E3_C68C_419B_1BBD50516788PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "viewer_uid330D1A84_14E3_C784_4195_5A9975757B96",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea94473"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmltext_330C0A86_14E3_C784_4188_A543FFE95407",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingLeft": 10,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 0,
 "shadow": false,
 "paddingBottom": 5,
 "backgroundOpacity": 0.7,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "html": "",
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 5,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText94476"
 },
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 }
},
{
 "id": "component_33134A87_14E3_C784_41B3_8D223F0096FB",
 "left": 10,
 "iconURL": "skin/album_left.png",
 "transparencyActive": false,
 "minHeight": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "45%",
 "mode": "push",
 "minWidth": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.loadFromCurrentMediaPlayList(this.album_31424B9B_14A3_C58C_416B_53DC3DC56E15_AlbumPlayList, -1)",
 "paddingBottom": 0,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton94477"
 },
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 }
},
{
 "id": "component_33135A87_14E3_C784_41B0_FFC23FAA1813",
 "iconURL": "skin/album_right.png",
 "transparencyActive": false,
 "right": 10,
 "minHeight": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "top": "45%",
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minWidth": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.loadFromCurrentMediaPlayList(this.album_31424B9B_14A3_C58C_416B_53DC3DC56E15_AlbumPlayList, 1)",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton94478"
 },
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "viewer_uid33093A79_14E3_C68C_419B_1BBD50516788",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea94467"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmltext_330EDA7C_14E3_C684_41A1_687754393348",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingLeft": 10,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 0,
 "shadow": false,
 "paddingBottom": 5,
 "backgroundOpacity": 0.7,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "html": "",
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 5,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText94470"
 },
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 }
},
{
 "id": "component_330DAA83_14E3_C67C_41B1_606A359E896E",
 "left": 10,
 "iconURL": "skin/album_left.png",
 "transparencyActive": false,
 "minHeight": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "45%",
 "mode": "push",
 "minWidth": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.loadFromCurrentMediaPlayList(this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_AlbumPlayList, -1)",
 "paddingBottom": 0,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton94471"
 },
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 }
},
{
 "id": "component_330DBA83_14E3_C67C_414E_48CAF554A7EB",
 "iconURL": "skin/album_right.png",
 "transparencyActive": false,
 "right": 10,
 "minHeight": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "top": "45%",
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minWidth": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.loadFromCurrentMediaPlayList(this.album_37C3CA95_14A4_4784_41AE_B59A212FF628_AlbumPlayList, 1)",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton94472"
 },
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 }
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_0EC5DC61_13A4_42BC_419E_1BE9E0701DCC",
 "levels": [
  {
   "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_0EC42C61_13A4_42BC_41A9_474DD0857BC6",
 "levels": [
  {
   "url": "media/panorama_046CD8FD_13AC_4384_41A1_92BB19427772_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_0EC54C60_13A4_42BC_41B1_EEE31D5110D0",
 "levels": [
  {
   "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_0EC59C61_13A4_42BC_4192_F53C3B6BCC48",
 "levels": [
  {
   "url": "media/panorama_0A85B4D0_13AC_439C_4179_94B2BED086BC_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_0D011E1E_139D_BE84_41B3_075E2A7163C7",
 "levels": [
  {
   "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_0EC52C60_13A4_42BC_41B0_416968ADCD7A",
 "levels": [
  {
   "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_0EC56C60_13A4_42BC_419F_F69595C025B6",
 "levels": [
  {
   "url": "media/panorama_0B8ED484_13A7_C384_41AA_1ED0B6F468E3_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0E40D6B5_13E4_4F84_4196_EA5B3B7D5E09",
 "levels": [
  {
   "url": "media/panorama_18098A78_136C_468C_4167_75A37DD8A1AA_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_0EC40C61_13A4_42BC_418C_D16B146FF336",
 "levels": [
  {
   "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_0EC45C62_13A4_42BC_419F_F14AA301564D",
 "levels": [
  {
   "url": "media/panorama_0B33F1B5_13AC_C587_41AA_05C2DAFFF722_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 60,
 "mode": "toggle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "maxWidth": 60,
 "maxHeight": 60,
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 58,
 "mode": "push",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.shareTwitter(window.location.href)",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "verticalAlign": "middle",
 "maxWidth": 58,
 "maxHeight": 58,
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 58,
 "mode": "push",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.shareFacebook(window.location.href)",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "verticalAlign": "middle",
 "maxWidth": 58,
 "maxHeight": 58,
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "height": "100%",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.4,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "width": 50,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "IconButton",
 "bottom": "40%",
 "paddingLeft": 0,
 "top": "40%",
 "borderSize": 0,
 "mode": "push",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "verticalAlign": "middle",
 "maxWidth": 80,
 "maxHeight": 80,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container"
 },
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "90%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "height": "100%",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "width": 50,
 "transparencyActive": true,
 "right": 9,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "IconButton",
 "top": "40%",
 "bottom": "40%",
 "paddingLeft": 0,
 "borderSize": 0,
 "mode": "push",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "verticalAlign": "middle",
 "maxWidth": 50,
 "maxHeight": 50,
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "85%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "center",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "width": "50%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 50,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "vertical",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "gap": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "width": "25%",
 "minHeight": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "75%",
 "mode": "push",
 "minWidth": 50,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 140,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelFontStyle": "italic",
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "minHeight": 1,
 "itemMode": "normal",
 "itemThumbnailOpacity": 1,
 "width": "100%",
 "itemPaddingRight": 3,
 "itemMaxWidth": 1000,
 "itemMaxHeight": 1000,
 "paddingRight": 70,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "height": "92%",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "minWidth": 1,
 "shadow": false,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "paddingBottom": 70,
 "backgroundOpacity": 0,
 "itemBorderRadius": 0,
 "itemThumbnailBorderRadius": 0,
 "itemOpacity": 1,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": true,
 "verticalAlign": "middle",
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "horizontalAlign": "center",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "class": "ThumbnailGrid",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "borderSize": 0,
 "itemLabelFontSize": 16,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "bottom": -0.2,
 "itemLabelFontColor": "#666666",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailHeight": 125,
 "itemThumbnailScaleMode": "fit_outside",
 "gap": 26,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemHeight": 160,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemThumbnailWidth": 220,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "paddingRight": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "insetBorder": false,
 "shadow": false,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "WebFrame"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "width": "25%",
 "minHeight": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "75%",
 "mode": "push",
 "minWidth": 50,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "propagateClick": true,
 "data": {
  "name": "X"
 }
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 140,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "center",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 60,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "vertical",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "gap": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "transparencyActive": false,
 "width": "25%",
 "minHeight": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "75%",
 "mode": "push",
 "minWidth": 50,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "- Buttons set"
 },
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88",
  "this.Image_0A9ACA9D_13E5_C784_418F_F49A635BB668",
  "this.Image_33BF4AAB_13A4_C783_41A9_D44FF9C52F23",
  "this.Image_0D7347E7_13A5_CD84_41A1_5742F3C2F28A",
  "this.Image_0C82349C_13AC_4384_41A1_AFDCCAD1994E"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 40,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 40,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "height": "100%",
 "layout": "absolute",
 "paddingBottom": 40,
 "backgroundOpacity": 0.7,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 40,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "paddingTop": 0,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "minHeight": 1,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingRight": 0,
 "class": "Image",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "verticalAlign": "middle",
 "maxWidth": 2000,
 "maxHeight": 1000,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 60,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right",
 "shadow": false,
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "vertical",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 40,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "right": 20,
 "width": "100%",
 "minHeight": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "top": 20,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minWidth": 50,
 "height": "36.14%",
 "horizontalAlign": "right",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "verticalAlign": "top",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "transparencyActive": false,
 "right": 20,
 "width": "100%",
 "minHeight": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "top": 20,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minWidth": 50,
 "height": "36.14%",
 "horizontalAlign": "right",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "verticalAlign": "top",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 1,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "minWidth": 1,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "right": 20,
 "width": "10%",
 "minHeight": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "top": 20,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "minWidth": 50,
 "height": "10%",
 "horizontalAlign": "right",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "verticalAlign": "top",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "paddingTop": 0,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "width": "100%",
 "minHeight": 1,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "paddingRight": 0,
 "class": "Image",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "verticalAlign": "bottom",
 "maxWidth": 2000,
 "maxHeight": 1000,
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "5%",
 "horizontalAlign": "right",
 "shadow": false,
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 520,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "vertical",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 40,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 1"
 },
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Container_309C8DCD_14A4_5D84_41AF_91CE48D18A7C"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "26%",
 "bottom": "26%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-1"
 },
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-2"
 },
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-3"
 },
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-4"
 },
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-5"
 },
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-6"
 },
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "paddingTop": 0,
 "id": "Image_0A9ACA9D_13E5_C784_418F_F49A635BB668",
 "left": "0%",
 "width": "100%",
 "minHeight": 1,
 "url": "skin/Image_0A9ACA9D_13E5_C784_418F_F49A635BB668.jpg",
 "paddingRight": 0,
 "class": "Image",
 "borderSize": 0,
 "paddingLeft": 0,
 "top": "0.07%",
 "minWidth": 1,
 "height": "17.781%",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "maxWidth": 955,
 "maxHeight": 347,
 "propagateClick": false,
 "data": {
  "name": "Image31168"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "Image_33BF4AAB_13A4_C783_41A9_D44FF9C52F23",
 "left": "4.89%",
 "width": "21.659%",
 "minHeight": 1,
 "url": "skin/Image_33BF4AAB_13A4_C783_41A9_D44FF9C52F23.png",
 "paddingRight": 0,
 "class": "Image",
 "bottom": "7.47%",
 "paddingLeft": 0,
 "top": "83.02%",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.openLink('https://instagram.com/alencaroticas?utm_medium=copy_link', '_blank')",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "maxWidth": 1095,
 "maxHeight": 1095,
 "propagateClick": false,
 "data": {
  "name": "Image55726"
 }
},
{
 "paddingTop": 0,
 "id": "Image_0D7347E7_13A5_CD84_41A1_5742F3C2F28A",
 "left": "35.94%",
 "width": "23.041%",
 "minHeight": 1,
 "url": "skin/Image_0D7347E7_13A5_CD84_41A1_5742F3C2F28A.png",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "class": "Image",
 "bottom": "7.88%",
 "paddingLeft": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": "8.818%",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "maxWidth": 1092,
 "maxHeight": 1097,
 "propagateClick": false,
 "data": {
  "name": "Image56993"
 }
},
{
 "cursor": "hand",
 "paddingTop": 0,
 "id": "Image_0C82349C_13AC_4384_41A1_AFDCCAD1994E",
 "width": "23.963%",
 "right": "9.22%",
 "minHeight": 1,
 "url": "skin/Image_0C82349C_13AC_4384_41A1_AFDCCAD1994E.png",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "class": "Image",
 "bottom": "7.88%",
 "paddingLeft": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": "8.631%",
 "shadow": false,
 "click": "this.openLink('https://g.page/alencaroticas?share', '_blank')",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "maxWidth": 1000,
 "maxHeight": 1000,
 "propagateClick": false,
 "data": {
  "name": "Image57409"
 }
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "shadow": false,
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.32vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.89vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.89vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.45vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.45vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.45vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.45vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.63vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.45vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.45vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.77vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 180,
 "fontSize": "2.39vh",
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#04A3E1"
 ],
 "horizontalAlign": "center",
 "shadow": false,
 "label": "LOREM IPSUM",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.7,
 "rollOverBackgroundOpacity": 1,
 "layout": "horizontal",
 "gap": 5,
 "iconBeforeLabel": true,
 "borderRadius": 50,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold"
},
{
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "46%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.32vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.89vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.89vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "75%",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "rollOverBackgroundColor": [
  "#FF0000",
  "#000000"
 ],
 "width": "100%",
 "layout": "horizontal",
 "fontSize": "22px",
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "horizontal",
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000",
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 50,
 "rollOverBackgroundColorDirection": "vertical",
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#FF0000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "IN\u00cdCIO",
 "pressedBackgroundColorRatios": [
  0,
  0.8,
  1
 ],
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "paddingBottom": 0,
 "backgroundOpacity": 0.35,
 "rollOverBackgroundOpacity": 0.8,
 "pressedShadow": true,
 "gap": 5,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "pressedShadowColor": "#000000",
 "shadowSpread": 1,
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Panorama List"
 },
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "fontSize": "22px",
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "horizontal",
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#FF0000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "INTERIOR",
 "click": "this.setMediaBehaviour(this.playList_3309CA78_14E3_C68C_4151_9BEE7D8C7560, 0)",
 "paddingBottom": 0,
 "backgroundOpacity": 0.35,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 23,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Location"
 },
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "fontSize": "22px",
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "horizontal",
 "pressedLabel": "Inserdt Text",
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#FF0000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "\u00d3CULOS",
 "click": "this.showPopupMedia(this.window_37737FC7_14A4_5D84_4180_E8716368A12B, this.album_37C3CA95_14A4_4784_41AE_B59A212FF628, this.playList_3653E3B7_14A4_4584_41A9_2B1DEC698677, '90%', '90%', false, false)",
 "paddingBottom": 0,
 "backgroundOpacity": 0.35,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Floorplan"
 },
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "fontSize": 18,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "horizontal",
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#FF0000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "ESPECIAL DIA DOS PAIS",
 "click": "this.showPopupMedia(this.window_37F6FFEF_14A4_DD84_4197_C43BE621EB85, this.album_31424B9B_14A3_C58C_416B_53DC3DC56E15, this.playList_31A369C2_14AC_45FC_4196_F43B520FF0F4, '90%', '90%', false, false)",
 "paddingBottom": 0,
 "backgroundOpacity": 0.35,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_309C8DCD_14A4_5D84_41AF_91CE48D18A7C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "shadowSpread": 1,
 "width": "100%",
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 30,
 "fontColor": "#FFFFFF",
 "iconHeight": 30,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 5,
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "BACK",
 "rollOverFontSize": 18,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 8,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Main Entrance",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lobby",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 23,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "pressedLabel": "Reception",
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Reception",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Meeting Area 1",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Meeting Area 2",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Bar",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Chill Out",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Terrace",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Garden",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "shadowSpread": 1,
 "width": "100%",
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 30,
 "fontColor": "#FFFFFF",
 "iconHeight": 30,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 5,
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "BACK",
 "rollOverFontSize": 18,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 8,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 23,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "pressedLabel": "Lorem Ipsum",
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "shadowSpread": 1,
 "width": "100%",
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 30,
 "fontColor": "#FFFFFF",
 "iconHeight": 30,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 5,
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "BACK",
 "rollOverFontSize": 18,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 8,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 23,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "pressedLabel": "Lorem Ipsum",
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "shadowSpread": 1,
 "width": "100%",
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 30,
 "fontColor": "#FFFFFF",
 "iconHeight": 30,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 5,
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "BACK",
 "rollOverFontSize": 18,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 8,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 23,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "pressedLabel": "Lorem Ipsum",
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "shadowSpread": 1,
 "width": "100%",
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 30,
 "fontColor": "#FFFFFF",
 "iconHeight": 30,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 5,
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "BACK",
 "rollOverFontSize": 18,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 8,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 23,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "pressedLabel": "Lorem Ipsum",
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "shadowSpread": 1,
 "width": "100%",
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 30,
 "fontColor": "#FFFFFF",
 "iconHeight": 30,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 5,
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "BACK",
 "rollOverFontSize": 18,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverFontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 8,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 23,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "pressedLabel": "Lorem Ipsum",
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "fontSize": 18,
 "iconWidth": 32,
 "fontColor": "#FFFFFF",
 "iconHeight": 32,
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "height": 36,
 "mode": "push",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "label": "Lorem Ipsum",
 "pressedBackgroundColorRatios": [
  0
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "gap": 5,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true
},
{
 "paddingTop": 0,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "width": "25%",
 "minHeight": 1,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "class": "Image",
 "borderSize": 0,
 "paddingLeft": 0,
 "minWidth": 1,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "top",
 "maxWidth": 200,
 "maxHeight": 200,
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "width": "75%",
 "minHeight": 1,
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "paddingLeft": 10,
 "height": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.45vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.45vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.96vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.96vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.96vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.96vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "paddingRight": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "class": "Player",
 "defaultVRPointer": "laser",
 "borderSize": 0,
 "paddingLeft": 0,
 "downloadEnabled": false,
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "existsKey": function(key){  return key in window; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "gap": 10,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "verticalAlign": "top",
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
