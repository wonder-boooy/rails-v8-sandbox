source "https://rubygems.org"


gem "rails", "~> 8.1.2"                           # Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "propshaft"                                   # The modern asset pipeline for Rails [https://github.com/rails/propshaft]
gem "mysql2", "~> 0.5"                            # Use mysql as the database for Active Record
gem "puma", ">= 5.0"                              # Use the Puma web server [https://github.com/puma/puma]
gem "importmap-rails"                             # Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem "turbo-rails"                                 # Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "stimulus-rails"                              # Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "jbuilder"                                    # Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "tzinfo-data", platforms: %i[ windows jruby ] # Windows does not include zoneinfo files, so bundle the tzinfo-data gem

# gem "bcrypt", "~> 3.1.7" # Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]

gem "solid_cache" # Use the database-backed adapter for Rails.cache
gem "solid_queue" # Use the database-backed adapter for Active Job
gem "solid_cable" # Use the database-backed adapter for Action Cable

gem "bootsnap", require: false   # Reduces boot times through caching; required in config/boot.rb
gem "kamal", require: false      # Deploy this application anywhere as a Docker container [https://kamal-deploy.org]
gem "thruster", require: false   # Add HTTP asset caching/compression and X-Sendfile acceleration to Puma [https://github.com/basecamp/thruster/]
gem "image_processing", "~> 1.2" # Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]

group :development, :test do
  gem "debug", platforms: %i[ mri windows ], require: "debug/prelude" # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "bundler-audit", require: false                                 # Audits gems for known security defects (use config/bundler-audit.yml to ignore issues)
  gem "brakeman", require: false                                      # Static analysis for security vulnerabilities [https://brakemanscanner.org/]
  gem "rubocop-rails-omakase", require: false                         # Omakase Ruby styling [https://github.com/rails/rubocop-rails-omakase/]
end

group :development do
  gem "web-console" # Use console on exceptions pages [https://github.com/rails/web-console]
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
end
