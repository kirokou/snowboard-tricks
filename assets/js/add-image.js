$(document).ready(function() {

    function addImage($containerImg) {
        const template = $containerImg.attr("data-prototype")
            .replace(/__name__label__/g, "")
            .replace(/__name__/g, indexImg);

        const $prototype = $(template);
        addDeleteLink($prototype);
        $containerImg.append($prototype);
        indexImg++;
    }

    function addDeleteLink($prototype) {
        const $deleteLink = $("<a href=\"javascript:void(0)\" class=\"btn btn-danger\">Supprimer</a>");
        $prototype.append($deleteLink);

        $deleteLink.click(function(e) {
            $prototype.remove();
            e.preventDefault();
            return false;
        });
    }

    const trickImages = $("div#trick_images");
    let indexImg = trickImages.find(":input").length;
    $("#add_image").click(function(e) {

        addImage(trickImages);
        e.preventDefault();
        return false;
    });
    if (indexImg === 0) {
        addImage(trickImages);

    } else {
        trickImages.children("div").each(function() {

            addDeleteLink($(this));
        });
    }

});
