// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import { script } from "script";
import { loadMessages } from "load_messages";
import * as $ from "jquery";

script();

import "channels"
