# aqua-effect
Aqua effect transform images(rounded), get position actually of the elements and calculate distance to generate collision


```
activateMovement(icon, width, height, id)

  icon = element ref
  width = position horizontal in the screen
  height = positon vertical in the screen
  id = id count
```
![Test Image 6](https://i.imgur.com/hn7drCw.png)

# Example use in the html element

```
  <div class="container-fluid">
        <div class="row">
            <img src="../../media/logo1.png" alt="" class="image-move image-width-500" onload="activateMovement(this, 2000, 10, 0)">
            <img src="../../media/logo2.png" alt="" class="image-move image-width-500" onload="activateMovement(this, 1800, 140, 1)">
            <img src="../../media/logo3.png" alt="" class="image-move image-width-400" onload="activateMovement(this, 1600, 240, 2)">
            <img src="../../media/logo4.png" alt="" class="image-move image-width-500" onload="activateMovement(this, 1300, 90, 3)">
            <img src="../../media/logo5.png" alt="" class="image-move image-width-500" onload="activateMovement(this, 900, 140, 4)">
            <img src="../../media/logo6.png" alt="" class="image-move image-width-400" onload="activateMovement(this, 600, 80, 5)">
            <img src="../../media/logo7.png" alt="" class="image-move image-width-500" onload="activateMovement(this, 300, 10, 6)">
            <img src="../../media/logo8.png" alt="" class="image-move image-width-image" onload="activateMovement(this, 700, 340, 7)">
            <img src="../../media/logo9.png" alt="" class="image-move image-width-400" onload="activateMovement(this, 1200, 240, 8)">
            <img src="../../media/logo10.png" alt="" class="image-move image-width-200" onload="activateMovement(this, 1500, 110, 9)">
            <img src="../../media/logo11.png" alt="" class="image-move image-width-image" onload="activateMovement(this, 100, 140, 10)">
            <img src="../../media/logo12.png" alt="" class="image-move image-width-400" onload="activateMovement(this, 900, 380, 11)">
            <img src="../../media/logo13.png" alt="" class="image-move image-width-500" onload="activateMovement(this, 100, 340, 12)">
            <img src="../../media/logo14.png" alt="" class="image-move image-width-200" onload="activateMovement(this, 300, 300, 13)">
            <img src="../../media/logo15.png" alt="" class="image-move image-width-500" onload="activateMovement(this, 1000, 0, 14)">
            <img src="../../media/logo16.png" alt="" class="image-move image-width-400" onload="activateMovement(this, 1900, 320, 15)">
        </div>
    </div>
```

# Styles

```
                          .image-width-500 {
                                max-width: 150px;
                                max-height: 150px;
                            }
                            
                            .image-width-200 {
                                max-width: 70px;
                                max-height: 70px;
                            }
                            
                            .image-width-400 {
                                max-width: 100px;
                                max-height: 100px;
                            }
                            
                            .image-width-image {
                                max-width: 130px;
                                max-height: 70px;
                            }
                            
```
