require "obscura_linka/engine"
require "action_view"
module ObscuraLinka
end

module ActionView::Helpers::UrlHelper

  # Call obscura_link_to like a regular link_to
  # example: obuscra_link_to("My link", root_path)
  #
  # Output is <a herf="" data-href="obfuscated_link" class='obfuscated_link'>My link</a>
  #
  def obscura_link_to(name = nil, options = nil, html_options = nil, &block)
    html_options, options, name = options, name, block if block_given?

    url = options

    html_options ||= {}

    # obfuscate the url
    obfuscated_url = url.tr("A-Za-z", "N-ZA-Mn-za-m")

    html_options[:data] ||= {}
    html_options[:data][:href] = obfuscated_url
    html_options[:class] ||= ""
    html_options[:class] << " rot13_link"

    # put that obfuscated_url into a data attribute
    if block_given?
      link_to("", html_options, nil, &block)
    else
      link_to(name, "", html_options)
    end
  end
end