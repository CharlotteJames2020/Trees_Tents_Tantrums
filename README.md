# Trees_Tents_Tantrums
## Description of My Project
```
The intention of this project is to eventually use it as a way to promote and add interest to a book, that may or may not get written, about my family's and another family's Thru-Hike of the Appalachian Trail. It consists of an About page, a Gallery, the footer has links to our Youtube channel and Facebook, and I plan to add a contact page. The About page doesn't contain any actual informational content as of now, but the goal is: the first/top section will give an overview of our thru-hike and what Trees Tents & Tantrums is, the second/bottom section will contain information exclusivly on the Appalachian Trail. "About the Appalachian Trail" is also where I'm using JavaScript in a modal of "Fun Trail Facts!".
```
## Custom CSS Classes
```
The Classes I created are:
1) .main-header
   This class adds padding to the top and bottom of the Header.
2) .changeWordColor 
   This class Changes the color of the words "Trees," "Tents," and "Tantrums" in the top About paragraph header.
3) .about_the_AT
    Changes font of the header
4) #group_img
    Width and Height to group image
5) #trail_info
    Adds margin to the "About the A.T." paragraph
6) .main-footer
    fixes footer to the bottom of the page, sets width to 100%, sets background-color, and margin and padding.
```
## Custom JavaScript Functions 
1) btn.onclick = function() {modal.style.display = "block";}
   When the user clicks on the button, it opens the modal.
 
2) span.onclick = function() {modal.style.display = "none";}
   When the user clicks on the (x), it closes the modal.

3) window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";}}
         This function makes clicking outside of the modal, closes it.



