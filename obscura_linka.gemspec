$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "obscura_linka/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "obscura_linka"
  s.version     = ObscuraLinka::VERSION
  s.authors     = ["Austin Fonacier", "Kyle Boss", "Kunal Patel"]
  s.email       = ["austinrf@gmail.com"]
  s.homepage    = "http://github.com/austinrfnd/obscura_linka"
  s.summary     = "Obscure links"
  s.description = "Obscure links by creating and using link_to to move the rot13 the href to a data-attr.  And in an including JS take that data attribute un-rot 13 it and tell the browser to go to that link"

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.md"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.1.1"

  s.add_development_dependency "sqlite3"
end
