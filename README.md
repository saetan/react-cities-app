# Choose the Cities

This is a react practice to make use of useState.

In this case I have created two state, one for the big image, and the other is for to have a border colour for currently selected small image.

Big Image is changed based on the target's src, and I just make use of the src and assign it to the big image src.

For the show border for currently selected, as of now I have 8 images, so I kinda hardcore the state with 8 false inside the state. Each time when we re-render, it will loop through this array as the isSelected attribute is being assigned based on this array. So when I select a thumbnail, I will change the array's index with the thumbnail's id. The thumbnail id is generated based on the image Array, so isSelect state array's index arrangement will always be the same as the thumbnail.

On thumbnail level, the component, I will have a check condition to see if it's selected then show the appropriate style.
