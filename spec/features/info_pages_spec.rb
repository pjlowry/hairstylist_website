require 'spec_helper'

feature "clicking links" do 
  scenario 'click on contact' do
    visit "/"
    click_on "Contact"
    page.should have_content "477 North Santa Cruz Ave 
Los Gatos, CA"
  end
end


feature "home page carousel" do 
  scenario "view content" do
    visit "/"
    page.should have_content "I do"
  end
end
