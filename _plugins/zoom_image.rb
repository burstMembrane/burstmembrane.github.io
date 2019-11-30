module Jekyll
    class RenderZoomImage < Liquid::Tag
    
        def initialize(tag_name, path, tokens)
        super
        @imgpath = path
       
        end
       
        def render(context)
        "<div class='zoom-gallery>'> <a href=#{@imgpath} ><img src=#{@imgpath}></a></div>"
        end
    end
    end
    
    Liquid::Template.register_tag('zoom_image', Jekyll::RenderZoomImage)