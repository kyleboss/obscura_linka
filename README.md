This is a Rails Engine.  That adds a couple of things.

## Installation

This has only been tested on Rails 4.1.1

Add this line to your application's Gemfile:

    gem 'obscura_linka'

## Usage

```ruby
  # In the views
  # this link href will be obscured
  <%= obscura_link_to('my link', root_path) %>
```

```ruby
  # In the layout include obscura link to's javascripts
  <%= javascript_include_tag('obscura_linka/application') %>
```