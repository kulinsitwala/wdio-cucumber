Feature: Google Feature
  @GoogleSearchSample2
  Scenario: Google Test Three
    Given User launch google website
    Then User perform visual check on "Google Home".
    When User perform google search with "WebdriverIO"
    Then User perform visual check on "Web Driver IO Search Three".
