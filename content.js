chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            //===================================================================================================================================================================================================================================
            //Creates array of xmlFiles
            var xmlFiles = new Array()

            $('[title*=Moodle]').parent().parent().find('ul li').each(function () {
                xmlFiles.push({url : 'https://monash-panopto.aarnet.edu.au/Panopto/Podcast/Podcast.ashx?courseid=' + $(this).attr('id') + '&type=mp4', unitName: $(this).find('.name').attr('title')})
            
                
            })
            //console.log(xmlFiles)
            console.log(xmlFiles[1]['unitName'])


            //===================================================================================================================================================================================================================================
            //Creates array of unitNames





            //===================================================================================================================================================================================================================================
            //Creates array of mp4Links
            function getmp4() {
                var mp4Links = new Array();

                $.ajax({
                    url: 'https://monash-panopto.aarnet.edu.au/Panopto/Podcast/Podcast.ashx?courseid=54e1a1eb-5d7e-42e4-98a1-f46c37d4c2ac&type=mp4',
                    context: document.body
                }).done(function (data) {

                    $(data).find("[url*='mp4']").each(function () {
                        mp4Links.push($(this).attr('url'))
                    })
                    console.log(mp4Links)
                    $('#app').append("<div>"+ mp4Links[1]+ "</div>")

                    return mp4Links;
                });
            }



            //===================================================================================================================================================================================================================================
            // instanciate new tingle modal

            var modal = new tingle.modal({

                footer: true,
                stickyFooter: false,
                closeMethods: ['overlay', 'button', 'escape'],
                closeLabel: "Close",
                cssClass: ['custom-class-1', 'custom-class-2'],
                onOpen: function () {
                    console.log('modal open');
                },
                onClose: function () {
                    console.log('modal closed');
                },
                beforeClose: function () {
                    $('#changesubjects').css({
                        'display': 'table'
                    })
                    // here's goes some logic
                    // e.g. save content before closing the modal
                    return true; // close the modal
                    return false; // nothing happens
                },
            });


            //===================================================================================================================================================================================================================================
            // set content
            
            var modalString = ''
            modalString += '<div id="app"></div>'
            modal.setContent(modalString);

            //modal header
            $('#app').append("<div class='modal-header'><h2 class='logo'><img src='"+chrome.extension.getURL('icon.png')+"' class='icon' style='width:15px'> Your Panopto Downloader!</h2></div>")
            $('#app').append("<select class='js-example-basic-single' name='state'> <option value='AL'>Alabama</option>  ...<option value='WY'>Wyoming</option></select>" )
            // //modal content
            // function getmp4HTML() {
            //     modalString += ('<div> <table>')
            //     for (link of mp4Links) {
            //         modalString += (link)
            //     }
            //     modalString += ('</table> </div>')
            // }



            //===================================================================================================================================================================================================================================
            // add a button
            modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function () {
                // here goes some logic
                modal.close();
            });

            // add another button
            modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function () {
                // here goes some logic
                modal.close();
            });



            // open modal

            //===================================================================================================================================================================================================================================

            //open modal button
            $('<div><a href="#" id="changesubjects" style="position: absolute; width: 110px; height: 50px; top: 105%; left: 50%; background-color: #0C9; color: #FFF; border-radius: 25px; text-align: center; box-shadow: 2px 2px 3px #999; z-index: 1000" class="float"><div style="margin-top:17px">Open Extension</div></a><div>').insertBefore($('#createMenu'))
            $('#changesubjects').click(function () {
                modal.open()
                $('#changesubjects').css({
                    'display': 'none'
                }) //hides button when modal open
                getmp4()
            });
            //===================================================================================================================================================================================================================================


            // array of all subjects


            // select 2
            $(document).ready(function () {
                $('.js-example-basic-single').select2();
            });






















        }
    }, 10);
});












//following code makes paragraphs pink !!!!!!!

// var words = new Array()

// $('body').find('a').each(function () {
//     words.push($(this))
// })

// for (ele of words) {
//     ele.css({
//         "color": '#FF00FF'
//     });

// }