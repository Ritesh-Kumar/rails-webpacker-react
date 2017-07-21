require 'test_helper'

class AppDemoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get app_demo_index_url
    assert_response :success
  end

end
