require "rails_helper"

feature "foo", js: true do
  subject do
    visit "/#/"
  end

  context "bar" do
    it "shows the correct opening content" do
      subject
      expect(page).to have_content "Dashboard"
    end
  end
end
