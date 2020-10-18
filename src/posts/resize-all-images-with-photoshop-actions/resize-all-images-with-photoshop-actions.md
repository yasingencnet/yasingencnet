---
title: Resize All Images With Photoshop Actions
description: Resizing multiple images at once can be boring work. Adobe Photoshop helps us batch resize images.
date: 2020-10-18
tags:
  - Design
layout: layouts/post.njk
---

{{ description }}

Firstly, you have to make sure all the images you need to resize are in same folder.

<figure>
<img src="{{ metadata.assets.img }}image-folder.jpg" alt="Example image folder" loading="lazy">
</figure>

##### Step 1
Open up one of the images in your resize folder.

##### Step 2
Go to `Window > Action` panel. You'll see folder icon named `Create new set` at the bottom of the actions panel. Click it and choose a name for your new action. You can then choose whether you want. I named it "Resize It!".

<figure>
<img src="{{ metadata.assets.img }}action-panel.jpg" alt="Photoshop actions panel" loading="lazy">
</figure>

##### Step 3
After creating folder, you have to create a new action by clicking on the folded paper icon next to folder. Now your new action recording.

##### Step 4
Go to `Image > Resize` panel. Resize your image.

##### Step 5
Save your image over it. `File > Save As`.

##### Step 6
Stop recording. You're done!

<figure>
<img src="{{ metadata.assets.img }}action-panel-stop-recording.jpg" alt="Stop action recording" loading="lazy">
</figure>

##### Final Step

Now It's time to use your action. Go to `File > Automate > Batch`. Under the Batch settings select the set and action that you created. Then, choose the folder that you want to resize.
