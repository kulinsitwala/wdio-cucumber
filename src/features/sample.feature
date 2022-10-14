Feature: Google Feature
  @GoogleSearchSample
  Scenario: Google Test
    Given User launch google website
    Then User perform visual check on "Google Home".
    When User perform google search with "WebdriverIO"
    Then User perform visual check on "Google Home".
