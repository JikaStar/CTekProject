    Scenario Outline: Earning loyalty card points

        Given Michael is a Morning Freshness member
        When Michael purchases 1 <Sample Drink>
        Then he should earn <Points Earned> points

        Examples:
            | Drink Category    | Sample Drink               | Ponts Earned |
            | Regular smoothies | Banana smoothie            | 15           |
            | Fancy smoothie    | Three-Berry-Blend smoothie | 20           |
            | Tea               | Early Grey                 | 10           |
            | Coffee            | Cappuccino                 | 12           |