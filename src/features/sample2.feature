Feature: Google Feature 2
  @GoogleSearchSample2
  Scenario: Google Test Two
    Given User launch google website
    Then User perform visual check on "Google Home".
    When User perform google search with "WebdriverIO"
    Then User perform visual check on "WebDriverIO Search".
